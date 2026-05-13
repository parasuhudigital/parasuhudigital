"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Tim Para Suhu nge-handle website kita end-to-end. 3 minggu udah live, performa kenceng, dan SEO langsung naik. Worth every rupiah.",
    author: "Anonim",
    role: "Founder, Property Developer",
    location: "Jakarta",
  },
  {
    quote:
      "Yang gua suka, mereka gak basa-basi. Diskusi cepat, eksekusi cepat, hasilnya jelas. Cocok buat yang gak mau ribet sama agency.",
    author: "Anonim",
    role: "Marketing Director, Klinik Kecantikan",
    location: "Surabaya",
  },
  {
    quote:
      "Suhu Ads-nya beneran ngerti funnel. ROAS naik dari 1.8x jadi 4.2x dalam 2 bulan. Gak nyangka secepet itu.",
    author: "Anonim",
    role: "Owner, F&B Brand",
    location: "Bandung",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-emerald opacity-40 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-px bg-suhu-emerald" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
              Testimoni
            </span>
            <span className="w-8 h-px bg-suhu-emerald" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] text-white max-w-4xl mx-auto"
          >
            Kata mereka yang
            <br />
            <span className="font-bold text-gradient-emerald">
              udah jadi suhu duluan.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-suhu-black-card/50 backdrop-blur-sm hover:border-suhu-emerald/40 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-suhu-emerald/40 mb-6" />

              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-white/5">
                <div className="font-display text-xl text-white">
                  {t.author}
                </div>
                <div className="text-sm text-white/50 mt-1">{t.role}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-suhu-emerald/70 mt-1">
                  {t.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center text-sm text-white/40 max-w-xl mx-auto"
        >
          *Testimoni dianonimkan untuk privasi klien. Identitas asli & case
          study lengkap tersedia by request setelah NDA.
        </motion.p>
      </div>
    </section>
  );
}
