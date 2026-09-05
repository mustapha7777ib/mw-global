/**
 * Service lines and tradeable commodities — bilingual.
 * Edit freely: pages render straight from these arrays.
 *
 * Each translatable string is a `{ en, ar }` pair, so both languages for one
 * product sit next to each other and cannot fall out of step. A value written
 * as a plain string is used verbatim in both languages — that is deliberate for
 * specifications, where a figure restated in two places is a figure that can
 * drift. Page copy (headings, intros, form labels) lives in `lib/i18n/`.
 *
 * Keep claims here general and defensible. Anything that names a specific
 * licence, certification, accreditation or guaranteed figure should only go in
 * once it is actually true of the business.
 */

import type { MaybeText, Text } from "@/lib/i18n/text";

/** Anchor ids. Language-neutral, so `/services#export` works in both. */
export type ServiceSlug = "export" | "minerals" | "import" | "logistics";

export type Service = {
  slug: ServiceSlug;
  image: string;
  title: Text;
  short: Text;
  body: Text;
  points: Text[];
};

export const services: Service[] = [
  {
    slug: "export",
    image: "/images/cocoa-drying.jpg",
    title: {
      en: "Agricultural Commodity Export",
      ar: "تصدير السلع الزراعية",
    },
    short: {
      en: "Sourcing, consolidation and export of raw and semi-processed agricultural produce.",
      ar: "توريد وتجميع وتصدير المحاصيل الزراعية الخام وشبه المصنّعة.",
    },
    body: {
      en: "We source through established supplier networks, consolidate to the volume a buyer needs, and ship to markets in Asia, Europe, the Middle East and beyond. The specification is agreed in writing before the contract is signed, and we work to it.",
      ar: "نورّد عبر شبكات مورّدين راسخة، ونجمّع الكميات حتى الحجم الذي يطلبه المشتري، ثم نشحن إلى أسواق آسيا وأوروبا والشرق الأوسط وما وراءها. تُعتمد المواصفة كتابةً قبل توقيع العقد، ونلتزم بها.",
    },
    points: [
      {
        en: "Sourcing through established supplier networks",
        ar: "التوريد عبر شبكات مورّدين راسخة",
      },
      {
        en: "Consolidation to full container volumes",
        ar: "التجميع حتى حمولة حاوية كاملة",
      },
      {
        en: "Cleaning, sorting and export-standard bagging",
        ar: "التنظيف والفرز والتعبئة وفق معايير التصدير",
      },
      {
        en: "Pre-shipment inspection arranged where buyers require it",
        ar: "ترتيب الفحص قبل الشحن عند طلب المشتري",
      },
      {
        en: "Export documentation prepared and submitted",
        ar: "إعداد مستندات التصدير وتقديمها",
      },
    ],
  },
  {
    slug: "minerals",
    image: "/images/mining-excavator.jpg",
    title: { en: "Solid Minerals Trading", ar: "تجارة المعادن الصلبة" },
    short: {
      en: "Sourcing and export of industrial minerals and ores to buyer specification.",
      ar: "توريد وتصدير المعادن والخامات الصناعية وفق مواصفة المشتري.",
    },
    body: {
      en: "We work with mining and processing partners to supply industrial minerals and ores. Grade, volume and delivery terms are agreed upfront, and independent testing can be arranged where a buyer wants verification before shipment.",
      ar: "نعمل مع شركاء في التعدين والمعالجة لتوريد المعادن والخامات الصناعية. تُتَّفق الرتبة والكمية وشروط التسليم مسبقاً، ويمكن ترتيب فحص مستقل إذا أراد المشتري التحقّق قبل الشحن.",
    },
    points: [
      {
        en: "Sourcing through vetted mining and processing partners",
        ar: "التوريد عبر شركاء تعدين ومعالجة جرى التحقّق منهم",
      },
      {
        en: "Sorting and grading to the agreed specification",
        ar: "الفرز والتصنيف وفق المواصفة المتفق عليها",
      },
      {
        en: "Independent assay arranged on request",
        ar: "ترتيب تحليل مخبري مستقل عند الطلب",
      },
      {
        en: "Transport arranged from site to port",
        ar: "ترتيب النقل من الموقع إلى الميناء",
      },
      {
        en: "Export documentation prepared and submitted",
        ar: "إعداد مستندات التصدير وتقديمها",
      },
    ],
  },
  {
    slug: "import",
    image: "/images/warehouse-forklift.jpg",
    title: { en: "General Goods Import", ar: "استيراد البضائع العامة" },
    short: {
      en: "Procurement and delivery of machinery, industrial equipment, building materials and consumer goods.",
      ar: "شراء وتوصيل الآلات والمعدات الصناعية ومواد البناء والسلع الاستهلاكية.",
    },
    body: {
      en: "We act as the buying arm for clients who need goods brought in without running an international procurement desk themselves. We identify and vet suppliers, negotiate terms, and handle the shipment through to delivery — one invoice, one point of contact.",
      ar: "نعمل ذراعاً شرائية للعملاء الذين يحتاجون إلى استيراد بضائع دون أن يديروا قسم مشتريات دولياً بأنفسهم. نحدّد المورّدين ونتحقّق منهم، ونتفاوض على الشروط، ونتابع الشحنة حتى التسليم — فاتورة واحدة وجهة اتصال واحدة.",
    },
    points: [
      {
        en: "Supplier identification, vetting and price negotiation",
        ar: "تحديد المورّدين والتحقّق منهم والتفاوض على الأسعار",
      },
      {
        en: "Inspection arranged at origin before shipment",
        ar: "ترتيب الفحص في بلد المنشأ قبل الشحن",
      },
      {
        en: "Import documentation and clearance handled",
        ar: "إدارة مستندات الاستيراد والتخليص الجمركي",
      },
      {
        en: "Consolidated shipping for smaller orders",
        ar: "الشحن المجمّع للطلبات الصغيرة",
      },
      {
        en: "Delivery to your warehouse or site",
        ar: "التوصيل إلى مستودعك أو موقعك",
      },
    ],
  },
  {
    slug: "logistics",
    image: "/images/ship-docked.jpg",
    title: { en: "Freight Forwarding & Clearing", ar: "الشحن والتخليص الجمركي" },
    short: {
      en: "Ocean and air freight, customs clearance, warehousing and inland haulage.",
      ar: "شحن بحري وجوي، وتخليص جمركي، وتخزين، ونقل بري داخلي.",
    },
    body: {
      en: "Our logistics desk serves both our own trade flows and third-party clients. We book space with carriers, handle the clearance paperwork, and move cargo inland to its final destination.",
      ar: "يخدم قسمنا اللوجستي تدفّقاتنا التجارية وعملاء الغير على حدٍّ سواء. نحجز المساحة لدى شركات النقل، وننجز أوراق التخليص، وننقل البضاعة برّاً إلى وجهتها النهائية.",
    },
    points: [
      { en: "Ocean and air freight booking", ar: "حجز الشحن البحري والجوي" },
      {
        en: "Customs clearance and entry filing",
        ar: "التخليص الجمركي وتقديم البيانات الجمركية",
      },
      { en: "Warehousing and stock handling", ar: "التخزين ومناولة المخزون" },
      { en: "Inland haulage and delivery", ar: "النقل البري والتسليم" },
      {
        en: "Cargo insurance arranged on request",
        ar: "ترتيب التأمين على البضائع عند الطلب",
      },
    ],
  },
];

export type CommoditySpec = {
  label: Text;
  /** Plain string where the figure is identical in both languages. */
  value: MaybeText;
};

export type CommodityItem = {
  /**
   * The English trade name doubles as the second line on the Arabic site:
   * buyers negotiate and write contracts in English, so the Arabic pages show
   * both and neither side can be vague about which product is meant.
   */
  name: Text;
  /**
   * Typical trade-standard ranges, not a lab result for stock currently held.
   * Shown on the commodities page under an explicit "indicative" label —
   * see the note there before adding a product without specs, or changing
   * the numbers on one that has them.
   */
  specs?: CommoditySpec[];
};

/** Anchor ids for the category jump links, shared by both languages. */
export type CommodityGroupId = "agriculture" | "minerals" | "imports";

export type CommodityGroup = {
  id: CommodityGroupId;
  image: string;
  category: Text;
  blurb: Text;
  items: CommodityItem[];
};

/** Spec labels reused across products — declared once so they read alike. */
const spec = {
  moisture: { en: "Moisture", ar: "الرطوبة" },
  purity: { en: "Purity", ar: "النقاء" },
  foreignMatter: { en: "Foreign Matter", ar: "الشوائب" },
  packaging: { en: "Packaging", ar: "التعبئة" },
  minOrder: { en: "Min. Order", ar: "أقل كمية للطلب" },
  colour: { en: "Colour", ar: "اللون" },
  form: { en: "Form", ar: "الشكل" },
  ash: { en: "Ash Content", ar: "نسبة الرماد" },
  calorific: { en: "Calorific Value", ar: "القيمة الحرارية" },
  fixedCarbon: { en: "Fixed Carbon", ar: "الكربون الثابت" },
} as const;

export const commodities: CommodityGroup[] = [
  {
    // Renamed from "Agricultural Commodities": charcoal, gum arabic and
    // frankincense are farm-and-forest products, not crops, and a buyer who
    // knows the trade notices when they are filed wrongly.
    id: "agriculture",
    image: "/images/crop-field.jpg",
    category: {
      en: "Agricultural & Natural Products",
      ar: "المنتجات الزراعية والطبيعية",
    },
    blurb: {
      en: "Farm and forest products, sourced, consolidated and export-packed to the specification agreed with the buyer.",
      ar: "منتجات المزرعة والغابة، نورّدها ونجمّعها ونعبّئها للتصدير وفق المواصفة المتفق عليها مع المشتري.",
    },
    items: [
      {
        name: { en: "Sesame Seeds", ar: "بذور السمسم" },
        specs: [
          { label: spec.purity, value: "≥ 99%" },
          { label: spec.moisture, value: "≤ 8%" },
          { label: { en: "Oil Content", ar: "نسبة الزيت" }, value: "≥ 48%" },
          { label: spec.foreignMatter, value: "≤ 1%" },
          {
            label: spec.packaging,
            value: { en: "25 kg / 50 kg bags", ar: "أكياس 25 كجم / 50 كجم" },
          },
          { label: spec.minOrder, value: "1 × 20ft FCL" },
        ],
      },
      {
        name: { en: "Raw Cashew Nuts", ar: "الكاجو الخام" },
        specs: [
          {
            label: { en: "Nut Count (KOR)", ar: "مردود الحبّة (KOR)" },
            value: "46–52 lbs / 80kg",
          },
          { label: spec.moisture, value: "≤ 10%" },
          {
            label: { en: "Defective Nuts", ar: "الحبّات المعيبة" },
            value: "≤ 8%",
          },
          { label: spec.foreignMatter, value: "≤ 1%" },
          {
            label: spec.packaging,
            value: { en: "80 kg jute bags", ar: "أكياس جوت 80 كجم" },
          },
          { label: spec.minOrder, value: "1 × 20ft FCL" },
        ],
      },
      {
        name: {
          en: "Dried Hibiscus Flower (Zobo)",
          ar: "زهور الكركديه المجفّفة",
        },
        specs: [
          {
            label: { en: "Botanical Name", ar: "الاسم النباتي" },
            value: "Hibiscus sabdariffa",
          },
          { label: spec.moisture, value: "≤ 12%" },
          {
            label: spec.colour,
            value: {
              en: "Deep crimson / burgundy",
              ar: "قرمزي غامق / عنّابي",
            },
          },
          {
            label: { en: "Processing", ar: "المعالجة" },
            value: {
              en: "Sun-dried, hand-sorted",
              ar: "مجفّفة شمسياً، مفروزة يدوياً",
            },
          },
          {
            label: spec.packaging,
            value: { en: "25 kg / 50 kg PP bags", ar: "أكياس PP 25 كجم / 50 كجم" },
          },
          { label: spec.minOrder, value: "1 MT" },
        ],
      },
      {
        name: { en: "Dried Chilli Pepper", ar: "الفلفل الحار المجفّف" },
        specs: [
          { label: spec.moisture, value: "≤ 12%" },
          { label: spec.colour, value: { en: "Bright red", ar: "أحمر زاهٍ" } },
          {
            label: spec.form,
            value: {
              en: "Whole / Crushed / Ground",
              ar: "حبّ كامل / مجروش / مطحون",
            },
          },
          {
            label: { en: "Heat Level", ar: "درجة الحدّة" },
            value: "40,000–100,000 SHU",
          },
          {
            label: spec.packaging,
            value: { en: "25 kg / 50 kg PP bags", ar: "أكياس PP 25 كجم / 50 كجم" },
          },
          { label: spec.minOrder, value: "1 MT" },
        ],
      },
      {
        name: { en: "Soybeans", ar: "فول الصويا" },
        specs: [
          {
            label: { en: "Variety", ar: "الصنف" },
            value: { en: "Non-GMO", ar: "غير معدّل وراثياً (Non-GMO)" },
          },
          {
            label: { en: "Protein Content", ar: "نسبة البروتين" },
            value: "≥ 36%",
          },
          { label: spec.moisture, value: "≤ 13%" },
          { label: { en: "Oil Content", ar: "نسبة الزيت" }, value: "≥ 18%" },
          {
            label: spec.packaging,
            value: {
              en: "25 kg / 50 kg bags / bulk",
              ar: "أكياس 25 كجم / 50 كجم أو سائب",
            },
          },
          { label: spec.minOrder, value: "1 × 20ft FCL" },
        ],
      },
      {
        name: {
          en: "Ginger (Dried Split & Powder)",
          ar: "الزنجبيل (مجفّف مشقوق ومطحون)",
        },
        specs: [
          {
            label: spec.form,
            value: { en: "Dried Split / Powder", ar: "مجفّف مشقوق / مطحون" },
          },
          { label: spec.moisture, value: "≤ 10%" },
          {
            label: { en: "Gingerol", ar: "الجنجرول" },
            value: {
              en: "High (variety-dependent)",
              ar: "مرتفع (بحسب الصنف)",
            },
          },
          {
            label: { en: "Extraneous Matter", ar: "المواد الغريبة" },
            value: "≤ 1%",
          },
          {
            label: spec.packaging,
            value: {
              en: "25 kg / 50 kg jute / PP bags",
              ar: "أكياس جوت أو PP 25 كجم / 50 كجم",
            },
          },
          { label: spec.minOrder, value: "1 MT" },
        ],
      },
      {
        name: { en: "Gum Arabic", ar: "الصمغ العربي" },
        specs: [
          {
            label: { en: "Botanical Source", ar: "المصدر النباتي" },
            value: "Acacia senegal / Acacia seyal",
          },
          { label: spec.moisture, value: "≤ 15%" },
          { label: spec.ash, value: "≤ 4%" },
          {
            label: { en: "Solubility", ar: "الذوبانية" },
            value: {
              en: "Highly soluble in water",
              ar: "عالي الذوبان في الماء",
            },
          },
          {
            label: spec.packaging,
            value: { en: "25 kg / 50 kg bags", ar: "أكياس 25 كجم / 50 كجم" },
          },
          { label: spec.minOrder, value: "1 MT" },
        ],
      },
      {
        name: { en: "Frankincense (Luban)", ar: "اللبان (الفرانكنسنس)" },
        specs: [
          {
            label: spec.form,
            value: { en: "Raw tears / Granules", ar: "قطرات خام / حبيبات" },
          },
          {
            label: spec.colour,
            value: {
              en: "Pale yellow to amber",
              ar: "أصفر فاتح إلى كهرماني",
            },
          },
          {
            label: spec.purity,
            value: {
              en: "High — minimal bark / debris",
              ar: "عالٍ — أقل قدر من اللحاء والشوائب",
            },
          },
          {
            label: spec.packaging,
            value: { en: "10 kg / 25 kg bags", ar: "أكياس 10 كجم / 25 كجم" },
          },
          { label: spec.minOrder, value: "500 kg" },
        ],
      },
      {
        name: { en: "Hardwood Charcoal", ar: "فحم الأخشاب الصلبة" },
        specs: [
          { label: spec.moisture, value: "≤ 5%" },
          { label: spec.ash, value: "≤ 3%" },
          { label: spec.fixedCarbon, value: "≥ 75%" },
          { label: spec.calorific, value: "7,000–8,000 kcal/kg" },
          {
            label: spec.packaging,
            value: { en: "5 / 10 / 25 kg bags", ar: "أكياس 5 / 10 / 25 كجم" },
          },
          { label: spec.minOrder, value: "1 × 20ft FCL" },
        ],
      },
      {
        name: { en: "Mangrove Charcoal", ar: "فحم المانغروف" },
        specs: [
          { label: spec.moisture, value: "≤ 5%" },
          { label: spec.ash, value: "≤ 3%" },
          { label: spec.fixedCarbon, value: "≥ 78%" },
          { label: spec.calorific, value: "7,500–8,500 kcal/kg" },
          {
            label: spec.packaging,
            value: { en: "5 / 10 / 25 kg bags", ar: "أكياس 5 / 10 / 25 كجم" },
          },
          { label: spec.minOrder, value: "1 × 20ft FCL" },
        ],
      },
    ],
  },
  {
    id: "minerals",
    image: "/images/ore-rock.jpg",
    category: { en: "Solid Minerals", ar: "المعادن الصلبة" },
    blurb: {
      en: "Supplied to the grade agreed at contract, with independent testing arranged on request.",
      ar: "تُورَّد وفق الرتبة المتفق عليها في العقد، مع ترتيب فحص مستقل عند الطلب.",
    },
    items: [
      { name: { en: "Lead Ore (Galena)", ar: "خام الرصاص (الجالينا)" } },
      { name: { en: "Tin Ore (Cassiterite)", ar: "خام القصدير (الكاسيتيريت)" } },
      { name: { en: "Columbite & Tantalite", ar: "الكولمبيت والتنتاليت" } },
    ],
  },
  {
    id: "imports",
    image: "/images/produce-bags.jpg",
    category: { en: "Imported Goods", ar: "البضائع المستوردة" },
    blurb: {
      en: "Procured from vetted manufacturers and delivered to your warehouse or site.",
      ar: "نشتريها من مصنّعين جرى التحقّق منهم ونوصّلها إلى مستودعك أو موقعك.",
    },
    items: [
      { name: { en: "Industrial Machinery", ar: "الآلات الصناعية" } },
      { name: { en: "Agricultural Equipment", ar: "المعدات الزراعية" } },
      { name: { en: "Building Materials", ar: "مواد البناء" } },
      { name: { en: "Automobiles & Spare Parts", ar: "السيارات وقطع الغيار" } },
      {
        name: { en: "Generators & Power Equipment", ar: "المولّدات ومعدات الطاقة" },
      },
      {
        name: { en: "Solar & Renewable Systems", ar: "أنظمة الطاقة الشمسية والمتجددة" },
      },
      {
        name: { en: "Electrical Fittings & Cables", ar: "التمديدات الكهربائية والكابلات" },
      },
      { name: { en: "Steel & Metal Products", ar: "منتجات الحديد والمعادن" } },
      { name: { en: "Chemicals & Fertilisers", ar: "الكيماويات والأسمدة" } },
      {
        name: { en: "Medical & Laboratory Equipment", ar: "المعدات الطبية والمخبرية" },
      },
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: { en: "Enquiry", ar: "الاستفسار" },
    text: {
      en: "You tell us the commodity, grade, volume and destination. We come back with an indicative offer.",
      ar: "تخبرنا بالسلعة والرتبة والكمية والوجهة، فنعود إليك بعرض سعر استرشادي.",
    },
  },
  {
    step: "02",
    title: { en: "Contract & Terms", ar: "العقد والشروط" },
    text: {
      en: "We agree the specification, Incoterms and payment arrangement, then issue a sales contract and proforma invoice.",
      ar: "نتفق على المواصفة وشروط التسليم (إنكوترمز) وترتيب الدفع، ثم نُصدر عقد بيع وفاتورة مبدئية.",
    },
  },
  {
    step: "03",
    title: { en: "Sourcing & Checks", ar: "التوريد والفحص" },
    text: {
      en: "We source and consolidate the order, and check it against the agreed specification before loading.",
      ar: "نورّد الطلب ونجمّعه، ونطابقه مع المواصفة المتفق عليها قبل التحميل.",
    },
  },
  {
    step: "04",
    title: { en: "Shipment & Documents", ar: "الشحن والمستندات" },
    text: {
      en: "We book space, load and ship, and hand over the document set the buyer needs to take delivery.",
      ar: "نحجز المساحة ونحمّل ونشحن، ونسلّم حزمة المستندات التي يحتاجها المشتري لاستلام البضاعة.",
    },
  },
];

export const markets = [
  {
    region: { en: "Asia", ar: "آسيا" },
    detail: {
      en: "China, India, Vietnam, Indonesia, Malaysia",
      ar: "الصين، الهند، فيتنام، إندونيسيا، ماليزيا",
    },
  },
  {
    region: { en: "Europe", ar: "أوروبا" },
    detail: {
      en: "Netherlands, Germany, Turkey, Belgium, United Kingdom, Spain, Italy",
      ar: "هولندا، ألمانيا، تركيا، بلجيكا، المملكة المتحدة، إسبانيا، إيطاليا",
    },
  },
  {
    region: { en: "Middle East", ar: "الشرق الأوسط" },
    detail: {
      en: "UAE, Saudi Arabia, Lebanon, Qatar, Kuwait, Oman, Bahrain",
      ar: "الإمارات، السعودية، لبنان، قطر، الكويت، عُمان، البحرين",
    },
  },
  {
    region: { en: "Africa", ar: "أفريقيا" },
    detail: {
      en: "Ghana, Côte d'Ivoire, Kenya, South Africa",
      ar: "غانا، ساحل العاج، كينيا، جنوب أفريقيا",
    },
  },
  {
    region: { en: "North America", ar: "أمريكا الشمالية" },
    detail: { en: "United States, Canada", ar: "الولايات المتحدة، كندا" },
  },
  {
    region: { en: "South America", ar: "أمريكا الجنوبية" },
    detail: { en: "Brazil", ar: "البرازيل" },
  },
];

export const differentiators = [
  {
    title: { en: "One accountable partner", ar: "شريك واحد مسؤول" },
    text: {
      en: "Sourcing, shipping and clearing sit under one roof. When something moves, you have one number to call — not four vendors pointing at each other.",
      ar: "التوريد والشحن والتخليص تحت سقف واحد. وعند أي تطوّر لديك رقم واحد تتصل به — لا أربعة مورّدين يحيل كلٌّ منهم المسؤولية إلى الآخر.",
    },
  },
  {
    title: {
      en: "The specification is agreed in writing",
      ar: "المواصفة تُعتمد كتابةً",
    },
    text: {
      en: "We fix grade, packaging and tolerances in the contract before anything ships, so both sides know exactly what is being bought and sold.",
      ar: "نثبّت الرتبة والتعبئة وحدود التفاوت في العقد قبل شحن أي شيء، ليعرف الطرفان بالضبط ما الذي يُشترى ويُباع.",
    },
  },
  {
    title: {
      en: "Direct supplier relationships",
      ar: "علاقات مباشرة مع المورّدين",
    },
    text: {
      en: "We buy through networks we have built and maintain rather than through layers of middlemen, which keeps pricing competitive and supply steadier.",
      ar: "نشتري عبر شبكات بنيناها ونحافظ عليها، لا عبر طبقات من الوسطاء، ما يبقي السعر تنافسياً والتوريد أكثر استقراراً.",
    },
  },
  {
    title: {
      en: "Documentation handled properly",
      ar: "مستندات مُعدّة كما يجب",
    },
    text: {
      en: "Most trade disputes are paperwork disputes. We prepare complete, consistent document sets so consignments are not held up at destination.",
      ar: "معظم النزاعات التجارية نزاعات مستندات. نُعدّ حزم مستندات كاملة ومتّسقة حتى لا تتعطّل الشحنات في بلد الوصول.",
    },
  },
];
