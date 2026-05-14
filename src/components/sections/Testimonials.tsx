"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  location: string;
};

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-emerald opacity-40 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
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
            className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] text-white max-w-4xl mx-auto"
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
            className="mt-8 text-base md:text-lg text-white/55 leading-relaxed max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-suhu-black-card/50 backdrop-blur-sm hover:border-suhu-emerald/40 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-suhu-emerald/40 mb-6" />

              <p className="text-white/80 leading-relaxed mb-8 text-base lg:text-lg">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-white/5">
                <div className="font-display font-semibold text-lg text-white tracking-[-0.01em]">
                  {item.author}
                </div>
                <div className="text-sm text-white/50 mt-1">{item.role}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-suhu-emerald/70 mt-1">
                  {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
