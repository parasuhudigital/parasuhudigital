"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  GraduationCap,
  Briefcase,
  Layers,
  Zap,
  MapPin,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/sections/CTASection";
import WhatsAppLink from "@/components/WhatsAppLink";
import { COMPANY } from "@/lib/constants";

const PILLAR_ICONS = [GraduationCap, Briefcase, Layers, Zap];

type Pillar = { title: string; desc: string };
type Opening = { title: string; department: string; type: string; location: string };

export default function CareersPage() {
  const t = useTranslations("careersPage");
  const pillars = t.raw("pillars") as Pillar[];
  const openings = t.raw("openings") as Opening[];

  const waBase = t("waMessage");
  const waNumber = COMPANY.whatsapp.replace(/\D/g, "");
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waBase)}`;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-suhu-emerald/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-suhu-emerald-dark/30 rounded-full blur-[150px]" />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-suhu-emerald/30 bg-suhu-emerald/5 rounded-full mb-8"
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-semibold text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] text-white tracking-[-0.04em] max-w-6xl"
            >
              {t("title")}
              <br />
              <span className="font-bold text-gradient-emerald">
                {t("titleHighlight")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 max-w-3xl text-lg md:text-xl text-white/70 leading-relaxed"
            >
              {t("hero")}
            </motion.p>
          </div>
        </section>

        {/* Why Para Suhu */}
        <section className="relative py-24 lg:py-32 bg-suhu-black-card/30 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
            <div className="max-w-3xl mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  {t("whyEyebrow")}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-white"
              >
                {t("whyTitle")}
                <br />
                <span className="font-bold text-gradient-emerald">
                  {t("whyHighlight")}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 text-lg text-white/60 leading-relaxed"
              >
                {t("whyIntro")}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((p, i) => {
                const Icon = PILLAR_ICONS[i] ?? Zap;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative p-8 lg:p-10 border border-white/10 rounded-3xl bg-suhu-black/60 backdrop-blur-sm hover:border-suhu-emerald/40 transition-all duration-500"
                  >
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-suhu-emerald/10 border border-suhu-emerald/20 flex items-center justify-center group-hover:bg-suhu-emerald group-hover:border-suhu-emerald transition-all duration-500">
                        <Icon className="w-6 h-6 text-suhu-emerald group-hover:text-suhu-black transition-colors" />
                      </div>
                      <span className="font-mono text-sm text-white/30 group-hover:text-suhu-neon transition-colors">
                        /0{i + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-3xl text-white mb-4 tracking-[-0.02em]">
                      {p.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">{p.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  {t("openingsEyebrow")}
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-white"
              >
                {t("openingsTitle")}{" "}
                <span className="font-bold text-gradient-emerald">
                  {t("openingsHighlight")}
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 text-lg text-white/60 leading-relaxed"
              >
                {t("openingsIntro")}
              </motion.p>
            </div>

            <div className="space-y-px">
              {openings.map((o, i) => {
                const positionHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(`${waBase} ${o.title} — ${o.department}`)}`;
                const leadSlug = o.title.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group py-6 md:py-8 border-t border-white/10 first:border-t-0 hover:pl-4 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald mb-2">
                        {o.department}
                      </div>
                      <h3 className="font-display font-semibold text-2xl md:text-3xl text-white tracking-[-0.02em] group-hover:text-suhu-neon transition-colors">
                        {o.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 md:gap-5 text-sm text-white/60">
                      <span className="inline-flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-suhu-emerald/60" />
                        {o.type}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-suhu-emerald/60" />
                        {o.location}
                      </span>
                      <WhatsAppLink
                        href={positionHref}
                        leadSource={`career_apply_${leadSlug}`}
                        leadCategory="career_apply"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 rounded-full text-sm text-white hover:border-suhu-emerald hover:bg-suhu-emerald/10 transition-all"
                      >
                        <span>{t("applyWa")}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </WhatsAppLink>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-24 lg:py-32 bg-suhu-black-card/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  {t("applyEyebrow")}
                </span>
                <span className="w-8 h-px bg-suhu-emerald" />
              </div>
              <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
                {t("applyTitle")}{" "}
                <span className="font-bold text-gradient-emerald">
                  {t("applyHighlight")}
                </span>
              </h2>
              <p className="mt-8 text-lg text-white/60 leading-relaxed">
                {t("applyIntro")}
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href={`mailto:${COMPANY.email}?subject=${encodeURIComponent("Job Application — Para Suhu Digital")}`}
                className="group p-8 border border-white/10 rounded-3xl bg-suhu-black/60 backdrop-blur-sm hover:border-suhu-emerald/40 transition-all flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-suhu-emerald/10 border border-suhu-emerald/20 flex items-center justify-center flex-shrink-0 group-hover:bg-suhu-emerald group-hover:border-suhu-emerald transition-all">
                  <Mail className="w-6 h-6 text-suhu-emerald group-hover:text-suhu-black transition-colors" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald mb-2">
                    {t("applyEmail")}
                  </div>
                  <div className="font-display font-semibold text-xl text-white tracking-[-0.02em] break-all">
                    {COMPANY.email}
                  </div>
                </div>
              </a>

              <WhatsAppLink
                href={waUrl}
                leadSource="career_apply_main"
                leadCategory="career_apply"
                className="group p-8 border border-white/10 rounded-3xl bg-suhu-black/60 backdrop-blur-sm hover:border-suhu-emerald/40 transition-all flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-suhu-emerald/10 border border-suhu-emerald/20 flex items-center justify-center flex-shrink-0 group-hover:bg-suhu-emerald group-hover:border-suhu-emerald transition-all">
                  <MessageCircle className="w-6 h-6 text-suhu-emerald group-hover:text-suhu-black transition-colors" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald mb-2">
                    {t("applyWa")}
                  </div>
                  <div className="font-display font-semibold text-xl text-white tracking-[-0.02em]">
                    {COMPANY.whatsappDisplay}
                  </div>
                </div>
              </WhatsAppLink>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
