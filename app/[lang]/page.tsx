import Link from "next/link";
import {
  ArrowRight,
  Button,
  Container,
  CtaBand,
  Download,
  Label,
  SectionHeading,
} from "@/components/ui";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contact, site } from "@/lib/site";
import { getDictionary, isLocale, localeHref, translator, t } from "@/lib/i18n";
import { alternatesFor } from "@/lib/i18n/metadata";
import {
  commodities,
  differentiators,
  markets,
  processSteps,
  services,
} from "@/lib/content";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  return {
    description: d.home.meta.description,
    alternates: alternatesFor(lang, "/"),
  };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const tr = translator(lang);
  const d = getDictionary(lang);
  const href = (path: string) => localeHref(lang, path);
  const catalogue = site.catalogue[lang];

  return (
    <>
      {/* ── Hero: full-bleed port photograph ──────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <img
          src="/images/hero-port.jpg"
          alt="Aerial view of shipping containers stacked at a working port"
          className="photo absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-brand-950 via-brand-950/80 to-transparent"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="max-w-3xl py-28 sm:py-36 lg:py-44">
            <h1 className="display mt-7 text-[2.6rem] text-white sm:text-[3.4rem] lg:text-[4rem]">
              {d.home.heroTitleLineOne}
              <br className="hidden sm:block" /> {d.home.heroTitleLineTwo}
            </h1>
            <p className="mt-7 max-w-lg text-[1.125rem] leading-[1.65] text-white/80">
              {d.home.heroIntro}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={href("/contact#quote")} variant="light">
                {d.common.requestQuote} <ArrowRight />
              </Button>
              <Button href={href("/commodities")} variant="quiet">
                {d.home.viewCommodities}
              </Button>
            </div>
          </div>
        </Container>

      </section>

      {/* ── Intro statement ───────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Label>{d.home.introLabel}</Label>
              <p className="display mt-6 text-[1.75rem] leading-[1.3] text-ink-900 sm:text-[2.1rem]">
                {d.home.introStatement}
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-5 text-[1.0625rem] leading-[1.75] text-ink-600">
                {d.home.introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="rule mt-9 pt-7">
                <Link
                  href={href("/about")}
                  className="inline-flex items-center gap-2.5 text-[0.95rem] font-semibold text-brand-700 transition-colors hover:text-brand-800"
                >
                  {d.home.moreAboutCompany} <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Services: photographic, alternating ───────────────────────── */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading
            label={d.home.servicesLabel}
            title={d.home.servicesTitle}
            intro={d.home.servicesIntro}
          />

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={href(`/services#${service.slug}`)}
                className="group block"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-ink-100">
                  <img
                    src={service.image}
                    alt=""
                    className="photo h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute start-0 top-0 bg-brand-700 px-3.5 py-2 text-[0.72rem] font-bold tracking-[0.12em] text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="display mt-6 text-[1.4rem] text-ink-900 transition-colors group-hover:text-brand-700">
                  {tr(service.title)}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-[1.7] text-ink-600">
                  {tr(service.short)}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-crimson-600">
                  {d.common.learnMore} <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Commodities: photo left, list right ───────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              label={d.home.commoditiesLabel}
              title={d.home.commoditiesTitle}
            />
            <Link
              href={href("/commodities")}
              className="inline-flex shrink-0 items-center gap-2.5 pb-2 text-[0.95rem] font-semibold text-brand-700 hover:text-brand-800"
            >
              {d.home.fullCatalogue} <ArrowRight />
            </Link>
          </div>

          <div className="mt-16 space-y-16">
            {commodities.map((group, i) => (
              <div
                key={group.category.en}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
              >
                <div
                  className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2 lg:col-start-8" : ""}`}
                >
                  <div className="aspect-5/4 overflow-hidden bg-ink-100">
                    <img
                      src={group.image}
                      alt={tr(group.category)}
                      className="photo h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div
                  className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}
                >
                  <h3 className="display text-[1.7rem] text-ink-900">
                    {tr(group.category)}
                  </h3>
                  <p className="mt-3 max-w-lg text-[0.98rem] leading-[1.7] text-ink-600">
                    {tr(group.blurb)}
                  </p>
                  <ul className="rule mt-7 grid gap-x-8 pt-2 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name.en}
                        className="border-b border-ink-900/8 py-3 text-[0.95rem] font-medium text-ink-800"
                      >
                        {tr(item.name)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Process over photograph ───────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <img
          src="/images/containers-sunset.jpg"
          alt=""
          aria-hidden="true"
          className="photo absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <Container className="relative py-24 sm:py-32">
          <SectionHeading
            label={d.home.processLabel}
            title={d.home.processTitle}
            tone="light"
          />
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step) => (
              <li key={step.step} className="rule-light pt-6">
                <span className="display block text-[2.2rem] text-crimson-400">
                  {step.step}
                </span>
                <h3 className="mt-3 text-[1.05rem] font-semibold text-white">
                  {tr(step.title)}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-[1.7] text-white/65">
                  {tr(step.text)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Differentiators ───────────────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                label={d.home.differentiatorsLabel}
                title={d.home.differentiatorsTitle}
              />
              <div className="mt-10 aspect-square overflow-hidden bg-ink-100">
                <img
                  src="/images/freight-truck.jpg"
                  alt="Freight truck on a road between fields"
                  className="photo h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <dl>
                {differentiators.map((item, i) => (
                  <div
                    key={item.title.en}
                    className={`border-b border-ink-900/10 py-8 ${i === 0 ? "border-t" : ""}`}
                  >
                    <dt className="flex items-baseline gap-4">
                      <span className="label text-crimson-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display text-[1.35rem] text-ink-900">
                        {tr(item.title)}
                      </span>
                    </dt>
                    <dd className="mt-3 ps-10 text-[0.98rem] leading-[1.75] text-ink-600">
                      {tr(item.text)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Markets ───────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                label={d.home.marketsLabel}
                title={d.home.marketsTitle}
              />
            </div>
            <div className="lg:col-span-8">
              <dl className="grid gap-x-10 sm:grid-cols-2">
                {markets.map((market) => (
                  <div
                    key={market.region.en}
                    className="border-b border-ink-900/10 py-6"
                  >
                    <dt className="display text-[1.25rem] text-ink-900">
                      {tr(market.region)}
                    </dt>
                    <dd className="mt-2 text-[0.92rem] leading-[1.65] text-ink-500">
                      {tr(market.detail)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Catalogue download ────────────────────────────────────────── */}
      <section className="border-t border-ink-900/10 bg-white py-16">
        <Container>
          <div className="flex flex-col items-start gap-8 border border-ink-900/12 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-xl">
              <Label>{d.home.catalogueBandLabel}</Label>
              <h2 className="display mt-4 text-[1.5rem] text-ink-900 sm:text-[1.75rem]">
                {catalogue.label}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-[1.7] text-ink-600">
                {d.home.catalogueBandText(
                  catalogue.pages,
                  catalogue.fileSize,
                )}
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href={catalogue.href}
                download={catalogue.downloadAs}
              >
                {d.common.downloadPdf} <Download />
              </Button>
              <Button href={href("/catalogue")} variant="outline">
                {d.home.viewCataloguePage}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title={d.home.ctaTitle}
        intro={d.home.ctaIntro}
      >
        <Button href={href("/contact#quote")} variant="light">
          {d.common.requestQuote} <ArrowRight />
        </Button>
        <Button href={contact.telHref} variant="quiet" dir="ltr">
          {site.phone}
        </Button>
      </CtaBand>
    </>
  );
}
