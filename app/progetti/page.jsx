import PageMarkup from '../components/PageMarkup.jsx';
import { renderPage } from '../../src/pages.js';

export const metadata = {
  title: 'Progetti di Web Design e Product Design | Kobalto Studio',
  description: 'Una selezione di progetti di Web Design e Product Design realizzati da Kobalto Studio a Verona.',
  alternates: { canonical: '/progetti' },
};

export default async function ProjectsPage({ searchParams }) {
  const params = await searchParams;
  const category = params?.categoria || 'tutti';
  return <PageMarkup html={renderPage('/progetti', '', category)} />;
}
