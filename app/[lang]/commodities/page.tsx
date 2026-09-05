import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, localeHref, translator } from "@/lib/i18n";
import { alternatesFor } from "@/lib/i18n/metadata";
import {
  ArrowRight,
  Button,
  Container,
  CtaBand,
  Label,
  PageHeader,
  Plus,
} from "@/components/ui";
import { commodities } from "@/lib/content";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/commodities">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  return {
    title: d.commodities.meta.title,
    description: d.commodities.meta.description,
    alternates: alternatesFor(lang, "/commodities"),
  };
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default async function CommoditiesPage({
  params,
}: PageProps<"/[lang]/commodities">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const tr = translator(lang);
  const d = getDictionary(lang);
  const href = (path: string) => localeHref(lang, path);
  return (
    <>
      <PageHeader
        label={d.commodities.headerLabel}
        title={d.commodities.headerTitle}
        intro={d.commodities.headerIntro}
        image="/images/sesame.jpg"
      />

      <section className="border-b border-ink-900/10 bg-white">
        <Container>
          <nav
            className="flex flex-wrap gap-x-10 gap-y-3 py-6"
            aria-label={d.commodities.jumpLabel}
          >
            {commodities.map((group, i) => (
              <a
                key={group.category.en}
                href={`#${slugify(group.category.en)}`}
                className="flex items-baseline gap-2.5 text-[0.92rem] font-medium text-ink-600 transition-colors hover:text-ink-900"
              >
                <span className="label text-crimson-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {tr(group.category)}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {commodities.map((group, i) => (
        <section
          key={group.category.en}
          id={slugify(group.category.en)}
          className={`scroll-mt-24 py-24 sm:py-28 ${i % 2 === 1 ? "bg-white" : ""}`}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <Label>
                  {d.commodities.categoryNumber(String(i + 1).padStart(2, "0"))}
                </Label>
                <h2 className="display mt-5 text-[2rem] text-ink-900 sm:text-[2.3rem]">
                  {tr(group.category)}
                </h2>
                <p className="mt-4 text-[0.98rem] leading-[1.7] text-ink-600">
                  {tr(group.blurb)}
                </p>
                {group.items.some((item) => item.specs) ? (
                  <p className="mt-4 text-[0.82rem] text-ink-500">
                    {d.commodities.specsHint}
                  </p>
                ) : null}
                <div className="mt-8 aspect-4/3 overflow-hidden bg-ink-100">
                  <img
                    src={group.image}
                    alt={tr(group.category)}
                    className="photo h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {group.items.map((item) =>
                    item.specs ? (
                      <li
                        key={item.name.en}
                        className="border-b border-ink-900/10 sm:col-span-2"
                      >
                        <details className="group py-5">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden [&::-webkit-details-marker]:hidden">
                            <span className="display text-[1.15rem] text-ink-900">
                              {tr(item.name)}
                            </span>
                            <Plus className="shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-45" />
                          </summary>
                          <dl className="mt-5 grid gap-x-10 gap-y-0.5 border-t border-ink-900/8 pt-4 sm:grid-cols-2">
                            {item.specs.map((spec) => (
                              <div
                                key={spec.label.en}
                                className="flex justify-between gap-4 border-b border-ink-900/5 py-2 text-[0.86rem]"
                              >
                                <dt className="text-ink-500">{tr(spec.label)}</dt>
                                <dd className="text-end font-medium text-ink-900">
                                  {tr(spec.value)}
                                </dd>
                              </div>
                            ))}
                          </dl>
                          <p className="mt-3 text-[0.78rem] text-ink-400">
                            {d.commodities.indicativeNote}
                          </p>
                        </details>
                      </li>
                    ) : (
                      <li
                        key={item.name.en}
                        className="display border-b border-ink-900/10 py-5 text-[1.15rem] text-ink-900"
                      >
                        {tr(item.name)}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* ── Spec note ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="rule grid gap-8 pt-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="display text-[1.6rem] text-ink-900">
                {d.commodities.specTitle}
              </h2>
            </div>
            <div className="grid gap-6 text-[0.98rem] leading-[1.75] text-ink-600 sm:grid-cols-2 lg:col-span-8">
              {d.commodities.specParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title={d.commodities.ctaTitle}
        intro={d.commodities.ctaIntro}
      >
        <Button href={href("/contact#quote")} variant="light">
          {d.common.requestQuote} <ArrowRight />
        </Button>
      </CtaBand>
    </>
  );
}
