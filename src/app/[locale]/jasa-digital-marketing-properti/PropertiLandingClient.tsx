"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircle,
  TrendingUp,
  TrendingDown,
  Clock,
  Gauge,
  Building2,
  AlertTriangle,
  Flame,
  Timer,
  ShieldX,
  Layers as LayersIcon,
  Store,
  Sparkles,
  Mail,
  Check,
  ChevronDown,
  Quote,
  Activity,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppLink from "@/components/WhatsAppLink";
import ComparisonTable from "@/components/sections/ComparisonTable";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ConsultationForm from "@/components/sections/ConsultationForm";
import { COMPANY } from "@/lib/constants";

const WA_NUMBER = COMPANY.whatsapp.replace(/\D/g, "");
const WA_MESSAGE =
  "Halo Para Suhu Digital! Saya tertarik untuk diskusi project digital marketing properti.";
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

const HERO_STATS = [
  { value: "4-8x", label: "Peningkatan Lead Rata-rata", Icon: TrendingUp },
  { value: "30-60%", label: "Penurunan Cost Per Lead", Icon: TrendingDown },
  { value: "3-6", label: "Bulan menuju Closing", Icon: Clock },
  { value: "95+", label: "PageSpeed Score Website", Icon: Gauge },
];

const TRUST_LOGOS = ["AP", "BG", "CW", "DH", "EM", "FT", "GS", "HV"];

const PAIN_POINTS = [
  {
    Icon: AlertTriangle,
    title: "Lead banyak, closing seuprit",
    desc: "Inquiry dari marketplace menumpuk, tetapi sebagian besar hanya window shopping. Hot lead tenggelam di antara noise, tim sales kewalahan filter manual.",
    stat: "Rata-rata 90% lead = window shopping",
  },
  {
    Icon: Flame,
    title: "Budget iklan terbakar tanpa attribution",
    desc: "Pengeluaran puluhan juta di Meta dan Google setiap bulan, tetapi tidak tahu channel mana yang benar-benar menghasilkan buyer hingga akad.",
    stat: "67% developer tidak track attribution hingga akad",
  },
  {
    Icon: Timer,
    title: "Sales cycle 3-12 bulan, lead dingin",
    desc: "Prospek butuh nurturing panjang. Tanpa CRM, drip content, dan auto follow-up, lead hilang ke kompetitor yang lebih persisten.",
    stat: "Tanpa nurturing, 70% lead hilang",
  },
  {
    Icon: ShieldX,
    title: "Trust online lemah",
    desc: "Buyer melakukan riset online berbulan-bulan sebelum akad. Tanpa presence digital yang kredibel, prospek mundur dan memilih developer yang lebih established.",
    stat: "82% buyer riset online berbulan-bulan",
  },
  {
    Icon: LayersIcon,
    title: "Listing kompleks, ribet kelola",
    desc: "Setiap cluster atau tower butuh landing page sendiri. Update harga, unit available, virtual tour, dan brosur semua manual dan rawan inconsistent.",
    stat: "Manual update = 4-6 jam per minggu",
  },
  {
    Icon: Store,
    title: "Marketplace bukan tempat closing",
    desc: "OLX, Rumah123, Lamudi hanya channel awareness. Mengandalkan 100% marketplace menempatkan brand Anda di posisi commodity yang mudah diadu harga.",
    stat: "Margin profit turun 15-30%",
  },
];

const APPROACH_PILLARS = [
  {
    step: "01",
    title: "Persona-based funnel",
    desc: "Buyer first-home, investor, dan end-user membutuhkan messaging yang berbeda. Kami segmentasi audience dan tailor creative per persona — relevance naik, CPL turun secara signifikan.",
    tools: ["Meta Business Suite", "Google Ads", "HubSpot CRM"],
    duration: "Setup: 1-2 minggu",
  },
  {
    step: "02",
    title: "Trust content engine",
    desc: "Video walkthrough, neighborhood guide, mortgage simulator, dan testimoni klien asli. Konten yang membangun kredibilitas, sekaligus di-rank di Google untuk traffic organik.",
    tools: ["WordPress", "Webflow", "Custom Next.js", "Google Analytics 4"],
    duration: "Setup: 2-4 minggu",
  },
  {
    step: "03",
    title: "Nurturing otomatis 24/7",
    desc: "WhatsApp chatbot, drip email, dan retargeting ads bekerja bersamaan. Prospek diingatkan terus tanpa tim Anda lelah follow-up manual — hingga mereka siap site visit.",
    tools: ["WhatsApp Business API", "Mailchimp", "ManyChat"],
    duration: "Setup: 1-2 minggu",
  },
  {
    step: "04",
    title: "Attribution & ROAS tracking",
    desc: "Setiap rupiah iklan terlacak dari channel mana hingga akad — bukan hanya sampai form submit. Setiap keputusan berbasis data, bukan asumsi.",
    tools: ["Google Tag Manager", "Looker Studio", "Microsoft Clarity"],
    duration: "Setup: 1 minggu",
  },
];

const SERVICES = [
  {
    id: "suhu-website",
    name: "Suhu Website",
    angle:
      "Landing page per cluster atau tower, plus portal listing master. Mobile-first, load < 2 detik, mortgage calculator built-in, integrasi WhatsApp dan CRM.",
    stat: "Avg load time klien: 1.4s",
    popular: true,
  },
  {
    id: "suhu-seo",
    name: "Suhu SEO",
    angle:
      "Local dan transactional keyword: 'rumah dijual {kota}', 'apartemen {area}', 'cluster {nama}'. High-intent search, lead organik yang gratis.",
    stat: "Avg organic traffic increase: +180%",
    popular: false,
  },
  {
    id: "suhu-ads",
    name: "Suhu Ads",
    angle:
      "Meta, Google, dan TikTok Ads dengan funnel WhatsApp + lead form. Audience targeting berbasis income, life-stage, behavior. Daily optimization.",
    stat: "Avg ROAS: 5.8x",
    popular: true,
  },
  {
    id: "suhu-socmed",
    name: "Suhu Socmed",
    angle:
      "Video walkthrough, drone shot, reels harian, neighborhood content. Brand menjadi top-of-mind di Instagram dan TikTok — bukan hanya OLX.",
    stat: "Avg engagement rate: 6.2%",
    popular: false,
  },
  {
    id: "suhu-ai",
    name: "Suhu AI",
    angle:
      "Chatbot WhatsApp / web yang mengkualifikasi lead 24/7. Mengumpulkan budget, area preference, dan timeline — sales tim hanya handle lead yang sudah hot.",
    stat: "Avg lead qualification time turun 75%",
    popular: false,
  },
];

const CASE_STUDIES = [
  {
    title: "Developer Apartemen Premium — Jakarta Selatan",
    category: "Mid-rise residential, 240 unit",
    duration: "6 bulan engagement",
    services: ["Suhu Website", "Suhu Ads", "Suhu SEO"],
    metrics: [
      { label: "Lead per bulan", value: "+4.2x" },
      { label: "CPL", value: "-58%" },
      { label: "Unit closed", value: "12 unit" },
    ],
    summary:
      "Microsite per tower + funnel ads Meta & Google dengan retargeting visitor. Hasil: lead volume naik 4x, sales cycle dari rata-rata 9 bulan menjadi 5 bulan.",
    chartData: [20, 28, 35, 48, 62, 84],
    quote:
      "Sales cycle yang dulunya 9 bulan, sekarang 5 bulan konsisten. Tim kami fokus closing, bukan filtering lead.",
    quoter: "Marketing Director, Developer Apartemen",
  },
  {
    title: "Agen Properti Premium — Bali",
    category: "Villa & investment property",
    duration: "12 bulan engagement",
    services: ["Suhu Socmed", "Suhu Ads"],
    metrics: [
      { label: "Booking site visit", value: "+8x" },
      { label: "IG follower", value: "+35K" },
      { label: "Inquiry international", value: "65%" },
    ],
    summary:
      "Konten reels harian dengan villa tour + ads bilingual (EN/ID) targeting investor Asia dan Eropa. Brand menjadi go-to untuk premium villa di Canggu dan Ubud.",
    chartData: [15, 22, 30, 42, 58, 78],
    quote:
      "Brand kami sekarang jadi top-of-mind untuk premium villa di Bali. Inquiry internasional naik signifikan.",
    quoter: "Founder, Agen Properti Bali",
  },
  {
    title: "Cluster Residential — Bekasi Selatan",
    category: "Landed house, 84 unit",
    duration: "4 bulan kampanye",
    services: ["Suhu Website", "Suhu Ads"],
    metrics: [
      { label: "Sold out", value: "84 unit" },
      { label: "ROAS", value: "7.2x" },
      { label: "Cost per Booking Fee", value: "Rp 480K" },
    ],
    summary:
      "Landing page mobile-first + Meta Ads dengan lookalike audience dari closed buyer. Sold out 84 unit dalam 90 hari, ROAS 7.2x dari total ad spend.",
    chartData: [10, 25, 45, 60, 75, 90],
    quote:
      "Sold out 84 unit dalam 90 hari adalah pencapaian terbaik kami selama 8 tahun.",
    quoter: "Sales Manager, Cluster Bekasi",
  },
];

const FAQS = [
  {
    q: "Berapa lama lead mulai datang setelah campaign launch?",
    a: "Untuk paid ads (Meta dan Google), biasanya hari ke-3 hingga ke-7 sudah mulai konsisten menghasilkan lead. Untuk SEO organik, 3-6 bulan untuk mencapai halaman 1 di keyword medium competition. Kami menyediakan weekly report supaya Anda mengetahui performance real-time.",
  },
  {
    q: "Bisa pegang multiple proyek atau cluster sekaligus?",
    a: "Tentu bisa. Kami biasa handle developer dengan 3-8 cluster atau tower aktif. Setiap proyek memiliki landing page, tracking, dan budget allocation sendiri — sehingga performance setiap proyek dapat di-compare apple-to-apple.",
  },
  {
    q: "Apa bedanya pakai Para Suhu vs agency umum untuk properti?",
    a: "Agency umum biasanya satu-size-fits-all. Kami spesialis vertikal yang memahami buyer journey properti yang panjang (3-12 bulan), funnel WhatsApp yang dominan di Indonesia, dan integrasi dengan CRM properti yang Anda gunakan. Selain itu, dari 150+ klien historis di sektor properti, kami sudah memiliki playbook yang teruji untuk berbagai skenario.",
  },
  {
    q: "Cocok untuk developer kecil atau khusus developer besar?",
    a: "Cocok keduanya. Tier Starter untuk agen independen atau developer 1-2 proyek dengan budget terkontrol. Tier Business dan Enterprise untuk developer dengan multiple proyek aktif yang membutuhkan full-funnel strategy lintas channel.",
  },
  {
    q: "Apakah handle juga listing di marketplace (Rumah123, OLX, Lamudi)?",
    a: "Ya, marketplace optimization adalah bagian dari strategy distribusi kami. Tetapi fokus utama tetap di owned channel (website dan database Anda sendiri) — sehingga Anda tidak dependent pada platform pihak ketiga yang algoritmanya dapat berubah kapan saja.",
  },
  {
    q: "Berapa minimum komitmen?",
    a: "Untuk project-based (website, branding): tidak ada minimum, one-time payment. Untuk retainer (SEO, Ads, Socmed): minimum 3 bulan supaya hasilnya dapat di-measure dan optimasi-nya compound. Kami tidak mengikat klien dengan kontrak panjang tanpa output yang jelas.",
  },
  {
    q: "Apakah kami bisa hanya pakai 1 layanan saja?",
    a: "Tentu bisa. Banyak klien memulai dengan 1 layanan prioritas (biasanya Suhu Ads untuk quick wins atau Suhu Website untuk foundation), lalu menambahkan layanan lain secara bertahap setelah unit economics terbukti. Tidak ada minimum bundle yang wajib.",
  },
  {
    q: "Bagaimana sistem reporting dan komunikasi?",
    a: "Anda mendapatkan dashboard real-time (Looker Studio atau custom) yang dapat diakses 24/7, weekly report singkat berisi performance dan action plan, monthly executive report dengan strategic insight, dan akses langsung ke project lead via Slack atau WhatsApp untuk pertanyaan strategis.",
  },
  {
    q: "Apa yang terjadi jika hasil tidak sesuai ekspektasi?",
    a: "Kami transparan tentang KPI dan milestone sejak awal. Jika setelah learning phase (60-90 hari) performance tidak sesuai forecast, kami evaluasi bersama: apakah perlu pivot strategy, adjust target, atau dalam kasus ekstrem, exit dengan refund proporsional sesuai kesepakatan kontrak. Tidak ada penalty exit untuk klien retainer.",
  },
  {
    q: "Bagaimana sistem pembayaran?",
    a: "Untuk project-based: 50% DP saat kickoff, 50% saat pre-launch milestone. Untuk retainer bulanan: pembayaran di awal bulan via transfer bank atau auto-debit. Untuk project skala besar (> Rp 100 juta), pembayaran dapat dipecah menjadi 3-4 milestone sesuai progress. Invoice resmi dan PPN dilampirkan.",
  },
];

function MiniChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 200;
  const height = 60;
  const stepX = width / (data.length - 1);
  const points = data
    .map((v, i) => `${i * stepX},${height - ((v - min) / range) * height}`)
    .join(" ");
  const fillPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className="w-full h-12"
    >
      <defs>
        <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#22d399" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22d399" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={fillPoints} fill="url(#chart-fill)" />
      <polyline
        points={points}
        fill="none"
        stroke="#22d399"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FAQItem({
  q,
  a,
  defaultOpen,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="group rounded-2xl border border-white/10 bg-suhu-black-card/50 hover:border-suhu-emerald/30 transition-all open:border-suhu-emerald/40 open:bg-suhu-black-card/80"
      open={defaultOpen}
    >
      <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
        <span className="font-display font-medium text-base md:text-lg text-white leading-snug pr-4">
          {q}
        </span>
        <ChevronDown className="w-5 h-5 text-suhu-emerald flex-shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-6 text-sm md:text-base text-white/70 leading-relaxed">
        {a}
      </div>
    </details>
  );
}

export default function PropertiLandingClient() {
  return (
    <>
      <Header />
      <main>
        {/* ───── SECTION 1: HERO ───── */}
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-suhu-emerald/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-suhu-emerald-dark/30 rounded-full blur-[150px]" />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-suhu-emerald/40 bg-suhu-emerald/10 rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-suhu-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-suhu-emerald" />
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                Slot project properti terbatas — 3 slot tersisa bulan ini
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-semibold text-[10vw] md:text-[6.5vw] lg:text-[5.2vw] leading-[0.95] text-white tracking-[-0.04em] max-w-6xl"
            >
              Properti Anda membutuhkan{" "}
              <span className="font-bold text-gradient-emerald">
                buyer yang siap akad.
              </span>
              <br />
              <span className="text-white/70 text-[8vw] md:text-[4.5vw] lg:text-[3.6vw]">
                Bukan sekadar lead yang menyatakan{" "}
                <span className="italic">&ldquo;sekedar survey&rdquo;</span>.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 max-w-3xl text-lg md:text-xl text-white/70 leading-relaxed"
            >
              Kami telah membantu 150+ developer dan agen properti di Indonesia
              mengubah marketing digital menjadi mesin closing. ROAS rata-rata
              4-8x dengan sales cycle yang lebih pendek 40-60%.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#konsultasi"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-suhu-emerald text-suhu-black font-medium rounded-full hover:bg-suhu-neon transition-all hover:gap-4"
              >
                <span>Konsultasi Gratis 30 Menit</span>
                <div className="w-8 h-8 rounded-full bg-suhu-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-suhu-neon" />
                </div>
              </Link>

              <WhatsAppLink
                href={WA_HREF}
                leadSource="properti_hero_wa"
                className="inline-flex items-center gap-2 px-7 py-4 border border-white/15 text-white rounded-full hover:border-suhu-emerald hover:bg-white/5 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Langsung</span>
              </WhatsAppLink>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 max-w-5xl"
            >
              {HERO_STATS.map((s, i) => {
                const Icon = s.Icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-5 rounded-2xl border border-white/10 bg-suhu-black-card/50 backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-suhu-emerald/10 border border-suhu-emerald/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-suhu-emerald" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-2xl text-gradient-emerald leading-none mb-1">
                        {s.value}
                      </div>
                      <div className="text-xs text-white/60 leading-snug">
                        {s.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16 pt-10 border-t border-white/5"
            >
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6">
                Dipercaya oleh 150+ brand properti di Indonesia
              </p>
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                {TRUST_LOGOS.map((logo, i) => (
                  <div
                    key={i}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-white/10 bg-suhu-black-card/40 flex items-center justify-center hover:border-suhu-emerald/30 transition-colors"
                  >
                    <span className="font-display font-semibold text-lg md:text-xl text-white/40">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/30 italic">
                *Identitas klien disamarkan demi menjaga kerahasiaan.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ───── SECTION 2: VISUAL PROOF ───── */}
        <section className="py-24 lg:py-32 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-suhu-emerald/10 rounded-3xl blur-2xl" />
                <div className="relative p-6 lg:p-8 rounded-3xl border border-white/10 bg-suhu-black-card backdrop-blur-sm overflow-hidden">
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-suhu-emerald/15 border border-suhu-emerald/40">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-suhu-emerald">
                      Real-time
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-suhu-emerald" />
                    <span className="ml-2 text-xs font-mono text-white/40">
                      properti-dashboard.parasuhu.id
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-suhu-emerald" />
                    <span className="text-xs font-mono uppercase tracking-wider text-white/60">
                      Lead Flow (30 hari terakhir)
                    </span>
                  </div>
                  <div className="font-display font-bold text-4xl text-white mb-1">
                    1,247{" "}
                    <span className="text-suhu-emerald text-2xl font-mono">
                      ▲ 42%
                    </span>
                  </div>

                  {/* Stylized chart */}
                  <svg
                    viewBox="0 0 400 120"
                    preserveAspectRatio="none"
                    className="w-full h-32 mt-4 mb-6"
                  >
                    <defs>
                      <linearGradient
                        id="dash-fill"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#22d399"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#22d399"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="0,120 0,90 30,85 60,78 90,82 120,65 150,55 180,60 210,45 240,40 270,30 300,38 330,22 360,18 400,10 400,120"
                      fill="url(#dash-fill)"
                    />
                    <polyline
                      points="0,90 30,85 60,78 90,82 120,65 150,55 180,60 210,45 240,40 270,30 300,38 330,22 360,18 400,10"
                      fill="none"
                      stroke="#22d399"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Inquiry hari ini", value: "47" },
                      { label: "Hot leads", value: "12" },
                      { label: "Site visit terjadwal", value: "8" },
                      { label: "ROAS", value: "5.8x" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="px-3 py-3 rounded-xl border border-white/10 bg-suhu-black/40"
                      >
                        <div className="text-[10px] font-mono uppercase tracking-wider text-white/50 mb-1">
                          {stat.label}
                        </div>
                        <div className="font-display font-bold text-2xl text-suhu-emerald">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-suhu-black/60 border border-white/10">
                    <span className="text-[10px] font-mono text-white/60">
                      Dashboard real-time klien kami
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-8 h-px bg-suhu-emerald" />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                    Transparansi Total
                  </span>
                </div>
                <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
                  Lebih dari sekadar laporan bulanan.{" "}
                  <span className="font-bold text-gradient-emerald">
                    Anda mendapatkan dashboard real-time.
                  </span>
                </h2>

                <ul className="mt-10 space-y-5">
                  {[
                    "Pantau performa kampanye 24/7 dari device manapun",
                    "Track kualitas lead dari awareness hingga akad",
                    "Approve creative dan request revisi dari satu tempat",
                    "Akses report otomatis kapan saja yang Anda butuhkan",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-suhu-emerald/15 border border-suhu-emerald/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-suhu-emerald" />
                      </div>
                      <span className="text-lg text-white/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───── SECTION 3: PAIN POINTS ───── */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  Tantangan Industri Properti
                </span>
              </div>
              <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
                Marketing properti{" "}
                <span className="font-bold text-gradient-emerald">
                  tidak seperti industri lain.
                </span>
              </h2>
              <p className="mt-8 text-lg text-white/60 leading-relaxed">
                Sales cycle panjang, harga premium, dan trust signals yang
                kompleks — kami sudah menemui semuanya, dan punya playbook
                untuk masing-masing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PAIN_POINTS.map((p, i) => {
                const Icon = p.Icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group p-8 rounded-3xl border border-white/10 bg-suhu-black-card/50 hover:border-suhu-emerald/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-6 group-hover:bg-suhu-emerald/10 group-hover:border-suhu-emerald/40 transition-all">
                      <Icon className="w-5 h-5 text-red-400 group-hover:text-suhu-emerald transition-colors" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-white mb-3 tracking-[-0.02em]">
                      {p.title}
                    </h3>
                    <p className="text-sm text-white/65 leading-relaxed mb-5">
                      {p.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/5 border border-red-500/20">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-red-300">
                        {p.stat}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 p-8 lg:p-10 rounded-3xl border border-suhu-emerald/30 bg-gradient-to-br from-suhu-emerald-dark/20 to-suhu-black flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <p className="text-lg text-white/85 leading-relaxed max-w-2xl">
                Tantangan-tantangan di atas adalah bagian dari keseharian kami
                menangani klien properti. Setiap masalah, kami punya playbook
                yang teruji.
              </p>
              <WhatsAppLink
                href={WA_HREF}
                leadSource="properti_painpoints_wa"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-suhu-emerald text-suhu-black font-medium rounded-full hover:bg-suhu-neon transition-all flex-shrink-0"
              >
                <span>Konsultasikan situasi spesifik Anda</span>
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </WhatsAppLink>
            </motion.div>
          </div>
        </section>

        {/* ───── SECTION 4: APPROACH 4 PILAR ───── */}
        <section className="py-24 lg:py-32 bg-suhu-black-card/30 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  Pendekatan Kami
                </span>
              </div>
              <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
                4 pilar yang{" "}
                <span className="font-bold text-gradient-emerald">
                  mengubah lead menjadi akad.
                </span>
              </h2>
              <p className="mt-8 text-lg text-white/60 leading-relaxed">
                Pendekatan kami yang sudah teruji di 150+ project properti
                lintas tipologi — apartemen, landed house, villa, dan komersial.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {APPROACH_PILLARS.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group p-8 lg:p-10 rounded-3xl border border-white/10 bg-suhu-black/60 hover:border-suhu-emerald/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display font-bold text-3xl text-suhu-emerald/40 group-hover:text-suhu-neon transition-colors">
                      /{p.step}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-suhu-emerald/10 border border-suhu-emerald/30 text-[10px] font-mono uppercase tracking-wider text-suhu-emerald">
                      <Timer className="w-3 h-3" />
                      {p.duration}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-white mb-4 tracking-[-0.02em]">
                    {p.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-3">
                      Tools & Platform
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.tools.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── SECTION 5: COMPARISON TABLE ───── */}
        <ComparisonTable />

        {/* ───── SECTION 6: SERVICES ───── */}
        <section className="py-24 lg:py-32 bg-suhu-black-card/30 border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  Layanan untuk Properti
                </span>
              </div>
              <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
                Layanan yang{" "}
                <span className="font-bold text-gradient-emerald">
                  fit untuk industri properti.
                </span>
              </h2>
              <p className="mt-8 text-lg text-white/60 leading-relaxed">
                Pilih layanan individual sesuai prioritas Anda, atau ambil
                bundle untuk full-funnel coverage.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative group p-8 rounded-3xl border border-white/10 bg-suhu-black/60 hover:border-suhu-emerald/40 transition-all"
                >
                  {s.popular && (
                    <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-suhu-neon text-suhu-black text-[10px] font-mono uppercase tracking-wider">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display font-semibold text-2xl text-white mb-4 tracking-[-0.02em]">
                    {s.name}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed mb-6 min-h-[100px]">
                    {s.angle}
                  </p>
                  <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1">
                        Performance metric
                      </div>
                      <div className="text-sm font-medium text-suhu-emerald">
                        {s.stat}
                      </div>
                    </div>
                    <Link
                      href={`/services/${s.id}`}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-suhu-emerald hover:bg-suhu-emerald/10 transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-suhu-emerald transition-colors" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── SECTION 7: CASE STUDIES ───── */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  Hasil Nyata
                </span>
              </div>
              <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
                Case studies yang{" "}
                <span className="font-bold text-gradient-emerald">
                  bukan hanya angka di atas kertas.
                </span>
              </h2>
              <p className="mt-8 text-lg text-white/60 leading-relaxed">
                Tiga project properti dengan metrik yang ter-track dan
                testimoni langsung dari tim sales klien kami.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {CASE_STUDIES.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-8 rounded-3xl border border-white/10 bg-suhu-black-card/50 hover:border-suhu-emerald/40 transition-all flex flex-col"
                >
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald mb-3">
                    {c.duration}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-2 tracking-[-0.02em]">
                    {c.title}
                  </h3>
                  <p className="text-sm text-white/50 mb-5">{c.category}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {c.services.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-white/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <MiniChart data={c.chartData} />
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {c.metrics.map((m, j) => (
                      <div key={j} className="text-center">
                        <div className="font-display font-bold text-lg text-gradient-emerald leading-none mb-1">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-white/50 font-mono">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-white/65 leading-relaxed mb-6 flex-1">
                    {c.summary}
                  </p>

                  <div className="pt-6 border-t border-white/5">
                    <Quote className="w-5 h-5 text-suhu-emerald/40 mb-3" />
                    <p className="text-sm text-white/75 italic leading-relaxed mb-3">
                      &ldquo;{c.quote}&rdquo;
                    </p>
                    <p className="text-xs text-white/40 font-mono">
                      — {c.quoter}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── SECTION 8: CONSULTATION FORM ───── */}
        <div id="konsultasi">
          <ConsultationForm />
        </div>

        {/* ───── SECTION 9: PROCESS TIMELINE ───── */}
        <ProcessTimeline />

        {/* ───── SECTION 10: FAQ ───── */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <div className="lg:sticky lg:top-32">
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="w-8 h-px bg-suhu-emerald" />
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                      FAQ Properti
                    </span>
                  </div>
                  <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
                    Pertanyaan yang{" "}
                    <span className="font-bold text-gradient-emerald">
                      sering ditanyakan.
                    </span>
                  </h2>
                  <p className="mt-8 text-base text-white/60 leading-relaxed">
                    Tidak menemukan jawaban yang Anda cari? Hubungi tim kami
                    langsung — kami merespons dalam 2 jam kerja.
                  </p>
                  <WhatsAppLink
                    href={WA_HREF}
                    leadSource="properti_faq_wa"
                    className="mt-8 inline-flex items-center gap-2 px-5 py-3 border border-white/15 rounded-full text-sm text-white hover:border-suhu-emerald hover:bg-suhu-emerald/10 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat WhatsApp</span>
                  </WhatsAppLink>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-7"
              >
                <div className="space-y-3">
                  {FAQS.map((f, i) => (
                    <FAQItem
                      key={i}
                      q={f.q}
                      a={f.a}
                      defaultOpen={i === 0}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───── SECTION 11: FINAL CTA ───── */}
        <section className="relative py-24 lg:py-32 bg-suhu-black-card/30 border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-suhu-emerald/15 rounded-full blur-[120px]" />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-suhu-emerald/40 bg-suhu-emerald/10 rounded-full mb-8">
                <Building2 className="w-3.5 h-3.5 text-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  Slot Terbatas
                </span>
              </div>

              <h2 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-white mb-6">
                Slot project baru kami{" "}
                <span className="font-bold text-gradient-emerald">
                  terbatas setiap bulan.
                </span>
              </h2>

              <p className="text-2xl md:text-3xl font-display text-white/80 mb-8">
                Bisnis properti Anda butuh level-up digital?
              </p>

              <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-12">
                Diskusi awal selalu gratis. Kami assess kebutuhan Anda, berikan
                rekomendasi solusi, dan estimasi investasi — semua sebelum Anda
                commit apapun. Tidak ada hard-selling, tidak ada pressure.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="#konsultasi"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-suhu-emerald text-suhu-black font-medium rounded-full hover:bg-suhu-neon transition-all hover:gap-4"
                >
                  <span>Konsultasi Gratis 30 Menit</span>
                  <div className="w-8 h-8 rounded-full bg-suhu-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-suhu-neon" />
                  </div>
                </Link>

                <WhatsAppLink
                  href={WA_HREF}
                  leadSource="properti_finalcta_wa"
                  className="inline-flex items-center gap-2 px-7 py-4 border border-white/15 text-white rounded-full hover:border-suhu-emerald hover:bg-white/5 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Langsung</span>
                </WhatsAppLink>

                <a
                  href={`mailto:${COMPANY.email}?subject=Konsultasi%20Project%20Properti`}
                  className="inline-flex items-center gap-2 px-7 py-4 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{COMPANY.email}</span>
                </a>
              </div>

              <p className="mt-10 text-sm text-white/40 font-mono">
                Respon dalam 2 jam kerja (Senin–Jumat, 09:00–18:00 WIB)
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
