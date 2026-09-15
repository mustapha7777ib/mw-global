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
      tr: "Tarımsal Emtia İhracatı",
      zh: "农产品出口",
      fr: "Export de Produits Agricoles",
    },
    short: {
      en: "Sourcing, consolidation and export of raw and semi-processed agricultural produce.",
      ar: "توريد وتجميع وتصدير المحاصيل الزراعية الخام وشبه المصنّعة.",
      tr: "Ham ve yarı işlenmiş tarım ürünlerinin tedariki, konsolidasyonu ve ihracatı.",
      zh: "原料及初加工农产品的采购、集货与出口。",
      fr: "Sourcing, consolidation et export de produits agricoles bruts et semi-transformés.",
    },
    body: {
      en: "We source through established supplier networks, consolidate to the volume a buyer needs, and ship to markets in Asia, Europe, the Middle East and beyond. The specification is agreed in writing before the contract is signed, and we work to it.",
      ar: "نورّد عبر شبكات مورّدين راسخة، ونجمّع الكميات حتى الحجم الذي يطلبه المشتري، ثم نشحن إلى أسواق آسيا وأوروبا والشرق الأوسط وما وراءها. تُعتمد المواصفة كتابةً قبل توقيع العقد، ونلتزم بها.",
      tr: "Yerleşik tedarikçi ağları üzerinden tedarik eder, alıcının ihtiyaç duyduğu hacimde konsolide eder ve Asya, Avrupa, Orta Doğu ve ötesindeki pazarlara sevk ederiz. Spesifikasyon sözleşme imzalanmadan önce yazılı olarak belirlenir ve buna uyarız.",
      zh: "我们通过成熟的供应商网络采购，按买家所需数量集货，并发运至亚洲、欧洲、中东及其他市场。规格在签约前以书面形式确定，我们严格照此执行。",
      fr: "Nous sourçons via des réseaux de fournisseurs établis, consolidons jusqu'au volume dont l'acheteur a besoin, et expédions vers les marchés d'Asie, d'Europe, du Moyen-Orient et au-delà. La spécification est arrêtée par écrit avant la signature du contrat, et nous nous y tenons.",
    },
    points: [
      {
        en: "Sourcing through established supplier networks",
        ar: "التوريد عبر شبكات مورّدين راسخة",
        tr: "Yerleşik tedarikçi ağları üzerinden tedarik",
        zh: "通过成熟的供应商网络采购",
        fr: "Sourcing via des réseaux de fournisseurs établis",
      },
      {
        en: "Consolidation to full container volumes",
        ar: "التجميع حتى حمولة حاوية كاملة",
        tr: "Tam konteyner hacmine konsolidasyon",
        zh: "集货至整柜数量",
        fr: "Consolidation jusqu'au conteneur complet",
      },
      {
        en: "Cleaning, sorting and export-standard bagging",
        ar: "التنظيف والفرز والتعبئة وفق معايير التصدير",
        tr: "Temizleme, ayıklama ve ihracat standardında çuvallama",
        zh: "清理、分选与出口标准装袋",
        fr: "Nettoyage, triage et ensachage aux normes export",
      },
      {
        en: "Pre-shipment inspection arranged where buyers require it",
        ar: "ترتيب الفحص قبل الشحن عند طلب المشتري",
        tr: "Alıcının talep ettiği durumlarda sevkiyat öncesi gözetim",
        zh: "买家要求时安排装运前检验",
        fr: "Inspection avant embarquement organisée si requise",
      },
      {
        en: "Export documentation prepared and submitted",
        ar: "إعداد مستندات التصدير وتقديمها",
        tr: "İhracat belgelerinin hazırlanması ve sunulması",
        zh: "出口单证的编制与递交",
        fr: "Documents d'export préparés et déposés",
      },
    ],
  },
  {
    slug: "minerals",
    image: "/images/mining-excavator.jpg",
    title: {
      en: "Solid Minerals Trading",
      ar: "تجارة المعادن الصلبة",
      tr: "Katı Mineral Ticareti",
      zh: "固体矿产贸易",
      fr: "Négoce de Minerais Solides",
    },
    short: {
      en: "Sourcing and export of industrial minerals and ores to buyer specification.",
      ar: "توريد وتصدير المعادن والخامات الصناعية وفق مواصفة المشتري.",
      tr: "Alıcı spesifikasyonuna göre sınai mineral ve cevher tedariki ve ihracatı.",
      zh: "按买家规格采购并出口工业矿物与矿石。",
      fr: "Sourcing et export de minerais et minéraux industriels selon la spécification de l'acheteur.",
    },
    body: {
      en: "We work with mining and processing partners to supply industrial minerals and ores. Grade, volume and delivery terms are agreed upfront, and independent testing can be arranged where a buyer wants verification before shipment.",
      ar: "نعمل مع شركاء في التعدين والمعالجة لتوريد المعادن والخامات الصناعية. تُتَّفق الرتبة والكمية وشروط التسليم مسبقاً، ويمكن ترتيب فحص مستقل إذا أراد المشتري التحقّق قبل الشحن.",
      tr: "Sınai mineral ve cevher tedariki için madencilik ve işleme ortaklarıyla çalışırız. Tenör, hacim ve teslim koşulları baştan belirlenir; alıcı sevkiyat öncesi doğrulama isterse bağımsız analiz ayarlanabilir.",
      zh: "我们与采矿和加工伙伴合作供应工业矿物与矿石。品位、数量与交付条件事先约定；买家如需装运前验证，可安排独立化验。",
      fr: "Nous travaillons avec des partenaires miniers et de traitement pour fournir des minerais et minéraux industriels. La teneur, le volume et les conditions de livraison sont convenus en amont, et une analyse indépendante peut être organisée lorsque l'acheteur souhaite une vérification avant l'embarquement.",
    },
    points: [
      {
        en: "Sourcing through vetted mining and processing partners",
        ar: "التوريد عبر شركاء تعدين ومعالجة جرى التحقّق منهم",
        tr: "Denetlenmiş madencilik ve işleme ortakları üzerinden tedarik",
        zh: "通过经审核的采矿与加工伙伴采购",
        fr: "Sourcing via des partenaires miniers et de traitement vérifiés",
      },
      {
        en: "Sorting and grading to the agreed specification",
        ar: "الفرز والتصنيف وفق المواصفة المتفق عليها",
        tr: "Anlaşılan spesifikasyona göre ayıklama ve tasnif",
        zh: "按约定规格分选与定级",
        fr: "Triage et classification selon la spécification convenue",
      },
      {
        en: "Independent assay arranged on request",
        ar: "ترتيب تحليل مخبري مستقل عند الطلب",
        tr: "Talep üzerine bağımsız analiz",
        zh: "可应要求安排独立化验",
        fr: "Analyse indépendante organisée sur demande",
      },
      {
        en: "Transport arranged from site to port",
        ar: "ترتيب النقل من الموقع إلى الميناء",
        tr: "Sahadan limana taşıma organizasyonu",
        zh: "安排自矿区至港口的运输",
        fr: "Transport organisé du site au port",
      },
      {
        en: "Export documentation prepared and submitted",
        ar: "إعداد مستندات التصدير وتقديمها",
        tr: "İhracat belgelerinin hazırlanması ve sunulması",
        zh: "出口单证的编制与递交",
        fr: "Documents d'export préparés et déposés",
      },
    ],
  },
  {
    slug: "import",
    image: "/images/warehouse-forklift.jpg",
    title: {
      en: "General Goods Import",
      ar: "استيراد البضائع العامة",
      tr: "Genel Ürün İthalatı",
      zh: "一般商品进口",
      fr: "Import de Marchandises Générales",
    },
    short: {
      en: "Procurement and delivery of machinery, industrial equipment, building materials and consumer goods.",
      ar: "شراء وتوصيل الآلات والمعدات الصناعية ومواد البناء والسلع الاستهلاكية.",
      tr: "Makine, sınai ekipman, yapı malzemeleri ve tüketim ürünlerinin tedariki ve teslimi.",
      zh: "机械、工业设备、建筑材料及消费品的采购与交付。",
      fr: "Achat et livraison de machines, équipements industriels, matériaux de construction et biens de consommation.",
    },
    body: {
      en: "We act as the buying arm for clients who need goods brought in without running an international procurement desk themselves. We identify and vet suppliers, negotiate terms, and handle the shipment through to delivery — one invoice, one point of contact.",
      ar: "نعمل ذراعاً شرائية للعملاء الذين يحتاجون إلى استيراد بضائع دون أن يديروا قسم مشتريات دولياً بأنفسهم. نحدّد المورّدين ونتحقّق منهم، ونتفاوض على الشروط، ونتابع الشحنة حتى التسليم — فاتورة واحدة وجهة اتصال واحدة.",
      tr: "Kendi uluslararası satın alma birimini kurmadan ithalat yapmak isteyen müşteriler için satın alma kolu olarak çalışırız. Tedarikçileri belirler ve denetler, koşulları müzakere eder ve sevkiyatı teslimata kadar yürütürüz — tek fatura, tek muhatap.",
      zh: "对于无需自建国际采购部门却需要进口的客户，我们承担其采购职能。我们筛选并审核供应商、谈判条件，并全程负责运输直至交付 —— 一张发票，一个对接人。",
      fr: "Nous agissons comme bras d'achat pour les clients qui doivent importer des marchandises sans gérer eux-mêmes un service achats international. Nous identifions et vérifions les fournisseurs, négocions les conditions, et suivons l'expédition jusqu'à la livraison — une facture, un interlocuteur.",
    },
    points: [
      {
        en: "Supplier identification, vetting and price negotiation",
        ar: "تحديد المورّدين والتحقّق منهم والتفاوض على الأسعار",
        tr: "Tedarikçi belirleme, denetim ve fiyat müzakeresi",
        zh: "供应商筛选、审核与价格谈判",
        fr: "Identification et vérification des fournisseurs, négociation des prix",
      },
      {
        en: "Inspection arranged at origin before shipment",
        ar: "ترتيب الفحص في بلد المنشأ قبل الشحن",
        tr: "Sevkiyat öncesi menşede gözetim",
        zh: "装运前在原产地安排检验",
        fr: "Inspection à l'origine avant embarquement",
      },
      {
        en: "Import documentation and clearance handled",
        ar: "إدارة مستندات الاستيراد والتخليص الجمركي",
        tr: "İthalat belgeleri ve gümrükleme işlemleri",
        zh: "办理进口单证与清关",
        fr: "Documents d'import et dédouanement pris en charge",
      },
      {
        en: "Consolidated shipping for smaller orders",
        ar: "الشحن المجمّع للطلبات الصغيرة",
        tr: "Küçük siparişler için konsolide sevkiyat",
        zh: "小批量订单的拼箱运输",
        fr: "Groupage pour les commandes de faible volume",
      },
      {
        en: "Delivery to your warehouse or site",
        ar: "التوصيل إلى مستودعك أو موقعك",
        tr: "Deponuza veya sahanıza teslim",
        zh: "送达您的仓库或工地",
        fr: "Livraison à votre entrepôt ou sur site",
      },
    ],
  },
  {
    slug: "logistics",
    image: "/images/ship-docked.jpg",
    title: {
      en: "Freight Forwarding & Clearing",
      ar: "الشحن والتخليص الجمركي",
      tr: "Nakliye ve Gümrükleme",
      zh: "国际货运与清关",
      fr: "Transit & Dédouanement",
    },
    short: {
      en: "Ocean and air freight, customs clearance, warehousing and inland haulage.",
      ar: "شحن بحري وجوي، وتخليص جمركي، وتخزين، ونقل بري داخلي.",
      tr: "Deniz ve hava taşımacılığı, gümrükleme, depolama ve iç nakliye.",
      zh: "海运与空运、清关、仓储及内陆运输。",
      fr: "Fret maritime et aérien, dédouanement, entreposage et transport terrestre.",
    },
    body: {
      en: "Our logistics desk serves both our own trade flows and third-party clients. We book space with carriers, handle the clearance paperwork, and move cargo inland to its final destination.",
      ar: "يخدم قسمنا اللوجستي تدفّقاتنا التجارية وعملاء الغير على حدٍّ سواء. نحجز المساحة لدى شركات النقل، وننجز أوراق التخليص، وننقل البضاعة برّاً إلى وجهتها النهائية.",
      tr: "Lojistik birimimiz hem kendi ticaret akışlarımıza hem de üçüncü taraf müşterilere hizmet verir. Taşıyıcılarda yer ayırtır, gümrük evrakını yürütür ve yükü iç noktalardaki nihai varış yerine ulaştırırız.",
      zh: "我们的物流部门既服务于自有贸易流，也服务于第三方客户。我们向承运人订舱、办理清关文件，并将货物运至内陆最终目的地。",
      fr: "Notre équipe logistique sert aussi bien nos propres flux commerciaux que des clients tiers. Nous réservons l'espace auprès des transporteurs, gérons les formalités de dédouanement, et acheminons la marchandise par voie terrestre jusqu'à sa destination finale.",
    },
    points: [
      {
        en: "Ocean and air freight booking",
        ar: "حجز الشحن البحري والجوي",
        tr: "Deniz ve hava taşıma rezervasyonu",
        zh: "海运与空运订舱",
        fr: "Réservation de fret maritime et aérien",
      },
      {
        en: "Customs clearance and entry filing",
        ar: "التخليص الجمركي وتقديم البيانات الجمركية",
        tr: "Gümrükleme ve beyan işlemleri",
        zh: "清关与报关申报",
        fr: "Dédouanement et dépôt des déclarations",
      },
      {
        en: "Warehousing and stock handling",
        ar: "التخزين ومناولة المخزون",
        tr: "Depolama ve stok yönetimi",
        zh: "仓储与库存操作",
        fr: "Entreposage et gestion des stocks",
      },
      {
        en: "Inland haulage and delivery",
        ar: "النقل البري والتسليم",
        tr: "İç nakliye ve teslimat",
        zh: "内陆运输与配送",
        fr: "Transport terrestre et livraison",
      },
      {
        en: "Cargo insurance arranged on request",
        ar: "ترتيب التأمين على البضائع عند الطلب",
        tr: "Talep üzerine yük sigortası",
        zh: "可应要求安排货物保险",
        fr: "Assurance cargo organisée sur demande",
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
  moisture: { en: "Moisture", ar: "الرطوبة", tr: "Nem", zh: "水分", fr: "Humidité" },
  purity: { en: "Purity", ar: "النقاء", tr: "Saflık", zh: "纯度", fr: "Pureté" },
  foreignMatter: {
    en: "Foreign Matter",
    ar: "الشوائب",
    tr: "Yabancı madde",
    zh: "杂质",
    fr: "Matières étrangères",
  },
  packaging: {
    en: "Packaging",
    ar: "التعبئة",
    tr: "Ambalaj",
    zh: "包装",
    fr: "Conditionnement",
  },
  minOrder: {
    en: "Min. Order",
    ar: "أقل كمية للطلب",
    tr: "Asgari sipariş",
    zh: "最小起订量",
    fr: "Commande minimum",
  },
  colour: { en: "Colour", ar: "اللون", tr: "Renk", zh: "颜色", fr: "Couleur" },
  form: { en: "Form", ar: "الشكل", tr: "Form", zh: "形态", fr: "Forme" },
  ash: {
    en: "Ash Content",
    ar: "نسبة الرماد",
    tr: "Kül oranı",
    zh: "灰分",
    fr: "Teneur en cendres",
  },
  calorific: {
    en: "Calorific Value",
    ar: "القيمة الحرارية",
    tr: "Kalori değeri",
    zh: "热值",
    fr: "Pouvoir calorifique",
  },
  fixedCarbon: {
    en: "Fixed Carbon",
    ar: "الكربون الثابت",
    tr: "Sabit karbon",
    zh: "固定碳",
    fr: "Carbone fixe",
  },
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
      tr: "Tarımsal ve Doğal Ürünler",
      zh: "农产品与天然产品",
      fr: "Produits Agricoles & Naturels",
    },
    blurb: {
      en: "Farm and forest products, sourced, consolidated and export-packed to the specification agreed with the buyer.",
      ar: "منتجات المزرعة والغابة، نورّدها ونجمّعها ونعبّئها للتصدير وفق المواصفة المتفق عليها مع المشتري.",
      tr: "Alıcıyla anlaşılan spesifikasyona göre tedarik edilen, konsolide edilen ve ihracata uygun paketlenen tarım ve orman ürünleri.",
      zh: "按与买家约定的规格采购、集货并进行出口包装的农林产品。",
      fr: "Produits de la ferme et de la forêt, sourcés, consolidés et conditionnés pour l'export selon la spécification convenue avec l'acheteur.",
    },
    items: [
      {
        name: {
          en: "Sesame Seeds",
          ar: "بذور السمسم",
          tr: "Susam",
          zh: "芝麻",
          fr: "Sésame",
        },
        specs: [
          { label: spec.purity, value: "≥ 99%" },
          { label: spec.moisture, value: "≤ 8%" },
          {
            label: {
              en: "Oil Content",
              ar: "نسبة الزيت",
              tr: "Yağ oranı",
              zh: "含油量",
              fr: "Teneur en huile",
            },
            value: "≥ 48%",
          },
          { label: spec.foreignMatter, value: "≤ 1%" },
          {
            label: spec.packaging,
            value: {
              en: "25 kg / 50 kg bags",
              ar: "أكياس 25 كجم / 50 كجم",
              tr: "25 kg / 50 kg çuval",
              zh: "25 kg / 50 kg 袋装",
              fr: "Sacs de 25 / 50 kg",
            },
          },
          { label: spec.minOrder, value: "1 × 20ft FCL" },
        ],
      },
      {
        name: {
          en: "Raw Cashew Nuts",
          ar: "الكاجو الخام",
          tr: "Ham Kaju",
          zh: "生腰果",
          fr: "Noix de Cajou Brutes",
        },
        specs: [
          {
            label: {
              en: "Nut Count (KOR)",
              ar: "مردود الحبّة (KOR)",
              tr: "Randıman (KOR)",
              zh: "出仁率（KOR）",
              fr: "Rendement (KOR)",
            },
            value: "46–52 lbs / 80kg",
          },
          { label: spec.moisture, value: "≤ 10%" },
          {
            label: {
              en: "Defective Nuts",
              ar: "الحبّات المعيبة",
              tr: "Kusurlu tane",
              zh: "缺陷果",
              fr: "Noix défectueuses",
            },
            value: "≤ 8%",
          },
          { label: spec.foreignMatter, value: "≤ 1%" },
          {
            label: spec.packaging,
            value: {
              en: "80 kg jute bags",
              ar: "أكياس جوت 80 كجم",
              tr: "80 kg jüt çuval",
              zh: "80 kg 麻袋",
              fr: "Sacs de jute 80 kg",
            },
          },
          { label: spec.minOrder, value: "1 × 20ft FCL" },
        ],
      },
      {
        name: {
          en: "Dried Hibiscus Flower (Zobo)",
          ar: "زهور الكركديه المجفّفة",
          tr: "Kurutulmuş Hibiskus Çiçeği (Zobo)",
          zh: "干洛神花（Zobo）",
          fr: "Fleur d'Hibiscus Séchée (Bissap)",
        },
        specs: [
          {
            label: {
              en: "Botanical Name",
              ar: "الاسم النباتي",
              tr: "Botanik adı",
              zh: "植物学名",
              fr: "Nom botanique",
            },
            value: "Hibiscus sabdariffa",
          },
          { label: spec.moisture, value: "≤ 12%" },
          {
            label: spec.colour,
            value: {
              en: "Deep crimson / burgundy",
              ar: "قرمزي غامق / عنّابي",
              tr: "Koyu kızıl / bordo",
              zh: "深红 / 酒红",
              fr: "Cramoisi / bordeaux",
            },
          },
          {
            label: {
              en: "Processing",
              ar: "المعالجة",
              tr: "İşleme",
              zh: "加工方式",
              fr: "Traitement",
            },
            value: {
              en: "Sun-dried, hand-sorted",
              ar: "مجفّفة شمسياً، مفروزة يدوياً",
              tr: "Güneşte kurutulmuş, elle ayıklanmış",
              zh: "日晒干燥、人工分选",
              fr: "Séchage solaire, tri manuel",
            },
          },
          {
            label: spec.packaging,
            value: {
              en: "25 kg / 50 kg PP bags",
              ar: "أكياس PP 25 كجم / 50 كجم",
              tr: "25 kg / 50 kg PP çuval",
              zh: "25 kg / 50 kg PP 袋装",
              fr: "Sacs PP 25 / 50 kg",
            },
          },
          { label: spec.minOrder, value: "1 MT" },
        ],
      },
      {
        name: {
          en: "Dried Chilli Pepper",
          ar: "الفلفل الحار المجفّف",
          tr: "Kurutulmuş Acı Biber",
          zh: "干辣椒",
          fr: "Piment Séché",
        },
        specs: [
          { label: spec.moisture, value: "≤ 12%" },
          {
            label: spec.colour,
            value: {
              en: "Bright red",
              ar: "أحمر زاهٍ",
              tr: "Parlak kırmızı",
              zh: "鲜红",
              fr: "Rouge vif",
            },
          },
          {
            label: spec.form,
            value: {
              en: "Whole / Crushed / Ground",
              ar: "حبّ كامل / مجروش / مطحون",
              tr: "Bütün / Kırılmış / Öğütülmüş",
              zh: "整颗 / 破碎 / 研磨",
              fr: "Entier / Concassé / Moulu",
            },
          },
          {
            label: {
              en: "Heat Level",
              ar: "درجة الحدّة",
              tr: "Acılık derecesi",
              zh: "辣度",
              fr: "Force",
            },
            value: "40,000–100,000 SHU",
          },
          {
            label: spec.packaging,
            value: {
              en: "25 kg / 50 kg PP bags",
              ar: "أكياس PP 25 كجم / 50 كجم",
              tr: "25 kg / 50 kg PP çuval",
              zh: "25 kg / 50 kg PP 袋装",
              fr: "Sacs PP 25 / 50 kg",
            },
          },
          { label: spec.minOrder, value: "1 MT" },
        ],
      },
      {
        name: {
          en: "Soybeans",
          ar: "فول الصويا",
          tr: "Soya Fasulyesi",
          zh: "大豆",
          fr: "Soja",
        },
        specs: [
          {
            label: {
              en: "Variety",
              ar: "الصنف",
              tr: "Çeşit",
              zh: "品种",
              fr: "Variété",
            },
            value: {
              en: "Non-GMO",
              ar: "غير معدّل وراثياً (Non-GMO)",
              tr: "GDO'suz",
              zh: "非转基因",
              fr: "Non-OGM",
            },
          },
          {
            label: {
              en: "Protein Content",
              ar: "نسبة البروتين",
              tr: "Protein oranı",
              zh: "蛋白质含量",
              fr: "Teneur en protéines",
            },
            value: "≥ 36%",
          },
          { label: spec.moisture, value: "≤ 13%" },
          {
            label: {
              en: "Oil Content",
              ar: "نسبة الزيت",
              tr: "Yağ oranı",
              zh: "含油量",
              fr: "Teneur en huile",
            },
            value: "≥ 18%",
          },
          {
            label: spec.packaging,
            value: {
              en: "25 kg / 50 kg bags / bulk",
              ar: "أكياس 25 كجم / 50 كجم أو سائب",
              tr: "25 kg / 50 kg çuval / dökme",
              zh: "25 kg / 50 kg 袋装 / 散装",
              fr: "Sacs 25 / 50 kg ou vrac",
            },
          },
          { label: spec.minOrder, value: "1 × 20ft FCL" },
        ],
      },
      {
        name: {
          en: "Ginger (Dried Split & Powder)",
          ar: "الزنجبيل (مجفّف مشقوق ومطحون)",
          tr: "Zencefil (Kurutulmuş Dilim ve Toz)",
          zh: "生姜（干片与姜粉）",
          fr: "Gingembre (Éclats Séchés & Poudre)",
        },
        specs: [
          {
            label: spec.form,
            value: {
              en: "Dried Split / Powder",
              ar: "مجفّف مشقوق / مطحون",
              tr: "Kurutulmuş dilim / Toz",
              zh: "干片 / 粉末",
              fr: "Éclats séchés / Poudre",
            },
          },
          { label: spec.moisture, value: "≤ 10%" },
          {
            label: {
              en: "Gingerol",
              ar: "الجنجرول",
              tr: "Gingerol",
              zh: "姜辣素",
              fr: "Gingérol",
            },
            value: {
              en: "High (variety-dependent)",
              ar: "مرتفع (بحسب الصنف)",
              tr: "Yüksek (çeşide bağlı)",
              zh: "高（视品种而定）",
              fr: "Élevé (selon la variété)",
            },
          },
          {
            label: {
              en: "Extraneous Matter",
              ar: "المواد الغريبة",
              tr: "Yabancı madde",
              zh: "外来杂质",
              fr: "Matières étrangères",
            },
            value: "≤ 1%",
          },
          {
            label: spec.packaging,
            value: {
              en: "25 kg / 50 kg jute / PP bags",
              ar: "أكياس جوت أو PP 25 كجم / 50 كجم",
              tr: "25 kg / 50 kg jüt / PP çuval",
              zh: "25 kg / 50 kg 麻袋 / PP 袋装",
              fr: "Sacs jute ou PP 25 / 50 kg",
            },
          },
          { label: spec.minOrder, value: "1 MT" },
        ],
      },
      {
        name: {
          en: "Gum Arabic",
          ar: "الصمغ العربي",
          tr: "Arap Zamkı",
          zh: "阿拉伯胶",
          fr: "Gomme Arabique",
        },
        specs: [
          {
            label: {
              en: "Botanical Source",
              ar: "المصدر النباتي",
              tr: "Botanik kaynak",
              zh: "植物来源",
              fr: "Source botanique",
            },
            value: "Acacia senegal / Acacia seyal",
          },
          { label: spec.moisture, value: "≤ 15%" },
          { label: spec.ash, value: "≤ 4%" },
          {
            label: {
              en: "Solubility",
              ar: "الذوبانية",
              tr: "Çözünürlük",
              zh: "溶解性",
              fr: "Solubilité",
            },
            value: {
              en: "Highly soluble in water",
              ar: "عالي الذوبان في الماء",
              tr: "Suda yüksek çözünürlük",
              zh: "水溶性佳",
              fr: "Très soluble dans l'eau",
            },
          },
          {
            label: spec.packaging,
            value: {
              en: "25 kg / 50 kg bags",
              ar: "أكياس 25 كجم / 50 كجم",
              tr: "25 kg / 50 kg çuval",
              zh: "25 kg / 50 kg 袋装",
              fr: "Sacs de 25 / 50 kg",
            },
          },
          { label: spec.minOrder, value: "1 MT" },
        ],
      },
      {
        name: {
          en: "Frankincense (Luban)",
          ar: "اللبان (الفرانكنسنس)",
          tr: "Günlük (Luban)",
          zh: "乳香（Luban）",
          fr: "Encens (Luban)",
        },
        specs: [
          {
            label: spec.form,
            value: {
              en: "Raw tears / Granules",
              ar: "قطرات خام / حبيبات",
              tr: "Ham damla / Granül",
              zh: "原粒 / 颗粒",
              fr: "Larmes brutes / Granulés",
            },
          },
          {
            label: spec.colour,
            value: {
              en: "Pale yellow to amber",
              ar: "أصفر فاتح إلى كهرماني",
              tr: "Açık sarıdan kehribara",
              zh: "浅黄至琥珀色",
              fr: "Jaune pâle à ambre",
            },
          },
          {
            label: spec.purity,
            value: {
              en: "High — minimal bark / debris",
              ar: "عالٍ — أقل قدر من اللحاء والشوائب",
              tr: "Yüksek — asgari kabuk / kalıntı",
              zh: "高 —— 树皮与杂质极少",
              fr: "Élevée — écorces et débris minimes",
            },
          },
          {
            label: spec.packaging,
            value: {
              en: "10 kg / 25 kg bags",
              ar: "أكياس 10 كجم / 25 كجم",
              tr: "10 kg / 25 kg çuval",
              zh: "10 kg / 25 kg 袋装",
              fr: "Sacs de 10 / 25 kg",
            },
          },
          { label: spec.minOrder, value: "500 kg" },
        ],
      },
      {
        name: {
          en: "Hardwood Charcoal",
          ar: "فحم الأخشاب الصلبة",
          tr: "Sert Ağaç Mangal Kömürü",
          zh: "硬木木炭",
          fr: "Charbon de Bois Dur",
        },
        specs: [
          { label: spec.moisture, value: "≤ 5%" },
          { label: spec.ash, value: "≤ 3%" },
          { label: spec.fixedCarbon, value: "≥ 75%" },
          { label: spec.calorific, value: "7,000–8,000 kcal/kg" },
          {
            label: spec.packaging,
            value: {
              en: "5 / 10 / 25 kg bags",
              ar: "أكياس 5 / 10 / 25 كجم",
              tr: "5 / 10 / 25 kg çuval",
              zh: "5 / 10 / 25 kg 袋装",
              fr: "Sacs de 5 / 10 / 25 kg",
            },
          },
          { label: spec.minOrder, value: "1 × 20ft FCL" },
        ],
      },
      {
        name: {
          en: "Mangrove Charcoal",
          ar: "فحم المانغروف",
          tr: "Mangrov Mangal Kömürü",
          zh: "红树林木炭",
          fr: "Charbon de Mangrove",
        },
        specs: [
          { label: spec.moisture, value: "≤ 5%" },
          { label: spec.ash, value: "≤ 3%" },
          { label: spec.fixedCarbon, value: "≥ 78%" },
          { label: spec.calorific, value: "7,500–8,500 kcal/kg" },
          {
            label: spec.packaging,
            value: {
              en: "5 / 10 / 25 kg bags",
              ar: "أكياس 5 / 10 / 25 كجم",
              tr: "5 / 10 / 25 kg çuval",
              zh: "5 / 10 / 25 kg 袋装",
              fr: "Sacs de 5 / 10 / 25 kg",
            },
          },
          { label: spec.minOrder, value: "1 × 20ft FCL" },
        ],
      },
    ],
  },
  {
    id: "minerals",
    image: "/images/ore-rock.jpg",
    category: {
      en: "Solid Minerals",
      ar: "المعادن الصلبة",
      tr: "Katı Mineraller",
      zh: "固体矿产",
      fr: "Minerais Solides",
    },
    blurb: {
      en: "Supplied to the grade agreed at contract, with independent testing arranged on request.",
      ar: "تُورَّد وفق الرتبة المتفق عليها في العقد، مع ترتيب فحص مستقل عند الطلب.",
      tr: "Sözleşmede anlaşılan tenöre göre tedarik edilir; talep üzerine bağımsız analiz ayarlanır.",
      zh: "按合同约定的品位供货，可应要求安排独立化验。",
      fr: "Fournis à la teneur convenue au contrat, avec analyse indépendante organisée sur demande.",
    },
    items: [
      {
        name: {
          en: "Lead Ore (Galena)",
          ar: "خام الرصاص (الجالينا)",
          tr: "Kurşun Cevheri (Galen)",
          zh: "铅矿（方铅矿）",
          fr: "Minerai de Plomb (Galène)",
        },
      },
      {
        name: {
          en: "Tin Ore (Cassiterite)",
          ar: "خام القصدير (الكاسيتيريت)",
          tr: "Kalay Cevheri (Kasiterit)",
          zh: "锡矿（锡石）",
          fr: "Minerai d'Étain (Cassitérite)",
        },
      },
      {
        name: {
          en: "Columbite & Tantalite",
          ar: "الكولمبيت والتنتاليت",
          tr: "Kolumbit ve Tantalit",
          zh: "铌铁矿与钽铁矿",
          fr: "Colombite & Tantalite",
        },
      },
    ],
  },
  {
    id: "imports",
    image: "/images/produce-bags.jpg",
    category: {
      en: "Imported Goods",
      ar: "البضائع المستوردة",
      tr: "İthal Ürünler",
      zh: "进口商品",
      fr: "Produits Importés",
    },
    blurb: {
      en: "Procured from vetted manufacturers and delivered to your warehouse or site.",
      ar: "نشتريها من مصنّعين جرى التحقّق منهم ونوصّلها إلى مستودعك أو موقعك.",
      tr: "Denetlenmiş üreticilerden tedarik edilir ve deponuza veya sahanıza teslim edilir.",
      zh: "从经审核的制造商采购，并送达您的仓库或工地。",
      fr: "Achetés auprès de fabricants vérifiés et livrés à votre entrepôt ou sur site.",
    },
    items: [
      {
        name: {
          en: "Industrial Machinery",
          ar: "الآلات الصناعية",
          tr: "Sınai Makineler",
          zh: "工业机械",
          fr: "Machines Industrielles",
        },
      },
      {
        name: {
          en: "Agricultural Equipment",
          ar: "المعدات الزراعية",
          tr: "Tarım Ekipmanları",
          zh: "农业机械",
          fr: "Équipements Agricoles",
        },
      },
      {
        name: {
          en: "Building Materials",
          ar: "مواد البناء",
          tr: "Yapı Malzemeleri",
          zh: "建筑材料",
          fr: "Matériaux de Construction",
        },
      },
      {
        name: {
          en: "Automobiles & Spare Parts",
          ar: "السيارات وقطع الغيار",
          tr: "Otomobil ve Yedek Parça",
          zh: "汽车与零配件",
          fr: "Automobiles & Pièces Détachées",
        },
      },
      {
        name: {
          en: "Generators & Power Equipment",
          ar: "المولّدات ومعدات الطاقة",
          tr: "Jeneratör ve Enerji Ekipmanları",
          zh: "发电机与电力设备",
          fr: "Groupes Électrogènes",
        },
      },
      {
        name: {
          en: "Solar & Renewable Systems",
          ar: "أنظمة الطاقة الشمسية والمتجددة",
          tr: "Güneş ve Yenilenebilir Enerji Sistemleri",
          zh: "太阳能与可再生能源系统",
          fr: "Systèmes Solaires & Renouvelables",
        },
      },
      {
        name: {
          en: "Electrical Fittings & Cables",
          ar: "التمديدات الكهربائية والكابلات",
          tr: "Elektrik Malzemeleri ve Kablolar",
          zh: "电气配件与电缆",
          fr: "Appareillage Électrique & Câbles",
        },
      },
      {
        name: {
          en: "Steel & Metal Products",
          ar: "منتجات الحديد والمعادن",
          tr: "Çelik ve Metal Ürünleri",
          zh: "钢材与金属制品",
          fr: "Produits Sidérurgiques & Métalliques",
        },
      },
      {
        name: {
          en: "Chemicals & Fertilisers",
          ar: "الكيماويات والأسمدة",
          tr: "Kimyasallar ve Gübreler",
          zh: "化工品与化肥",
          fr: "Produits Chimiques & Engrais",
        },
      },
      {
        name: {
          en: "Medical & Laboratory Equipment",
          ar: "المعدات الطبية والمخبرية",
          tr: "Tıbbi ve Laboratuvar Ekipmanları",
          zh: "医疗与实验室设备",
          fr: "Équipements Médicaux & de Laboratoire",
        },
      },
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: {
      en: "Enquiry",
      ar: "الاستفسار",
      tr: "Talep",
      zh: "询价",
      fr: "Demande",
    },
    text: {
      en: "You tell us the commodity, grade, volume and destination. We come back with an indicative offer.",
      ar: "تخبرنا بالسلعة والرتبة والكمية والوجهة، فنعود إليك بعرض سعر استرشادي.",
      tr: "Ürünü, kalitesini, miktarı ve varış noktasını bize iletirsiniz. Size gösterge niteliğinde bir teklifle döneriz.",
      zh: "您告知产品、等级、数量与目的地，我们回复参考报价。",
      fr: "Vous nous indiquez le produit, la qualité, le volume et la destination. Nous revenons vers vous avec une offre indicative.",
    },
  },
  {
    step: "02",
    title: {
      en: "Contract & Terms",
      ar: "العقد والشروط",
      tr: "Sözleşme ve Koşullar",
      zh: "合同与条款",
      fr: "Contrat & Conditions",
    },
    text: {
      en: "We agree the specification, Incoterms and payment arrangement, then issue a sales contract and proforma invoice.",
      ar: "نتفق على المواصفة وشروط التسليم (إنكوترمز) وترتيب الدفع، ثم نُصدر عقد بيع وفاتورة مبدئية.",
      tr: "Spesifikasyon, Incoterms ve ödeme düzeni üzerinde anlaşır, ardından satış sözleşmesi ve proforma fatura düzenleriz.",
      zh: "我们就规格、贸易术语与付款方式达成一致，随后出具销售合同与形式发票。",
      fr: "Nous convenons de la spécification, des Incoterms et des modalités de paiement, puis émettons un contrat de vente et une facture proforma.",
    },
  },
  {
    step: "03",
    title: {
      en: "Sourcing & Checks",
      ar: "التوريد والفحص",
      tr: "Tedarik ve Kontroller",
      zh: "采购与检验",
      fr: "Sourcing & Contrôles",
    },
    text: {
      en: "We source and consolidate the order, and check it against the agreed specification before loading.",
      ar: "نورّد الطلب ونجمّعه، ونطابقه مع المواصفة المتفق عليها قبل التحميل.",
      tr: "Siparişi tedarik eder, konsolide eder ve yüklemeden önce anlaşılan spesifikasyona göre kontrol ederiz.",
      zh: "我们采购并集货，装运前对照约定规格进行核验。",
      fr: "Nous sourçons et consolidons la commande, puis la contrôlons au regard de la spécification convenue avant chargement.",
    },
  },
  {
    step: "04",
    title: {
      en: "Shipment & Documents",
      ar: "الشحن والمستندات",
      tr: "Sevkiyat ve Belgeler",
      zh: "装运与单证",
      fr: "Expédition & Documents",
    },
    text: {
      en: "We book space, load and ship, and hand over the document set the buyer needs to take delivery.",
      ar: "نحجز المساحة ونحمّل ونشحن، ونسلّم حزمة المستندات التي يحتاجها المشتري لاستلام البضاعة.",
      tr: "Yer ayırtır, yükler ve sevk ederiz; alıcının teslim alması için gereken belge setini teslim ederiz.",
      zh: "我们订舱、装货并发运，并交付买家提货所需的全套单证。",
      fr: "Nous réservons l'espace, chargeons et expédions, puis remettons le jeu de documents dont l'acheteur a besoin pour prendre livraison.",
    },
  },
];

export const markets = [
  {
    region: {
      en: "Asia",
      ar: "آسيا",
      tr: "Asya",
      zh: "亚洲",
      fr: "Asie",
    },
    detail: {
      en: "China, India, Vietnam, Indonesia, Malaysia",
      ar: "الصين، الهند، فيتنام، إندونيسيا، ماليزيا",
      tr: "Çin, Hindistan, Vietnam, Endonezya, Malezya",
      zh: "中国、印度、越南、印度尼西亚、马来西亚",
      fr: "Chine, Inde, Vietnam, Indonésie, Malaisie",
    },
  },
  {
    region: {
      en: "Europe",
      ar: "أوروبا",
      tr: "Avrupa",
      zh: "欧洲",
      fr: "Europe",
    },
    detail: {
      en: "Netherlands, Germany, Turkey, Belgium, United Kingdom, Spain, Italy",
      ar: "هولندا، ألمانيا، تركيا، بلجيكا، المملكة المتحدة، إسبانيا، إيطاليا",
      tr: "Hollanda, Almanya, Türkiye, Belçika, Birleşik Krallık, İspanya, İtalya",
      zh: "荷兰、德国、土耳其、比利时、英国、西班牙、意大利",
      fr: "Pays-Bas, Allemagne, Turquie, Belgique, Royaume-Uni, Espagne, Italie",
    },
  },
  {
    region: {
      en: "Middle East",
      ar: "الشرق الأوسط",
      tr: "Orta Doğu",
      zh: "中东",
      fr: "Moyen-Orient",
    },
    detail: {
      en: "UAE, Saudi Arabia, Lebanon, Qatar, Kuwait, Oman, Bahrain",
      ar: "الإمارات، السعودية، لبنان، قطر، الكويت، عُمان، البحرين",
      tr: "BAE, Suudi Arabistan, Lübnan, Katar, Kuveyt, Umman, Bahreyn",
      zh: "阿联酋、沙特阿拉伯、黎巴嫩、卡塔尔、科威特、阿曼、巴林",
      fr: "Émirats arabes unis, Arabie saoudite, Liban, Qatar, Koweït, Oman, Bahreïn",
    },
  },
  {
    region: {
      en: "Africa",
      ar: "أفريقيا",
      tr: "Afrika",
      zh: "非洲",
      fr: "Afrique",
    },
    detail: {
      en: "Ghana, Côte d'Ivoire, Kenya, South Africa",
      ar: "غانا، ساحل العاج، كينيا، جنوب أفريقيا",
      tr: "Gana, Fildişi Sahili, Kenya, Güney Afrika",
      zh: "加纳、科特迪瓦、肯尼亚、南非",
      fr: "Ghana, Côte d'Ivoire, Kenya, Afrique du Sud",
    },
  },
  {
    region: {
      en: "North America",
      ar: "أمريكا الشمالية",
      tr: "Kuzey Amerika",
      zh: "北美洲",
      fr: "Amérique du Nord",
    },
    detail: {
      en: "United States, Canada",
      ar: "الولايات المتحدة، كندا",
      tr: "Amerika Birleşik Devletleri, Kanada",
      zh: "美国、加拿大",
      fr: "États-Unis, Canada",
    },
  },
  {
    region: {
      en: "South America",
      ar: "أمريكا الجنوبية",
      tr: "Güney Amerika",
      zh: "南美洲",
      fr: "Amérique du Sud",
    },
    detail: {
      en: "Brazil",
      ar: "البرازيل",
      tr: "Brezilya",
      zh: "巴西",
      fr: "Brésil",
    },
  },
];

export const differentiators = [
  {
    title: {
      en: "One accountable partner",
      ar: "شريك واحد مسؤول",
      tr: "Tek sorumlu iş ortağı",
      zh: "一个负责到底的伙伴",
      fr: "Un seul interlocuteur responsable",
    },
    text: {
      en: "Sourcing, shipping and clearing sit under one roof. When something moves, you have one number to call — not four vendors pointing at each other.",
      ar: "التوريد والشحن والتخليص تحت سقف واحد. وعند أي تطوّر لديك رقم واحد تتصل به — لا أربعة مورّدين يحيل كلٌّ منهم المسؤولية إلى الآخر.",
      tr: "Tedarik, sevkiyat ve gümrükleme tek çatı altında. Bir şey hareket ettiğinde arayacağınız tek numara var — birbirini işaret eden dört tedarikçi değil.",
      zh: "采购、运输与清关同在一处。货物一有动静，您只需打一个电话 —— 而不是四家供应商互相推诿。",
      fr: "Sourcing, expédition et dédouanement sous un même toit. En cas d'imprévu, vous avez un seul numéro à appeler — et non quatre prestataires qui se renvoient la responsabilité.",
    },
  },
  {
    title: {
      en: "The specification is agreed in writing",
      ar: "المواصفة تُعتمد كتابةً",
      tr: "Spesifikasyon yazılı olarak belirlenir",
      zh: "规格以书面形式约定",
      fr: "La spécification est arrêtée par écrit",
    },
    text: {
      en: "We fix grade, packaging and tolerances in the contract before anything ships, so both sides know exactly what is being bought and sold.",
      ar: "نثبّت الرتبة والتعبئة وحدود التفاوت في العقد قبل شحن أي شيء، ليعرف الطرفان بالضبط ما الذي يُشترى ويُباع.",
      tr: "Kalite, ambalaj ve toleransları herhangi bir sevkiyattan önce sözleşmede sabitleriz; böylece iki taraf da tam olarak neyin alınıp satıldığını bilir.",
      zh: "在任何货物起运之前，我们就在合同中确定等级、包装与公差，使买卖双方清楚知道交易的究竟是什么。",
      fr: "Nous fixons la qualité, l'emballage et les tolérances dans le contrat avant tout embarquement, afin que les deux parties sachent exactement ce qui est acheté et vendu.",
    },
  },
  {
    title: {
      en: "Direct supplier relationships",
      ar: "علاقات مباشرة مع المورّدين",
      tr: "Doğrudan tedarikçi ilişkileri",
      zh: "直接的供应商关系",
      fr: "Des relations directes avec les fournisseurs",
    },
    text: {
      en: "We buy through networks we have built and maintain rather than through layers of middlemen, which keeps pricing competitive and supply steadier.",
      ar: "نشتري عبر شبكات بنيناها ونحافظ عليها، لا عبر طبقات من الوسطاء، ما يبقي السعر تنافسياً والتوريد أكثر استقراراً.",
      tr: "Aracı katmanları yerine kendi kurduğumuz ve sürdürdüğümüz ağlar üzerinden alım yaparız; bu da fiyatı rekabetçi, arzı istikrarlı tutar.",
      zh: "我们通过自建并长期维护的网络采购，而非层层中间商，这使价格更具竞争力、供应更为稳定。",
      fr: "Nous achetons via des réseaux que nous avons construits et que nous entretenons, plutôt qu'à travers des couches d'intermédiaires, ce qui maintient des prix compétitifs et un approvisionnement plus régulier.",
    },
  },
  {
    title: {
      en: "Documentation handled properly",
      ar: "مستندات مُعدّة كما يجب",
      tr: "Belgeler usulüne uygun yürütülür",
      zh: "单证处理得当",
      fr: "Une documentation traitée correctement",
    },
    text: {
      en: "Most trade disputes are paperwork disputes. We prepare complete, consistent document sets so consignments are not held up at destination.",
      ar: "معظم النزاعات التجارية نزاعات مستندات. نُعدّ حزم مستندات كاملة ومتّسقة حتى لا تتعطّل الشحنات في بلد الوصول.",
      tr: "Ticari anlaşmazlıkların çoğu evrak anlaşmazlığıdır. Sevkiyatlar varış noktasında bekletilmesin diye eksiksiz ve tutarlı belge setleri hazırlarız.",
      zh: "多数贸易纠纷其实是单证纠纷。我们编制完整、前后一致的单证，避免货物在目的地被滞留。",
      fr: "La plupart des litiges commerciaux sont des litiges de documents. Nous préparons des jeux documentaires complets et cohérents afin que les marchandises ne soient pas bloquées à destination.",
    },
  },
];
