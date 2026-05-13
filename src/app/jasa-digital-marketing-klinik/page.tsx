import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NicheLandingPage from "@/components/niche/NicheLandingPage";
import { NICHE_DATA } from "@/lib/niches";

const niche = NICHE_DATA.klinik;

export const metadata: Metadata = {
  title: niche.metaTitle,
  description: niche.metaDescription,
  openGraph: {
    title: niche.metaTitle,
    description: niche.metaDescription,
    url: "https://parasuhudigital.com/jasa-digital-marketing-klinik",
    siteName: "Para Suhu Digital",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://parasuhudigital.com/jasa-digital-marketing-klinik",
  },
};

export default function KlinikLandingPage() {
  if (!niche) return notFound();
  return <NicheLandingPage niche={niche} />;
}
