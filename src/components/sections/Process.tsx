"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Step = {
  num: string;
  title: string;
  desc: string;
  duration: string;
};

export default function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as Step[];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
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
              className="font-display font-semibold text-5xl md:text-6xl leading-[1] tracking-[-0.03em] text-white"
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
              className="mt-8 text-lg md:text-xl text-white/65 leading-relaxed max-w-md"
            >
              {t("subtitle")}
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-px">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group py-10 border-t border-white/10 first:border-t-0 hover:pl-4 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-2">
                      <span className="font-mono text-sm text-suhu-emerald">
                        /{step.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-4 mb-3">
                        <h3 className="font-display font-semibold text-2xl md:text-3xl text-white group-hover:text-suhu-neon transition-colors tracking-[-0.02em]">
                          {step.title}
                        </h3>
                        <span className="text-xs font-mono uppercase tracking-wider text-white/40 px-2.5 py-1 border border-white/10 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-white/65 leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
