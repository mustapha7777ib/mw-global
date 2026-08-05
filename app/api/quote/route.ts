import { NextResponse } from "next/server";

/**
 * Quote enquiry endpoint.
 *
 * Right now this validates the submission and logs it to the server console —
 * nothing is emailed or stored yet. To make enquiries actually reach you, pick
 * one of these and add it where marked TODO below:
 *
 *   1. Email  — `npm i resend`, set RESEND_API_KEY, then:
 *        await new Resend(process.env.RESEND_API_KEY).emails.send({
 *          from: "site@yourdomain.com",
 *          to: "trade@yourdomain.com",
 *          subject: `Quote enquiry — ${data.name}`,
 *          text: JSON.stringify(data, null, 2),
 *        });
 *
 *   2. Database — write to Postgres/Supabase/Airtable.
 *
 *   3. Notification — POST to a Slack or Teams incoming webhook.
 */

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

  const enquiry = {
    receivedAt: new Date().toISOString(),
    name,
    email,
    company: data.company?.trim() || null,
    phone: data.phone?.trim() || null,
    service: data.service?.trim() || null,
    destination: data.destination?.trim() || null,
    message,
  };

  // TODO: replace this log with a real delivery mechanism (see header comment).
  console.log("[quote enquiry]", enquiry);

  return NextResponse.json({ ok: true });
}
