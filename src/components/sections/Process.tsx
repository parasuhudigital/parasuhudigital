"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Diskusi & Discovery",
    desc: "Kita ngobrol soal bisnis lo, target, budget, dan kondisi sekarang. Free 30-60 menit, no obligation.",
    duration: "1-2 hari",
  },
  {
    num: "02",
    title: "Proposal & Roadmap",
    desc: "Lo dapet proposal detail: scope, timeline, deliverable, harga. Transparan, no hidden cost.",
    duration: "2-3 hari",
  },
  {
    num: "03",
    title: "Eksekusi Suhu Mode",
    desc: "Kita kerjain dengan workflow AI-leveraged. Update progress mingguan, gak hilang ditengah jalan.",
    duration: "2-12 minggu",
  },
  {
    num: "04",
    title: "Launch & Optimize",
    desc: "Setelah launch, kita gak ngilang. Ada masa garansi + opsi maintenance/retainer untuk scaling.",
    duration: "Ongoing",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left sticky title */}
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
                How We Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl leading-[1] text-white"
            >
              Proses suhu,
              <br />
              <span className="font-bold text-gradient-emerald">
                tanpa drama.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-lg text-white/60 leading-relaxed max-w-md"
            >
              Kita gak suka project yang molor, komunikasi yang ribet, atau
              hasil yang gak jelas. Ini cara kerja kita biar lo tenang.
            </motion.p>
          </div>

          {/* Right steps */}
          <div className="lg:col-span-7">
            <div className="space-y-px">
              {STEPS.map((step, i) => (
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
                        <h3 className="font-display text-3xl md:text-4xl text-white group-hover:text-suhu-neon transition-colors">
                          {step.title}
                        </h3>
                        <span className="text-xs font-mono uppercase tracking-wider text-white/40">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-white/60 leading-relaxed max-w-xl">
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
