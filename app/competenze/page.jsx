import PageMarkup from '../components/PageMarkup.jsx';
import { metadataForPath } from '../../src/seo.js';
import { renderPage } from '../../src/pages.js';

const meta = metadataForPath('/competenze');
export const metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: true, follow: true },
  openGraph: { title: meta.title, description: meta.description, url: '/competenze', locale: 'it_IT', siteName: 'Kobalto Studio', images: [{ url: meta.ogImage, alt: meta.ogImageAlt }] },
  alternates: { canonical: '/competenze' },
};

export default function CompetencesPage() {
  return <PageMarkup html={renderPage('/competenze')} />;
}
