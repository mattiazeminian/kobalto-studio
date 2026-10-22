import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://turbodesign.co"),
  title: "Turbo – Product design studio for startups based in Brooklyn",
  description:
    "We accelerate ground-breaking startups with product design. The product design agency for growth.",
  openGraph: {
    type: "website",
    url: "https://turbodesign.co/",
    title: "Turbo – Product design studio for startups based in Brooklyn",
    description:
      "We accelerate ground-breaking startups with product design. The product design agency for growth.",
    images: ["/images/footer-art.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turbo – Product design studio for startups based in Brooklyn",
    description:
      "We accelerate ground-breaking startups with product design. The product design agency for growth.",
    images: ["/images/footer-art.png"],
  },
  icons: {
    icon: "/favicon.png",
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
    <html lang="en">
      <body className="bg-ink text-white antialiased">{children}</body>
    </html>
  );
}
