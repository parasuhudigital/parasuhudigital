"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MapPin, Calendar, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/sections/CTASection";
import { useLocale, useTranslations } from "next-intl";
import { SERVICES, t as bi, type Locale } from "@/lib/constants";
import { CASE_STUDIES, PORTFOLIO_STATS, localizeCaseStudy, type ServiceId } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const ACCENT_MAP = {
  emerald: "from-suhu-emerald/20 to-suhu-emerald/0 border-suhu-emerald/30",
  neon: "from-suhu-neon/20 to-suhu-neon/0 border-suhu-neon/30",
  amber: "from-amber-400/20 to-amber-400/0 border-amber-400/30",
  violet: "from-violet-400/20 to-violet-400/0 border-violet-400/30",
  cyan: "from-cyan-400/20 to-cyan-400/0 border-cyan-400/30",
  rose: "from-rose-400/20 to-rose-400/0 border-rose-400/30",
} as const;

const ACCENT_TEXT = {
  emerald: "text-suhu-emerald",
  neon: "text-suhu-neon",
  amber: "text-amber-400",
  violet: "text-violet-400",
  cyan: "text-cyan-400",
  rose: "text-rose-400",
} as const;

export default function PortfolioPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("portfolioPage");
  const [activeFilter, setActiveFilter] = useState<ServiceId | "all">("all");

  const filteredCases = useMemo(() => {
    const all = CASE_STUDIES.map((c) => localizeCaseStudy(c, locale));
    if (activeFilter === "all") return all;
    return all.filter((c) => c.service === activeFilter);
  }, [activeFilter, locale]);

  const filters = useMemo(
    () => [
      { id: "all" as const, name: t("filterAll"), count: CASE_STUDIES.length },
      ...SERVICES.map((s) => ({
        id: s.id,
        name: s.name,
        count: CASE_STUDIES.filter((c) => c.service === s.id).length,
      })),
    ],
    [t]
  );

  return (
    <>
      <Header />
      <main>
        {/* ============ HERO ============ */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-suhu-emerald/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-suhu-neon/10 rounded-full blur-[140px]" />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-suhu-emerald/30 bg-suhu-emerald/5 rounded-full mb-8"
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                {t("tag", { count: CASE_STUDIES.length })}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-semibold text-[12vw] md:text-[7vw] lg:text-[6vw] leading-[0.95] text-white tracking-[-0.04em] max-w-6xl"
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
              className="mt-8 max-w-3xl text-lg md:text-xl text-white/70 leading-relaxed"
            >
              <strong className="text-white">
                {PORTFOLIO_STATS.totalClients} {t("intro1")}
              </strong>{" "}
              {t("intro2", { count: CASE_STUDIES.length })}
            </motion.p>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
            >
              {[
                { value: PORTFOLIO_STATS.totalClients, label: t("statClients") },
                { value: `${CASE_STUDIES.length}+`, label: t("statCases") },
                { value: "8", label: t("statIndustries") },
                { value: bi(PORTFOLIO_STATS.totalCities, locale), label: t("statCoverage") },
              ].map((stat, i) => (
                <div key={i} className="border-l border-white/10 pl-5">
                  <div className="font-display text-3xl md:text-4xl font-semibold text-suhu-neon">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-white/50 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ============ FILTER ============ */}
        <section className="sticky top-0 z-30 bg-suhu-black/85 backdrop-blur-xl border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-2 px-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={cn(
                    "shrink-0 px-4 py-2 rounded-full border text-sm transition-all whitespace-nowrap",
                    activeFilter === f.id
                      ? "bg-suhu-emerald text-suhu-black border-suhu-emerald font-medium"
                      : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                  )}
                >
                  {f.name}
                  <span
                    className={cn(
                      "ml-2 text-xs font-mono",
                      activeFilter === f.id ? "text-suhu-black/60" : "text-white/40"
                    )}
                  >
                    {f.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CASE GRID ============ */}
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((c, i) => {
                const service = SERVICES.find((s) => s.id === c.service);
                const accentBg = ACCENT_MAP[c.accent];
                const accentText = ACCENT_TEXT[c.accent];

                return (
                  <motion.div
                    key={c.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                  >
                    <Link
                      href={`/portfolio/${c.slug}`}
                      className="group block h-full"
                    >
                      <article
                        className={cn(
                          "relative h-full p-6 rounded-2xl border bg-gradient-to-br backdrop-blur transition-all hover:-translate-y-1 hover:shadow-2xl",
                          accentBg
                        )}
                      >
                        {/* Service tag + featured badge */}
                        <div className="flex items-center justify-between mb-5">
                          <span
                            className={cn(
                              "text-[10px] font-mono uppercase tracking-[0.2em]",
                              accentText
                            )}
                          >
                            {service?.name}
                          </span>
                          {c.featured && (
                            <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-suhu-neon/20 text-suhu-neon border border-suhu-neon/30">
                              Featured
                            </span>
                          )}
                        </div>

                        <h3 className="font-display text-xl font-semibold text-white leading-tight group-hover:text-suhu-neon transition-colors">
                          {c.title}
                        </h3>

                        {/* Client + meta */}
                        <div className="mt-3 text-sm text-white/60 leading-snug">
                          {c.client}
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-white/50">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {c.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {c.year}
                          </span>
                        </div>

                        {/* Hero metric */}
                        <div className="mt-5 pt-5 border-t border-white/10">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className={cn("w-3 h-3", accentText)} />
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                              {t("heroMetric")}
                            </span>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span
                              className={cn(
                                "font-display text-2xl font-bold",
                                accentText
                              )}
                            >
                              {c.results[0].value}
                            </span>
                            <span className="text-xs text-white/60">
                              {c.results[0].metric}
                            </span>
                          </div>
                        </div>

                        {/* Read more arrow */}
                        <div className="mt-5 flex items-center gap-1.5 text-xs text-white/40 group-hover:text-suhu-neon transition-colors">
                          <span>{t("readMore")}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {filteredCases.length === 0 && (
              <div className="text-center py-20 text-white/50">
                {t("empty")}
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
