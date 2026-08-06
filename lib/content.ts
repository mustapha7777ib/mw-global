/**
 * Service lines and tradeable commodities.
 * Edit freely — pages render straight from these arrays.
 *
 * Keep claims here general and defensible. Anything that names a specific
 * licence, certification, accreditation or guaranteed figure should only go in
 * once it is actually true of the business.
 */

export type Service = {
  slug: string;
  image: string;
  title: string;
  short: string;
  body: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "export",
    image: "/images/cocoa-drying.jpg",
    title: "Agricultural Commodity Export",
    short:
      "Sourcing, consolidation and export of raw and semi-processed agricultural produce.",
    body: "We source through established supplier networks, consolidate to the volume a buyer needs, and ship to markets in Asia, Europe, the Middle East and beyond. The specification is agreed in writing before the contract is signed, and we work to it.",
    points: [
      "Sourcing through established supplier networks",
      "Consolidation to full container volumes",
      "Cleaning, sorting and export-standard bagging",
      "Pre-shipment inspection arranged where buyers require it",
      "Export documentation prepared and submitted",
    ],
  },
  {
    slug: "minerals",
    image: "/images/mining-excavator.jpg",
    title: "Solid Minerals Trading",
    short:
      "Sourcing and export of industrial minerals and ores to buyer specification.",
    body: "We work with mining and processing partners to supply industrial minerals and ores. Grade, volume and delivery terms are agreed upfront, and independent testing can be arranged where a buyer wants verification before shipment.",
    points: [
      "Sourcing through vetted mining and processing partners",
      "Sorting and grading to the agreed specification",
      "Independent assay arranged on request",
      "Transport arranged from site to port",
      "Export documentation prepared and submitted",
    ],
  },
  {
    slug: "import",
    image: "/images/warehouse-forklift.jpg",
    title: "General Goods Import",
    short:
      "Procurement and delivery of machinery, industrial equipment, building materials and consumer goods.",
    body: "We act as the buying arm for clients who need goods brought in without running an international procurement desk themselves. We identify and vet suppliers, negotiate terms, and handle the shipment through to delivery — one invoice, one point of contact.",
    points: [
      "Supplier identification, vetting and price negotiation",
      "Inspection arranged at origin before shipment",
      "Import documentation and clearance handled",
      "Consolidated shipping for smaller orders",
      "Delivery to your warehouse or site",
    ],
  },
  {
    slug: "logistics",
    image: "/images/ship-docked.jpg",
    title: "Freight Forwarding & Clearing",
    short:
      "Ocean and air freight, customs clearance, warehousing and inland haulage.",
    body: "Our logistics desk serves both our own trade flows and third-party clients. We book space with carriers, handle the clearance paperwork, and move cargo inland to its final destination.",
    points: [
      "Ocean and air freight booking",
      "Customs clearance and entry filing",
      "Warehousing and stock handling",
      "Inland haulage and delivery",
      "Cargo insurance arranged on request",
    ],
  },
];

export type CommoditySpec = {
  label: string;
  value: string;
};

export type CommodityItem = {
  name: string;
  /**
   * Typical trade-standard ranges, not a lab result for stock currently held.
   * Shown on the commodities page under an explicit "indicative" label —
   * see the note there before adding a product without specs, or changing
   * the numbers on one that has them.
   */
  specs?: CommoditySpec[];
};

export type CommodityGroup = {
  category: string;
  image: string;
  blurb: string;
  items: CommodityItem[];
};

export const commodities: CommodityGroup[] = [
  {
    // Renamed from "Agricultural Commodities": charcoal, gum arabic and
    // frankincense are farm-and-forest products, not crops, and a buyer who
    // knows the trade notices when they are filed wrongly.
    category: "Agricultural & Natural Products",
    image: "/images/crop-field.jpg",
    blurb:
      "Farm and forest products, sourced, consolidated and export-packed to the specification agreed with the buyer.",
    items: [
      {
        name: "Sesame Seeds",
        specs: [
          { label: "Purity", value: "≥ 99%" },
          { label: "Moisture", value: "≤ 8%" },
          { label: "Oil Content", value: "≥ 48%" },
          { label: "Foreign Matter", value: "≤ 1%" },
          { label: "Packaging", value: "25 kg / 50 kg bags" },
          { label: "Min. Order", value: "1 × 20ft FCL" },
        ],
      },
      {
        name: "Raw Cashew Nuts",
        specs: [
          { label: "Nut Count (KOR)", value: "46–52 lbs / 80kg" },
          { label: "Moisture", value: "≤ 10%" },
          { label: "Defective Nuts", value: "≤ 8%" },
          { label: "Foreign Matter", value: "≤ 1%" },
          { label: "Packaging", value: "80 kg jute bags" },
          { label: "Min. Order", value: "1 × 20ft FCL" },
        ],
      },
      {
        name: "Dried Hibiscus Flower (Zobo)",
        specs: [
          { label: "Botanical Name", value: "Hibiscus sabdariffa" },
          { label: "Moisture", value: "≤ 12%" },
          { label: "Colour", value: "Deep crimson / burgundy" },
          { label: "Processing", value: "Sun-dried, hand-sorted" },
          { label: "Packaging", value: "25 kg / 50 kg PP bags" },
          { label: "Min. Order", value: "1 MT" },
        ],
      },
      {
        name: "Dried Chilli Pepper",
        specs: [
          { label: "Moisture", value: "≤ 12%" },
          { label: "Colour", value: "Bright red" },
          { label: "Form", value: "Whole / Crushed / Ground" },
          { label: "Heat Level", value: "40,000–100,000 SHU" },
          { label: "Packaging", value: "25 kg / 50 kg PP bags" },
          { label: "Min. Order", value: "1 MT" },
        ],
      },
      {
        name: "Soybeans",
        specs: [
          { label: "Variety", value: "Non-GMO" },
          { label: "Protein Content", value: "≥ 36%" },
          { label: "Moisture", value: "≤ 13%" },
          { label: "Oil Content", value: "≥ 18%" },
          { label: "Packaging", value: "25 kg / 50 kg bags / bulk" },
          { label: "Min. Order", value: "1 × 20ft FCL" },
        ],
      },
      {
        name: "Ginger (Dried Split & Powder)",
        specs: [
          { label: "Form", value: "Dried Split / Powder" },
          { label: "Moisture", value: "≤ 10%" },
          { label: "Gingerol", value: "High (variety-dependent)" },
          { label: "Extraneous Matter", value: "≤ 1%" },
          { label: "Packaging", value: "25 kg / 50 kg jute / PP bags" },
          { label: "Min. Order", value: "1 MT" },
        ],
      },
      {
        name: "Gum Arabic",
        specs: [
          { label: "Botanical Source", value: "Acacia senegal / Acacia seyal" },
          { label: "Moisture", value: "≤ 15%" },
          { label: "Ash Content", value: "≤ 4%" },
          { label: "Solubility", value: "Highly soluble in water" },
          { label: "Packaging", value: "25 kg / 50 kg bags" },
          { label: "Min. Order", value: "1 MT" },
        ],
      },
      {
        name: "Frankincense (Luban)",
        specs: [
          { label: "Form", value: "Raw tears / Granules" },
          { label: "Colour", value: "Pale yellow to amber" },
          { label: "Purity", value: "High — minimal bark / debris" },
          { label: "Packaging", value: "10 kg / 25 kg bags" },
          { label: "Min. Order", value: "500 kg" },
        ],
      },
      {
        name: "Hardwood Charcoal",
        specs: [
          { label: "Moisture", value: "≤ 5%" },
          { label: "Ash Content", value: "≤ 3%" },
          { label: "Fixed Carbon", value: "≥ 75%" },
          { label: "Calorific Value", value: "7,000–8,000 kcal/kg" },
          { label: "Packaging", value: "5 / 10 / 25 kg bags" },
          { label: "Min. Order", value: "1 × 20ft FCL" },
        ],
      },
      {
        name: "Mangrove Charcoal",
        specs: [
          { label: "Moisture", value: "≤ 5%" },
          { label: "Ash Content", value: "≤ 3%" },
          { label: "Fixed Carbon", value: "≥ 78%" },
          { label: "Calorific Value", value: "7,500–8,500 kcal/kg" },
          { label: "Packaging", value: "5 / 10 / 25 kg bags" },
          { label: "Min. Order", value: "1 × 20ft FCL" },
        ],
      },
    ],
  },
  {
    category: "Solid Minerals",
    image: "/images/ore-rock.jpg",
    blurb:
      "Supplied to the grade agreed at contract, with independent testing arranged on request.",
    items: [
      { name: "Lead Ore (Galena)" },
      { name: "Tin Ore (Cassiterite)" },
      { name: "Columbite & Tantalite" },
    ],
  },
  {
    category: "Imported Goods",
    image: "/images/produce-bags.jpg",
    blurb:
      "Procured from vetted manufacturers and delivered to your warehouse or site.",
    items: [
      { name: "Industrial Machinery" },
      { name: "Agricultural Equipment" },
      { name: "Building Materials" },
      { name: "Automobiles & Spare Parts" },
      { name: "Generators & Power Equipment" },
      { name: "Solar & Renewable Systems" },
      { name: "Electrical Fittings & Cables" },
      { name: "Steel & Metal Products" },
      { name: "Chemicals & Fertilisers" },
      { name: "Medical & Laboratory Equipment" },
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Enquiry",
    text: "You tell us the commodity, grade, volume and destination. We come back with an indicative offer.",
  },
  {
    step: "02",
    title: "Contract & Terms",
    text: "We agree the specification, Incoterms and payment arrangement, then issue a sales contract and proforma invoice.",
  },
  {
    step: "03",
    title: "Sourcing & Checks",
    text: "We source and consolidate the order, and check it against the agreed specification before loading.",
  },
  {
    step: "04",
    title: "Shipment & Documents",
    text: "We book space, load and ship, and hand over the document set the buyer needs to take delivery.",
  },
];

export const markets = [
  {
    region: "Asia",
    detail: "China, India, Vietnam, Indonesia, Malaysia",
  },
  {
    region: "Europe",
    detail:
      "Netherlands, Germany, Turkey, Belgium, United Kingdom, Spain, Italy",
  },
  {
    region: "Middle East",
    detail:
      "UAE, Saudi Arabia, Lebanon, Qatar, Kuwait, Oman, Bahrain, Jordan",
  },
  {
    region: "Africa",
    detail: "Ghana, Côte d'Ivoire, Kenya, South Africa",
  },
  {
    region: "North America",
    detail: "United States, Canada",
  },
  {
    region: "South America",
    detail: "Brazil, Argentina",
  },
];

export const differentiators = [
  {
    title: "One accountable partner",
    text: "Sourcing, shipping and clearing sit under one roof. When something moves, you have one number to call — not four vendors pointing at each other.",
  },
  {
    title: "The specification is agreed in writing",
    text: "We fix grade, packaging and tolerances in the contract before anything ships, so both sides know exactly what is being bought and sold.",
  },
  {
    title: "Direct supplier relationships",
    text: "We buy through networks we have built and maintain rather than through layers of middlemen, which keeps pricing competitive and supply steadier.",
  },
  {
    title: "Documentation handled properly",
    text: "Most trade disputes are paperwork disputes. We prepare complete, consistent document sets so consignments are not held up at destination.",
  },
];
