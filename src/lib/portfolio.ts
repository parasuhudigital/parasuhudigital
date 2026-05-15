import { SERVICES } from "./constants";

export type ServiceId = (typeof SERVICES)[number]["id"];

export type CaseStudy = {
  slug: string;
  service: ServiceId;
  title: string;
  client: string;
  industry: string;
  location: string;
  year: string;
  duration: string;
  summary: string;
  challenge: string;
  approach: string;
  results: { metric: string; value: string; note?: string }[];
  tags: string[];
  accent: "emerald" | "neon" | "amber" | "violet" | "cyan" | "rose";
  featured?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  // ============================================================
  // SUHU WEBSITE (10)
  // ============================================================
  {
    slug: "fashion-lokal-shopify-plus",
    service: "suhu-website",
    title: "Migrasi ke Shopify Plus untuk Fashion Brand Lokal",
    client: "Brand Fashion Lokal A",
    industry: "Fashion & Retail",
    location: "Bandung, Jawa Barat",
    year: "2024",
    duration: "10 minggu",
    summary:
      "Migrasi dari platform custom yang lambat ke Shopify Plus + redesign UX checkout. Konversi naik signifikan dalam 60 hari.",
    challenge:
      "Site lama bikin lambat (LCP > 5 detik), checkout 4-step yang bikin cart abandonment 78%, dan integrasi inventory manual antara warehouse Bandung & dropshipper. Pas peak campaign 12.12, server down 3 kali.",
    approach:
      "Migrasi penuh ke Shopify Plus dengan custom theme bawaan kita, integrasi Mekari Jurnal untuk akuntansi, dan checkout 1-page. Setup Klaviyo untuk email flow + Meta Conversions API untuk attribution yang akurat. Soft launch ke 10% traffic dulu, monitor 2 minggu, baru full rollout.",
    results: [
      { metric: "Conversion rate", value: "+182%", note: "1.4% → 3.95%" },
      { metric: "Cart abandonment", value: "-44%", note: "78% → 43%" },
      { metric: "LCP page speed", value: "1.4s", note: "dari 5.2s" },
      { metric: "Revenue Q4", value: "+267%", note: "YoY" },
    ],
    tags: ["Shopify Plus", "E-commerce", "Migration", "Checkout UX"],
    accent: "emerald",
    featured: true,
  },
  {
    slug: "law-firm-company-profile",
    service: "suhu-website",
    title: "Company Profile Premium untuk Boutique Law Firm",
    client: "Kantor Hukum di SCBD",
    industry: "Legal Services",
    location: "Jakarta Selatan",
    year: "2024",
    duration: "6 minggu",
    summary:
      "Website corporate dengan tone serius tapi modern. Khusus targeting C-level clients di sektor korporat & M&A.",
    challenge:
      "Site lama (WordPress template) bikin kesan firm-nya kecil padahal partnernya senior eks Big Four. Lawyer junior gak ada brand profile sendiri, dan publikasi/insight gak ke-index Google sama sekali.",
    approach:
      "Custom Next.js dengan animasi micro-interaction halus, sistem partner profile per orang lengkap dengan publikasi LinkedIn auto-sync, dan blog insight section yang SEO-optimized. Hosting Vercel + CDN Cloudflare untuk loading <1 detik di seluruh Indonesia.",
    results: [
      { metric: "Inbound inquiry", value: "+340%", note: "form contact + email" },
      { metric: "Time on site", value: "4m 23s", note: "dari 47 detik" },
      { metric: "Organic traffic", value: "+520%", note: "6 bulan" },
      { metric: "Domain Authority", value: "DA 28", note: "dari DA 4" },
    ],
    tags: ["Next.js", "Corporate", "B2B", "Legal"],
    accent: "violet",
  },
  {
    slug: "marketplace-umkm-jateng",
    service: "suhu-website",
    title: "Marketplace UMKM Regional Jawa Tengah",
    client: "Asosiasi UMKM (PMO Pemda)",
    industry: "Government / UMKM",
    location: "Semarang, Jawa Tengah",
    year: "2023",
    duration: "16 minggu",
    summary:
      "Marketplace multi-vendor untuk 800+ UMKM regional. Integrasi pembayaran lokal + ongkir COD-friendly.",
    challenge:
      "Pemda butuh marketplace untuk push produk UMKM lokal yang sebagian besar belum melek digital. Konstrain: budget terbatas, vendor gaptek (banyak yang belum punya rekening bank), dan ongkir antar kabupaten yang complicated.",
    approach:
      "Build custom marketplace di Next.js + Strapi headless CMS. Onboarding vendor via WhatsApp form, payment via Xendit + COD ke kurir lokal regional, dan training offline ke 12 kota. Sistem moderasi produk dengan AI image classifier untuk filter konten yang gak sesuai.",
    results: [
      { metric: "Vendor onboarded", value: "823", note: "target awal 500" },
      { metric: "GMV bulan ke-6", value: "Rp 2.3M", note: "dari nol" },
      { metric: "Order completion", value: "94%", note: "COD-friendly flow" },
      { metric: "Avg vendor income", value: "+Rp 1.8jt/bulan", note: "vs offline only" },
    ],
    tags: ["Marketplace", "Multi-vendor", "UMKM", "Pemda"],
    accent: "amber",
  },
  {
    slug: "landing-launch-skincare",
    service: "suhu-website",
    title: "Landing Page Launching Skincare Brand",
    client: "Skincare D2C Brand B",
    industry: "Beauty & Wellness",
    location: "Jakarta",
    year: "2025",
    duration: "3 minggu",
    summary:
      "Landing page khusus launching produk baru dengan A/B test 4 varian. Hasilnya: salah satu varian convert 6.2%.",
    challenge:
      "Launching produk serum baru dengan budget ads Rp 350jt dalam 2 minggu. Landing page lama (di Tokopedia) gak convert karena terlalu generic, dan founder pengen ngecek mana value proposition yang paling resonate.",
    approach:
      "Bikin 4 varian landing page dengan headline + visual + offer berbeda. Setup AB test pakai Vercel Edge Config (no flicker), event tracking ke GA4 + Meta. Tim creative bikin 16 ad creative (4 per varian) untuk fairness test. Iterasi mingguan dengan winner kompounding.",
    results: [
      { metric: "Best variant CVR", value: "6.2%", note: "vs benchmark 1.8%" },
      { metric: "CPL average", value: "Rp 12.400", note: "target Rp 35.000" },
      { metric: "ROAS week 2", value: "4.7x", note: "scale dari 1.9x" },
      { metric: "Sold out time", value: "11 hari", note: "stock 5.000 pcs" },
    ],
    tags: ["Landing Page", "A/B Testing", "Launch", "CRO"],
    accent: "rose",
    featured: true,
  },
  {
    slug: "travel-custom-web-app",
    service: "suhu-website",
    title: "Custom Web App Travel Agent Tour Package",
    client: "Tour Operator Bali",
    industry: "Travel & Wisata",
    location: "Denpasar, Bali",
    year: "2024",
    duration: "14 minggu",
    summary:
      "Web app custom untuk manage tour package + booking + agent reseller. Replace 3 tools (Excel + WhatsApp + Trello).",
    challenge:
      "Operator tour dengan 40+ paket + 120+ reseller agent kelola booking via WhatsApp + Excel. Sering double booking, harga reseller gak terupdate, dan financial reporting bulanan butuh 4 hari kerja.",
    approach:
      "Custom Next.js + PostgreSQL dengan modul: package builder, dynamic pricing per agent tier, booking engine real-time, reseller dashboard, dan auto-invoice. Integrasi WhatsApp Business API untuk notif booking otomatis. Migrasi data 2 tahun terakhir dari Excel.",
    results: [
      { metric: "Booking processing time", value: "3 menit", note: "dari 35 menit" },
      { metric: "Double booking incident", value: "0", note: "dalam 6 bulan" },
      { metric: "Active reseller agent", value: "+58%", note: "168 → 265 agent" },
      { metric: "Financial close time", value: "4 jam", note: "dari 4 hari" },
    ],
    tags: ["Web App", "Custom", "Travel", "B2B"],
    accent: "cyan",
  },
  {
    slug: "klinik-portal-multi-cabang",
    service: "suhu-website",
    title: "Portal Pasien & Booking untuk Klinik Multi-Cabang",
    client: "Klinik Estetika 7 cabang Jabodetabek",
    industry: "Klinik & Kesehatan",
    location: "Jakarta, Tangerang, Bekasi",
    year: "2024",
    duration: "12 minggu",
    summary:
      "Portal pasien dengan booking online, riwayat treatment, dan ePrescription terintegrasi dengan sistem klinik existing.",
    challenge:
      "7 cabang dengan kapasitas + slot dokter berbeda-beda. Pasien sering datang ke cabang yang full atau dokternya gak available. Tim admin spend 6+ jam/hari hanya untuk reschedule via WhatsApp.",
    approach:
      "Next.js portal frontend + integrasi REST API ke SIM klinik existing (HSIS). Booking real-time dengan slot lock 5 menit, payment Xendit untuk down payment, dan SMS + WhatsApp reminder otomatis H-1. Sistem queue digital di cabang dengan tablet display.",
    results: [
      { metric: "Online booking", value: "67%", note: "dari total appointment" },
      { metric: "No-show rate", value: "-52%", note: "11% → 5.3%" },
      { metric: "Admin time saved", value: "5.2 jam/hari", note: "per cabang" },
      { metric: "Patient satisfaction", value: "4.8/5", note: "post-treatment survey" },
    ],
    tags: ["Portal", "Healthcare", "Integration", "Multi-location"],
    accent: "emerald",
  },
  {
    slug: "developer-properti-mega-project",
    service: "suhu-website",
    title: "Web Hub Mega Project Developer Properti",
    client: "Developer Township Tangerang",
    industry: "Properti",
    location: "Tangerang, Banten",
    year: "2025",
    duration: "20 minggu",
    summary:
      "Web hub master untuk township 200ha dengan 8 cluster. Floor plan interaktif, virtual tour 360, dan lead routing ke 80+ marketing agent.",
    challenge:
      "Project township gede dengan banyak fase + cluster. Lead form gak dirouting dengan baik (banyak yang ke-pickup agent yang udah resign), floor plan masih PDF download, dan virtual tour pakai vendor luar yang gak terintegrasi.",
    approach:
      "Hub utama + sub-site per cluster di Next.js, integrasi 3D floor plan dengan three.js, virtual tour Matterport embed dengan tracking, dan lead routing system berbasis territory + performa agent (round-robin weighted). Dashboard untuk marketing manager monitor real-time.",
    results: [
      { metric: "Qualified leads/bulan", value: "+312%", note: "vs site lama" },
      { metric: "Avg session duration", value: "8m 14s", note: "interactive content" },
      { metric: "Booking fee converted", value: "+89%", note: "dari leads" },
      { metric: "Agent response time", value: "<12 menit", note: "lead routing" },
    ],
    tags: ["Real Estate", "3D Tour", "Lead Routing", "Multi-site"],
    accent: "amber",
    featured: true,
  },
  {
    slug: "lms-edutech-bilingual",
    service: "suhu-website",
    title: "LMS Bilingual untuk EdTech B2C",
    client: "EdTech Bahasa Inggris untuk Profesional",
    industry: "Edukasi",
    location: "Jakarta",
    year: "2024",
    duration: "18 minggu",
    summary:
      "Learning Management System custom untuk 12.000+ siswa aktif. Video streaming HLS, live class Zoom-integrated, dan gamification XP.",
    challenge:
      "EdTech grow cepet tapi pakai Teachable yang limit di customization + biaya per-student mahal. Drop off rate 38% di kelas live karena UX live class kurang intuitive, dan tracking progress siswa terpisah-pisah.",
    approach:
      "LMS custom Next.js + Mux video streaming untuk on-demand, Zoom SDK untuk live class embedded, dan gamification XP + badge sistem. Integrasi LMS ke CRM HubSpot untuk customer success follow-up. Mobile responsive dengan offline download fitur.",
    results: [
      { metric: "Cost per active user", value: "-71%", note: "vs Teachable" },
      { metric: "Live class attendance", value: "+44%", note: "62% → 89%" },
      { metric: "Course completion", value: "+38%", note: "gamification effect" },
      { metric: "Refund rate", value: "-58%", note: "improved UX" },
    ],
    tags: ["LMS", "EdTech", "Video", "Live Class"],
    accent: "violet",
  },
  {
    slug: "booking-restoran-fine-dining",
    service: "suhu-website",
    title: "Booking System untuk Restoran Fine Dining Chain",
    client: "Fine Dining 4 cabang",
    industry: "Restoran & F&B",
    location: "Jakarta & Bali",
    year: "2025",
    duration: "8 minggu",
    summary:
      "Sistem booking premium dengan waitlist, special request, dan integrasi loyalty member untuk fine dining chain.",
    challenge:
      "Booking via OpenTable terlalu generic + ada commission tinggi. Customer VIP gak ke-recognize, special request (alergi, special occasion) sering ke-miss, dan waitlist management masih via WhatsApp manual.",
    approach:
      "Build booking system custom dengan tier member VIP recognition, slot reservation dengan deposit, intelligent waitlist (auto-fill kalau ada cancel), dan integrasi POS untuk track repeat customer + preferensi menu. Concierge tablet UI untuk staff host.",
    results: [
      { metric: "Direct booking", value: "78%", note: "lepas dari OpenTable" },
      { metric: "Booking commission saved", value: "Rp 280jt/tahun", note: "OpenTable fee" },
      { metric: "VIP repeat rate", value: "+47%", note: "personalization" },
      { metric: "No-show rate", value: "3.1%", note: "industry avg 18%" },
    ],
    tags: ["Restaurant", "Booking", "Loyalty", "Premium"],
    accent: "rose",
  },
  {
    slug: "saas-multitenant-frontend",
    service: "suhu-website",
    title: "Frontend Multi-tenant untuk SaaS HR Tech",
    client: "HR SaaS Series A Startup",
    industry: "B2B SaaS",
    location: "Jakarta",
    year: "2025",
    duration: "22 minggu",
    summary:
      "Build frontend multi-tenant untuk SaaS HR yang melayani 180+ perusahaan klien. Subdomain per tenant + custom branding.",
    challenge:
      "Startup HR SaaS lagi scale dari 12 ke 180+ klien enterprise. Frontend lama (React class component) gak scalable, performance lag di company yang punya 5.000+ karyawan, dan setup tenant baru butuh 2 hari manual.",
    approach:
      "Rewrite ke Next.js App Router dengan multi-tenant architecture: subdomain routing dinamis, theming per tenant via CSS variables, dan onboarding wizard otomatis. Dashboard pakai TanStack Table untuk handle 10k+ rows dengan virtualization. Tim transfer + docs lengkap.",
    results: [
      { metric: "Tenant setup time", value: "11 menit", note: "dari 2 hari" },
      { metric: "Page load p95", value: "1.2s", note: "dari 4.8s" },
      { metric: "Customer churn", value: "-34%", note: "post-rewrite Q4" },
      { metric: "Eng team velocity", value: "+2.3x", note: "ship feature/sprint" },
    ],
    tags: ["SaaS", "Multi-tenant", "B2B", "Performance"],
    accent: "cyan",
  },

  // ============================================================
  // SUHU APP (10)
  // ============================================================
  {
    slug: "beauty-booking-pwa",
    service: "suhu-app",
    title: "PWA Booking Salon untuk Beauty Chain",
    client: "Salon Premium 12 cabang",
    industry: "Beauty & Wellness",
    location: "Jabodetabek + Bandung",
    year: "2024",
    duration: "10 minggu",
    summary:
      "PWA booking salon dengan smart slot recommendation + stylist preference. Install rate 38% tanpa harus ke App Store.",
    challenge:
      "Customer ngeluh app native salon mereka jarang dipake karena male install. Booking masih dominan via DM IG, sering miscom soal jadwal hairdresser favorit, dan reschedule chaos.",
    approach:
      "Bikin PWA fast install (<3 detik) dengan Add to Home Screen prompt, smart slot recommendation berdasarkan history customer, dan stylist preference matching. Push notif untuk reminder + promo. Sinkron ke sistem POS existing untuk member tier.",
    results: [
      { metric: "Install rate", value: "38%", note: "PWA vs 4% native app" },
      { metric: "Booking via app", value: "61%", note: "dari 12%" },
      { metric: "Repeat booking", value: "+92%", note: "personalization" },
      { metric: "Dev cost saved", value: "Rp 480jt", note: "vs native dual platform" },
    ],
    tags: ["PWA", "Booking", "Beauty", "Mobile"],
    accent: "rose",
  },
  {
    slug: "gym-member-app",
    service: "suhu-app",
    title: "Member App untuk Gym Premium Chain",
    client: "Premium Fitness Chain",
    industry: "Health & Fitness",
    location: "Jakarta",
    year: "2024",
    duration: "14 minggu",
    summary:
      "App member untuk premium gym dengan kelas booking, personal trainer matching, dan progress tracker terintegrasi smart equipment.",
    challenge:
      "Gym premium dengan member fee Rp 2.5jt/bulan tapi engagement post-onboarding turun drastis bulan ke-3. Class booking penuh banget jam prime time, member gak tau progress mereka, dan trainer matching masih manual via WhatsApp.",
    approach:
      "React Native app dengan modul: class booking (waitlist + favorite trainer), progress dashboard sync dengan smart equipment Technogym, body composition track via foto, dan in-app messaging trainer-member. Gamifikasi streak + badge untuk engagement.",
    results: [
      { metric: "Monthly active users", value: "84%", note: "dari 47%" },
      { metric: "Member retention 12mo", value: "+38%", note: "engagement effect" },
      { metric: "PT session booked", value: "+167%", note: "easier matching" },
      { metric: "App Store rating", value: "4.7/5", note: "1.200+ reviews" },
    ],
    tags: ["React Native", "Fitness", "Member", "Gamification"],
    accent: "neon",
    featured: true,
  },
  {
    slug: "on-demand-cleaning",
    service: "suhu-app",
    title: "On-Demand Cleaning Service App",
    client: "Cleaning Service Startup",
    industry: "Service Marketplace",
    location: "Jabodetabek",
    year: "2023",
    duration: "18 minggu",
    summary:
      "Marketplace app penyedia jasa cleaning rumah/kantor. Customer + cleaner app + admin dashboard. 6 bulan: 2.300+ booking.",
    challenge:
      "Founder punya 60+ cleaner di Jabodetabek tapi job assignment masih via grup WhatsApp. Customer susah track cleaner mana yang dateng, sering complaint cleaner gak punya skill expected, dan rating system gak ada.",
    approach:
      "Build 3 app: customer (booking + tracking), cleaner (job board + earning), admin (dispatch + dispute). Cleaner profile dengan certification badge, geolocation real-time pas cleaning, dan rating + reward sistem. Payment escrow via Xendit.",
    results: [
      { metric: "Booking/bulan ke-6", value: "2.318", note: "dari nol" },
      { metric: "Cleaner active", value: "147", note: "dari 60" },
      { metric: "Avg response time", value: "8 menit", note: "booking → accept" },
      { metric: "Dispute rate", value: "1.4%", note: "industry 6-8%" },
    ],
    tags: ["Marketplace", "On-demand", "Geolocation", "Service"],
    accent: "amber",
  },
  {
    slug: "agritech-b2b-marketplace",
    service: "suhu-app",
    title: "B2B Marketplace App Pertanian",
    client: "AgriTech Startup",
    industry: "Agritech",
    location: "Jawa Timur",
    year: "2024",
    duration: "20 minggu",
    summary:
      "App marketplace B2B antara petani sayur + restoran/hotel/supermarket. Pre-order harvest, logistik integrated, payment terms B2B.",
    challenge:
      "Petani sayur di Malang punya hasil panen yang sering kebuang karena demand market gak match. Hotel/restoran beli via tengkulak dengan harga 3-5x lipat. Founder mau cut middleman tapi butuh sistem yang ngerti B2B (NPWP, faktur pajak, term payment).",
    approach:
      "React Native app + admin dashboard web. Fitur: pre-order panen 30 hari ke depan, logistic partner integration (Anteraja Cold Chain), invoicing dengan faktur pajak otomatis, dan payment term Net 14/30. Verifikasi petani via cooperative endorsement.",
    results: [
      { metric: "Petani onboarded", value: "421", note: "Malang Raya" },
      { metric: "Buyer aktif (hotel+resto)", value: "189", note: "Jatim + Bali" },
      { metric: "GMV bulan ke-12", value: "Rp 4.7M/bulan", note: "ramp up" },
      { metric: "Margin petani", value: "+340%", note: "vs sale ke tengkulak" },
    ],
    tags: ["Agritech", "B2B Marketplace", "Logistics", "Social Impact"],
    accent: "emerald",
  },
  {
    slug: "kids-elearning-app",
    service: "suhu-app",
    title: "App E-learning Kids untuk Usia 4-10",
    client: "EdTech Anak Premium",
    industry: "Edukasi Anak",
    location: "Jakarta",
    year: "2025",
    duration: "16 minggu",
    summary:
      "App e-learning untuk anak 4-10 tahun dengan gamification, parent dashboard, dan offline mode. Subscription model B2C.",
    challenge:
      "Founder ex-pendidik bikin kurikulum bagus banget tapi parent ngeluh anak bosen di sesi ke-3. Anak fokus 8-10 menit aja, parent gak bisa track progress harian, dan offline learning gak available (banyak family yang travel).",
    approach:
      "Native iOS + Android dengan Unity untuk modul game-based learning. Sistem reward virtual coin + collectible character, mini-game per topic 5-8 menit, dan parent dashboard mingguan ke email + WhatsApp. Offline download lesson untuk 7 hari.",
    results: [
      { metric: "Daily active session", value: "22 menit", note: "kid avg" },
      { metric: "Subscriber retention 6mo", value: "78%", note: "industry 35-45%" },
      { metric: "Parent NPS", value: "67", note: "Jan-Apr 2025" },
      { metric: "App Store rating", value: "4.9/5", note: "Top 10 Kids Edu ID" },
    ],
    tags: ["Kids", "EdTech", "Gamification", "iOS + Android"],
    accent: "violet",
  },
  {
    slug: "fnb-loyalty-app",
    service: "suhu-app",
    title: "Loyalty App F&B Coffee Chain",
    client: "Coffee Chain 48 cabang",
    industry: "Restoran & F&B",
    location: "Indonesia (10 kota)",
    year: "2024",
    duration: "12 minggu",
    summary:
      "App loyalty + mobile ordering untuk coffee chain. Member point, pre-order pickup, dan referral. 6 bulan: 380rb downloads.",
    challenge:
      "Coffee chain udah punya 48 cabang tapi customer data tersebar di POS per outlet. Repeat customer gak ke-recognize lintas cabang, promo via flyer mahal + gak measurable, dan antrian peak hour bikin lost sales.",
    approach:
      "React Native app: pre-order + pickup (skip queue), member tier (Bronze-Gold-Diamond), point redeem, referral dengan dynamic link, dan home feed campaign personalized. Integrasi ke POS Mokapos untuk unified customer profile.",
    results: [
      { metric: "App downloads 6mo", value: "382.000", note: "organic + ads" },
      { metric: "Pre-order conversion", value: "+89%", note: "peak hour" },
      { metric: "Repeat rate member", value: "4.2x/bulan", note: "vs 1.7x non-member" },
      { metric: "Promo ROI", value: "+218%", note: "vs flyer offline" },
    ],
    tags: ["Loyalty", "F&B", "Mobile Order", "POS Integration"],
    accent: "amber",
    featured: true,
  },
  {
    slug: "telemedicine-consultation",
    service: "suhu-app",
    title: "Telemedicine App untuk Klinik Network",
    client: "Klinik Network 35 outlet",
    industry: "Klinik & Kesehatan",
    location: "Indonesia (15 kota)",
    year: "2024",
    duration: "22 minggu",
    summary:
      "App telemedicine dengan video consultation, e-prescription, dan home lab test booking. Compliance Permenkes 24/2022.",
    challenge:
      "Network klinik mau ekspansi telemedicine post-COVID tapi pakai vendor third-party yang revenue share-nya 25%. Dokter ngeluh UX vendor susah, prescription manual scan, dan integrasi ke lab partner gak ada.",
    approach:
      "App native (iOS + Android) dengan WebRTC video call, e-prescription digital signature compliant Permenkes, integrasi ke 3 lab partner besar untuk home lab test, dan pembayaran asuransi (admedika) digital. Backend Hapi.js + PostgreSQL on-prem (regulasi data kesehatan).",
    results: [
      { metric: "Konsultasi/bulan", value: "8.400", note: "dari 1.200 di vendor lama" },
      { metric: "Cost per consult", value: "-67%", note: "vs vendor lama" },
      { metric: "Dokter NPS", value: "82", note: "UX improvement" },
      { metric: "Lab test attach rate", value: "34%", note: "dari konsultasi" },
    ],
    tags: ["Telemedicine", "Healthcare", "WebRTC", "Compliance"],
    accent: "cyan",
  },
  {
    slug: "agent-properti-app",
    service: "suhu-app",
    title: "App Marketing Agent Developer Properti",
    client: "Developer Properti Tier-1",
    industry: "Properti",
    location: "Jakarta + Tangerang",
    year: "2025",
    duration: "10 minggu",
    summary:
      "App khusus marketing agent untuk akses katalog, generate brosur, dan submit booking. Replace 1.200+ Google Drive folder.",
    challenge:
      "Developer punya 1.200+ marketing agent yang akses inventory + brosur via Google Drive. File outdated, agent senior dapet info lebih cepet dari junior, dan submission booking masih via WhatsApp ke project leader.",
    approach:
      "React Native app khusus agent (akses via invite code). Fitur: catalog dengan filter (cluster, tipe, harga, status), generate brosur PDF personalized (foto agent + kontak), submit booking dengan auto-routing ke PL, dan komisi tracker real-time.",
    results: [
      { metric: "Agent adoption", value: "94%", note: "1.130 dari 1.200" },
      { metric: "Booking submit time", value: "<2 menit", note: "dari 25 menit WA" },
      { metric: "Brosur production cost", value: "-Rp 180jt/bulan", note: "vs cetak" },
      { metric: "Booking-to-deal time", value: "-43%", note: "lead routing" },
    ],
    tags: ["Real Estate", "Sales Tool", "B2B", "PDF Generation"],
    accent: "emerald",
  },
  {
    slug: "driver-logistics-app",
    service: "suhu-app",
    title: "Driver App untuk Logistik B2B Last-Mile",
    client: "Logistik B2B Jabodetabek",
    industry: "Logistik",
    location: "Jabodetabek",
    year: "2023",
    duration: "16 minggu",
    summary:
      "App driver untuk perusahaan logistik dengan route optimization, proof of delivery digital, dan COD reconciliation.",
    challenge:
      "Logistik dengan 280 driver kelola pengiriman B2B (consumer goods ke retail) lewat WhatsApp + paper manifest. Route bikin sendiri sopir-driver (inefisien), proof of delivery foto via WhatsApp ke admin (4 jam/hari kerjaan admin), dan COD reconciliation manual.",
    approach:
      "App Flutter untuk driver + admin dashboard web. Route optimization Google Maps API (multi-stop), POD digital (foto + tanda tangan + GPS), COD tracking real-time, dan settlement otomatis ke rekening driver per minggu. Hardware: bonus thermal printer untuk struk.",
    results: [
      { metric: "Delivery/hari per driver", value: "+34%", note: "route optimization" },
      { metric: "Admin reconciliation time", value: "30 menit", note: "dari 4 jam" },
      { metric: "Lost package rate", value: "-78%", note: "POD digital" },
      { metric: "Driver retention", value: "+52%", note: "transparency komisi" },
    ],
    tags: ["Logistics", "Driver App", "Flutter", "Route Optimization"],
    accent: "amber",
  },
  {
    slug: "fintech-wallet-whitelabel",
    service: "suhu-app",
    title: "White Label E-Wallet untuk Koperasi",
    client: "Koperasi Karyawan Korporasi",
    industry: "Fintech",
    location: "Jakarta",
    year: "2025",
    duration: "24 minggu",
    summary:
      "White-label e-wallet untuk koperasi karyawan 8.000+ anggota. Payment, lending, top-up payroll, dan referral B2B partner.",
    challenge:
      "Koperasi karyawan dengan 8.000+ anggota masih kelola simpan pinjam manual via Excel + transfer bank. Payroll cut otomatis bermasalah dengan finance company induk, dan anggota muda ngeluh kayak banking jadul.",
    approach:
      "Native iOS + Android e-wallet dengan flow KYC, saldo + top-up via VA, pinjaman koperasi dengan auto-deduct payroll (integrasi HRIS perusahaan induk), dan partner B2B (alfamart, indomaret, transportation) untuk redeem saldo. Compliance OJK koperasi simpan-pinjam.",
    results: [
      { metric: "Aktif user 6mo", value: "6.840 anggota", note: "86% conversion" },
      { metric: "Saldo terkelola", value: "Rp 28M", note: "dari Rp 4M tahun lalu" },
      { metric: "NPL pinjaman", value: "1.2%", note: "vs avg koperasi 4-6%" },
      { metric: "Anggota baru join", value: "+340%", note: "viral referral" },
    ],
    tags: ["Fintech", "E-Wallet", "Koperasi", "OJK Compliance"],
    accent: "violet",
  },

  // ============================================================
  // SUHU SOFTWARE (10)
  // ============================================================
  {
    slug: "pos-multi-cabang-fnb",
    service: "suhu-software",
    title: "POS Custom Multi-Cabang untuk F&B Chain",
    client: "F&B Chain Casual Dining",
    industry: "Restoran & F&B",
    location: "Jabodetabek + Surabaya",
    year: "2024",
    duration: "16 minggu",
    summary:
      "POS custom multi-cabang dengan KDS (Kitchen Display), inventory real-time, dan dashboard pemilik. Replace Moka karena fitur kurang.",
    challenge:
      "F&B chain 18 cabang pakai Moka POS tapi limit di customization menu (combo, modifier, time-based price), inventory antar cabang gak realtime (stock-out di cabang A padahal cabang B excess), dan reporting butuh export excel manual.",
    approach:
      "Build POS custom desktop (Electron) + KDS tablet + admin web. Menu engine dengan modifier + combo + happy hour pricing, inventory sync per outlet + warehouse pusat dengan auto-reorder, dan dashboard pemilik realtime (penjualan, food cost, labor cost, dll).",
    results: [
      { metric: "Stock-out incident", value: "-87%", note: "auto-reorder" },
      { metric: "Food cost", value: "-4.2 ppt", note: "32% → 27.8%" },
      { metric: "Avg order time", value: "-31%", note: "KDS efficiency" },
      { metric: "Software license saved", value: "Rp 156jt/tahun", note: "vs Moka" },
    ],
    tags: ["POS", "F&B", "Inventory", "Multi-outlet"],
    accent: "amber",
    featured: true,
  },
  {
    slug: "crm-properti-developer",
    service: "suhu-software",
    title: "CRM Khusus Developer Properti",
    client: "Developer Properti Skala Menengah",
    industry: "Properti",
    location: "Surabaya, Jawa Timur",
    year: "2024",
    duration: "18 minggu",
    summary:
      "CRM custom buat lead management + agent + booking properti. Replace Excel + Trello + spreadsheet komisi.",
    challenge:
      "Developer dengan 5 project aktif kelola lead via Excel, agent task via Trello, dan komisi via spreadsheet manual. Lead expired gak ke-follow (avg response time 38 jam), komisi sering wrong calc (banyak komplain agent), dan handover sales-finance manual.",
    approach:
      "CRM custom Next.js + PostgreSQL dengan modul: lead pipeline (status + SLA auto-alert), agent management + territory, booking + dokumen flow, dan komisi calculator otomatis dengan tier + over-target bonus. Integrasi WhatsApp Business untuk notif + log otomatis.",
    results: [
      { metric: "Lead response time", value: "12 menit", note: "dari 38 jam" },
      { metric: "Lead conversion", value: "+167%", note: "fast follow-up" },
      { metric: "Komisi dispute", value: "0", note: "dalam 8 bulan" },
      { metric: "Sales productivity", value: "+78%", note: "deal/agent/bulan" },
    ],
    tags: ["CRM", "Real Estate", "Sales", "Custom"],
    accent: "emerald",
  },
  {
    slug: "erp-klinik-jaringan",
    service: "suhu-software",
    title: "ERP Klinik Jaringan (Inventory + Appointment)",
    client: "Klinik Jaringan 22 cabang",
    industry: "Klinik & Kesehatan",
    location: "Jawa & Bali",
    year: "2023",
    duration: "26 minggu",
    summary:
      "ERP klinik dengan modul inventory obat, appointment, medical record (EMR), dan finance. Compliance regulasi Kemenkes.",
    challenge:
      "Klinik jaringan 22 cabang pakai SIM lama (vendor close source) yang slow + gak ada API. Obat ekspirasi (kerugian Rp 300jt+/tahun) karena gak ada FEFO tracking, antrian chaos, dan medical record per cabang gak terkoneksi.",
    approach:
      "ERP custom Next.js + PostgreSQL multi-tenant per cabang dengan sync ke pusat. Modul: inventory FEFO tracking + auto-procurement, appointment dengan queue digital, EMR dengan template per spesialis, dan finance consolidated. Hosting on-premise compliance UU PDP.",
    results: [
      { metric: "Obat expired loss", value: "-94%", note: "Rp 300jt → Rp 18jt" },
      { metric: "Patient queue time", value: "-58%", note: "digital queue" },
      { metric: "Cross-cabang referral", value: "+220%", note: "EMR connected" },
      { metric: "Finance close time", value: "2 hari", note: "dari 12 hari" },
    ],
    tags: ["ERP", "Healthcare", "EMR", "Compliance"],
    accent: "cyan",
  },
  {
    slug: "dashboard-finance-compliance",
    service: "suhu-software",
    title: "Dashboard Finance Compliance untuk Multi-Finance",
    client: "Perusahaan Pembiayaan (Multifinance)",
    industry: "Finance",
    location: "Jakarta",
    year: "2024",
    duration: "14 minggu",
    summary:
      "Dashboard compliance OJK untuk multifinance: NPF tracking, regulatory reporting, dan risk monitoring real-time.",
    challenge:
      "Multifinance dengan portfolio Rp 1.2T butuh report bulanan ke OJK + Bank Indonesia. Tim compliance 6 orang spend full-time generate report via macro Excel. Sering miss deadline (denda Rp 25jt/bulan) dan data gak konsisten antar report.",
    approach:
      "Build dashboard pakai Next.js + Metabase + connector ke core banking system (Oracle FLEXCUBE). Auto-generation report OJK (format LBU), risk dashboard NPF + COR, dan audit trail untuk auditor. Role-based access control compliance UU PDP.",
    results: [
      { metric: "Report generation", value: "8 menit", note: "dari 4 hari" },
      { metric: "Compliance fine", value: "Rp 0", note: "12 bulan in a row" },
      { metric: "Tim compliance redirect", value: "4 orang", note: "ke risk advisory" },
      { metric: "Audit prep time", value: "-72%", note: "auditor trace ready" },
    ],
    tags: ["Dashboard", "Compliance", "OJK", "Finance"],
    accent: "violet",
  },
  {
    slug: "hr-workflow-automation",
    service: "suhu-software",
    title: "HR Workflow Automation Manufacturer",
    client: "Manufacturer 1.800 karyawan",
    industry: "Manufaktur",
    location: "Cikarang, Bekasi",
    year: "2025",
    duration: "12 minggu",
    summary:
      "Otomasi workflow HR: rekrutmen, onboarding, performance review, dan separation. Replace 7 spreadsheet + email chain.",
    challenge:
      "Manufaktur tier-1 dengan 1.800 karyawan pakai HRIS standar tapi workflow approval (cuti, lembur, promosi, separation) masih via email + paper. Approval cuti rata-rata 4 hari, performance review tahunan butuh 6 minggu, dan onboarding karyawan baru sering miss step.",
    approach:
      "Workflow automation custom di atas HRIS existing (Talenta). Engine BPMN visual: cuti (multi-level approval based on dept), lembur (auto-calculate THP), performance review dengan calibration meeting, dan separation checklist (IT + finance + asset). Integrasi ke email + WhatsApp.",
    results: [
      { metric: "Cuti approval time", value: "3 jam", note: "dari 4 hari" },
      { metric: "Performance review cycle", value: "2 minggu", note: "dari 6 minggu" },
      { metric: "Onboarding completion", value: "100%", note: "checklist enforce" },
      { metric: "HR ops cost", value: "-Rp 420jt/tahun", note: "less manual ops" },
    ],
    tags: ["HR", "Workflow", "Automation", "Manufacturing"],
    accent: "neon",
  },
  {
    slug: "inventory-warehouse-otomotif",
    service: "suhu-software",
    title: "Inventory Management Sparepart Otomotif",
    client: "Distributor Sparepart Otomotif",
    industry: "Otomotif",
    location: "Jakarta, Surabaya, Medan",
    year: "2024",
    duration: "14 minggu",
    summary:
      "Inventory + WMS untuk distributor sparepart dengan 40.000+ SKU. Barcode scanning, picking optimization, dan integrasi B2B order.",
    challenge:
      "Distributor sparepart dengan 40k+ SKU di 3 gudang besar. Stock opname butuh 2 hari shutdown gudang (kerugian Rp 600jt/sesi), picking error 4-6%, dan order B2B dari bengkel partner masih manual via fax + WA.",
    approach:
      "WMS custom dengan barcode scanner Android, picking optimization algorithm, dan cycle counting (gak perlu shutdown). Portal B2B untuk bengkel partner: order online, lihat stock realtime per gudang terdekat, dan delivery tracking. Integrasi ke accounting system existing.",
    results: [
      { metric: "Stock opname downtime", value: "0 jam", note: "cycle counting" },
      { metric: "Picking error rate", value: "0.3%", note: "dari 5.1%" },
      { metric: "B2B order via portal", value: "84%", note: "dari fax/WA" },
      { metric: "Order processing time", value: "-67%", note: "B2B portal" },
    ],
    tags: ["WMS", "Automotive", "B2B Portal", "Barcode"],
    accent: "amber",
  },
  {
    slug: "klinik-gigi-booking-queue",
    service: "suhu-software",
    title: "Booking + Queue System Klinik Gigi",
    client: "Klinik Gigi Jaringan 8 cabang",
    industry: "Klinik & Kesehatan",
    location: "Bandung, Jakarta",
    year: "2024",
    duration: "8 minggu",
    summary:
      "Sistem booking + queue + recall pasien untuk klinik gigi. Replace booking via WA + appointment book paper.",
    challenge:
      "Klinik gigi 8 cabang dengan 32 dokter. Booking masih via WhatsApp ke admin, recall pasien (rutin check-up 6 bulanan) gak ada sistem (lupa banget banyak yang gak balik), dan kelola antrian pakai buku tulis.",
    approach:
      "Web app booking pasien + portal staff. Slot dokter + chair management (klinik biasanya pakai dental chair), auto-recall pasien (6 bulan post-treatment via WA + SMS), digital queue dengan TV display, dan integrasi medical record dental chart.",
    results: [
      { metric: "Recall pasien aktif", value: "+412%", note: "auto-WA reminder" },
      { metric: "Booking-to-show", value: "94%", note: "dari 71%" },
      { metric: "Admin call time", value: "-78%", note: "self-service booking" },
      { metric: "Revenue per chair/hari", value: "+34%", note: "better utilization" },
    ],
    tags: ["Healthcare", "Booking", "Queue", "Dental"],
    accent: "cyan",
  },
  {
    slug: "school-management-system",
    service: "suhu-software",
    title: "School Management System Sekolah Swasta",
    client: "Sekolah Swasta Premium 6 unit",
    industry: "Edukasi",
    location: "Tangerang Selatan",
    year: "2024",
    duration: "22 minggu",
    summary:
      "SMS (School Management System) untuk yayasan dengan 6 sekolah (TK-SMA). Akademik, finance SPP, dan komunikasi orang tua.",
    challenge:
      "Yayasan dengan 6 sekolah pakai 3 sistem berbeda (TK pakai SaaS, SD-SMP-SMA pakai built-in lawas, finance terpisah). Komunikasi orang tua via WA grup 60+ orang. Tagihan SPP banyak yang miss (telat) tapi sistem reminder manual.",
    approach:
      "SMS custom unified untuk 6 unit dengan fitur: akademik (rapor, absensi, jadwal), finance (SPP, ekskul, kegiatan + payment online), dan parent app (broadcast + personal message). Auto-reminder SPP H-7, H-3, H-0, H+1 + auto-pause akun siswa kalau >3 bulan.",
    results: [
      { metric: "SPP on-time rate", value: "96%", note: "dari 74%" },
      { metric: "Orang tua app usage", value: "89%", note: "DAU" },
      { metric: "Admin time/sekolah", value: "-58%", note: "auto-reminder" },
      { metric: "Yayasan cash flow", value: "+Rp 1.8M", note: "improved SPP timing" },
    ],
    tags: ["Education", "SMS", "Multi-unit", "Parent App"],
    accent: "violet",
  },
  {
    slug: "tour-package-management",
    service: "suhu-software",
    title: "Tour Package Management untuk Travel Agent",
    client: "Tour Agent Outbound",
    industry: "Travel & Wisata",
    location: "Jakarta",
    year: "2024",
    duration: "10 minggu",
    summary:
      "Sistem manage tour package complex (multi-destinasi, fluctuating cost vendor, manage 200+ booking parallel) untuk outbound travel.",
    challenge:
      "Travel agent outbound dengan paket Eropa, Korea, Jepang. Cost dari vendor (hotel, transport, guide) fluktuatif, tour leader manage roomming + manifest manual, dan kalkulasi margin ribet karena multi-currency.",
    approach:
      "Web app dengan modul: package builder (drag-drop multi-day itinerary), cost calculator multi-currency (live rate), booking + roomming manager, tour leader app untuk manifest + emergency contact, dan financial reporting per tour profitability.",
    results: [
      { metric: "Package quote time", value: "12 menit", note: "dari 4 jam" },
      { metric: "Booking capacity", value: "+78%", note: "same team size" },
      { metric: "Tour profitability visibility", value: "100%", note: "per tour" },
      { metric: "Currency loss", value: "-Rp 240jt/tahun", note: "live hedging info" },
    ],
    tags: ["Travel", "Tour Management", "Multi-currency", "B2B"],
    accent: "rose",
  },
  {
    slug: "direct-selling-reseller",
    service: "suhu-software",
    title: "Reseller Management Direct Selling MLM",
    client: "Skincare Direct Selling",
    industry: "Direct Selling",
    location: "Jakarta",
    year: "2025",
    duration: "16 minggu",
    summary:
      "Sistem manage 12.000+ reseller MLM dengan binary tree, komisi multi-level, dan e-wallet poin reward.",
    challenge:
      "Direct selling skincare punya 12.000 reseller dengan struktur MLM binary. Sistem lama (hosted vendor) gak scalable, lookup posisi reseller butuh 30+ detik, komisi calculation lambat (3 hari per cycle), dan kalau ada bug kerusakan trust massive.",
    approach:
      "Build custom MLM management system dengan algoritma binary tree optimized (PostgreSQL recursive CTE + caching). Komisi calculator: direct, pairing, generation, dan leadership bonus dengan audit trail. E-wallet internal untuk poin + withdraw rupiah. Audit log compliance.",
    results: [
      { metric: "Reseller lookup time", value: "<200ms", note: "dari 30 detik" },
      { metric: "Komisi calc cycle", value: "4 jam", note: "dari 3 hari" },
      { metric: "Komisi dispute", value: "-94%", note: "audit trail" },
      { metric: "Reseller satisfaction", value: "NPS 71", note: "post-launch survey" },
    ],
    tags: ["MLM", "Direct Selling", "Binary Tree", "E-wallet"],
    accent: "rose",
  },

  // ============================================================
  // SUHU SEO (10)
  // ============================================================
  {
    slug: "seo-developer-bsd",
    service: "suhu-seo",
    title: "SEO Developer Properti BSD — Page 1 Google 18 Bulan",
    client: "Developer Township Tangerang",
    industry: "Properti",
    location: "BSD City, Tangerang",
    year: "2023-2024",
    duration: "18 bulan",
    summary:
      "Capai page 1 Google untuk 47 keyword properti BSD termasuk 'rumah BSD', 'cluster BSD murah', 'apartemen BSD'.",
    challenge:
      "Developer launching cluster baru di BSD tapi domain authority masih DA 18. Kompetitor 99.co, Rumah123, dan Pinhome dominate page 1 untuk keyword 'rumah BSD'. Content blog cuma 12 artikel low-effort.",
    approach:
      "Audit teknis komplit (fix Core Web Vitals, schema markup property + LocalBusiness, internal linking pillar-cluster). Content strategy: 1 pillar 'rumah BSD' + 32 cluster article (per cluster nama). Backlink outreach ke 28 portal properti + media regional. Long-form content 2.500+ kata.",
    results: [
      { metric: "Keyword page 1", value: "47 keyword", note: "dari 3" },
      { metric: "Organic traffic", value: "+540%", note: "18 bulan" },
      { metric: "Domain Authority", value: "DA 42", note: "dari 18" },
      { metric: "Organic leads/bulan", value: "320", note: "dari 28" },
    ],
    tags: ["Local SEO", "Real Estate", "Content", "Long-form"],
    accent: "emerald",
    featured: true,
  },
  {
    slug: "seo-klinik-jakarta",
    service: "suhu-seo",
    title: "Local SEO Klinik Kecantikan Jakarta",
    client: "Klinik Kecantikan Premium 4 cabang",
    industry: "Klinik & Kesehatan",
    location: "Jakarta",
    year: "2024",
    duration: "12 bulan",
    summary:
      "Google Business Profile + local SEO ke 4 cabang klinik. Top 3 maps result untuk 'klinik kecantikan [area]'.",
    challenge:
      "Klinik kecantikan premium pakai ads doang (Rp 250jt/bulan) tapi gak ada organic moat. GBP 4 cabang masih default (foto sedikit, review 4.2, no posts), dan kompetitor besar (Erha, ZAP) dominate keyword utama.",
    approach:
      "GMB optimization total (foto, posts mingguan, Q&A, review management). Local content per cabang dengan landing page area-specific (Kemang, Senopati, Pondok Indah, Kelapa Gading). Citation building 60+ direktori. Review acquisition flow post-treatment via WhatsApp.",
    results: [
      { metric: "GBP rank avg", value: "Top 2", note: "dari Top 8-12" },
      { metric: "GBP profile views", value: "+340%", note: "12 bulan" },
      { metric: "Direction request", value: "+218%", note: "GBP" },
      { metric: "Walk-in organic", value: "+89%", note: "vs ads-only" },
    ],
    tags: ["Local SEO", "GMB", "Klinik", "Multi-location"],
    accent: "rose",
  },
  {
    slug: "seo-travel-umroh",
    service: "suhu-seo",
    title: "SEO Nasional Travel Umroh",
    client: "Travel Umroh Tier-2",
    industry: "Travel & Wisata",
    location: "Indonesia (target jamaah)",
    year: "2023-2024",
    duration: "14 bulan",
    summary:
      "SEO nasional untuk travel umroh. Capai page 1 keyword 'biaya umroh 2024', 'paket umroh murah', 'travel umroh terpercaya'.",
    challenge:
      "Travel umroh tier-2 (omzet Rp 80M/tahun) compete dengan brand established (NRA, Maktour). Content masih thin (300-500 kata), gak ada schema FAQ untuk featured snippet, dan trust signal weak (kompetitor punya media coverage).",
    approach:
      "Content overhaul: pillar 'umroh 2024' + 60 supporting article (biaya, syarat, FAQ, tips). FAQ schema markup untuk capture People Also Ask. Authority building: testimonial jamaah video, sertifikasi Kemenag visible, dan PR outreach ke 12 media muslim.",
    results: [
      { metric: "Featured snippet", value: "23 snippet", note: "PAA + FS" },
      { metric: "Top 3 keyword umroh", value: "18 keyword", note: "high-intent" },
      { metric: "Organic booking", value: "+178%", note: "dari conversion" },
      { metric: "CAC reduction", value: "-44%", note: "vs ads-heavy" },
    ],
    tags: ["National SEO", "Travel", "Umroh", "FAQ Schema"],
    accent: "amber",
  },
  {
    slug: "seo-marketplace-properti",
    service: "suhu-seo",
    title: "Technical SEO Migration Marketplace Properti",
    client: "Marketplace Properti Indonesia",
    industry: "Properti",
    location: "Indonesia",
    year: "2024",
    duration: "6 bulan",
    summary:
      "Technical SEO untuk migrasi platform marketplace properti dengan 280rb URL. Zero traffic drop, +28% organic dalam 90 hari.",
    challenge:
      "Marketplace properti dengan 280rb URL listing aktif lagi migrasi dari custom CMS lama ke Next.js. Risk: kalau migrasi gak rapi, traffic SEO yang Rp 8M/bulan equivalent bisa hilang. Kompetitor (Rumah123, 99.co) lebih established.",
    approach:
      "Pre-migration audit komplit: URL mapping 1:1, redirect 301 untuk 280rb URL, schema markup property listings, dan sitemap dinamis. Internal linking strategi (PageRank flow), Core Web Vitals tuning. Soft launch ke 5% traffic untuk validasi, monitor 2 minggu sebelum full.",
    results: [
      { metric: "Traffic drop migrasi", value: "0%", note: "vs avg 30-50% loss" },
      { metric: "Organic growth 90d", value: "+28%", note: "vs baseline" },
      { metric: "Indexed pages", value: "278.400", note: "dari 312rb (cleanup)" },
      { metric: "Core Web Vitals pass", value: "94%", note: "dari 41%" },
    ],
    tags: ["Technical SEO", "Migration", "Enterprise", "Marketplace"],
    accent: "cyan",
  },
  {
    slug: "seo-dealer-mobil-bekas",
    service: "suhu-seo",
    title: "SEO Dealer Mobil Bekas Regional",
    client: "Showroom Mobil Bekas Multi-cabang",
    industry: "Otomotif",
    location: "Surabaya, Malang, Jember",
    year: "2024",
    duration: "10 bulan",
    summary:
      "Local SEO untuk dealer mobil bekas dengan 800+ unit inventory dinamis. Page 1 untuk 'mobil bekas [model] [kota]'.",
    challenge:
      "Dealer mobil bekas dengan 800+ unit di 3 kota. Inventory berubah harian, gak ada landing page per unit (semua di Tokopedia + OLX), dan dependent banget sama platform iklan. Kompetitor lokal udah punya website mandiri.",
    approach:
      "Custom website dengan dynamic landing page per unit (auto-generated dari inventory). Schema Product + Vehicle markup. Local SEO per kota dengan GBP optimized. Internal linking dari pillar model ke unit detail. Image SEO (alt text + WebP + lazy load).",
    results: [
      { metric: "Keyword [model][kota]", value: "184 keyword", note: "top 3" },
      { metric: "Organic visit", value: "+612%", note: "10 bulan" },
      { metric: "Inquiry direct (non-ads)", value: "62%", note: "dari 18%" },
      { metric: "Platform fee saved", value: "Rp 320jt/tahun", note: "OLX commission" },
    ],
    tags: ["Local SEO", "Automotive", "Dynamic Pages", "Schema"],
    accent: "amber",
  },
  {
    slug: "seo-restoran-fine-dining",
    service: "suhu-seo",
    title: "SEO Restoran Fine Dining Reservation",
    client: "Restoran Fine Dining Jakarta",
    industry: "Restoran & F&B",
    location: "Jakarta",
    year: "2024",
    duration: "8 bulan",
    summary:
      "SEO untuk restoran fine dining dengan target reservasi langsung. Page 1 untuk 'fine dining Jakarta', 'best restaurant Jakarta'.",
    challenge:
      "Restoran fine dining bagus banget (rating 4.9 di Google) tapi reservasi 70% via OpenTable + Chope yang potong fee 8-12%. Organic search invisible (chef awards gak ke-google), dan content SEO masih minimal.",
    approach:
      "Content strategy: chef story, sourcing story, behind the scene, dan FAQ tasting menu. Schema Restaurant + Menu + Review. PR outreach ke 8 food media untuk authoritative backlinks. Image SEO komplit (food photography dengan alt text deskriptif).",
    results: [
      { metric: "Top 3 'fine dining Jakarta'", value: "Achieved", note: "+ 14 keyword lain" },
      { metric: "Direct reservation", value: "78%", note: "dari 30%" },
      { metric: "OpenTable fee saved", value: "Rp 480jt/tahun", note: "commission" },
      { metric: "Avg ticket size organic", value: "+22%", note: "vs OpenTable user" },
    ],
    tags: ["F&B SEO", "Restaurant", "Local", "Reservation"],
    accent: "rose",
  },
  {
    slug: "seo-sekolah-internasional",
    service: "suhu-seo",
    title: "SEO Sekolah Internasional Bilingual",
    client: "Sekolah Internasional Tangerang",
    industry: "Edukasi",
    location: "Tangerang Selatan",
    year: "2024",
    duration: "10 bulan",
    summary:
      "SEO bilingual (ID + EN) untuk sekolah internasional. Target expat parent + Indo upper middle class.",
    challenge:
      "Sekolah internasional dengan tuition Rp 200-400jt/tahun butuh inbound dari expat parent (cari di EN keyword) + Indo upper-middle (ID keyword). Site lama monolingual (ID only), expat audience hilang ke kompetitor Singapore school yang bilingual.",
    approach:
      "Bilingual SEO setup: hreflang tags, dedicated EN content (gak translated), content strategy per persona (admission FAQ, curriculum comparison Cambridge vs IB). Authoritative content tentang Indonesian education landscape untuk expat parent.",
    results: [
      { metric: "Expat parent inquiry", value: "+340%", note: "EN content" },
      { metric: "Keyword EN top 5", value: "32 keyword", note: "expat-focus" },
      { metric: "Admission application", value: "+87%", note: "12 bulan YoY" },
      { metric: "Cost per inquiry", value: "-78%", note: "vs Facebook Ads expat" },
    ],
    tags: ["Bilingual SEO", "Education", "Expat", "Hreflang"],
    accent: "violet",
  },
  {
    slug: "seo-pinjaman-online-legal",
    service: "suhu-seo",
    title: "SEO P2P Lending OJK-Licensed",
    client: "P2P Lending Tier-2",
    industry: "Finance",
    location: "Jakarta",
    year: "2024",
    duration: "12 bulan",
    summary:
      "SEO untuk P2P lending OJK-licensed dengan compliance content. Differentiate dari pinjol ilegal di SERP.",
    challenge:
      "P2P lending OJK-licensed terus dirugikan brand-wise karena 'pinjaman online' di search dominated by pinjol ilegal + content cluster bad practice. User search dengan intent legitimate butuh educated tentang difference legal vs illegal.",
    approach:
      "Content strategy authoritative: 80+ article edukatif 'cara cek pinjol legal', 'list pinjol legal OJK 2024 updated monthly', 'difference legal vs ilegal'. Schema FinancialService + FAQPage. PR outreach ke 12 media keuangan untuk authority. Disclosure compliance OJK visible.",
    results: [
      { metric: "Position avg 'pinjol legal'", value: "1.4", note: "Top 1-2 stable" },
      { metric: "Branded search", value: "+520%", note: "12 bulan" },
      { metric: "Loan application", value: "+178%", note: "organic" },
      { metric: "NPL rate organic users", value: "1.8%", note: "vs ads users 3.4%" },
    ],
    tags: ["Fintech SEO", "Compliance", "Educational", "YMYL"],
    accent: "violet",
  },
  {
    slug: "seo-vape-ecommerce",
    service: "suhu-seo",
    title: "SEO E-commerce Vape (Grey Niche)",
    client: "Vape Store E-commerce",
    industry: "Lifestyle",
    location: "Indonesia",
    year: "2024",
    duration: "9 bulan",
    summary:
      "SEO untuk vape e-commerce (grey area, Meta Ads banned). Pure organic growth + content authority strategy.",
    challenge:
      "Vape e-commerce gak bisa pakai Meta Ads (banned policy) + Google Ads terbatas (restricted). 100% growth depend on SEO + komunitas. Konten masih thin (deskripsi vendor copy-paste), kompetitor luar negeri (US) rank pakai backlink agresif.",
    approach:
      "Content: pillar per category (pod, mod, juice, accessory) + 200+ product review long-form. Buyer's guide per intent (beginner, MTL vs DTL, low-power vs high-power). Community-driven backlinks dari forum vape lokal. E-A-T improvement: author bio, review credentials.",
    results: [
      { metric: "Organic revenue share", value: "84%", note: "dari 38%" },
      { metric: "Avg order value organic", value: "+47%", note: "vs paid (banned)" },
      { metric: "Domain Rating", value: "DR 38", note: "dari 9" },
      { metric: "Top 3 keyword", value: "78 keyword", note: "money + buying" },
    ],
    tags: ["E-commerce SEO", "Grey Niche", "Content Authority", "Long-form"],
    accent: "neon",
  },
  {
    slug: "seo-konsultan-pajak",
    service: "suhu-seo",
    title: "SEO B2B Konsultan Pajak untuk SME",
    client: "Konsultan Pajak Independent",
    industry: "Professional Services",
    location: "Jakarta + remote nasional",
    year: "2024",
    duration: "8 bulan",
    summary:
      "SEO untuk konsultan pajak target SME Indonesia. Page 1 untuk 'jasa konsultan pajak [jenis bisnis]'.",
    challenge:
      "Konsultan pajak independent yang fokus SME compete dengan firm besar (Deloitte, KPMG, EY) + portal generic (klikpajak, mekari). Site lama 8 page, no blog, dan founder gak punya brand authority online.",
    approach:
      "Content strategy founder-led: 60+ article jawab pertanyaan SME yang spesifik (PPh 21 freelance, PPh 25 import barang, PPN ekspor jasa). LinkedIn content amplification ke 12k+ pengusaha SME audience. Lead magnet: kalkulator pajak SME.",
    results: [
      { metric: "Organic lead/bulan", value: "184", note: "dari 6" },
      { metric: "Conversion to client", value: "11%", note: "high-intent organic" },
      { metric: "Founder LinkedIn follower", value: "+8.400", note: "thought leadership" },
      { metric: "Revenue from organic", value: "Rp 2.1M/bulan", note: "client value avg" },
    ],
    tags: ["B2B SEO", "Professional Services", "Long-tail", "Lead Gen"],
    accent: "violet",
  },

  // ============================================================
  // SUHU ADS (10)
  // ============================================================
  {
    slug: "ads-property-launch-roas-5x",
    service: "suhu-ads",
    title: "Property Launch Meta Ads — ROAS 5.2x dalam 90 Hari",
    client: "Developer Cluster BSD",
    industry: "Properti",
    location: "Tangerang, Banten",
    year: "2024",
    duration: "3 bulan",
    summary:
      "Launching cluster baru via Meta + Google Ads. Sold-out 78 unit dalam 90 hari dengan ad spend Rp 1.8M.",
    challenge:
      "Developer launching cluster baru (140 unit) dengan budget marketing Rp 2.5M. Lokasi premium (harga Rp 1.8-3.4M/unit) tapi awareness rendah. Konversi dari online ads ke booking fee historically lemah (banyak leads tapi gak qualified).",
    approach:
      "Funnel jelas: cold awareness (video walkthrough + neighbourhood story) → mid (virtual tour + floor plan download) → warm (form survey + booking fee promo). Audience: BSD parent residents + look-alike booking fee 1%. Landing page A/B test 3 varian. Daily creative refresh 2 minggu pertama.",
    results: [
      { metric: "ROAS Meta+Google", value: "5.2x", note: "blended" },
      { metric: "Booking fee qualified", value: "112", note: "dari 78 sold" },
      { metric: "Cost per booking fee", value: "Rp 4.8jt", note: "ticket size Rp 2-3M" },
      { metric: "Unit sold 90 hari", value: "78/140", note: "phase 1 sold out" },
    ],
    tags: ["Meta Ads", "Property", "Launch", "ROAS"],
    accent: "emerald",
    featured: true,
  },
  {
    slug: "ads-klinik-lasik-google",
    service: "suhu-ads",
    title: "Google Ads LASIK — CPL Rp 280rb",
    client: "Klinik LASIK Jakarta",
    industry: "Klinik & Kesehatan",
    location: "Jakarta",
    year: "2024",
    duration: "12 bulan",
    summary:
      "Performance Max + Search Ads untuk LASIK clinic. Cost per qualified lead Rp 280rb (ticket Rp 25jt/mata).",
    challenge:
      "Klinik LASIK premium dengan service price Rp 25-50jt/mata. Kompetitor utama (JEC, KMN) dominate Google Ads dengan budget besar. CPL klinik historical Rp 850rb, qualified conversion rate ke booking 12%, gak ekonomis.",
    approach:
      "Restructure campaign: Performance Max untuk discovery + Search dengan tight keyword match. Audience layering (kompetitor brand + LASIK research intent). Landing page khusus per ad group (Performance Max berbeda dengan Search). Bid strategy: tCPA per ad group dengan minimum 3 minggu learning.",
    results: [
      { metric: "CPL qualified", value: "Rp 280rb", note: "dari Rp 850rb" },
      { metric: "Lead-to-booking", value: "28%", note: "dari 12%" },
      { metric: "ROAS", value: "8.4x", note: "ticket size Rp 25-50jt" },
      { metric: "Market share Jakarta", value: "+18% est", note: "kompetitor brand search" },
    ],
    tags: ["Google Ads", "Healthcare", "High Ticket", "Performance Max"],
    accent: "cyan",
  },
  {
    slug: "ads-fnb-tiktok-chain",
    service: "suhu-ads",
    title: "TikTok Ads Coffee Chain Loyalty App",
    client: "Coffee Chain 50+ outlet",
    industry: "Restoran & F&B",
    location: "Indonesia (12 kota)",
    year: "2024",
    duration: "6 bulan",
    summary:
      "TikTok Ads push loyalty app install + first order. CPI Rp 4.200, conversion to first order 64%.",
    challenge:
      "Coffee chain udah launch loyalty app tapi install slow (organic only). Target Gen-Z + young millennial. Meta Ads CPI tinggi (Rp 18rb), TikTok belum dicoba properly (cuma boost organic).",
    approach:
      "Native TikTok creative dengan UGC influencer mid-tier (10-100k follower, 24 creator). Format Spark Ads (boost organic UGC) + In-feed Ads dengan AppEvents tracking. Geo-targeting per kota dengan outlet terdekat highlighted di copy. Daily optimization 4 minggu pertama.",
    results: [
      { metric: "CPI TikTok", value: "Rp 4.200", note: "vs Meta Rp 18rb" },
      { metric: "App install 6mo", value: "284.000", note: "TikTok only" },
      { metric: "Install-to-order", value: "64%", note: "first order" },
      { metric: "ROAS blended", value: "4.7x", note: "incl repeat orders" },
    ],
    tags: ["TikTok Ads", "F&B", "App Install", "UGC"],
    accent: "rose",
  },
  {
    slug: "ads-edtech-leadgen",
    service: "suhu-ads",
    title: "EdTech Leadgen — Trial Class Funnel",
    client: "EdTech Bahasa Asing",
    industry: "Edukasi",
    location: "Indonesia",
    year: "2024",
    duration: "9 bulan",
    summary:
      "Meta + Google Ads untuk EdTech sign-up trial class. CPL Rp 32rb, trial-to-paid 21%, LTV Rp 4.2jt.",
    challenge:
      "EdTech bahasa asing dengan paket Rp 2.5-5jt/level. Awareness banyak tapi conversion dari ads ke paid susah. Funnel langsung 'beli paket' gak work, trial class flow ada tapi CPL historical Rp 95rb.",
    approach:
      "Funnel restructure: trial class booking sebagai conversion utama, paid course retargeting after trial. Creative menggunakan student testimonial video format pendek (15-30 detik). Audience: lookalike trial booker 1-3%, exclusion existing paid student. Whatsapp Business automation untuk trial reminder.",
    results: [
      { metric: "CPL trial", value: "Rp 32rb", note: "dari Rp 95rb" },
      { metric: "Trial-to-paid", value: "21%", note: "dari 8%" },
      { metric: "LTV avg", value: "Rp 4.2jt", note: "12 bulan" },
      { metric: "Ad spend ROAS", value: "12.8x", note: "blended LTV" },
    ],
    tags: ["EdTech", "Lead Gen", "Funnel", "Trial Class"],
    accent: "violet",
  },
  {
    slug: "ads-logam-mulia-google",
    service: "suhu-ads",
    title: "Google Ads Logam Mulia (Sensitive Vertical)",
    client: "Investasi Logam Mulia",
    industry: "Finance",
    location: "Indonesia",
    year: "2024",
    duration: "10 bulan",
    summary:
      "Google Ads untuk investasi emas batangan dengan compliance content + funnel education-first. ROAS 6.8x.",
    challenge:
      "Investasi emas batangan online dengan target audience yang skeptical (banyak scam fintech). Google Ads compliance untuk financial vertical strict (Beberapa keyword restricted). Trust signal harus visible, dan ad copy compliance ketat.",
    approach:
      "Education-first funnel: cold ke article 'investasi emas pemula' (high-intent informational), warm ke product page dengan trust signals (sertifikat Antam, lisensi Bappebti). Smart Bidding tROAS dengan minimum data 60 days. Creative compliance reviewed legal.",
    results: [
      { metric: "ROAS", value: "6.8x", note: "blended ROAS" },
      { metric: "First purchase conversion", value: "8.4%", note: "dari education traffic" },
      { metric: "Repeat purchase", value: "62%", note: "12 bulan retention" },
      { metric: "Avg ticket pertama", value: "Rp 4.8jt", note: "0.5-1g first buy" },
    ],
    tags: ["Google Ads", "Finance", "Compliance", "Education-led"],
    accent: "amber",
  },
  {
    slug: "ads-healthcare-app-performance",
    service: "suhu-ads",
    title: "Healthcare App Performance Marketing Multi-Platform",
    client: "Healthcare Super App",
    industry: "Klinik & Kesehatan",
    location: "Indonesia",
    year: "2024-2025",
    duration: "14 bulan",
    summary:
      "Multi-platform performance ads (Meta + Google + TikTok) untuk healthcare app. CPI Rp 8.400 blended, MAU growth 4x.",
    challenge:
      "Healthcare super app (telemedicine + apotek + lab) Series B startup butuh scale dari 280k MAU ke 1M MAU dalam 12 bulan. Budget Rp 8M/bulan. Kompetitor (Halodoc, Alodokter, GoodDoctor) dominate brand search.",
    approach:
      "Platform allocation strategy: Meta untuk awareness + Lookalike (40%), Google Search untuk high-intent symptom search (30%), TikTok untuk young user acquisition (20%), App Store Ads (10%). Creative per audience: parent-targeted vs young adult. MMP setup AppsFlyer untuk proper attribution.",
    results: [
      { metric: "MAU growth", value: "4.1x", note: "280k → 1.15M" },
      { metric: "CPI blended", value: "Rp 8.400", note: "industry avg Rp 24rb" },
      { metric: "D30 retention", value: "38%", note: "dari 18% pre-optimization" },
      { metric: "Consult per MAU", value: "+67%", note: "monetization improvement" },
    ],
    tags: ["Healthcare", "App Performance", "Multi-platform", "Scale"],
    accent: "emerald",
  },
  {
    slug: "ads-dealer-mobil-leadgen",
    service: "suhu-ads",
    title: "Otomotif Dealer Leadgen Multi-City",
    client: "Dealer Mobil Multi-cabang",
    industry: "Otomotif",
    location: "Jabodetabek + 5 kota",
    year: "2024",
    duration: "12 bulan",
    summary:
      "Meta Ads leadgen untuk dealer mobil baru. CPL Rp 38rb, test drive to sales 18%, +220 unit sold dalam 12 bulan.",
    challenge:
      "Dealer mobil network dengan 12 cabang di 6 kota. Lead via Facebook Ads tipe leadform tapi quality jelek (banyak fake/test data), lead routing manual ke cabang terdekat sering miss (lead expire), dan attribution dari ads ke unit sold gak jelas.",
    approach:
      "Funnel restructure: pakai instant form dengan validation (no kosong, format HP benar), kualifikasi pre-filling lokasi otomatis, dan CRM auto-routing ke cabang terdekat (geo-fence). Creative per model + per kota. Conversions API setup untuk track until sales closed di showroom.",
    results: [
      { metric: "CPL qualified", value: "Rp 38rb", note: "dari Rp 110rb" },
      { metric: "Lead to test drive", value: "44%", note: "dari 18%" },
      { metric: "Test drive to sales", value: "18%", note: "industry avg 12%" },
      { metric: "Unit sold attributed", value: "224", note: "12 bulan" },
    ],
    tags: ["Meta Ads", "Automotive", "Lead Gen", "Multi-city"],
    accent: "cyan",
  },
  {
    slug: "ads-fine-dining-local",
    service: "suhu-ads",
    title: "Local Awareness Ads Fine Dining Restoran",
    client: "Restoran Fine Dining Boutique",
    industry: "Restoran & F&B",
    location: "Jakarta Selatan",
    year: "2025",
    duration: "6 bulan",
    summary:
      "Hyperlocal Meta + Google Ads untuk drive direct reservation ke fine dining boutique. ROAS 7.4x dalam 6 bulan.",
    challenge:
      "Restoran fine dining boutique (40 cover/malam) di SCBD baru buka. Foot traffic minimal, dependent OpenTable + Chope (commission 8-12%). Audience target: middle-upper professional di SCBD/Kuningan, range usia 28-50.",
    approach:
      "Hyperlocal targeting: radius 5km SCBD + Kuningan + Senopati office buildings dengan office-hour timing. Format: video chef story (15s) + carousel signature dish + reservation conversion (direct WhatsApp + form). Audience exclusion: existing customer (sudah datang).",
    results: [
      { metric: "Direct reservation", value: "82%", note: "dari OpenTable 30%" },
      { metric: "ROAS", value: "7.4x", note: "blended" },
      { metric: "New customer/bulan", value: "+340%", note: "first-time visit" },
      { metric: "Commission saved", value: "Rp 280jt/tahun", note: "OpenTable" },
    ],
    tags: ["Local Ads", "Fine Dining", "Direct Reservation", "Hyperlocal"],
    accent: "rose",
  },
  {
    slug: "ads-vape-broad-awareness",
    service: "suhu-ads",
    title: "Awareness Campaign Vape Brand (Compliant)",
    client: "Vape Brand Premium",
    industry: "Lifestyle",
    location: "Indonesia",
    year: "2024",
    duration: "8 bulan",
    summary:
      "Awareness campaign vape (compliance challenge). YouTube + influencer ads dengan content non-product. Brand search +480%.",
    challenge:
      "Vape brand premium gak bisa pakai Meta/Google Search Ads (banned + restricted). YouTube Ads boleh tapi creative banget restrict (no product showcase). Brand awareness rendah, organic search dominated by competitor lebih established.",
    approach:
      "YouTube Ads dengan creative lifestyle (no product close-up): bumper ads 6 detik focus brand element + community content. Influencer marketing (mid-tier non-tobacco) dengan brand integration soft. Programmatic display ke lifestyle audience. Brand search retargeting.",
    results: [
      { metric: "Brand search volume", value: "+480%", note: "8 bulan" },
      { metric: "YouTube view rate", value: "42%", note: "industry avg 15-20%" },
      { metric: "Direct site traffic", value: "+340%", note: "brand recall" },
      { metric: "Market share online", value: "+12 ppt est", note: "vs kompetitor" },
    ],
    tags: ["YouTube Ads", "Awareness", "Compliance", "Influencer"],
    accent: "neon",
  },
  {
    slug: "ads-game-user-acquisition",
    service: "suhu-ads",
    title: "Mobile Game UA Campaign — CPI Sub-Dollar",
    client: "Casual Game Publisher",
    industry: "Game Online",
    location: "Indonesia + SEA",
    year: "2024",
    duration: "9 bulan",
    summary:
      "Mobile game user acquisition multi-platform. CPI $0.42 (Rp 6.500), D7 retention 28%, monetization payback 6 bulan.",
    challenge:
      "Casual game publisher launch game baru genre puzzle. Budget UA $50k/bulan untuk Indonesia + SEA. CPI historical $1.20 dengan retention D7 cuma 18%. Monetization model IAP + IAA hybrid. Butuh CPI turun + retention naik supaya payback period sehat.",
    approach:
      "Multi-platform: Meta (broad geo + lookalike + retargeting), Google Ads UAC (auto-bidding), TikTok untuk young audience, Unity Ads + AppLovin untuk gamer-native. Creative iteration weekly (8-12 varian) dengan A/B winner. AppsFlyer + Helium SDK setup. Audience tier per LTV segment.",
    results: [
      { metric: "CPI", value: "$0.42", note: "Rp 6.500" },
      { metric: "D7 retention", value: "28%", note: "dari 18%" },
      { metric: "ARPDAU", value: "$0.18", note: "casual game benchmark" },
      { metric: "Payback period", value: "6 bulan", note: "dari 14 bulan" },
    ],
    tags: ["Game UA", "Multi-platform", "Mobile", "Retention"],
    accent: "violet",
  },

  // ============================================================
  // SUHU SOCMED (10)
  // ============================================================
  {
    slug: "socmed-fnb-rebrand-tiktok",
    service: "suhu-socmed",
    title: "F&B Chain Rebrand di IG + TikTok",
    client: "F&B Casual Dining Chain",
    industry: "Restoran & F&B",
    location: "Jabodetabek",
    year: "2024",
    duration: "12 bulan",
    summary:
      "Rebrand IG + TikTok untuk F&B chain. Follower 32k → 480k dalam 12 bulan, viral hit 12 juta views.",
    challenge:
      "F&B casual dining 16 cabang dengan IG 32k follower (3 tahun stuck). Content masih foto menu still life + caption generic, engagement rate 0.8%. Owner pengen reposisi brand lebih playful + targeting Gen-Z, tapi tim sosmed internal cuma 1 orang.",
    approach:
      "Rebrand visual tone (more playful, color palette warmer, in-store moment focus). Content split: IG (50% lifestyle, 30% menu, 20% promo) + TikTok (90% behind the scene + relate content, 10% promo). Production weekly shoot, posting daily TikTok + 4x/week IG.",
    results: [
      { metric: "IG follower", value: "480.000", note: "dari 32k" },
      { metric: "TikTok follower", value: "210.000", note: "akun baru" },
      { metric: "Viral hit", value: "12 juta views", note: "1 video, organic" },
      { metric: "Foot traffic outlets", value: "+47%", note: "12 bulan YoY" },
    ],
    tags: ["IG", "TikTok", "F&B", "Rebrand"],
    accent: "rose",
    featured: true,
  },
  {
    slug: "socmed-beauty-brand",
    service: "suhu-socmed",
    title: "Beauty Brand Lokal IG + TikTok Growth",
    client: "Skincare D2C Indonesia",
    industry: "Beauty & Wellness",
    location: "Indonesia",
    year: "2024",
    duration: "10 bulan",
    summary:
      "Content + community untuk skincare D2C lokal. UGC ecosystem dengan 240+ micro creator + viral 'before-after'.",
    challenge:
      "Skincare D2C brand 2-tahun, IG 84k follower tapi engagement 1.2% (stale). Kompetitor baru bermunculan dengan growth rapid via TikTok. Founder pengen aktivasi UGC tapi gak tau cara orchestrate scale.",
    approach:
      "UGC ecosystem: micro creator (5-50k follower) dengan free product + komisi affiliate. Content pillar: ingredient education, before-after testimoni, FAQ derma. TikTok daily posting dengan format relate beauty pain points. IG: feed curated + reels viral focus.",
    results: [
      { metric: "IG follower", value: "+420%", note: "84k → 437k" },
      { metric: "TikTok follower", value: "180.000", note: "from scratch" },
      { metric: "UGC creator aktif", value: "247", note: "monthly aktif" },
      { metric: "Revenue from socmed", value: "+340%", note: "attributed sales" },
    ],
    tags: ["Beauty", "UGC", "TikTok", "Community"],
    accent: "rose",
  },
  {
    slug: "socmed-properti-developer",
    service: "suhu-socmed",
    title: "Properti Developer IG + LinkedIn Strategy",
    client: "Developer Mixed-use Skala Besar",
    industry: "Properti",
    location: "Jakarta",
    year: "2024",
    duration: "14 bulan",
    summary:
      "Dual-platform strategy: IG (residential buyer) + LinkedIn (investor + B2B partner). Holistic brand presence developer.",
    challenge:
      "Developer mixed-use besar dengan project residential + commercial. IG cuma posting brosur unit (gak engaging), LinkedIn gak ada akun aktif. Investor B2B inquiry gak ada channel digital, semuanya offline via broker.",
    approach:
      "IG strategy: 60% lifestyle + neighbourhood + happy resident testimony, 30% unit feature, 10% promo. LinkedIn: thought leadership CEO + investor pitch deck breakdown + project milestone. Content production studio in-house, talent: arsitek + landscape designer untuk credibility.",
    results: [
      { metric: "IG engagement", value: "+340%", note: "vs brosur posting" },
      { metric: "LinkedIn follower CEO", value: "+12.400", note: "from scratch" },
      { metric: "B2B investor inquiry", value: "84/tahun", note: "via LinkedIn DM" },
      { metric: "Residential leads", value: "+78%", note: "IG attribution" },
    ],
    tags: ["IG", "LinkedIn", "Property", "B2B + B2C"],
    accent: "emerald",
  },
  {
    slug: "socmed-edtech-tiktok-organic",
    service: "suhu-socmed",
    title: "EdTech TikTok Organic Growth",
    client: "EdTech Coding Bootcamp",
    industry: "Edukasi",
    location: "Indonesia",
    year: "2024",
    duration: "8 bulan",
    summary:
      "TikTok organic untuk coding bootcamp. 0 to 280k follower dalam 8 bulan, lead-gen 4.200 trial sign-up.",
    challenge:
      "Coding bootcamp dengan paket Rp 8-25jt belum scale CAC. Ads CAC Rp 1.4jt/student, butuh organic channel yang sustainable. Tim cuma 2 orang (founder + 1 socmed) tanpa pengalaman TikTok.",
    approach:
      "Content strategy: 'developer life hack', 'career switch story', 'salary breakdown'. Format dominant: talking head founder + screen recording code. Posting daily (consistency > production quality). Engage via comment + duet siswa. Repurpose top performing ke YouTube Shorts + IG Reels.",
    results: [
      { metric: "TikTok follower", value: "284.000", note: "from 0, 8 bulan" },
      { metric: "Avg views per post", value: "47.000", note: "consistent" },
      { metric: "Trial signup attributed", value: "4.200", note: "TikTok bio link" },
      { metric: "CAC reduction", value: "-78%", note: "blended vs ads-only" },
    ],
    tags: ["TikTok", "EdTech", "Organic", "Founder-led"],
    accent: "violet",
  },
  {
    slug: "socmed-klinik-gigi",
    service: "suhu-socmed",
    title: "Klinik Gigi IG + TikTok Trust Building",
    client: "Klinik Gigi Premium",
    industry: "Klinik & Kesehatan",
    location: "Jakarta + Tangerang",
    year: "2024",
    duration: "10 bulan",
    summary:
      "Educational content klinik gigi dengan dokter sebagai talent utama. Trust + booking online via socmed.",
    challenge:
      "Klinik gigi premium dengan treatment range Rp 2-25jt butuh trust signal kuat. Content lama generic (foto klinik + harga), engagement rendah. Dokter di klinik bagus tapi gak ada brand presence personal.",
    approach:
      "Personal branding 4 dokter senior dengan format edukasi (Q&A weekly, treatment walkthrough, FAQ pasien). IG: edukasi long-form caption + reels. TikTok: bite-size tips + myth busting. Booking link in bio + WhatsApp click-to-message.",
    results: [
      { metric: "Total follower 4 dokter", value: "+340.000", note: "vs 18k start" },
      { metric: "Booking via DM/bio", value: "+520%", note: "monthly" },
      { metric: "Trust score (survey)", value: "9.2/10", note: "patient survey" },
      { metric: "Treatment high-ticket", value: "+178%", note: "Veneer + implant" },
    ],
    tags: ["Healthcare", "Personal Brand", "Education", "Trust"],
    accent: "cyan",
  },
  {
    slug: "socmed-otomotif-modifikasi",
    service: "suhu-socmed",
    title: "Otomotif Modifikasi Community Building IG",
    client: "Bengkel Modifikasi Premium",
    industry: "Otomotif",
    location: "Jakarta",
    year: "2024",
    duration: "12 bulan",
    summary:
      "Community-driven IG strategy bengkel modifikasi premium. 18k → 240k follower, build cult brand di komunitas modif.",
    challenge:
      "Bengkel modifikasi premium punya skill + portfolio mantap tapi IG cuma 18k follower. Customer didomination word-of-mouth grup WhatsApp komunitas. Mau scale tapi kompetitor brand baru lebih agresif di IG.",
    approach:
      "Build cult brand: weekly 'build of the week' showcase customer project, behind-the-scene shop, dan founder personality (technical insight + opinion). Collab dengan 12 car enthusiast influencer (free build + content). Event activation 2x/tahun (showcase day).",
    results: [
      { metric: "IG follower", value: "240.000", note: "dari 18k" },
      { metric: "Booking waiting list", value: "6 bulan", note: "dari 2 minggu" },
      { metric: "Avg ticket size", value: "+47%", note: "premium positioning" },
      { metric: "Affiliate revenue", value: "Rp 480jt/tahun", note: "part brand partnership" },
    ],
    tags: ["IG", "Community", "Automotive", "Cult Brand"],
    accent: "amber",
  },
  {
    slug: "socmed-travel-umroh-tiktok",
    service: "suhu-socmed",
    title: "Travel Umroh TikTok Storytelling",
    client: "Travel Umroh Premium",
    industry: "Travel & Wisata",
    location: "Indonesia (target jamaah)",
    year: "2024",
    duration: "10 bulan",
    summary:
      "TikTok storytelling untuk travel umroh premium. Jamaah journey + tour leader content. Booking via TikTok +340%.",
    challenge:
      "Travel umroh premium dengan paket Rp 35-65jt punya repeat customer high (40%) tapi acquisition new customer lambat. Kompetitor budget umroh Rp 18-25jt dominate awareness. Trust factor crucial buat umroh, hard sell di socmed gak efektif.",
    approach:
      "Storytelling format: real jamaah journey (sebelum-saat-sesudah umroh), tour leader Q&A live, dan virtual tour Mekah-Madinah. TikTok daily 1 video, IG Reels 4x/week, plus monthly long-form di YouTube. UGC dari jamaah aktif sebagai testimoni.",
    results: [
      { metric: "TikTok follower", value: "184.000", note: "10 bulan from scratch" },
      { metric: "Booking via TikTok bio", value: "+340%", note: "attribution form" },
      { metric: "Repeat referral rate", value: "+62%", note: "social proof effect" },
      { metric: "Avg ticket size", value: "+18%", note: "trust → premium choice" },
    ],
    tags: ["TikTok", "Travel", "Storytelling", "Umroh"],
    accent: "amber",
  },
  {
    slug: "socmed-fashion-lokal",
    service: "suhu-socmed",
    title: "Fashion Lokal IG Editorial + TikTok Trend",
    client: "Fashion Lokal D2C Brand",
    industry: "Fashion & Retail",
    location: "Indonesia",
    year: "2024",
    duration: "12 bulan",
    summary:
      "Dual strategy: IG editorial (brand equity) + TikTok trend-jacking (sales). Brand awareness + revenue paralel growth.",
    challenge:
      "Fashion lokal D2C brand dengan price point Rp 350-800rb (mid-premium). IG editorial bagus tapi sales gak langsung correlate, TikTok belum eksplor. Founder pengen brand equity + sales sama-sama growth.",
    approach:
      "IG: editorial high-quality look book + behind designer story untuk brand equity. TikTok: trend-jacking dengan native creator + 'styled by [creator]' format. Repurpose content lintas platform dengan adaptation per format. Influencer mid-tier seeding.",
    results: [
      { metric: "IG follower", value: "+180k", note: "62k → 242k" },
      { metric: "TikTok follower", value: "+ 320k", note: "from scratch" },
      { metric: "Revenue from socmed", value: "+267%", note: "attributed" },
      { metric: "AOV brand", value: "+34%", note: "brand equity → premium" },
    ],
    tags: ["Fashion", "IG", "TikTok", "D2C"],
    accent: "rose",
  },
  {
    slug: "socmed-fintech-linkedin",
    service: "suhu-socmed",
    title: "Fintech B2B LinkedIn Thought Leadership",
    client: "Fintech Embedded Finance",
    industry: "Finance",
    location: "Jakarta",
    year: "2025",
    duration: "8 bulan",
    summary:
      "LinkedIn thought leadership untuk fintech B2B. CEO + Head of Sales personal brand. Enterprise inbound +180%.",
    challenge:
      "Fintech embedded finance B2B (serve enterprise client) butuh awareness di C-level audience. LinkedIn ada tapi posting generic (press release). Sales team outbound aktif tapi cold rate rendah. Need warm inbound channel.",
    approach:
      "CEO + Head of Sales personal brand strategy. Content: industry insight, regulatory update OJK + BI, case study client (sanitized), dan opinion piece tentang fintech landscape Indonesia. Frequency: CEO 3x/week, Head 2x/week. Engagement strategy: comment ke C-level di company target list.",
    results: [
      { metric: "CEO follower", value: "+18.400", note: "8 bulan" },
      { metric: "Enterprise inbound demo", value: "+180%", note: "vs outbound only" },
      { metric: "Sales cycle reduction", value: "-34%", note: "warm vs cold" },
      { metric: "Deal closed from LinkedIn", value: "7 enterprise", note: "Rp 4.2M ARR" },
    ],
    tags: ["LinkedIn", "B2B", "Thought Leadership", "Fintech"],
    accent: "violet",
  },
  {
    slug: "socmed-talent-agency-influencer",
    service: "suhu-socmed",
    title: "Influencer Talent Agency Multi-Account Mgmt",
    client: "Talent Agency 24 talent",
    industry: "Media & Entertainment",
    location: "Jakarta",
    year: "2024",
    duration: "12 bulan",
    summary:
      "Manage 24 talent IG + TikTok dengan unified strategy + portfolio leverage. Brand deal revenue +220% YoY.",
    challenge:
      "Talent agency dengan 24 influencer (3-300k follower range). Tiap talent manage sendiri konten, kualitas + brand-fit per talent gak konsisten. Brand deal acquisition dependent pada cold outreach, gak ada portfolio leverage antar talent.",
    approach:
      "Centralized content strategy + per-talent personalization. Production studio shared (cost efficiency). Brand deal portfolio sales: package deal multi-talent untuk brand campaign. Analytics dashboard per talent untuk brand transparency. Talent development program (negotiation, content quality).",
    results: [
      { metric: "Total reach 24 talent", value: "+340%", note: "YoY" },
      { metric: "Brand deal revenue", value: "+220%", note: "agency commission" },
      { metric: "Talent retention", value: "23/24", note: "1 churn vs industry avg 30%" },
      { metric: "Multi-talent deal", value: "47% deal", note: "package > single" },
    ],
    tags: ["Influencer Marketing", "Talent Mgmt", "Multi-account", "Agency"],
    accent: "rose",
  },

  // ============================================================
  // SUHU DIGITAL MARKETING (10) - Full Funnel
  // ============================================================
  {
    slug: "dm-properti-full-funnel-6mo",
    service: "suhu-digital-marketing",
    title: "Full-Funnel Properti — Booking Fee Naik 4x dalam 6 Bulan",
    client: "Developer Cluster Tangerang",
    industry: "Properti",
    location: "Tangerang, Banten",
    year: "2024",
    duration: "6 bulan",
    summary:
      "Full-funnel digital marketing developer: SEO + Ads + Socmed + CRM. Booking fee dari 24/bulan jadi 98/bulan.",
    challenge:
      "Developer dengan 4 cluster aktif punya 9 vendor terpisah (SEO satu, Meta Ads lain, Google Ads lain, IG agency lain, dll). Attribution kacau, masing-masing claim sukses. Founder gak ada single source of truth funnel. Booking fee stagnan 24/bulan padahal ad spend Rp 1.4M/bulan.",
    approach:
      "Konsolidasi semua marketing in-house Para Suhu: SEO + Meta + Google + IG/TikTok + CRM Hubspot integration. Build attribution dashboard end-to-end. Restructure funnel: awareness video → mid touring video → high-intent floor plan request → booking. Weekly strategic review dengan founder.",
    results: [
      { metric: "Booking fee/bulan", value: "98", note: "dari 24" },
      { metric: "Cost per booking", value: "-67%", note: "vs 9-vendor era" },
      { metric: "Unit sold 6 bulan", value: "147", note: "vs target 84" },
      { metric: "Revenue 6 bulan", value: "Rp 380M", note: "+220% YoY" },
    ],
    tags: ["Full Funnel", "Property", "Multi-channel", "Attribution"],
    accent: "emerald",
    featured: true,
  },
  {
    slug: "dm-klinik-chain-multichannel",
    service: "suhu-digital-marketing",
    title: "Klinik Chain Multi-Channel — 4 Cabang ke 12 Cabang dalam 18 Bulan",
    client: "Klinik Kecantikan Chain",
    industry: "Klinik & Kesehatan",
    location: "Indonesia (7 kota)",
    year: "2023-2024",
    duration: "18 bulan",
    summary:
      "Digital marketing strategy untuk klinik chain expansion dari 4 ke 12 cabang. Playbook digital per cabang baru.",
    challenge:
      "Klinik chain mau ekspansi agresif dari 4 ke 12 cabang dalam 18 bulan. Setiap cabang baru butuh ramp-up traffic ke break-even dalam 4 bulan. Playbook digital marketing buat cabang baru gak ada (semua trial-error).",
    approach:
      "Build playbook digital launching cabang baru: pre-launch (4 minggu hyperlocal awareness ads + GBP build), soft-launch (2 minggu trial promo + UGC), full-launch (sustain + retargeting). SEO local untuk setiap cabang. Loyalty program lintas cabang. CRM unified across 12 cabang.",
    results: [
      { metric: "Cabang break-even", value: "3.2 bulan avg", note: "dari 6 bulan baseline" },
      { metric: "Member lifetime active", value: "+87%", note: "loyalty cross-branch" },
      { metric: "Revenue total network", value: "+340%", note: "18 bulan" },
      { metric: "Cabang sukses 18mo", value: "12/12", note: "0 failed expansion" },
    ],
    tags: ["Chain Expansion", "Healthcare", "Playbook", "Multi-location"],
    accent: "rose",
  },
  {
    slug: "dm-edtech-zero-to-growth",
    service: "suhu-digital-marketing",
    title: "EdTech 0 to Growth Stage in 12 Months",
    client: "EdTech Series Seed",
    industry: "Edukasi",
    location: "Indonesia",
    year: "2024",
    duration: "12 bulan",
    summary:
      "Full digital growth EdTech dari pre-launch ke 12k paying student dalam 12 bulan. Series A ready metrics.",
    challenge:
      "EdTech founded by 2 ex-Big Tech tanpa marketing experience. Product strong, pricing competitive, tapi gak ada playbook GTM. Budget Rp 6M (Seed). Target: 12k paying student + metric ready Series A dalam 12 bulan.",
    approach:
      "Phase 1 (M1-3): Brand + content foundation (website, IG, TikTok, SEO content base). Phase 2 (M4-6): Performance ads scaling (Meta + Google + TikTok). Phase 3 (M7-9): Retention + referral loop. Phase 4 (M10-12): Series A material (case study, attribution clean).",
    results: [
      { metric: "Paying student M12", value: "12.840", note: "vs target 12k" },
      { metric: "CAC blended", value: "Rp 280rb", note: "vs LTV Rp 3.4jt" },
      { metric: "Organic share", value: "42%", note: "M12 acquisition" },
      { metric: "Series A closed", value: "USD 8M", note: "lead by US fund" },
    ],
    tags: ["EdTech", "Growth", "Startup", "Series A"],
    accent: "violet",
  },
  {
    slug: "dm-fnb-franchise-rollout",
    service: "suhu-digital-marketing",
    title: "F&B Franchise Rollout 24 Outlet dalam 14 Bulan",
    client: "F&B Franchise Coffee Brand",
    industry: "Restoran & F&B",
    location: "Indonesia (16 kota)",
    year: "2024",
    duration: "14 bulan",
    summary:
      "Digital marketing strategy untuk franchise coffee rollout 24 outlet di 16 kota. Per outlet ramp-up + brand consolidation.",
    challenge:
      "F&B franchise coffee mau rollout 24 outlet di 16 kota dalam 14 bulan. Tantangan: brand awareness di kota tier-2-3 nol, franchisee training digital gak ada, dan brand consistency lintas owner.",
    approach:
      "Centralized brand campaign + per-outlet hyperlocal activation. Franchise playbook: pre-opening hype (6 minggu sebelum buka), grand opening promo, sustained engagement. Loyalty app cross-outlet. Franchisee training: digital basics + on-brand content guidelines.",
    results: [
      { metric: "Outlet break-even", value: "2.8 bulan avg", note: "vs SOP 5 bulan" },
      { metric: "Brand awareness kota tier-2", value: "62%", note: "post-launch survey" },
      { metric: "App user cross-outlet", value: "184.000", note: "loyalty engage" },
      { metric: "Franchise inquiry", value: "+340%", note: "scaling outlook" },
    ],
    tags: ["Franchise", "F&B", "Rollout", "Multi-city"],
    accent: "amber",
  },
  {
    slug: "dm-travel-umroh-fullfunnel",
    service: "suhu-digital-marketing",
    title: "Travel Umroh Full-Funnel Marketing",
    client: "Travel Umroh Mid-tier",
    industry: "Travel & Wisata",
    location: "Indonesia",
    year: "2024",
    duration: "12 bulan",
    summary:
      "Full-funnel umroh: awareness ads + edukasi content + trust building + booking flow. Jamaah +180% YoY.",
    challenge:
      "Travel umroh mid-tier (3.000 jamaah/tahun) dengan kompetitor besar (NRA, Maktour) di brand & budget. Mau scale ke 6.000 jamaah/tahun butuh acquisition channel diversification + retention strategy.",
    approach:
      "Awareness: TikTok storytelling + IG Reels. Edukasi: SEO content (FAQ) + YouTube panduan umroh. Trust: video testimoni jamaah + dokumentasi rombongan. Conversion: WhatsApp Business chatbot + booking online dengan installment option (BNPL umroh).",
    results: [
      { metric: "Jamaah 2024", value: "6.240", note: "dari 3.100" },
      { metric: "CAC", value: "Rp 1.2jt", note: "ticket Rp 35-45jt" },
      { metric: "Repeat + referral", value: "47%", note: "loyalty effect" },
      { metric: "Channel diversity", value: "5 channel", note: "dari 2 (ads only)" },
    ],
    tags: ["Travel", "Umroh", "Full Funnel", "Trust"],
    accent: "amber",
  },
  {
    slug: "dm-otomotif-premium-brand",
    service: "suhu-digital-marketing",
    title: "Otomotif Premium Brand Digital Strategy",
    client: "Premium Car Dealer Brand",
    industry: "Otomotif",
    location: "Jabodetabek + 4 kota",
    year: "2024",
    duration: "12 bulan",
    summary:
      "Digital strategy holistic untuk premium car dealer brand (range Rp 800jt-2.5M per unit). Brand equity + leadgen.",
    challenge:
      "Premium car dealer (price range Rp 800jt-2.5M) operates di 12 lokasi. Brand equity strong offline (showroom premium) tapi digital presence weak. Lead from ads quality jelek (banyak gak qualified), brand search rendah, dan event activation gak measure.",
    approach:
      "Brand: high-quality content (cinematic video tiap model, lifestyle photoshoot). Performance: Google Ads keyword bidding ke 'beli mobil [model] [kota]'. Test drive funnel dengan booking online + concierge service. Event activation digital extension (livestream + UGC).",
    results: [
      { metric: "Brand search volume", value: "+220%", note: "12 bulan" },
      { metric: "Qualified test drive", value: "+340%", note: "dari ads" },
      { metric: "Test drive to sale", value: "24%", note: "industry avg 14%" },
      { metric: "Unit sold via digital", value: "+178%", note: "attribution" },
    ],
    tags: ["Automotive", "Premium", "Brand + Performance", "High Ticket"],
    accent: "cyan",
  },
  {
    slug: "dm-manufacturing-b2b",
    service: "suhu-digital-marketing",
    title: "Manufacturer B2B Inbound Marketing",
    client: "Manufacturer Component B2B",
    industry: "Manufaktur",
    location: "Cikarang + ekspor regional",
    year: "2024",
    duration: "14 bulan",
    summary:
      "Inbound marketing B2B untuk manufacturer komponen. Replace outbound-heavy approach dengan content + SEO + LinkedIn.",
    challenge:
      "Manufacturer komponen B2B serve client (OEM otomotif + appliance) traditionally lewat sales rep door-to-door. Sales cycle 6-12 bulan, target market regional Southeast Asia. Mau acquire new client tier (smaller OEM, Asian region) butuh inbound channel.",
    approach:
      "Inbound: SEO long-tail teknis (per komponen spec + use case), LinkedIn thought leadership engineering team, dan industry-specific content (case study deployment). Lead magnet: spec database download + RFQ form. Sales enablement: video product demo + technical FAQ.",
    results: [
      { metric: "Inbound RFQ/bulan", value: "84", note: "dari 8 (outbound only)" },
      { metric: "Asian region buyer", value: "12 new client", note: "Vietnam, Thailand" },
      { metric: "Sales cycle reduction", value: "-32%", note: "warm inbound" },
      { metric: "Revenue from inbound", value: "Rp 28M/tahun", note: "incremental" },
    ],
    tags: ["B2B", "Manufacturing", "Inbound", "Industrial"],
    accent: "neon",
  },
  {
    slug: "dm-property-launch-campaign",
    service: "suhu-digital-marketing",
    title: "Property Launch Mega Campaign — 240 Unit dalam 60 Hari",
    client: "Developer Township Skala Nasional",
    industry: "Properti",
    location: "Jawa Barat",
    year: "2025",
    duration: "60 hari pre-launch + 60 hari campaign",
    summary:
      "Mega launch campaign cluster baru township nasional. 240 unit sold dalam 60 hari, oversubscribed di phase 1.",
    challenge:
      "Developer township nasional launching cluster baru (240 unit, range Rp 850jt-2.4M). Target: sold-out phase 1 dalam 90 hari. Risk: kompetisi internal antar phase + cluster, plus market sentimen property 2025 yang masih cautious.",
    approach:
      "Pre-launch (60 hari): teaser campaign hyper-targeted, virtual tour 360 (early access dengan NUP commitment), influencer property + finance partnership. Launch (60 hari): full media blitz, daily live tour, dan flash promo phase. Sales orchestration: 8 broker partner + in-house marketing 60 orang.",
    results: [
      { metric: "Unit sold 60 hari", value: "240/240", note: "100% phase 1 sold" },
      { metric: "NUP commitment pre-launch", value: "380", note: "oversubscribed" },
      { metric: "Cost per sold unit", value: "Rp 8.4jt", note: "vs target Rp 18jt" },
      { metric: "Revenue 60 hari", value: "Rp 360M", note: "fastest sold-out cluster" },
    ],
    tags: ["Property Launch", "Mega Campaign", "Sold Out", "Pre-launch"],
    accent: "emerald",
    featured: true,
  },
  {
    slug: "dm-fintech-compliance-growth",
    service: "suhu-digital-marketing",
    title: "Fintech Compliance-First Growth Strategy",
    client: "Fintech Payment B2B",
    industry: "Finance",
    location: "Jakarta",
    year: "2024",
    duration: "12 bulan",
    summary:
      "Growth strategy untuk fintech payment B2B dengan compliance-first content. Enterprise inbound +280%.",
    challenge:
      "Fintech payment B2B (target enterprise + UMKM) butuh growth tapi vertical-nya highly regulated (BI + OJK). Marketing aggressive risk compliance issue + brand damage. Need balance growth speed dengan compliance.",
    approach:
      "Compliance-first content: regulatory update Bank Indonesia + OJK, integration guide developer, dan case study klien (sanitized + approved compliance). Enterprise: LinkedIn thought leadership + tailored landing page per vertical. UMKM: educational TikTok + organic SEO 'cara terima pembayaran online'.",
    results: [
      { metric: "Enterprise inbound", value: "+280%", note: "MoM 12 bulan" },
      { metric: "UMKM signup organic", value: "18.400", note: "12 bulan" },
      { metric: "Compliance issue", value: "0", note: "12 bulan zero violation" },
      { metric: "Transaction volume processed", value: "+340%", note: "via inbound clients" },
    ],
    tags: ["Fintech", "Compliance", "B2B", "Enterprise"],
    accent: "violet",
  },
  {
    slug: "dm-holding-multibrand",
    service: "suhu-digital-marketing",
    title: "Holding Multi-Brand Digital Consolidation",
    client: "FMCG Holding 6 brand",
    industry: "FMCG",
    location: "Indonesia",
    year: "2023-2024",
    duration: "16 bulan",
    summary:
      "Konsolidasi digital marketing 6 brand FMCG di holding sama. Shared infra + per-brand strategy. Cost saving + growth.",
    challenge:
      "Holding FMCG punya 6 brand (snack, beverage, household care). Tiap brand pakai agency berbeda-beda, cost duplikasi (CRM, analytics, creative production), dan data customer tersebar gak ada single view.",
    approach:
      "Consolidate ke shared infrastructure: unified DMP (data management platform), shared creative production studio, dan centralized analytics. Per brand tetap punya strategy + tone berbeda. Cross-brand bundling untuk customer LTV expansion (loyal customer brand A diintroduce ke brand B).",
    results: [
      { metric: "Marketing cost saving", value: "Rp 4.8M/tahun", note: "vs 6 agency terpisah" },
      { metric: "Cross-brand customer", value: "+47%", note: "LTV expansion" },
      { metric: "Total brand revenue", value: "+78%", note: "16 bulan vs baseline" },
      { metric: "Data unified records", value: "8.4 juta", note: "single view customer" },
    ],
    tags: ["Holding", "Multi-brand", "Consolidation", "FMCG"],
    accent: "amber",
  },

  // ============================================================
  // SUHU CREATIVE (10)
  // ============================================================
  {
    slug: "creative-rebrand-fnb-chain",
    service: "suhu-creative",
    title: "Rebranding F&B Chain Indonesia ke Internasional",
    client: "F&B Chain dengan ekspansi regional",
    industry: "Restoran & F&B",
    location: "Indonesia + SEA",
    year: "2024",
    duration: "16 minggu",
    summary:
      "Full rebrand F&B chain Indonesia untuk siap ekspansi Singapore + Malaysia. Logo, guideline, packaging, signage.",
    challenge:
      "F&B chain dengan 28 outlet di Indonesia sukses tapi visual identity lokal banget (Bahasa centric, color palette dated). Mau ekspansi ke Singapore + Malaysia, butuh brand yang travel well lintas budaya tanpa loose roots.",
    approach:
      "Full rebrand: research positioning lintas market, design system modular (adaptable per market), packaging 12 SKU, signage standardized per outlet type (mall, street, kiosk). Brand book lengkap 84-halaman. Phased rollout: pilot 4 outlet → full 28 outlet.",
    results: [
      { metric: "Brand recall awareness", value: "+78%", note: "post-rebrand survey" },
      { metric: "Foot traffic outlets new visual", value: "+34%", note: "vs pre-rebrand" },
      { metric: "Ekspansi sukses SG/MY", value: "4 outlet", note: "Y1 post-rebrand" },
      { metric: "Premium positioning", value: "+22% AOV", note: "perceived value" },
    ],
    tags: ["Rebranding", "F&B", "Multi-market", "Brand System"],
    accent: "amber",
    featured: true,
  },
  {
    slug: "creative-coffee-packaging",
    service: "suhu-creative",
    title: "Logo + Packaging Coffee Brand Premium",
    client: "Specialty Coffee Roastery",
    industry: "Restoran & F&B",
    location: "Bandung",
    year: "2024",
    duration: "8 minggu",
    summary:
      "Build brand identity coffee roastery dari logo, packaging 8 varian single origin, sampai retail merchandise.",
    challenge:
      "Specialty coffee roastery di Bandung produce coffee bagus tapi packaging masih plain kraft + sticker. Mau enter retail (supermarket premium + cafe partner) butuh shelf presence yang menarik dan storytelling per origin.",
    approach:
      "Brand identity yang storytelling-first per origin (Aceh Gayo, Toraja, Bali Kintamani, dll). Logo + wordmark yang versatile (1 color + multi-color). Packaging dengan illustrasi terrain origin masing-masing. Merchandise (tumbler, apron, tote) untuk cafe partner + retail.",
    results: [
      { metric: "Retail listing achieved", value: "82 store", note: "premium supermarket + cafe" },
      { metric: "Avg price per bag", value: "+44%", note: "premium pricing accepted" },
      { metric: "Cafe partner adoption", value: "62 cafe", note: "12 bulan" },
      { metric: "Direct online sales", value: "+340%", note: "post-rebrand" },
    ],
    tags: ["Packaging", "Coffee", "Brand Identity", "Retail"],
    accent: "amber",
  },
  {
    slug: "creative-video-production-launch",
    service: "suhu-creative",
    title: "Video Production Launch Properti Mega",
    client: "Developer Township Skala Besar",
    industry: "Properti",
    location: "Jawa Barat",
    year: "2025",
    duration: "10 minggu produksi",
    summary:
      "Video production untuk mega launch township: hero film 3 menit, 12 cut social, virtual tour 3D, drone footage.",
    challenge:
      "Developer butuh content video komprehensif untuk launch township 200ha. Vendor video sebelumnya hasilnya generic (drone showcase + voiceover umum), gak ada storytelling. Budget kompetitif Rp 480jt untuk full package.",
    approach:
      "Konsep storytelling: 'a day in life di township', dari pagi sampai malam dengan family resident POV. Production: 5 hari shooting (drone + stedicam + interior + actor), CGI integration untuk fase berikutnya, dan post-production 4 minggu. Deliverable: 1 hero film + 24 cut social.",
    results: [
      { metric: "Hero film YouTube views", value: "4.2 juta", note: "organic + ads" },
      { metric: "Social cut engagement", value: "+340%", note: "vs vendor lama" },
      { metric: "Booking fee post-video", value: "+178%", note: "30 hari post-launch" },
      { metric: "Vendor cost saving", value: "Rp 280jt", note: "vs 3 vendor terpisah" },
    ],
    tags: ["Video Production", "Property", "Storytelling", "Drone"],
    accent: "emerald",
  },
  {
    slug: "creative-fashion-lookbook",
    service: "suhu-creative",
    title: "Fashion Lookbook Photoshoot Seasonal",
    client: "Fashion D2C Brand Premium",
    industry: "Fashion & Retail",
    location: "Jakarta + Bali",
    year: "2024",
    duration: "6 minggu (3 season)",
    summary:
      "Lookbook seasonal (Spring/Summer + Resort) untuk fashion D2C brand. Set, styling, talent, production lengkap.",
    challenge:
      "Fashion D2C brand pengen brand equity premium tapi visual content masih still product shoot (white background). Butuh lookbook seasonal untuk e-commerce + IG editorial yang kompete dengan brand established (Calla, Aere, Schmiley Mo).",
    approach:
      "Konsep season-based: SS (urban Jakarta), Resort (Bali coastal). Talent casting 3 model (representasi range customer), location scouting 4 spot, styling director. Production 6 hari shooting per season, post-production retouching premium. Output: 60+ image per season + behind-the-scene video.",
    results: [
      { metric: "Lookbook IG reach", value: "8.4 juta", note: "per season" },
      { metric: "Revenue dari lookbook collection", value: "+178%", note: "vs sebelumnya" },
      { metric: "Brand equity score", value: "+34%", note: "premium perception" },
      { metric: "Editorial feature", value: "8 publication", note: "Vogue ID, Tatler, dll" },
    ],
    tags: ["Photoshoot", "Fashion", "Editorial", "Seasonal"],
    accent: "rose",
  },
  {
    slug: "creative-pitch-deck-series-a",
    service: "suhu-creative",
    title: "Pitch Deck Series A Startup Logistik",
    client: "Logistik B2B Startup Series A",
    industry: "Logistik",
    location: "Jakarta",
    year: "2024",
    duration: "4 minggu",
    summary:
      "Pitch deck Series A untuk startup logistik B2B. 32-slide deck + data room visual + investor demo video.",
    challenge:
      "Startup logistik B2B mau fundraising Series A (target USD 12M). Founder ex-VC tahu konten yang harus disampaikan tapi visual masih minimum (PowerPoint default). Kompetitor fundraising barengan dengan deck yang very polished, butuh leverage visual edge.",
    approach:
      "Deck strategy: narrative-first (problem → opportunity → solution → traction → ask), visual minimal-impactful. Data viz custom untuk metrics. Demo video 90 detik product walkthrough. Data room template untuk diligence. Plus 1-pager investor memo + investor FAQ deck.",
    results: [
      { metric: "Funding closed", value: "USD 14M", note: "+17% vs target" },
      { metric: "Investor meeting taken", value: "47", note: "dari 24 outreach" },
      { metric: "Termsheet received", value: "6 firm", note: "competitive round" },
      { metric: "Diligence to close time", value: "5.4 minggu", note: "vs industry 12 mgg" },
    ],
    tags: ["Pitch Deck", "Startup", "Fundraising", "Series A"],
    accent: "violet",
  },
  {
    slug: "creative-motion-graphics-campaign",
    service: "suhu-creative",
    title: "Motion Graphics Campaign Fintech",
    client: "Fintech Payment Indonesia",
    industry: "Finance",
    location: "Jakarta",
    year: "2024",
    duration: "6 minggu",
    summary:
      "Motion graphics seri 16 video untuk fintech payment campaign. Edukasi feature + how-to + brand awareness.",
    challenge:
      "Fintech payment butuh content campaign yang edukatif (cara pakai feature, security, dll) tapi product video sebelumnya boring (screen recording + voiceover). Engagement rendah, completion rate <20%.",
    approach:
      "Motion graphics style yang playful tapi tetap professional: character-based explainer, custom illustration matching brand, dan storytelling per video (problem-solution). Deliverable: 16 video (8 edukasi + 4 how-to + 4 brand) dengan length 15-90 detik per platform.",
    results: [
      { metric: "Completion rate avg", value: "78%", note: "dari 18% screen recording" },
      { metric: "Total reach kampanye", value: "12.8 juta", note: "16 video combined" },
      { metric: "Feature adoption post-video", value: "+178%", note: "in-app event" },
      { metric: "Brand sentiment", value: "+34%", note: "social listening" },
    ],
    tags: ["Motion Graphics", "Fintech", "Animation", "Explainer"],
    accent: "violet",
  },
  {
    slug: "creative-brand-book-corporate",
    service: "suhu-creative",
    title: "Brand Book Lengkap Holding Korporasi",
    client: "Holding Korporasi Tbk",
    industry: "B2B / Korporasi",
    location: "Jakarta",
    year: "2024",
    duration: "14 minggu",
    summary:
      "Brand book 120-halaman untuk holding korporasi Tbk. Identity, application, brand voice, sub-brand architecture.",
    challenge:
      "Holding Tbk dengan 8 sub-brand operate dengan brand identity yang inkonsisten (logo variant beda-beda, color palette tiap divisi sendiri). Acquisition baru bikin makin chaos. Butuh brand book authoritative yang jadi referensi enterprise-wide.",
    approach:
      "Audit brand existing: collect semua variant + asset. Build brand architecture (master + endorser + co-brand). Identity refresh (gak total rebrand, evolution). Brand book 120 halaman: usage guideline, voice + tone, application (office, signage, digital, packaging, vehicle), dan sub-brand framework.",
    results: [
      { metric: "Brand consistency score audit", value: "94%", note: "dari 38% pre" },
      { metric: "Subsidiary adoption", value: "8/8", note: "12 bulan post-launch" },
      { metric: "Cost saving design ops", value: "Rp 680jt/tahun", note: "less custom request" },
      { metric: "Brand equity index", value: "+22%", note: "external survey" },
    ],
    tags: ["Brand Book", "Corporate", "Brand Architecture", "Enterprise"],
    accent: "cyan",
  },
  {
    slug: "creative-skincare-packaging",
    service: "suhu-creative",
    title: "Skincare Packaging Eco-Friendly D2C",
    client: "Skincare D2C Sustainable Brand",
    industry: "Beauty & Wellness",
    location: "Jakarta",
    year: "2024",
    duration: "10 minggu",
    summary:
      "Packaging skincare eco-friendly: refill system, material sustainable, dan unboxing experience. Award-winning packaging.",
    challenge:
      "Skincare brand positioning sustainable tapi packaging masih plastik konvensional (gak match brand value). Mau redesign full lineup (24 SKU) dengan material refillable + biodegradable + tetap commercial viable di price point Rp 180-650rb.",
    approach:
      "Material research: glass + aluminum (primary), refill pouch FSC paper (secondary), zero plastic. Design system modular: 1 primary bottle shape per category (cleanser, serum, moisturizer) untuk reduce SKU complexity. Unboxing experience: insert seed paper + thank you card recycled. Sustainability story prominent.",
    results: [
      { metric: "Plastic reduction", value: "84%", note: "vs lineup lama" },
      { metric: "Refill adoption rate", value: "47%", note: "repeat purchase" },
      { metric: "Premium pricing accepted", value: "+34%", note: "vs sebelumnya" },
      { metric: "Award won", value: "2 design award", note: "incl Brand Indonesia Awards" },
    ],
    tags: ["Packaging", "Skincare", "Sustainability", "D2C"],
    accent: "emerald",
  },
  {
    slug: "creative-editorial-magazine",
    service: "suhu-creative",
    title: "Editorial Design Lifestyle Magazine Bulanan",
    client: "Magazine Lifestyle Premium",
    industry: "Media & Entertainment",
    location: "Jakarta",
    year: "2024",
    duration: "12 bulan (12 issue)",
    summary:
      "Editorial design bulanan untuk lifestyle magazine premium. Cover design, layout 120-halaman, infographic, art direction.",
    challenge:
      "Lifestyle magazine 24-tahun pakai art direction internal yang dated (banyak free font, layout symmetrical, gak ada brand visual personality). Mau rebrand + modernize tanpa kehilangan audience setia (avg umur 45+).",
    approach:
      "Art direction overhaul: typography system modern (serif + sans pairing premium), grid system fleksibel untuk editorial vs photo essay, dan signature element (kerlip kuning sebagai accent recurring). Per-issue cover concept: photoshoot custom 3 hari/issue, post-production high-end retouching.",
    results: [
      { metric: "Cover-to-cover read", value: "+47%", note: "subscriber survey" },
      { metric: "Subscription renewal", value: "92%", note: "industry avg 64%" },
      { metric: "Newsstand sell-through", value: "+34%", note: "premium positioning" },
      { metric: "Ad rate card increase", value: "+22%", note: "premium perceived value" },
    ],
    tags: ["Editorial", "Magazine", "Art Direction", "Print"],
    accent: "violet",
  },
  {
    slug: "creative-animation-explainer-corporate",
    service: "suhu-creative",
    title: "Animation Explainer Corporate Sustainability Report",
    client: "Korporasi Tbk Energy Sector",
    industry: "B2B / Korporasi",
    location: "Jakarta",
    year: "2025",
    duration: "8 minggu",
    summary:
      "Animation explainer 4-menit untuk corporate sustainability report. Translate ESG complexity ke stakeholder-friendly.",
    challenge:
      "Korporasi energy Tbk publish sustainability report (ESG) yang dense 280 halaman. Engagement stakeholder rendah (90% download tapi gak baca). Butuh explainer animation yang summarize key metrics + komitmen sustainability dengan tone optimistic tapi credible.",
    approach:
      "Storyboarding: 4-menit explainer, struktur Now-Future-How (state present, vision 2030, roadmap). Animation style: 2D motion graphics dengan illustration custom, no stock asset. Data visualization untuk ESG metrics (carbon reduction, water saving, community impact). Narration voiceover bilingual ID + EN.",
    results: [
      { metric: "Video completion rate", value: "84%", note: "dari 18% pdf download" },
      { metric: "Stakeholder engagement", value: "+340%", note: "report awareness" },
      { metric: "Investor questions answered", value: "67%", note: "auto-answered via video" },
      { metric: "Award recognition", value: "ESG Communication Award", note: "industry assoc" },
    ],
    tags: ["Animation", "Corporate", "ESG", "Explainer"],
    accent: "neon",
  },

  // ============================================================
  // SUHU AI (10)
  // ============================================================
  {
    slug: "ai-chatbot-whatsapp-klinik",
    service: "suhu-ai",
    title: "AI Chatbot WhatsApp untuk Klinik Network",
    client: "Klinik Network 18 cabang",
    industry: "Klinik & Kesehatan",
    location: "Jabodetabek + Bandung",
    year: "2024",
    duration: "10 minggu",
    summary:
      "AI chatbot WhatsApp untuk handle booking + FAQ + recall pasien. Replace 6 admin orang, handle 12rb message/hari.",
    challenge:
      "Klinik network 18 cabang dapat 12.000+ message WhatsApp/hari (booking, FAQ, complaint). Admin 6 orang gak cukup, response time avg 4 jam (lost booking). 80% pertanyaan repetitive (jam buka, lokasi, harga treatment).",
    approach:
      "Build AI chatbot pakai GPT-4 + custom knowledge base 600+ FAQ klinik + integrasi sistem booking. Flow: classify intent (FAQ vs booking vs complaint), route ke handler. Untuk booking: collect data → check slot real-time → confirm. Untuk complaint: escalate ke human dengan context summary.",
    results: [
      { metric: "Auto-handled rate", value: "78%", note: "FAQ + booking" },
      { metric: "Response time", value: "8 detik", note: "dari 4 jam" },
      { metric: "Booking completed via chatbot", value: "+340%", note: "monthly" },
      { metric: "Admin redirect", value: "4 orang", note: "ke high-touch tasks" },
    ],
    tags: ["AI Chatbot", "WhatsApp", "Healthcare", "GPT-4"],
    accent: "cyan",
    featured: true,
  },
  {
    slug: "ai-customer-service-bot-ecommerce",
    service: "suhu-ai",
    title: "Customer Service AI Bot E-commerce Fashion",
    client: "Fashion E-commerce Brand",
    industry: "Fashion & Retail",
    location: "Indonesia",
    year: "2024",
    duration: "8 minggu",
    summary:
      "AI customer service bot untuk e-commerce fashion. Handle order status, return/refund, size recommendation.",
    challenge:
      "E-commerce fashion brand dapat 4.800+ CS inquiry/hari peak season. Tim CS 12 orang burnout, response time 6+ jam, dan size return rate tinggi (24%) karena customer bingung size.",
    approach:
      "AI bot stack: GPT-4 + product database + order management integration. Capability: order status real-time, size recommendation berdasarkan riwayat purchase + body data, return/refund flow self-service, dan escalation ke human kalau frustrated detected (sentiment analysis).",
    results: [
      { metric: "Auto-resolved rate", value: "67%", note: "without human" },
      { metric: "Response time peak", value: "12 detik", note: "dari 6 jam" },
      { metric: "Size return rate", value: "11%", note: "dari 24% (size AI rec)" },
      { metric: "Customer satisfaction", value: "4.6/5", note: "post-chat survey" },
    ],
    tags: ["AI", "Customer Service", "E-commerce", "GPT-4"],
    accent: "rose",
  },
  {
    slug: "ai-content-automation-socmed",
    service: "suhu-ai",
    title: "AI Content Automation Socmed Agency",
    client: "Socmed Agency Manage 40+ Akun",
    industry: "B2B / Agency",
    location: "Jakarta",
    year: "2024",
    duration: "12 minggu",
    summary:
      "AI workflow untuk content production socmed agency: ideation, copywriting, image generation, scheduling automation.",
    challenge:
      "Socmed agency manage 40+ client account, produce 800+ post/minggu. Tim content writer 18 orang exhausted (avg 2 jam/post), creative output mulai repetitive (deadline pressure), dan client cust complaint visual consistency.",
    approach:
      "Build AI workflow di n8n: ideation pakai Claude (per client brand voice), copywriting GPT-4 dengan client tone training, image generation Midjourney dengan style preset per brand, dan scheduling auto via Buffer/Hootsuite. Human review 5 menit/post (approval/edit) instead of writing from scratch.",
    results: [
      { metric: "Content production time", value: "20 menit/post", note: "dari 2 jam" },
      { metric: "Output volume", value: "+340%", note: "same team size" },
      { metric: "Client satisfaction", value: "4.8/5", note: "consistency improvement" },
      { metric: "Margin improvement", value: "+22 ppt", note: "lower cost per post" },
    ],
    tags: ["AI Workflow", "Content Automation", "Agency", "n8n"],
    accent: "violet",
  },
  {
    slug: "ai-lead-qualification-properti",
    service: "suhu-ai",
    title: "AI Lead Qualification Developer Properti",
    client: "Developer Properti Skala Besar",
    industry: "Properti",
    location: "Tangerang, Banten",
    year: "2025",
    duration: "10 minggu",
    summary:
      "AI lead scoring + first-touch qualification untuk 320+ marketing agent. Lead high-intent ke senior agent, browsing ke nurturing.",
    challenge:
      "Developer dapat 8.400+ lead/bulan dari multi-channel. Routing manual ke 320 agent gak optimal (top agent burnout dengan lead jelek, junior agent gak dapet lead bagus). Conversion lead-to-booking 4.2%, target 8%+.",
    approach:
      "AI lead scoring: classify intent (browsing, comparison, ready-to-buy) pakai NLP analysis pesan WhatsApp + behavior tracking di site. High-intent → senior agent (priority routing), comparison → educate via WhatsApp drip + senior agent later, browsing → nurturing flow + email. Daily retraining model.",
    results: [
      { metric: "Lead-to-booking rate", value: "9.4%", note: "dari 4.2%" },
      { metric: "Senior agent productivity", value: "+78%", note: "deal/agent/bulan" },
      { metric: "Junior agent conversion", value: "+167%", note: "dapet lead apropriate" },
      { metric: "Marketing ROI", value: "+212%", note: "same ad spend" },
    ],
    tags: ["AI", "Lead Scoring", "Property", "Sales Routing"],
    accent: "emerald",
  },
  {
    slug: "ai-internal-gpt-legal",
    service: "suhu-ai",
    title: "Internal GPT Custom untuk Law Firm",
    client: "Law Firm 80 Lawyer",
    industry: "Legal Services",
    location: "Jakarta",
    year: "2024",
    duration: "14 minggu",
    summary:
      "Custom GPT internal untuk 80 lawyer dengan RAG knowledge base 12rb dokumen legal historical. Compliance UU PDP.",
    challenge:
      "Law firm dengan 80 lawyer (junior - partner) habiskan 30%+ waktu untuk research case law historical. Knowledge tersebar di 12.000+ document Dropbox + Sharepoint. Junior lawyer susah cari preseden, partner gak punya time mentor.",
    approach:
      "Custom GPT-4 dengan RAG (retrieval augmented generation) atas 12rb dokumen legal historical. Hosting on-premise (data sensitive). Capability: query case law dengan citation, draft initial memo dengan template firm, dan compliance check terhadap regulasi terkini. Audit log full untuk compliance.",
    results: [
      { metric: "Lawyer research time", value: "-67%", note: "vs manual search" },
      { metric: "Junior productivity", value: "+178%", note: "billable hours" },
      { metric: "Knowledge retention", value: "Centralized", note: "departing lawyer impact -78%" },
      { metric: "ROI 12 bulan", value: "4.8x", note: "investment vs billable saved" },
    ],
    tags: ["Custom GPT", "RAG", "Legal", "Knowledge Base"],
    accent: "violet",
  },
  {
    slug: "ai-sales-playbook",
    service: "suhu-ai",
    title: "AI Sales Playbook + Coach untuk B2B Sales",
    client: "B2B SaaS Sales Team",
    industry: "B2B SaaS",
    location: "Jakarta",
    year: "2025",
    duration: "12 minggu",
    summary:
      "AI sales coach yang analyze call recording, suggest objection handling, dan generate follow-up email per prospect.",
    challenge:
      "B2B SaaS sales team 24 orang dengan win rate 11% (target 18%). Sales manager spend 6+ jam/minggu review call recording manual. New hire ramp-up 4 bulan ke target. Knowledge tribal (top performer-only).",
    approach:
      "Build AI sales playbook: call recording auto-transcribed + analyzed (objection raised, customer signal, talk-listen ratio). Coach feedback per call: 'objection X handled well, missed Y signal at 14:30'. Email follow-up generator per prospect dengan context. Win-pattern learning dari top performer.",
    results: [
      { metric: "Win rate team", value: "19%", note: "dari 11%" },
      { metric: "New hire ramp-up", value: "2.4 bulan", note: "dari 4 bulan" },
      { metric: "Coach hours saved manager", value: "5 jam/minggu", note: "AI pre-screen" },
      { metric: "Average deal size", value: "+28%", note: "better objection handling" },
    ],
    tags: ["AI Sales", "B2B", "Coach", "Call Analysis"],
    accent: "cyan",
  },
  {
    slug: "ai-seo-content-generation",
    service: "suhu-ai",
    title: "AI SEO Content Generation at Scale",
    client: "E-commerce 12rb Product",
    industry: "E-commerce",
    location: "Indonesia",
    year: "2024",
    duration: "10 minggu",
    summary:
      "AI workflow generate 12rb product description SEO-optimized untuk e-commerce besar. Per produk unique + brand voice.",
    challenge:
      "E-commerce dengan 12.000 product, deskripsi mostly copy-paste dari brand (generic, gak SEO-optimized). Manual rewrite butuh 12 bulan + 8 content writer. SEO traffic stuck, internal team gak punya bandwidth.",
    approach:
      "AI workflow: scrape spec product + brand info → generate deskripsi unique pakai GPT-4 dengan brand voice training (Suhu brand tone retained). Include: meta title, meta desc, schema markup, dan internal link suggestion. Human review 10% sample untuk quality. Bulk publish via API.",
    results: [
      { metric: "Content production time", value: "8 minggu", note: "vs 12 bulan manual" },
      { metric: "Cost saving", value: "Rp 480jt", note: "vs hire writer" },
      { metric: "Organic traffic", value: "+220%", note: "6 bulan post-update" },
      { metric: "Product page conversion", value: "+47%", note: "better deskripsi" },
    ],
    tags: ["AI Content", "SEO", "E-commerce", "Scale"],
    accent: "amber",
  },
  {
    slug: "ai-image-upscale-product",
    service: "suhu-ai",
    title: "AI Image Enhancement Product Photo 8.000 SKU",
    client: "Marketplace UMKM Retailer",
    industry: "E-commerce",
    location: "Indonesia",
    year: "2024",
    duration: "6 minggu",
    summary:
      "AI workflow upscale + cleanup 8.000 product photo dari UMKM seller. Quality consistent untuk marketplace listing.",
    challenge:
      "Marketplace UMKM dapet product photo dari seller dengan quality bervariasi banget (sebagian seller pakai HP biasa, lighting jelek, background distracting). Listing quality jelek bikin conversion rate marketplace rendah, tapi gak feasible suruh seller re-shoot.",
    approach:
      "AI workflow: detect product → segment from background → enhance quality (upscale 2x, denoise, lighting balance) → replace background ke white/lifestyle. Pakai stack: Segment Anything + Real-ESRGAN + Stable Diffusion inpainting. Batch process 1.000 image/jam.",
    results: [
      { metric: "Image quality consistency", value: "94%", note: "passed marketplace QA" },
      { metric: "Marketplace conversion", value: "+78%", note: "post-enhancement" },
      { metric: "Cost vs manual editing", value: "-92%", note: "Rp 8rb/image vs Rp 95rb" },
      { metric: "Seller onboarding speed", value: "+340%", note: "less back-forth photo" },
    ],
    tags: ["AI Image", "E-commerce", "Computer Vision", "Workflow"],
    accent: "amber",
  },
  {
    slug: "ai-voice-call-center",
    service: "suhu-ai",
    title: "Voice AI Call Center untuk Insurance",
    client: "Asuransi Multifinance",
    industry: "Finance",
    location: "Jakarta",
    year: "2025",
    duration: "20 minggu",
    summary:
      "Voice AI bot untuk handle inbound call asuransi: claim status, policy info, premium reminder. Bahasa Indonesia native.",
    challenge:
      "Asuransi dengan 240.000+ polis dapat 8.400+ inbound call/hari (mostly: cek status klaim, info polis, reminder premium). Call center 40 agen overload, avg hold time 18 menit, dan abandoned call rate 32%.",
    approach:
      "Voice AI dengan model TTS+STT custom-trained Bahasa Indonesia (handle dialek + code-switching ID-EN). Integrasi ke core insurance system untuk real-time data. Capability: claim status, policy info, premium payment intent, dan smart routing ke human (complex cases). Compliance OJK voice biometric optional.",
    results: [
      { metric: "Auto-handle rate", value: "62%", note: "FAQ + status queries" },
      { metric: "Hold time avg", value: "1.8 menit", note: "dari 18 menit" },
      { metric: "Abandoned call rate", value: "8%", note: "dari 32%" },
      { metric: "Call center cost", value: "-44%", note: "redirected to high-touch" },
    ],
    tags: ["Voice AI", "Insurance", "Call Center", "Bahasa Indonesia"],
    accent: "violet",
  },
  {
    slug: "ai-rag-manufacturing-knowledge",
    service: "suhu-ai",
    title: "RAG Knowledge Base Manufacturing SOP",
    client: "Manufacturer Tier-1 Otomotif",
    industry: "Manufaktur",
    location: "Karawang, Jawa Barat",
    year: "2025",
    duration: "16 minggu",
    summary:
      "RAG-based knowledge assistant untuk 2.400 SOP + technical doc manufacturer otomotif. Replace tribal knowledge transfer.",
    challenge:
      "Manufacturer otomotif dengan 1.800 karyawan + 2.400 SOP/technical document (mostly PDF + scan). Senior engineer aging (40%+ akan retire 5 tahun), tribal knowledge transfer gak structured. Junior engineer butuh 18 bulan ramp-up.",
    approach:
      "RAG knowledge base pakai stack: OCR untuk scan dokumen lama, embed semua content ke vector DB (Pinecone), query interface via Slack bot internal. Capability: 'how do I troubleshoot X process', 'show me SOP for Y'. Audit log + citation untuk traceability. On-premise hosting untuk security.",
    results: [
      { metric: "Engineer query response", value: "12 detik", note: "vs 2 jam manual" },
      { metric: "Junior ramp-up time", value: "8 bulan", note: "dari 18 bulan" },
      { metric: "SOP compliance audit", value: "98%", note: "external audit" },
      { metric: "Senior engineer time", value: "+34%", note: "redirected ke innovation" },
    ],
    tags: ["RAG", "Manufacturing", "Knowledge Base", "OCR"],
    accent: "neon",
  },
];

export const PORTFOLIO_STATS = {
  totalCases: CASE_STUDIES.length,
  totalClients: "1.000+",
  totalIndustries: 8,
  totalCities: "34 provinsi",
  yearsRunning: "Sejak 2018",
};

export function getCasesByService(serviceId: ServiceId): CaseStudy[] {
  return CASE_STUDIES.filter((c) => c.service === serviceId);
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getFeaturedCases(limit?: number): CaseStudy[] {
  const featured = CASE_STUDIES.filter((c) => c.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getRelatedCases(slug: string, limit: number = 3): CaseStudy[] {
  const current = getCaseBySlug(slug);
  if (!current) return [];
  return CASE_STUDIES.filter(
    (c) => c.slug !== slug && c.service === current.service
  ).slice(0, limit);
}
