"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Award, Target, Users, Zap, MapPin, Building2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/sections/CTASection";
import { COMPANY, t as bi, type Locale } from "@/lib/constants";

const VALUE_ICONS = [Zap, Target, Users, Award];

type ValueItem = { title: string; desc: string };
type Milestone = { year: string; event: string };

export default function AboutPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("aboutPage");
  const values = t.raw("values") as ValueItem[];
  const milestones = t.raw("milestones") as Milestone[];
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
              className="mt-10 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed"
            >
              {t("hero")}
            </motion.p>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:sticky lg:top-32"
                >
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="w-8 h-px bg-suhu-emerald" />
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                      {t("storyEyebrow")}
                    </span>
                  </div>

                  <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
                    {t("storyTitle")}
                    <br />
                    <span className="font-bold text-gradient-emerald">
                      {t("storyHighlight")}
                    </span>
                  </h2>
                </motion.div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-lg text-white/70 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {t("p1Pre")}{" "}
                  <span className="text-white font-medium">{t("p1Highlight")}</span>{" "}
                  {t("p1Post")}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t("p2")}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t("p3Pre")}{" "}
                  <span className="text-white font-medium">{t("p3Highlight")}</span>
                  {t("p3Post")}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {t("p4Pre")}{" "}
                  <span className="text-white font-medium">{t("p4Highlight")}</span>{" "}
                  {t("p4Post")}
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
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
                  {t("valuesEyebrow")}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-white"
              >
                {t("valuesTitle")}
                <br />
                <span className="font-bold text-gradient-emerald">
                  {t("valuesHighlight")}
                </span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => {
                const Icon = VALUE_ICONS[i] ?? Zap;
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
                      {v.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">{v.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="w-8 h-px bg-suhu-emerald" />
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                      {t("timelineEyebrow")}
                    </span>
                  </div>
                  <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
                    {t("timelineTitle")}
                    <br />
                    <span className="font-bold text-gradient-emerald">
                      {t("timelineHighlight")}
                    </span>
                  </h2>
                </motion.div>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-px">
                  {milestones.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group py-8 border-t border-white/10 first:border-t-0 hover:pl-4 transition-all duration-500 flex items-baseline gap-8"
                    >
                      <span className="font-display font-bold text-3xl md:text-5xl text-suhu-emerald/40 group-hover:text-suhu-neon transition-colors min-w-[100px]">
                        {m.year}
                      </span>
                      <p className="text-lg md:text-xl text-white/70 group-hover:text-white transition-colors leading-relaxed">
                        {m.event}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office */}
        <section className="py-24 lg:py-32 bg-suhu-black-card/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  {t("officeEyebrow")}
                </span>
                <span className="w-8 h-px bg-suhu-emerald" />
              </div>
              <h2 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-white">
                <span className="font-bold text-gradient-emerald">
                  {t("officeTitle")}
                </span>
                <br />
                {t("officeAfter")}
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto p-8 lg:p-12 border border-white/10 rounded-3xl bg-suhu-black/60 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-suhu-emerald/10 border border-suhu-emerald/20 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-suhu-emerald" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald mb-2">
                    {t("officeHeading")}
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                    Infiniti Office, IDX Tower 1
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {bi(COMPANY.address, locale)}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-sm text-white/80 hover:border-suhu-emerald hover:text-white transition-all"
                    >
                      {COMPANY.phone}
                    </a>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-sm text-white/80 hover:border-suhu-emerald hover:text-white transition-all"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
