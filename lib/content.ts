/** Case-study tiles in scroll order. Flattened into a single column. */
export const work: string[] = Array.from(
  { length: 31 },
  (_, index) => `/images/work-${String(index + 1).padStart(2, "0")}.png`,
);

export type Brand = {
  name: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

/** Two-column logo wall in the sticky hero rail. */
export const brands: Brand[] = [
  { name: "Ramp", image: "/images/brand-1.png", href: "/#ramp", width: 106, height: 36 },
  { name: "Jeep", image: "/images/brand-4.png", href: "/#jeep", width: 76, height: 27 },
  { name: "StockX", image: "/images/brand-2.png", href: "/#stockx", width: 110, height: 37 },
  { name: "ROI", image: "/images/brand-5.png", href: "/#roi-2", width: 87, height: 33 },
  { name: "Whop", image: "/images/brand-3.png", href: "/#whop", width: 125, height: 42 },
  { name: "Tandem", image: "/images/brand-6.png", href: "/#tandem", width: 87, height: 28 },
];

export type Testimonial = {
  id: string;
  logo: string;
  quote: string;
  author: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "ramble",
    logo: "/images/testimonial-1.png",
    quote:
      "Una capacità progettuale incredibile, risposte rapidissime e grande apertura ai feedback.\nHanno rispettato scadenze importanti anche quando eravamo clienti esigenti e sotto pressione. La loro esperienza ci ha aiutato a capire cosa fosse possibile, andando oltre le aspettative.",
    author: "Alex Pundyk, cofondatore di RAMBLE",
    avatar: "/images/avatar-1.png",
  },
  {
    id: "whop",
    logo: "/images/testimonial-2.png",
    quote: "Hanno un grande talento. Il lavoro che hanno fatto per noi è stato straordinario!",
    author: "Steven Schwartz, CEO di WHOP",
    avatar: "/images/avatar-2.png",
  },
  {
    id: "y-combinator",
    logo: "/images/testimonial-3.png",
    quote:
      "La loro iniziativa nelle scelte di design è stata preziosa. Faticavo a definire le funzionalità e, grazie alla loro esperienza, siamo arrivati a una soluzione ben progettata.",
    author: "Mohammed Nasir, startup in fase riservata",
    avatar: "/images/avatar-3.png",
  },
  {
    id: "roi",
    logo: "/images/testimonial-4.png",
    quote: "Un lavoro fluido: feedback facili da condividere e iterazioni rapide.",
    author: "Sujith Vishwajith, cofondatore di ROI",
    avatar: "/images/avatar-4.png",
  },
];

/** Lines that light up one after another while the manifesto scrolls past. */
export const manifesto = [
  "Le persone si aspettano di più.",
  "Ogni dettaglio conta.",
  "Le idee da sole non bastano.",
  "Serve un prodotto che le persone vogliano usare.",
  "Ne abbiamo progettati per milioni di persone.",
  "Ora possiamo farlo insieme a te.",
];

export const supportPoints = [
  "Diamo forma alle idee, dai primi schizzi al prodotto finito.",
  "Rendiamo semplici anche le esperienze più complesse.",
  "Ti aiutiamo a scegliere bene e a muoverti più velocemente.",
];

export const footerNav = [
  {
    title: "Seguici",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/turbo-design-co/" },
      { label: "Twitter/X", href: "https://x.com/turbodesignco" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Contattaci", href: "https://turbodesign.co/contact" },
      { label: "Condizioni di servizio", href: "https://turbodesign.co/fulfillment-policy" },
      { label: "Informativa sulla privacy", href: "https://turbodesign.co/privacy-policy" },
      { label: "Termini e condizioni", href: "https://turbodesign.co/terms-and-conditions" },
    ],
  },
] as const;

export const bookingUrl =
  "https://app.cal.com/shane-levine-7bnfdw/30min/embed?embedType=inline&embed=";
