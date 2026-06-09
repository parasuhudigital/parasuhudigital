"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      {/* Backdrop */}
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
          Divisi Hitam · Para Suhu Digital
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl"
        >
          Ranking & traffic{" "}
          <span className="text-gradient-blood">
            dengan cara yang gak diajarin agency biasa.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65"
        >
          Black hat SEO, black hat ads, aged domain bersih, backlink power, dan
          landing page AMP anti-banned. Dibuat untuk money site yang butuh hasil
          — bukan teori. Semua industri kami terima, termasuk yang ditolak
          agency lain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.18 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link href="/aged-domains" className="btn-primary px-7 py-3.5 text-base">
            Lihat Marketplace Aged Domain
            <ArrowUpRight className="h-5 w-5" />
          </Link>
          <a
            href={waLink("Halo Para Suhu Hitam! Mau konsultasi soal project gua.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-7 py-3.5 text-base"
          >
            Konsultasi via WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50"
        >
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-suhu-emerald" /> 100% anonim &
            rahasia
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-suhu-emerald" /> Garansi sesuai
            paket
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-suhu-emerald" /> Bayar mudah via
            WhatsApp
          </span>
        </motion.div>
      </div>
    </section>
  );
}
