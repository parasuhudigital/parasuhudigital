"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Plane,
  Car,
  Gamepad2,
  GraduationCap,
  Banknote,
  UtensilsCrossed,
  Globe,
  Smartphone,
  Code2,
  TrendingUp,
  Target,
  Hash,
  Rocket,
  Palette,
  Sparkles,
  ArrowUpRight,
  Check,
  MessageCircle,
  AlertTriangle,
  Compass,
  Plus,
  Minus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/sections/CTASection";
import { SERVICES, COMPANY } from "@/lib/constants";
import { trackLead } from "@/lib/analytics";
import type { NicheData } from "@/lib/niches";

const nicheIconMap: Record<string, LucideIcon> = {
  Building2,
  Stethoscope,
  Plane,
  Car,
  Gamepad2,
  GraduationCap,
  Banknote,
  UtensilsCrossed,
};

const serviceIconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Code2,
  TrendingUp,
  Target,
  Hash,
  Rocket,
  Palette,
  Sparkles,
};

export default function NicheLandingPage({ niche }: { niche: NicheData }) {
  const NicheIcon = nicheIconMap[niche.icon] ?? Building2;
  const waNumber = COMPANY.whatsapp.replace(/\D/g, "");
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(niche.whatsappMessage)}`;

  return (
    <>
      <Header />
      <main>
        <HeroSection niche={niche} NicheIcon={NicheIcon} waLink={waLink} />
        <StatsBar stats={niche.stats} />
        <PainPointsSection painPoints={niche.painPoints} nicheName={niche.name} />
        <ApproachSection approach={niche.approach} nicheName={niche.name} />
        <RelevantServicesSection
          relevantServices={niche.relevantServices}
          nicheName={niche.name}
        />
        <CaseStudiesSection
          caseStudies={niche.caseStudies}
          nicheName={niche.name}
        />
        <FAQSection faqs={niche.faqs} nicheName={niche.name} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

function HeroSection({
  niche,
  NicheIcon,
  waLink,
}: {
  niche: NicheData;
  NicheIcon: LucideIcon;
  waLink: string;
}) {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-suhu-emerald/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-suhu-emerald-dark/30 rounded-full blur-[150px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/40 mb-8">
          <Link href="/" className="hover:text-suhu-emerald transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/services"
            className="hover:text-suhu-emerald transition-colors"
          >
            Industri
          </Link>
          <span>/</span>
          <span className="text-suhu-emerald">{niche.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-9">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-suhu-emerald/10 border border-suhu-emerald/30 flex items-center justify-center">
                <NicheIcon className="w-6 h-6 text-suhu-emerald" />
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                {niche.hero.eyebrow}
              </span>
            </div>

            <h1 className="font-display font-semibold text-[12vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.9] text-white tracking-[-0.04em]">
              {niche.hero.title}
              <br />
              <span className="font-bold text-gradient-emerald">
                {niche.hero.titleHighlight}
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
              {niche.hero.subtitle}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-suhu-emerald text-suhu-black font-medium rounded-full hover:bg-suhu-neon transition-all"
              >
                <span>Diskusi project sekarang</span>
                <div className="w-8 h-8 rounded-full bg-suhu-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-suhu-neon" />
                </div>
              </Link>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackLead({
                    content_name: `niche_${niche.slug}_wa`,
                    content_category: "whatsapp_click",
                  })
                }
                className="inline-flex items-center gap-2 px-7 py-4 border border-white/15 text-white rounded-full hover:border-suhu-emerald hover:bg-white/5 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar({ stats }: { stats: NicheData["stats"] }) {
  return (
    <section className="border-y border-white/5 bg-suhu-black-card/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center md:text-left"
            >
              <div className="font-display font-bold text-4xl md:text-5xl text-gradient-emerald tracking-[-0.03em]">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-white/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/30">
          * Range rata-rata performance klien Para Suhu di industri terkait.
          Hasil aktual disesuaikan dengan brief project & ad spend.
        </p>
      </div>
    </section>
  );
}

function PainPointsSection({
  painPoints,
  nicheName,
}: {
  painPoints: NicheData["painPoints"];
  nicheName: string;
}) {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-suhu-emerald" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                Pain Points
              </span>
            </div>
            <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
              Pasti lo udah ngerasain
              <br />
              <span className="font-bold text-gradient-emerald">
                challenge ini.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg text-white/60 leading-relaxed">
              Industri {nicheName.toLowerCase()} punya dinamika unik. Setelah
              ngebantu puluhan klien di sektor ini sejak 2018, kita ngumpulin 6
              masalah paling sering muncul — dan punya playbook untuk solve-nya.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-7 rounded-3xl border border-white/10 bg-suhu-black-card/40 hover:border-suhu-emerald/40 hover:bg-suhu-black-card/70 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-suhu-emerald/10 border border-suhu-emerald/30 flex items-center justify-center flex-shrink-0 group-hover:bg-suhu-emerald/20 transition-colors">
                  <AlertTriangle className="w-5 h-5 text-suhu-emerald" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-xl text-white mb-2 tracking-[-0.02em]">
                    {pain.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection({
  approach,
  nicheName,
}: {
  approach: NicheData["approach"];
  nicheName: string;
}) {
  return (
    <section className="py-24 lg:py-32 bg-suhu-black-card/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-suhu-emerald" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
              Our Approach
            </span>
            <span className="w-8 h-px bg-suhu-emerald" />
          </div>
          <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
            4 pilar yang
            <br />
            <span className="font-bold text-gradient-emerald">
              jalanin growth lo.
            </span>
          </h2>
          <p className="mt-8 text-lg text-white/60 leading-relaxed">
            Pendekatan kita untuk klien {nicheName.toLowerCase()} bukan template
            generic. Disusun spesifik dari behavior buyer & sales cycle di
            industri ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {approach.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-suhu-black hover:border-suhu-emerald/40 transition-all overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-suhu-emerald/5 rounded-full blur-2xl group-hover:bg-suhu-emerald/10 transition-colors" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                    /0{i + 1}
                  </span>
                  <Compass className="w-4 h-4 text-suhu-emerald/60" />
                </div>
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-white mb-4 tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="text-base text-white/65 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelevantServicesSection({
  relevantServices,
  nicheName,
}: {
  relevantServices: NicheData["relevantServices"];
  nicheName: string;
}) {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-suhu-emerald" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                Layanan untuk {nicheName}
              </span>
            </div>
            <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
              Layanan yang
              <br />
              <span className="font-bold text-gradient-emerald">
                paling relevan.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg text-white/60 leading-relaxed">
              Dari 9 layanan Suhu Series, ini yang paling sering kita combine
              untuk klien {nicheName.toLowerCase()}. Boleh ambil individual atau
              bundling — biar synergy-nya maksimal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {relevantServices.map((rs, i) => {
            const service = SERVICES.find((s) => s.id === rs.id);
            if (!service) return null;
            const Icon = serviceIconMap[service.icon] ?? Globe;

            return (
              <motion.div
                key={rs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  href={service.slug}
                  className="group block h-full p-7 rounded-3xl border border-white/10 bg-suhu-black-card/50 hover:border-suhu-emerald/40 hover:bg-suhu-black-card transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl border border-white/10 bg-suhu-black flex items-center justify-center group-hover:border-suhu-emerald/40 transition-all">
                      <Icon className="w-5 h-5 text-suhu-emerald" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-suhu-emerald group-hover:rotate-45 transition-all" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em] group-hover:text-suhu-neon transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {rs.angle}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection({
  caseStudies,
  nicheName,
}: {
  caseStudies: NicheData["caseStudies"];
  nicheName: string;
}) {
  return (
    <section className="py-24 lg:py-32 bg-suhu-black-card/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-suhu-emerald" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                Case Studies
              </span>
            </div>
            <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
              Hasil di
              <br />
              <span className="font-bold text-gradient-emerald">
                industri {nicheName.toLowerCase()}.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-lg text-white/60 leading-relaxed">
              Studi kasus di bawah merepresentasikan tipikal scope & outcome
              yang kita deliver. Nama klien & detail akan kita share di sesi
              diskusi (NDA-friendly).
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 lg:p-10 rounded-3xl border border-white/10 bg-suhu-black hover:border-suhu-emerald/40 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-6">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald mb-3">
                    Case Study /0{i + 1}
                  </div>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-white mb-2 tracking-[-0.02em]">
                    {cs.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/50 mb-5">
                    <span>{cs.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span>{cs.duration}</span>
                  </div>
                  <p className="text-base text-white/65 leading-relaxed mb-5">
                    {cs.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono uppercase tracking-wider text-suhu-emerald px-3 py-1.5 rounded-full border border-suhu-emerald/30 bg-suhu-emerald/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-10">
                  <div className="grid grid-cols-3 gap-4">
                    {cs.metrics.map((m, j) => (
                      <div key={j}>
                        <div className="font-display font-bold text-3xl md:text-4xl text-gradient-emerald tracking-[-0.03em]">
                          {m.value}
                        </div>
                        <div className="mt-2 text-xs font-mono uppercase tracking-[0.15em] text-white/40 leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({
  faqs,
  nicheName,
}: {
  faqs: NicheData["faqs"];
  nicheName: string;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-suhu-emerald" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
              FAQ
            </span>
            <span className="w-8 h-px bg-suhu-emerald" />
          </div>
          <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
            Hal-hal yang
            <br />
            <span className="font-bold text-gradient-emerald">
              biasa ditanya.
            </span>
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Pertanyaan paling sering dari calon klien {nicheName.toLowerCase()}.
            Belum kejawab? Langsung chat WhatsApp aja.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-suhu-emerald/40 bg-suhu-black-card/70"
                    : "border-white/10 bg-suhu-black-card/40 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left p-6 lg:p-7"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display font-medium text-lg md:text-xl tracking-[-0.01em] transition-colors ${
                      isOpen ? "text-suhu-neon" : "text-white"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                      isOpen
                        ? "border-suhu-emerald bg-suhu-emerald/10"
                        : "border-white/15"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-suhu-emerald" />
                    ) : (
                      <Plus className="w-4 h-4 text-white/60" />
                    )}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-7 pb-6 lg:pb-7 pt-1 text-base text-white/65 leading-relaxed border-t border-white/5">
                        <p className="pt-5">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
