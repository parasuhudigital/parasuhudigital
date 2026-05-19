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
    stats: [
      {
        value: "50+",
        label: { id: "Aplikasi diluncurkan", en: "Apps launched" },
      },
      {
        value: "4.6★",
        label: { id: "Rating rata-rata di store", en: "Avg store rating" },
      },
      {
        value: "<2.5s",
        label: { id: "Cold start time", en: "Cold start time" },
      },
      {
        value: "99.5%",
        label: { id: "Crash-free session rate", en: "Crash-free session rate" },
      },
    ],
    deliverables: [
      {
        title: { id: "UI/UX & Design", en: "UI/UX & Design" },
        items: [
          {
            id: "Custom UI design sesuai Apple HIG dan Material Design",
            en: "Custom UI design per Apple HIG and Material Design",
          },
          {
            id: "User flow & wireframe untuk seluruh fitur aplikasi",
            en: "User flow & wireframes for every app feature",
          },
          {
            id: "Interactive prototype untuk testing ke target user",
            en: "Interactive prototype for target-user testing",
          },
          {
            id: "Animation & micro-interaction untuk feel native",
            en: "Animations & micro-interactions for native feel",
          },
          {
            id: "Onboarding flow yang dirancang untuk reduce churn",
            en: "Onboarding flow designed to reduce churn",
          },
          {
            id: "Tablet & landscape mode support penuh",
            en: "Full tablet & landscape mode support",
          },
          {
            id: "Accessibility (VoiceOver, TalkBack) compliance",
            en: "Accessibility (VoiceOver, TalkBack) compliance",
          },
          {
            id: "Dark mode support full implementation",
            en: "Full dark mode implementation",
          },
          {
            id: "Localization ready (ID/EN minimum)",
            en: "Localization ready (ID/EN minimum)",
          },
          {
            id: "Design system & component library untuk konsistensi",
            en: "Design system & component library for consistency",
          },
        ],
      },
      {
        title: { id: "Native Development", en: "Native Development" },
        items: [
          {
            id: "iOS native (Swift + SwiftUI) atau React Native",
            en: "iOS native (Swift + SwiftUI) or React Native",
          },
          {
            id: "Android native (Kotlin + Jetpack Compose) atau React Native",
            en: "Android native (Kotlin + Jetpack Compose) or React Native",
          },
          {
            id: "Code splitting untuk ukuran aplikasi tetap < 50 MB",
            en: "Code splitting to keep app size < 50 MB",
          },
          {
            id: "Offline-first architecture dengan local caching",
            en: "Offline-first architecture with local caching",
          },
          {
            id: "Biometric authentication (Face ID, Touch ID, Fingerprint)",
            en: "Biometric authentication (Face ID, Touch ID, Fingerprint)",
          },
          {
            id: "Push notification (FCM + APNs) setup lengkap",
            en: "Push notification (FCM + APNs) full setup",
          },
          {
            id: "Deep linking & universal link configuration",
            en: "Deep linking & universal link configuration",
          },
          {
            id: "In-app purchase / subscription integration",
            en: "In-app purchase / subscription integration",
          },
          {
            id: "Permission handling (camera, GPS, contacts, photo library)",
            en: "Permission handling (camera, GPS, contacts, photo library)",
          },
          {
            id: "Analytics & crash reporting (Firebase, Sentry)",
            en: "Analytics & crash reporting (Firebase, Sentry)",
          },
        ],
      },
      {
        title: { id: "Backend & Integration", en: "Backend & Integration" },
        items: [
          {
            id: "REST API atau GraphQL backend (Node.js / NestJS)",
            en: "REST API or GraphQL backend (Node.js / NestJS)",
          },
          {
            id: "Database design (PostgreSQL, MongoDB sesuai kebutuhan)",
            en: "Database design (PostgreSQL, MongoDB per requirements)",
          },
          {
            id: "Authentication & authorization (JWT, OAuth, social login)",
            en: "Authentication & authorization (JWT, OAuth, social login)",
          },
          {
            id: "Real-time features (WebSocket, Firebase Realtime)",
            en: "Real-time features (WebSocket, Firebase Realtime)",
          },
          {
            id: "Payment gateway integration (Xendit, Midtrans, Stripe)",
            en: "Payment gateway integration (Xendit, Midtrans, Stripe)",
          },
          {
            id: "Cloud storage (S3, Cloudinary) untuk media handling",
            en: "Cloud storage (S3, Cloudinary) for media handling",
          },
          {
            id: "Email & SMS service integration",
            en: "Email & SMS service integration",
          },
          {
            id: "Third-party API integration (Maps, payment, social, dll.)",
            en: "Third-party API integration (Maps, payment, social, etc.)",
          },
          {
            id: "Admin dashboard web untuk operasional & moderasi",
            en: "Admin dashboard for operations & moderation",
          },
          {
            id: "API documentation lengkap (Swagger / Postman collection)",
            en: "Full API documentation (Swagger / Postman collection)",
          },
        ],
      },
      {
        title: { id: "Launch & Maintenance", en: "Launch & Maintenance" },
        items: [
          {
            id: "App Store submission & approval support",
            en: "App Store submission & approval support",
          },
          {
            id: "Play Store submission & approval support",
            en: "Play Store submission & approval support",
          },
          {
            id: "App Store Optimization (judul, deskripsi, keywords, screenshots)",
            en: "App Store Optimization (title, description, keywords, screenshots)",
          },
          {
            id: "Beta testing via TestFlight & Internal Testing",
            en: "Beta testing via TestFlight & Internal Testing",
          },
          {
            id: "Phased rollout strategy untuk minimize risk",
            en: "Phased rollout strategy to minimize risk",
          },
          {
            id: "30 hari free maintenance post-launch",
            en: "30-day free post-launch maintenance",
          },
          {
            id: "Bug fix priority response < 24 jam selama warranty",
            en: "Bug fix priority response < 24 hours during warranty",
          },
          {
            id: "Performance monitoring real-time (Firebase Performance)",
            en: "Real-time performance monitoring (Firebase Performance)",
          },
          {
            id: "OS update compatibility (iOS / Android version baru)",
            en: "OS update compatibility (new iOS / Android versions)",
          },
          {
            id: "Monthly performance & crash report",
            en: "Monthly performance & crash report",
          },
        ],
      },
    ],
    whyUs: [
      {
        title: {
          id: "Native quality, cross-platform efficiency",
          en: "Native quality, cross-platform efficiency",
        },
        desc: {
          id: "Setiap project kami pilih stack terbaik per kasus — native iOS/Android untuk performa maksimum, atau React Native untuk efisiensi tanpa kompromi kualitas. Bukan pendekatan one-size-fits-all yang memaksa teknologi tertentu.",
          en: "We pick the best stack per case — native iOS/Android for maximum performance, or React Native for efficiency without quality compromise. Not a one-size-fits-all approach that forces a specific technology.",
        },
        stat: "native + RN",
      },
      {
        title: {
          id: "App Store approval rate 95%+",
          en: "App Store approval rate 95%+",
        },
        desc: {
          id: "Kami sudah submit 50+ aplikasi ke App Store dan Play Store dengan tingkat approval pertama kali di atas 95%. Jika rejected karena edge case, kami yang handle resubmission tanpa biaya tambahan.",
          en: "We've submitted 50+ apps to App Store and Play Store with first-try approval rate above 95%. If rejected due to edge cases, we handle resubmission at no additional cost.",
        },
        stat: "95% first-try",
      },
      {
        title: {
          id: "Retention-focused, bukan launch-and-leave",
          en: "Retention-focused, not launch-and-leave",
        },
        desc: {
          id: "Onboarding flow, push notification strategy, dan engagement loop kami design dari awal untuk maximize retention. Aplikasi yang sukses bukan yang banyak download, tetapi yang user-nya kembali lagi.",
          en: "Onboarding flow, push notification strategy, and engagement loops are designed from day one to maximize retention. Successful apps aren't those with many downloads — they're the ones users keep coming back to.",
        },
        stat: "retention-first",
      },
      {
        title: {
          id: "In-house developer senior, full ownership",
          en: "Senior in-house developers, full ownership",
        },
        desc: {
          id: "Project Anda dikerjakan langsung oleh native iOS/Android developer senior di Jakarta. Source code, akses Apple Developer dan Google Play Console — semuanya milik Anda sepenuhnya.",
          en: "Your project is owned directly by senior native iOS/Android developers in Jakarta. Source code, Apple Developer and Google Play Console access — all fully yours.",
        },
        stat: "100% in-house",
      },
      {
        title: {
          id: "Crash-free 99.5%+ guaranteed",
          en: "Crash-free 99.5%+ guaranteed",
        },
        desc: {
          id: "Setiap aplikasi yang kami release punya target crash-free session rate di atas 99.5%. Firebase Crashlytics dan Sentry kami pasang sejak hari pertama untuk monitoring real-time dan response cepat.",
          en: "Every app we release targets a crash-free session rate above 99.5%. Firebase Crashlytics and Sentry are installed from day one for real-time monitoring and fast response.",
        },
        stat: ">99.5% crash-free",
      },
      {
        title: {
          id: "ASO + analytics framework included",
          en: "ASO + analytics framework included",
        },
        desc: {
          id: "Bukan hanya membangun aplikasi, kami juga setup App Store Optimization, analytics funnel, dan A/B testing framework sehingga Anda dapat optimize conversion dari install hingga active user.",
          en: "Not just building the app — we also set up App Store Optimization, analytics funnels, and A/B testing frameworks so you can optimize conversion from install to active user.",
        },
        stat: "ASO included",
      },
    ],
    process: [
      {
        step: "01",
        title: { id: "Discovery & Strategy", en: "Discovery & Strategy" },
        desc: {
          id: "Workshop bersama tim Anda untuk memahami target user, business model, dan technical constraints. Output: app strategy document, user persona, dan feature prioritization (MVP vs roadmap).",
          en: "Workshop with your team to understand target users, business model, and technical constraints. Output: app strategy document, user personas, and feature prioritization (MVP vs roadmap).",
        },
        duration: { id: "Hari 1-7", en: "Day 1-7" },
      },
      {
        step: "02",
        title: { id: "Design & Prototype", en: "Design & Prototype" },
        desc: {
          id: "Full UX/UI design di Figma dengan interactive prototype yang dapat di-test ke target user sebelum development dimulai. 2-3 round revisi major hingga design final disepakati.",
          en: "Full UX/UI design in Figma with interactive prototype testable with target users before development. 2-3 rounds of major revisions until final design is agreed.",
        },
        duration: { id: "Minggu 2-4", en: "Week 2-4" },
      },
      {
        step: "03",
        title: { id: "Native Development", en: "Native Development" },
        desc: {
          id: "Build aplikasi dengan iterasi 2-mingguan. Anda mendapatkan TestFlight (iOS) atau Internal Testing (Android) build setiap sprint untuk review progress nyata, bukan hanya screenshot.",
          en: "App build with 2-week iterations. You receive TestFlight (iOS) or Internal Testing (Android) builds every sprint for real progress review — not just screenshots.",
        },
        duration: { id: "Minggu 4-12", en: "Week 4-12" },
      },
      {
        step: "04",
        title: { id: "Beta & QA", en: "Beta & QA" },
        desc: {
          id: "Closed beta testing dengan 20-50 user pilihan, performance test menyeluruh, security audit, serta persiapan submission App Store dan Play Store.",
          en: "Closed beta testing with 20-50 selected users, thorough performance testing, security audit, and App Store / Play Store submission preparation.",
        },
        duration: { id: "Minggu 12-14", en: "Week 12-14" },
      },
      {
        step: "05",
        title: { id: "Launch & Optimization", en: "Launch & Optimization" },
        desc: {
          id: "Phased rollout (10% → 50% → 100% user), real-time monitoring crash & performance, ASO optimization, dan masuk ke 30 hari free maintenance period dengan response < 24 jam.",
          en: "Phased rollout (10% → 50% → 100% users), real-time crash & performance monitoring, ASO optimization, then into the 30-day free maintenance period with < 24-hour response time.",
        },
        duration: { id: "Minggu 14+", en: "Week 14+" },
      },
    ],
    faqs: [
      {
        q: {
          id: "Lebih baik native (iOS + Android terpisah) atau cross-platform (React Native)?",
          en: "Native (separate iOS + Android) or cross-platform (React Native)?",
        },
        a: {
          id: "Tergantung use case. Untuk aplikasi dengan heavy graphics (game, AR/VR) atau native UX yang kritikal, kami sarankan native. Untuk MVP, content-heavy app, atau business app dengan timeline ketat dan budget terbatas, React Native sangat efektif (cost lebih rendah 40-60%, single codebase). Kami analisis bersama Anda di tahap discovery.",
          en: "Depends on the use case. For apps with heavy graphics (games, AR/VR) or critical native UX, we recommend native. For MVPs, content-heavy apps, or business apps with tight timelines and limited budgets, React Native is very effective (40-60% lower cost, single codebase). We'll analyze together during discovery.",
        },
      },
      {
        q: {
          id: "Berapa lama dari kickoff sampai live di App Store / Play Store?",
          en: "How long from kickoff to App Store / Play Store launch?",
        },
        a: {
          id: "Aplikasi sederhana (3-5 fitur, single platform): 8-10 minggu. Aplikasi standar (5-15 fitur, dual platform): 12-16 minggu. Aplikasi kompleks (15+ fitur, backend custom, payment integration): 16-24 minggu. Approval store biasanya menambah 3-7 hari untuk iOS, 1-3 hari untuk Android.",
          en: "Simple app (3-5 features, single platform): 8-10 weeks. Standard app (5-15 features, dual platform): 12-16 weeks. Complex app (15+ features, custom backend, payment integration): 16-24 weeks. Store approval typically adds 3-7 days for iOS, 1-3 days for Android.",
        },
      },
      {
        q: {
          id: "Bagaimana jika App Store atau Play Store reject aplikasi?",
          en: "What if App Store or Play Store rejects the app?",
        },
        a: {
          id: "Kami berpengalaman dengan guidelines kedua store, approval rate kami first-try di atas 95%. Jika terjadi rejection (biasanya karena edge case minor), kami akan handle resubmission gratis hingga approved — tidak ada biaya tambahan untuk Anda.",
          en: "We're well-versed in both stores' guidelines, with a first-try approval rate above 95%. If rejection occurs (usually minor edge cases), we handle resubmission free of charge until approved — no additional cost to you.",
        },
      },
      {
        q: {
          id: "Setelah live, bagaimana update aplikasi ke depan?",
          en: "How are updates handled after launch?",
        },
        a: {
          id: "30 hari pertama post-launch: bug fix gratis. Setelah itu, tersedia opsi monthly retainer untuk fitur baru + maintenance, atau pay-per-update model jika hanya sesekali update. OS compatibility update (iOS / Android version baru) termasuk dalam retainer.",
          en: "First 30 days post-launch: free bug fixes. After that, optional monthly retainer for new features + maintenance, or pay-per-update model for occasional changes. OS compatibility updates (new iOS / Android versions) are included in the retainer.",
        },
      },
      {
        q: {
          id: "Source code dan Apple/Google Developer account jadi milik siapa?",
          en: "Who owns the source code and Apple/Google Developer accounts?",
        },
        a: {
          id: "100% milik Anda. Source code di-handover via GitHub/GitLab repository pribadi Anda. Apple Developer Program dan Google Play Console kami sarankan didaftarkan atas nama perusahaan Anda (kami bantu setup), sehingga ownership penuh ada di tangan Anda.",
          en: "100% yours. Source code is handed over via your private GitHub/GitLab repository. Apple Developer Program and Google Play Console are recommended to be registered under your company's name (we'll help with setup) so ownership is fully with you.",
        },
      },
      {
        q: {
          id: "Apakah termasuk integrasi payment gateway?",
          en: "Is payment gateway integration included?",
        },
        a: {
          id: "Ya, kami support integrasi Xendit, Midtrans, Stripe, dan payment gateway lokal lainnya. Termasuk in-app purchase (IAP) Apple dan Google jika model bisnis Anda subscription atau digital goods. Setup webhook untuk callback dan rekonsiliasi.",
          en: "Yes, we support integration with Xendit, Midtrans, Stripe, and other local payment gateways. Includes Apple and Google in-app purchases (IAP) if your business model is subscription or digital goods. Webhook setup for callbacks and reconciliation included.",
        },
      },
      {
        q: {
          id: "Bagaimana dengan push notification dan SMS gateway?",
          en: "What about push notifications and SMS gateways?",
        },
        a: {
          id: "Push notification (Firebase Cloud Messaging untuk Android, APNs untuk iOS) include setup. SMS gateway integration (Twilio, Nexmo, atau lokal seperti SMSBlast) optional sesuai kebutuhan. WhatsApp Business API integration juga tersedia jika dibutuhkan.",
          en: "Push notifications (Firebase Cloud Messaging for Android, APNs for iOS) setup is included. SMS gateway integration (Twilio, Nexmo, or local like SMSBlast) is optional per requirement. WhatsApp Business API integration is also available if needed.",
        },
      },
      {
        q: {
          id: "Bagaimana sistem pembayaran untuk project mobile app?",
          en: "What's the payment structure for mobile app projects?",
        },
        a: {
          id: "Untuk project skala kecil-menengah: 50% DP di kickoff, 50% di pre-launch milestone. Untuk project skala besar (multi-platform + backend kompleks): 4 milestone payment — 25% kickoff, 25% post-design approval, 25% post-development, 25% post-launch. Detail dikonfirmasi di tahap scoping final.",
          en: "For small-to-medium projects: 50% DP at kickoff, 50% at pre-launch milestone. For large projects (multi-platform + complex backend): 4 milestone payments — 25% kickoff, 25% post-design approval, 25% post-development, 25% post-launch. Details confirmed during final scoping.",
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
    stats: [
      {
        value: "100+",
        label: { id: "Sistem custom dibangun", en: "Custom systems built" },
      },
      {
        value: "99.9%",
        label: { id: "Uptime SLA tersedia", en: "Uptime SLA available" },
      },
      {
        value: "100%",
        label: { id: "Ownership source code", en: "Source code ownership" },
      },
      {
        value: "8+ thn",
        label: {
          id: "Pengalaman tim engineering",
          en: "Engineering team experience",
        },
      },
    ],
    deliverables: [
      {
        title: {
          id: "Business Analysis & Architecture",
          en: "Business Analysis & Architecture",
        },
        items: [
          {
            id: "Workshop pemetaan workflow operasional Anda",
            en: "Workshop to map your operational workflows",
          },
          {
            id: "Requirement specification document yang detail",
            en: "Detailed requirement specification document",
          },
          {
            id: "Entity Relationship Diagram (ERD) database",
            en: "Database Entity Relationship Diagram (ERD)",
          },
          {
            id: "Use case diagram & user journey map",
            en: "Use case diagram & user journey map",
          },
          {
            id: "Technical architecture document",
            en: "Technical architecture document",
          },
          {
            id: "Module breakdown & feature prioritization",
            en: "Module breakdown & feature prioritization",
          },
          {
            id: "Integration mapping ke sistem eksisting",
            en: "Integration mapping with existing systems",
          },
          {
            id: "Scalability planning untuk pertumbuhan bisnis",
            en: "Scalability planning for business growth",
          },
          {
            id: "Security & compliance assessment (PDP, ISO 27001)",
            en: "Security & compliance assessment (PDP, ISO 27001)",
          },
          {
            id: "Migration plan dari sistem lama (jika ada)",
            en: "Migration plan from legacy systems (if any)",
          },
        ],
      },
      {
        title: { id: "Backend & Database", en: "Backend & Database" },
        items: [
          {
            id: "RESTful API atau GraphQL backend (Node.js, NestJS, Laravel)",
            en: "RESTful API or GraphQL backend (Node.js, NestJS, Laravel)",
          },
          {
            id: "Database design (PostgreSQL, MySQL, MongoDB sesuai kebutuhan)",
            en: "Database design (PostgreSQL, MySQL, MongoDB per requirements)",
          },
          {
            id: "Role-based access control (RBAC) multi-level",
            en: "Multi-level role-based access control (RBAC)",
          },
          {
            id: "Audit log lengkap untuk compliance dan tracking",
            en: "Comprehensive audit logs for compliance and tracking",
          },
          {
            id: "Data validation & business rules layer",
            en: "Data validation & business rules layer",
          },
          {
            id: "Background job processor (queue system) untuk task berat",
            en: "Background job processor (queue system) for heavy tasks",
          },
          {
            id: "Caching layer (Redis) untuk performa optimal",
            en: "Caching layer (Redis) for optimal performance",
          },
          {
            id: "Real-time notification (WebSocket) untuk update live",
            en: "Real-time notification (WebSocket) for live updates",
          },
          {
            id: "File storage management (S3, MinIO) terintegrasi",
            en: "Integrated file storage management (S3, MinIO)",
          },
          {
            id: "Automated database backup harian + disaster recovery",
            en: "Daily automated database backup + disaster recovery",
          },
        ],
      },
      {
        title: { id: "Frontend & Integrations", en: "Frontend & Integrations" },
        items: [
          {
            id: "Web admin dashboard responsive (React, Next.js)",
            en: "Responsive web admin dashboard (React, Next.js)",
          },
          {
            id: "Mobile companion app (jika dibutuhkan)",
            en: "Mobile companion app (if needed)",
          },
          {
            id: "Custom reporting & analytics dashboard",
            en: "Custom reporting & analytics dashboard",
          },
          {
            id: "Export data ke Excel, PDF, CSV",
            en: "Data export to Excel, PDF, CSV",
          },
          {
            id: "Integrasi accounting (Mekari Jurnal, Accurate, Xero)",
            en: "Accounting integration (Mekari Jurnal, Accurate, Xero)",
          },
          {
            id: "Integrasi payment gateway (Xendit, Midtrans, Stripe)",
            en: "Payment gateway integration (Xendit, Midtrans, Stripe)",
          },
          {
            id: "Integrasi e-commerce (Shopify, WooCommerce, Tokopedia)",
            en: "E-commerce integration (Shopify, WooCommerce, Tokopedia)",
          },
          {
            id: "Integrasi WhatsApp Business API & email service",
            en: "WhatsApp Business API & email service integration",
          },
          {
            id: "Single Sign-On (SSO) jika Anda pakai Google Workspace / Microsoft 365",
            en: "Single Sign-On (SSO) for Google Workspace / Microsoft 365",
          },
          {
            id: "Webhook & API endpoint untuk integrasi pihak ketiga",
            en: "Webhooks & API endpoints for third-party integrations",
          },
        ],
      },
      {
        title: { id: "Deployment & Support", en: "Deployment & Support" },
        items: [
          {
            id: "Deployment ke cloud (AWS, GCP, Azure) atau on-premise",
            en: "Cloud deployment (AWS, GCP, Azure) or on-premise",
          },
          {
            id: "Setup CI/CD pipeline untuk update tanpa downtime",
            en: "CI/CD pipeline setup for zero-downtime updates",
          },
          {
            id: "SSL & domain configuration",
            en: "SSL & domain configuration",
          },
          {
            id: "Monitoring 24/7 (uptime, performance, error tracking)",
            en: "24/7 monitoring (uptime, performance, error tracking)",
          },
          {
            id: "Daily automated backup + restore drill quarterly",
            en: "Daily automated backups + quarterly restore drills",
          },
          {
            id: "Training admin & end user (online + dokumentasi)",
            en: "Admin & end-user training (online + documentation)",
          },
          {
            id: "User manual & video tutorial library",
            en: "User manual & video tutorial library",
          },
          {
            id: "API documentation (Swagger / Postman)",
            en: "API documentation (Swagger / Postman)",
          },
          {
            id: "Bug fix priority response < 24 jam selama warranty",
            en: "Bug fix priority response < 24 hours during warranty",
          },
          {
            id: "Optional SLA contract dengan response time terjamin",
            en: "Optional SLA contract with guaranteed response times",
          },
        ],
      },
    ],
    whyUs: [
      {
        title: {
          id: "100% source code ownership",
          en: "100% source code ownership",
        },
        desc: {
          id: "Setelah project selesai, source code, database schema, dokumentasi teknis — semuanya jadi milik Anda sepenuhnya. Tidak ada vendor lock-in, tidak ada lisensi tahunan tersembunyi.",
          en: "Once the project is complete, source code, database schema, technical documentation — all fully yours. No vendor lock-in, no hidden annual licenses.",
        },
        stat: "0% lock-in",
      },
      {
        title: {
          id: "Built per workflow Anda, bukan workflow generic",
          en: "Built per your workflow, not generic",
        },
        desc: {
          id: "Kami mulai dari business analysis mendalam — memahami workflow Anda yang spesifik, lalu membangun software yang fit 100%. Bukan modifikasi SaaS yang memaksa Anda menyesuaikan diri.",
          en: "We start with deep business analysis — understanding your specific workflows, then build software that fits 100%. Not a modified SaaS forcing you to adapt.",
        },
        stat: "100% fit",
      },
      {
        title: {
          id: "Scalability dari hari pertama",
          en: "Scalability from day one",
        },
        desc: {
          id: "Arsitektur yang kami pilih sudah memperhitungkan pertumbuhan bisnis Anda 5-10 tahun ke depan. Database design, caching strategy, dan deployment architecture siap handle skala besar tanpa rewrite.",
          en: "Our chosen architecture already accounts for 5-10 years of business growth. Database design, caching strategy, and deployment architecture are ready to handle large scale without rewrites.",
        },
        stat: "10x scalable",
      },
      {
        title: {
          id: "Integration-ready ke ekosistem Anda",
          en: "Integration-ready to your ecosystem",
        },
        desc: {
          id: "Software custom kami designed untuk terintegrasi dengan tools yang sudah Anda pakai — accounting, payment gateway, e-commerce, CRM, Google Workspace, Microsoft 365 — bukan jadi silo baru.",
          en: "Our custom software is designed to integrate with tools you already use — accounting, payment gateways, e-commerce, CRM, Google Workspace, Microsoft 365 — not to become a new silo.",
        },
        stat: "open API",
      },
      {
        title: {
          id: "Tim engineering senior, hands-on",
          en: "Senior engineering team, hands-on",
        },
        desc: {
          id: "Project Anda dikerjakan langsung oleh software engineer senior dengan 8+ tahun pengalaman. Bukan dilempar ke junior atau outsource ke negara dengan zona waktu berbeda yang memperlambat iterasi.",
          en: "Your project is owned directly by senior software engineers with 8+ years of experience. Not handed to juniors or outsourced to oddly-timezoned countries that slow iteration.",
        },
        stat: "8+ thn senior",
      },
      {
        title: {
          id: "Long-term partnership, bukan one-off project",
          en: "Long-term partnership, not one-off project",
        },
        desc: {
          id: "Software custom adalah investasi jangka panjang — kami menyediakan optional maintenance contract dengan SLA jelas, plus continuous improvement untuk evolusi fitur sesuai pertumbuhan bisnis Anda.",
          en: "Custom software is a long-term investment — we offer optional maintenance contracts with clear SLAs, plus continuous improvement for feature evolution as your business grows.",
        },
        stat: "SLA available",
      },
    ],
    process: [
      {
        step: "01",
        title: { id: "Business Analysis", en: "Business Analysis" },
        desc: {
          id: "Workshop intensif dengan stakeholder kunci untuk memetakan workflow eksisting, pain point, dan goal bisnis. Output: requirement specification, ERD database, dan use case diagram yang sudah disepakati.",
          en: "Intensive workshop with key stakeholders to map existing workflows, pain points, and business goals. Output: requirement specification, database ERD, and agreed-upon use case diagrams.",
        },
        duration: { id: "Minggu 1-2", en: "Week 1-2" },
      },
      {
        step: "02",
        title: { id: "Architecture & Design", en: "Architecture & Design" },
        desc: {
          id: "Technical architecture document, database design final, wireframe untuk seluruh modul, dan integration mapping ke sistem eksisting. Anda dapat sign-off design sebelum coding dimulai.",
          en: "Technical architecture document, finalized database design, wireframes for all modules, and integration mapping with existing systems. You sign off on the design before coding starts.",
        },
        duration: { id: "Minggu 2-4", en: "Week 2-4" },
      },
      {
        step: "03",
        title: { id: "Sprint Development", en: "Sprint Development" },
        desc: {
          id: "Build per modul dalam sprint 2-mingguan menggunakan metodologi Agile. Demo progress setiap akhir sprint, akses ke staging environment 24/7, dan iterasi berdasarkan feedback Anda.",
          en: "Build per module in 2-week Agile sprints. Progress demos at the end of each sprint, 24/7 staging environment access, and iteration based on your feedback.",
        },
        duration: { id: "Minggu 4-16", en: "Week 4-16" },
      },
      {
        step: "04",
        title: { id: "UAT & Training", en: "UAT & Training" },
        desc: {
          id: "User Acceptance Testing bersama tim operasional Anda, parallel running dengan sistem lama (jika migrasi), bug fix prioritas, dan training admin + end user dengan dokumentasi lengkap.",
          en: "User Acceptance Testing with your operational team, parallel running with the legacy system (if migrating), priority bug fixes, and admin + end-user training with comprehensive documentation.",
        },
        duration: { id: "Minggu 16-18", en: "Week 16-18" },
      },
      {
        step: "05",
        title: { id: "Deployment & Handover", en: "Deployment & Handover" },
        desc: {
          id: "Production deployment dengan zero-downtime strategy, monitoring 24/7 setup, data migration final, dan masuk ke warranty period 30-90 hari dengan response time < 24 jam.",
          en: "Production deployment with zero-downtime strategy, 24/7 monitoring setup, final data migration, and entry into a 30-90 day warranty period with < 24-hour response time.",
        },
        duration: { id: "Minggu 18+", en: "Week 18+" },
      },
    ],
    faqs: [
      {
        q: {
          id: "Build software custom vs beli SaaS off-the-shelf — mana yang tepat untuk bisnis kami?",
          en: "Custom software vs off-the-shelf SaaS — which is right for us?",
        },
        a: {
          id: "Custom software cocok jika: workflow Anda unik dan tidak ada SaaS yang fit; data sensitif dan butuh on-premise; total cost SaaS 3-5 tahun ke depan lebih mahal dari investasi custom; atau Anda butuh kompetitif advantage dari sistem operasional. SaaS cocok untuk use case standar (HRIS basic, accounting, email) di mana ekosistem matang. Kami akan analisis ROI bersama Anda di tahap discovery sebelum rekomendasi.",
          en: "Custom software fits when: your workflows are unique and no SaaS fits; data is sensitive and needs on-premise; total 3-5 year SaaS cost exceeds custom investment; or you need competitive advantage from operational systems. SaaS fits standard use cases (basic HRIS, accounting, email) with mature ecosystems. We'll analyze ROI together during discovery before recommending.",
        },
      },
      {
        q: {
          id: "Berapa lama dari kickoff sampai sistem live di operasional?",
          en: "How long from kickoff to live operational system?",
        },
        a: {
          id: "Sistem starter (1-3 modul, internal use): 8-12 minggu. Sistem business (5-10 modul, multi-user): 16-24 minggu. Sistem enterprise (custom workflow, integrasi kompleks, multi-tenant): 24-40 minggu. Kami selalu deliver per modul, jadi modul prioritas bisa live duluan sambil modul lain di-develop paralel.",
          en: "Starter system (1-3 modules, internal use): 8-12 weeks. Business system (5-10 modules, multi-user): 16-24 weeks. Enterprise system (custom workflow, complex integrations, multi-tenant): 24-40 weeks. We always deliver per module, so priority modules can go live first while others are developed in parallel.",
        },
      },
      {
        q: {
          id: "Source code dan data jadi milik siapa setelah project selesai?",
          en: "Who owns the source code and data after project completion?",
        },
        a: {
          id: "100% milik Anda sepenuhnya. Source code di-handover via private Git repository Anda dengan commit history lengkap. Database schema, dokumentasi teknis, dan semua aset project juga menjadi milik Anda. Tidak ada lisensi proprietary tersembunyi atau vendor lock-in.",
          en: "100% fully yours. Source code is handed over via your private Git repository with complete commit history. Database schema, technical documentation, and all project assets also become yours. No hidden proprietary licenses or vendor lock-in.",
        },
      },
      {
        q: {
          id: "Bisa hosting on-premise (server kantor sendiri) atau hanya cloud?",
          en: "Can it be hosted on-premise (own office server) or only cloud?",
        },
        a: {
          id: "Kedua opsi support penuh. Cloud (AWS, GCP, Azure, Alibaba Cloud) untuk skalabilitas optimal dan maintenance minimal. On-premise jika data sangat sensitif (industri keuangan, kesehatan, pemerintahan) atau ada regulasi data residency. Hybrid juga memungkinkan — data sensitif on-premise, layer aplikasi di cloud.",
          en: "Both options fully supported. Cloud (AWS, GCP, Azure, Alibaba Cloud) for optimal scalability and minimal maintenance. On-premise if data is highly sensitive (financial, healthcare, government) or there are data residency regulations. Hybrid also possible — sensitive data on-premise, application layer in cloud.",
        },
      },
      {
        q: {
          id: "Bagaimana proses migrasi data dari sistem lama?",
          en: "How does data migration from legacy systems work?",
        },
        a: {
          id: "Tim kami pengalaman migrasi dari spreadsheet, sistem legacy (FoxPro, Access, custom code), maupun SaaS lain. Proses: data audit & cleansing, mapping schema lama ke baru, script migration dengan validasi, parallel running 2-4 minggu untuk verify, lalu cutover final dengan zero data loss. Backup sistem lama selalu di-preserve sebagai fallback.",
          en: "Our team has experience migrating from spreadsheets, legacy systems (FoxPro, Access, custom code), and other SaaS. Process: data audit & cleansing, mapping old schema to new, validated migration scripts, 2-4 weeks of parallel running for verification, then final cutover with zero data loss. Legacy system backups are always preserved as fallback.",
        },
      },
      {
        q: {
          id: "Integrasi ke tools yang sudah kami pakai (Mekari, Accurate, Tokopedia, dll.) bisa?",
          en: "Can it integrate with tools we already use (Mekari, Accurate, Tokopedia, etc.)?",
        },
        a: {
          id: "Bisa. Kami sudah berpengalaman integrasi dengan accounting tools (Mekari Jurnal, Accurate, Xero, QuickBooks), payment gateway (Xendit, Midtrans, Stripe, DOKU), e-commerce (Shopify, WooCommerce, Tokopedia, Shopee), HRIS (Talenta, KaryaONE), CRM (Salesforce, HubSpot), dan productivity tools (Google Workspace, Microsoft 365). Jika tools Anda belum ada di list, kami bisa build custom integration via API mereka.",
          en: "Yes. We're experienced with integrations including accounting tools (Mekari Jurnal, Accurate, Xero, QuickBooks), payment gateways (Xendit, Midtrans, Stripe, DOKU), e-commerce (Shopify, WooCommerce, Tokopedia, Shopee), HRIS (Talenta, KaryaONE), CRM (Salesforce, HubSpot), and productivity tools (Google Workspace, Microsoft 365). If your tools aren't listed, we can build custom integrations via their APIs.",
        },
      },
      {
        q: {
          id: "Bagaimana jika butuh fitur baru setelah sistem live?",
          en: "What if we need new features after the system is live?",
        },
        a: {
          id: "Tersedia 3 model: (1) Maintenance contract bulanan dengan jam developer dedicated untuk fitur baru + bug fix, cocok untuk evolusi berkelanjutan; (2) Project-based per fitur baru jika kebutuhan sporadis; (3) In-house developer enablement — kami training tim teknis Anda untuk maintain dan develop sendiri ke depan. Anda bebas pilih sesuai strategi.",
          en: "Three models available: (1) Monthly maintenance contract with dedicated developer hours for new features + bug fixes, ideal for ongoing evolution; (2) Project-based per new feature for sporadic needs; (3) In-house developer enablement — we train your technical team to maintain and develop independently. You choose per your strategy.",
        },
      },
      {
        q: {
          id: "Bagaimana sistem pembayaran untuk project software custom?",
          en: "What's the payment structure for custom software projects?",
        },
        a: {
          id: "Pembayaran milestone-based untuk transparansi: 20% kickoff + business analysis, 20% post-design approval, 30% post-MVP delivery, 20% post-UAT, 10% post-warranty. Untuk project skala besar, milestone dapat dipecah lebih granular. Optional: maintenance contract setelah warranty dengan biaya monthly retainer sesuai SLA yang disepakati.",
          en: "Milestone-based payments for transparency: 20% kickoff + business analysis, 20% post-design approval, 30% post-MVP delivery, 20% post-UAT, 10% post-warranty. For large projects, milestones can be split more granularly. Optional: maintenance contract after warranty with monthly retainer per agreed SLA.",
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
    stats: [
      {
        value: "200+",
        label: { id: "Klien SEO aktif", en: "Active SEO clients" },
      },
      {
        value: "3.4x",
        label: { id: "Rata-rata organic growth", en: "Avg organic growth" },
      },
      {
        value: "500+",
        label: { id: "Keyword di posisi #1", en: "Keywords ranked #1" },
      },
      {
        value: "6 bulan",
        label: {
          id: "Rata-rata first results",
          en: "Avg time to first results",
        },
      },
    ],
    deliverables: [
      {
        title: { id: "Audit & Strategy", en: "Audit & Strategy" },
        items: [
          {
            id: "Technical SEO audit menyeluruh (200+ check points)",
            en: "Comprehensive technical SEO audit (200+ checkpoints)",
          },
          {
            id: "Content gap analysis vs kompetitor utama",
            en: "Content gap analysis vs top competitors",
          },
          {
            id: "Keyword research mendalam (high-intent, long-tail, branded)",
            en: "Deep keyword research (high-intent, long-tail, branded)",
          },
          {
            id: "Search intent mapping per keyword cluster",
            en: "Search intent mapping per keyword cluster",
          },
          {
            id: "Competitor backlink profile analysis",
            en: "Competitor backlink profile analysis",
          },
          {
            id: "SERP feature opportunity (featured snippet, PAA, knowledge graph)",
            en: "SERP feature opportunities (featured snippet, PAA, knowledge graph)",
          },
          {
            id: "User journey & funnel mapping per landing page",
            en: "User journey & funnel mapping per landing page",
          },
          {
            id: "12-month SEO roadmap dengan milestone bulanan",
            en: "12-month SEO roadmap with monthly milestones",
          },
          {
            id: "KPI definition (traffic, ranking, conversion, revenue)",
            en: "KPI definition (traffic, ranking, conversion, revenue)",
          },
          {
            id: "Risk assessment (algorithm update, penalty history)",
            en: "Risk assessment (algorithm updates, penalty history)",
          },
        ],
      },
      {
        title: { id: "On-Page & Technical SEO", en: "On-Page & Technical SEO" },
        items: [
          {
            id: "Title tag, meta description, H1-H6 optimization",
            en: "Title tag, meta description, H1-H6 optimization",
          },
          {
            id: "Schema markup implementation (LocalBusiness, Product, FAQ, Review)",
            en: "Schema markup implementation (LocalBusiness, Product, FAQ, Review)",
          },
          {
            id: "Internal linking strategy & implementation",
            en: "Internal linking strategy & implementation",
          },
          {
            id: "Core Web Vitals optimization (LCP, FID, CLS)",
            en: "Core Web Vitals optimization (LCP, FID, CLS)",
          },
          {
            id: "Mobile-first indexing optimization",
            en: "Mobile-first indexing optimization",
          },
          {
            id: "XML sitemap & robots.txt configuration",
            en: "XML sitemap & robots.txt configuration",
          },
          {
            id: "Canonical tag & hreflang untuk multi-language",
            en: "Canonical tags & hreflang for multi-language",
          },
          {
            id: "Image optimization (alt text, file naming, compression)",
            en: "Image optimization (alt text, file naming, compression)",
          },
          {
            id: "Redirect mapping (301) untuk URL change",
            en: "301 redirect mapping for URL changes",
          },
          {
            id: "Crawl error fixing & indexation monitoring",
            en: "Crawl error fixing & indexation monitoring",
          },
        ],
      },
      {
        title: { id: "Content & Link Building", en: "Content & Link Building" },
        items: [
          {
            id: "Content writing SEO-optimized (artikel, landing page, pillar)",
            en: "SEO-optimized content writing (articles, landing pages, pillar pages)",
          },
          {
            id: "Content refresh & update untuk artikel lama yang underperform",
            en: "Content refresh & updates for underperforming old articles",
          },
          {
            id: "Featured snippet optimization untuk position zero",
            en: "Featured snippet optimization for position zero",
          },
          {
            id: "Internal expert author (kredibel untuk E-E-A-T Google)",
            en: "Internal expert authors (credible for Google's E-E-A-T)",
          },
          {
            id: "Link building white-hat (guest post, digital PR, broken link)",
            en: "White-hat link building (guest posts, digital PR, broken link)",
          },
          {
            id: "Outreach ke media tier-1 & blog otoritatif Indonesia",
            en: "Outreach to tier-1 media & authoritative Indonesian blogs",
          },
          {
            id: "Local citation & directory submission untuk Local SEO",
            en: "Local citation & directory submission for Local SEO",
          },
          {
            id: "Disavow audit untuk backlink berbahaya",
            en: "Disavow audit for harmful backlinks",
          },
          {
            id: "Multimedia content (infographic, video, podcast) untuk diversify",
            en: "Multimedia content (infographics, video, podcast) for diversification",
          },
          {
            id: "Content distribution strategy multi-channel",
            en: "Multi-channel content distribution strategy",
          },
        ],
      },
      {
        title: {
          id: "Reporting & Optimization",
          en: "Reporting & Optimization",
        },
        items: [
          {
            id: "Monthly report transparent (ranking, traffic, conversion, ROI)",
            en: "Transparent monthly report (ranking, traffic, conversion, ROI)",
          },
          {
            id: "Real-time dashboard (Looker Studio / custom)",
            en: "Real-time dashboard (Looker Studio / custom)",
          },
          {
            id: "Weekly position tracking 200+ keyword target",
            en: "Weekly position tracking for 200+ target keywords",
          },
          {
            id: "Competitor monitoring (ranking changes, new content)",
            en: "Competitor monitoring (ranking changes, new content)",
          },
          {
            id: "Google Search Console insight & action items",
            en: "Google Search Console insights & action items",
          },
          {
            id: "Google Analytics 4 funnel & event tracking setup",
            en: "Google Analytics 4 funnel & event tracking setup",
          },
          {
            id: "Algorithm update impact assessment",
            en: "Algorithm update impact assessment",
          },
          {
            id: "Quarterly strategy review meeting dengan rekomendasi adjustment",
            en: "Quarterly strategy review meeting with adjustment recommendations",
          },
          {
            id: "Conversion attribution & revenue tracking",
            en: "Conversion attribution & revenue tracking",
          },
          {
            id: "Dedicated SEO strategist + Slack/WhatsApp access",
            en: "Dedicated SEO strategist + Slack/WhatsApp access",
          },
        ],
      },
    ],
    whyUs: [
      {
        title: {
          id: "100% white-hat, sustainable strategy",
          en: "100% white-hat, sustainable strategy",
        },
        desc: {
          id: "Tidak ada PBN, link farm, atau black-hat tactics yang berisiko penalty. Strategi kami fully compliant dengan Google Webmaster Guidelines — hasil yang bertahan lama, bukan spike sebentar lalu hilang.",
          en: "No PBNs, link farms, or black-hat tactics that risk penalties. Our strategy is fully compliant with Google Webmaster Guidelines — lasting results, not temporary spikes that disappear.",
        },
        stat: "100% white-hat",
      },
      {
        title: {
          id: "Content + Technical + Off-page terintegrasi",
          en: "Integrated content + technical + off-page",
        },
        desc: {
          id: "SEO modern butuh ketiganya berjalan harmonis — bukan technical doang, bukan content doang. Tim kami mengkoordinasikan ketiga aspek secara strategis dalam satu workflow bulanan yang terjadwal rapi.",
          en: "Modern SEO needs all three working in harmony — not just technical, not just content. Our team coordinates all three strategically in one well-scheduled monthly workflow.",
        },
        stat: "3-in-1 approach",
      },
      {
        title: {
          id: "Dedicated strategist, bukan account manager generic",
          en: "Dedicated strategist, not generic account manager",
        },
        desc: {
          id: "Setiap klien punya SEO strategist senior yang hands-on, bukan account manager yang harus 'forward dulu ke tim teknis'. Komunikasi langsung, decision cepat, insight strategis dari yang benar-benar paham SEO.",
          en: "Every client has a hands-on senior SEO strategist — not an account manager who has to 'forward to the technical team'. Direct communication, fast decisions, strategic insights from someone who truly understands SEO.",
        },
        stat: "1-on-1 strategist",
      },
      {
        title: {
          id: "Reporting transparan, no smoke and mirrors",
          en: "Transparent reporting, no smoke and mirrors",
        },
        desc: {
          id: "Setiap bulan Anda dapatkan report lengkap: keyword movement, traffic source, conversion data, link yang diperoleh, content yang diproduksi. Plus real-time dashboard Looker Studio yang bisa Anda akses kapan saja.",
          en: "Every month you receive a complete report: keyword movement, traffic source, conversion data, links acquired, content produced. Plus a real-time Looker Studio dashboard accessible anytime.",
        },
        stat: "real-time data",
      },
      {
        title: {
          id: "Performance-based pricing tersedia",
          en: "Performance-based pricing available",
        },
        desc: {
          id: "Untuk klien yang sudah established, kami menyediakan opsi pricing partially performance-based — base fee + bonus per milestone (ranking, traffic, atau revenue achievement). Skin in the game yang nyata.",
          en: "For established clients, we offer partially performance-based pricing options — base fee + bonus per milestone (ranking, traffic, or revenue achievement). Real skin in the game.",
        },
        stat: "performance-based",
      },
      {
        title: {
          id: "8+ industri spesialisasi",
          en: "8+ industry specializations",
        },
        desc: {
          id: "Kami punya playbook SEO khusus untuk industri properti, finance, F&B, kesehatan, otomotif, edukasi, travel, dan B2B. Bukan generic SEO yang diaplikasikan ke semua klien — strategi disesuaikan dengan behavior search dan kompetisi industri Anda.",
          en: "We have industry-specific SEO playbooks for real estate, finance, F&B, healthcare, automotive, education, travel, and B2B. Not generic SEO applied to all clients — strategy tailored to your industry's search behavior and competition.",
        },
        stat: "8+ industri",
      },
    ],
    process: [
      {
        step: "01",
        title: { id: "Audit & Gap Analysis", en: "Audit & Gap Analysis" },
        desc: {
          id: "Technical audit menyeluruh (200+ checkpoints), content audit, backlink profile analysis, dan competitor benchmarking. Output: SEO health score dan list prioritized opportunity untuk 12 bulan ke depan.",
          en: "Comprehensive technical audit (200+ checkpoints), content audit, backlink profile analysis, and competitor benchmarking. Output: SEO health score and prioritized opportunity list for the next 12 months.",
        },
        duration: { id: "Minggu 1-2", en: "Week 1-2" },
      },
      {
        step: "02",
        title: { id: "Strategy & Roadmap", en: "Strategy & Roadmap" },
        desc: {
          id: "Strategy document dengan keyword cluster, content calendar 6 bulan, technical fix backlog, dan link building plan. KPI dan milestone bulanan disepakati di awal sehingga semua pihak align.",
          en: "Strategy document with keyword clusters, 6-month content calendar, technical fix backlog, and link building plan. KPIs and monthly milestones agreed up front so all parties are aligned.",
        },
        duration: { id: "Minggu 2-3", en: "Week 2-3" },
      },
      {
        step: "03",
        title: { id: "Monthly Execution", en: "Monthly Execution" },
        desc: {
          id: "Eksekusi paralel: technical fix (per sprint), content production (artikel + landing page), link building outreach, dan optimasi on-page. Update progress mingguan via Slack/WhatsApp + akses dashboard real-time.",
          en: "Parallel execution: technical fixes (per sprint), content production (articles + landing pages), link building outreach, and on-page optimization. Weekly progress updates via Slack/WhatsApp + real-time dashboard access.",
        },
        duration: { id: "Bulan 1-6", en: "Month 1-6" },
      },
      {
        step: "04",
        title: { id: "Reporting & Iteration", en: "Reporting & Iteration" },
        desc: {
          id: "Monthly report transparan dengan analisis data, win-and-loss, dan rekomendasi action untuk bulan berikutnya. Quarterly strategy review meeting untuk adjust roadmap berdasarkan performance aktual.",
          en: "Transparent monthly reports with data analysis, wins-and-losses, and action recommendations for the following month. Quarterly strategy review meetings to adjust the roadmap based on actual performance.",
        },
        duration: { id: "Bulanan", en: "Monthly" },
      },
      {
        step: "05",
        title: { id: "Scale & Compound", en: "Scale & Compound" },
        desc: {
          id: "Setelah 6-12 bulan, hasil SEO mulai compound — traffic organik tumbuh exponensial, biaya akuisisi turun, dan ROI semakin tinggi. Kami terus menambah keyword target baru, ekspansi content cluster, dan optimasi conversion.",
          en: "After 6-12 months, SEO results begin to compound — organic traffic grows exponentially, acquisition costs drop, and ROI increases. We continue adding new keyword targets, expanding content clusters, and optimizing conversion.",
        },
        duration: { id: "Bulan 6+", en: "Month 6+" },
      },
    ],
    faqs: [
      {
        q: {
          id: "Berapa lama hasil SEO bisa terlihat?",
          en: "How long until SEO results are visible?",
        },
        a: {
          id: "First quick wins (technical fix, long-tail keyword) dapat terlihat dalam 2-3 bulan. Pertumbuhan signifikan traffic organik biasanya dalam 6-9 bulan. Compound growth (ROI exponensial, dominasi keyword kompetitif) butuh 12-18 bulan. SEO adalah investasi jangka panjang dengan hasil yang bertahan lama — bukan ads yang berhenti saat budget berhenti.",
          en: "First quick wins (technical fixes, long-tail keywords) visible in 2-3 months. Significant organic traffic growth typically in 6-9 months. Compound growth (exponential ROI, dominance of competitive keywords) takes 12-18 months. SEO is a long-term investment with lasting results — not ads that stop when budget stops.",
        },
      },
      {
        q: {
          id: "Apa jaminan website kami bisa di halaman 1 Google?",
          en: "What guarantee that our site will reach Google's page 1?",
        },
        a: {
          id: "Kami tidak menjanjikan ranking spesifik (no SEO agency credible yang berani janji ini, karena Google ranking adalah faktor 200+ termasuk yang di luar kendali). Yang kami garansi: methodology white-hat yang sustainable, eksekusi transparan, dan reporting yang membuktikan progress. Klien kami rata-rata melihat 3.4x organic growth dalam 12 bulan.",
          en: "We don't promise specific rankings (no credible SEO agency does — Google ranking involves 200+ factors, many outside our control). What we guarantee: sustainable white-hat methodology, transparent execution, and reports proving progress. Our clients see an average of 3.4x organic growth in 12 months.",
        },
      },
      {
        q: {
          id: "Apa termasuk content writing dalam paket SEO?",
          en: "Is content writing included in the SEO package?",
        },
        a: {
          id: "Ya, semua paket sudah include content production — artikel blog SEO-optimized (jumlah per bulan sesuai tier), landing page optimization, dan content refresh untuk artikel lama. Tim kami punya content writer in-house yang berpengalaman di industri Anda, plus expert review untuk kredibilitas E-E-A-T.",
          en: "Yes, all packages include content production — SEO-optimized blog articles (quantity per month per tier), landing page optimization, and content refresh for old articles. Our team has in-house content writers experienced in your industry, plus expert review for E-E-A-T credibility.",
        },
      },
      {
        q: {
          id: "Bagaimana strategi link building yang aman dari penalty?",
          en: "What's the link building strategy that's safe from penalties?",
        },
        a: {
          id: "100% white-hat: guest post di blog/media otoritatif (DA 30+) dengan konten genuinely useful; digital PR untuk earned media coverage; broken link building (replace broken link kompetitor dengan konten kami); HARO (Help A Reporter Out) untuk mention di media tier-1; dan content marketing yang naturally attract backlinks. Tidak ada PBN, link farm, atau paid link yang melanggar Google guidelines.",
          en: "100% white-hat: guest posts on authoritative blogs/media (DA 30+) with genuinely useful content; digital PR for earned media coverage; broken link building (replacing competitors' broken links with our content); HARO (Help A Reporter Out) for tier-1 media mentions; and content marketing that naturally attracts backlinks. No PBNs, link farms, or paid links violating Google guidelines.",
        },
      },
      {
        q: {
          id: "Bagaimana jika sudah pernah kena penalty Google?",
          en: "What if we've been penalized by Google before?",
        },
        a: {
          id: "Tim kami berpengalaman recovery dari manual action dan algorithmic penalty. Proses: penalty audit untuk identify root cause, disavow file untuk reject backlink toxic, content quality improvement, reconsideration request submission (untuk manual action), dan strategi rebuilding trust signal. Timeline recovery biasanya 3-6 bulan tergantung severity.",
          en: "Our team has experience recovering from manual actions and algorithmic penalties. Process: penalty audit to identify root cause, disavow file to reject toxic backlinks, content quality improvement, reconsideration request submission (for manual actions), and trust signal rebuilding strategy. Recovery timeline typically 3-6 months depending on severity.",
        },
      },
      {
        q: {
          id: "Apakah Local SEO (Google Business Profile) termasuk?",
          en: "Is Local SEO (Google Business Profile) included?",
        },
        a: {
          id: "Ya, Local SEO termasuk dalam semua paket. Mencakup: optimasi Google Business Profile, manajemen review, local citation di direktori tier-1 (Yelp, Yellowpages, dll.), lokal keyword targeting (kota/kecamatan), Map Pack optimization untuk top 3, dan integrasi dengan website (LocalBusiness schema, location pages).",
          en: "Yes, Local SEO is included in all packages. Covers: Google Business Profile optimization, review management, local citations in tier-1 directories (Yelp, Yellowpages, etc.), local keyword targeting (city/district), Map Pack optimization for top 3, and website integration (LocalBusiness schema, location pages).",
        },
      },
      {
        q: {
          id: "Kontrak SEO minimum berapa lama?",
          en: "What's the minimum SEO contract length?",
        },
        a: {
          id: "Minimum kontrak 6 bulan karena SEO butuh waktu untuk compound. Kontrak ideal 12 bulan agar Anda bisa melihat compound effect maksimum. Tidak ada exit penalty — Anda boleh stop kapan saja jika tidak puas, kami hanya invoice pekerjaan yang sudah dilakukan. Transparansi penuh.",
          en: "Minimum contract is 6 months because SEO needs time to compound. Ideal contract is 12 months so you can see maximum compound effect. No exit penalty — you can stop anytime if dissatisfied, we only invoice work already performed. Full transparency.",
        },
      },
      {
        q: {
          id: "Sistem pembayaran untuk SEO retainer bagaimana?",
          en: "What's the payment structure for SEO retainers?",
        },
        a: {
          id: "Monthly retainer dibayar di awal bulan. Untuk klien baru: 1 bulan pertama include audit + strategy setup intensif (no extra cost). Setup payment metode auto-debit tersedia untuk kemudahan. Opsi performance-based pricing dapat dibahas untuk klien dengan revenue model trackable (lead-gen, e-commerce).",
          en: "Monthly retainer paid at the start of each month. For new clients: first month includes intensive audit + strategy setup (no extra cost). Auto-debit payment setup available for convenience. Performance-based pricing options can be discussed for clients with trackable revenue models (lead-gen, e-commerce).",
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
    stats: [
      {
        value: "Rp 50M+",
        label: { id: "Total ad spend dikelola", en: "Total ad spend managed" },
      },
      {
        value: "4.2x",
        label: { id: "ROAS rata-rata klien", en: "Avg client ROAS" },
      },
      {
        value: "30+",
        label: { id: "Vertikal industri", en: "Industry verticals" },
      },
      {
        value: "<48 jam",
        label: { id: "Time to launch campaign", en: "Time to launch campaign" },
      },
    ],
    deliverables: [
      {
        title: { id: "Strategy & Research", en: "Strategy & Research" },
        items: [
          {
            id: "Account audit menyeluruh (struktur, tracking, performance)",
            en: "Comprehensive account audit (structure, tracking, performance)",
          },
          {
            id: "Competitor ad intelligence (Meta Ad Library, SimilarWeb)",
            en: "Competitor ad intelligence (Meta Ad Library, SimilarWeb)",
          },
          {
            id: "Audience research mendalam (demographic, interest, behavior)",
            en: "Deep audience research (demographic, interest, behavior)",
          },
          {
            id: "Buyer persona development per produk/layanan",
            en: "Buyer persona development per product/service",
          },
          {
            id: "Customer journey mapping & funnel design",
            en: "Customer journey mapping & funnel design",
          },
          {
            id: "Channel mix recommendation (Meta, Google, TikTok, LinkedIn, YouTube)",
            en: "Channel mix recommendation (Meta, Google, TikTok, LinkedIn, YouTube)",
          },
          {
            id: "Budget allocation strategy per channel & campaign type",
            en: "Budget allocation strategy per channel & campaign type",
          },
          {
            id: "KPI definition (ROAS, CAC, CPL, LTV target)",
            en: "KPI definition (ROAS, CAC, CPL, LTV target)",
          },
          {
            id: "12-month media plan roadmap dengan milestone",
            en: "12-month media plan roadmap with milestones",
          },
          {
            id: "Forecasting model untuk realistic expectation",
            en: "Forecasting model for realistic expectations",
          },
        ],
      },
      {
        title: { id: "Creative Production", en: "Creative Production" },
        items: [
          {
            id: "Ad copy multiple variant per campaign (headline, body, CTA)",
            en: "Multiple ad copy variants per campaign (headline, body, CTA)",
          },
          {
            id: "Static creative (image, carousel, collection format)",
            en: "Static creatives (image, carousel, collection format)",
          },
          {
            id: "Video ads (short-form, reel, story, in-feed)",
            en: "Video ads (short-form, reel, story, in-feed)",
          },
          {
            id: "Motion graphics & animation ad untuk stop-the-scroll",
            en: "Motion graphics & animated ads for stop-the-scroll",
          },
          {
            id: "UGC-style content production (creator collaboration)",
            en: "UGC-style content production (creator collaboration)",
          },
          {
            id: "Landing page design & development jika dibutuhkan",
            en: "Landing page design & development if needed",
          },
          {
            id: "Weekly creative refresh untuk menghindari ad fatigue",
            en: "Weekly creative refresh to avoid ad fatigue",
          },
          {
            id: "Bahasa Indonesia & English copy native-speaker quality",
            en: "Bahasa Indonesia & English copy at native-speaker quality",
          },
          {
            id: "Brand-consistent visual identity per asset",
            en: "Brand-consistent visual identity per asset",
          },
          {
            id: "Mobile-first creative optimization",
            en: "Mobile-first creative optimization",
          },
        ],
      },
      {
        title: {
          id: "Campaign Management & Optimization",
          en: "Campaign Management & Optimization",
        },
        items: [
          {
            id: "Campaign setup multi-objective (awareness, lead, conversion, retention)",
            en: "Multi-objective campaign setup (awareness, lead, conversion, retention)",
          },
          {
            id: "Custom audience segmentation (interest, lookalike, retargeting)",
            en: "Custom audience segmentation (interest, lookalike, retargeting)",
          },
          {
            id: "Conversion tracking setup (GA4, Meta Pixel, Conversions API, GTM)",
            en: "Conversion tracking setup (GA4, Meta Pixel, Conversions API, GTM)",
          },
          {
            id: "Server-side tracking untuk iOS 14+ accuracy",
            en: "Server-side tracking for iOS 14+ accuracy",
          },
          {
            id: "A/B testing framework (creative, audience, placement, bid strategy)",
            en: "A/B testing framework (creative, audience, placement, bid strategy)",
          },
          {
            id: "Daily bid & budget optimization",
            en: "Daily bid & budget optimization",
          },
          {
            id: "Negative keyword & audience exclusion management",
            en: "Negative keyword & audience exclusion management",
          },
          {
            id: "Retargeting campaign (warm + hot audience)",
            en: "Retargeting campaigns (warm + hot audiences)",
          },
          {
            id: "Lookalike audience expansion strategy",
            en: "Lookalike audience expansion strategy",
          },
          {
            id: "Scale framework saat campaign sudah profitable",
            en: "Scale framework once campaigns become profitable",
          },
        ],
      },
      {
        title: { id: "Analytics & Reporting", en: "Analytics & Reporting" },
        items: [
          {
            id: "Real-time dashboard custom (Looker Studio / GA4)",
            en: "Custom real-time dashboard (Looker Studio / GA4)",
          },
          {
            id: "Weekly report singkat (performance + insight + action plan)",
            en: "Concise weekly report (performance + insight + action plan)",
          },
          {
            id: "Monthly comprehensive report dengan executive summary",
            en: "Comprehensive monthly report with executive summary",
          },
          {
            id: "Attribution model setup (last-click, multi-touch, data-driven)",
            en: "Attribution model setup (last-click, multi-touch, data-driven)",
          },
          {
            id: "Conversion path analysis untuk understand customer journey",
            en: "Conversion path analysis to understand customer journey",
          },
          {
            id: "Creative performance breakdown (winning vs losing ads)",
            en: "Creative performance breakdown (winning vs losing ads)",
          },
          {
            id: "Cohort analysis untuk retention & LTV measurement",
            en: "Cohort analysis for retention & LTV measurement",
          },
          {
            id: "Quarterly strategy review meeting",
            en: "Quarterly strategy review meeting",
          },
          {
            id: "Dedicated paid media strategist (1-on-1 access)",
            en: "Dedicated paid media strategist (1-on-1 access)",
          },
          {
            id: "Slack/WhatsApp channel untuk komunikasi real-time",
            en: "Slack/WhatsApp channel for real-time communication",
          },
        ],
      },
    ],
    whyUs: [
      {
        title: {
          id: "Performance-based pricing tersedia",
          en: "Performance-based pricing available",
        },
        desc: {
          id: "Untuk klien dengan ad spend Rp 100jt+/bulan, kami menyediakan model pricing kombinasi: base fee + percentage of ad spend atau base fee + bonus per ROAS target. Skin in the game yang nyata, bukan flat fee yang membuat agency lebih peduli ke retainer daripada hasil Anda.",
          en: "For clients with Rp 100M+/month ad spend, we offer combination pricing models: base fee + percentage of ad spend, or base fee + bonus per ROAS target. Real skin in the game — not flat fees that make agencies care more about retainers than your results.",
        },
        stat: "performance-based",
      },
      {
        title: {
          id: "Conversion tracking yang akurat di era iOS 14+",
          en: "Accurate conversion tracking in the iOS 14+ era",
        },
        desc: {
          id: "Tracking akurat adalah fondasi optimasi ads. Kami setup server-side tracking via Conversions API (Meta), enhanced conversion (Google), dan first-party data strategy — accuracy 90%+ bahkan setelah update privacy iOS dan deprecation third-party cookie.",
          en: "Accurate tracking is the foundation of ad optimization. We set up server-side tracking via Conversions API (Meta), enhanced conversions (Google), and first-party data strategy — 90%+ accuracy even after iOS privacy updates and third-party cookie deprecation.",
        },
        stat: "90%+ accuracy",
      },
      {
        title: {
          id: "Multi-platform expertise (bukan spesialis 1 channel)",
          en: "Multi-platform expertise (not single-channel specialists)",
        },
        desc: {
          id: "Tim kami sertifikasi Meta Blueprint, Google Ads, TikTok Ads, dan LinkedIn Marketing. Kami pilih channel mix berdasarkan audience dan funnel stage — bukan memaksa Anda spending di channel yang sebenarnya tidak optimal untuk bisnis Anda.",
          en: "Our team is certified in Meta Blueprint, Google Ads, TikTok Ads, and LinkedIn Marketing. We choose channel mix based on audience and funnel stage — not forcing you to spend on channels that aren't actually optimal for your business.",
        },
        stat: "5+ platform",
      },
      {
        title: {
          id: "Daily monitoring + weekly creative refresh",
          en: "Daily monitoring + weekly creative refresh",
        },
        desc: {
          id: "Ads bukan set-and-forget. Tim kami monitor performance harian, adjust bid & budget setiap hari kerja, dan produksi creative refresh mingguan untuk menghindari ad fatigue. Inilah perbedaan antara hasil 4x ROAS dan 1.5x ROAS.",
          en: "Ads aren't set-and-forget. Our team monitors performance daily, adjusts bids & budgets every business day, and produces weekly creative refreshes to avoid ad fatigue. This is the difference between 4x ROAS and 1.5x ROAS.",
        },
        stat: "daily ops",
      },
      {
        title: {
          id: "Creative production in-house (designer + copywriter + video editor)",
          en: "In-house creative production (designer + copywriter + video editor)",
        },
        desc: {
          id: "Tidak perlu outsource creative ke vendor terpisah. Tim kami include designer, copywriter, dan video editor in-house yang produksi 20-50 creative variant per bulan sesuai testing strategy. Konsisten dengan brand voice, cepat dengan turnaround.",
          en: "No need to outsource creative to separate vendors. Our team includes in-house designers, copywriters, and video editors producing 20-50 creative variants per month per testing strategy. Brand-voice consistent with fast turnaround.",
        },
        stat: "20-50 creatives/mo",
      },
      {
        title: {
          id: "Transparency penuh atas spending & data",
          en: "Full transparency over spending & data",
        },
        desc: {
          id: "Anda punya ownership penuh ad account (Meta Business Manager, Google Ads, dll.) — kami hanya akses sebagai agency partner. Setiap rupiah spending trackable, ad account, dan data konversi 100% milik Anda. Tidak ada hidden markup atau spending yang disembunyikan.",
          en: "You have full ownership of ad accounts (Meta Business Manager, Google Ads, etc.) — we only access as agency partners. Every rupiah of spending is trackable, ad accounts and conversion data 100% yours. No hidden markup or concealed spending.",
        },
        stat: "100% transparent",
      },
    ],
    process: [
      {
        step: "01",
        title: { id: "Audit & Strategy", en: "Audit & Strategy" },
        desc: {
          id: "Audit ad account eksisting (atau competitor jika baru mulai), tracking setup verification, audience research, dan channel mix recommendation. Output: strategy document dan media plan 3 bulan pertama.",
          en: "Audit existing ad account (or competitor if just starting), tracking setup verification, audience research, and channel mix recommendation. Output: strategy document and 3-month media plan.",
        },
        duration: { id: "Minggu 1", en: "Week 1" },
      },
      {
        step: "02",
        title: {
          id: "Creative & Tracking Setup",
          en: "Creative & Tracking Setup",
        },
        desc: {
          id: "Produksi creative batch awal (10-20 variant), setup conversion tracking lengkap (GA4, Pixel, Conversions API, GTM), landing page optimization atau development, dan campaign structure setup di ad platforms.",
          en: "Initial creative batch production (10-20 variants), comprehensive conversion tracking setup (GA4, Pixel, Conversions API, GTM), landing page optimization or development, and campaign structure setup in ad platforms.",
        },
        duration: { id: "Minggu 2", en: "Week 2" },
      },
      {
        step: "03",
        title: { id: "Launch & Learning", en: "Launch & Learning" },
        desc: {
          id: "Soft launch dengan budget kecil untuk validasi audience, creative, dan landing page. Daily monitoring, A/B testing aktif, dan iterasi cepat berdasarkan data 14-21 hari pertama (learning phase platform).",
          en: "Soft launch with small budget to validate audiences, creatives, and landing pages. Daily monitoring, active A/B testing, and rapid iteration based on data from the first 14-21 days (platform learning phase).",
        },
        duration: { id: "Minggu 3-5", en: "Week 3-5" },
      },
      {
        step: "04",
        title: { id: "Optimization & Scale", en: "Optimization & Scale" },
        desc: {
          id: "Kill campaign yang underperform, double-down ke yang winning, ekspansi ke audience lookalike, dan creative refresh mingguan. Target: hit KPI ROAS yang disepakati dalam 60-90 hari.",
          en: "Kill underperforming campaigns, double-down on winners, expand to lookalike audiences, and weekly creative refresh. Target: hit agreed ROAS KPI within 60-90 days.",
        },
        duration: { id: "Bulan 2-3", en: "Month 2-3" },
      },
      {
        step: "05",
        title: { id: "Scale & Cross-Channel", en: "Scale & Cross-Channel" },
        desc: {
          id: "Setelah unit economics terbukti, scale budget secara hati-hati (10-20% per minggu), ekspansi ke channel baru sesuai audience match, dan setup full-funnel strategy (awareness → conversion → retention).",
          en: "Once unit economics are proven, scale budget carefully (10-20% per week), expand to new channels per audience match, and set up full-funnel strategy (awareness → conversion → retention).",
        },
        duration: { id: "Bulan 3+", en: "Month 3+" },
      },
    ],
    faqs: [
      {
        q: {
          id: "Berapa minimum ad spend untuk bekerja dengan Para Suhu?",
          en: "What's the minimum ad spend to work with Para Suhu?",
        },
        a: {
          id: "Tidak ada minimum hard, tetapi sweet spot kami mulai dari Rp 15jt/bulan ad spend (selain management fee). Di bawah itu, kompleksitas optimasi tidak sebanding dengan potential return. Untuk bisnis baru yang baru testing, kami sarankan minimum Rp 5jt/bulan untuk validation phase 2-3 bulan.",
          en: "No hard minimum, but our sweet spot starts at Rp 15M/month ad spend (separate from management fee). Below that, optimization complexity isn't proportional to potential return. For new businesses just testing, we recommend minimum Rp 5M/month for a 2-3 month validation phase.",
        },
      },
      {
        q: {
          id: "Apa jaminan ROAS-nya akan tercapai?",
          en: "What's the guarantee that ROAS targets will be hit?",
        },
        a: {
          id: "Kami tidak menjamin ROAS spesifik di awal (no credible ads agency yang berani, karena banyak variable di luar kontrol: produk, pricing, market timing). Yang kami garansi: forecast realistis berdasarkan industry benchmark, transparency penuh atas spending, dan effort maksimal optimization. Performance-based pricing tersedia untuk klien dengan track record sebagai aligned incentive.",
          en: "We don't guarantee specific ROAS upfront (no credible ads agency does — many variables outside control: product, pricing, market timing). What we guarantee: realistic forecasts based on industry benchmarks, full spending transparency, and maximum optimization effort. Performance-based pricing available for clients with track records as aligned incentive.",
        },
      },
      {
        q: {
          id: "Apakah creative production termasuk atau extra?",
          en: "Is creative production included or extra?",
        },
        a: {
          id: "Termasuk dalam semua paket (jumlah variant per bulan sesuai tier). Tim creative kami in-house: designer, copywriter, dan video editor. Produksi rutin 20-50 variant per bulan untuk testing dan refresh. Special creative (video shoot lokasi, UGC creator) bisa di-arrange dengan biaya production tambahan terpisah.",
          en: "Included in all packages (variant quantity per month per tier). Our creative team is in-house: designers, copywriters, and video editors. Routine production of 20-50 variants per month for testing and refresh. Special creatives (on-location video shoots, UGC creators) can be arranged with separate production costs.",
        },
      },
      {
        q: {
          id: "Bagaimana dengan tracking accuracy setelah update iOS 14+ dan cookie deprecation?",
          en: "What about tracking accuracy after iOS 14+ updates and cookie deprecation?",
        },
        a: {
          id: "Setup tracking kami sudah ready untuk era privacy-first: Meta Conversions API (server-side), Google Enhanced Conversions, first-party data collection via website, dan customer match list upload. Accuracy 85-95% bahkan dengan iOS 14+ tracking limitations. Kami juga setup modeled conversion untuk gap yang ada.",
          en: "Our tracking setup is ready for the privacy-first era: Meta Conversions API (server-side), Google Enhanced Conversions, first-party data collection via website, and customer match list uploads. 85-95% accuracy even with iOS 14+ tracking limitations. We also set up modeled conversions for existing gaps.",
        },
      },
      {
        q: {
          id: "Channel mana yang paling cocok untuk bisnis kami?",
          en: "Which channel is best for our business?",
        },
        a: {
          id: "Tergantung produk, target audience, dan funnel stage: Meta Ads (Facebook + Instagram) — broad reach, visual products, B2C. Google Ads (Search) — high-intent demand capture, B2B & B2C. TikTok Ads — Gen Z/Millennial, video-native brand. LinkedIn Ads — B2B decision maker, high-ticket service. YouTube Ads — brand awareness, video storytelling. Kami akan rekomendasikan mix optimal di tahap strategy.",
          en: "Depends on product, target audience, and funnel stage: Meta Ads (Facebook + Instagram) — broad reach, visual products, B2C. Google Ads (Search) — high-intent demand capture, B2B & B2C. TikTok Ads — Gen Z/Millennial, video-native brands. LinkedIn Ads — B2B decision-makers, high-ticket services. YouTube Ads — brand awareness, video storytelling. We'll recommend optimal mix during strategy phase.",
        },
      },
      {
        q: {
          id: "Siapa yang punya ad account dan data konversi?",
          en: "Who owns the ad accounts and conversion data?",
        },
        a: {
          id: "100% milik Anda. Kami akses sebagai Agency Partner via Meta Business Manager dan Google Ads MCC. Ad account, data konversi historis, audience list, dan creative library semuanya tetap di akun Anda — bahkan jika Anda ganti agency, semua data tetap Anda akses. Tidak ada lock-in.",
          en: "100% yours. We access as Agency Partners via Meta Business Manager and Google Ads MCC. Ad accounts, historical conversion data, audience lists, and creative libraries all stay in your account — even if you change agencies, all data remains accessible to you. No lock-in.",
        },
      },
      {
        q: {
          id: "Kontrak minimum berapa lama?",
          en: "What's the minimum contract length?",
        },
        a: {
          id: "Minimum 3 bulan karena Meta dan Google butuh waktu untuk learning phase (14-21 hari per campaign) plus 60-90 hari untuk reliable performance data. Kontrak ideal 6-12 bulan agar compound effect dari learning dan optimisasi maksimal. No exit penalty — bisa stop kapan saja jika tidak puas.",
          en: "Minimum 3 months because Meta and Google need time for learning phase (14-21 days per campaign) plus 60-90 days for reliable performance data. Ideal contract 6-12 months for maximum compound effect from learning and optimization. No exit penalty — can stop anytime if dissatisfied.",
        },
      },
      {
        q: {
          id: "Management fee dihitung bagaimana?",
          en: "How is the management fee calculated?",
        },
        a: {
          id: "Tiga model tersedia: (1) Flat monthly retainer berdasarkan scope kerja & jumlah channel; (2) Percentage of ad spend (10-15%) untuk klien dengan budget besar dan stable; (3) Hybrid — base fee lebih rendah + percentage of ad spend, ideal untuk scaling phase. Performance bonus (per ROAS milestone) dapat ditambah untuk additional alignment. Detail dikonfirmasi di proposal final.",
          en: "Three models available: (1) Flat monthly retainer based on scope of work & channel count; (2) Percentage of ad spend (10-15%) for clients with large stable budgets; (3) Hybrid — lower base fee + percentage of ad spend, ideal for scaling phase. Performance bonuses (per ROAS milestone) can be added for extra alignment. Details confirmed in final proposal.",
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
    stats: [
      { value: "100+", label: { id: "Brand dikelola", en: "Brands managed" } },
      {
        value: "4M+",
        label: { id: "Followers dibangun", en: "Followers grown" },
      },
      {
        value: "250M+",
        label: { id: "Impressions per bulan", en: "Monthly impressions" },
      },
      {
        value: "4.5x",
        label: { id: "Rata-rata engagement boost", en: "Avg engagement boost" },
      },
    ],
    deliverables: [
      {
        title: {
          id: "Content Strategy & Planning",
          en: "Content Strategy & Planning",
        },
        items: [
          {
            id: "Brand voice audit & tone of voice document",
            en: "Brand voice audit & tone of voice document",
          },
          {
            id: "Competitor analysis & content gap identification",
            en: "Competitor analysis & content gap identification",
          },
          {
            id: "Content pillar framework (5-7 pillar utama brand)",
            en: "Content pillar framework (5-7 main brand pillars)",
          },
          {
            id: "Monthly content calendar (30 hari terjadwal)",
            en: "Monthly content calendar (30 scheduled days)",
          },
          {
            id: "Platform-specific strategy (IG, TikTok, LinkedIn, X, FB)",
            en: "Platform-specific strategy (IG, TikTok, LinkedIn, X, FB)",
          },
          {
            id: "Hashtag research & strategy per platform",
            en: "Hashtag research & strategy per platform",
          },
          {
            id: "Trend monitoring & opportunity capture (real-time)",
            en: "Real-time trend monitoring & opportunity capture",
          },
          {
            id: "Content theme rotation untuk variety dan engagement",
            en: "Content theme rotation for variety and engagement",
          },
          {
            id: "Cross-platform repurposing strategy",
            en: "Cross-platform repurposing strategy",
          },
          {
            id: "Brand guideline application per asset social media",
            en: "Brand guideline application per social media asset",
          },
        ],
      },
      {
        title: { id: "Content Production", en: "Content Production" },
        items: [
          {
            id: "Graphic design (feed post, story, carousel) per brand guideline",
            en: "Graphic design (feed post, story, carousel) per brand guidelines",
          },
          {
            id: "Short-form video production (Reels, TikTok, YouTube Shorts)",
            en: "Short-form video production (Reels, TikTok, YouTube Shorts)",
          },
          {
            id: "Story production (IG Story, FB Story) dengan interactive elements",
            en: "Story production (IG Story, FB Story) with interactive elements",
          },
          {
            id: "Long-form video (IGTV, YouTube) untuk storytelling depth",
            en: "Long-form video (IGTV, YouTube) for storytelling depth",
          },
          {
            id: "Photography (product, lifestyle, behind-the-scenes)",
            en: "Photography (product, lifestyle, behind-the-scenes)",
          },
          {
            id: "Motion graphics & animation untuk eye-catching content",
            en: "Motion graphics & animation for eye-catching content",
          },
          {
            id: "Copywriting native per platform (caption, story copy)",
            en: "Native copywriting per platform (caption, story copy)",
          },
          {
            id: "UGC curation & re-share strategy",
            en: "UGC curation & re-share strategy",
          },
          {
            id: "Carousel educational atau storytelling format",
            en: "Educational or storytelling carousel format",
          },
          {
            id: "Live session production & strategy (IG Live, TikTok Live)",
            en: "Live session production & strategy (IG Live, TikTok Live)",
          },
        ],
      },
      {
        title: {
          id: "Community Management & Engagement",
          en: "Community Management & Engagement",
        },
        items: [
          {
            id: "Daily monitoring & response ke comment, DM, mention",
            en: "Daily monitoring & response to comments, DMs, mentions",
          },
          {
            id: "Customer service via social media (Zendesk integration optional)",
            en: "Customer service via social media (Zendesk integration optional)",
          },
          {
            id: "Engagement strategy (poll, Q&A, contest, giveaway)",
            en: "Engagement strategy (polls, Q&A, contests, giveaways)",
          },
          {
            id: "Crisis response protocol untuk situasi negatif",
            en: "Crisis response protocol for negative situations",
          },
          {
            id: "Influencer outreach & collaboration management",
            en: "Influencer outreach & collaboration management",
          },
          {
            id: "Micro-influencer partnership untuk authenticity",
            en: "Micro-influencer partnerships for authenticity",
          },
          {
            id: "Brand mention tracking & sentiment analysis",
            en: "Brand mention tracking & sentiment analysis",
          },
          {
            id: "Comment moderation & spam filtering",
            en: "Comment moderation & spam filtering",
          },
          {
            id: "Active conversation participation di komunitas relevan",
            en: "Active conversation participation in relevant communities",
          },
          {
            id: "Response time SLA (< 4 jam untuk peak hours)",
            en: "Response time SLA (< 4 hours during peak hours)",
          },
        ],
      },
      {
        title: {
          id: "Analytics & Optimization",
          en: "Analytics & Optimization",
        },
        items: [
          {
            id: "Monthly performance report (reach, engagement, growth, conversion)",
            en: "Monthly performance report (reach, engagement, growth, conversion)",
          },
          {
            id: "Content performance breakdown (top posts, top format)",
            en: "Content performance breakdown (top posts, top formats)",
          },
          {
            id: "Audience insight (demographic, active time, content preference)",
            en: "Audience insights (demographic, active times, content preferences)",
          },
          {
            id: "Competitor benchmarking bulanan",
            en: "Monthly competitor benchmarking",
          },
          {
            id: "Hashtag performance analysis",
            en: "Hashtag performance analysis",
          },
          {
            id: "Story analytics (completion rate, exit rate, interaction)",
            en: "Story analytics (completion rate, exit rate, interactions)",
          },
          {
            id: "Video analytics (watch time, retention curve)",
            en: "Video analytics (watch time, retention curve)",
          },
          {
            id: "A/B testing format dan copy untuk optimasi",
            en: "A/B testing formats and copy for optimization",
          },
          {
            id: "Dedicated community manager (1-on-1 access)",
            en: "Dedicated community manager (1-on-1 access)",
          },
          {
            id: "Quarterly strategy review meeting",
            en: "Quarterly strategy review meeting",
          },
        ],
      },
    ],
    whyUs: [
      {
        title: {
          id: "Tim creative in-house lengkap",
          en: "Complete in-house creative team",
        },
        desc: {
          id: "Tidak perlu juggle vendor terpisah untuk design, video, copywriting, dan photography. Tim kami include semua role tersebut in-house dengan koordinasi langsung dengan community manager dan strategist. Output konsisten dan turnaround cepat.",
          en: "No need to juggle separate vendors for design, video, copywriting, and photography. Our team includes all those roles in-house with direct coordination with community managers and strategists. Consistent output, fast turnaround.",
        },
        stat: "5+ creative role",
      },
      {
        title: {
          id: "Platform-native strategy, bukan copy-paste",
          en: "Platform-native strategy, not copy-paste",
        },
        desc: {
          id: "Konten yang work di Instagram berbeda dengan TikTok atau LinkedIn. Tim kami spesialis per platform — bukan strategi generic yang di-copy paste. Format, tone, dan distribution disesuaikan dengan algoritma dan audience behavior masing-masing platform.",
          en: "Content that works on Instagram differs from TikTok or LinkedIn. Our team specializes per platform — not generic strategies copy-pasted. Format, tone, and distribution tailored to each platform's algorithm and audience behavior.",
        },
        stat: "platform-native",
      },
      {
        title: {
          id: "Dedicated community manager",
          en: "Dedicated community manager",
        },
        desc: {
          id: "Setiap brand punya 1 community manager dedicated yang mengenal voice, history, dan customer Anda. Bukan team rotation yang membuat respons tidak konsisten atau missing context dari interaction sebelumnya.",
          en: "Every brand has 1 dedicated community manager who knows your voice, history, and customers. Not team rotation that creates inconsistent responses or missing context from previous interactions.",
        },
        stat: "1-on-1 CM",
      },
      {
        title: {
          id: "Response time SLA < 4 jam",
          en: "Response time SLA < 4 hours",
        },
        desc: {
          id: "Speed of response di social media adalah kompetitif advantage. Tim kami garansi response ke comment dan DM dalam 4 jam di peak hours (08:00-22:00), dan dalam 12 jam di off-peak. Crisis response protokol siap untuk situasi sensitif.",
          en: "Speed of response on social media is competitive advantage. Our team guarantees response to comments and DMs within 4 hours during peak hours (08:00-22:00), and within 12 hours off-peak. Crisis response protocol ready for sensitive situations.",
        },
        stat: "<4 jam peak",
      },
      {
        title: {
          id: "Brand voice consistency lifetime",
          en: "Lifetime brand voice consistency",
        },
        desc: {
          id: "Setiap caption, story, dan response dijaga consistent dengan brand voice document yang kami susun di awal. Bahkan jika ada pergantian tim internal, brand voice tetap konsisten karena terdokumentasi rapi. Brand integrity terjaga jangka panjang.",
          en: "Every caption, story, and response is kept consistent with the brand voice document we develop at the start. Even with internal team changes, brand voice stays consistent because it's well-documented. Brand integrity preserved long-term.",
        },
        stat: "documented voice",
      },
      {
        title: {
          id: "Crisis response protocol 24/7",
          en: "24/7 crisis response protocol",
        },
        desc: {
          id: "Saat ada situasi sensitif (komplain viral, brand controversy, customer complaint massive), tim kami punya protocol crisis response yang teruji — siap escalate ke senior strategist dalam < 30 menit, response plan dalam 2 jam, dan damage control framework yang proven. Tidak akan ada kasus 'agency hilang saat krisis'.",
          en: "When sensitive situations arise (viral complaints, brand controversy, mass customer complaints), our team has battle-tested crisis response protocols — ready to escalate to senior strategist within < 30 minutes, response plan within 2 hours, and proven damage control frameworks. No 'agency disappears during crisis' scenarios.",
        },
        stat: "24/7 escalation",
      },
    ],
    process: [
      {
        step: "01",
        title: { id: "Brand Audit & Voice", en: "Brand Audit & Voice" },
        desc: {
          id: "Audit social media eksisting (brand voice, content performance, audience), brand voice workshop dengan stakeholder, dan dokumentasi tone of voice + content pillar yang akan digunakan. Foundation untuk konsistensi jangka panjang.",
          en: "Existing social media audit (brand voice, content performance, audience), brand voice workshop with stakeholders, and documentation of tone of voice + content pillars to be used. Foundation for long-term consistency.",
        },
        duration: { id: "Minggu 1-2", en: "Week 1-2" },
      },
      {
        step: "02",
        title: { id: "Content Strategy", en: "Content Strategy" },
        desc: {
          id: "Content strategy 3 bulan dengan content pillar mapping, monthly calendar template, hashtag strategy, dan KPI definition. Sign-off dari Anda sebelum mulai produksi.",
          en: "3-month content strategy with content pillar mapping, monthly calendar template, hashtag strategy, and KPI definition. Sign-off from you before production starts.",
        },
        duration: { id: "Minggu 2-3", en: "Week 2-3" },
      },
      {
        step: "03",
        title: { id: "Production Sprint", en: "Production Sprint" },
        desc: {
          id: "Batch production konten 30 hari di awal bulan (design, video shoot, editing, copywriting). Review & approval cycle dengan Anda dilakukan di tengah produksi sehingga ada waktu adjust sebelum scheduling.",
          en: "30-day content batch production at the start of each month (design, video shoot, editing, copywriting). Review & approval cycle with you mid-production so there's time to adjust before scheduling.",
        },
        duration: { id: "Bulanan", en: "Monthly" },
      },
      {
        step: "04",
        title: {
          id: "Posting & Community Management",
          en: "Posting & Community Management",
        },
        desc: {
          id: "Scheduling otomatis sesuai best time per platform, monitoring real-time, dan community management harian (comment, DM, mention). Crisis response standby 24/7.",
          en: "Automated scheduling per platform best times, real-time monitoring, and daily community management (comments, DMs, mentions). 24/7 crisis response standby.",
        },
        duration: { id: "Daily", en: "Daily" },
      },
      {
        step: "05",
        title: {
          id: "Monthly Review & Iteration",
          en: "Monthly Review & Iteration",
        },
        desc: {
          id: "End-of-month performance report dengan analisis content yang menang/kalah, audience insight terbaru, kompetitor highlight, dan rekomendasi adjustment untuk bulan berikutnya. Quarterly strategy review untuk pivot jika dibutuhkan.",
          en: "End-of-month performance report with winning/losing content analysis, latest audience insights, competitor highlights, and adjustment recommendations for the next month. Quarterly strategy review for pivots if needed.",
        },
        duration: { id: "Bulanan", en: "Monthly" },
      },
    ],
    faqs: [
      {
        q: {
          id: "Platform mana yang harus kami prioritaskan?",
          en: "Which platform should we prioritize?",
        },
        a: {
          id: "Tergantung target audience dan business goal: Instagram — broad consumer brand (fashion, F&B, lifestyle); TikTok — Gen Z/Millennial, video-native brand, awareness; LinkedIn — B2B, recruitment, thought leadership; Facebook — community building, demografi 30+; YouTube — long-form storytelling, tutorial, brand documentary; X (Twitter) — real-time engagement, tech/finance industry. Kami rekomendasikan focus 2-3 platform yang paling fit, bukan distribusi tipis di semua.",
          en: "Depends on target audience and business goal: Instagram — broad consumer brand (fashion, F&B, lifestyle); TikTok — Gen Z/Millennial, video-native brands, awareness; LinkedIn — B2B, recruitment, thought leadership; Facebook — community building, 30+ demographics; YouTube — long-form storytelling, tutorials, brand documentaries; X (Twitter) — real-time engagement, tech/finance industries. We recommend focusing on 2-3 platforms that fit best, not thin distribution across all.",
        },
      },
      {
        q: {
          id: "Berapa frekuensi posting yang ideal?",
          en: "What's the ideal posting frequency?",
        },
        a: {
          id: "Best practice per platform: Instagram (3-5 feed post/minggu + 15-20 story/minggu + 3-5 reel/minggu); TikTok (3-7 video/minggu untuk algorithm boost); LinkedIn (3-5 post/minggu); Facebook (3-5 post/minggu); X (3-10 tweet/hari). Tetapi quality over quantity — lebih baik 3 konten yang resonate daripada 10 konten generic. Frekuensi disesuaikan dengan tier paket Anda.",
          en: "Best practices per platform: Instagram (3-5 feed posts/week + 15-20 stories/week + 3-5 reels/week); TikTok (3-7 videos/week for algorithm boost); LinkedIn (3-5 posts/week); Facebook (3-5 posts/week); X (3-10 tweets/day). But quality over quantity — better 3 resonating pieces than 10 generic. Frequency adjusted per your package tier.",
        },
      },
      {
        q: {
          id: "Apakah konten yang diproduksi original atau pakai template?",
          en: "Is the produced content original or template-based?",
        },
        a: {
          id: "100% original sesuai brand voice Anda. Tidak ada konten template yang di-reuse untuk klien lain. Setiap design, copy, video di-craft khusus untuk brand Anda dengan brand guideline yang sudah disepakati. Stock asset (icon, foto stock library legal seperti Unsplash/Pexels) digunakan jika dibutuhkan, tetapi semua kombinasi & layout original.",
          en: "100% original per your brand voice. No template content reused for other clients. Every design, copy, video is crafted specifically for your brand per agreed brand guidelines. Stock assets (icons, legal stock library photos like Unsplash/Pexels) used if needed, but all combinations & layouts are original.",
        },
      },
      {
        q: {
          id: "Bagaimana approval process konten?",
          en: "What's the content approval process?",
        },
        a: {
          id: "Tier flexible sesuai preferensi: (1) Full approval — Anda review setiap konten sebelum posting, kami batch kirim untuk review weekly; (2) Theme approval — Anda approve theme & calendar, kami eksekusi tanpa review per-post; (3) Trust-based — Anda hands-off, kami eksekusi sesuai brand voice document, weekly recap report. Banyak klien mulai dari Full lalu shift ke Theme atau Trust-based seiring kepercayaan terbangun.",
          en: "Flexible per preference: (1) Full approval — you review every content before posting, we batch send for weekly review; (2) Theme approval — you approve theme & calendar, we execute without per-post review; (3) Trust-based — you're hands-off, we execute per brand voice document, weekly recap report. Many clients start with Full then shift to Theme or Trust-based as trust builds.",
        },
      },
      {
        q: {
          id: "Influencer collaboration bagaimana sistemnya?",
          en: "How does influencer collaboration work?",
        },
        a: {
          id: "Kami punya database 500+ influencer Indonesia (micro hingga macro) yang ter-vetted untuk authenticity (bukan engagement bot). Proses: brief & goal alignment, influencer shortlist sesuai brand fit, negosiasi rate (kami punya rate card historis), kontrak & deliverable, eksekusi, dan reporting. Budget influencer terpisah dari management fee — Anda yang allocate.",
          en: "We have a database of 500+ Indonesian influencers (micro to macro) vetted for authenticity (no engagement bots). Process: brief & goal alignment, influencer shortlist per brand fit, rate negotiation (we have historical rate cards), contract & deliverables, execution, and reporting. Influencer budget is separate from management fee — you allocate.",
        },
      },
      {
        q: {
          id: "Apakah termasuk paid promotion / ads?",
          en: "Is paid promotion / ads included?",
        },
        a: {
          id: "Organic social media management dan paid social ads adalah service terpisah (lihat halaman Suhu Ads kami). Tetapi keduanya saling reinforce — kami sangat sarankan integrasi kedua service untuk hasil maksimal. Klien yang ambil bundle organic + paid mendapatkan diskon dan koordinasi tim yang lebih erat (1 strategist untuk keduanya).",
          en: "Organic social media management and paid social ads are separate services (see our Suhu Ads page). But both reinforce each other — we strongly recommend integration for maximum results. Clients taking organic + paid bundles get discounts and tighter team coordination (1 strategist for both).",
        },
      },
      {
        q: {
          id: "Bagaimana jika ada krisis (viral negatif, komplain massive)?",
          en: "What if there's a crisis (negative virality, mass complaints)?",
        },
        a: {
          id: "Kami punya crisis response protocol: (1) Detection — monitoring tool kami flag negative sentiment dalam 30 menit; (2) Escalation — alert ke senior strategist dan stakeholder Anda; (3) Response plan — draft message untuk approval Anda dalam 2 jam; (4) Execution — response konsisten di semua channel; (5) Post-mortem — analisis dan dokumentasi untuk prevent recurrence. 24/7 standby untuk klien tier Business+.",
          en: "We have a crisis response protocol: (1) Detection — our monitoring tools flag negative sentiment within 30 minutes; (2) Escalation — alert to senior strategist and your stakeholders; (3) Response plan — draft message for your approval within 2 hours; (4) Execution — consistent response across all channels; (5) Post-mortem — analysis and documentation to prevent recurrence. 24/7 standby for Business+ tier clients.",
        },
      },
      {
        q: {
          id: "Kontrak minimum berapa lama?",
          en: "What's the minimum contract length?",
        },
        a: {
          id: "Minimum 3 bulan karena social media butuh konsistensi untuk membangun momentum. Ideal 6-12 bulan agar compound effect dari brand building dan audience growth maksimal. Tidak ada exit penalty — bisa stop di akhir bulan kapan saja jika tidak puas. Pembayaran monthly retainer di awal bulan.",
          en: "Minimum 3 months because social media needs consistency to build momentum. Ideal 6-12 months for maximum compound effect from brand building and audience growth. No exit penalty — can stop at end of any month if dissatisfied. Monthly retainer payment at start of each month.",
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
    stats: [
      {
        value: "50+",
        label: {
          id: "Growth partnership aktif",
          en: "Active growth partnerships",
        },
      },
      {
        value: "3x",
        label: {
          id: "Rata-rata revenue growth 12 bulan",
          en: "Avg 12-month revenue growth",
        },
      },
      {
        value: "8+",
        label: { id: "Industri spesialisasi", en: "Industry specializations" },
      },
      {
        value: "1.5+ thn",
        label: { id: "Rata-rata retention klien", en: "Avg client retention" },
      },
    ],
    deliverables: [
      {
        title: { id: "Strategy & Research", en: "Strategy & Research" },
        items: [
          {
            id: "Marketing audit menyeluruh (channel, funnel, attribution)",
            en: "Comprehensive marketing audit (channel, funnel, attribution)",
          },
          {
            id: "Market research & competitive intelligence",
            en: "Market research & competitive intelligence",
          },
          {
            id: "Brand positioning & messaging framework",
            en: "Brand positioning & messaging framework",
          },
          {
            id: "Customer persona development (3-5 persona detail)",
            en: "Customer persona development (3-5 detailed personas)",
          },
          {
            id: "Customer journey mapping dari awareness hingga advocacy",
            en: "Customer journey mapping from awareness to advocacy",
          },
          {
            id: "Channel mix recommendation per funnel stage",
            en: "Channel mix recommendation per funnel stage",
          },
          {
            id: "12-month marketing roadmap dengan quarterly milestone",
            en: "12-month marketing roadmap with quarterly milestones",
          },
          {
            id: "Budget allocation framework per channel & objective",
            en: "Budget allocation framework per channel & objective",
          },
          {
            id: "KPI definition & success metric (acquisition, retention, LTV)",
            en: "KPI definition & success metrics (acquisition, retention, LTV)",
          },
          {
            id: "Forecasting model untuk realistic growth expectation",
            en: "Forecasting model for realistic growth expectations",
          },
        ],
      },
      {
        title: { id: "Multi-Channel Execution", en: "Multi-Channel Execution" },
        items: [
          {
            id: "SEO strategy & execution (technical, content, off-page)",
            en: "SEO strategy & execution (technical, content, off-page)",
          },
          {
            id: "Paid acquisition (Meta, Google, TikTok, LinkedIn) terkoordinasi",
            en: "Coordinated paid acquisition (Meta, Google, TikTok, LinkedIn)",
          },
          {
            id: "Content marketing (blog, lead magnet, podcast, video)",
            en: "Content marketing (blog, lead magnets, podcast, video)",
          },
          {
            id: "Social media management (organic + community)",
            en: "Social media management (organic + community)",
          },
          {
            id: "Email marketing & nurturing sequence",
            en: "Email marketing & nurturing sequences",
          },
          {
            id: "Influencer & affiliate marketing program",
            en: "Influencer & affiliate marketing programs",
          },
          {
            id: "PR & digital media outreach",
            en: "PR & digital media outreach",
          },
          {
            id: "Webinar & event marketing (online + offline)",
            en: "Webinar & event marketing (online + offline)",
          },
          {
            id: "Landing page production & continuous optimization",
            en: "Landing page production & continuous optimization",
          },
          {
            id: "Conversion rate optimization (CRO) framework",
            en: "Conversion rate optimization (CRO) framework",
          },
        ],
      },
      {
        title: { id: "Automation & CRM", en: "Automation & CRM" },
        items: [
          {
            id: "CRM setup & customization (HubSpot, Salesforce, atau custom)",
            en: "CRM setup & customization (HubSpot, Salesforce, or custom)",
          },
          {
            id: "Marketing automation flow (welcome, nurture, win-back)",
            en: "Marketing automation flows (welcome, nurture, win-back)",
          },
          {
            id: "Lead scoring model untuk prioritization",
            en: "Lead scoring model for prioritization",
          },
          {
            id: "Email sequence design & implementation",
            en: "Email sequence design & implementation",
          },
          {
            id: "WhatsApp Business API automation (chatbot, broadcast)",
            en: "WhatsApp Business API automation (chatbot, broadcast)",
          },
          {
            id: "Sales enablement collateral (deck, case study, calculator)",
            en: "Sales enablement collateral (decks, case studies, calculators)",
          },
          {
            id: "Customer feedback collection (NPS, CSAT, review)",
            en: "Customer feedback collection (NPS, CSAT, reviews)",
          },
          {
            id: "Loyalty program design & implementation",
            en: "Loyalty program design & implementation",
          },
          {
            id: "Referral program setup & tracking",
            en: "Referral program setup & tracking",
          },
          {
            id: "Integration ke tech stack eksisting (ERP, e-commerce, dll.)",
            en: "Integration with existing tech stack (ERP, e-commerce, etc.)",
          },
        ],
      },
      {
        title: {
          id: "Analytics & Strategic Reporting",
          en: "Analytics & Strategic Reporting",
        },
        items: [
          {
            id: "Custom dashboard (Looker Studio, Tableau) untuk executive view",
            en: "Custom dashboard (Looker Studio, Tableau) for executive view",
          },
          {
            id: "Multi-touch attribution model (data-driven, time-decay)",
            en: "Multi-touch attribution model (data-driven, time-decay)",
          },
          {
            id: "Cohort analysis untuk retention & LTV measurement",
            en: "Cohort analysis for retention & LTV measurement",
          },
          {
            id: "Funnel analysis per channel & per persona",
            en: "Funnel analysis per channel & per persona",
          },
          {
            id: "Revenue tracking & ROI measurement per channel",
            en: "Revenue tracking & ROI measurement per channel",
          },
          {
            id: "Monthly executive report dengan strategic insight",
            en: "Monthly executive reports with strategic insights",
          },
          {
            id: "Quarterly business review (QBR) meeting",
            en: "Quarterly business review (QBR) meetings",
          },
          {
            id: "Annual strategy planning session",
            en: "Annual strategy planning sessions",
          },
          {
            id: "Dedicated growth strategist + senior support team",
            en: "Dedicated growth strategist + senior support team",
          },
          {
            id: "Slack/WhatsApp channel untuk real-time collaboration",
            en: "Slack/WhatsApp channel for real-time collaboration",
          },
        ],
      },
    ],
    whyUs: [
      {
        title: {
          id: "End-to-end funnel ownership",
          en: "End-to-end funnel ownership",
        },
        desc: {
          id: "Daripada menangani 5-6 vendor terpisah untuk SEO, Ads, content, sosmed, dan email — semuanya dipegang satu tim terkoordinasi. Strategi consistent dari awareness hingga retention, tanpa hand-off yang membuat data dan momentum hilang.",
          en: "Instead of juggling 5-6 separate vendors for SEO, Ads, content, social, and email — all owned by one coordinated team. Consistent strategy from awareness to retention, no hand-offs that lose data and momentum.",
        },
        stat: "single team",
      },
      {
        title: {
          id: "Cross-channel attribution & ROI clarity",
          en: "Cross-channel attribution & ROI clarity",
        },
        desc: {
          id: "Salah satu masalah biggest agency multi-channel: 'kanal mana yang sebenarnya driver revenue?'. Kami setup multi-touch attribution dan first-party data infrastructure sehingga setiap rupiah marketing trackable dari ad click hingga revenue.",
          en: "One of the biggest multi-channel agency problems: 'which channel actually drives revenue?'. We set up multi-touch attribution and first-party data infrastructure so every marketing rupiah is traceable from ad click to revenue.",
        },
        stat: "attribution clarity",
      },
      {
        title: {
          id: "Dedicated growth strategist (C-level access)",
          en: "Dedicated growth strategist (C-level access)",
        },
        desc: {
          id: "Setiap klien punya growth strategist senior yang bertindak seperti fractional CMO — strategic level access dengan founder atau leadership Anda, monthly executive review, dan quarterly business review yang substantive bukan formality.",
          en: "Every client has a senior growth strategist acting like a fractional CMO — strategic-level access with your founders or leadership, monthly executive reviews, and substantive quarterly business reviews (not formality).",
        },
        stat: "fractional CMO",
      },
      {
        title: {
          id: "Data-driven decision, bukan opinion-based",
          en: "Data-driven decisions, not opinion-based",
        },
        desc: {
          id: "Setiap keputusan strategis didukung data: A/B test result, cohort analysis, attribution model, dan benchmark industri. Tidak ada 'kami rasa harus begini' tanpa data backup — semua action items punya hypothesis dan measurement plan.",
          en: "Every strategic decision is data-backed: A/B test results, cohort analysis, attribution model, and industry benchmarks. No 'we feel it should be this way' without data backup — every action item has hypothesis and measurement plan.",
        },
        stat: "data-first",
      },
      {
        title: {
          id: "Performance-based pricing tersedia",
          en: "Performance-based pricing available",
        },
        desc: {
          id: "Untuk klien dengan revenue model trackable (e-commerce, SaaS, lead-gen), kami menyediakan model pricing kombinasi: base retainer + percentage of incremental revenue atau base + bonus per growth milestone. Aligned incentive yang true partnership.",
          en: "For clients with trackable revenue models (e-commerce, SaaS, lead-gen), we offer combination pricing models: base retainer + percentage of incremental revenue or base + bonus per growth milestone. Aligned incentive for true partnership.",
        },
        stat: "performance-based",
      },
      {
        title: {
          id: "Long-term partnership, average retention 1.5+ tahun",
          en: "Long-term partnership, average retention 1.5+ years",
        },
        desc: {
          id: "Average retention klien kami di atas 1.5 tahun karena kami invest jangka panjang — bukan churn-and-burn model. Kami akan secara aktif merekomendasikan reduction scope jika tidak diperlukan, bahkan jika itu menurunkan revenue kami. Long-term trust over short-term revenue.",
          en: "Our average client retention is above 1.5 years because we invest long-term — not churn-and-burn model. We'll actively recommend scope reduction if not needed, even if that reduces our revenue. Long-term trust over short-term revenue.",
        },
        stat: "1.5+ thn retention",
      },
    ],
    process: [
      {
        step: "01",
        title: { id: "Discovery & Audit", en: "Discovery & Audit" },
        desc: {
          id: "Workshop dengan leadership Anda untuk memahami business model, growth target, dan constraints. Audit komprehensif marketing eksisting (channel, funnel, attribution). Output: gap analysis dan opportunity prioritization.",
          en: "Workshop with your leadership to understand business model, growth targets, and constraints. Comprehensive marketing audit (channel, funnel, attribution). Output: gap analysis and opportunity prioritization.",
        },
        duration: { id: "Minggu 1-3", en: "Week 1-3" },
      },
      {
        step: "02",
        title: { id: "Strategy & Roadmap", en: "Strategy & Roadmap" },
        desc: {
          id: "12-month marketing roadmap dengan quarterly milestone, budget allocation framework, attribution & analytics setup, dan KPI definition. Sign-off dari leadership sebelum eksekusi.",
          en: "12-month marketing roadmap with quarterly milestones, budget allocation framework, attribution & analytics setup, and KPI definition. Sign-off from leadership before execution.",
        },
        duration: { id: "Minggu 3-5", en: "Week 3-5" },
      },
      {
        step: "03",
        title: { id: "Multi-Channel Execution", en: "Multi-Channel Execution" },
        desc: {
          id: "Eksekusi paralel SEO, paid ads, content, sosmed, email — semua terkoordinasi dalam satu workflow. Daily standup tim internal, weekly sync dengan Anda, dan monthly executive review untuk strategic alignment.",
          en: "Parallel execution of SEO, paid ads, content, social, email — all coordinated in one workflow. Daily internal team standups, weekly sync with you, and monthly executive reviews for strategic alignment.",
        },
        duration: { id: "Bulan 1-6", en: "Month 1-6" },
      },
      {
        step: "04",
        title: { id: "Measure & Optimize", en: "Measure & Optimize" },
        desc: {
          id: "Continuous optimization berbasis data: A/B testing, cohort analysis, attribution refinement, dan budget reallocation berdasarkan channel performance. Monthly executive report dan quarterly business review.",
          en: "Continuous data-based optimization: A/B testing, cohort analysis, attribution refinement, and budget reallocation per channel performance. Monthly executive reports and quarterly business reviews.",
        },
        duration: { id: "Bulanan", en: "Monthly" },
      },
      {
        step: "05",
        title: { id: "Scale & Evolution", en: "Scale & Evolution" },
        desc: {
          id: "Setelah 6-12 bulan, scaling dilakukan dengan confidence karena unit economics sudah proven. Ekspansi ke channel baru, segment audience baru, geographic expansion, atau product line baru sesuai growth strategy.",
          en: "After 6-12 months, scaling is done with confidence because unit economics are proven. Expansion to new channels, new audience segments, geographic expansion, or new product lines per growth strategy.",
        },
        duration: { id: "Bulan 6+", en: "Month 6+" },
      },
    ],
    faqs: [
      {
        q: {
          id: "Apa bedanya dengan ambil layanan suhu individual (SEO, Ads, Socmed terpisah)?",
          en: "How is this different from taking individual suhu services (SEO, Ads, Social separately)?",
        },
        a: {
          id: "Suhu Digital Marketing adalah strategic layer di atas semua layanan individual — kami memberikan growth strategist yang men-design strategi holistic, attribution lintas channel, dan executive-level reporting. Cocok untuk bisnis yang sudah established (revenue Rp 5M+ per bulan) dengan ambisi scaling serius. Untuk bisnis early-stage, individual service (1-2 channel) biasanya cukup.",
          en: "Suhu Digital Marketing is a strategic layer above all individual services — we provide a growth strategist who designs holistic strategy, cross-channel attribution, and executive-level reporting. Fits established businesses (Rp 5M+ monthly revenue) with serious scaling ambition. For early-stage businesses, individual services (1-2 channels) usually suffice.",
        },
      },
      {
        q: {
          id: "Bisnis seperti apa yang cocok dengan layanan ini?",
          en: "What kind of business fits this service?",
        },
        a: {
          id: "Cocok untuk: (1) Bisnis dengan revenue Rp 5M+ per bulan yang mau scaling 2-5x dalam 12 bulan; (2) Brand established yang mau go nasional atau ekspansi multi-region; (3) Startup growth-stage dengan funding yang butuh execute marketing serius; (4) Korporasi yang ingin transformasi digital marketing function. Tidak cocok untuk bisnis baru yang baru launching (lebih baik mulai dari individual service).",
          en: "Fits: (1) Businesses with Rp 5M+ monthly revenue targeting 2-5x scaling in 12 months; (2) Established brands going national or expanding multi-region; (3) Growth-stage startups with funding ready to execute serious marketing; (4) Corporations transforming their digital marketing function. Doesn't fit brand-new businesses just launching (better start with individual services).",
        },
      },
      {
        q: {
          id: "Berapa lama sampai bisa lihat hasil revenue growth?",
          en: "How long until revenue growth is visible?",
        },
        a: {
          id: "Quick wins (CRO improvement, ads optimization) bisa dalam 2-3 bulan. Pertumbuhan signifikan (30-50% growth) biasanya dalam 6-9 bulan. Compound effect (2-3x revenue growth) butuh 12-18 bulan karena SEO, brand building, dan retention strategy butuh waktu untuk compound. Quarterly milestone disepakati untuk measurable progress.",
          en: "Quick wins (CRO improvement, ads optimization) within 2-3 months. Significant growth (30-50% growth) typically in 6-9 months. Compound effect (2-3x revenue growth) takes 12-18 months because SEO, brand building, and retention strategy need time to compound. Quarterly milestones agreed for measurable progress.",
        },
      },
      {
        q: {
          id: "Apakah growth strategist Anda hands-on atau hanya planning?",
          en: "Is your growth strategist hands-on or planning only?",
        },
        a: {
          id: "Hands-on, bertindak seperti fractional CMO. Strategist Anda akan: lead weekly sync meeting, review semua creative dan strategy, mentoring tim eksekusi (SEO specialist, paid media manager, content lead), present di monthly executive review, dan available via Slack/WhatsApp untuk strategic question kapan saja. Bukan strategist yang hanya appear bulanan untuk meeting.",
          en: "Hands-on, acting as fractional CMO. Your strategist will: lead weekly sync meetings, review all creative and strategy, mentor execution team (SEO specialist, paid media manager, content lead), present at monthly executive reviews, and be available via Slack/WhatsApp for strategic questions anytime. Not a strategist who only appears monthly for meetings.",
        },
      },
      {
        q: {
          id: "Bagaimana attribution antar channel dilakukan?",
          en: "How is cross-channel attribution done?",
        },
        a: {
          id: "Multi-layer setup: (1) First-party data infrastructure — UTM tagging, customer ID tracking lintas touchpoint; (2) Server-side tracking (Conversions API, Enhanced Conversions) untuk accuracy di era privacy-first; (3) CRM integration untuk closed-loop attribution (lead → opportunity → revenue); (4) Multi-touch attribution model di Google Analytics 4 dan custom dashboard; (5) Brand lift study untuk awareness channel yang sulit di-attribute langsung.",
          en: "Multi-layer setup: (1) First-party data infrastructure — UTM tagging, customer ID tracking across touchpoints; (2) Server-side tracking (Conversions API, Enhanced Conversions) for privacy-first era accuracy; (3) CRM integration for closed-loop attribution (lead → opportunity → revenue); (4) Multi-touch attribution model in Google Analytics 4 and custom dashboard; (5) Brand lift study for awareness channels hard to attribute directly.",
        },
      },
      {
        q: {
          id: "Bisa integrasi dengan tim marketing internal yang sudah ada?",
          en: "Can it integrate with our existing internal marketing team?",
        },
        a: {
          id: "Tentu. 60% klien kami sudah punya internal marketing team — kami complement, bukan replace. Setup typical: internal team handle brand & ownership strategis, kami handle execution skala besar dan spesialisasi channel yang butuh expert. Workflow integration via shared Notion/Asana, weekly sync meeting, dan training internal team untuk capability transfer jangka panjang.",
          en: "Of course. 60% of our clients already have internal marketing teams — we complement, not replace. Typical setup: internal team handles brand & strategic ownership, we handle large-scale execution and channel specialization needing experts. Integration via shared Notion/Asana, weekly sync meetings, and internal team training for long-term capability transfer.",
        },
      },
      {
        q: {
          id: "Channel mana yang biasanya prioritas pertama?",
          en: "Which channels are usually first priority?",
        },
        a: {
          id: "Tergantung audit awal, tetapi pattern umum: (1) Quick wins di paid ads (1-2 bulan ROI) untuk validasi unit economics; (2) Conversion rate optimization untuk maximize existing traffic; (3) Email & WhatsApp automation untuk lift retention dan LTV; (4) SEO untuk compound growth long-term; (5) Brand content & PR untuk awareness layer. Sequence ini compound — quick wins fund SEO, SEO compound mengurangi paid dependency.",
          en: "Depends on initial audit, but common pattern: (1) Quick wins in paid ads (1-2 month ROI) for unit economics validation; (2) Conversion rate optimization to maximize existing traffic; (3) Email & WhatsApp automation to lift retention and LTV; (4) SEO for long-term compound growth; (5) Brand content & PR for awareness layer. This sequence compounds — quick wins fund SEO, SEO compound reduces paid dependency.",
        },
      },
      {
        q: {
          id: "Sistem pembayaran dan kontrak bagaimana?",
          en: "What's the payment and contract structure?",
        },
        a: {
          id: "Monthly retainer dibayar di awal bulan. Minimum kontrak 6 bulan karena marketing strategy butuh waktu untuk compound. Ideal 12 bulan dengan opsi early exit setelah 6 bulan jika tidak puas (tanpa penalty). Untuk klien dengan revenue model trackable, opsi performance-based pricing tersedia: base retainer (60-70% dari flat) + percentage of incremental revenue atau bonus per milestone. Detail dibahas di proposal final.",
          en: "Monthly retainer paid at start of each month. Minimum 6-month contract because marketing strategy needs time to compound. Ideal 12 months with early exit option after 6 months if dissatisfied (no penalty). For clients with trackable revenue models, performance-based pricing options available: base retainer (60-70% of flat) + percentage of incremental revenue or bonus per milestone. Details discussed in final proposal.",
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
    stats: [
      {
        value: "200+",
        label: { id: "Brand identity dibangun", en: "Brand identities built" },
      },
      {
        value: "1.5K+",
        label: {
          id: "Creative asset per bulan",
          en: "Creative assets per month",
        },
      },
      {
        value: "5",
        label: { id: "Design award diraih", en: "Design awards won" },
      },
      {
        value: "8+ thn",
        label: {
          id: "Pengalaman creative team",
          en: "Creative team experience",
        },
      },
    ],
    deliverables: [
      {
        title: {
          id: "Brand Strategy & Identity",
          en: "Brand Strategy & Identity",
        },
        items: [
          {
            id: "Brand discovery workshop dengan stakeholder",
            en: "Brand discovery workshop with stakeholders",
          },
          {
            id: "Market research & competitor visual analysis",
            en: "Market research & competitor visual analysis",
          },
          {
            id: "Brand positioning & visual direction",
            en: "Brand positioning & visual direction",
          },
          {
            id: "Brand archetype & personality definition",
            en: "Brand archetype & personality definition",
          },
          {
            id: "Logo design (3 konsep awal + iterasi hingga final)",
            en: "Logo design (3 initial concepts + iterations to final)",
          },
          {
            id: "Logo variation (primary, secondary, monogram, favicon)",
            en: "Logo variations (primary, secondary, monogram, favicon)",
          },
          {
            id: "Color palette (primary, secondary, accent) dengan HEX/RGB/CMYK",
            en: "Color palette (primary, secondary, accent) with HEX/RGB/CMYK",
          },
          {
            id: "Typography system (heading, body, accent fonts)",
            en: "Typography system (heading, body, accent fonts)",
          },
          {
            id: "Brand voice & messaging guideline",
            en: "Brand voice & messaging guidelines",
          },
          {
            id: "Brand guideline document (60+ halaman) format PDF & web",
            en: "Brand guideline document (60+ pages) in PDF & web format",
          },
        ],
      },
      {
        title: { id: "Print & Stationery", en: "Print & Stationery" },
        items: [
          {
            id: "Business card design (multiple variant)",
            en: "Business card design (multiple variants)",
          },
          {
            id: "Letterhead & envelope design",
            en: "Letterhead & envelope design",
          },
          { id: "Email signature template", en: "Email signature template" },
          {
            id: "Invoice & quotation template",
            en: "Invoice & quotation template",
          },
          {
            id: "Folder, sticker, dan kop surat collateral",
            en: "Folders, stickers, and letterhead collateral",
          },
          {
            id: "Brosur, flyer, dan poster design",
            en: "Brochures, flyers, and poster design",
          },
          {
            id: "Packaging design (primary, secondary, label produk)",
            en: "Packaging design (primary, secondary, product label)",
          },
          {
            id: "Signage & wayfinding design (jika physical location)",
            en: "Signage & wayfinding design (if physical location)",
          },
          {
            id: "Merchandise design (kaos, mug, tote bag, dll.)",
            en: "Merchandise design (t-shirts, mugs, tote bags, etc.)",
          },
          {
            id: "Print production specification & vendor recommendation",
            en: "Print production specifications & vendor recommendations",
          },
        ],
      },
      {
        title: { id: "Digital & Content Asset", en: "Digital & Content Asset" },
        items: [
          {
            id: "Social media template (IG feed, story, reels cover)",
            en: "Social media templates (IG feed, story, reel covers)",
          },
          {
            id: "Web banner & landing page hero asset",
            en: "Web banners & landing page hero assets",
          },
          {
            id: "Email marketing template (newsletter, promo, transactional)",
            en: "Email marketing templates (newsletter, promo, transactional)",
          },
          {
            id: "Presentation deck template (Google Slides, PowerPoint, Keynote)",
            en: "Presentation deck templates (Google Slides, PowerPoint, Keynote)",
          },
          {
            id: "Pitch deck design dengan storytelling structure",
            en: "Pitch deck design with storytelling structure",
          },
          {
            id: "Product photography (lifestyle, packshot, behind-the-scenes)",
            en: "Product photography (lifestyle, packshots, behind-the-scenes)",
          },
          {
            id: "Video production (brand film, product video, testimonial)",
            en: "Video production (brand films, product videos, testimonials)",
          },
          {
            id: "Motion graphics & 2D animation untuk explainer",
            en: "Motion graphics & 2D animation for explainers",
          },
          {
            id: "Illustration & icon set custom",
            en: "Custom illustrations & icon sets",
          },
          {
            id: "Infographic & data visualization design",
            en: "Infographic & data visualization design",
          },
        ],
      },
      {
        title: { id: "Production & Support", en: "Production & Support" },
        items: [
          {
            id: "In-house photographer + videographer untuk shoot day",
            en: "In-house photographer + videographer for shoot days",
          },
          {
            id: "Studio access (Jakarta) atau on-location shoot",
            en: "Studio access (Jakarta) or on-location shoots",
          },
          {
            id: "Talent casting & coordination (model, voiceover)",
            en: "Talent casting & coordination (models, voiceover)",
          },
          {
            id: "Set design & art direction untuk shoot",
            en: "Set design & art direction for shoots",
          },
          {
            id: "Source file delivery (Figma, AI, PSD, INDD, AE, PR)",
            en: "Source file delivery (Figma, AI, PSD, INDD, AE, PR)",
          },
          {
            id: "Brand asset library di cloud (Google Drive, Dropbox)",
            en: "Brand asset library on cloud (Google Drive, Dropbox)",
          },
          {
            id: "Asset organization & version control",
            en: "Asset organization & version control",
          },
          {
            id: "Brand guideline web microsite (optional)",
            en: "Brand guideline web microsite (optional)",
          },
          {
            id: "Quarterly brand audit & refresh recommendation",
            en: "Quarterly brand audit & refresh recommendations",
          },
          {
            id: "Lifetime access ke brand guideline updates",
            en: "Lifetime access to brand guideline updates",
          },
        ],
      },
    ],
    whyUs: [
      {
        title: {
          id: "Strategy-led design, bukan asal estetik",
          en: "Strategy-led design, not just aesthetics",
        },
        desc: {
          id: "Design yang baik harus berakar pada strategi — kenapa brand ini ada, untuk siapa, dan apa yang membedakannya. Setiap design choice (warna, typography, layout) punya rationale strategis yang bisa kami jelaskan. Bukan design yang cantik di mata tetapi tidak menjawab tujuan bisnis.",
          en: "Good design must be rooted in strategy — why this brand exists, for whom, and what differentiates it. Every design choice (color, typography, layout) has strategic rationale we can explain. Not design that's pretty but doesn't serve business goals.",
        },
        stat: "strategy-first",
      },
      {
        title: {
          id: "Senior creative director, hands-on",
          en: "Hands-on senior creative director",
        },
        desc: {
          id: "Setiap project di-supervise langsung oleh senior creative director dengan 10+ tahun pengalaman di branding & advertising agency. Bukan dilempar ke junior designer atau intern. Quality control di setiap iterasi sebelum sampai ke Anda.",
          en: "Every project is directly supervised by a senior creative director with 10+ years of experience in branding & advertising agencies. Not handed to junior designers or interns. Quality control at every iteration before reaching you.",
        },
        stat: "10+ thn senior",
      },
      {
        title: {
          id: "Source file & ownership 100% milik Anda",
          en: "Source files & ownership 100% yours",
        },
        desc: {
          id: "Setelah project selesai, semua source file (.ai, .psd, .fig, .indd, .ae, .pr) di-handover lengkap ke Anda. Copyright sepenuhnya milik perusahaan Anda. Tidak ada vendor lock-in atau lisensi tahunan tersembunyi.",
          en: "Once the project is complete, all source files (.ai, .psd, .fig, .indd, .ae, .pr) are fully handed over to you. Copyright fully owned by your company. No vendor lock-in or hidden annual licenses.",
        },
        stat: "100% ownership",
      },
      {
        title: {
          id: "Unlimited revisi pre-final approval",
          en: "Unlimited revisions pre-final approval",
        },
        desc: {
          id: "Kami tidak membatasi jumlah revisi di tahap konsep dan refinement. Kami iterate hingga design final benar-benar fit dengan vision Anda. Setelah sign-off final, perubahan major dianggap scope baru — tetapi sebelum itu, unlimited iteration.",
          en: "We don't limit revisions during concept and refinement phases. We iterate until final design genuinely fits your vision. After final sign-off, major changes are considered new scope — but before that, unlimited iterations.",
        },
        stat: "unlimited pre-final",
      },
      {
        title: {
          id: "In-house production studio (photo, video, animation)",
          en: "In-house production studio (photo, video, animation)",
        },
        desc: {
          id: "Tidak perlu outsource photographer, videographer, atau animator ke vendor terpisah. Tim kami include semua role tersebut in-house dengan studio Jakarta untuk shoot. Konsisten brand voice, koordinasi cepat, output terintegrasi.",
          en: "No need to outsource photographers, videographers, or animators to separate vendors. Our team includes all these roles in-house with a Jakarta studio for shoots. Consistent brand voice, fast coordination, integrated output.",
        },
        stat: "in-house studio",
      },
      {
        title: {
          id: "Brand guideline lifetime support",
          en: "Brand guideline lifetime support",
        },
        desc: {
          id: "Brand guideline yang kami buat bukan dokumen yang collect dust — kami menyediakan lifetime access ke updates, plus optional quarterly brand audit untuk memastikan brand application Anda consistent di seluruh channel.",
          en: "Brand guidelines we create aren't documents collecting dust — we provide lifetime access to updates, plus optional quarterly brand audits to ensure your brand application stays consistent across all channels.",
        },
        stat: "lifetime support",
      },
    ],
    process: [
      {
        step: "01",
        title: { id: "Discovery & Brand Audit", en: "Discovery & Brand Audit" },
        desc: {
          id: "Workshop dengan founder/leadership untuk dig deep brand essence, market positioning, dan competitive landscape. Audit visual eksisting (jika rebranding) dan competitor benchmarking. Output: creative brief yang disepakati.",
          en: "Workshop with founders/leadership to deeply explore brand essence, market positioning, and competitive landscape. Existing visual audit (if rebranding) and competitor benchmarking. Output: agreed creative brief.",
        },
        duration: { id: "Minggu 1", en: "Week 1" },
      },
      {
        step: "02",
        title: { id: "Strategy & Moodboard", en: "Strategy & Moodboard" },
        desc: {
          id: "Brand strategy document (positioning, archetype, voice), moodboard 3 arah visual berbeda, dan typography exploration. Anda pilih 1 direction yang paling resonate sebelum design exploration dimulai.",
          en: "Brand strategy document (positioning, archetype, voice), moodboard with 3 different visual directions, and typography exploration. You select 1 direction that resonates most before design exploration begins.",
        },
        duration: { id: "Minggu 2", en: "Week 2" },
      },
      {
        step: "03",
        title: { id: "Design Exploration", en: "Design Exploration" },
        desc: {
          id: "Logo design 3 konsep berbeda dengan rasional, color & typography system, dan key application preview. Presentation formal dengan storytelling kenapa setiap elemen dipilih. Anda pilih 1 konsep untuk refinement.",
          en: "Logo design with 3 different concepts with rationale, color & typography system, and key application previews. Formal presentation with storytelling explaining why each element was chosen. You select 1 concept for refinement.",
        },
        duration: { id: "Minggu 3-4", en: "Week 3-4" },
      },
      {
        step: "04",
        title: {
          id: "Refinement & Application",
          en: "Refinement & Application",
        },
        desc: {
          id: "Konsep terpilih di-refine hingga pixel-perfect, lalu di-apply ke seluruh touchpoint (business card, sosmed template, packaging, dll.). Iterasi unlimited hingga final approval dari Anda.",
          en: "Selected concept refined to pixel-perfect, then applied to all touchpoints (business cards, social media templates, packaging, etc.). Unlimited iterations until final approval from you.",
        },
        duration: { id: "Minggu 5-6", en: "Week 5-6" },
      },
      {
        step: "05",
        title: { id: "Delivery & Guideline", en: "Delivery & Guideline" },
        desc: {
          id: "Brand guideline document (60+ halaman) yang komprehensif, source files lengkap, asset library di cloud, dan training tim internal Anda (cara apply brand di context baru). Lifetime support untuk question seputar brand.",
          en: "Comprehensive brand guideline document (60+ pages), complete source files, cloud asset library, and training for your internal team (how to apply brand in new contexts). Lifetime support for brand questions.",
        },
        duration: { id: "Minggu 6+", en: "Week 6+" },
      },
    ],
    faqs: [
      {
        q: {
          id: "Berapa lama project branding dari awal sampai selesai?",
          en: "How long does a branding project take from start to finish?",
        },
        a: {
          id: "Tergantung scope: Logo + basic guideline (Starter tier): 3-4 minggu. Full brand identity + content template (Brand Package tier): 6-8 minggu. Full visual identity + content production + photography (Premium tier): 8-12 minggu. Timeline include rounds revisi tanpa rush — kami percaya branding yang baik butuh waktu untuk explore dan refine.",
          en: "Depends on scope: Logo + basic guidelines (Starter tier): 3-4 weeks. Full brand identity + content template (Brand Package tier): 6-8 weeks. Full visual identity + content production + photography (Premium tier): 8-12 weeks. Timeline includes revision rounds without rush — we believe good branding takes time to explore and refine.",
        },
      },
      {
        q: {
          id: "Berapa round revisi yang termasuk?",
          en: "How many revision rounds are included?",
        },
        a: {
          id: "Unlimited revisi minor (warna, ukuran, posisi) di setiap tahap pre-final approval. Untuk revisi major (perubahan arah konsep), termasuk 2-3 round di tahap design exploration. Setelah final sign-off, perubahan major dianggap scope baru dengan biaya terpisah — sebelum itu, kami iterate sampai Anda benar-benar happy.",
          en: "Unlimited minor revisions (color, size, position) at every pre-final approval stage. For major revisions (concept direction changes), 2-3 rounds included during design exploration phase. After final sign-off, major changes considered new scope with separate cost — before that, we iterate until you're genuinely happy.",
        },
      },
      {
        q: {
          id: "Siapa yang punya copyright atas design yang dibuat?",
          en: "Who owns the copyright of the designs created?",
        },
        a: {
          id: "100% milik perusahaan Anda. Setelah pembayaran final selesai, copyright sepenuhnya di-transfer ke Anda dengan dokumen formal (Assignment of Copyright agreement). Anda bebas menggunakan, memodifikasi, dan komersialkan design tanpa batas. Kami hanya request hak untuk feature project di portfolio kami (dengan persetujuan Anda).",
          en: "100% owned by your company. After final payment, copyright fully transferred to you with formal documentation (Assignment of Copyright agreement). You're free to use, modify, and commercialize the design without limit. We only request rights to feature the project in our portfolio (with your approval).",
        },
      },
      {
        q: {
          id: "Apakah source file (.ai, .psd, .fig) dikasih juga?",
          en: "Are source files (.ai, .psd, .fig) also provided?",
        },
        a: {
          id: "Ya, semua source file di-handover lengkap di akhir project. Termasuk: Adobe Illustrator (.ai) untuk logo dan vector graphics; Photoshop (.psd) untuk image editing; Figma (.fig) untuk web/digital assets; InDesign (.indd) untuk print layout; After Effects (.aep) untuk motion graphics; Premiere (.prproj) untuk video. Plus exported files dalam multiple format (PNG, JPG, SVG, PDF, MP4).",
          en: "Yes, all source files are fully handed over at project end. Including: Adobe Illustrator (.ai) for logos and vector graphics; Photoshop (.psd) for image editing; Figma (.fig) for web/digital assets; InDesign (.indd) for print layouts; After Effects (.aep) for motion graphics; Premiere (.prproj) for video. Plus exported files in multiple formats (PNG, JPG, SVG, PDF, MP4).",
        },
      },
      {
        q: {
          id: "Apakah include photography & video production?",
          en: "Is photography & video production included?",
        },
        a: {
          id: "Termasuk di tier Premium dengan studio session di Jakarta. Untuk tier Starter dan Brand Package, photography/video adalah add-on service. Kami punya in-house photographer dan videographer dengan equipment professional. Outdoor location shoot atau model casting bisa di-arrange dengan biaya production tambahan terpisah.",
          en: "Included in Premium tier with studio session in Jakarta. For Starter and Brand Package tiers, photography/video are add-on services. We have in-house photographers and videographers with professional equipment. Outdoor location shoots or model casting can be arranged with separate production costs.",
        },
      },
      {
        q: {
          id: "Bagaimana jika butuh creative support setelah brand guideline selesai?",
          en: "What if we need creative support after brand guideline is finalized?",
        },
        a: {
          id: "Tersedia 3 model: (1) Monthly retainer creative untuk produksi konten reguler (sosmed, ads, marketing collateral); (2) Project-based untuk kebutuhan sporadis (campaign launch, event, packaging baru); (3) Hourly consulting untuk strategic guidance. Plus lifetime access ke brand guideline updates jika ada evolution. Detail bisa dibahas di tahap handover.",
          en: "Three models available: (1) Monthly creative retainer for regular content production (social, ads, marketing collateral); (2) Project-based for sporadic needs (campaign launches, events, new packaging); (3) Hourly consulting for strategic guidance. Plus lifetime access to brand guideline updates if evolution occurs. Details discussed during handover phase.",
        },
      },
      {
        q: {
          id: "Bisa rebrand dari brand yang sudah established?",
          en: "Can you rebrand an established brand?",
        },
        a: {
          id: "Tentu, dan ini salah satu spesialisasi kami. Proses rebranding lebih hati-hati karena ada brand equity eksisting yang harus dipertimbangkan: customer awareness, market recognition, dan emotional connection. Kami mulai dari audit menyeluruh, stakeholder interview, customer research, lalu desain dengan transition strategy yang minimize disruption. Banyak klien kami adalah brand 5-20 tahun yang melakukan brand refresh.",
          en: "Yes, and this is one of our specializations. Rebranding process is more careful because of existing brand equity to consider: customer awareness, market recognition, and emotional connection. We start with comprehensive audit, stakeholder interviews, customer research, then design with transition strategy that minimizes disruption. Many of our clients are 5-20 year-old brands doing brand refresh.",
        },
      },
      {
        q: {
          id: "Sistem pembayaran untuk project creative bagaimana?",
          en: "What's the payment structure for creative projects?",
        },
        a: {
          id: "Milestone-based: 30% kickoff (post discovery workshop), 30% post-moodboard approval, 30% post-design exploration approval, 10% post-final handover. Untuk project Premium (>3 bulan), milestone dapat dipecah lebih granular. Optional: monthly creative retainer setelah project utama selesai untuk ongoing creative support.",
          en: "Milestone-based: 30% kickoff (post discovery workshop), 30% post-moodboard approval, 30% post-design exploration approval, 10% post-final handover. For Premium projects (>3 months), milestones can be more granular. Optional: monthly creative retainer after main project completion for ongoing creative support.",
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
    stats: [
      {
        value: "30+",
        label: {
          id: "AI implementation aktif",
          en: "Active AI implementations",
        },
      },
      {
        value: "80%",
        label: { id: "Rata-rata waktu yang dihemat", en: "Avg time saved" },
      },
      {
        value: "10+",
        label: { id: "Custom GPT diluncurkan", en: "Custom GPTs deployed" },
      },
      {
        value: "24/7",
        label: { id: "AI agent uptime", en: "AI agent uptime" },
      },
    ],
    deliverables: [
      {
        title: {
          id: "AI Strategy & Use Case Discovery",
          en: "AI Strategy & Use Case Discovery",
        },
        items: [
          {
            id: "Workshop intensif untuk identifikasi AI opportunity di operasional Anda",
            en: "Intensive workshop to identify AI opportunities in your operations",
          },
          {
            id: "Process audit untuk repetitive task yang bisa di-automate",
            en: "Process audit for repetitive tasks ready for automation",
          },
          {
            id: "Cost-benefit analysis per use case (ROI projection)",
            en: "Cost-benefit analysis per use case (ROI projection)",
          },
          {
            id: "Prioritization matrix (high-impact vs low-effort)",
            en: "Prioritization matrix (high-impact vs low-effort)",
          },
          {
            id: "AI model recommendation (Claude, GPT, Gemini, open-source)",
            en: "AI model recommendation (Claude, GPT, Gemini, open-source)",
          },
          {
            id: "Vendor evaluation & comparison (security, accuracy, cost)",
            en: "Vendor evaluation & comparison (security, accuracy, cost)",
          },
          {
            id: "Data residency & privacy compliance assessment",
            en: "Data residency & privacy compliance assessment",
          },
          {
            id: "Risk assessment (hallucination, bias, security)",
            en: "Risk assessment (hallucination, bias, security)",
          },
          {
            id: "Change management strategy untuk adopsi tim",
            en: "Change management strategy for team adoption",
          },
          {
            id: "6-12 month AI transformation roadmap",
            en: "6-12 month AI transformation roadmap",
          },
        ],
      },
      {
        title: {
          id: "AI Agent & Chatbot Development",
          en: "AI Agent & Chatbot Development",
        },
        items: [
          {
            id: "Custom GPT untuk knowledge base internal Anda",
            en: "Custom GPT for your internal knowledge base",
          },
          {
            id: "Customer service chatbot dengan handoff ke human agent",
            en: "Customer service chatbot with handoff to human agents",
          },
          {
            id: "Sales chatbot untuk lead qualification & nurturing",
            en: "Sales chatbot for lead qualification & nurturing",
          },
          {
            id: "WhatsApp Business API chatbot integration",
            en: "WhatsApp Business API chatbot integration",
          },
          {
            id: "Multi-language chatbot (Bahasa Indonesia + English)",
            en: "Multi-language chatbot (Bahasa Indonesia + English)",
          },
          {
            id: "RAG (Retrieval-Augmented Generation) untuk accuracy tinggi",
            en: "RAG (Retrieval-Augmented Generation) for high accuracy",
          },
          {
            id: "Voice AI / call center automation",
            en: "Voice AI / call center automation",
          },
          {
            id: "Internal AI assistant untuk produktivitas tim",
            en: "Internal AI assistants for team productivity",
          },
          {
            id: "Document AI (OCR + extraction untuk invoice, kontrak, dll.)",
            en: "Document AI (OCR + extraction for invoices, contracts, etc.)",
          },
          {
            id: "Email automation dengan AI-powered response",
            en: "Email automation with AI-powered responses",
          },
        ],
      },
      {
        title: {
          id: "Workflow Automation & Integration",
          en: "Workflow Automation & Integration",
        },
        items: [
          {
            id: "Workflow automation via n8n, Make, atau Zapier",
            en: "Workflow automation via n8n, Make, or Zapier",
          },
          {
            id: "Integration ke CRM (HubSpot, Salesforce, Pipedrive)",
            en: "Integration with CRM (HubSpot, Salesforce, Pipedrive)",
          },
          {
            id: "Integration ke productivity tools (Slack, Notion, Google Workspace)",
            en: "Integration with productivity tools (Slack, Notion, Google Workspace)",
          },
          {
            id: "Integration ke accounting tools (Mekari, Accurate, Xero)",
            en: "Integration with accounting tools (Mekari, Accurate, Xero)",
          },
          {
            id: "Custom API development untuk AI-native workflow",
            en: "Custom API development for AI-native workflows",
          },
          {
            id: "Lead enrichment automation (LinkedIn, Apollo, Clearbit)",
            en: "Lead enrichment automation (LinkedIn, Apollo, Clearbit)",
          },
          {
            id: "Social media monitoring & response automation",
            en: "Social media monitoring & response automation",
          },
          {
            id: "Report generation automation (BI dashboard, executive summary)",
            en: "Report generation automation (BI dashboard, executive summary)",
          },
          {
            id: "Content production pipeline (research → draft → review)",
            en: "Content production pipeline (research → draft → review)",
          },
          {
            id: "Workflow monitoring & error handling dashboard",
            en: "Workflow monitoring & error handling dashboard",
          },
        ],
      },
      {
        title: {
          id: "Training, Iteration & Support",
          en: "Training, Iteration & Support",
        },
        items: [
          {
            id: "Team training intensive (workshop + video tutorial)",
            en: "Intensive team training (workshop + video tutorials)",
          },
          {
            id: "Prompt engineering guideline untuk power user",
            en: "Prompt engineering guidelines for power users",
          },
          {
            id: "AI literacy session untuk seluruh tim (1-2 jam per session)",
            en: "AI literacy session for entire team (1-2 hours per session)",
          },
          {
            id: "Documentation lengkap (user manual, technical spec, prompt library)",
            en: "Complete documentation (user manual, technical spec, prompt library)",
          },
          {
            id: "Continuous improvement berdasarkan usage data",
            en: "Continuous improvement based on usage data",
          },
          {
            id: "Model fine-tuning jika dibutuhkan untuk domain spesifik",
            en: "Model fine-tuning if needed for specific domains",
          },
          {
            id: "Monthly performance review (accuracy, usage, ROI)",
            en: "Monthly performance review (accuracy, usage, ROI)",
          },
          {
            id: "Quarterly AI strategy refresh meeting",
            en: "Quarterly AI strategy refresh meetings",
          },
          {
            id: "Bug fix & optimization response < 24 jam",
            en: "Bug fix & optimization response < 24 hours",
          },
          {
            id: "Migration assist jika ada model upgrade (GPT-4 → GPT-5, dll.)",
            en: "Migration assistance for model upgrades (GPT-4 → GPT-5, etc.)",
          },
        ],
      },
    ],
    whyUs: [
      {
        title: {
          id: "Vendor-neutral, bukan tied ke 1 model",
          en: "Vendor-neutral, not tied to one model",
        },
        desc: {
          id: "Kami evaluasi dan rekomendasikan model AI terbaik per use case — Claude untuk reasoning kompleks, GPT untuk versatility, Gemini untuk multimodal, atau open-source (Llama, Mistral) untuk data sensitif on-premise. Bukan vendor lock-in yang memaksa Anda pakai 1 ekosistem.",
          en: "We evaluate and recommend the best AI model per use case — Claude for complex reasoning, GPT for versatility, Gemini for multimodal, or open-source (Llama, Mistral) for sensitive on-premise data. No vendor lock-in forcing you into one ecosystem.",
        },
        stat: "model-agnostic",
      },
      {
        title: {
          id: "Security & data privacy compliance",
          en: "Security & data privacy compliance",
        },
        desc: {
          id: "Implementation kami dirancang dengan security & privacy sebagai foundation: data residency di Indonesia untuk industri sensitif, encryption at-rest dan in-transit, audit log lengkap, dan kepatuhan terhadap UU PDP. Untuk industri regulated (finance, kesehatan), kami support on-premise deployment.",
          en: "Our implementations are designed with security & privacy as foundation: data residency in Indonesia for sensitive industries, encryption at-rest and in-transit, comprehensive audit logs, and PDP Law compliance. For regulated industries (finance, healthcare), we support on-premise deployment.",
        },
        stat: "PDP compliant",
      },
      {
        title: {
          id: "ROI-focused, bukan technology showcase",
          en: "ROI-focused, not technology showcase",
        },
        desc: {
          id: "Setiap AI implementation harus punya ROI yang ke-measure: jam kerja yang dihemat, customer satisfaction yang naik, revenue yang ditambah, atau cost yang dikurangi. Kami tidak push AI untuk sake of AI — kalau spreadsheet sudah cukup, kami akan jujur menyampaikan.",
          en: "Every AI implementation must have measurable ROI: hours saved, customer satisfaction increased, revenue added, or cost reduced. We don't push AI for the sake of AI — if a spreadsheet suffices, we'll honestly say so.",
        },
        stat: "measurable ROI",
      },
      {
        title: {
          id: "Production-grade, bukan POC eksperimental",
          en: "Production-grade, not experimental POCs",
        },
        desc: {
          id: "Banyak AI project gagal karena hanya POC keren di demo tetapi tidak production-ready. Kami fokus ke production-grade implementation dari hari pertama: error handling, monitoring, scalability, dan fallback strategy. Bukan AI yang 'crash kalau load tinggi'.",
          en: "Many AI projects fail because they're cool POCs in demos but not production-ready. We focus on production-grade implementation from day one: error handling, monitoring, scalability, and fallback strategies. Not AI that 'crashes under high load'.",
        },
        stat: "production-grade",
      },
      {
        title: {
          id: "Change management & adoption support",
          en: "Change management & adoption support",
        },
        desc: {
          id: "AI tool yang tidak dipakai tim adalah investasi mubazir. Kami invest signifikan di change management — training tim, dokumentasi yang dapat dipahami, internal champion identification, dan iterative refinement berdasarkan feedback user. Adoption rate target 80%+ dalam 3 bulan.",
          en: "AI tools not used by teams are wasted investments. We invest significantly in change management — team training, understandable documentation, internal champion identification, and iterative refinement based on user feedback. Target adoption rate 80%+ within 3 months.",
        },
        stat: ">80% adoption",
      },
      {
        title: {
          id: "Continuous evolution dengan model upgrade",
          en: "Continuous evolution with model upgrades",
        },
        desc: {
          id: "Landscape AI berubah setiap 6 bulan — model baru lebih cerdas, lebih murah, dan lebih cepat. Kami menyediakan continuous evolution support: model upgrade tanpa downtime, prompt re-optimization, dan capability ekspansi seiring model advancement. AI system Anda tidak akan stagnan.",
          en: "AI landscape changes every 6 months — new models smarter, cheaper, faster. We provide continuous evolution support: model upgrades without downtime, prompt re-optimization, and capability expansion alongside model advancement. Your AI system won't stagnate.",
        },
        stat: "evergreen",
      },
    ],
    process: [
      {
        step: "01",
        title: { id: "Use Case Discovery", en: "Use Case Discovery" },
        desc: {
          id: "Workshop dengan leadership dan operational team untuk memetakan proses bisnis yang time-consuming, error-prone, atau berbiaya tinggi. Output: prioritization matrix dengan top 3-5 use case yang paling high-impact untuk piloted.",
          en: "Workshop with leadership and operational team to map business processes that are time-consuming, error-prone, or high-cost. Output: prioritization matrix with top 3-5 highest-impact use cases for piloting.",
        },
        duration: { id: "Minggu 1-2", en: "Week 1-2" },
      },
      {
        step: "02",
        title: { id: "POC Sprint", en: "POC Sprint" },
        desc: {
          id: "Build Proof of Concept untuk 1 use case priority dalam 2-3 minggu untuk validate technical feasibility dan business value. Anda dapat experience AI tool langsung sebelum commit ke implementation skala penuh.",
          en: "Build Proof of Concept for 1 priority use case within 2-3 weeks to validate technical feasibility and business value. You experience the AI tool directly before committing to full-scale implementation.",
        },
        duration: { id: "Minggu 2-5", en: "Week 2-5" },
      },
      {
        step: "03",
        title: {
          id: "Production Implementation",
          en: "Production Implementation",
        },
        desc: {
          id: "Build production-grade version dengan error handling, monitoring, scalability, integration ke existing tools, dan security hardening. UAT bersama tim sebelum rollout, dengan plan rollback jika dibutuhkan.",
          en: "Build production-grade version with error handling, monitoring, scalability, integration with existing tools, and security hardening. UAT with team before rollout, with rollback plan if needed.",
        },
        duration: { id: "Minggu 5-10", en: "Week 5-10" },
      },
      {
        step: "04",
        title: { id: "Training & Adoption", en: "Training & Adoption" },
        desc: {
          id: "Training intensif untuk tim yang akan menggunakan AI (power user, regular user, manager), dokumentasi lengkap, internal champion identification, dan support intensif minggu pertama untuk memastikan adoption sukses.",
          en: "Intensive training for teams using AI (power users, regular users, managers), comprehensive documentation, internal champion identification, and intensive first-week support to ensure successful adoption.",
        },
        duration: { id: "Minggu 10-12", en: "Week 10-12" },
      },
      {
        step: "05",
        title: { id: "Iterate & Scale", en: "Iterate & Scale" },
        desc: {
          id: "Continuous improvement berdasarkan usage data dan user feedback. Setelah 1 use case sukses, expand ke use case berikutnya dalam prioritization matrix. Quarterly strategy review untuk evaluate ROI dan plan evolusi.",
          en: "Continuous improvement based on usage data and user feedback. After 1 use case succeeds, expand to next use case in the prioritization matrix. Quarterly strategy review to evaluate ROI and plan evolution.",
        },
        duration: { id: "Bulan 3+", en: "Month 3+" },
      },
    ],
    faqs: [
      {
        q: {
          id: "Use case AI seperti apa yang paling bermanfaat untuk bisnis kami?",
          en: "What AI use cases are most beneficial for our business?",
        },
        a: {
          id: "Tergantung industri dan operasional, tetapi pattern umum yang high-ROI: (1) Customer service chatbot — handle 60-80% inquiry repetitive; (2) Internal knowledge base GPT — tim dapatkan jawaban instant dari dokumentasi internal; (3) Sales lead qualification — automatic scoring & first-touch; (4) Content production pipeline — riset & draft konten 10x lebih cepat; (5) Document AI — extract data dari invoice, kontrak, faktur. Kami akan analisis spesifik untuk bisnis Anda di tahap discovery.",
          en: "Depends on industry and operations, but common high-ROI patterns: (1) Customer service chatbot — handles 60-80% repetitive inquiries; (2) Internal knowledge base GPT — team gets instant answers from internal docs; (3) Sales lead qualification — automatic scoring & first-touch; (4) Content production pipeline — research & content drafts 10x faster; (5) Document AI — extract data from invoices, contracts. We'll analyze specifics for your business during discovery.",
        },
      },
      {
        q: {
          id: "Apakah data kami aman? Bagaimana dengan privacy?",
          en: "Is our data safe? What about privacy?",
        },
        a: {
          id: "Security & privacy adalah priority utama. Setup kami: (1) Data residency — dapat di-host di server Indonesia jika dibutuhkan; (2) Encryption at-rest dan in-transit; (3) Audit log lengkap untuk semua AI interaction; (4) Role-based access control; (5) Data anonymization untuk training data; (6) Compliance dengan UU PDP. Untuk industri sangat sensitif (finance, kesehatan, pemerintahan), tersedia opsi on-premise deployment dengan air-gapped infrastructure.",
          en: "Security & privacy are top priorities. Our setup: (1) Data residency — can be hosted on Indonesian servers if needed; (2) Encryption at-rest and in-transit; (3) Comprehensive audit logs for all AI interactions; (4) Role-based access control; (5) Data anonymization for training data; (6) Compliance with PDP Law. For highly sensitive industries (finance, healthcare, government), on-premise deployment with air-gapped infrastructure is available.",
        },
      },
      {
        q: {
          id: "AI model mana yang digunakan? Claude, GPT, Gemini?",
          en: "Which AI model do you use? Claude, GPT, Gemini?",
        },
        a: {
          id: "Vendor-neutral — kami evaluasi per use case: Claude untuk reasoning kompleks, customer service, dan content quality tinggi; GPT untuk versatility, plugin ecosystem, dan use case bervariasi; Gemini untuk multimodal (image + text + video); open-source models (Llama, Mistral) untuk data sensitif yang harus on-premise. Untuk 1 implementasi, sering kombinasi multiple model untuk hasil optimal (orchestration layer).",
          en: "Vendor-neutral — we evaluate per use case: Claude for complex reasoning, customer service, and high-quality content; GPT for versatility, plugin ecosystem, and varied use cases; Gemini for multimodal (image + text + video); open-source models (Llama, Mistral) for sensitive data requiring on-premise. For one implementation, we often combine multiple models for optimal results (orchestration layer).",
        },
      },
      {
        q: {
          id: "Berapa lama dari kickoff sampai AI tool siap digunakan tim?",
          en: "How long from kickoff to AI tool ready for team use?",
        },
        a: {
          id: "POC pertama biasanya 2-4 minggu untuk validate technical feasibility. Production implementation: chatbot/agent sederhana 4-6 minggu, integration kompleks (CRM, ERP, multi-system) 8-12 minggu, custom AI dengan fine-tuning 12-16 minggu. Phased rollout disarankan: power user dulu (2 minggu), regular team (2-4 minggu), full rollout (1-2 bulan setelah refinement).",
          en: "First POC typically 2-4 weeks to validate technical feasibility. Production implementation: simple chatbot/agent 4-6 weeks, complex integration (CRM, ERP, multi-system) 8-12 weeks, custom AI with fine-tuning 12-16 weeks. Phased rollout recommended: power users first (2 weeks), regular team (2-4 weeks), full rollout (1-2 months after refinement).",
        },
      },
      {
        q: {
          id: "Bagaimana mengukur ROI dari investasi AI?",
          en: "How is ROI measured from AI investment?",
        },
        a: {
          id: "Metrik bervariasi per use case, tetapi pattern umum: (1) Time savings — jam kerja yang dihemat × biaya jam kerja; (2) Cost reduction — pengurangan biaya operasional (customer service, content production); (3) Revenue increase — conversion rate improvement dari chatbot lead qualification; (4) Quality improvement — error rate reduction, customer satisfaction score; (5) Capacity expansion — output yang sama dengan team size lebih kecil. Baseline ditetapkan di awal, measurement bulanan dengan executive report.",
          en: "Metrics vary per use case, but common patterns: (1) Time savings — hours saved × hourly cost; (2) Cost reduction — operational cost reduction (customer service, content production); (3) Revenue increase — conversion rate improvement from chatbot lead qualification; (4) Quality improvement — error rate reduction, customer satisfaction scores; (5) Capacity expansion — same output with smaller team size. Baseline set at start, monthly measurement with executive reports.",
        },
      },
      {
        q: {
          id: "Apakah tim kami perlu skill teknis untuk menggunakan AI tool?",
          en: "Does our team need technical skills to use AI tools?",
        },
        a: {
          id: "Tidak. Kami design interface untuk end-user yang non-teknis — UI familiar (chat, form, dashboard) yang tidak butuh coding atau prompt engineering advanced. Untuk power user yang ingin maksimalkan AI, kami sediakan training prompt engineering. Bagi tim teknis (IT, developer), kami juga dapat berikan API access untuk custom integration ke workflow mereka.",
          en: "No. We design interfaces for non-technical end-users — familiar UIs (chat, forms, dashboards) requiring no coding or advanced prompt engineering. For power users wanting to maximize AI, we provide prompt engineering training. For technical teams (IT, developers), we can also provide API access for custom integration into their workflows.",
        },
      },
      {
        q: {
          id: "Berapa biaya operasional AI per bulan setelah implementation?",
          en: "What's the monthly operational cost of AI after implementation?",
        },
        a: {
          id: "Biaya operasional tergantung volume penggunaan dan model yang dipilih. Estimasi: chatbot customer service 1000 conversation/bulan — sekitar Rp 500rb-2jt/bulan untuk API cost. Internal AI assistant untuk 50 user — Rp 2-5jt/bulan. Document AI dengan volume 5000 dokumen/bulan — Rp 3-8jt/bulan. Kami transparan soal cost structure di proposal, dengan opsi monthly retainer yang bundle infrastruktur + support.",
          en: "Operational cost depends on usage volume and selected model. Estimates: customer service chatbot 1000 conversations/month — about Rp 500K-2M/month for API costs. Internal AI assistant for 50 users — Rp 2-5M/month. Document AI with 5000 docs/month volume — Rp 3-8M/month. We're transparent about cost structure in proposals, with monthly retainer options bundling infrastructure + support.",
        },
      },
      {
        q: {
          id: "Bagaimana sistem pembayaran untuk AI implementation project?",
          en: "What's the payment structure for AI implementation projects?",
        },
        a: {
          id: "Milestone-based untuk transparansi: 25% kickoff + discovery, 25% post-POC validation, 30% post-production deployment, 20% post-adoption (setelah 80% target adoption tercapai). Setelah implementation, ada opsi monthly retainer untuk continuous evolution, support, dan API/infrastructure cost — biasanya sekitar 15-25% dari implementation fee per bulan. Untuk POC sederhana, fixed fee dengan 50% DP + 50% post-delivery.",
          en: "Milestone-based for transparency: 25% kickoff + discovery, 25% post-POC validation, 30% post-production deployment, 20% post-adoption (after 80% adoption target achieved). After implementation, optional monthly retainer for continuous evolution, support, and API/infrastructure cost — typically 15-25% of implementation fee per month. For simple POCs, fixed fee with 50% DP + 50% post-delivery.",
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
