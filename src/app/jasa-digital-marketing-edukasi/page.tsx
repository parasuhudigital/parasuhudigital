import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NicheLandingPage from "@/components/niche/NicheLandingPage";
import { NICHE_DATA } from "@/lib/niches";

const niche = NICHE_DATA.edukasi;

export const metadata: Metadata = {
  title: niche.metaTitle,
  description: niche.metaDescription,
  openGraph: {
    title: niche.metaTitle,
    description: niche.metaDescription,
    url: "https://parasuhudigital.com/jasa-digital-marketing-edukasi",
    siteName: "Para Suhu Digital",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://parasuhudigital.com/jasa-digital-marketing-edukasi",
  },
};

export default function EdukasiLandingPage() {
  if (!niche) return notFound();
  return <NicheLandingPage niche={niche} />;
}
