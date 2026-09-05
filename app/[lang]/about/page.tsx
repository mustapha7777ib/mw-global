import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, localeHref, translator } from "@/lib/i18n";
import { alternatesFor } from "@/lib/i18n/metadata";
import {
  ArrowRight,
  Button,
  Container,
  CtaBand,
  Download,
  Label,
  PageHeader,
  SectionHeading,
} from "@/components/ui";
import { certifications, site } from "@/lib/site";
import { differentiators, markets } from "@/lib/content";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  return {
    title: d.about.meta.title,
    description: d.about.meta.description,
    alternates: alternatesFor(lang, "/about"),
  };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const tr = translator(lang);
  const d = getDictionary(lang);
  const href = (path: string) => localeHref(lang, path);

  return (
    <>
      <PageHeader
        label={d.about.headerLabel}
        title={d.about.headerTitle}
        intro={d.about.headerIntro}
        image="/images/farmer-field.jpg"
      />

      {/* ── Story ─────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                label={d.about.storyLabel}
                title={d.about.storyTitle}
              />
              <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.75] text-ink-600">
                {d.about.storyParagraphs(site.name, site.shortName).map(
                  (paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ),
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-4/5 overflow-hidden bg-ink-100">
                <img
                  src="/images/warehouse-cart.jpg"
                  alt={d.about.warehouseAlt}
                  className="photo h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Company details ───────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Label>{d.about.detailsLabel}</Label>
              <dl className="mt-8">
                {[
                  { label: d.about.detailRegisteredName, value: site.name },
                  { label: d.about.detailRc, value: site.rc },
                  {
                    label: tr(site.office.label),
                    value: site.office.lines[lang].join(", "),
                  },
                  // `ltr`: a phone number is a Latin-script run. Left to the
                  // page direction, Arabic bidi reorders it and the leading +
                  // lands at the wrong end — "+234 911 013 8293" renders as
                  // "8293 013 911 234+".
                  { label: d.about.detailPhone, value: site.phone, ltr: true },
                  { label: d.about.detailHours, value: tr(site.hours) },
                ].map(({ label, value, ltr }) => (
                  <div
                    key={label}
                    className="flex flex-wrap justify-between gap-x-8 gap-y-1 border-b border-ink-900/10 py-4"
                  >
                    <dt className="text-[0.92rem] text-ink-500">{label}</dt>
                    <dd
                      dir={ltr ? "ltr" : undefined}
                      className="text-[0.95rem] font-semibold text-ink-900"
                    >
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rule pt-8 lg:border-0 lg:pt-0">
              <Label>{d.about.missionLabel}</Label>
              <p className="display mt-5 text-[1.5rem] leading-[1.35] text-ink-900">
                {d.about.mission}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Certifications ────────────────────────────────────────────── */}
      {/*
        Anchored: the catalogue PDF and the footer both link buyers straight
        here, and certificates with a scan on file open as a PDF rather than
        asking them to send an email first.
      */}
      <section id="certifications" className="scroll-mt-24 py-24 sm:py-32">
        <Container>
          <SectionHeading
            label={d.about.certificationsLabel}
            title={d.about.certificationsTitle}
            intro={d.about.certificationsIntro}
          />
          <ul className="mt-12 grid gap-x-16 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <li key={cert.name} className="border-b border-ink-900/10 py-7">
                <div className="flex items-baseline gap-4">
                  <span className="label text-crimson-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display text-[1.3rem] text-ink-900">
                      {cert.name}
                    </h3>
                    <p className="label mt-2 text-brand-700">{cert.issuer}</p>
                  </div>
                </div>
                <div className="mt-3 ps-10">
                  <p className="text-[0.96rem] leading-[1.75] text-ink-600">
                    {tr(cert.description)}
                  </p>
                  {cert.reference ? (
                    <p className="mt-2 text-[0.88rem] text-ink-500">
                      {tr(cert.reference)}
                    </p>
                  ) : null}
                  {cert.file ? (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener"
                      className="label mt-4 inline-flex items-center gap-2 border-b border-brand-700/40 pb-1 text-brand-700 transition-colors hover:border-brand-700 hover:text-brand-800"
                    >
                      {d.about.viewCertificate} <Download />
                    </a>
                  ) : (
                    <p className="label mt-4 text-ink-400">
                      {d.about.certificateOnRequest}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Values ────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            label={d.about.valuesLabel}
            title={d.about.valuesTitle}
          />
          <dl className="mt-12 grid gap-x-16 sm:grid-cols-2">
            {d.about.values.map((value, i) => (
              <div key={value.title} className="border-b border-ink-900/10 py-7">
                <dt className="flex items-baseline gap-4">
                  <span className="label text-crimson-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-[1.3rem] text-ink-900">
                    {value.title}
                  </span>
                </dt>
                <dd className="mt-3 ps-10 text-[0.96rem] leading-[1.75] text-ink-600">
                  {value.text}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Approach + markets ────────────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                label={d.about.approachLabel}
                title={d.about.approachTitle}
              />
              <div className="mt-10 aspect-4/3 overflow-hidden bg-ink-100">
                <img
                  src="/images/port-cranes.jpg"
                  alt={d.about.portAlt}
                  className="photo h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <dl>
                {differentiators.map((item, i) => (
                  <div
                    key={item.title.en}
                    className={`border-b border-ink-900/10 py-7 ${i === 0 ? "border-t" : ""}`}
                  >
                    <dt className="display text-[1.3rem] text-ink-900">
                      {tr(item.title)}
                    </dt>
                    <dd className="mt-3 text-[0.96rem] leading-[1.75] text-ink-600">
                      {tr(item.text)}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12">
                <Label>{d.about.marketsServed}</Label>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {markets.map((market) => (
                    <span
                      key={market.region.en}
                      className="border border-ink-900/15 px-4 py-2 text-[0.88rem] font-medium text-ink-700"
                    >
                      {tr(market.region)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title={d.about.ctaTitle}
        intro={d.about.ctaIntro}
      >
        <Button href={href("/contact#quote")} variant="light">
          {d.about.ctaButton} <ArrowRight />
        </Button>
      </CtaBand>
    </>
  );
}
