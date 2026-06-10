"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/utils";
import { useT, useLocale } from "../i18n/LocaleProvider";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const t = useT();
  const locale = useLocale();
  const waMsg =
    locale === "en"
      ? "Hi Para Suhu Hitam! I want to consult about my project."
      : "Halo Para Suhu Hitam! Mau konsultasi soal project gua.";

  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-noise opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 bg-gradient-radial-blood blur-2xl" />

      <div className="container-w container-px relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="chip border-hitam-blood/30 text-hitam-blood-light"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-hitam-blood" />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl"
        >
          {t.hero.title}{" "}
          <span className="text-gradient-blood">{t.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.18 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link href="/aged-domains" className="btn-primary px-7 py-3.5 text-base">
            {t.hero.ctaPrimary}
            <ArrowUpRight className="h-5 w-5" />
          </Link>
          <a
            href={waLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-7 py-3.5 text-base"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50"
        >
          {[t.hero.trust1, t.hero.trust2, t.hero.trust3].map((x) => (
            <span key={x} className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-suhu-emerald" /> {x}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
