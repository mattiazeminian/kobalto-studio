import PageMarkup from '../components/PageMarkup.jsx';
import { metadataForPath } from '../../src/seo.js';
import { renderPage } from '../../src/pages.js';

const meta = metadataForPath('/contatti');
export const metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: true, follow: true },
  openGraph: { title: meta.title, description: meta.description, url: '/contatti', locale: 'it_IT', siteName: 'Kobalto Studio' },
  alternates: { canonical: '/contatti' },
};

export default function ContactsPage() {
  return <PageMarkup html={renderPage('/contatti')} />;
}
