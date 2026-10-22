import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://turbodesign.co"),
  title: "Turbo – Studio di design per prodotti digitali",
  description:
    "Diamo forma a prodotti digitali con chi ha qualcosa di nuovo da dire.",
  openGraph: {
    type: "website",
    url: "https://turbodesign.co/",
    title: "Turbo – Studio di design per prodotti digitali",
    description:
      "Diamo forma a prodotti digitali con chi ha qualcosa di nuovo da dire.",
    images: ["/images/footer-art.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turbo – Studio di design per prodotti digitali",
    description:
      "Diamo forma a prodotti digitali con chi ha qualcosa di nuovo da dire.",
    images: ["/images/footer-art.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.png",
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
