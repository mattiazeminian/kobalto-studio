import PageMarkup from './components/PageMarkup.jsx';
import { renderPage } from '../src/pages.js';

export const metadata = {
  title: 'Pagina non trovata | Kobalto Studio',
  description: 'La pagina richiesta non è disponibile. Esplora i progetti e le competenze di Kobalto Studio.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <PageMarkup html={renderPage('/non-trovata')} />;
}
