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
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Download the M/W Global Services Limited product and commodity catalogue — indicative specifications for our agricultural, mineral and imported-goods lines, plus service coverage and markets served.",
  alternates: { canonical: "/catalogue" },
};

// Computed from the same data the rest of the site renders from, so this
// page can't drift out of step with what's actually on the commodities,
// services and homepage pages — even as those lists change over time.
const commodityLineCount = commodities.reduce(
  (sum, group) => sum + group.items.length,
  0,
);
const marketCount = markets.reduce(
  (sum, market) => sum + market.detail.split(", ").length,
  0,
);

const stats = [
  { value: String(services.length).padStart(2, "0"), label: "Service lines" },
  {
    value: String(commodityLineCount).padStart(2, "0"),
    label: "Commodity lines",
  },
  { value: String(marketCount).padStart(2, "0"), label: "Destination markets" },
  { value: String(markets.length).padStart(2, "0"), label: "World regions" },
];

const contents = [
  {
    label: "Category 01",
    title: "Agricultural & Natural Products",
    text: "Ten lines with indicative specifications — purity, moisture, packaging and minimum order — for sesame, cashew, hibiscus, chilli, soybeans, ginger, gum arabic, frankincense and both charcoal grades.",
  },
  {
    label: "Category 02",
    title: "Solid Minerals",
    text: "Lead ore, tin ore and columbite & tantalite, with basis of sale, verification and packaging terms.",
  },
  {
    label: "Category 03",
    title: "Imported Goods",
    text: "Ten lines across machinery, building materials, power equipment and more, procured to specification.",
  },
  {
    label: "Reference",
    title: "Markets, terms & documentation",
    text: "Destination markets by region, loading ports, Incoterms, payment terms and the document set prepared for every shipment.",
  },
];

export default function CataloguePage() {
  return (
    <>
      <PageHeader
        label="Catalogue"
        title={site.catalogue.label}
        intro="Every product line we handle, with indicative specifications, service coverage and the markets we ship to — in one PDF you can save, forward or print."
        image="/images/grain-sacks.jpg"
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* ── Download card ─────────────────────────────────────────── */}
            <div className="lg:col-span-4">
              <div className="border border-ink-900/12 bg-white p-8">
                <Label>PDF download</Label>
                <p className="display mt-5 text-[1.3rem] text-ink-900">
                  {site.catalogue.label}
                </p>
                <p className="mt-3 text-[0.9rem] text-ink-500">
                  {site.catalogue.pages} pages · {site.catalogue.fileSize}
                </p>
                <Button
                  href={site.catalogue.href}
                  download="MW-Global-Catalogue-2026.pdf"
                  className="mt-7 w-full"
                >
                  Download PDF <Download />
                </Button>
                <p className="mt-5 text-[0.82rem] leading-[1.6] text-ink-500">
                  All specifications are indicative trade-standard ranges.
                  Final specifications, packing and volumes are confirmed in
                  writing and fixed in the sales contract at the time of
                  order.
                </p>
              </div>
            </div>

            {/* ── What's inside ─────────────────────────────────────────── */}
            <div className="lg:col-span-7 lg:col-start-6">
              <Label>What's inside</Label>
              <h2 className="display mt-5 text-[2rem] text-ink-900 sm:text-[2.3rem]">
                Four sections, one document
              </h2>
              <dl className="mt-8">
                {contents.map((item, i) => (
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
        title="Prefer to talk it through first?"
        intro="Send the product, grade, volume and destination and our trade desk will come back with an indicative offer."
      >
        <Button href="/contact#quote" variant="light">
          Request a Quote
        </Button>
      </CtaBand>
    </>
  );
}
