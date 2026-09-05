import type { Metadata } from "next";
import { Container, Label, PageHeader } from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { services } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { graph, localBusinessSchema } from "@/lib/schema";
import { contact, hasDistinctSalesEmail, site } from "@/lib/site";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, translator } from "@/lib/i18n";
import { alternatesFor } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  return {
    title: d.contact.meta.title,
    description: d.contact.meta.description,
    alternates: alternatesFor(lang, "/contact"),
  };
}

export default async function ContactPage({
  params,
}: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const tr = translator(lang);
  const d = getDictionary(lang);
  // The map query stays in Latin script whatever the page language: it is what
  // Google Maps geocodes against.
  const address = site.office.mapQuery;

  return (
    <>
      {/* The physical Abuja office — address and hours match what is rendered below. */}
      <JsonLd data={graph(localBusinessSchema(lang))} />
      <PageHeader
        label={d.contact.headerLabel}
        title={d.contact.headerTitle}
        intro={d.contact.headerIntro}
        image="/images/containers-sunset.jpg"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* ── Details ───────────────────────────────────────────── */}
            <div className="lg:col-span-4">
              <Label>{d.contact.directContact}</Label>

              <dl className="mt-8">
                <div className="border-b border-ink-900/10 py-5">
                  <dt className="text-[0.82rem] text-ink-500">{d.contact.phone}</dt>
                  <dd className="mt-1.5">
                    <a
                      href={contact.telHref}
                      dir="ltr"
                      className="display block text-[1.15rem] text-ink-900 hover:text-brand-700"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>

                <div className="border-b border-ink-900/10 py-5">
                  <dt className="text-[0.82rem] text-ink-500">{d.contact.email}</dt>
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
                        {contact.salesEmail} — {d.contact.tradeDeskSuffix}
                      </a>
                    ) : null}
                  </dd>
                </div>

                <div className="border-b border-ink-900/10 py-5">
                  <dt className="text-[0.82rem] text-ink-500">
                    {tr(site.office.label)}
                  </dt>
                  <dd className="mt-1.5">
                    {site.office.lines[lang].map((line) => (
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
                    {d.contact.hours}
                  </dt>
                  <dd className="mt-1.5 text-[1rem] font-medium text-ink-900">
                    {tr(site.hours)}
                  </dd>
                </div>
              </dl>

              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center border border-ink-900/25 px-6 py-3.5 text-[0.9rem] font-semibold text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-white"
              >
                {d.contact.whatsapp}
              </a>

              <div className="mt-8 overflow-hidden border border-ink-900/12 bg-white">
                <iframe
                  title={d.contact.mapTitle(site.name, address)}
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
                {d.contact.openInMaps}
              </a>
            </div>

            {/* ── Form ──────────────────────────────────────────────── */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div id="quote" className="scroll-mt-24">
                <QuoteForm
                  copy={d.form}
                  serviceOptions={services.map((service) => ({
                    // The value stays English whatever the visitor is reading:
                    // it lands in the trade desk's inbox, and an enquiry that
                    // names its service line in Arabic is harder to triage.
                    value: service.title.en,
                    label: tr(service.title),
                  }))}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
