export type Locale = "id" | "en";

type BilingualString = { id: string; en: string };

export type Service = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  tagline: BilingualString;
  description: BilingualString;
  hero: {
    title: BilingualString;
    titleHighlight: BilingualString;
    subtitle: BilingualString;
  };
  features: BilingualString[];
  tiers: {
    name: BilingualString;
    price: string;
    for: BilingualString;
  }[];
};

export const SERVICES: readonly Service[] = [
  {
    id: "suhu-website",
    name: "Suhu Website",
    slug: "/services/suhu-website",
    icon: "Globe",
    tagline: {
      id: "Website yang bukan cuma cantik, tapi bikin closing.",
      en: "Websites that don't just look good — they close deals.",
    },
    description: {
      id: "Landing page, company profile, e-commerce, dan custom web — dibangun cepat, performa kenceng, siap convert.",
      en: "Landing pages, company profiles, e-commerce, and custom web apps — built fast, performance-tuned, conversion-ready.",
    },
    hero: {
      title: { id: "Website yang bikin", en: "Websites that make" },
      titleHighlight: { id: "bisnis lo closing.", en: "your business close." },
      subtitle: {
        id: "Bukan website portfolio yang dipajang aja. Kita bangun website yang ngerti funnel, optimized untuk SEO, dan cepet banget pas dibuka.",
        en: "Not a portfolio site that just sits there. We build websites that understand funnels, are SEO-optimized, and load lightning fast.",
      },
    },
    features: [
      { id: "Landing page conversion-optimized", en: "Conversion-optimized landing pages" },
      { id: "Company profile premium", en: "Premium company profile" },
      { id: "E-commerce (Shopify, WooCommerce, custom)", en: "E-commerce (Shopify, WooCommerce, custom)" },
      { id: "Custom web app", en: "Custom web app" },
      { id: "Mobile-first responsive", en: "Mobile-first responsive" },
      { id: "Performance 95+ PageSpeed", en: "95+ PageSpeed performance" },
      { id: "SEO-ready out of the box", en: "SEO-ready out of the box" },
      { id: "Free maintenance 1 bulan post-launch", en: "Free 1-month post-launch maintenance" },
    ],
    tiers: [
      { name: { id: "Starter", en: "Starter" }, price: "Rp 15-30jt", for: { id: "Single landing page atau small site (1-5 halaman)", en: "Single landing page or small site (1-5 pages)" } },
      { name: { id: "Business", en: "Business" }, price: "Rp 35-75jt", for: { id: "Company profile / e-commerce dengan custom design", en: "Company profile / e-commerce with custom design" } },
      { name: { id: "Premium", en: "Premium" }, price: "Rp 100jt+", for: { id: "Custom web app, marketplace, multi-tenant", en: "Custom web app, marketplace, multi-tenant" } },
    ],
  },
  {
    id: "suhu-app",
    name: "Suhu App",
    slug: "/services/suhu-app",
    icon: "Smartphone",
    tagline: {
      id: "Aplikasi mobile yang bikin user balik lagi.",
      en: "Mobile apps that bring users back.",
    },
    description: {
      id: "iOS, Android, atau cross-platform. Marketplace, booking, member app, on-demand — kita yang bangun.",
      en: "iOS, Android, or cross-platform. Marketplace, booking, member apps, on-demand — we build it.",
    },
    hero: {
      title: { id: "Aplikasi mobile yang", en: "Mobile apps that are" },
      titleHighlight: { id: "addictive, bukan annoying.", en: "addictive, not annoying." },
      subtitle: {
        id: "Bangun app yang ngerti UX modern, performa smooth, dan strategi retention yang bener. Bukan cuma launch terus ditinggal.",
        en: "Build apps that understand modern UX, perform smoothly, and have proper retention strategy — not just launch-and-leave.",
      },
    },
    features: [
      { id: "iOS native (Swift)", en: "iOS native (Swift)" },
      { id: "Android native (Kotlin)", en: "Android native (Kotlin)" },
      { id: "Cross-platform (React Native)", en: "Cross-platform (React Native)" },
      { id: "Progressive Web App (PWA)", en: "Progressive Web App (PWA)" },
      { id: "Backend integration", en: "Backend integration" },
      { id: "Push notification setup", en: "Push notification setup" },
      { id: "Analytics & funnel tracking", en: "Analytics & funnel tracking" },
      { id: "App Store + Play Store submission", en: "App Store + Play Store submission" },
    ],
    tiers: [
      { name: { id: "Lite (PWA)", en: "Lite (PWA)" }, price: "Rp 35-75jt", for: { id: "Web-based app yang feel native", en: "Web-based app with native feel" } },
      { name: { id: "Standard", en: "Standard" }, price: "Rp 100-200jt", for: { id: "React Native cross-platform, 5-10 feature", en: "React Native cross-platform, 5-10 features" } },
      { name: { id: "Premium", en: "Premium" }, price: "Rp 250jt+", for: { id: "Native iOS + Android dengan backend lengkap", en: "Native iOS + Android with full backend" } },
    ],
  },
  {
    id: "suhu-software",
    name: "Suhu Software",
    slug: "/services/suhu-software",
    icon: "Code2",
    tagline: {
      id: "Custom software yang nge-otomatisin bisnis lo.",
      en: "Custom software that automates your business.",
    },
    description: {
      id: "CRM, ERP, POS, dashboard, automation tools. Bikin operasional bisnis lo jadi lebih efisien dan scalable.",
      en: "CRM, ERP, POS, dashboards, automation tools. Make your operations more efficient and scalable.",
    },
    hero: {
      title: { id: "Custom software yang", en: "Custom software that" },
      titleHighlight: { id: "kerja, bukan ribetin.", en: "works — doesn't complicate." },
      subtitle: {
        id: "Bisnis lo punya workflow unik yang gak match dengan SaaS off-the-shelf? Kita bangun software custom yang fit 100% sama operasional lo.",
        en: "Your business has unique workflows that don't fit off-the-shelf SaaS? We build custom software that fits your operations 100%.",
      },
    },
    features: [
      { id: "Custom CRM", en: "Custom CRM" },
      { id: "ERP (inventory, finance, HR)", en: "ERP (inventory, finance, HR)" },
      { id: "POS system", en: "POS system" },
      { id: "Admin dashboard & analytics", en: "Admin dashboard & analytics" },
      { id: "Automation workflow", en: "Workflow automation" },
      { id: "API integration", en: "API integration" },
      { id: "User role & permission management", en: "User role & permission management" },
      { id: "Training & documentation", en: "Training & documentation" },
    ],
    tiers: [
      { name: { id: "Starter", en: "Starter" }, price: "Rp 25-50jt", for: { id: "1-3 modul sederhana", en: "1-3 simple modules" } },
      { name: { id: "Business", en: "Business" }, price: "Rp 75-150jt", for: { id: "5-10 modul dengan custom workflow", en: "5-10 modules with custom workflow" } },
      { name: { id: "Enterprise", en: "Enterprise" }, price: "Rp 200jt+", for: { id: "Full custom system + integration kompleks", en: "Full custom system + complex integrations" } },
    ],
  },
  {
    id: "suhu-seo",
    name: "Suhu SEO",
    slug: "/services/suhu-seo",
    icon: "TrendingUp",
    tagline: {
      id: "Halaman 1 Google tanpa drama.",
      en: "Page 1 of Google — no drama.",
    },
    description: {
      id: "Riset keyword, on-page, off-page, technical SEO. Bisnis lo muncul di pencarian yang relevan dan ngalirin leads.",
      en: "Keyword research, on-page, off-page, technical SEO. Show up in relevant searches and turn them into leads.",
    },
    hero: {
      title: { id: "Halaman 1 Google,", en: "Page 1 of Google —" },
      titleHighlight: { id: "tanpa janji manis.", en: "without empty promises." },
      subtitle: {
        id: "SEO bukan magic, tapi sistem. Kita pakai approach data-driven: riset, eksekusi, measure, repeat. Hasil mulai keliatan dalam 3-6 bulan.",
        en: "SEO isn't magic — it's a system. Data-driven approach: research, execute, measure, repeat. Results visible in 3-6 months.",
      },
    },
    features: [
      { id: "Keyword research (high-intent)", en: "Keyword research (high-intent)" },
      { id: "On-page SEO optimization", en: "On-page SEO optimization" },
      { id: "Technical SEO audit & fix", en: "Technical SEO audit & fix" },
      { id: "Content strategy & writing", en: "Content strategy & writing" },
      { id: "Backlink building (white-hat)", en: "White-hat backlink building" },
      { id: "Local SEO (Google Business)", en: "Local SEO (Google Business)" },
      { id: "Monthly reporting & analysis", en: "Monthly reporting & analysis" },
      { id: "Competitor tracking", en: "Competitor tracking" },
    ],
    tiers: [
      { name: { id: "Starter", en: "Starter" }, price: "Rp 8-15jt/bulan", for: { id: "Local SEO + 5-10 keyword target", en: "Local SEO + 5-10 target keywords" } },
      { name: { id: "Business", en: "Business" }, price: "Rp 20-40jt/bulan", for: { id: "Nasional, 20-50 keyword, content marketing", en: "National, 20-50 keywords, content marketing" } },
      { name: { id: "Enterprise", en: "Enterprise" }, price: "Rp 50jt+/bulan", for: { id: "Multi-domain, full content team, link building", en: "Multi-domain, full content team, link building" } },
    ],
  },
  {
    id: "suhu-ads",
    name: "Suhu Ads",
    slug: "/services/suhu-ads",
    icon: "Target",
    tagline: {
      id: "Iklan yang ROAS-nya bikin kaget.",
      en: "Ads with ROAS that'll surprise you.",
    },
    description: {
      id: "Meta Ads, Google Ads, TikTok Ads, YouTube Ads. Setiap rupiah iklan diukur, dioptimasi, di-scale.",
      en: "Meta Ads, Google Ads, TikTok Ads, YouTube Ads. Every rupiah measured, optimized, scaled.",
    },
    hero: {
      title: { id: "Setiap rupiah iklan,", en: "Every ad rupiah —" },
      titleHighlight: { id: "ada accountability-nya.", en: "fully accountable." },
      subtitle: {
        id: "Bosan boring ads yang burn budget tanpa hasil? Kita kelola ads dengan strategi funnel jelas, A/B testing rutin, dan optimasi harian.",
        en: "Tired of boring ads burning budget with no results? We manage ads with clear funnel strategy, routine A/B testing, and daily optimization.",
      },
    },
    features: [
      { id: "Meta Ads (Facebook + Instagram)", en: "Meta Ads (Facebook + Instagram)" },
      { id: "Google Ads (Search, Display, Shopping)", en: "Google Ads (Search, Display, Shopping)" },
      { id: "TikTok Ads", en: "TikTok Ads" },
      { id: "YouTube Ads", en: "YouTube Ads" },
      { id: "LinkedIn Ads (B2B)", en: "LinkedIn Ads (B2B)" },
      { id: "Creative production untuk ads", en: "Ad creative production" },
      { id: "Funnel strategy & audience research", en: "Funnel strategy & audience research" },
      { id: "Daily monitoring & weekly reporting", en: "Daily monitoring & weekly reporting" },
    ],
    tiers: [
      { name: { id: "Starter", en: "Starter" }, price: "Rp 5-10jt/bulan", for: { id: "Ad spend < Rp 30jt/bulan, 1-2 platform", en: "Ad spend < Rp 30M/month, 1-2 platforms" } },
      { name: { id: "Business", en: "Business" }, price: "Rp 15-25jt/bulan", for: { id: "Ad spend Rp 30-100jt/bulan, multi-platform", en: "Ad spend Rp 30-100M/month, multi-platform" } },
      { name: { id: "Enterprise", en: "Enterprise" }, price: "10-15% of ad spend", for: { id: "Ad spend Rp 100jt+/bulan, full-funnel", en: "Ad spend Rp 100M+/month, full-funnel" } },
    ],
  },
  {
    id: "suhu-socmed",
    name: "Suhu Socmed",
    slug: "/services/suhu-socmed",
    icon: "Hash",
    tagline: {
      id: "Akun socmed yang aktif, engaging, dan dipercaya.",
      en: "Social accounts that are active, engaging, and trusted.",
    },
    description: {
      id: "Content planning, posting, community management, influencer collab. Brand lo jadi top-of-mind di socmed.",
      en: "Content planning, posting, community management, influencer collab. Your brand becomes top-of-mind on social.",
    },
    hero: {
      title: { id: "Akun socmed yang", en: "Social accounts with" },
      titleHighlight: { id: "punya audience loyal.", en: "loyal audiences." },
      subtitle: {
        id: "Bukan cuma posting harian. Kita bangun audience engaged dengan konten yang resonate, dan brand presence yang konsisten.",
        en: "Not just daily posting. We build engaged audiences with content that resonates, and consistent brand presence.",
      },
    },
    features: [
      { id: "Content strategy & calendar", en: "Content strategy & calendar" },
      { id: "Daily/weekly posting", en: "Daily/weekly posting" },
      { id: "Community management", en: "Community management" },
      { id: "Reels & TikTok production", en: "Reels & TikTok production" },
      { id: "Influencer outreach & management", en: "Influencer outreach & management" },
      { id: "Engagement tracking", en: "Engagement tracking" },
      { id: "Monthly analytics report", en: "Monthly analytics report" },
      { id: "Platform: IG, TikTok, FB, LinkedIn, X", en: "Platforms: IG, TikTok, FB, LinkedIn, X" },
    ],
    tiers: [
      { name: { id: "Starter", en: "Starter" }, price: "Rp 8-15jt/bulan", for: { id: "1-2 platform, 3-5 posts/minggu", en: "1-2 platforms, 3-5 posts/week" } },
      { name: { id: "Business", en: "Business" }, price: "Rp 20-40jt/bulan", for: { id: "Multi-platform, daily posting, video content", en: "Multi-platform, daily posting, video content" } },
      { name: { id: "Premium", en: "Premium" }, price: "Rp 50jt+/bulan", for: { id: "Full team, influencer mgmt, content shoot", en: "Full team, influencer management, content shoots" } },
    ],
  },
  {
    id: "suhu-digital-marketing",
    name: "Suhu Digital Marketing",
    slug: "/services/suhu-digital-marketing",
    icon: "Rocket",
    tagline: {
      id: "Strategi digital end-to-end, satu meja.",
      en: "End-to-end digital strategy, all in one place.",
    },
    description: {
      id: "Full-funnel strategy: awareness, leads, conversion, retention. Cocok buat bisnis yang mau scaling serius.",
      en: "Full-funnel strategy: awareness, leads, conversion, retention. Perfect for businesses ready to scale seriously.",
    },
    hero: {
      title: { id: "Strategi full-funnel,", en: "Full-funnel strategy —" },
      titleHighlight: { id: "satu pintu, hasil maksimal.", en: "one door, maximum results." },
      subtitle: {
        id: "Daripada nge-handle vendor terpisah untuk SEO, ads, content, dan socmed — kita jadi partner strategis lo yang ngerti semua layer marketing.",
        en: "Instead of juggling separate vendors for SEO, ads, content, and social — we become your strategic partner who understands every marketing layer.",
      },
    },
    features: [
      { id: "Marketing audit & strategy", en: "Marketing audit & strategy" },
      { id: "Customer journey mapping", en: "Customer journey mapping" },
      { id: "Full-funnel campaign execution", en: "Full-funnel campaign execution" },
      { id: "CRM & marketing automation setup", en: "CRM & marketing automation setup" },
      { id: "Brand positioning & messaging", en: "Brand positioning & messaging" },
      { id: "Analytics & attribution modeling", en: "Analytics & attribution modeling" },
      { id: "Monthly strategic review", en: "Monthly strategic review" },
      { id: "Dedicated account manager", en: "Dedicated account manager" },
    ],
    tiers: [
      { name: { id: "Growth", en: "Growth" }, price: "Rp 35-75jt/bulan", for: { id: "Bisnis yang mau scaling 2-5x dalam 12 bulan", en: "Businesses targeting 2-5x scale in 12 months" } },
      { name: { id: "Scale", en: "Scale" }, price: "Rp 100-200jt/bulan", for: { id: "Brand established, mau go nasional", en: "Established brands going national" } },
      { name: { id: "Enterprise", en: "Enterprise" }, price: "Custom", for: { id: "Multi-brand, multi-region operations", en: "Multi-brand, multi-region operations" } },
    ],
  },
  {
    id: "suhu-creative",
    name: "Suhu Creative",
    slug: "/services/suhu-creative",
    icon: "Palette",
    tagline: {
      id: "Visual yang nge-stop scroll, nge-lock attention.",
      en: "Visuals that stop the scroll and lock attention.",
    },
    description: {
      id: "Branding, logo, design konten, video production, photography. Visual yang jadi identitas bisnis lo.",
      en: "Branding, logo, content design, video production, photography. Visuals that become your business identity.",
    },
    hero: {
      title: { id: "Visual yang bikin", en: "Visuals that make" },
      titleHighlight: { id: "brand lo recognizable.", en: "your brand recognizable." },
      subtitle: {
        id: "Bukan cuma design cantik. Kita bikin visual identity yang konsisten across channel, dan ngebantu brand lo stand out di market yang noise.",
        en: "Not just pretty design. We build visual identity that's consistent across channels, helping your brand stand out in a noisy market.",
      },
    },
    features: [
      { id: "Brand identity (logo + guideline)", en: "Brand identity (logo + guidelines)" },
      { id: "Content design (IG feed, story, reels)", en: "Content design (IG feed, story, reels)" },
      { id: "Video production & editing", en: "Video production & editing" },
      { id: "Product photography", en: "Product photography" },
      { id: "Motion graphics & animation", en: "Motion graphics & animation" },
      { id: "Packaging design", en: "Packaging design" },
      { id: "Pitch deck & presentation design", en: "Pitch deck & presentation design" },
      { id: "Print collateral (brosur, kartu nama, dll)", en: "Print collateral (brochures, business cards, etc.)" },
    ],
    tiers: [
      { name: { id: "Starter", en: "Starter" }, price: "Rp 10-25jt", for: { id: "Logo + brand guideline basic", en: "Basic logo + brand guidelines" } },
      { name: { id: "Brand Package", en: "Brand Package" }, price: "Rp 35-75jt", for: { id: "Full branding + content templates", en: "Full branding + content templates" } },
      { name: { id: "Premium", en: "Premium" }, price: "Rp 100jt+", for: { id: "Full visual identity + content production", en: "Full visual identity + content production" } },
    ],
  },
  {
    id: "suhu-ai",
    name: "Suhu AI",
    slug: "/services/suhu-ai",
    icon: "Sparkles",
    tagline: {
      id: "AI yang nge-leverage bisnis lo, bukan replace.",
      en: "AI that leverages your business — not replaces it.",
    },
    description: {
      id: "AI chatbot, automation, content AI, custom GPT, AI tools integration. Bikin tim lo bekerja kayak punya 10x karyawan.",
      en: "AI chatbots, automation, content AI, custom GPTs, AI tool integration. Make your team work like it has 10x the people.",
    },
    hero: {
      title: { id: "Integrasi AI yang", en: "AI integrations that are" },
      titleHighlight: { id: "actually berguna.", en: "actually useful." },
      subtitle: {
        id: "Banyak yang ngomong AI, sedikit yang ngerti cara implement-nya. Kita bantu bisnis lo adopt AI dengan use case yang real & ROI yang ke-measure.",
        en: "Many talk AI, few know how to implement it. We help your business adopt AI with real use cases and measurable ROI.",
      },
    },
    features: [
      { id: "AI chatbot (customer service, sales)", en: "AI chatbot (customer service, sales)" },
      { id: "Custom GPT untuk internal team", en: "Custom GPT for internal teams" },
      { id: "Content automation (blog, social, email)", en: "Content automation (blog, social, email)" },
      { id: "AI-powered analytics", en: "AI-powered analytics" },
      { id: "Workflow automation (n8n, Make, Zapier)", en: "Workflow automation (n8n, Make, Zapier)" },
      { id: "AI integration ke existing tools", en: "AI integration with existing tools" },
      { id: "Training & change management", en: "Training & change management" },
      { id: "Monthly optimization", en: "Monthly optimization" },
    ],
    tiers: [
      { name: { id: "Pilot", en: "Pilot" }, price: "Rp 15-30jt", for: { id: "1 use case (chatbot atau automation)", en: "1 use case (chatbot or automation)" } },
      { name: { id: "Implementation", en: "Implementation" }, price: "Rp 50-100jt", for: { id: "3-5 AI use case + training tim", en: "3-5 AI use cases + team training" } },
      { name: { id: "Transformation", en: "Transformation" }, price: "Rp 150jt+", for: { id: "Full AI integration across departments", en: "Full AI integration across departments" } },
    ],
  },
] as const;

export const NICHES = [
  { slug: "properti", name: { id: "Properti", en: "Property" }, icon: "Building2" },
  { slug: "klinik", name: { id: "Klinik & Kesehatan", en: "Clinics & Healthcare" }, icon: "Stethoscope" },
  { slug: "travel", name: { id: "Travel & Wisata", en: "Travel & Tourism" }, icon: "Plane" },
  { slug: "otomotif", name: { id: "Otomotif", en: "Automotive" }, icon: "Car" },
  { slug: "game-online", name: { id: "Game Online", en: "Online Gaming" }, icon: "Gamepad2" },
  { slug: "edukasi", name: { id: "Edukasi", en: "Education" }, icon: "GraduationCap" },
  { slug: "finance", name: { id: "Finance", en: "Finance" }, icon: "Banknote" },
  { slug: "restoran", name: { id: "Restoran & F&B", en: "Restaurants & F&B" }, icon: "UtensilsCrossed" },
] as const;

export const STATS = [
  { value: "1.000+", label: { id: "Klien di Seluruh Indonesia", en: "Clients Across Indonesia" } },
  { value: "9", label: { id: "Layanan Suhu", en: "Suhu Services" } },
  { value: "8", label: { id: "Industri Spesialisasi", en: "Industry Specialties" } },
  { value: "100%", label: { id: "Lokal Indonesia", en: "Indonesian Local" } },
] as const;

export const COMPANY = {
  name: "PT Suhu Digital Agency",
  brand: "Para Suhu Digital",
  tagline: {
    id: "Suhu-nya Digital Marketing Indonesia",
    en: "Indonesia's Digital Marketing Masters",
  },
  email: "info@parasuhudigital.com",
  phone: "(021) 5890 50020",
  whatsapp: "+6285890500020",
  address: {
    id: "Infiniti Office, Indonesia Stock Exchange Tower 1 Level 3, Unit 304, Jl. Jendral Sudirman Kav 52-53, RT 05/RW 03, Senayan, Kebayoran Baru, Jakarta Selatan 12190",
    en: "Infiniti Office, Indonesia Stock Exchange Tower 1 Level 3, Unit 304, Jl. Jendral Sudirman Kav 52-53, RT 05/RW 03, Senayan, Kebayoran Baru, South Jakarta 12190",
  },
  shortAddress: {
    id: "Jakarta Selatan, Indonesia",
    en: "South Jakarta, Indonesia",
  },
} as const;

/** Helper to extract locale-aware text. Falls back to ID if EN missing. */
export function t<T extends BilingualString>(field: T, locale: Locale): string {
  return locale === "en" ? field.en || field.id : field.id;
}
