import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  style: ["normal", "italic"],
});

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Para Suhu Digital — Suhu-nya Digital Marketing Indonesia",
  description:
    "Agency digital marketing Indonesia. Suhu SEO, Website, App, Software, Ads, Socmed, Creative, AI. Naikin bisnis lo ke level berikutnya.",
  keywords: [
    "digital marketing agency indonesia",
    "jasa SEO",
    "jasa website",
    "jasa aplikasi",
    "jasa software",
    "jasa ads",
    "social media marketing",
    "agency digital jakarta",
  ],
  authors: [{ name: "PT Suhu Digital Agency" }],
  openGraph: {
    title: "Para Suhu Digital — Suhu-nya Digital Marketing Indonesia",
    description:
      "Suhu SEO, Website, App, Software, Ads, Socmed, Creative, AI. Naikin bisnis lo ke level berikutnya.",
    url: "https://parasuhudigital.com",
    siteName: "Para Suhu Digital",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Para Suhu Digital",
    description: "Suhu-nya Digital Marketing Indonesia",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <body className="font-sans bg-suhu-black text-white">{children}</body>
    </html>
  );
}
