"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
  Building2,
  Stethoscope,
  Plane,
  Car,
  Gamepad2,
  GraduationCap,
  Banknote,
  UtensilsCrossed,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { NICHES, t as bi, type Locale } from "@/lib/constants";

const iconMap = {
  Building2,
  Stethoscope,
  Plane,
  Car,
  Gamepad2,
  GraduationCap,
  Banknote,
  UtensilsCrossed,
};

export default function Industries() {
  const t = useTranslations("industries");
  const locale = useLocale() as Locale;

  return (
    <section className="relative py-24 lg:py-32 bg-suhu-black-card/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-px bg-suhu-emerald" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
              {t("eyebrow")}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] text-white max-w-4xl"
          >
            {t("title")}{" "}
            <span className="font-bold text-gradient-emerald">
              {t("titleHighlightInline")}
            </span>{" "}
            {t("titleAfter")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-white/65 leading-relaxed max-w-3xl"
          >
            {t("intro")}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {NICHES.map((niche, i) => {
            const Icon = iconMap[niche.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={niche.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/jasa-digital-marketing-${niche.slug}`}
                  className="group block aspect-[4/5] p-6 rounded-2xl border border-white/10 bg-suhu-black hover:bg-gradient-to-br hover:from-suhu-emerald-dark hover:to-suhu-black transition-all duration-500 hover:border-suhu-emerald/40 relative overflow-hidden"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div className="w-12 h-12 rounded-xl bg-suhu-black-card border border-white/5 group-hover:border-suhu-emerald/40 flex items-center justify-center transition-all">
                      {Icon && (
                        <Icon className="w-5 h-5 text-suhu-emerald group-hover:text-suhu-neon transition-colors" />
                      )}
                    </div>

                    <div>
                      <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-suhu-neon transition-colors leading-tight">
                        {bi(niche.name, locale)}
                      </h3>
                      <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/40 group-hover:text-suhu-emerald transition-colors">
                        <span>{t("viewDetail")}</span>
                        <ArrowUpRight className="w-3 h-3 transition-transform group-hover:rotate-45" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-sm text-white/50 max-w-2xl mx-auto"
        >
          {t("moreSoon")}
        </motion.p>
      </div>
    </section>
  );
}
