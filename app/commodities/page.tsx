import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Commodities",
  description:
    "Agricultural commodities, solid minerals and imported industrial goods traded by M/W Global Services Limited, with indicative specifications.",
  alternates: { canonical: "/commodities" },
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function CommoditiesPage() {
  return (
    <>
      <PageHeader
        label="Commodities"
        title="What we source, ship and supply"
        intro="These are the products we handle most often. Grade, packaging and volume are agreed with the buyer and fixed in the sales contract."
        image="/images/sesame.jpg"
      />

      <section className="border-b border-ink-900/10 bg-white">
        <Container>
          <nav
            className="flex flex-wrap gap-x-10 gap-y-3 py-6"
            aria-label="Jump to a category"
          >
            {commodities.map((group, i) => (
              <a
                key={group.category}
                href={`#${slugify(group.category)}`}
                className="flex items-baseline gap-2.5 text-[0.92rem] font-medium text-ink-600 transition-colors hover:text-ink-900"
              >
                <span className="label text-crimson-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {group.category}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {commodities.map((group, i) => (
        <section
          key={group.category}
          id={slugify(group.category)}
          className={`scroll-mt-24 py-24 sm:py-28 ${i % 2 === 1 ? "bg-white" : ""}`}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <Label>Category {String(i + 1).padStart(2, "0")}</Label>
                <h2 className="display mt-5 text-[2rem] text-ink-900 sm:text-[2.3rem]">
                  {group.category}
                </h2>
                <p className="mt-4 text-[0.98rem] leading-[1.7] text-ink-600">
                  {group.blurb}
                </p>
                {group.items.some((item) => item.specs) ? (
                  <p className="mt-4 text-[0.82rem] text-ink-500">
                    Tap a product for indicative specifications. Typical
                    trade-standard ranges — confirmed in writing per shipment.
                  </p>
                ) : null}
                <div className="mt-8 aspect-4/3 overflow-hidden bg-ink-100">
                  <img
                    src={group.image}
                    alt={group.category}
                    className="photo h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {group.items.map((item) =>
                    item.specs ? (
                      <li
                        key={item.name}
                        className="border-b border-ink-900/10 sm:col-span-2"
                      >
                        <details className="group py-5">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden [&::-webkit-details-marker]:hidden">
                            <span className="display text-[1.15rem] text-ink-900">
                              {item.name}
                            </span>
                            <Plus className="shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-45" />
                          </summary>
                          <dl className="mt-5 grid gap-x-10 gap-y-0.5 border-t border-ink-900/8 pt-4 sm:grid-cols-2">
                            {item.specs.map((spec) => (
                              <div
                                key={spec.label}
                                className="flex justify-between gap-4 border-b border-ink-900/5 py-2 text-[0.86rem]"
                              >
                                <dt className="text-ink-500">{spec.label}</dt>
                                <dd className="text-right font-medium text-ink-900">
                                  {spec.value}
                                </dd>
                              </div>
                            ))}
                          </dl>
                          <p className="mt-3 text-[0.78rem] text-ink-400">
                            Indicative — confirmed at the time of order.
                          </p>
                        </details>
                      </li>
                    ) : (
                      <li
                        key={item.name}
                        className="display border-b border-ink-900/10 py-5 text-[1.15rem] text-ink-900"
                      >
                        {item.name}
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
                Working to your specification
              </h2>
            </div>
            <div className="grid gap-6 text-[0.98rem] leading-[1.75] text-ink-600 sm:grid-cols-2 lg:col-span-8">
              <p>
                Send us what you need — the product, the grade, the volume and
                the destination — and we will confirm in writing what we can
                supply, at what price, and on what timeline.
              </p>
              <p>
                Where a requirement is outside what we can realistically deliver,
                we say so upfront rather than agreeing to it and arguing later.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Need something not listed here?"
        intro="Our sourcing network reaches well beyond this catalogue. Ask and we will tell you whether we can supply it."
      >
        <Button href="/contact#quote" variant="light">
          Request a Quote <ArrowRight />
        </Button>
      </CtaBand>
    </>
  );
}
