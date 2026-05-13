"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
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
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
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

export default function ServicesGrid() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  Our Services
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] text-white">
                9 Layanan,
                <br />
                <span className="font-bold text-gradient-emerald">
                  satu rumah suhu.
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed"
            >
              Mau bangun website? Bisa. Mau iklan jalan terus? Bisa. Mau
              aplikasi mobile? Bisa. Mau bersihin reputasi di Google? Bisa
              banget. Lo tinggal pilih, suhu yang eksekusi.
            </motion.p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  href={service.slug}
                  className="group block h-full p-8 bg-suhu-black hover:bg-suhu-black-card transition-all duration-500 relative overflow-hidden"
                >
                  {/* Hover gradient bg */}
                  <div className="absolute inset-0 bg-gradient-to-br from-suhu-emerald/0 via-suhu-emerald/0 to-suhu-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Top row: icon + arrow */}
                    <div className="flex items-start justify-between mb-12">
                      <div className="w-12 h-12 rounded-xl border border-white/10 group-hover:border-suhu-emerald/40 bg-suhu-black-card flex items-center justify-center transition-all duration-500 group-hover:rotate-[-8deg]">
                        {Icon && (
                          <Icon className="w-5 h-5 text-suhu-emerald group-hover:text-suhu-neon transition-colors" />
                        )}
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-suhu-emerald group-hover:bg-suhu-emerald flex items-center justify-center transition-all duration-500">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:text-suhu-black transition-colors" />
                      </div>
                    </div>

                    {/* Service number */}
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
                      0{i + 1}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-3xl md:text-4xl text-white mb-3 group-hover:text-suhu-neon transition-colors">
                      {service.name}
                    </h3>

                    {/* Tagline */}
                    <p className="font-display font-semibold text-base text-suhu-emerald mb-4">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA below grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <p className="text-lg text-white/60 max-w-md">
            Gak yakin yang mana yang cocok buat bisnis lo?
            <span className="text-white"> Diskusi dulu aja, gratis.</span>
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-7 py-4 border border-suhu-emerald text-suhu-emerald rounded-full hover:bg-suhu-emerald hover:text-suhu-black transition-all"
          >
            <span>Mulai konsultasi</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
