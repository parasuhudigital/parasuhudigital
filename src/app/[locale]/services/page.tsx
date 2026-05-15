"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/sections/CTASection";
import { SERVICES, t as bi, type Locale } from "@/lib/constants";

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

export default function ServicesPage() {
  const t = useTranslations("servicesPage");
  const locale = useLocale() as Locale;
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-32 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-suhu-emerald/20 rounded-full blur-[120px]" />

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
              className="font-display font-semibold text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] text-white tracking-[-0.04em]"
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
              {t("intro")}
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
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
                      className="group block h-full p-8 lg:p-10 bg-suhu-black hover:bg-suhu-black-card transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-suhu-emerald/0 via-suhu-emerald/0 to-suhu-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative">
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

                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
                          0{i + 1}
                        </div>

                        <h3 className="font-display font-semibold text-3xl md:text-4xl text-white mb-3 tracking-[-0.02em] group-hover:text-suhu-neon transition-colors">
                          {service.name}
                        </h3>

                        <p className="font-display font-semibold text-base text-suhu-emerald mb-4">
                          {bi(service.tagline, locale)}
                        </p>

                        <p className="text-sm text-white/60 leading-relaxed">
                          {bi(service.description, locale)}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
