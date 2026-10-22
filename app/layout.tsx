import type { Metadata } from "next";
import "./globals.css";
import { studio } from "@/src/content/site";

const origin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: "Kobalto Studio — Web Design e Product Design a Verona",
    template: "%s — Kobalto Studio",
  },
  description: studio.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: studio.name,
    title: "Kobalto Studio — Web Design e Product Design a Verona",
    description: studio.description,
    images: [
      { url: "/assets/brand/kobalto-logo.png", alt: "Logo Kobalto Studio" },
    ],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: studio.name,
    description: studio.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: studio.city,
      addressCountry: "IT",
    },
    founder: studio.founders.map(({ name }) => ({ "@type": "Person", name })),
  };
  return (
    <html lang="it">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
