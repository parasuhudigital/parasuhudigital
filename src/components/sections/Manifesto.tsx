"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Manifesto() {
  const t = useTranslations("manifesto");

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-suhu-emerald-dark/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32"
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-suhu-emerald" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                  {t("eyebrow")}
                </span>
              </div>

              <h2 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-white">
                {t("title")}
                <br />
                <span className="font-bold text-gradient-emerald">
                  {t("titleHighlight")}
                </span>
              </h2>

              <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 border border-suhu-emerald/30 bg-suhu-emerald/5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-suhu-neon opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-suhu-neon" />
                </span>
                <span className="font-mono text-sm text-suhu-neon tracking-wider">
                  {t("highlight")}
                </span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-7 text-lg md:text-xl text-white/70 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("p1")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("p2")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              dangerouslySetInnerHTML={{ __html: t.raw("p3") }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
