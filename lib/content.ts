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

export type CommodityGroup = {
  category: string;
  image: string;
  blurb: string;
  items: string[];
};

export const commodities: CommodityGroup[] = [
  {
    category: "Agricultural Commodities",
    image: "/images/crop-field.jpg",
    blurb:
      "Sourced, consolidated and export-packed to the specification agreed with the buyer.",
    items: [
      "Sesame Seeds",
      "Raw Cashew Nuts",
      "Cashew Kernels",
      "Hibiscus Flower",
      "Dried Split Ginger",
      "Soybeans",
      "Cocoa Beans",
      "Shea Nuts & Butter",
      "Gum Arabic",
      "Cassava Derivatives",
      "Groundnuts",
      "Maize",
      "Sorghum",
      "Millet",
      "Coffee Beans",
      "Palm Kernel & Shells",
      "Coconut & Copra",
      "Tiger Nuts",
      "Kola Nuts",
      "Moringa Seeds",
      "Dried Chilli Pepper",
      "Turmeric",
      "Yam Flour",
      "Cotton Lint & Seed",
      "Natural Rubber",
      "Charcoal",
      "Honey",
    ],
  },
  {
    category: "Solid Minerals",
    image: "/images/ore-rock.jpg",
    blurb:
      "Supplied to the grade agreed at contract, with independent testing arranged on request.",
    items: [
      "Lead Ore (Galena)",
      "Zinc Ore",
      "Lithium Ore",
      "Tin Ore (Cassiterite)",
      "Columbite & Tantalite",
      "Copper Ore",
      "Iron Ore",
      "Manganese Ore",
      "Bauxite",
      "Barite",
      "Zircon Sand",
      "Ilmenite & Rutile",
      "Silica Sand",
      "Kaolin",
      "Feldspar",
      "Gypsum",
      "Limestone",
      "Bentonite",
      "Graphite",
      "Talc",
      "Mica",
      "Fluorspar",
      "Coal",
      "Granite & Marble",
      "Gemstones",
    ],
  },
  {
    category: "Imported Goods",
    image: "/images/produce-bags.jpg",
    blurb:
      "Procured from vetted manufacturers and delivered to your warehouse or site.",
    items: [
      "Industrial Machinery",
      "Agricultural Equipment",
      "Building Materials",
      "Automobiles & Spare Parts",
      "Petrochemicals",
      "Consumer Goods",
      "Generators & Power Equipment",
      "Solar & Renewable Systems",
      "Electrical Fittings & Cables",
      "Steel & Metal Products",
      "Pumps, Valves & Fittings",
      "Plastics & Polymers",
      "Chemicals & Fertilisers",
      "Packaging Materials",
      "Textiles & Fabrics",
      "Medical & Laboratory Equipment",
      "Cold Chain & Refrigeration",
      "Office & IT Equipment",
      "Safety & Industrial Consumables",
      "Furniture & Fittings",
      "Food & Beverage Products",
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
    detail:
      "China, India, Vietnam, Japan, South Korea, Singapore, Indonesia, Malaysia, Thailand, Philippines, Pakistan, Bangladesh, Sri Lanka, Nepal, Taiwan, Hong Kong, Cambodia, Myanmar, Kazakhstan, Uzbekistan",
  },
  {
    region: "Europe",
    detail:
      "Netherlands, Germany, Turkey, United Kingdom, Belgium, Spain, Italy, France, Poland, Greece, Portugal, Ireland, Switzerland, Sweden, Denmark, Norway, Austria, Czech Republic, Romania, Bulgaria, Hungary, Lithuania, Latvia, Estonia, Croatia",
  },
  {
    region: "Middle East",
    detail:
      "UAE, Saudi Arabia, Lebanon, Jordan, Qatar, Kuwait, Oman, Bahrain, Israel, Iraq, Cyprus, Georgia, Armenia, Azerbaijan",
  },
  {
    region: "Africa",
    detail:
      "Ghana, Kenya, South Africa, Egypt, Morocco, Tanzania, Côte d'Ivoire, Senegal, Ethiopia, Cameroon, Togo, Benin, Uganda, Rwanda, Zambia, Zimbabwe, Mozambique, Algeria, Tunisia, Sudan, Burkina Faso, Mali, Niger, Guinea, Sierra Leone, Liberia, Gambia, DR Congo, Angola, Namibia, Botswana, Mauritius",
  },
  {
    region: "North America",
    detail: "United States, Canada, Mexico",
  },
  {
    region: "Central America & Caribbean",
    detail:
      "Panama, Dominican Republic, Costa Rica, Guatemala, Honduras, Jamaica, Trinidad & Tobago",
  },
  {
    region: "South America",
    detail:
      "Brazil, Argentina, Chile, Peru, Colombia, Ecuador, Uruguay, Paraguay, Bolivia",
  },
  {
    region: "Oceania",
    detail: "Australia, New Zealand, Papua New Guinea, Fiji",
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
