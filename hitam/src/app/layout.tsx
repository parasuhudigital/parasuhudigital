import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { CartProvider } from "@/components/cart/CartProvider";
import MetaPixel from "@/components/MetaPixel";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { getLocale } from "@/lib/i18n.server";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const sansFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = COMPANY.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Para Suhu Hitam — Black Hat SEO, Ads, Aged Domain & Backlink Indonesia",
    template: "%s — Para Suhu Hitam",
  },
  description:
    "Divisi black-hat Para Suhu Digital. Jasa hunting aged domain, marketplace aged domain, black hat SEO, black hat ads (Meta/Google/TikTok/Snack Video/Discovery), backlink & landing page AMP. Ranking & traffic cepat.",
  keywords:
    "black hat seo, jasa black hat seo, aged domain, jual aged domain, jasa backlink, hidden backlink, blogroll, blogpost, black hat ads, landing page amp, pbn",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: "Para Suhu Hitam",
    url: SITE_URL,
    title: "Para Suhu Hitam — Black Hat SEO, Ads & Aged Domain",
    description:
      "Ranking, traffic, dan aged domain dengan cara yang gak diajarin agency biasa.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getLocale();
  return (
    <html
      lang={locale}
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <body className="bg-hitam-black font-sans text-white antialiased">
        <MetaPixel />
        <LocaleProvider locale={locale}>
          <CartProvider>{children}</CartProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
