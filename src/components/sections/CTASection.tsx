"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-suhu-emerald/30"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-suhu-emerald-dark via-suhu-black to-suhu-emerald-dark" />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-suhu-emerald/30 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-suhu-neon/20 rounded-full blur-[120px]" />

          <div className="relative px-8 py-16 md:px-16 md:py-24 lg:px-24 lg:py-28">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-suhu-neon/30 bg-suhu-neon/5 rounded-full mb-8 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-suhu-neon opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-suhu-neon" />
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-neon">
                  Slot terbatas tiap bulan
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-5xl md:text-6xl lg:text-8xl leading-[0.95] text-white"
              >
                Bisnis lo butuh
                <br />
                <span className="italic text-gradient-emerald">
                  level up digital?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
              >
                Diskusi awal gratis. Kita assess kebutuhan lo dan kasih
                rekomendasi solusi — sebelum lo commit apapun.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 flex flex-wrap items-center justify-center gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-5 bg-suhu-neon text-suhu-black font-medium rounded-full hover:bg-white transition-all"
                >
                  <span>Konsultasi Gratis</span>
                  <div className="w-8 h-8 rounded-full bg-suhu-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-suhu-neon" />
                  </div>
                </Link>

                <a
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-5 border border-white/30 text-white rounded-full hover:bg-white/5 hover:border-white transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp langsung</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
