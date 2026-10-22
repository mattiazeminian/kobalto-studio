import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kobalto Studio – Design digitale a Verona",
  description:
    "Kobalto Studio è lo studio di design digitale fondato a Verona da Mattia e Alberto.",
  openGraph: {
    type: "website",
    title: "Kobalto Studio – Design digitale a Verona",
    description:
      "Kobalto Studio è lo studio di design digitale fondato a Verona da Mattia e Alberto.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kobalto Studio – Design digitale a Verona",
    description:
      "Kobalto Studio è lo studio di design digitale fondato a Verona da Mattia e Alberto.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
      <body className="bg-ink text-white antialiased">{children}</body>
    </html>
  );
}
