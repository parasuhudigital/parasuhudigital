"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Cpu, Layers, Brain, Workflow } from "lucide-react";

const ICONS = [Cpu, Layers, Brain, Workflow];

type Pillar = {
  title: string;
  desc: string;
};

export default function Approach() {
  const t = useTranslations("approach");
  const pillars = t.raw("pillars") as Pillar[];

  return (
    <section className="relative py-24 lg:py-32 bg-suhu-black-card/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-suhu-emerald/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-16 lg:mb-20">
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
            className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-white"
          >
            {t("title")}
            <br />
            <span className="font-bold text-gradient-emerald">
              {t("titleHighlight")}
            </span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, i) => {
            const Icon = ICONS[i] ?? Cpu;
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

                <h3 className="font-display font-semibold text-2xl md:text-3xl text-white mb-4 tracking-[-0.02em] leading-tight">
                  {p.title}
                </h3>
                <p className="text-white/65 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
