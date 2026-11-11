import { NextResponse } from "next/server";
import { Resend } from "resend";
import { confirmed, site, siteUrl } from "@/lib/site";

/**
 * Quote enquiry endpoint — delivers the enquiry to the trade desk by email.
 *
 * Required environment variable:
 *   RESEND_API_KEY     from https://resend.com/api-keys
 *
 * Optional overrides:
 *   QUOTE_TO_EMAIL     where enquiries land   (default: the address in site.ts)
 *   QUOTE_FROM_EMAIL   the sending identity   (default: enquiries@<site domain>)
 *
 * The sending domain must be verified in Resend before `from` will be accepted.
 *
 * This route never reports success it cannot back up. If delivery fails, the
 * visitor is told to call or email instead — a false "Enquiry received" costs
 * a real customer, so a visible error is the better failure.
 */

const TO_EMAIL =
  process.env.QUOTE_TO_EMAIL ??
  confirmed(site.salesEmail) ??
  confirmed(site.email);

const FROM_EMAIL =
  process.env.QUOTE_FROM_EMAIL ?? `enquiries@${new URL(siteUrl).hostname}`;

/** Shown to the visitor whenever the enquiry could not be delivered. */
const FALLBACK_CONTACT = `We could not send your enquiry just now. Please email ${
  TO_EMAIL ?? "us"
} or call ${site.phone} and we will pick it up straight away.`;

type QuotePayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  destination?: string;
  message?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** The enquiry is attacker-controlled text landing in an HTML email. */
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

/** Keep newlines and control characters out of the Subject line. */
function singleLine(value: string): string {
  return value.replace(/[\r\n\t]+/g, " ").trim();
}

export async function POST(request: Request) {
  let data: QuotePayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: a filled hidden field means a bot submitted the form. Return a
  // success response so the bot does not learn it was filtered.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and enquiry details are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Enquiry is too long. Please keep it under 5000 characters." },
      { status: 400 },
    );
  }

  const now = new Date();
  const enquiry = {
    receivedAt: now.toISOString(),
    name,
    email,
    company: data.company?.trim() || null,
    phone: data.phone?.trim() || null,
    service: data.service?.trim() || null,
    destination: data.destination?.trim() || null,
    message,
  };

  const apiKey = process.env.RESEND_API_KEY;

  // Misconfiguration, not a visitor mistake. Log loudly so it shows up in the
  // function logs, and still refuse to claim the enquiry was received.
  if (!apiKey || !TO_EMAIL) {
    console.error(
      "[quote] not delivered — %s is not set. Enquiry follows:",
      !apiKey ? "RESEND_API_KEY" : "a destination address",
      enquiry,
    );
    return NextResponse.json({ error: FALLBACK_CONTACT }, { status: 503 });
  }

  // The ISO stamp stays in the logged enquiry; the email shows Lagos time,
  // e.g. "11 Nov 2026, 09:18 WAT".
  const receivedLocal = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now) + " WAT";

  const fields: [string, string][] = [
    ["Name", enquiry.name],
    ["Company", enquiry.company ?? "—"],
    ["Email", enquiry.email],
    ["Phone", enquiry.phone ?? "—"],
    ["Service", enquiry.service ?? "—"],
    ["Destination", enquiry.destination ?? "—"],
  ];

  const text = [
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "Enquiry:",
    enquiry.message,
    "",
    `Received ${receivedLocal} via ${siteUrl}/contact`,
  ].join("\n");

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;color:#0a0b0a;max-width:640px">
      <h2 style="margin:0 0 4px;font-size:18px">New quote enquiry</h2>
      <p style="margin:0 0 20px;color:#5c625d;font-size:13px">
        ${escapeHtml(site.name)} &middot; ${escapeHtml(receivedLocal)}
      </p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;font-size:14px">
        ${fields
          .map(
            ([label, value]) => `
        <tr>
          <td style="padding:7px 14px 7px 0;color:#5c625d;white-space:nowrap;vertical-align:top">${escapeHtml(label)}</td>
          <td style="padding:7px 0;font-weight:600">${escapeHtml(value)}</td>
        </tr>`,
          )
          .join("")}
      </table>
      <p style="margin:22px 0 6px;color:#5c625d;font-size:13px">Enquiry</p>
      <div style="border-left:3px solid #15653e;padding:2px 0 2px 14px;white-space:pre-wrap;font-size:14px;line-height:1.6">${escapeHtml(enquiry.message)}</div>
      <p style="margin:24px 0 0;color:#8b918c;font-size:12px">
        Sent from the quote form at ${escapeHtml(siteUrl)}/contact. Reply directly to reach ${escapeHtml(enquiry.name)}.
      </p>
    </div>`;

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: `${site.shortName} Website <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      // Replying in the mail client reaches the enquirer, not the website.
      replyTo: enquiry.email,
      subject: singleLine(
        `Quote enquiry — ${enquiry.name}${enquiry.company ? ` · ${enquiry.company}` : ""}`,
      ),
      text,
      html,
    });

    // The SDK reports failures on the response rather than throwing.
    if (error) {
      console.error("[quote] Resend rejected the send:", error, enquiry);
      return NextResponse.json({ error: FALLBACK_CONTACT }, { status: 502 });
    }
  } catch (cause) {
    // Network failure, DNS, timeout — the enquiry is logged so it is at least
    // recoverable from the function logs.
    console.error("[quote] delivery threw:", cause, enquiry);
    return NextResponse.json({ error: FALLBACK_CONTACT }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
