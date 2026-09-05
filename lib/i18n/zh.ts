/**
 * Simplified Chinese page copy.
 *
 * Checked against `en.ts` with `satisfies Dictionary`, so a string added there
 * and not translated here is a build error rather than an English sentence on
 * a Chinese page.
 *
 * Register follows mainland foreign-trade usage: 大宗商品 for commodities,
 * 清关 for customs clearing, 报价 for a quotation. Incoterms, grades and unit
 * symbols stay in their international form, because that is how they appear on
 * the contract. Punctuation is full-width, as Chinese typography expects.
 */

import type { Dictionary } from "./en";

export const zh = {
  nav: {
    "/": "首页",
    "/about": "关于我们",
    "/services": "服务",
    "/commodities": "产品",
    "/catalogue": "产品目录",
    "/contact": "联系我们",
  },

  common: {
    skipToContent: "跳至正文",
    requestQuote: "索取报价",
    learnMore: "了解更多",
    mainNavLabel: "主导航",
    mobileNavLabel: "移动端导航",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    language: "语言",
    homeAriaSuffix: "首页",
    downloadPdf: "下载 PDF",
  },

  footer: {
    company: "公司",
    services: "服务",
    contact: "联系方式",
    certifications: "资质认证",
    rcPrefix: "RC",
    rights: "版权所有。",
  },

  home: {
    meta: {
      description:
        "M/W Global Services Limited — 在非洲与全球市场之间提供农产品出口、固体矿产贸易、一般商品进口、国际货运与清关服务。",
    },
    heroTitleLineOne: "我们把非洲商品",
    heroTitleLineTwo: "运往全球市场。",
    heroIntro:
      "农产品、固体矿产与工业进口品 —— 由一支全程负责的团队完成采购、运输与清关。",
    viewCommodities: "查看产品",
    introLabel: "关于我们",
    introStatement:
      "好的贸易，取决于你向谁采购。我们先建立了供应商关系，其余的自然水到渠成。",
    introParagraphs: [
      "在拓展国际贸易之前，M/W Global Services Limited 的成立目标很简单：建立可靠的采购网络，为客户对接优质产品。",
      "我们坚持专业与透明，通过稳固的合作关系和严谨的供应商筛选，交付符合客户要求的产品。",
    ],
    moreAboutCompany: "了解公司详情",
    servicesLabel: "我们的业务",
    servicesTitle: "四条服务线，一个负责到底的伙伴",
    servicesIntro:
      "贸易中的问题多半出在交接环节 —— 供应商与验货方之间、货代与报关行之间。四条服务线均由我们自己运营，因此这些交接由我们负责。",
    commoditiesLabel: "我们经营的品类",
    commoditiesTitle: "我们采购与供应的产品",
    fullCatalogue: "完整目录",
    processLabel: "合作流程",
    processTitle: "从首次询价到单证交付",
    differentiatorsLabel: "为什么选择 M/W Global",
    differentiatorsTitle: "客户看重的几点",
    marketsLabel: "服务市场",
    marketsTitle: "我们的货物运往何处",
    catalogueBandLabel: "PDF 下载",
    catalogueBandText: (pages: number, fileSize: string) =>
      `涵盖各产品线的参考规格、服务市场以及我们的工作方式 —— 共 ${pages} 页，${fileSize}。`,
    viewCataloguePage: "查看目录页面",
    ctaTitle: "把规格告诉我们，我们回复价格。",
    ctaIntro: "发送产品、等级、数量与目的地，我们将向您提供报价。",
  },

  about: {
    meta: {
      title: "关于我们",
      description:
        "M/W Global Services Limited 是一家国际贸易公司，业务涵盖大宗商品出口、矿产贸易、一般商品进口与货运物流。",
    },
    headerLabel: "关于我们",
    headerTitle: "以可靠采购为根基的国际贸易伙伴",
    headerIntro:
      "我们通过稳固的供应商网络、严谨的筛选和坦诚的合作方式，为买家对接所需产品。",
    storyLabel: "我们的历程",
    storyTitle: "始于采购网络，进而拓展至国际贸易",
    storyParagraphs: (name: string, shortName: string) => [
      `在拓展国际贸易之前，${name} 的成立目标很简单：建立可靠的采购网络，为客户对接优质产品。`,
      "我们坚持专业与透明，通过稳固的合作关系和严谨的供应商筛选，交付符合客户要求的产品。",
      `如今 ${shortName} 经营四条相互衔接的业务线 —— 农产品出口、固体矿产、一般商品进口，以及货运与清关。客户可以只用其中一条，也可以四条全用。不变的是，从首次询价到最终交付，始终由一支团队负责到底。`,
    ],
    warehouseAlt: "仓库内正在搬运的货物",
    detailsLabel: "公司信息",
    detailRegisteredName: "注册名称",
    detailRc: "注册编号（RC）",
    detailPhone: "电话",
    detailHours: "营业时间",
    missionLabel: "我们的使命",
    mission: "以透明、可靠、稳定交付的贸易，连接生产者与全球市场。",
    certificationsLabel: "资质与合规",
    certificationsTitle: "已注册、已认证、单证齐备",
    certificationsIntro:
      "我们持有从尼日利亚开展国际贸易所需的各项注册资质。已存档的证书可在下方直接打开；其余证书可应索取提供。",
    viewCertificate: "查看证书",
    certificateOnRequest: "副本可应索取提供",
    valuesLabel: "我们的价值观",
    valuesTitle: "我们坚持的原则",
    values: [
      {
        title: "专业",
        text: "我们说到做到，并按约定的时间完成。客户不必反复催问进度。",
      },
      {
        title: "透明",
        text: "如果某项等级、价格或时间无法达成，我们会事先说明，而不是签约之后再谈。",
      },
      {
        title: "严谨的供应商筛选",
        text: "我们与长期合作、值得信赖的供应商建立稳定关系，而不是每周挑最便宜的那一家。",
      },
      {
        title: "长期合作",
        text: "回头客对我们而言比任何一单生意都重要，这决定了我们的定价方式，也决定了出现问题时我们的处理方式。",
      },
    ],
    approachLabel: "我们的做法",
    approachTitle: "客户看重的四件事",
    portAlt: "港口码头的集装箱起重机",
    marketsServed: "服务市场",
    ctaTitle: "选择一个为规格负责到底的伙伴。",
    ctaIntro: "把您需要采购、运输或清关的需求告诉我们的贸易团队。",
    ctaButton: "联系我们",
  },

  services: {
    meta: {
      title: "服务",
      description:
        "农产品出口、固体矿产贸易、一般商品进口，以及具备清关资质的国际货运服务。",
    },
    headerLabel: "我们的服务",
    headerTitle: "采购、运输与清关 —— 全程贯通",
    headerIntro:
      "您可以只委托其中一项服务，也可以委托整条链条。无论哪种方式，都只需对接一支团队、一份合同和一套单证。",
    jumpLabel: "跳转至某项服务",
    serviceNumber: (number: string) => `服务 ${number}`,
    included: "服务内容",
    enquire: "咨询此项服务",
    processLabel: "合作流程",
    processTitle: "与我们合作是怎样的",
    ctaTitle: "不确定需要哪项服务？",
    ctaIntro: "告诉我们您要运什么、运到哪里，我们会说明需要哪些环节。",
    ctaButton: "开始沟通",
    ctaEmail: "发邮件给贸易团队",
  },

  commodities: {
    meta: {
      title: "产品",
      description:
        "M/W Global Services Limited 经营的农产品、固体矿产及进口工业品，附参考规格。",
    },
    headerLabel: "产品",
    headerTitle: "我们采购、运输与供应的产品",
    headerIntro:
      "以下是我们最常经营的品类。等级、包装与数量由买卖双方商定，并在销售合同中确定。",
    jumpLabel: "跳转至某一类别",
    categoryNumber: (number: string) => `类别 ${number}`,
    specsHint:
      "点击产品可查看参考规格。为行业通行区间 —— 每批货以书面形式确认。",
    indicativeNote: "仅供参考 —— 以下单时确认为准。",
    specTitle: "按您的规格执行",
    specParagraphs: [
      "把您的需求发给我们 —— 产品、等级、数量与目的地 —— 我们将以书面形式确认可供货的内容、价格与时间安排。",
      "如果某项要求超出我们能切实做到的范围，我们会事先说明，而不是先答应、事后再争执。",
    ],
    ctaTitle: "需要目录之外的产品？",
    ctaIntro:
      "我们的采购网络远不止本目录所列。请告诉我们，我们会答复能否供货。",
  },

  catalogue: {
    meta: {
      title: "产品目录",
      description:
        "下载 M/W Global Services Limited 产品与大宗商品目录 —— 涵盖农产品、矿产及进口商品线的参考规格、服务范围与服务市场。",
    },
    headerLabel: "产品目录",
    headerIntro:
      "我们经营的全部产品线，含参考规格、服务范围以及我们发运的市场 —— 集于一份可保存、可转发、可打印的 PDF。",
    downloadLabel: "PDF 下载",
    fileMeta: (pages: number, fileSize: string) =>
      `${pages} 页 · ${fileSize}`,
    disclaimer:
      "所有规格均为行业通行的参考区间。最终规格、包装与数量以下单时的书面确认为准，并在销售合同中载明。",
    insideLabel: "目录内容",
    insideTitle: "四个部分，一份文件",
    contents: [
      {
        label: "类别 01",
        title: "农产品与天然产品",
        text: "十个产品线的参考规格 —— 纯度、水分、包装与最小起订量 —— 涵盖芝麻、腰果、洛神花、辣椒、大豆、生姜、阿拉伯胶、乳香及两种木炭。",
      },
      {
        label: "类别 02",
        title: "固体矿产",
        text: "铅矿、锡矿及铌钽矿，含计价依据、检验方式与包装条款。",
      },
      {
        label: "类别 03",
        title: "进口商品",
        text: "十个产品线，涵盖机械设备、建筑材料、电力设备等，按规格采购。",
      },
      {
        label: "参考信息",
        title: "市场、资质与单证",
        text: "按区域划分的目的地市场、装运港、贸易术语、付款条件、我们的注册资质，以及每批货准备的单证清单。",
      },
    ],
    englishEditionNote: "目录 PDF 为英文版。",
    statServiceLines: "服务线",
    statCommodityLines: "产品线",
    statDestinations: "目的地市场",
    statRegions: "全球区域",
    ctaTitle: "想先沟通一下？",
    ctaIntro:
      "发送产品、等级、数量与目的地，我们的贸易团队将提供参考报价。",
  },

  contact: {
    meta: {
      title: "联系我们",
      description:
        "联系 M/W Global Services Limited —— 就大宗商品出口、矿产采购、商品进口、国际货运或清关索取报价。",
    },
    headerLabel: "联系我们",
    headerTitle: "聊聊您需要运送什么",
    headerIntro:
      "发送询价，我们的贸易团队将在一个工作日内回复。时间紧迫的货物，请直接来电或发送消息。",
    directContact: "直接联系",
    phone: "电话",
    email: "电子邮件",
    tradeDeskSuffix: "贸易团队",
    hours: "营业时间",
    whatsapp: "通过 WhatsApp 联系我们",
    mapTitle: (name: string, address: string) =>
      `显示 ${name} 办公室位置的地图，地址：${address}`,
    openInMaps: "在 Google 地图中打开",
  },

  form: {
    heading: "索取报价",
    intro: "您对等级、数量和目的地描述得越具体，我们报价就越快。",
    name: "姓名",
    namePlaceholder: "张伟",
    company: "公司",
    companyPlaceholder: "某某贸易有限公司",
    email: "电子邮件",
    emailPlaceholder: "you@company.com",
    phone: "电话 / WhatsApp",
    phonePlaceholder: "+00 000 000 0000",
    service: "所需服务",
    servicePlaceholder: "请选择服务",
    serviceOther: "其他 / 尚不确定",
    destination: "目的港 / 国家",
    destinationPlaceholder: "例如：中国宁波",
    message: "产品、等级与数量",
    messagePlaceholder:
      "例如：2 x 40ft FCL 脱壳芝麻，纯度 99.5%，水分最高 6%，CIF 宁波，9 月装运。",
    honeypot: "网站",
    submit: "发送询价",
    sending: "发送中…",
    privacy: "我们仅使用您的信息回复此次询价。带 * 的字段为必填项。",
    successHeading: "已收到您的询价",
    successLead:
      "感谢您的来函。我们的贸易团队将审核您的需求，并在一个工作日内回复。",
    successUrgent: "如有紧急事项，请致电",
    successAgain: "再发送一条询价",
    genericError: "出现问题，请重试。",
    unexpectedError: "意外错误。",
  },

  notFound: {
    title: "该页面已偏离航线",
    text: "您访问的页面不存在或已迁移。请返回首页，或告诉我们您想找什么。",
    home: "返回首页",
    contact: "联系我们",
  },
} satisfies Dictionary;
