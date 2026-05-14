"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Stat = {
  value: string;
  label: string;
  desc: string;
};

export default function StatsSection() {
  const t = useTranslations("stats");
  const items = t.raw("items") as Stat[];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-suhu-emerald-dark/20 blur-[200px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            <span className="w-8 h-px bg-suhu-emerald" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-white"
          >
            {t("title")}{" "}
            <span className="font-bold text-gradient-emerald">
              {t("titleHighlight")}
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-8 lg:p-10 bg-suhu-black hover:bg-suhu-black-card/50 transition-all duration-500"
            >
              <div className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-gradient-emerald leading-none mb-4 tracking-[-0.04em]">
                {item.value}
              </div>
              <div className="font-display font-semibold text-lg md:text-xl text-white mb-2 tracking-[-0.01em]">
                {item.label}
              </div>
              <p className="text-sm text-white/55 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
