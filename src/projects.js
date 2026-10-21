export const categories = [
  { slug: 'tutti', label: 'Tutti i progetti' },
  { slug: 'siti-web', label: 'Siti web' },
  { slug: 'prodotto-digitale', label: 'Prodotto digitale' },
];

export const projects = [
  {
    slug: 'bemind',
    title: 'BeMind',
    category: 'Siti web',
    categorySlug: 'siti-web',
    description:
      'Una presentazione essenziale delle soluzioni di intelligenza artificiale di BeMind per le imprese.',
    image: '/assets/projects/bemind/hero.webp',
    imageAlt: 'Pagina iniziale di BeMind con una visualizzazione circolare su sfondo scuro.',
    details: [
      {
        src: '/assets/projects/bemind/hero.webp',
        alt: 'Pagina iniziale di BeMind con visualizzazione grafica e titolo.',
      },
    ],
    services: ['Web Design e sviluppo', 'Direzione visiva', 'Sviluppo'],
  },

  {
    slug: 'u2y',
    title: 'U2Y',
    category: 'Siti web',
    categorySlug: 'siti-web',
    description:
      'Servizi, casi e informazioni sulla sostenibilità d’impresa, organizzati per il sito di U2Y.',
    image: '/assets/projects/u2y/hero.webp',
    imageAlt: 'Pagina iniziale di U2Y con fotografia di prodotto e messaggio sulla sostenibilità.',
    details: [
      {
        src: '/assets/projects/u2y/hero.webp',
        alt: 'Pagina iniziale di U2Y dedicata alla sostenibilità d’impresa.',
      },
    ],
    services: ['Web Design e sviluppo', 'Interfaccia', 'Contenuti', 'Sviluppo'],
  },

  {
    slug: 'collecto',
    title: 'Collecto',
    category: 'Siti web',
    categorySlug: 'siti-web',
    description:
      'Immagini e contenuti editoriali presentano Collecto, piattaforma italiana dedicata al collezionismo.',
    image: '/assets/projects/collecto/hero.webp',
    imageAlt: 'Pagina iniziale di Collecto con fotografia di un oggetto da collezione e grande titolo editoriale.',
    details: [
      {
        src: '/assets/projects/collecto/hero.webp',
        alt: 'Pagina iniziale di Collecto con immagine di un oggetto da collezione.',
      },
    ],
    services: ['Web Design e sviluppo', 'Direzione visiva', 'Contenuti', 'Sviluppo'],
  },

  {
    slug: 'blp',
    title: 'BLP',
    category: 'Prodotto digitale',
    categorySlug: 'prodotto-digitale',
    description:
      'Per BLP, un sito e un’interfaccia che riuniscono attività e dati commerciali con strumenti di intelligenza artificiale.',
    image: '/assets/projects/blp/hero.webp',
    imageAlt: 'Interfaccia di BLP con pannello di controllo, attività commerciali e dati di sintesi.',
    details: [
      {
        src: '/assets/projects/blp/hero.webp',
        alt: 'Pannello di controllo di BLP con attività, contatti e indicatori commerciali.',
      },
      {
        src: '/assets/projects/blp/detail-1.webp',
        alt: 'Elenco delle attività di BLP con filtri e stato dei processi.',
      },
      {
        src: '/assets/projects/blp/detail-2.webp',
        alt: 'Pagina del sito BLP dedicata all’aumento della produttività commerciale.',
      },
    ],
    services: ['Product Design e UX/UI', 'Web Design e sviluppo'],
  },

  {
    slug: 'shadcncraft',
    title: 'Shadcncraft',
    category: 'Prodotto digitale',
    categorySlug: 'prodotto-digitale',
    description:
      'Shadcncraft raccoglie componenti per interfacce e flussi di lavoro legati all’intelligenza artificiale.',
    image: '/assets/projects/shadcncraft/hero.webp',
    imageAlt: 'Pagina iniziale di Shadcncraft con una griglia di componenti e interfacce.',
    details: [
      {
        src: '/assets/projects/shadcncraft/hero.webp',
        alt: 'Pagina iniziale di Shadcncraft con componenti e blocchi per interfacce.',
      },
    ],
    services: ['Product Design e UX/UI', 'Sistema di componenti', 'Web Design e sviluppo'],
  },

  {
    slug: 'clearflow',
    title: 'ClearFlow',
    category: 'Siti web',
    categorySlug: 'siti-web',
    description:
      'ClearFlow presenta una piattaforma per gestire incassi, fatture e flussi di cassa.',
    image: '/assets/projects/clearflow/hero.webp',
    imageAlt: 'Pagina iniziale di ClearFlow con titolo sulla gestione delle fatture e immagine di un dispositivo.',
    details: [
      {
        src: '/assets/projects/clearflow/hero.webp',
        alt: 'Pagina iniziale di ClearFlow dedicata all’automazione delle fatture.',
      },
    ],
    services: ['Web Design e sviluppo', 'Interfaccia', 'Sviluppo'],
  }
];



export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}
