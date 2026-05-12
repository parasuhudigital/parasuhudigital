export const SERVICES = [
  {
    id: "suhu-website",
    name: "Suhu Website",
    slug: "/services/suhu-website",
    tagline: "Website yang bukan cuma cantik, tapi bikin closing.",
    icon: "Globe",
    description:
      "Landing page, company profile, e-commerce, dan custom web — dibangun cepat, performa kenceng, siap convert.",
  },
  {
    id: "suhu-app",
    name: "Suhu App",
    slug: "/services/suhu-app",
    tagline: "Aplikasi mobile yang bikin user balik lagi.",
    icon: "Smartphone",
    description:
      "iOS, Android, atau cross-platform. Marketplace, booking, member app, on-demand — kita yang bangun.",
  },
  {
    id: "suhu-software",
    name: "Suhu Software",
    slug: "/services/suhu-software",
    tagline: "Custom software yang nge-otomatisin bisnis lo.",
    icon: "Code2",
    description:
      "CRM, ERP, POS, dashboard, automation tools. Bikin operasional bisnis lo jadi lebih efisien dan scalable.",
  },
  {
    id: "suhu-seo",
    name: "Suhu SEO",
    slug: "/services/suhu-seo",
    tagline: "Halaman 1 Google tanpa drama.",
    icon: "TrendingUp",
    description:
      "Riset keyword, on-page, off-page, technical SEO. Bisnis lo muncul di pencarian yang relevan dan ngalirin leads.",
  },
  {
    id: "suhu-ads",
    name: "Suhu Ads",
    slug: "/services/suhu-ads",
    tagline: "Iklan yang ROAS-nya bikin kaget.",
    icon: "Target",
    description:
      "Meta Ads, Google Ads, TikTok Ads, YouTube Ads. Setiap rupiah iklan diukur, dioptimasi, di-scale.",
  },
  {
    id: "suhu-socmed",
    name: "Suhu Socmed",
    slug: "/services/suhu-socmed",
    tagline: "Akun socmed yang aktif, engaging, dan dipercaya.",
    icon: "Hash",
    description:
      "Content planning, posting, community management, influencer collab. Brand lo jadi top-of-mind di socmed.",
  },
  {
    id: "suhu-digital-marketing",
    name: "Suhu Digital Marketing",
    slug: "/services/suhu-digital-marketing",
    tagline: "Strategi digital end-to-end, satu meja.",
    icon: "Rocket",
    description:
      "Full-funnel strategy: awareness, leads, conversion, retention. Cocok buat bisnis yang mau scaling serius.",
  },
  {
    id: "suhu-creative",
    name: "Suhu Creative",
    slug: "/services/suhu-creative",
    tagline: "Visual yang nge-stop scroll, nge-lock attention.",
    icon: "Palette",
    description:
      "Branding, logo, design konten, video production, photography. Visual yang jadi identitas bisnis lo.",
  },
  {
    id: "suhu-ai",
    name: "Suhu AI",
    slug: "/services/suhu-ai",
    tagline: "AI yang nge-leverage bisnis lo, bukan replace.",
    icon: "Sparkles",
    description:
      "AI chatbot, automation, content AI, custom GPT, AI tools integration. Bikin tim lo bekerja kayak punya 10x karyawan.",
  },
] as const;

export const NICHES = [
  { slug: "properti", name: "Properti", icon: "Building2" },
  { slug: "klinik", name: "Klinik & Kesehatan", icon: "Stethoscope" },
  { slug: "travel", name: "Travel & Wisata", icon: "Plane" },
  { slug: "otomotif", name: "Otomotif", icon: "Car" },
  { slug: "game-online", name: "Game Online", icon: "Gamepad2" },
  { slug: "edukasi", name: "Edukasi", icon: "GraduationCap" },
  { slug: "finance", name: "Finance", icon: "Banknote" },
  { slug: "restoran", name: "Restoran & F&B", icon: "UtensilsCrossed" },
] as const;

export const STATS = [
  { value: "50+", label: "Klien Sejak 2018" },
  { value: "9", label: "Layanan Suhu" },
  { value: "8", label: "Industri Spesialisasi" },
  { value: "100%", label: "Lokal Indonesia" },
] as const;

export const COMPANY = {
  name: "PT Suhu Digital Agency",
  brand: "Para Suhu Digital",
  tagline: "Suhu-nya Digital Marketing Indonesia",
  email: "info@parasuhudigital.com",
  phone: "(021) 5890 50020",
  whatsapp: "+6285890500020", // dummy, ganti sesuai aktual
  address:
    "Infiniti Office, Indonesia Stock Exchange Tower 1 Level 3, Unit 304, Jl. Jendral Sudirman Kav 52-53, RT 05/RW 03, Senayan, Kebayoran Baru, Jakarta Selatan 12190",
  shortAddress: "Jakarta Selatan, Indonesia",
} as const;
