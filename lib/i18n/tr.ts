/**
 * Turkish page copy.
 *
 * Checked against `en.ts` with `satisfies Dictionary`, so a string added there
 * and not translated here is a build error rather than an English sentence on
 * a Turkish page.
 *
 * Register terms follow Turkish foreign-trade usage: "emtia" for commodities,
 * "gümrükleme" for customs clearing, "sevkiyat" for shipment. Incoterms, HS
 * grades and unit symbols stay in their international form, because that is
 * how they appear on the contract.
 */

import type { Dictionary } from "./en";

export const tr = {
  nav: {
    "/": "Ana Sayfa",
    "/about": "Hakkımızda",
    "/services": "Hizmetler",
    "/commodities": "Ürünler",
    "/catalogue": "Katalog",
    "/contact": "İletişim",
  },

  common: {
    skipToContent: "İçeriğe geç",
    requestQuote: "Teklif İsteyin",
    learnMore: "Daha fazlası",
    mainNavLabel: "Ana menü",
    mobileNavLabel: "Mobil menü",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    language: "Dil",
    homeAriaSuffix: "ana sayfa",
    downloadPdf: "PDF İndir",
  },

  footer: {
    company: "Şirket",
    services: "Hizmetler",
    contact: "İletişim",
    certifications: "Sertifikalar",
    rcPrefix: "RC",
    rights: "Tüm hakları saklıdır.",
  },

  home: {
    meta: {
      description:
        "M/W Global Services Limited — Afrika ile dünya pazarları arasında tarımsal emtia ihracatı, katı mineral ticareti, genel ürün ithalatı, nakliye ve gümrükleme hizmetleri.",
    },
    heroTitleLineOne: "Afrika'nın ürünlerini",
    heroTitleLineTwo: "dünya pazarlarına taşıyoruz.",
    heroIntro:
      "Tarımsal emtia, katı mineraller ve sınai ithalat — tedarikinden sevkiyatına ve gümrüklemesine kadar tek bir sorumlu ekip tarafından yürütülür.",
    viewCommodities: "Ürünleri İnceleyin",
    introLabel: "Biz kimiz",
    introStatement:
      "İyi ticaret, kimden aldığınızla başlar. Önce tedarikçi ilişkilerimizi kurduk; gerisi oradan geldi.",
    introParagraphs: [
      "M/W Global Services Limited, dış ticarete açılmadan önce basit bir amaçla kuruldu: güvenilir tedarik ağları oluşturmak ve müşterileri kaliteli ürünlerle buluşturmak.",
      "Profesyonellik, şeffaflık ve müşterilerimizin gereksinimlerini karşılayan ürünleri güçlü iş ortaklıkları ve titiz tedarikçi seçimiyle teslim etme ilkesine bağlıyız.",
    ],
    moreAboutCompany: "Şirket hakkında daha fazlası",
    servicesLabel: "Ne yapıyoruz",
    servicesTitle: "Dört hizmet hattı, tek sorumlu iş ortağı",
    servicesIntro:
      "Ticarette sorunlar çoğunlukla devir noktalarında çıkar — tedarikçi ile gözetim firması arasında, nakliye acentesi ile gümrük müşaviri arasında. Dört hattı da kendimiz yürütüyoruz; dolayısıyla bu devir noktaları bizim sorumluluğumuz.",
    commoditiesLabel: "Ne ticaretini yapıyoruz",
    commoditiesTitle: "Tedarik ettiğimiz ve sunduğumuz ürünler",
    fullCatalogue: "Tüm katalog",
    processLabel: "Nasıl çalışıyoruz",
    processTitle: "İlk talepten belgelerin tesliminе kadar",
    differentiatorsLabel: "Neden M/W Global",
    differentiatorsTitle: "Müşterilerimizin değer verdiğini söylediği şeyler",
    marketsLabel: "Hizmet verdiğimiz pazarlar",
    marketsTitle: "Yüklerimizin ulaştığı yerler",
    catalogueBandLabel: "PDF indirme",
    catalogueBandText: (pages: number, fileSize: string) =>
      `Her ürün hattı için gösterge niteliğinde spesifikasyonlar, hizmet verilen pazarlar ve çalışma yöntemimiz — ${pages} sayfa, ${fileSize}.`,
    viewCataloguePage: "Katalog sayfasına git",
    ctaTitle: "Spesifikasyonu bize iletin. Size fiyatla dönelim.",
    ctaIntro:
      "Ürünü, kalitesini, miktarı ve varış noktasını gönderin; size bir teklifle dönelim.",
  },

  about: {
    meta: {
      title: "Hakkımızda",
      description:
        "M/W Global Services Limited; emtia ihracatı, mineral ticareti, genel ürün ithalatı ve nakliye lojistiği alanlarında faaliyet gösteren bir dış ticaret şirketidir.",
    },
    headerLabel: "Hakkımızda",
    headerTitle: "Güvenilir tedarik üzerine kurulu bir dış ticaret ortağı",
    headerIntro:
      "Alıcıları ihtiyaç duydukları ürünlerle güçlü tedarikçi ağları, titiz seçim ve açık sözlü bir çalışma anlayışıyla buluşturuyoruz.",
    storyLabel: "Hikâyemiz",
    storyTitle: "Önce tedarik ağları, sonra dış ticaret",
    storyParagraphs: (name: string, shortName: string) => [
      `${name}, dış ticarete açılmadan önce basit bir amaçla kuruldu: güvenilir tedarik ağları oluşturmak ve müşterileri kaliteli ürünlerle buluşturmak.`,
      "Profesyonellik, şeffaflık ve müşterilerimizin gereksinimlerini karşılayan ürünleri güçlü iş ortaklıkları ve titiz tedarikçi seçimiyle teslim etme ilkesine bağlıyız.",
      `${shortName} bugün birbirine bağlı dört hatta çalışıyor: tarımsal ihracat, katı mineraller, genel ürün ithalatı ve nakliye ile gümrükleme. Müşteriler bunlardan birini ya da dördünü birden kullanıyor. Değişmeyen şey, ilk talepten teslimata kadar tek bir ekibin sorumlu olması.`,
    ],
    warehouseAlt: "Depo içinde taşınan ürünler",
    detailsLabel: "Şirket bilgileri",
    detailRegisteredName: "Tescilli unvan",
    detailRc: "RC numarası",
    detailPhone: "Telefon",
    detailHours: "Çalışma saatleri",
    missionLabel: "Misyonumuz",
    mission:
      "Üreticileri dünya pazarlarıyla şeffaf, güvenilir ve istikrarlı biçimde teslim edilen bir ticaret üzerinden buluşturmak.",
    certificationsLabel: "Sertifikalar ve uygunluk",
    certificationsTitle: "Tescilli, sertifikalı ve belgeli",
    certificationsIntro:
      "Nijerya'dan uluslararası ticaret yapmak için gereken tescillere sahibiz. Dosyada kopyası bulunan sertifikalar aşağıdan doğrudan açılır; diğerleri talep üzerine iletilir.",
    viewCertificate: "Sertifikayı görüntüle",
    certificateOnRequest: "Kopyası talep üzerine iletilir",
    valuesLabel: "Değerlerimiz",
    valuesTitle: "Bağlı kaldığımız ilkeler",
    values: [
      {
        title: "Profesyonellik",
        text: "Söylediğimizi, üzerinde anlaştığımız takvimde yaparız. Müşterilerin bilgi almak için bizi kovalaması gerekmez.",
      },
      {
        title: "Şeffaflık",
        text: "Konuşulan kalite, fiyat veya takvimde bir şey tedarik edilemiyorsa bunu sözleşme imzalandıktan sonra değil, baştan söyleriz.",
      },
      {
        title: "Titiz tedarikçi seçimi",
        text: "O hafta en ucuz olandan almak yerine, birlikte çalıştığımız ve güvendiğimiz tedarikçilerle uzun soluklu ilişkiler kurarız.",
      },
      {
        title: "İş ortaklığı",
        text: "Tekrarlayan iş bizim için tek bir sevkiyattan daha değerlidir; bu da hem fiyatlamamızı hem de sorun çıktığında yaklaşımımızı belirler.",
      },
    ],
    approachLabel: "Yaklaşımımız",
    approachTitle: "Müşterilerin değer verdiğini söylediği dört şey",
    portAlt: "Liman terminalinde konteyner vinçleri",
    marketsServed: "Hizmet verilen pazarlar",
    ctaTitle: "Spesifikasyonun arkasında duran bir ortakla çalışın.",
    ctaIntro:
      "Tedarik, sevkiyat veya gümrükleme ihtiyacınızı ticaret masamıza iletin.",
    ctaButton: "İletişime geçin",
  },

  services: {
    meta: {
      title: "Hizmetler",
      description:
        "Tarımsal emtia ihracatı, katı mineral ticareti, genel ürün ithalatı ve lisanslı gümrükleme ile nakliye hizmetleri.",
    },
    headerLabel: "Hizmetlerimiz",
    headerTitle: "Tedarik, sevkiyat ve gümrükleme — uçtan uca",
    headerIntro:
      "Tek bir hizmet için de tüm zincir için de bizimle çalışabilirsiniz. Her iki durumda da tek ekip, tek sözleşme ve tek belge seti ile muhatap olursunuz.",
    jumpLabel: "Bir hizmete geç",
    serviceNumber: (number: string) => `Hizmet ${number}`,
    included: "Kapsam",
    enquire: "Bu hizmet hakkında bilgi alın",
    processLabel: "Çalışma süreci",
    processTitle: "Bizimle çalışmak nasıl işler",
    ctaTitle: "Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?",
    ctaIntro:
      "Neyi nereye taşımak istediğinizi anlatın. Bunun neyi gerektirdiğini size söyleyelim.",
    ctaButton: "Görüşmeye başlayın",
    ctaEmail: "Ticaret masasına e-posta gönderin",
  },

  commodities: {
    meta: {
      title: "Ürünler",
      description:
        "M/W Global Services Limited tarafından ticareti yapılan tarımsal emtia, katı mineraller ve ithal sınai ürünler; gösterge niteliğinde spesifikasyonlarıyla.",
    },
    headerLabel: "Ürünler",
    headerTitle: "Tedarik ettiğimiz, sevk ettiğimiz ve sunduğumuz ürünler",
    headerIntro:
      "En sık çalıştığımız ürünler bunlardır. Kalite, ambalaj ve miktar alıcıyla birlikte belirlenir ve satış sözleşmesinde sabitlenir.",
    jumpLabel: "Bir kategoriye geç",
    categoryNumber: (number: string) => `Kategori ${number}`,
    specsHint:
      "Gösterge niteliğindeki spesifikasyonlar için ürüne dokunun. Ticarette olağan aralıklardır — her sevkiyat için yazılı olarak teyit edilir.",
    indicativeNote: "Gösterge niteliğindedir — sipariş anında teyit edilir.",
    specTitle: "Sizin spesifikasyonunuza göre çalışıyoruz",
    specParagraphs: [
      "İhtiyacınızı bize iletin — ürün, kalite, miktar ve varış noktası — neyi, hangi fiyata ve hangi takvimle tedarik edebileceğimizi yazılı olarak teyit edelim.",
      "Bir talep gerçekçi biçimde karşılayabileceğimizin dışındaysa, kabul edip sonradan tartışmak yerine bunu baştan söyleriz.",
    ],
    ctaTitle: "Burada listelenmeyen bir şey mi arıyorsunuz?",
    ctaIntro:
      "Tedarik ağımız bu kataloğun çok ötesine uzanıyor. Sorun, tedarik edip edemeyeceğimizi size söyleyelim.",
  },

  catalogue: {
    meta: {
      title: "Katalog",
      description:
        "M/W Global Services Limited ürün ve emtia kataloğunu indirin — tarım, mineral ve ithal ürün hatlarımız için gösterge niteliğinde spesifikasyonlar, hizmet kapsamı ve hizmet verilen pazarlar.",
    },
    headerLabel: "Katalog",
    headerIntro:
      "Çalıştığımız her ürün hattı, gösterge niteliğinde spesifikasyonlar, hizmet kapsamı ve sevkiyat yaptığımız pazarlar — kaydedebileceğiniz, iletebileceğiniz veya yazdırabileceğiniz tek bir PDF'te.",
    downloadLabel: "PDF indirme",
    fileMeta: (pages: number, fileSize: string) =>
      `${pages} sayfa · ${fileSize}`,
    disclaimer:
      "Tüm spesifikasyonlar ticarette olağan gösterge aralıklarıdır. Nihai spesifikasyonlar, ambalaj ve miktarlar sipariş anında yazılı olarak teyit edilir ve satış sözleşmesinde sabitlenir.",
    insideLabel: "İçindekiler",
    insideTitle: "Dört bölüm, tek belge",
    contents: [
      {
        label: "Kategori 01",
        title: "Tarımsal ve Doğal Ürünler",
        text: "Susam, kaju, hibiskus, acı biber, soya, zencefil, arap zamkı, günlük ve iki tür mangal kömürü için gösterge spesifikasyonlarıyla on hat — saflık, nem, ambalaj ve asgari sipariş.",
      },
      {
        label: "Kategori 02",
        title: "Katı Mineraller",
        text: "Kurşun cevheri, kalay cevheri ve kolumbit-tantalit; satış esası, doğrulama ve ambalaj koşullarıyla.",
      },
      {
        label: "Kategori 03",
        title: "İthal Ürünler",
        text: "Makine, yapı malzemeleri, enerji ekipmanları ve daha fazlasını kapsayan, spesifikasyona göre tedarik edilen on hat.",
      },
      {
        label: "Referans",
        title: "Pazarlar, sertifikalar ve belgeler",
        text: "Bölgelere göre varış pazarları, yükleme limanları, Incoterms, ödeme koşulları, tescillerimiz ve her sevkiyat için hazırlanan belge seti.",
      },
    ],
    englishEditionNote: "Katalog PDF'i İngilizcedir.",
    statServiceLines: "Hizmet hattı",
    statCommodityLines: "Ürün hattı",
    statDestinations: "Varış pazarı",
    statRegions: "Dünya bölgesi",
    ctaTitle: "Önce konuşmayı mı tercih edersiniz?",
    ctaIntro:
      "Ürünü, kalitesini, miktarı ve varış noktasını gönderin; ticaret masamız gösterge niteliğinde bir teklifle dönsün.",
  },

  contact: {
    meta: {
      title: "İletişim",
      description:
        "M/W Global Services Limited ile iletişime geçin — emtia ihracatı, mineral tedariki, ürün ithalatı, nakliye veya gümrükleme için teklif isteyin.",
    },
    headerLabel: "İletişim",
    headerTitle: "Neyi taşımak istediğinizi konuşalım",
    headerIntro:
      "Talebinizi gönderin; ticaret masamız bir iş günü içinde dönüş yapsın. Zaman baskısı olan sevkiyatlar için doğrudan arayın veya mesaj gönderin.",
    directContact: "Doğrudan iletişim",
    phone: "Telefon",
    email: "E-posta",
    tradeDeskSuffix: "ticaret masası",
    hours: "Çalışma saatleri",
    whatsapp: "WhatsApp'tan mesaj gönderin",
    mapTitle: (name: string, address: string) =>
      `${name} ofisini ${address} adresinde gösteren harita`,
    openInMaps: "Google Haritalar'da aç",
  },

  form: {
    heading: "Teklif isteyin",
    intro:
      "Kalite, miktar ve varış noktası konusunda ne kadar net olursanız, o kadar hızlı fiyatlandırabiliriz.",
    name: "Ad soyad",
    namePlaceholder: "Ayşe Yılmaz",
    company: "Şirket",
    companyPlaceholder: "Acme Dış Ticaret A.Ş.",
    email: "E-posta",
    emailPlaceholder: "siz@sirket.com",
    phone: "Telefon / WhatsApp",
    phonePlaceholder: "+00 000 000 0000",
    service: "İhtiyaç duyulan hizmet",
    servicePlaceholder: "Bir hizmet seçin",
    serviceOther: "Diğer / emin değilim",
    destination: "Varış limanı / ülke",
    destinationPlaceholder: "örn. Mersin, Türkiye",
    message: "Ürün, kalite ve miktar",
    messagePlaceholder:
      "örn. 2 x 40ft FCL kabuğu alınmış susam, %99,5 saflık, azami %6 nem, CIF Mersin, eylül sevkiyatı.",
    honeypot: "Web sitesi",
    submit: "Talebi gönder",
    sending: "Gönderiliyor…",
    privacy:
      "Bilgilerinizi yalnızca bu talebe yanıt vermek için kullanırız. * ile işaretli alanlar zorunludur.",
    successHeading: "Talebiniz alındı",
    successLead:
      "Teşekkür ederiz. Ticaret masamız talebinizi inceleyip bir iş günü içinde dönüş yapacak.",
    successUrgent: "Acil durumlar için arayın:",
    successAgain: "Yeni bir talep gönder",
    genericError: "Bir şeyler ters gitti. Lütfen tekrar deneyin.",
    unexpectedError: "Beklenmeyen hata.",
  },

  notFound: {
    title: "Bu sayfa rotadan çıkmış",
    text: "Aradığınız sayfa mevcut değil veya taşınmış. Ana sayfaya dönün ya da ne aradığınızı bize iletin.",
    home: "Ana sayfaya dön",
    contact: "Bize ulaşın",
  },
} satisfies Dictionary;
