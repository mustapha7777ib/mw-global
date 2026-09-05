import type { Metadata } from "next";
import {
  Button,
  Container,
  CtaBand,
  Download,
  Label,
  PageHeader,
} from "@/components/ui";
import { commodities, markets, services } from "@/lib/content";
import { catalogueFor, site } from "@/lib/site";
import { notFound } from "next/navigation";
import {
  getDictionary,
  isLocale,
  localeHref,
  t,
  translator,
} from "@/lib/i18n";
import { alternatesFor } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/catalogue">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  return {
    title: d.catalogue.meta.title,
    description: d.catalogue.meta.description,
    alternates: alternatesFor(lang, "/catalogue"),
  };
}

// Computed from the same data the rest of the site renders from, so this
// page can't drift out of step with what's actually on the commodities,
// services and homepage pages — even as those lists change over time.
const commodityLineCount = commodities.reduce(
  (sum, group) => sum + group.items.length,
  0,
);
// Counted from the English list: it is a count of places, identical in both
// languages, and only the English string is guaranteed to use ", " as its
// separator.
const marketCount = markets.reduce(
  (sum, market) => sum + market.detail.en.split(", ").length,
  0,
);

export default async function CataloguePage({
  params,
}: PageProps<"/[lang]/catalogue">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const tr = translator(lang);
  const d = getDictionary(lang);
  const href = (path: string) => localeHref(lang, path);
  const catalogue = catalogueFor(lang);

  const stats = [
    { value: String(services.length).padStart(2, "0"), label: d.catalogue.statServiceLines },
    { value: String(commodityLineCount).padStart(2, "0"), label: d.catalogue.statCommodityLines },
    { value: String(marketCount).padStart(2, "0"), label: d.catalogue.statDestinations },
    { value: String(markets.length).padStart(2, "0"), label: d.catalogue.statRegions },
  ];

  return (
    <>
      <PageHeader
        label={d.catalogue.headerLabel}
        title={catalogue.label}
        intro={d.catalogue.headerIntro}
        image="/images/grain-sacks.jpg"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* ── Download card ─────────────────────────────────────────── */}
            <div className="lg:col-span-4">
              <div className="border border-ink-900/12 bg-white p-8">
                <Label>{d.catalogue.downloadLabel}</Label>
                <p className="display mt-5 text-[1.3rem] text-ink-900">
                  {catalogue.label}
                </p>
                <p className="mt-3 text-[0.9rem] text-ink-500">
                  {d.catalogue.fileMeta(
                    catalogue.pages,
                    catalogue.fileSize,
                  )}
                </p>
                <Button
                  href={catalogue.href}
                  download={catalogue.downloadAs}
                  className="mt-7 w-full"
                >
                  {d.common.downloadPdf} <Download />
                </Button>
                <p className="mt-5 text-[0.82rem] leading-[1.6] text-ink-500">
                  {d.catalogue.disclaimer}
                </p>
              </div>
            </div>

            {/* ── What's inside ─────────────────────────────────────────── */}
            <div className="lg:col-span-7 lg:col-start-6">
              <Label>{d.catalogue.insideLabel}</Label>
              <h2 className="display mt-5 text-[2rem] text-ink-900 sm:text-[2.3rem]">
                {d.catalogue.insideTitle}
              </h2>
              <dl className="mt-8">
                {d.catalogue.contents.map((item, i) => (
                  <div
                    key={item.title}
                    className={`border-b border-ink-900/10 py-7 ${i === 0 ? "border-t" : ""}`}
                  >
                    <dt className="flex items-baseline gap-3">
                      <span className="label text-crimson-600">
                        {item.label}
                      </span>
                      <span className="display text-[1.2rem] text-ink-900">
                        {item.title}
                      </span>
                    </dt>
                    <dd className="mt-2 text-[0.96rem] leading-[1.75] text-ink-600">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats band ─────────────────────────────────────────────────── */}
      <section className="bg-brand-900 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="display text-[2.4rem] text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-[0.85rem] text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title={d.catalogue.ctaTitle}
        intro={d.catalogue.ctaIntro}
      >
        <Button href={href("/contact#quote")} variant="light">
          {d.common.requestQuote}
        </Button>
      </CtaBand>
    </>
  );
}
