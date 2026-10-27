import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

const siteUrl = "https://studiokobalto.com";
const socialImage = {
  url: "/social-preview-1200x630.png",
  width: 1200,
  height: 630,
  alt: "Studio Kobalto – Siti web a Verona",
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
      description:
        "Studio Kobalto è un'agenzia di web design a Verona. Progettiamo siti web su misura, chiari e facili da usare.",
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
  title: "Studio Kobalto | Siti web a Verona e agenzia web design",
  description:
    "Studio Kobalto è un'agenzia di web design a Verona. Progettiamo siti web su misura, chiari e facili da usare, per raccontare bene la tua attività.",
  metadataBase: new URL("https://studiokobalto.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "Studio Kobalto",
    title: "Studio Kobalto | Siti web a Verona e agenzia web design",
    description:
      "Studio Kobalto è un'agenzia di web design a Verona. Progettiamo siti web su misura, chiari e facili da usare, per raccontare bene la tua attività.",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Kobalto | Siti web a Verona e agenzia web design",
    description:
      "Studio Kobalto è un'agenzia di web design a Verona. Progettiamo siti web su misura, chiari e facili da usare, per raccontare bene la tua attività.",
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
