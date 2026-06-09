export const COMPANY = {
  brand: "Para Suhu Digital",
  division: "HITAM",
  fullName: "Para Suhu Hitam",
  tagline:
    "Divisi black-hat Para Suhu Digital. Ranking, traffic, dan aged domain dengan cara yang gak diajarin agency biasa.",
  email: "info@parasuhudigital.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285353723905",
  whatsappDisplay: "+62 853-5372-3905",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://hitam.parasuhudigital.com",
  parentSite: "https://parasuhudigital.com",
  year: 2026,
} as const;

export type ServiceAccent = "blood" | "emerald" | "gold";

/** Lightweight catalog meta — full long-form content lives in catalog.ts. */
export const SERVICE_META: {
  slug: string;
  name: string;
  icon: string;
  accent: ServiceAccent;
  short: string;
}[] = [
  {
    slug: "hunting-aged-domain",
    name: "Hunting Aged Domain",
    icon: "Crosshair",
    accent: "gold",
    short:
      "Kami cariin aged domain bersih sesuai niche & target metrik kamu. Real, bukan inflated.",
  },
  {
    slug: "black-hat-seo",
    name: "Black Hat SEO",
    icon: "TrendingUp",
    accent: "blood",
    short:
      "Ranking halaman 1 dengan cara agresif. Semua industri — termasuk yang ditolak agency lain.",
  },
  {
    slug: "black-hat-ads",
    name: "Black Hat Ads",
    icon: "Megaphone",
    accent: "blood",
    short:
      "Iklan tetap jalan walau produk 'susah'. Meta, Google, TikTok, Snack Video, & Discovery.",
  },
  {
    slug: "backlink",
    name: "Jasa Backlink",
    icon: "Link2",
    accent: "emerald",
    short:
      "Hidden backlink, blogroll, & blogpost dari situs authority. Power link, indexing cepat.",
  },
  {
    slug: "landing-page",
    name: "Landing Page AMP",
    icon: "Zap",
    accent: "emerald",
    short:
      "Landing page AMP super cepat & anti-banned untuk kampanye agresif. Loading di bawah 1 detik.",
  },
  {
    slug: "tutoring",
    name: "Tutoring / Mentoring",
    icon: "GraduationCap",
    accent: "gold",
    short:
      "Diajarin langsung cara main black-hat — ads, SEO, backlink, atau apa pun. Materi & jadwal disesuaikan kebutuhan kamu.",
  },
];

export const NAV = [
  { label: "Aged Domain", href: "/aged-domains" },
  { label: "Layanan", href: "/jasa" },
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Testimoni", href: "/#testimoni" },
] as const;

export const ORDER_STATUS_LABEL: Record<string, string> = {
  pending: "Menunggu Konfirmasi",
  confirmed: "Dikonfirmasi",
  in_progress: "Sedang Dikerjakan",
  review: "Review",
  completed: "Selesai",
  cancelled: "Dibatalkan",
};

export const DOMAIN_STATUS_LABEL: Record<string, string> = {
  available: "Tersedia",
  reserved: "Dipesan",
  sold: "Terjual",
};
