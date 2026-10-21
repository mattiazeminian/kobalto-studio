import { contact, studio } from './content.js';
import { projects } from './projects.js';

const pages = {
  '/': {
    title: 'Kobalto Studio | Web Design e Product Design a Verona',
    description:
      'Kobalto Studio progetta e sviluppa siti web a Verona. Product e UX/UI per web app e app mobile.',
  },
  '/progetti': {
    title: 'Progetti di Web Design e Product Design | Kobalto Studio',
    description: 'Siti web e interfacce: esplora i progetti di Web Design e Product Design pubblicati da Kobalto Studio.',
  },
  '/competenze': {
    title: 'Competenze | Web Design e Product Design a Verona',
    description: 'Web e sviluppo di siti; Product e UX/UI per web app e app mobile. Ambiti di lavoro e prezzi indicativi.',
  },

  '/manifesto': {
    title: 'Manifesto | Kobalto Studio Verona',
    description: 'Come lavoriamo su Web Design e Product Design: capire il contesto, ordinare i contenuti e curare le interfacce.',
  },
  '/contatti': {
    title: 'Contatti | Kobalto Studio Verona',
    description: 'Hai un sito o un’app da progettare? Scopri quali informazioni servono per iniziare un progetto con Kobalto Studio.',
  },
};

export function normalizePath(path) {
  const normalized = path.replace(/\/+$/, '') || '/';
  return normalized === '/index.html' ? '/' : normalized;
}

export function metadataForPath(path, origin = '') {
  const normalized = normalizePath(path);
  const projectSlug = normalized.match(/^\/progetti\/([^/]+)$/)?.[1];
  const project = projectSlug ? projects.find((item) => item.slug === projectSlug) : null;
  const page = project
    ? {
        title: `${project.title} | ${project.category} — Kobalto Studio`,
        description: project.description,
        image: project.image,
      }
    : pages[normalized];
  const found = Boolean(page);
  const content = page ?? {
    title: 'Pagina non trovata | Kobalto Studio',
    description: 'La pagina richiesta non è disponibile. Esplora i progetti e le competenze di Kobalto Studio.',
  };
  const canonical = origin ? new URL(normalized, `${origin.replace(/\/$/, '')}/`).href : normalized;
  const image = content.image || '/assets/brand/kobalto-logo.png';
  const ogImage = origin ? new URL(image, origin).href : image;
  return { ...content, canonical, ogUrl: canonical, ogImage, ogImageAlt: content.image ? `${content.title} — Kobalto Studio` : 'Kobalto Studio', robots: found ? 'index,follow' : 'noindex,follow' };
}

export function structuredData(origin = '') {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: studio.name,
    description: studio.description,
    address: { '@type': 'PostalAddress', addressLocality: studio.city, addressCountry: 'IT' },
    founder: studio.founders.map((name) => ({ '@type': 'Person', name })),
  };
  if (origin.startsWith('https://')) data.url = `${origin.replace(/\/$/, '')}/`;
  if (contact.email) data.email = contact.email;
  return data;
}

export function serializeStructuredData(origin = '') {
  return JSON.stringify(structuredData(origin)).replaceAll('<', '\\u003c');
}
