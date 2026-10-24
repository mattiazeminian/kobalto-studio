import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Kobalto | Siti web a Verona e agenzia web design",
    description:
      "Studio Kobalto è un'agenzia di web design a Verona. Progettiamo siti web su misura, chiari e facili da usare, per raccontare bene la tua attività.",
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
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
