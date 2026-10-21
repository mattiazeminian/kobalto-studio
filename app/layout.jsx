import SiteFrame from './components/SiteFrame.jsx';
import '../src/style.css';
import { serializeStructuredData } from '../src/seo.js';

const canonicalHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = new URL(
  canonicalHost
    ? (canonicalHost.startsWith('http') ? canonicalHost : `https://${canonicalHost}`)
    : 'http://localhost:3000',
);

export const metadata = {
  metadataBase,
  title: 'Kobalto Studio | Web Design e Product Design a Verona',
  description: 'Kobalto Studio è una web agency a Verona: Web Design per siti e Product Design con UX/UI per web app e app mobile.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Kobalto Studio',
    title: 'Kobalto Studio | Web Design e Product Design a Verona',
    description: 'Web Design per siti e Product Design con UX/UI per web app e app mobile.',
    images: [{ url: '/assets/brand/kobalto-logo.png', alt: 'Marchio Kobalto Studio' }],
  },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  const jsonLd = serializeStructuredData(metadataBase?.origin || '');
  return (
    <html lang="it">
      <body>
        <SiteFrame>{children}</SiteFrame>
        <script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </body>
    </html>
  );
}
