import Link from "next/link";
import {
  ArrowRight,
  Button,
  Container,
  CtaBand,
  Label,
  SectionHeading,
} from "@/components/ui";
import { site } from "@/lib/site";
import {
  commodities,
  differentiators,
  markets,
  processSteps,
  services,
} from "@/lib/content";

export default function HomePage() {
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
              We move African goods
              <br className="hidden sm:block" /> to world markets.
            </h1>
            <p className="mt-7 max-w-lg text-[1.125rem] leading-[1.65] text-white/80">
              Agricultural commodities, solid minerals and industrial imports —
              sourced, shipped and cleared by one accountable team.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact#quote" variant="light">
                Request a Quote <ArrowRight />
              </Button>
              <Button href="/commodities" variant="quiet">
                View Commodities
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
              <Label>Who we are</Label>
              <p className="display mt-6 text-[1.75rem] leading-[1.3] text-ink-900 sm:text-[2.1rem]">
                Good trade comes down to who you buy from. We built the
                supplier relationships first, and the rest follows from there.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-5 text-[1.0625rem] leading-[1.75] text-ink-600">
                <p>
                  Before expanding into international trade, 
                  M/W Global Services Limited was established with a simple goal: 
                  to build reliable sourcing networks and source clients with 
                  quality products. 
                </p>
                <p>
                  We are committed to professionalism, transparency, 
                  and delivering products that meet our customers' requirements 
                  through strong partnerships and careful supplier selection.
                </p>
              </div>
              <div className="rule mt-9 pt-7">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 text-[0.95rem] font-semibold text-brand-700 transition-colors hover:text-brand-800"
                >
                  More about the company <ArrowRight />
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
            label="What we do"
            title="Four service lines, one accountable partner"
            intro="Most trade problems happen in the handoffs — between the supplier and the inspector, the freight agent and the customs broker. We run all four lines ourselves, so the handoffs are ours to manage."
          />

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group block"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-ink-100">
                  <img
                    src={service.image}
                    alt=""
                    className="photo h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-0 top-0 bg-brand-700 px-3.5 py-2 text-[0.72rem] font-bold tracking-[0.12em] text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="display mt-6 text-[1.4rem] text-ink-900 transition-colors group-hover:text-brand-700">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-[1.7] text-ink-600">
                  {service.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-crimson-600">
                  Learn more <ArrowRight />
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
              label="What we trade"
              title="Products we source and supply"
            />
            <Link
              href="/commodities"
              className="inline-flex shrink-0 items-center gap-2.5 pb-2 text-[0.95rem] font-semibold text-brand-700 hover:text-brand-800"
            >
              Full catalogue <ArrowRight />
            </Link>
          </div>

          <div className="mt-16 space-y-16">
            {commodities.map((group, i) => (
              <div
                key={group.category}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
              >
                <div
                  className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2 lg:col-start-8" : ""}`}
                >
                  <div className="aspect-5/4 overflow-hidden bg-ink-100">
                    <img
                      src={group.image}
                      alt={group.category}
                      className="photo h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div
                  className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}
                >
                  <h3 className="display text-[1.7rem] text-ink-900">
                    {group.category}
                  </h3>
                  <p className="mt-3 max-w-lg text-[0.98rem] leading-[1.7] text-ink-600">
                    {group.blurb}
                  </p>
                  <ul className="rule mt-7 grid gap-x-8 pt-2 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="border-b border-ink-900/8 py-3 text-[0.95rem] font-medium text-ink-800"
                      >
                        {item.name}
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
            label="How we work"
            title="From first enquiry to documents in hand"
            tone="light"
          />
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step) => (
              <li key={step.step} className="rule-light pt-6">
                <span className="display block text-[2.2rem] text-crimson-400">
                  {step.step}
                </span>
                <h3 className="mt-3 text-[1.05rem] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-[1.7] text-white/65">
                  {step.text}
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
                label="Why M/W Global"
                title="What clients tell us they value"
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
                    key={item.title}
                    className={`border-b border-ink-900/10 py-8 ${i === 0 ? "border-t" : ""}`}
                  >
                    <dt className="flex items-baseline gap-4">
                      <span className="label text-crimson-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display text-[1.35rem] text-ink-900">
                        {item.title}
                      </span>
                    </dt>
                    <dd className="mt-3 pl-10 text-[0.98rem] leading-[1.75] text-ink-600">
                      {item.text}
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
              <SectionHeading label="Markets we serve" title="Where our cargo lands" />
            </div>
            <div className="lg:col-span-8">
              <dl className="grid gap-x-10 sm:grid-cols-2">
                {markets.map((market) => (
                  <div
                    key={market.region}
                    className="border-b border-ink-900/10 py-6"
                  >
                    <dt className="display text-[1.25rem] text-ink-900">
                      {market.region}
                    </dt>
                    <dd className="mt-2 text-[0.92rem] leading-[1.65] text-ink-500">
                      {market.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Tell us the spec. We'll come back with a price."
        intro="Send the product, grade, volume and destination and we will come back to you with an offer."
      >
        <Button href="/contact#quote" variant="light">
          Request a Quote <ArrowRight />
        </Button>
        <Button
          href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
          variant="quiet"
        >
          {site.phone}
        </Button>
      </CtaBand>
    </>
  );
}
