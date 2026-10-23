import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Kobalto – Web design a Verona",
  description:
    "Studio Kobalto è un'agenzia di web design a Verona. Progettiamo siti web chiari, curati e facili da usare.",
  metadataBase: new URL("https://studiokobalto.com"),
  openGraph: {
    type: "website",
    title: "Studio Kobalto – Web design a Verona",
    description:
      "Studio Kobalto è un'agenzia di web design a Verona. Progettiamo siti web chiari, curati e facili da usare.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Kobalto – Web design a Verona",
    description:
      "Studio Kobalto è un'agenzia di web design a Verona. Progettiamo siti web chiari, curati e facili da usare.",
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
      </body>
    </html>
  );
}
