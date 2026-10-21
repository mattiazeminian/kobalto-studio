import PageMarkup from '../components/PageMarkup.jsx';
import { metadataForPath } from '../../src/seo.js';
import { renderPage } from '../../src/pages.js';

const meta = metadataForPath('/manifesto');
export const metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: true, follow: true },
  openGraph: { title: meta.title, description: meta.description, url: '/manifesto', locale: 'it_IT', siteName: 'Kobalto Studio' },
  alternates: { canonical: '/manifesto' },
};

export default function ManifestoPage() {
  return <PageMarkup html={renderPage('/manifesto')} />;
}
