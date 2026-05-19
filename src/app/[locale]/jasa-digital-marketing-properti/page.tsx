import type { Metadata } from "next";
import PropertiLandingClient from "./PropertiLandingClient";

export const metadata: Metadata = {
  title:
    "Jasa Digital Marketing Properti — Developer, Agen, Cluster | Para Suhu Digital",
  description:
    "Spesialis digital marketing untuk industri properti. Website per cluster, SEO local, Meta & Google Ads dengan funnel WhatsApp, dashboard real-time — untuk 150+ developer dan agen properti di Indonesia. ROAS 4-8x, sales cycle 40-60% lebih pendek.",
  openGraph: {
    title:
      "Jasa Digital Marketing Properti — Buyer Siap Akad | Para Suhu Digital",
    description:
      "Spesialis digital marketing untuk industri properti. 150+ developer dan agen properti dipercayakan, ROAS rata-rata 4-8x.",
    url: "https://parasuhudigital.com/jasa-digital-marketing-properti",
    siteName: "Para Suhu Digital",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://parasuhudigital.com/jasa-digital-marketing-properti",
  },
};

export default function PropertiLandingPage() {
  return <PropertiLandingClient />;
}
