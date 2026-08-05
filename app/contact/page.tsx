import type { Metadata } from "next";
import { Container, Label, PageHeader } from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { JsonLd } from "@/components/JsonLd";
import { graph, localBusinessSchema } from "@/lib/schema";
import { contact, hasDistinctSalesEmail, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact M/W Global Services Limited — request a quote for commodity export, mineral sourcing, goods import, freight forwarding or customs clearing.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const address = site.office.lines.join(", ");

  return (
    <>
      {/* The physical Abuja office — address and hours match what is rendered below. */}
      <JsonLd data={graph(localBusinessSchema)} />
      <PageHeader
        label="Contact"
        title="Let's talk about what you need moved"
        intro="Send an enquiry and our trade desk will respond within one business day. For time-sensitive shipments, call or message us directly."
        image="/images/containers-sunset.jpg"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* ── Details ───────────────────────────────────────────── */}
            <div className="lg:col-span-4">
              <Label>Direct contact</Label>

              <dl className="mt-8">
                <div className="border-b border-ink-900/10 py-5">
                  <dt className="text-[0.82rem] text-ink-500">Phone</dt>
                  <dd className="mt-1.5">
                    <a
                      href={contact.telHref}
                      className="display block text-[1.15rem] text-ink-900 hover:text-brand-700"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>

                <div className="border-b border-ink-900/10 py-5">
                  <dt className="text-[0.82rem] text-ink-500">Email</dt>
                  <dd className="mt-1.5">
                    {contact.email ? (
                      <a
                        href={`mailto:${contact.email}`}
                        className="display block text-[1.15rem] text-ink-900 hover:text-brand-700"
                      >
                        {contact.email}
                      </a>
                    ) : null}
                    {/* Only a second line when the trade desk is genuinely a
                        different address — otherwise it reads as a mistake. */}
                    {hasDistinctSalesEmail ? (
                      <a
                        href={`mailto:${contact.salesEmail}`}
                        className="text-[0.9rem] text-ink-500 hover:text-brand-700"
                      >
                        {contact.salesEmail} — trade desk
                      </a>
                    ) : null}
                  </dd>
                </div>

                <div className="border-b border-ink-900/10 py-5">
                  <dt className="text-[0.82rem] text-ink-500">
                    {site.office.label}
                  </dt>
                  <dd className="mt-1.5">
                    {site.office.lines.map((line) => (
                      <p
                        key={line}
                        className="text-[1rem] font-medium text-ink-900"
                      >
                        {line}
                      </p>
                    ))}
                  </dd>
                </div>

                <div className="border-b border-ink-900/10 py-5">
                  <dt className="text-[0.82rem] text-ink-500">
                    Business hours
                  </dt>
                  <dd className="mt-1.5 text-[1rem] font-medium text-ink-900">
                    {site.hours}
                  </dd>
                </div>
              </dl>

              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center border border-ink-900/25 px-6 py-3.5 text-[0.9rem] font-semibold text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-white"
              >
                Message us on WhatsApp
              </a>

              <div className="mt-8 overflow-hidden border border-ink-900/12 bg-white">
                <iframe
                  title={`Map showing the ${site.name} office at ${address}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`}
                  className="block h-72 w-full border-0 grayscale-[0.15]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-brand-700 hover:text-brand-800"
              >
                Open in Google Maps
              </a>
            </div>

            {/* ── Form ──────────────────────────────────────────────── */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div id="quote" className="scroll-mt-24">
                <QuoteForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
