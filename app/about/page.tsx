import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "About Us",
  description:
    "M/W Global Services Limited is an international trade company handling commodity export, mineral trading, general goods import and freight logistics.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Professionalism",
    text: "We do what we say we will do, on the timeline we agreed. Clients should not have to chase us for an update.",
  },
  {
    title: "Transparency",
    text: "If something cannot be supplied at the grade, price or timeline discussed, we say so upfront rather than after a contract is signed.",
  },
  {
    title: "Careful supplier selection",
    text: "We build long relationships with suppliers we have worked with and can rely on, rather than buying from whoever is cheapest that week.",
  },
  {
    title: "Partnership",
    text: "Repeat business matters more to us than any single shipment, which shapes how we price and how we handle problems when they come up.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About us"
        title="An international trade partner built on reliable sourcing"
        intro="We connect buyers to the products they need through strong supplier networks, careful selection and straightforward dealing."
        image="/images/farmer-field.jpg"
      />

      {/* ── Story ─────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                label="Our story"
                title="Built on sourcing networks, then expanded into trade"
              />
              <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.75] text-ink-600">
                <p>
                  Before expanding into international trade,{" "}
                  {site.name} was established with a simple goal: to build
                  reliable sourcing networks and connect clients with quality
                  products.
                </p>
                <p>
                  We are committed to professionalism, transparency, and
                  delivering products that meet our customers&apos; requirements
                  through strong partnerships and careful supplier selection.
                </p>
                <p>
                  Today {site.shortName} works across four connected lines —
                  agricultural export, solid minerals, general goods import, and
                  freight and clearing. Clients use one of them or all four.
                  What stays constant is that a single team is accountable from
                  the first enquiry through to delivery.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-4/5 overflow-hidden bg-ink-100">
                <img
                  src="/images/warehouse-cart.jpg"
                  alt="Goods being moved inside a warehouse"
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
              <Label>Company details</Label>
              <dl className="mt-8">
                {[
                  ["Registered name", site.name],
                  ["RC number", site.rc],
                  ["Office", site.office.lines.join(", ")],
                  ["Phone", site.phone],
                  ["Business hours", site.hours],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-wrap justify-between gap-x-8 gap-y-1 border-b border-ink-900/10 py-4"
                  >
                    <dt className="text-[0.92rem] text-ink-500">{label}</dt>
                    <dd className="text-[0.95rem] font-semibold text-ink-900">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rule pt-8 lg:border-0 lg:pt-0">
              <Label>Our mission</Label>
              <p className="display mt-5 text-[1.5rem] leading-[1.35] text-ink-900">
                To connect producers to world markets through trade that is
                transparent, reliable and consistently delivered.
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
            label="Certifications & compliance"
            title="Registered, certified and documented"
            intro="We hold the registrations required to trade internationally from Nigeria. Certificates with a copy on file open directly below; the rest are released on request."
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
                <div className="mt-3 pl-10">
                  <p className="text-[0.96rem] leading-[1.75] text-ink-600">
                    {cert.description}
                  </p>
                  {cert.reference ? (
                    <p className="mt-2 text-[0.88rem] text-ink-500">
                      {cert.reference}
                    </p>
                  ) : null}
                  {cert.file ? (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener"
                      className="label mt-4 inline-flex items-center gap-2 border-b border-brand-700/40 pb-1 text-brand-700 transition-colors hover:border-brand-700 hover:text-brand-800"
                    >
                      View certificate <Download />
                    </a>
                  ) : (
                    <p className="label mt-4 text-ink-400">
                      Copy released on request
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
          <SectionHeading label="Our values" title="What we hold to" />
          <dl className="mt-12 grid gap-x-16 sm:grid-cols-2">
            {values.map((value, i) => (
              <div key={value.title} className="border-b border-ink-900/10 py-7">
                <dt className="flex items-baseline gap-4">
                  <span className="label text-crimson-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-[1.3rem] text-ink-900">
                    {value.title}
                  </span>
                </dt>
                <dd className="mt-3 pl-10 text-[0.96rem] leading-[1.75] text-ink-600">
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
                label="Our approach"
                title="Four things clients tell us they value"
              />
              <div className="mt-10 aspect-4/3 overflow-hidden bg-ink-100">
                <img
                  src="/images/port-cranes.jpg"
                  alt="Container cranes at a port terminal"
                  className="photo h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <dl>
                {differentiators.map((item, i) => (
                  <div
                    key={item.title}
                    className={`border-b border-ink-900/10 py-7 ${i === 0 ? "border-t" : ""}`}
                  >
                    <dt className="display text-[1.3rem] text-ink-900">
                      {item.title}
                    </dt>
                    <dd className="mt-3 text-[0.96rem] leading-[1.75] text-ink-600">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12">
                <Label>Markets served</Label>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {markets.map((market) => (
                    <span
                      key={market.region}
                      className="border border-ink-900/15 px-4 py-2 text-[0.88rem] font-medium text-ink-700"
                    >
                      {market.region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Work with a partner who stands behind the spec."
        intro="Talk to our trade desk about what you need sourced, shipped or cleared."
      >
        <Button href="/contact#quote" variant="light">
          Get in touch <ArrowRight />
        </Button>
      </CtaBand>
    </>
  );
}
