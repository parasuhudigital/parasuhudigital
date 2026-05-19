"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  FileSearch,
  Rocket,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Konsultasi Gratis",
    duration: "Hari 1",
    icon: MessageSquare,
    desc: "Diskusi 30 menit untuk memahami goal, kondisi saat ini, dan ekspektasi. Tanpa biaya, tanpa kewajiban.",
  },
  {
    step: "02",
    title: "Audit & Proposal",
    duration: "Hari 2-7",
    icon: FileSearch,
    desc: "Tim kami audit kondisi marketing Anda saat ini dan susun proposal detail dengan strategy, timeline, dan investasi.",
  },
  {
    step: "03",
    title: "Kickoff & Setup",
    duration: "Minggu 2-3",
    icon: Rocket,
    desc: "Setelah agreement, kami setup infrastruktur: dashboard, tracking, account, creative production, dan team alignment.",
  },
  {
    step: "04",
    title: "Launch & Optimize",
    duration: "Minggu 4+",
    icon: TrendingUp,
    desc: "Campaign launch dengan monitoring harian. Optimization berdasarkan data, bukan asumsi. Weekly report rutin.",
  },
  {
    step: "05",
    title: "Scale & Grow",
    duration: "Bulan 3+",
    icon: Sparkles,
    desc: "Setelah baseline performance tercapai, kami scale yang work dan sunset yang tidak. Bisnis Anda berkembang, kami juga.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative py-24 lg:py-32 bg-suhu-black-card/30 border-y border-white/5 overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-suhu-emerald-dark/20 rounded-full blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-suhu-emerald" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
              Proses Kerja
            </span>
            <span className="w-8 h-px bg-suhu-emerald" />
          </div>
          <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
            Bagaimana{" "}
            <span className="font-bold text-gradient-emerald">
              kami bekerja?
            </span>
          </h2>
          <p className="mt-8 text-lg text-white/60 leading-relaxed">
            Dari konsultasi pertama hingga campaign launch — proses yang
            transparan dan terukur.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-suhu-emerald/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon circle */}
                    <div className="relative w-14 h-14 rounded-2xl bg-suhu-black-card border-2 border-suhu-emerald/40 flex items-center justify-center mb-6 group-hover:border-suhu-emerald transition-colors">
                      <Icon className="w-6 h-6 text-suhu-emerald" />
                      {/* Step number badge */}
                      <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-suhu-neon text-suhu-black text-[10px] font-mono font-bold">
                        {s.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-semibold text-xl text-white mb-2 tracking-[-0.02em]">
                      {s.title}
                    </h3>

                    {/* Duration chip */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-suhu-emerald/10 border border-suhu-emerald/30 mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-suhu-emerald">
                        {s.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
