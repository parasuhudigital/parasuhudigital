"use client";

import { motion } from "framer-motion";
import { Zap, Brain, Users, ShieldCheck } from "lucide-react";

const REASONS = [
  {
    icon: Zap,
    number: "01",
    title: "Cepat tanpa kompromi",
    description:
      "Project yang biasanya 3 bulan, kita kelarin 3 minggu. Bukan karena buru-buru, tapi karena workflow yang udah ter-otomatisasi dengan AI.",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI-leveraged, suhu-driven",
    description:
      "Kita pakai AI buat eksekusi, tapi strategi tetap dipikirin manusia. Hasilnya: kerja kayak punya tim 10x lipat, dengan kualitas senior agency.",
  },
  {
    icon: Users,
    number: "03",
    title: "Founder hands-on, bukan sales talk",
    description:
      "Lo ngobrol langsung sama yang ngerjain. Gak ada cerita 'sudah kami forward ke tim teknis'. Komunikasi langsung, decision cepat.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Bayar sesuai hasil, bukan sesuai janji",
    description:
      "Kita transparan soal target dan deliverable. Kalau gak tercapai, ada accountability — bukan excuses panjang lebar.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-suhu-emerald-dark/20 blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-px bg-suhu-emerald" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
              Why Para Suhu
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] text-white"
          >
            Banyak agency di Indo.
            <br />
            <span className="font-bold text-gradient-emerald">
              Tapi gak semua jadi suhu.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg text-white/60 leading-relaxed"
          >
            Kita bukan agency yang asal jual jasa. Kita pilih project yang
            bener-bener bisa kita kasih dampak — dan deliver dengan standar
            yang gak kompromi.
          </motion.p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 lg:p-10 border border-white/10 rounded-3xl bg-suhu-black-card/50 backdrop-blur-sm hover:border-suhu-emerald/40 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-suhu-emerald/10 border border-suhu-emerald/20 flex items-center justify-center group-hover:bg-suhu-emerald group-hover:border-suhu-emerald transition-all duration-500">
                    <Icon className="w-6 h-6 text-suhu-emerald group-hover:text-suhu-black transition-colors" />
                  </div>
                  <span className="font-mono text-sm text-white/30 group-hover:text-suhu-neon transition-colors">
                    /{reason.number}
                  </span>
                </div>

                <h3 className="font-display text-3xl text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
