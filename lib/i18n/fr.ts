/**
 * French page copy.
 *
 * Checked against `en.ts` with `satisfies Dictionary`, so a string added there
 * and not translated here is a build error rather than an English sentence on
 * a French page.
 *
 * Terminology follows the M/W Global French catalogue: "négoce" for trading,
 * "dédouanement" for customs clearing, "sourcing" kept as-is where the trade
 * itself uses the English term. Incoterms, HS grades and unit symbols stay in
 * their international form, because that is how they appear on the contract.
 */

import type { Dictionary } from "./en";

export const fr = {
  nav: {
    "/": "Accueil",
    "/about": "À propos",
    "/services": "Services",
    "/commodities": "Produits",
    "/catalogue": "Catalogue",
    "/contact": "Contact",
  },

  common: {
    skipToContent: "Aller au contenu",
    requestQuote: "Demander un Devis",
    learnMore: "En savoir plus",
    mainNavLabel: "Principal",
    mobileNavLabel: "Mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    homeAriaSuffix: "accueil",
    downloadPdf: "Télécharger le PDF",
  },

  footer: {
    company: "Société",
    services: "Services",
    contact: "Contact",
    certifications: "Certifications",
    rcPrefix: "RC",
    rights: "Tous droits réservés.",
  },

  home: {
    meta: {
      description:
        "M/W Global Services Limited — export de produits agricoles, négoce de minerais solides, import de marchandises générales, transit et dédouanement entre l'Afrique et les marchés du monde.",
    },
    heroTitleLineOne: "Nous acheminons les produits africains",
    heroTitleLineTwo: "vers les marchés du monde.",
    heroIntro:
      "Produits agricoles, minerais solides et importations industrielles — sourcés, expédiés et dédouanés par une seule équipe responsable.",
    viewCommodities: "Voir les Produits",
    introLabel: "Qui nous sommes",
    introStatement:
      "Un bon négoce tient à la fiabilité du fournisseur. Nous avons d'abord bâti ces relations ; le reste en découle.",
    introParagraphs: [
      "Avant de se développer à l'international, M/W Global Services Limited a été créée avec un objectif simple : bâtir des réseaux d'approvisionnement fiables et connecter ses clients à des produits de qualité.",
      "Nous nous engageons sur le professionnalisme, la transparence et la livraison de produits conformes aux exigences de nos clients, grâce à des partenariats solides et à une sélection rigoureuse des fournisseurs.",
    ],
    moreAboutCompany: "En savoir plus sur la société",
    servicesLabel: "Ce que nous faisons",
    servicesTitle: "Quatre lignes de service, un seul responsable",
    servicesIntro:
      "La plupart des problèmes commerciaux surviennent aux points de passage — entre le fournisseur et l'inspecteur, entre le transitaire et le commissionnaire en douane. Nous opérons nous-mêmes ces quatre lignes : ces passages relèvent donc de notre responsabilité.",
    commoditiesLabel: "Ce que nous commercialisons",
    commoditiesTitle: "Produits que nous sourçons et fournissons",
    fullCatalogue: "Catalogue complet",
    processLabel: "Notre méthode",
    processTitle: "De la première demande aux documents en main",
    differentiatorsLabel: "Pourquoi M/W Global",
    differentiatorsTitle: "Ce que nos clients retiennent",
    marketsLabel: "Marchés que nous servons",
    marketsTitle: "Où nos marchandises arrivent",
    catalogueBandLabel: "Téléchargement PDF",
    catalogueBandText: (pages: number, fileSize: string) =>
      `Spécifications indicatives pour chaque ligne de produits, marchés desservis et méthode de travail — ${pages} pages, ${fileSize}.`,
    viewCataloguePage: "Voir la page catalogue",
    ctaTitle: "Donnez-nous la spécification. Nous revenons avec un prix.",
    ctaIntro:
      "Envoyez-nous le produit, la qualité, le volume et la destination : nous reviendrons vers vous avec une offre.",
  },

  about: {
    meta: {
      title: "À Propos",
      description:
        "M/W Global Services Limited est une société de commerce international opérant dans l'export de matières premières, le négoce de minerais, l'import de marchandises générales et la logistique de fret.",
    },
    headerLabel: "À propos de nous",
    headerTitle:
      "Un partenaire commercial international fondé sur un sourcing fiable",
    headerIntro:
      "Nous connectons les acheteurs aux produits dont ils ont besoin grâce à des réseaux de fournisseurs solides, une sélection rigoureuse et une relation commerciale directe.",
    storyLabel: "Notre histoire",
    storyTitle: "Bâtie sur des réseaux d'approvisionnement, puis élargie au négoce",
    storyParagraphs: (name: string, shortName: string) => [
      `Avant de se développer à l'international, ${name} a été créée avec un objectif simple : bâtir des réseaux d'approvisionnement fiables et connecter ses clients à des produits de qualité.`,
      "Nous nous engageons sur le professionnalisme, la transparence et la livraison de produits conformes aux exigences de nos clients, grâce à des partenariats solides et à une sélection rigoureuse des fournisseurs.",
      `${shortName} opère aujourd'hui sur quatre lignes complémentaires : export agricole, minerais solides, import de marchandises générales, transit et dédouanement. Nos clients en utilisent une seule ou les quatre. Ce qui ne change pas : une même équipe reste responsable de la première demande jusqu'à la livraison.`,
    ],
    warehouseAlt: "Marchandises déplacées dans un entrepôt",
    detailsLabel: "Coordonnées de la société",
    detailRegisteredName: "Raison sociale",
    detailRc: "Numéro RC",
    detailPhone: "Téléphone",
    detailHours: "Horaires",
    missionLabel: "Notre mission",
    mission:
      "Relier les producteurs aux marchés mondiaux par un commerce transparent, fiable et livré avec régularité.",
    certificationsLabel: "Certifications & conformité",
    certificationsTitle: "Immatriculés, certifiés et documentés",
    certificationsIntro:
      "Nous détenons les immatriculations requises pour commercer à l'international depuis le Nigeria. Les certificats dont une copie est en ligne s'ouvrent directement ci-dessous ; les autres sont remis sur demande.",
    viewCertificate: "Voir le certificat",
    certificateOnRequest: "Copie remise sur demande",
    valuesLabel: "Nos valeurs",
    valuesTitle: "Ce à quoi nous tenons",
    values: [
      {
        title: "Professionnalisme",
        text: "Nous faisons ce que nous disons, dans le délai convenu. Les clients ne devraient pas avoir à nous relancer pour obtenir une mise à jour.",
      },
      {
        title: "Transparence",
        text: "Si un produit ne peut être fourni à la qualité, au prix ou dans le délai discutés, nous le disons d'emblée plutôt qu'après la signature du contrat.",
      },
      {
        title: "Sélection rigoureuse des fournisseurs",
        text: "Nous bâtissons des relations durables avec des fournisseurs éprouvés, plutôt que d'acheter au moins-disant de la semaine.",
      },
      {
        title: "Partenariat",
        text: "La relation durable compte plus pour nous qu'une seule expédition, ce qui guide notre façon de tarifer et de traiter les imprévus.",
      },
    ],
    approachLabel: "Notre approche",
    approachTitle: "Quatre choses que nos clients retiennent",
    portAlt: "Grues à conteneurs dans un terminal portuaire",
    marketsServed: "Marchés desservis",
    ctaTitle: "Travaillez avec un partenaire qui tient parole sur la spécification.",
    ctaIntro:
      "Parlez à notre équipe commerciale de ce que vous devez sourcer, expédier ou dédouaner.",
    ctaButton: "Nous contacter",
  },

  services: {
    meta: {
      title: "Services",
      description:
        "Export de produits agricoles, négoce de minerais solides, import de marchandises générales, et transit avec dédouanement.",
    },
    headerLabel: "Nos services",
    headerTitle: "Sourcing, expédition et dédouanement — de bout en bout",
    headerIntro:
      "Faites appel à nous pour un seul service ou pour la chaîne complète. Dans les deux cas, vous traitez avec une équipe, un contrat et un jeu de documents.",
    jumpLabel: "Aller à un service",
    serviceNumber: (number: string) => `Service ${number}`,
    included: "Ce qui est inclus",
    enquire: "Se renseigner sur ce service",
    processLabel: "Déroulement",
    processTitle: "Comment se passe la collaboration avec nous",
    ctaTitle: "Vous ne savez pas quel service vous faut ?",
    ctaIntro:
      "Décrivez ce que vous cherchez à acheminer et où. Nous vous dirons ce que cela implique.",
    ctaButton: "Démarrer un échange",
    ctaEmail: "Écrire à l'équipe commerciale",
  },

  commodities: {
    meta: {
      title: "Produits",
      description:
        "Produits agricoles, minerais solides et biens industriels importés commercialisés par M/W Global Services Limited, avec spécifications indicatives.",
    },
    headerLabel: "Produits",
    headerTitle: "Ce que nous sourçons, expédions et fournissons",
    headerIntro:
      "Voici les produits que nous traitons le plus souvent. La qualité, l'emballage et le volume sont convenus avec l'acheteur et fixés dans le contrat de vente.",
    jumpLabel: "Aller à une catégorie",
    categoryNumber: (number: string) => `Catégorie ${number}`,
    specsHint:
      "Touchez un produit pour ses spécifications indicatives. Fourchettes usuelles du commerce — confirmées par écrit pour chaque expédition.",
    indicativeNote: "Indicatif — confirmé à la commande.",
    specTitle: "Nous travaillons selon votre spécification",
    specParagraphs: [
      "Indiquez-nous vos besoins — produit, qualité, volume et destination — et nous confirmerons par écrit ce que nous pouvons fournir, à quel prix et dans quel délai.",
      "Lorsqu'une exigence dépasse ce que nous pouvons réellement livrer, nous le disons d'emblée plutôt que de l'accepter et d'en discuter ensuite.",
    ],
    ctaTitle: "Besoin d'un produit qui ne figure pas ici ?",
    ctaIntro:
      "Notre réseau de sourcing dépasse le cadre de ce catalogue. Demandez-nous : nous vous dirons si nous pouvons le fournir.",
  },

  catalogue: {
    meta: {
      title: "Catalogue",
      description:
        "Téléchargez le catalogue produits et matières premières de M/W Global Services Limited — spécifications indicatives pour nos lignes agricoles, minérales et de marchandises importées, ainsi que la couverture de service et les marchés desservis.",
    },
    headerLabel: "Catalogue",
    headerIntro:
      "Chaque ligne de produits que nous traitons, avec ses spécifications indicatives, la couverture de service et les marchés vers lesquels nous expédions — dans un seul PDF à enregistrer, transférer ou imprimer.",
    downloadLabel: "Téléchargement PDF",
    fileMeta: (pages: number, fileSize: string) => `${pages} pages · ${fileSize}`,
    disclaimer:
      "Toutes les spécifications sont des fourchettes indicatives usuelles du commerce. Les spécifications finales, l'emballage et les volumes sont confirmés par écrit et fixés au contrat de vente à la commande.",
    insideLabel: "Contenu",
    insideTitle: "Quatre sections, un seul document",
    contents: [
      {
        label: "Catégorie 01",
        title: "Produits Agricoles & Naturels",
        text: "Dix lignes avec spécifications indicatives — pureté, humidité, emballage et commande minimum — pour le sésame, la noix de cajou, l'hibiscus, le piment, le soja, le gingembre, la gomme arabique, l'encens et les deux qualités de charbon de bois.",
      },
      {
        label: "Catégorie 02",
        title: "Minerais Solides",
        text: "Minerai de plomb, minerai d'étain et colombite & tantalite, avec base de vente, vérification et conditions d'emballage.",
      },
      {
        label: "Catégorie 03",
        title: "Produits Importés",
        text: "Dix lignes couvrant machines, matériaux de construction, équipements électriques et plus encore, achetées selon spécification.",
      },
      {
        label: "Référence",
        title: "Marchés, certifications & documentation",
        text: "Marchés de destination par région, ports de chargement, Incoterms, modalités de paiement, nos immatriculations et le jeu de documents préparé pour chaque expédition.",
      },
    ],
    englishEditionNote: "Le PDF du catalogue est en français.",
    statServiceLines: "Lignes de service",
    statCommodityLines: "Lignes de produits",
    statDestinations: "Marchés de destination",
    statRegions: "Régions du monde",
    ctaTitle: "Vous préférez en parler d'abord ?",
    ctaIntro:
      "Envoyez-nous le produit, la qualité, le volume et la destination : notre équipe commerciale reviendra avec une offre indicative.",
  },

  contact: {
    meta: {
      title: "Contact",
      description:
        "Contactez M/W Global Services Limited — demandez un devis pour l'export de produits, le sourcing de minerais, l'import de marchandises, le transit ou le dédouanement.",
    },
    headerLabel: "Contact",
    headerTitle: "Parlons de ce que vous devez acheminer",
    headerIntro:
      "Envoyez une demande et notre équipe commerciale répondra sous un jour ouvré. Pour les expéditions urgentes, appelez-nous ou écrivez-nous directement.",
    directContact: "Contact direct",
    phone: "Téléphone",
    email: "E-mail",
    tradeDeskSuffix: "équipe commerciale",
    hours: "Horaires",
    whatsapp: "Écrivez-nous sur WhatsApp",
    mapTitle: (name: string, address: string) =>
      `Carte indiquant le bureau de ${name} à ${address}`,
    openInMaps: "Ouvrir dans Google Maps",
  },

  /** Client component — strings only, no functions: these cross to the browser. */
  form: {
    heading: "Demander un devis",
    intro:
      "Plus vous êtes précis sur la qualité, le volume et la destination, plus vite nous pourrons chiffrer votre demande.",
    name: "Nom complet",
    namePlaceholder: "Jean Dupont",
    company: "Société",
    companyPlaceholder: "Acme Trading Ltd",
    email: "E-mail",
    emailPlaceholder: "vous@societe.com",
    phone: "Téléphone / WhatsApp",
    phonePlaceholder: "+00 000 000 0000",
    service: "Service souhaité",
    servicePlaceholder: "Sélectionnez un service",
    serviceOther: "Autre / je ne sais pas",
    destination: "Port / pays de destination",
    destinationPlaceholder: "ex. Le Havre, France",
    message: "Produit, qualité et volume",
    messagePlaceholder:
      "ex. 2 x 40 pieds FCL de sésame décortiqué, pureté 99,5 %, humidité maxi 6 %, CIF Le Havre, expédition en septembre.",
    honeypot: "Site web",
    submit: "Envoyer la demande",
    sending: "Envoi en cours…",
    privacy:
      "Nous utilisons vos informations uniquement pour répondre à cette demande. Les champs marqués * sont obligatoires.",
    successHeading: "Demande reçue",
    successLead:
      "Merci. Notre équipe commerciale examinera votre demande et reviendra vers vous sous un jour ouvré.",
    successUrgent: "Pour toute urgence, appelez le",
    successAgain: "Envoyer une autre demande",
    genericError: "Une erreur s'est produite. Veuillez réessayer.",
    unexpectedError: "Erreur inattendue.",
  },

  notFound: {
    title: "Cette page a quitté sa route",
    text: "La page que vous cherchez n'existe pas ou a été déplacée. Retournez à l'accueil, ou dites-nous ce que vous cherchiez.",
    home: "Retour à l'accueil",
    contact: "Nous contacter",
  },
} satisfies Dictionary;
