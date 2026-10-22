export type Project = {
  slug: string;
  title: string;
  category: "Web" | "Product";
  description: string;
  image: string;
  alt: string;
  details?: { src: string; alt: string }[];
};

export const studio = {
  name: "Kobalto Studio",
  city: "Verona",
  experienceYears: 8,
  founders: [
    {
      name: "Mattia Zeminian",
      url: "https://www.mattiazeminian.com/",
      portrait: "/assets/founders/mattia-zeminian.jpg",
    },
    {
      name: "Alberto Toso",
      url: "https://www.albertotoso.com/",
      portrait: "/assets/founders/alberto-toso.jpg",
    },
  ],
  description:
    "Kobalto Studio è una web agency a Verona. Progettiamo siti web e interfacce per web app e app mobile.",
} as const;

export const navigation = [
  { label: "Progetti", href: "/progetti" },
  { label: "Competenze", href: "/competenze" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Studio", href: "/studio" },
  { label: "Contatti", href: "/contatti" },
] as const;

export const projects: Project[] = [
  {
    slug: "bemind",
    title: "BeMind",
    category: "Web",
    description:
      "Un sito che presenta le soluzioni di intelligenza artificiale di BeMind per le imprese.",
    image: "/assets/projects/bemind/hero.webp",
    alt: "Pagina iniziale di BeMind con visualizzazione circolare su fondo scuro.",
  },
  {
    slug: "u2y",
    title: "U2Y",
    category: "Web",
    description:
      "Servizi e informazioni sulla sostenibilità d’impresa, organizzati in un sito chiaro.",
    image: "/assets/projects/u2y/hero.webp",
    alt: "Pagina iniziale del sito U2Y con fotografia e testo sulla sostenibilità.",
  },
  {
    slug: "collecto",
    title: "Collecto",
    category: "Web",
    description:
      "Un racconto visivo per una piattaforma dedicata al collezionismo.",
    image: "/assets/projects/collecto/hero.webp",
    alt: "Pagina iniziale di Collecto con fotografia editoriale e titolo.",
  },
  {
    slug: "blp",
    title: "BLP",
    category: "Product",
    description:
      "Un sito e un’interfaccia che riuniscono attività e dati commerciali.",
    image: "/assets/projects/blp/hero.webp",
    alt: "Interfaccia BLP con attività, contatti e dati commerciali.",
    details: [
      {
        src: "/assets/projects/blp/detail-1.webp",
        alt: "Elenco delle attività in BLP.",
      },
      {
        src: "/assets/projects/blp/detail-2.webp",
        alt: "Pagina del sito BLP dedicata alla produttività commerciale.",
      },
    ],
  },
  {
    slug: "shadcncraft",
    title: "Shadcncraft",
    category: "Product",
    description:
      "Componenti e flussi per interfacce legate all’intelligenza artificiale.",
    image: "/assets/projects/shadcncraft/hero.webp",
    alt: "Griglia di componenti e interfacce di Shadcncraft.",
  },
  {
    slug: "clearflow",
    title: "ClearFlow",
    category: "Web",
    description:
      "Una presentazione della piattaforma per incassi, fatture e flussi di cassa.",
    image: "/assets/projects/clearflow/hero.webp",
    alt: "Pagina iniziale di ClearFlow dedicata alla gestione delle fatture.",
  },
];

export type Service = {
  title: string;
  description: string;
  example: string;
  from: string;
};
export const services: Service[] = [
  {
    title: "Web Design e sviluppo",
    description:
      "Siti per aziende, attività locali e nuovi progetti. Organizziamo i contenuti, disegniamo le pagine e curiamo lo sviluppo.",
    example:
      "Un sito per presentare lavorazioni, camere, menu o un nuovo servizio.",
    from: "da €1.500",
  },
  {
    title: "Product Design per web app",
    description:
      "Flussi, prototipi e interfacce per strumenti usati nel browser.",
    example:
      "Un portale clienti, un’area riservata o un pannello di controllo.",
    from: "da €1.800",
  },
  {
    title: "Product Design per app mobile",
    description:
      "Percorsi e schermate per app su smartphone, pronti per il confronto con chi le sviluppa.",
    example: "Un’app per prenotazioni, acquisti o attività interne.",
    from: "da €1.800",
  },
];

export const priceNote =
  "Prezzi di partenza indicativi. Il preventivo dipende da obiettivi, contenuti e complessità del progetto.";

export const manifesto = [
  "Capire il problema prima di disegnare.",
  "Dare una struttura chiara ai contenuti.",
  "Scegliere soluzioni utili a chi usa il prodotto.",
  "Seguire il progetto fino alla realizzazione.",
];
