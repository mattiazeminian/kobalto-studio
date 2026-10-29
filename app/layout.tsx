import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

const siteUrl = "https://studiokobalto.com";
const siteTitle = "Studio Kobalto | Web design a Verona";
const siteDescription =
  "Progettiamo siti web per aziende e professionisti. Seguiamo ogni progetto in prima persona, dai contenuti alla struttura e al design.";
const socialImage = {
  url: "/social-preview-1200x630.png",
  width: 1200,
  height: 630,
  alt: "Studio Kobalto – Web design a Verona",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${siteUrl}/#business`,
      name: "Studio Kobalto",
      url: siteUrl,
      email: "hello@studiokobalto.com",
      description: siteDescription,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}${socialImage.url}`,
      areaServed: {
        "@type": "City",
        name: "Verona",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Verona",
        addressCountry: "IT",
      },
      sameAs: ["https://www.linkedin.com/company/studio-kobalto/"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Studio Kobalto",
      inLanguage: "it-IT",
      publisher: { "@id": `${siteUrl}/#business` },
    },
  ],
};

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://studiokobalto.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "Studio Kobalto",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage.url],
  },
  icons: {
    icon: { url: "/favicon.png", type: "image/png" },
    apple: { url: "/favicon.png", type: "image/png" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="f114d13a-e51c-41fb-959f-8e094ff5f81d"
        />
      </head>
      <body className="bg-ink text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
