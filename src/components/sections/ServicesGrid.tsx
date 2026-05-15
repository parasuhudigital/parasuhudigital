"use client";

import { motion } from "framer-motion";
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
  CheckCircle2,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
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

type Highlight = { title: string; desc: string };

export default function ServicesGrid() {
  const t = useTranslations("servicesGrid");
  const locale = useLocale() as Locale;
  const highlights = t.raw("highlights") as Highlight[];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
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
                  {t("eyebrow")}
                </span>
              </div>
              <h2 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] text-white">
                {t("title")}
                <br />
                <span className="font-bold text-gradient-emerald">
                  {t("titleHighlight")}
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
              className="text-lg md:text-xl text-white/65 leading-relaxed"
            >
              {t("intro")}
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-5 border border-white/10 bg-suhu-black-card/40 rounded-2xl"
            >
              <CheckCircle2 className="w-5 h-5 text-suhu-emerald flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-display font-semibold text-base text-white mb-1">
                  {h.title}
                </div>
                <p className="text-sm text-white/55 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

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

                    <h3 className="font-display text-3xl md:text-4xl text-white mb-3 group-hover:text-suhu-neon transition-colors">
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <p className="text-lg md:text-xl text-white/65 max-w-md leading-relaxed">
            {t("ctaText")}
            <span className="text-white"> {t("ctaHighlight")}</span>
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-7 py-4 border border-suhu-emerald text-suhu-emerald rounded-full hover:bg-suhu-emerald hover:text-suhu-black transition-all"
          >
            <span>{t("ctaButton")}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
