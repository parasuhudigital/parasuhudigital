import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { COMPANY, t as bi } from "@/lib/constants";
import MetaPixel from "@/components/MetaPixel";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import "../globals.css";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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

const SITE_URL = "https://parasuhudigital.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });

  const ogLocale = locale === "id" ? "id_ID" : "en_US";
  const altLocale = locale === "id" ? "en_US" : "id_ID";
  const path = locale === routing.defaultLocale ? "" : `/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: `%s — ${COMPANY.brand}`,
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: COMPANY.name }],
    creator: COMPANY.name,
    publisher: COMPANY.name,
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: {
        "id-ID": SITE_URL,
        "en-US": `${SITE_URL}/en`,
        "x-default": SITE_URL,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${SITE_URL}${path}`,
      siteName: COMPANY.brand,
      locale: ogLocale,
      alternateLocale: altLocale,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: COMPANY.brand,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.jpg"],
    },
    icons: {
      icon: "/favicon.svg",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY.name,
        alternateName: COMPANY.brand,
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        description: bi(COMPANY.tagline, locale),
        email: COMPANY.email,
        telephone: COMPANY.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Infiniti Office, Indonesia Stock Exchange Tower 1 Level 3, Unit 304",
          addressLocality: "Jakarta Selatan",
          addressRegion: "DKI Jakarta",
          postalCode: "12190",
          addressCountry: "ID",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: COMPANY.brand,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: [
          { "@type": "Language", name: "Indonesian", alternateName: "id" },
          { "@type": "Language", name: "English", alternateName: "en" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: COMPANY.name,
        image: `${SITE_URL}/favicon.svg`,
        url: SITE_URL,
        telephone: COMPANY.phone,
        priceRange: "$$-$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Infiniti Office, IDX Tower 1 Level 3, Unit 304, Jl. Jendral Sudirman Kav 52-53",
          addressLocality: "Jakarta Selatan",
          addressRegion: "DKI Jakarta",
          postalCode: "12190",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -6.2237,
          longitude: 106.808,
        },
      },
    ],
  };

  return (
    <html
      lang={locale}
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MetaPixel />
      </head>
      <body className="font-sans bg-suhu-black text-white antialiased">
        <NextIntlClientProvider>
          {children}
          <WhatsAppFAB />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
