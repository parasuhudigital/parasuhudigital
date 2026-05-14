"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Plus, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqItem = {
  q: string;
  a: string;
};

export default function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as FaqItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
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

              <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
                {t("title")}
                <br />
                <span className="font-bold text-gradient-emerald">
                  {t("titleHighlight")}
                </span>
              </h2>

              <p className="mt-8 text-lg text-white/65 leading-relaxed max-w-md">
                {t("subtitle")}
              </p>

              <div className="mt-10 p-5 border border-suhu-emerald/30 bg-suhu-emerald/5 rounded-2xl">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-suhu-emerald mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/80 leading-relaxed">
                    {t("footer")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3">
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={cn(
                      "border rounded-2xl overflow-hidden transition-all duration-500",
                      isOpen
                        ? "border-suhu-emerald/40 bg-suhu-black-card/60"
                        : "border-white/10 bg-suhu-black-card/30 hover:border-white/20"
                    )}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-6 p-6 lg:p-7 text-left"
                      aria-expanded={isOpen}
                    >
                      <h3
                        className={cn(
                          "font-display font-semibold text-lg md:text-xl tracking-[-0.01em] leading-tight transition-colors",
                          isOpen ? "text-suhu-neon" : "text-white"
                        )}
                      >
                        {item.q}
                      </h3>
                      <div
                        className={cn(
                          "w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-500",
                          isOpen
                            ? "border-suhu-emerald bg-suhu-emerald rotate-45"
                            : "border-white/15"
                        )}
                      >
                        <Plus
                          className={cn(
                            "w-4 h-4 transition-colors",
                            isOpen ? "text-suhu-black" : "text-white/70"
                          )}
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 lg:px-7 lg:pb-7 -mt-1">
                            <p className="text-white/70 leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
