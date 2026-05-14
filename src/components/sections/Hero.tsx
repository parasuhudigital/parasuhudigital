"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-suhu-emerald/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-suhu-emerald-dark/40 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-suhu-emerald/30 bg-suhu-emerald/5 rounded-full mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-suhu-neon opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-suhu-neon" />
          </span>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
            {t("tag")}
          </span>
        </motion.div>

        <div className="max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-semibold text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.88] text-white tracking-[-0.04em]"
          >
            {t("heading1")}
            <br />
            <span className="font-bold text-gradient-emerald">
              {t("heading2")}
            </span>
            <br />
            <span className="inline-flex items-baseline gap-4">
              {t("heading3")}
              <motion.span
                initial={{ rotate: -180, opacity: 0, scale: 0 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className="inline-block text-suhu-neon text-[8vw] md:text-[5vw] lg:text-[4vw]"
              >
                ✦
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.raw("subtitle") }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-5 max-w-2xl text-base text-white/55 leading-relaxed"
          >
            {t("supportingLine")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-suhu-emerald text-suhu-black font-medium rounded-full hover:bg-suhu-neon transition-all"
            >
              <span>{t("ctaPrimary")}</span>
              <div className="w-8 h-8 rounded-full bg-suhu-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4 text-suhu-neon" />
              </div>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/15 text-white rounded-full hover:border-suhu-emerald hover:bg-white/5 transition-all"
            >
              <span>{t("ctaSecondary")}</span>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-6 text-xs font-mono uppercase tracking-[0.15em] text-white/40"
          >
            {t("trustBadge")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
        >
          {[
            { label: t("stats.clients"), value: "50+" },
            { label: t("stats.services"), value: "9" },
            { label: t("stats.industries"), value: "8" },
            { label: t("stats.local"), value: "100%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="border-l-2 border-suhu-emerald/40 pl-4"
            >
              <div className="font-display text-4xl md:text-5xl text-white">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-white/50 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
          {t("scroll")}
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-suhu-emerald to-transparent" />
      </motion.div>
    </section>
  );
}
