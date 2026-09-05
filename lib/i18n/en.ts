/**
 * English page copy.
 *
 * This file defines the shape of a dictionary: `lib/i18n/ar.ts` is checked
 * against it with `satisfies`, so a string added here that is not translated
 * there is a build error rather than an English sentence on the Arabic site.
 *
 * Product and service copy is not here — it lives bilingually in
 * `lib/content.ts`, next to the specifications it describes.
 */

export const en = {
  nav: {
    "/": "Home",
    "/about": "About",
    "/services": "Services",
    "/commodities": "Commodities",
    "/catalogue": "Catalogue",
    "/contact": "Contact",
  },

  common: {
    skipToContent: "Skip to content",
    requestQuote: "Request a Quote",
    learnMore: "Learn more",
    mainNavLabel: "Main",
    mobileNavLabel: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    /** Labels the language menu, which lists every language but the current. */
    language: "Language",
    homeAriaSuffix: "home",
    downloadPdf: "Download PDF",
  },

  footer: {
    company: "Company",
    services: "Services",
    contact: "Contact",
    certifications: "Certifications",
    rcPrefix: "RC",
    rights: "All rights reserved.",
  },

  home: {
    meta: {
      description:
        "M/W Global Services Limited — agricultural commodity export, solid minerals trading, general goods import, freight forwarding and customs clearing between Africa and world markets.",
    },
    heroTitleLineOne: "We move African goods",
    heroTitleLineTwo: "to world markets.",
    heroIntro:
      "Agricultural commodities, solid minerals and industrial imports — sourced, shipped and cleared by one accountable team.",
    viewCommodities: "View Commodities",
    introLabel: "Who we are",
    introStatement:
      "Good trade comes down to who you buy from. We built the supplier relationships first, and the rest follows from there.",
    introParagraphs: [
      "Before expanding into international trade, M/W Global Services Limited was established with a simple goal: to build reliable sourcing networks and connect clients with quality products.",
      "We are committed to professionalism, transparency, and delivering products that meet our customers' requirements through strong partnerships and careful supplier selection.",
    ],
    moreAboutCompany: "More about the company",
    servicesLabel: "What we do",
    servicesTitle: "Four service lines, one accountable partner",
    servicesIntro:
      "Most trade problems happen in the handoffs — between the supplier and the inspector, the freight agent and the customs broker. We run all four lines ourselves, so the handoffs are ours to manage.",
    commoditiesLabel: "What we trade",
    commoditiesTitle: "Products we source and supply",
    fullCatalogue: "Full catalogue",
    processLabel: "How we work",
    processTitle: "From first enquiry to documents in hand",
    differentiatorsLabel: "Why M/W Global",
    differentiatorsTitle: "What clients tell us they value",
    marketsLabel: "Markets we serve",
    marketsTitle: "Where our cargo lands",
    catalogueBandLabel: "PDF download",
    catalogueBandText: (pages: number, fileSize: string) =>
      `Indicative specifications for every product line, plus markets served and how we work — ${pages} pages, ${fileSize}.`,
    viewCataloguePage: "View catalogue page",
    ctaTitle: "Tell us the spec. We'll come back with a price.",
    ctaIntro:
      "Send the product, grade, volume and destination and we will come back to you with an offer.",
  },

  about: {
    meta: {
      title: "About Us",
      description:
        "M/W Global Services Limited is an international trade company handling commodity export, mineral trading, general goods import and freight logistics.",
    },
    headerLabel: "About us",
    headerTitle: "An international trade partner built on reliable sourcing",
    headerIntro:
      "We connect buyers to the products they need through strong supplier networks, careful selection and straightforward dealing.",
    storyLabel: "Our story",
    storyTitle: "Built on sourcing networks, then expanded into trade",
    storyParagraphs: (name: string, shortName: string) => [
      `Before expanding into international trade, ${name} was established with a simple goal: to build reliable sourcing networks and connect clients with quality products.`,
      "We are committed to professionalism, transparency, and delivering products that meet our customers' requirements through strong partnerships and careful supplier selection.",
      `Today ${shortName} works across four connected lines — agricultural export, solid minerals, general goods import, and freight and clearing. Clients use one of them or all four. What stays constant is that a single team is accountable from the first enquiry through to delivery.`,
    ],
    warehouseAlt: "Goods being moved inside a warehouse",
    detailsLabel: "Company details",
    detailRegisteredName: "Registered name",
    detailRc: "RC number",
    detailPhone: "Phone",
    detailHours: "Business hours",
    missionLabel: "Our mission",
    mission:
      "To connect producers to world markets through trade that is transparent, reliable and consistently delivered.",
    certificationsLabel: "Certifications & compliance",
    certificationsTitle: "Registered, certified and documented",
    certificationsIntro:
      "We hold the registrations required to trade internationally from Nigeria. Certificates with a copy on file open directly below; the rest are released on request.",
    viewCertificate: "View certificate",
    certificateOnRequest: "Copy released on request",
    valuesLabel: "Our values",
    valuesTitle: "What we hold to",
    values: [
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
    ],
    approachLabel: "Our approach",
    approachTitle: "Four things clients tell us they value",
    portAlt: "Container cranes at a port terminal",
    marketsServed: "Markets served",
    ctaTitle: "Work with a partner who stands behind the spec.",
    ctaIntro:
      "Talk to our trade desk about what you need sourced, shipped or cleared.",
    ctaButton: "Get in touch",
  },

  services: {
    meta: {
      title: "Services",
      description:
        "Agricultural commodity export, solid minerals trading, general goods import, and freight forwarding with licensed customs clearing.",
    },
    headerLabel: "Our services",
    headerTitle: "Sourcing, shipping and clearing — end to end",
    headerIntro:
      "Engage us for a single service or the full chain. Either way you deal with one team, one contract and one set of documents.",
    jumpLabel: "Jump to a service",
    serviceNumber: (number: string) => `Service ${number}`,
    included: "What's included",
    enquire: "Enquire about this service",
    processLabel: "Engagement process",
    processTitle: "What working with us looks like",
    ctaTitle: "Not sure which service you need?",
    ctaIntro:
      "Describe what you are trying to move and where. We'll tell you what it takes.",
    ctaButton: "Start a conversation",
    ctaEmail: "Email the trade desk",
  },

  commodities: {
    meta: {
      title: "Commodities",
      description:
        "Agricultural commodities, solid minerals and imported industrial goods traded by M/W Global Services Limited, with indicative specifications.",
    },
    headerLabel: "Commodities",
    headerTitle: "What we source, ship and supply",
    headerIntro:
      "These are the products we handle most often. Grade, packaging and volume are agreed with the buyer and fixed in the sales contract.",
    jumpLabel: "Jump to a category",
    categoryNumber: (number: string) => `Category ${number}`,
    specsHint:
      "Tap a product for indicative specifications. Typical trade-standard ranges — confirmed in writing per shipment.",
    indicativeNote: "Indicative — confirmed at the time of order.",
    specTitle: "Working to your specification",
    specParagraphs: [
      "Send us what you need — the product, the grade, the volume and the destination — and we will confirm in writing what we can supply, at what price, and on what timeline.",
      "Where a requirement is outside what we can realistically deliver, we say so upfront rather than agreeing to it and arguing later.",
    ],
    ctaTitle: "Need something not listed here?",
    ctaIntro:
      "Our sourcing network reaches well beyond this catalogue. Ask and we will tell you whether we can supply it.",
  },

  catalogue: {
    meta: {
      title: "Catalogue",
      description:
        "Download the M/W Global Services Limited product and commodity catalogue — indicative specifications for our agricultural, mineral and imported-goods lines, plus service coverage and markets served.",
    },
    headerLabel: "Catalogue",
    headerIntro:
      "Every product line we handle, with indicative specifications, service coverage and the markets we ship to — in one PDF you can save, forward or print.",
    downloadLabel: "PDF download",
    fileMeta: (pages: number, fileSize: string) =>
      `${pages} pages · ${fileSize}`,
    disclaimer:
      "All specifications are indicative trade-standard ranges. Final specifications, packing and volumes are confirmed in writing and fixed in the sales contract at the time of order.",
    insideLabel: "What's inside",
    insideTitle: "Four sections, one document",
    contents: [
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
        title: "Markets, certifications & documentation",
        text: "Destination markets by region, loading ports, Incoterms, payment terms, our registrations and the document set prepared for every shipment.",
      },
    ],
    /** Shown only when the PDF on offer is not in the page's own language. */
    englishEditionNote: "The catalogue PDF is in English.",
    statServiceLines: "Service lines",
    statCommodityLines: "Commodity lines",
    statDestinations: "Destination markets",
    statRegions: "World regions",
    ctaTitle: "Prefer to talk it through first?",
    ctaIntro:
      "Send the product, grade, volume and destination and our trade desk will come back with an indicative offer.",
  },

  contact: {
    meta: {
      title: "Contact",
      description:
        "Contact M/W Global Services Limited — request a quote for commodity export, mineral sourcing, goods import, freight forwarding or customs clearing.",
    },
    headerLabel: "Contact",
    headerTitle: "Let's talk about what you need moved",
    headerIntro:
      "Send an enquiry and our trade desk will respond within one business day. For time-sensitive shipments, call or message us directly.",
    directContact: "Direct contact",
    phone: "Phone",
    email: "Email",
    tradeDeskSuffix: "trade desk",
    hours: "Business hours",
    whatsapp: "Message us on WhatsApp",
    mapTitle: (name: string, address: string) =>
      `Map showing the ${name} office at ${address}`,
    openInMaps: "Open in Google Maps",
  },

  /** Client component — strings only, no functions: these cross to the browser. */
  form: {
    heading: "Request a quote",
    intro:
      "The more specific you are about grade, volume and destination, the faster we can price it.",
    name: "Full name",
    namePlaceholder: "Jane Doe",
    company: "Company",
    companyPlaceholder: "Acme Trading Ltd",
    email: "Email",
    emailPlaceholder: "you@company.com",
    phone: "Phone / WhatsApp",
    phonePlaceholder: "+00 000 000 0000",
    service: "Service required",
    servicePlaceholder: "Select a service",
    serviceOther: "Other / not sure",
    destination: "Destination port / country",
    destinationPlaceholder: "e.g. Nhava Sheva, India",
    message: "Commodity, grade and volume",
    messagePlaceholder:
      "e.g. 2 x 40ft FCL hulled sesame seeds, 99.5% purity, 6% max moisture, CIF Nhava Sheva, shipping September.",
    honeypot: "Website",
    submit: "Send enquiry",
    sending: "Sending…",
    privacy:
      "We use your details only to respond to this enquiry. Fields marked * are required.",
    successHeading: "Enquiry received",
    successLead:
      "Thank you. Our trade desk will review your requirement and respond within one business day.",
    successUrgent: "For anything urgent, call",
    successAgain: "Submit another enquiry",
    genericError: "Something went wrong. Please try again.",
    unexpectedError: "Unexpected error.",
  },

  notFound: {
    title: "This page has gone off route",
    text: "The page you were looking for does not exist or has moved. Head back to the homepage, or tell us what you were trying to find.",
    home: "Back to home",
    contact: "Contact us",
  },
};

/**
 * Deliberately not `as const`: the type has to describe *a* dictionary, not
 * this one's exact sentences, or the Arabic file could only satisfy it by
 * repeating the English word for word.
 */
export type Dictionary = typeof en;
