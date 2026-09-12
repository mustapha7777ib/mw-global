import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Button,
  Check,
  Container,
  CtaBand,
  Label,
  PageHeader,
  SectionHeading,
} from "@/components/ui";
import { processSteps, services } from "@/lib/content";
import { contact } from "@/lib/site";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, localeHref, translator } from "@/lib/i18n";
import { alternatesFor } from "@/lib/i18n/metadata";

/** Falls back to the general address so the CTA never points at a dead mailbox. */
const tradeDeskEmail = contact.salesEmail ?? contact.email;

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/services">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  return {
    title: d.services.meta.title,
    description: d.services.meta.description,
    alternates: alternatesFor(lang, "/services"),
  };
}

export default async function ServicesPage({
  params,
}: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const tr = translator(lang);
  const d = getDictionary(lang);
  const href = (path: string) => localeHref(lang, path);

  return (
    <>
      <PageHeader
        label={d.services.headerLabel}
        title={d.services.headerTitle}
        intro={d.services.headerIntro}
        image="/images/ship-crane.jpg"
      />

      {/* ── Index ─────────────────────────────────────────────────────── */}
      <section className="border-b border-ink-900/10 bg-white">
        <Container>
          <nav
            className="flex flex-wrap gap-x-10 gap-y-3 py-6"
            aria-label={d.services.jumpLabel}
          >
            {services.map((service, i) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="group flex items-baseline gap-2.5 text-[0.92rem] font-medium text-ink-600 transition-colors hover:text-ink-900"
              >
                <span className="label text-crimson-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {tr(service.title)}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {/* ── Service detail ────────────────────────────────────────────── */}
      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-24 py-24 sm:py-28 ${i % 2 === 1 ? "bg-white" : ""}`}
        >
          <Container>
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div
                className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2 lg:col-start-8" : ""}`}
              >
                <div className="relative aspect-4/3 overflow-hidden bg-ink-100 lg:sticky lg:top-24 lg:aspect-3/4">
                  <Image
                    src={service.image}
                    alt={tr(service.title)}
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="photo object-cover"
                  />
                </div>
              </div>

              <div
                className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : "lg:col-start-7"}`}
              >
                <Label>{d.services.serviceNumber(String(i + 1).padStart(2, "0"))}</Label>
                <h2 className="display mt-5 text-[2rem] text-ink-900 sm:text-[2.4rem]">
                  {tr(service.title)}
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-[1.7] text-ink-700">
                  {tr(service.short)}
                </p>
                <p className="mt-4 text-[0.98rem] leading-[1.75] text-ink-600">
                  {tr(service.body)}
                </p>

                <h3 className="label mt-10 text-ink-500">{d.services.included}</h3>
                <ul className="mt-5">
                  {service.points.map((point) => (
                    <li
                      key={point.en}
                      className="flex items-start gap-4 border-b border-ink-900/10 py-3.5 text-[0.95rem] leading-[1.6] text-ink-700"
                    >
                      <Check className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-brand-700" />
                      {tr(point)}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button href={href("/contact#quote")} variant="outline">
                    {d.services.enquire} <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* ── Process ───────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <Image
          src="/images/containers-sunset.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="photo object-cover opacity-20"
        />
        <Container className="relative py-24 sm:py-28">
          <SectionHeading
            label={d.services.processLabel}
            title={d.services.processTitle}
            tone="light"
          />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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

      

      <CtaBand
        title={d.services.ctaTitle}
        intro={d.services.ctaIntro}
      >
        <Button href={href("/contact#quote")} variant="light">
          {d.services.ctaButton} <ArrowRight />
        </Button>
        {tradeDeskEmail ? (
          <Button href={`mailto:${tradeDeskEmail}`} variant="quiet">
            {d.services.ctaEmail}
          </Button>
        ) : null}
      </CtaBand>
    </>
  );
}
