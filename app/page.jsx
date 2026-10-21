import PageMarkup from './components/PageMarkup.jsx';
import { renderPage } from '../src/pages.js';

export default function HomePage() {
  return <PageMarkup html={renderPage('/', '', 'tutti')} />;
}
