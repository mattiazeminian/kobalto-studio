import { notFound } from 'next/navigation';
import PageMarkup from '../../components/PageMarkup.jsx';
import { projects } from '../../../src/projects.js';
import { metadataForPath } from '../../../src/seo.js';
import { renderPage } from '../../../src/pages.js';

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meta = metadataForPath(`/progetti/${slug}`);
  return {
    title: meta.title,
    description: meta.description,
    robots: { index: meta.robots.startsWith('index'), follow: true },
    alternates: { canonical: `/progetti/${slug}` },
    openGraph: {
      type: 'article',
      locale: 'it_IT',
      siteName: 'Kobalto Studio',
      title: meta.title,
      description: meta.description,
      images: [{ url: meta.ogImage, alt: meta.ogImageAlt }],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <PageMarkup html={renderPage('/progetti', slug)} />;
}
