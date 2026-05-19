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
    price: BilingualString;
    for: BilingualString;
  }[];
  stats?: { value: string; label: BilingualString }[];
  deliverables?: {
    title: BilingualString;
    items: BilingualString[];
  }[];
  whyUs?: {
    title: BilingualString;
    desc: BilingualString;
    stat?: string;
  }[];
  process?: {
    step: string;
    title: BilingualString;
    desc: BilingualString;
    duration?: BilingualString;
  }[];
  faqs?: {
    q: BilingualString;
    a: BilingualString;
  }[];
};

export const SERVICES: readonly Service[] = [
  {
    id: "suhu-website",
    name: "Suhu Website",
    slug: "/services/suhu-website",
    icon: "Globe",
    tagline: {
      id: "Website yang bukan sekadar tampil menarik, tetapi mendorong konversi.",
      en: "Websites that don't just look good — they close deals.",
    },
    description: {
      id: "Landing page, company profile, e-commerce, dan custom web — dibangun cepat, berperforma tinggi, dan siap mengkonversi pengunjung menjadi pelanggan.",
      en: "Landing pages, company profiles, e-commerce, and custom web apps — built fast, performance-tuned, conversion-ready.",
    },
    hero: {
      title: { id: "Website yang", en: "Websites that make" },
      titleHighlight: {
        id: "mendorong bisnis Anda berkembang.",
        en: "your business close.",
      },
      subtitle: {
        id: "Bukan sekadar portfolio digital. Kami membangun website yang memahami sales funnel, dioptimasi untuk SEO, dan memuat dengan kecepatan tinggi di seluruh perangkat.",
        en: "Not a portfolio site that just sits there. We build websites that understand funnels, are SEO-optimized, and load lightning fast.",
      },
    },
    features: [
      {
        id: "Landing page conversion-optimized",
        en: "Conversion-optimized landing pages",
      },
      { id: "Company profile premium", en: "Premium company profile" },
      {
        id: "E-commerce (Shopify, WooCommerce, custom)",
        en: "E-commerce (Shopify, WooCommerce, custom)",
      },
      { id: "Custom web app", en: "Custom web app" },
      { id: "Mobile-first responsive", en: "Mobile-first responsive" },
      { id: "Performance 95+ PageSpeed", en: "95+ PageSpeed performance" },
      { id: "SEO-ready out of the box", en: "SEO-ready out of the box" },
      {
        id: "Free maintenance 1 bulan post-launch",
        en: "Free 1-month post-launch maintenance",
      },
    ],
    tiers: [
      {
        name: { id: "Starter", en: "Starter" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Single landing page atau small site (1-5 halaman)",
          en: "Single landing page or small site (1-5 pages)",
        },
      },
      {
        name: { id: "Business", en: "Business" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Company profile / e-commerce dengan custom design",
          en: "Company profile / e-commerce with custom design",
        },
      },
      {
        name: { id: "Premium", en: "Premium" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Custom web app, marketplace, multi-tenant",
          en: "Custom web app, marketplace, multi-tenant",
        },
      },
    ],
    stats: [
      {
        value: "500+",
        label: { id: "Website telah diluncurkan", en: "Websites launched" },
      },
      {
        value: "95+",
        label: { id: "PageSpeed score rata-rata", en: "Avg PageSpeed score" },
      },
      {
        value: "<1.5s",
        label: { id: "Load time global", en: "Global load time" },
      },
      {
        value: "8+ thn",
        label: { id: "Pengalaman tim", en: "Years of experience" },
      },
    ],
    deliverables: [
      {
        title: { id: "Design & UX", en: "Design & UX" },
        items: [
          {
            id: "Custom UI/UX dari nol, bukan template generik",
            en: "Custom UI/UX from scratch, not generic templates",
          },
          {
            id: "Mobile-first responsive di seluruh perangkat & resolusi",
            en: "Mobile-first responsive across all devices & resolutions",
          },
          {
            id: "Brand-consistent visual identity sesuai brand guideline",
            en: "Brand-consistent visual identity per your brand guidelines",
          },
          {
            id: "Layout conversion-optimized (CTA, funnel flow, F-pattern)",
            en: "Conversion-optimized layout (CTA, funnel flow, F-pattern)",
          },
          {
            id: "Micro-animation & interactive elements yang halus",
            en: "Smooth micro-animations & interactive elements",
          },
          {
            id: "Dark/light mode support (jika dibutuhkan)",
            en: "Dark/light mode support (if needed)",
          },
          {
            id: "Multi-language UI ready (bilingual atau lebih)",
            en: "Multi-language UI ready (bilingual or more)",
          },
          {
            id: "A/B testing setup untuk landing page kritikal",
            en: "A/B testing setup for critical landing pages",
          },
          {
            id: "Accessibility WCAG 2.1 AA compliance",
            en: "WCAG 2.1 AA accessibility compliance",
          },
          {
            id: "Unlimited revisi minor pre-launch",
            en: "Unlimited minor revisions pre-launch",
          },
        ],
      },
      {
        title: { id: "Tech & Performance", en: "Tech & Performance" },
        items: [
          {
            id: "Next.js / React stack modern (atau platform sesuai permintaan)",
            en: "Modern Next.js / React stack (or platform per request)",
          },
          {
            id: "Guaranteed 95+ PageSpeed score di mobile & desktop",
            en: "Guaranteed 95+ PageSpeed score on mobile & desktop",
          },
          {
            id: "Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1",
            en: "Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1",
          },
          {
            id: "SEO-ready (meta tags, schema markup, sitemap, robots.txt)",
            en: "SEO-ready (meta tags, schema markup, sitemap, robots.txt)",
          },
          {
            id: "Open Graph & Twitter Card optimized untuk social sharing",
            en: "Open Graph & Twitter Card optimized for social sharing",
          },
          {
            id: "Image optimization otomatis (WebP/AVIF, lazy loading)",
            en: "Automatic image optimization (WebP/AVIF, lazy loading)",
          },
          {
            id: "WCAG accessibility & ARIA support",
            en: "WCAG accessibility & ARIA support",
          },
          {
            id: "Multi-language support (i18n, hreflang tags)",
            en: "Multi-language support (i18n, hreflang tags)",
          },
          {
            id: "Google Analytics 4 + Tag Manager + Search Console setup",
            en: "Google Analytics 4 + Tag Manager + Search Console setup",
          },
          {
            id: "Meta Pixel / Google Ads conversion tracking included",
            en: "Meta Pixel / Google Ads conversion tracking included",
          },
        ],
      },
      {
        title: {
          id: "Hosting & Infrastructure",
          en: "Hosting & Infrastructure",
        },
        items: [
          {
            id: "Vercel / Cloudflare edge deployment (1 tahun included)",
            en: "Vercel / Cloudflare edge deployment (1 year included)",
          },
          {
            id: "SSL certificate auto-renewed selamanya",
            en: "Auto-renewed SSL certificate forever",
          },
          {
            id: "Global CDN untuk kecepatan di mana pun pengguna mengakses",
            en: "Global CDN for speed wherever users access",
          },
          {
            id: "Edge caching & ISR untuk halaman dinamis",
            en: "Edge caching & ISR for dynamic pages",
          },
          {
            id: "Image CDN dengan auto-optimization",
            en: "Image CDN with auto-optimization",
          },
          {
            id: "Daily automated backup ke storage terpisah",
            en: "Daily automated backup to separate storage",
          },
          {
            id: "99.9% uptime SLA dengan monitoring 24/7",
            en: "99.9% uptime SLA with 24/7 monitoring",
          },
          {
            id: "Cloudflare DDoS & bot protection",
            en: "Cloudflare DDoS & bot protection",
          },
          {
            id: "Web Application Firewall (WAF) included",
            en: "Web Application Firewall (WAF) included",
          },
          {
            id: "Staging environment untuk testing & preview",
            en: "Staging environment for testing & preview",
          },
        ],
      },
      {
        title: { id: "Launch & Support", en: "Launch & Support" },
        items: [
          {
            id: "30 hari free maintenance post-launch",
            en: "30-day free post-launch maintenance",
          },
          {
            id: "Bug fix priority response < 24 jam",
            en: "Bug fix priority response < 24 hours",
          },
          {
            id: "Performance & uptime monitoring real-time",
            en: "Real-time performance & uptime monitoring",
          },
          {
            id: "Monthly analytics report (traffic, conversion, top pages)",
            en: "Monthly analytics report (traffic, conversion, top pages)",
          },
          {
            id: "Training admin panel + video walkthrough (jika menggunakan CMS)",
            en: "Admin panel training + video walkthrough (if CMS-based)",
          },
          {
            id: "Dokumentasi lengkap (tech stack + content management guide)",
            en: "Full documentation (tech stack + content management guide)",
          },
          {
            id: "Migration assistance dari hosting / platform sebelumnya",
            en: "Migration assistance from previous hosting / platform",
          },
          {
            id: "SEO audit & rekomendasi optimasi (1x setelah launch)",
            en: "SEO audit & optimization recommendations (1x post-launch)",
          },
          {
            id: "Quarterly performance review meeting",
            en: "Quarterly performance review meeting",
          },
          {
            id: "Priority access ke senior developer untuk eskalasi urgent",
            en: "Priority access to senior developer for urgent escalations",
          },
        ],
      },
    ],
    whyUs: [
      {
        title: {
          id: "Bukan template, custom dari nol",
          en: "Not templates — custom from scratch",
        },
        desc: {
          id: "Setiap website kami design dari awal, mengikuti brand dan funnel bisnis Anda. Bukan WordPress theme yang sama dengan ribuan website lain di Indonesia. Anda berinvestasi pada hasil yang benar-benar unik dan sesuai positioning bisnis Anda.",
          en: "Every website is designed from scratch, following your brand and business funnel. Not a WordPress theme reused by thousands of other sites. You invest in something genuinely unique that matches your business positioning.",
        },
        stat: "0% template",
      },
      {
        title: {
          id: "PageSpeed 95+ guaranteed",
          en: "Guaranteed PageSpeed 95+",
        },
        desc: {
          id: "Jika saat launch website Anda tidak mencapai skor 95+ di Google PageSpeed Insights, kami refund full project fee. Kami mengoptimasi hingga benar-benar cepat — bukan sekadar janji marketing.",
          en: "If your site doesn't hit 95+ on Google PageSpeed Insights at launch, we refund the full project fee. Optimized until genuinely fast — not just a marketing promise.",
        },
        stat: "95+ score",
      },
      {
        title: {
          id: "Tim in-house, bukan freelancer outsource",
          en: "In-house team, not outsourced freelancers",
        },
        desc: {
          id: "Project Anda dikerjakan langsung oleh developer senior di Jakarta. Tidak dilempar ke freelancer marketplace atau di-outsource ke negara dengan zona waktu berbeda yang memperlambat komunikasi.",
          en: "Your project is owned directly by senior developers in Jakarta. Not handed to random marketplace freelancers or outsourced to oddly-timezoned countries that slow down communication.",
        },
        stat: "100% in-house",
      },
      {
        title: {
          id: "Support yang benar-benar responsif",
          en: "Genuinely responsive support",
        },
        desc: {
          id: "Launch bukan akhir dari hubungan kerja sama. Kami follow-up di hari ke-7, 14, dan 30 setelah launch, serta menangani bug fix dalam 24 jam selama warranty period. Komunikasi langsung dengan project lead melalui WhatsApp, bukan customer service generik.",
          en: "Launch isn't the end of the relationship. We follow up at days 7, 14, and 30 + handle bug fixes within 24 hours during warranty. Direct WhatsApp to the project lead — not a generic customer service rep.",
        },
        stat: "<24h response",
      },
      {
        title: {
          id: "Portfolio teruji 500+ project lintas industri",
          en: "Track record of 500+ projects across industries",
        },
        desc: {
          id: "Kami sudah mengerjakan website untuk klien dari startup early-stage hingga korporasi tier-1, di 8+ industri spesialisasi: fashion, finance, properti, F&B, kesehatan, edukasi, otomotif, dan B2B. Pengalaman lintas-industri yang sulit didapatkan dari agency lain.",
          en: "We've delivered websites for clients ranging from early-stage startups to tier-1 corporations across 8+ specialized industries: fashion, finance, real estate, F&B, healthcare, education, automotive, and B2B. Cross-industry experience that's hard to find elsewhere.",
        },
        stat: "8+ industri",
      },
      {
        title: {
          id: "ROI-focused, bukan vanity metrics",
          en: "ROI-focused, not vanity metrics",
        },
        desc: {
          id: "Setiap keputusan design dan teknis kami arahkan ke metrik yang berdampak pada bisnis Anda: conversion rate, qualified leads, dan revenue. Bukan sekadar website yang terlihat keren tetapi tidak menghasilkan apa-apa secara komersial.",
          en: "Every design and technical decision is directed toward metrics that impact your business: conversion rate, qualified leads, and revenue. Not just a website that looks impressive but doesn't deliver commercial results.",
        },
        stat: "data-driven",
      },
    ],
    process: [
      {
        step: "01",
        title: { id: "Discovery & Brief", en: "Discovery & Brief" },
        desc: {
          id: "Kickoff meeting untuk memahami secara mendalam bisnis Anda, target audience, sasaran kuantitatif, dan referensi visual. Output: brief yang sudah di-approve serta wireframe awal yang disepakati bersama.",
          en: "Kickoff meeting to deeply understand your business, target audience, quantitative goals, and visual references. Output: approved brief + agreed-upon initial wireframes.",
        },
        duration: { id: "Hari 1-3", en: "Day 1-3" },
      },
      {
        step: "02",
        title: { id: "Design Sprint", en: "Design Sprint" },
        desc: {
          id: "Full UI design di Figma dengan 2-3 round revisi major hingga pixel-perfect. Anda mendapatkan interactive prototype yang dapat di-klik di browser sebelum development dimulai.",
          en: "Full UI design in Figma, 2-3 rounds of major revisions until pixel-perfect. You get a clickable interactive prototype in the browser before development starts.",
        },
        duration: { id: "Minggu 1-2", en: "Week 1-2" },
      },
      {
        step: "03",
        title: { id: "Development", en: "Development" },
        desc: {
          id: "Front-end build sesuai design final, integrasi ke CMS / payment gateway / API yang dibutuhkan. Internal QA dan performance test menyeluruh sebelum hand-off ke klien.",
          en: "Front-end build per the final design, integration with CMS / payment gateway / required APIs. Internal QA + performance test before client handoff.",
        },
        duration: { id: "Minggu 2-5", en: "Week 2-5" },
      },
      {
        step: "04",
        title: { id: "UAT & Launch Prep", en: "UAT & Launch Prep" },
        desc: {
          id: "User Acceptance Testing bersama tim Anda, content migration, SEO setup (sitemap, schema, 301 redirect jika migrasi), serta konfigurasi domain dan DNS.",
          en: "User Acceptance Testing with your team, content migration, SEO setup (sitemap, schema, 301 redirects for migration), and domain & DNS configuration.",
        },
        duration: { id: "Minggu 5-6", en: "Week 5-6" },
      },
      {
        step: "05",
        title: { id: "Launch & Handover", en: "Launch & Handover" },
        desc: {
          id: "Go-live monitoring intensif selama 72 jam, training admin panel jika menggunakan CMS, kemudian masuk ke 30 hari free maintenance period dengan response time kurang dari 24 jam.",
          en: "Intensive 72-hour go-live monitoring, admin panel training if CMS-based, then entry into the 30-day free maintenance period with < 24-hour response time.",
        },
        duration: { id: "Minggu 6+", en: "Week 6+" },
      },
    ],
    faqs: [
      {
        q: {
          id: "Berapa lama waktu pengerjaan website?",
          en: "How long does a website project take?",
        },
        a: {
          id: "Tergantung scope: Starter (landing page / small site) 3-4 minggu, Business (company profile / e-commerce custom) 6-8 minggu, Premium (custom web app / marketplace) 10-16 minggu. Timeline pasti akan kami berikan setelah brief disepakati.",
          en: "Depends on scope: Starter (landing page / small site) 3-4 weeks, Business (custom company profile / e-commerce) 6-8 weeks, Premium (custom web app / marketplace) 10-16 weeks. Exact timeline after brief approval.",
        },
      },
      {
        q: {
          id: "Tech stack apa yang digunakan? Bisa request platform tertentu?",
          en: "What's the tech stack? Can I request a specific platform?",
        },
        a: {
          id: "Default kami menggunakan Next.js + React karena tercepat dan paling SEO-friendly. Namun kami juga mendukung Shopify (untuk e-commerce native), WordPress (jika tim Anda membutuhkan CMS familiar), atau Webflow (untuk site visual-heavy). Mari diskusikan di tahap brief.",
          en: "We default to Next.js + React for max speed & SEO-friendliness. But we also support Shopify (for native e-commerce), WordPress (if your team needs a familiar CMS), or Webflow (for visual-heavy sites). Let's discuss at brief stage.",
        },
      },
      {
        q: {
          id: "Apakah hosting dan domain termasuk dalam paket?",
          en: "Are hosting and domain included?",
        },
        a: {
          id: "Hosting termasuk untuk 1 tahun pertama (Vercel atau Cloudflare edge). Untuk domain custom (.com / .id), kami sarankan Anda membeli sendiri agar ownership sepenuhnya di tangan Anda — kami yang membantu setup DNS dan SSL.",
          en: "Hosting is included for the first year (Vercel or Cloudflare edge). For custom domains (.com / .id), we recommend you purchase them directly so ownership stays fully with you — we handle DNS & SSL setup.",
        },
      },
      {
        q: {
          id: "Apakah website lama bisa dimigrasi?",
          en: "Can my existing website be migrated?",
        },
        a: {
          id: "Tentu bisa. Tim kami terbiasa menangani migrasi dari WordPress, Wix, Shopify, custom code, dan lainnya. Termasuk content migration, SEO 301 redirect mapping, dan zero-downtime cutover agar traffic dan ranking SEO tidak hilang.",
          en: "Absolutely. Our team regularly handles migrations from WordPress, Wix, Shopify, custom code, etc. Includes content migration, 301 SEO redirect mapping, and zero-downtime cutover so traffic & rankings don't drop.",
        },
      },
      {
        q: {
          id: "Bagaimana sistem revisinya?",
          en: "How does the revision system work?",
        },
        a: {
          id: "2-3 round revisi major termasuk di setiap fase (wireframe, design, development). Revisi minor unlimited hingga launch. Setelah launch, masuk ke 30 hari free maintenance window untuk bug fix dan tweak kecil.",
          en: "2-3 major revision rounds included at each phase (wireframe, design, dev). Minor revisions unlimited until launch. After launch, enters the 30-day free maintenance window for bug fixes + small tweaks.",
        },
      },
      {
        q: {
          id: "Apakah website bisa diedit sendiri setelah launch?",
          en: "Can I edit the website myself after launch?",
        },
        a: {
          id: "Tentu. Untuk konten yang sering diperbarui (blog, produk, landing page baru), kami akan setup CMS modern (Sanity, Strapi, atau Tina). Training admin panel dan dokumentasi termasuk dalam handover.",
          en: "Yes. For frequently-updated content (blog, products, new landing pages), we set up a modern CMS (Sanity, Strapi, or Tina). Admin panel training + documentation included in handover.",
        },
      },
      {
        q: {
          id: "Bagaimana jika terjadi bug setelah launch?",
          en: "What if there are bugs after launch?",
        },
        a: {
          id: "30 hari pertama: bug fix gratis dengan response time kurang dari 24 jam. Setelah itu, tersedia opsi monthly maintenance contract (sesuai scope) atau pay-per-fix jika bug bersifat occasional.",
          en: "First 30 days: free bug fixes, < 24-hour response time. After that, optional monthly maintenance contract (scope-based) or pay-per-fix for occasional bugs.",
        },
      },
      {
        q: {
          id: "Bagaimana sistem pembayaran?",
          en: "What's the payment structure?",
        },
        a: {
          id: "Umumnya 50% DP di awal kickoff dan 50% di pre-launch milestone. Untuk project skala besar, pembayaran dapat dipecah menjadi 3-4 milestone sesuai progress (discovery / design / development / launch). Detail akan dikonfirmasi pada tahap final scoping.",
          en: "Typically 50% DP at kickoff + 50% at the pre-launch milestone. For larger projects, payment can be split into 3-4 milestones based on progress (discovery / design / dev / launch). Details confirmed during final scoping.",
        },
      },
    ],
  },
  {
    id: "suhu-app",
    name: "Suhu App",
    slug: "/services/suhu-app",
    icon: "Smartphone",
    tagline: {
      id: "Aplikasi mobile yang membuat user kembali.",
      en: "Mobile apps that bring users back.",
    },
    description: {
      id: "iOS, Android, atau cross-platform. Marketplace, booking, member app, on-demand — kami yang bangun.",
      en: "iOS, Android, or cross-platform. Marketplace, booking, member apps, on-demand — we build it.",
    },
    hero: {
      title: { id: "Aplikasi mobile yang", en: "Mobile apps that are" },
      titleHighlight: {
        id: "addictive, bukan annoying.",
        en: "addictive, not annoying.",
      },
      subtitle: {
        id: "Bangun app yang memahami UX modern, performa smooth, dan strategi retention yang bener. Bukan hanya launch terus ditinggalkan.",
        en: "Build apps that understand modern UX, perform smoothly, and have proper retention strategy — not just launch-and-leave.",
      },
    },
    features: [
      { id: "iOS native (Swift)", en: "iOS native (Swift)" },
      { id: "Android native (Kotlin)", en: "Android native (Kotlin)" },
      {
        id: "Cross-platform (React Native)",
        en: "Cross-platform (React Native)",
      },
      { id: "Progressive Web App (PWA)", en: "Progressive Web App (PWA)" },
      { id: "Backend integration", en: "Backend integration" },
      { id: "Push notification setup", en: "Push notification setup" },
      { id: "Analytics & funnel tracking", en: "Analytics & funnel tracking" },
      {
        id: "App Store + Play Store submission",
        en: "App Store + Play Store submission",
      },
    ],
    tiers: [
      {
        name: { id: "Lite (PWA)", en: "Lite (PWA)" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Web-based app yang feel native",
          en: "Web-based app with native feel",
        },
      },
      {
        name: { id: "Standard", en: "Standard" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "React Native cross-platform, 5-10 feature",
          en: "React Native cross-platform, 5-10 features",
        },
      },
      {
        name: { id: "Premium", en: "Premium" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Native iOS + Android dengan backend lengkap",
          en: "Native iOS + Android with full backend",
        },
      },
    ],
  },
  {
    id: "suhu-software",
    name: "Suhu Software",
    slug: "/services/suhu-software",
    icon: "Code2",
    tagline: {
      id: "Custom software yang mengotomatisasi bisnis Anda.",
      en: "Custom software that automates your business.",
    },
    description: {
      id: "CRM, ERP, POS, dashboard, automation tools. Membuat operasional bisnis Anda menjadi lebih efisien dan scalable.",
      en: "CRM, ERP, POS, dashboards, automation tools. Make your operations more efficient and scalable.",
    },
    hero: {
      title: { id: "Custom software yang", en: "Custom software that" },
      titleHighlight: {
        id: "kerja, bukan ribetin.",
        en: "works — doesn't complicate.",
      },
      subtitle: {
        id: "Bisnis Anda punya workflow unik yang tidak match dengan SaaS off-the-shelf? Kami bangun software custom yang fit 100% sama operasional Anda.",
        en: "Your business has unique workflows that don't fit off-the-shelf SaaS? We build custom software that fits your operations 100%.",
      },
    },
    features: [
      { id: "Custom CRM", en: "Custom CRM" },
      {
        id: "ERP (inventory, finance, HR)",
        en: "ERP (inventory, finance, HR)",
      },
      { id: "POS system", en: "POS system" },
      { id: "Admin dashboard & analytics", en: "Admin dashboard & analytics" },
      { id: "Automation workflow", en: "Workflow automation" },
      { id: "API integration", en: "API integration" },
      {
        id: "User role & permission management",
        en: "User role & permission management",
      },
      { id: "Training & documentation", en: "Training & documentation" },
    ],
    tiers: [
      {
        name: { id: "Starter", en: "Starter" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: { id: "1-3 modul sederhana", en: "1-3 simple modules" },
      },
      {
        name: { id: "Business", en: "Business" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "5-10 modul dengan custom workflow",
          en: "5-10 modules with custom workflow",
        },
      },
      {
        name: { id: "Enterprise", en: "Enterprise" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Full custom system + integration kompleks",
          en: "Full custom system + complex integrations",
        },
      },
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
      id: "Riset keyword, on-page, off-page, technical SEO. Bisnis Anda muncul di pencarian yang relevan dan mengalirkan leads.",
      en: "Keyword research, on-page, off-page, technical SEO. Show up in relevant searches and turn them into leads.",
    },
    hero: {
      title: { id: "Halaman 1 Google,", en: "Page 1 of Google —" },
      titleHighlight: {
        id: "tanpa janji manis.",
        en: "without empty promises.",
      },
      subtitle: {
        id: "SEO bukan magic, tetapi sistem. Kami pakai approach data-driven: riset, eksekusi, measure, repeat. Hasil mulai keliatan dalam 3-6 bulan.",
        en: "SEO isn't magic — it's a system. Data-driven approach: research, execute, measure, repeat. Results visible in 3-6 months.",
      },
    },
    features: [
      {
        id: "Keyword research (high-intent)",
        en: "Keyword research (high-intent)",
      },
      { id: "On-page SEO optimization", en: "On-page SEO optimization" },
      { id: "Technical SEO audit & fix", en: "Technical SEO audit & fix" },
      { id: "Content strategy & writing", en: "Content strategy & writing" },
      {
        id: "Backlink building (white-hat)",
        en: "White-hat backlink building",
      },
      { id: "Local SEO (Google Business)", en: "Local SEO (Google Business)" },
      {
        id: "Monthly reporting & analysis",
        en: "Monthly reporting & analysis",
      },
      { id: "Competitor tracking", en: "Competitor tracking" },
    ],
    tiers: [
      {
        name: { id: "Starter", en: "Starter" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Local SEO + 5-10 keyword target",
          en: "Local SEO + 5-10 target keywords",
        },
      },
      {
        name: { id: "Business", en: "Business" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Nasional, 20-50 keyword, content marketing",
          en: "National, 20-50 keywords, content marketing",
        },
      },
      {
        name: { id: "Enterprise", en: "Enterprise" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Multi-domain, full content team, link building",
          en: "Multi-domain, full content team, link building",
        },
      },
    ],
  },
  {
    id: "suhu-ads",
    name: "Suhu Ads",
    slug: "/services/suhu-ads",
    icon: "Target",
    tagline: {
      id: "Iklan yang ROAS-nya membuat kaget.",
      en: "Ads with ROAS that'll surprise you.",
    },
    description: {
      id: "Meta Ads, Google Ads, TikTok Ads, YouTube Ads. Setiap rupiah iklan diukur, dioptimasi, di-scale.",
      en: "Meta Ads, Google Ads, TikTok Ads, YouTube Ads. Every rupiah measured, optimized, scaled.",
    },
    hero: {
      title: { id: "Setiap rupiah iklan,", en: "Every ad rupiah —" },
      titleHighlight: {
        id: "ada accountability-nya.",
        en: "fully accountable.",
      },
      subtitle: {
        id: "Bosan boring ads yang burn budget tanpa hasil? Kami kelola ads dengan strategi funnel jelas, A/B testing rutin, dan optimasi harian.",
        en: "Tired of boring ads burning budget with no results? We manage ads with clear funnel strategy, routine A/B testing, and daily optimization.",
      },
    },
    features: [
      {
        id: "Meta Ads (Facebook + Instagram)",
        en: "Meta Ads (Facebook + Instagram)",
      },
      {
        id: "Google Ads (Search, Display, Shopping)",
        en: "Google Ads (Search, Display, Shopping)",
      },
      { id: "TikTok Ads", en: "TikTok Ads" },
      { id: "YouTube Ads", en: "YouTube Ads" },
      { id: "LinkedIn Ads (B2B)", en: "LinkedIn Ads (B2B)" },
      { id: "Creative production untuk ads", en: "Ad creative production" },
      {
        id: "Funnel strategy & audience research",
        en: "Funnel strategy & audience research",
      },
      {
        id: "Daily monitoring & weekly reporting",
        en: "Daily monitoring & weekly reporting",
      },
    ],
    tiers: [
      {
        name: { id: "Starter", en: "Starter" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Ad spend < Rp 30jt/bulan, 1-2 platform",
          en: "Ad spend < Rp 30M/month, 1-2 platforms",
        },
      },
      {
        name: { id: "Business", en: "Business" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Ad spend Rp 30-100jt/bulan, multi-platform",
          en: "Ad spend Rp 30-100M/month, multi-platform",
        },
      },
      {
        name: { id: "Enterprise", en: "Enterprise" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Ad spend Rp 100jt+/bulan, full-funnel",
          en: "Ad spend Rp 100M+/month, full-funnel",
        },
      },
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
      id: "Content planning, posting, community management, influencer collab. Brand Anda jadi top-of-mind di socmed.",
      en: "Content planning, posting, community management, influencer collab. Your brand becomes top-of-mind on social.",
    },
    hero: {
      title: { id: "Akun socmed yang", en: "Social accounts with" },
      titleHighlight: { id: "punya audience loyal.", en: "loyal audiences." },
      subtitle: {
        id: "Bukan hanya posting harian. Kami bangun audience engaged dengan konten yang resonate, dan brand presence yang konsisten.",
        en: "Not just daily posting. We build engaged audiences with content that resonates, and consistent brand presence.",
      },
    },
    features: [
      { id: "Content strategy & calendar", en: "Content strategy & calendar" },
      { id: "Daily/weekly posting", en: "Daily/weekly posting" },
      { id: "Community management", en: "Community management" },
      { id: "Reels & TikTok production", en: "Reels & TikTok production" },
      {
        id: "Influencer outreach & management",
        en: "Influencer outreach & management",
      },
      { id: "Engagement tracking", en: "Engagement tracking" },
      { id: "Monthly analytics report", en: "Monthly analytics report" },
      {
        id: "Platform: IG, TikTok, FB, LinkedIn, X",
        en: "Platforms: IG, TikTok, FB, LinkedIn, X",
      },
    ],
    tiers: [
      {
        name: { id: "Starter", en: "Starter" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "1-2 platform, 3-5 posts/minggu",
          en: "1-2 platforms, 3-5 posts/week",
        },
      },
      {
        name: { id: "Business", en: "Business" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Multi-platform, daily posting, video content",
          en: "Multi-platform, daily posting, video content",
        },
      },
      {
        name: { id: "Premium", en: "Premium" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Full team, influencer mgmt, content shoot",
          en: "Full team, influencer management, content shoots",
        },
      },
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
      id: "Full-funnel strategy: awareness, leads, conversion, retention. Cocok untuk bisnis yang mau scaling serius.",
      en: "Full-funnel strategy: awareness, leads, conversion, retention. Perfect for businesses ready to scale seriously.",
    },
    hero: {
      title: { id: "Strategi full-funnel,", en: "Full-funnel strategy —" },
      titleHighlight: {
        id: "satu pintu, hasil maksimal.",
        en: "one door, maximum results.",
      },
      subtitle: {
        id: "Daripada menangani vendor terpisah untuk SEO, ads, content, dan socmed — kami jadi partner strategis Anda yang memahami semua layer marketing.",
        en: "Instead of juggling separate vendors for SEO, ads, content, and social — we become your strategic partner who understands every marketing layer.",
      },
    },
    features: [
      { id: "Marketing audit & strategy", en: "Marketing audit & strategy" },
      { id: "Customer journey mapping", en: "Customer journey mapping" },
      {
        id: "Full-funnel campaign execution",
        en: "Full-funnel campaign execution",
      },
      {
        id: "CRM & marketing automation setup",
        en: "CRM & marketing automation setup",
      },
      {
        id: "Brand positioning & messaging",
        en: "Brand positioning & messaging",
      },
      {
        id: "Analytics & attribution modeling",
        en: "Analytics & attribution modeling",
      },
      { id: "Monthly strategic review", en: "Monthly strategic review" },
      { id: "Dedicated account manager", en: "Dedicated account manager" },
    ],
    tiers: [
      {
        name: { id: "Growth", en: "Growth" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Bisnis yang mau scaling 2-5x dalam 12 bulan",
          en: "Businesses targeting 2-5x scale in 12 months",
        },
      },
      {
        name: { id: "Scale", en: "Scale" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Brand established, mau go nasional",
          en: "Established brands going national",
        },
      },
      {
        name: { id: "Enterprise", en: "Enterprise" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Multi-brand, multi-region operations",
          en: "Multi-brand, multi-region operations",
        },
      },
    ],
  },
  {
    id: "suhu-creative",
    name: "Suhu Creative",
    slug: "/services/suhu-creative",
    icon: "Palette",
    tagline: {
      id: "Visual yang menghentikan scroll, mengunci perhatian.",
      en: "Visuals that stop the scroll and lock attention.",
    },
    description: {
      id: "Branding, logo, design konten, video production, photography. Visual yang jadi identitas bisnis Anda.",
      en: "Branding, logo, content design, video production, photography. Visuals that become your business identity.",
    },
    hero: {
      title: { id: "Visual yang membuat", en: "Visuals that make" },
      titleHighlight: {
        id: "brand Anda recognizable.",
        en: "your brand recognizable.",
      },
      subtitle: {
        id: "Bukan hanya design cantik. Kami membuat visual identity yang konsisten across channel, dan membantu brand Anda stand out di market yang noise.",
        en: "Not just pretty design. We build visual identity that's consistent across channels, helping your brand stand out in a noisy market.",
      },
    },
    features: [
      {
        id: "Brand identity (logo + guideline)",
        en: "Brand identity (logo + guidelines)",
      },
      {
        id: "Content design (IG feed, story, reels)",
        en: "Content design (IG feed, story, reels)",
      },
      { id: "Video production & editing", en: "Video production & editing" },
      { id: "Product photography", en: "Product photography" },
      { id: "Motion graphics & animation", en: "Motion graphics & animation" },
      { id: "Packaging design", en: "Packaging design" },
      {
        id: "Pitch deck & presentation design",
        en: "Pitch deck & presentation design",
      },
      {
        id: "Print collateral (brosur, kartu nama, dll)",
        en: "Print collateral (brochures, business cards, etc.)",
      },
    ],
    tiers: [
      {
        name: { id: "Starter", en: "Starter" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Logo + brand guideline basic",
          en: "Basic logo + brand guidelines",
        },
      },
      {
        name: { id: "Brand Package", en: "Brand Package" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Full branding + content templates",
          en: "Full branding + content templates",
        },
      },
      {
        name: { id: "Premium", en: "Premium" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Full visual identity + content production",
          en: "Full visual identity + content production",
        },
      },
    ],
  },
  {
    id: "suhu-ai",
    name: "Suhu AI",
    slug: "/services/suhu-ai",
    icon: "Sparkles",
    tagline: {
      id: "AI yang memperkuat bisnis Anda, bukan menggantikan.",
      en: "AI that leverages your business — not replaces it.",
    },
    description: {
      id: "AI chatbot, automation, content AI, custom GPT, AI tools integration. Buat tim Anda bekerja seperti punya 10x karyawan.",
      en: "AI chatbots, automation, content AI, custom GPTs, AI tool integration. Make your team work like it has 10x the people.",
    },
    hero: {
      title: { id: "Integrasi AI yang", en: "AI integrations that are" },
      titleHighlight: { id: "actually berguna.", en: "actually useful." },
      subtitle: {
        id: "Banyak yang berbicara AI, sedikit yang memahami cara implement-nya. Kami bantu bisnis Anda adopt AI dengan use case yang real & ROI yang ke-measure.",
        en: "Many talk AI, few know how to implement it. We help your business adopt AI with real use cases and measurable ROI.",
      },
    },
    features: [
      {
        id: "AI chatbot (customer service, sales)",
        en: "AI chatbot (customer service, sales)",
      },
      {
        id: "Custom GPT untuk internal team",
        en: "Custom GPT for internal teams",
      },
      {
        id: "Content automation (blog, social, email)",
        en: "Content automation (blog, social, email)",
      },
      { id: "AI-powered analytics", en: "AI-powered analytics" },
      {
        id: "Workflow automation (n8n, Make, Zapier)",
        en: "Workflow automation (n8n, Make, Zapier)",
      },
      {
        id: "AI integration ke existing tools",
        en: "AI integration with existing tools",
      },
      {
        id: "Training & change management",
        en: "Training & change management",
      },
      { id: "Monthly optimization", en: "Monthly optimization" },
    ],
    tiers: [
      {
        name: { id: "Pilot", en: "Pilot" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "1 use case (chatbot atau automation)",
          en: "1 use case (chatbot or automation)",
        },
      },
      {
        name: { id: "Implementation", en: "Implementation" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "3-5 AI use case + training tim",
          en: "3-5 AI use cases + team training",
        },
      },
      {
        name: { id: "Transformation", en: "Transformation" },
        price: { id: "Hubungi Kami", en: "Get a Quote" },
        for: {
          id: "Full AI integration across departments",
          en: "Full AI integration across departments",
        },
      },
    ],
  },
] as const;

export const NICHES = [
  {
    slug: "properti",
    name: { id: "Properti", en: "Property" },
    icon: "Building2",
  },
  {
    slug: "klinik",
    name: { id: "Klinik & Kesehatan", en: "Clinics & Healthcare" },
    icon: "Stethoscope",
  },
  {
    slug: "travel",
    name: { id: "Travel & Wisata", en: "Travel & Tourism" },
    icon: "Plane",
  },
  { slug: "otomotif", name: { id: "Otomotif", en: "Automotive" }, icon: "Car" },
  {
    slug: "game-online",
    name: { id: "Game Online", en: "Online Gaming" },
    icon: "Gamepad2",
  },
  {
    slug: "edukasi",
    name: { id: "Edukasi", en: "Education" },
    icon: "GraduationCap",
  },
  { slug: "finance", name: { id: "Finance", en: "Finance" }, icon: "Banknote" },
  {
    slug: "restoran",
    name: { id: "Restoran & F&B", en: "Restaurants & F&B" },
    icon: "UtensilsCrossed",
  },
] as const;

export const STATS = [
  {
    value: "1.000+",
    label: { id: "Klien di Seluruh Indonesia", en: "Clients Across Indonesia" },
  },
  { value: "9", label: { id: "Layanan Suhu", en: "Suhu Services" } },
  {
    value: "8",
    label: { id: "Industri Spesialisasi", en: "Industry Specialties" },
  },
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
  whatsapp: "+628214982408",
  whatsappDisplay: "+62 821-4982-408",
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
