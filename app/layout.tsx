import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kobalto Studio – Design digitale a Verona",
  description:
    "Kobalto Studio è uno studio indipendente di design digitale a Verona.",
  openGraph: {
    type: "website",
    title: "Kobalto Studio – Design digitale a Verona",
    description:
      "Kobalto Studio è uno studio indipendente di design digitale a Verona.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kobalto Studio – Design digitale a Verona",
    description:
      "Kobalto Studio è uno studio indipendente di design digitale a Verona.",
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
      <body className="bg-ink text-white antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
