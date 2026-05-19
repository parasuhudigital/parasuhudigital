"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

type Row = {
  aspect: string;
  paraSuhu: string;
  agency: string;
  freelancer: string;
};

const ROWS: Row[] = [
  {
    aspect: "Spesialisasi properti",
    paraSuhu: "Khusus",
    agency: "Generic",
    freelancer: "Bervariasi",
  },
  {
    aspect: "Founder hands-on",
    paraSuhu: "Ya",
    agency: "Account manager",
    freelancer: "Ya",
  },
  {
    aspect: "Attribution sampai akad",
    paraSuhu: "Wajib",
    agency: "Jarang",
    freelancer: "Hampir tidak",
  },
  {
    aspect: "Dashboard real-time",
    paraSuhu: "Disediakan",
    agency: "Laporan PDF",
    freelancer: "Excel manual",
  },
  {
    aspect: "Garansi performa",
    paraSuhu: "ROAS-based",
    agency: "Best effort",
    freelancer: "Tidak ada",
  },
  {
    aspect: "AI-leveraged workflow",
    paraSuhu: "Core",
    agency: "Eksperimental",
    freelancer: "Manual",
  },
  {
    aspect: "Response time",
    paraSuhu: "< 2 jam kerja",
    agency: "24-48 jam",
    freelancer: "Tidak konsisten",
  },
  {
    aspect: "Minimum komitmen",
    paraSuhu: "3 bulan",
    agency: "6-12 bulan",
    freelancer: "Per project",
  },
];

function Cell({ value, accent }: { value: string; accent?: "good" | "bad" }) {
  if (accent === "good") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-suhu-emerald/20 border border-suhu-emerald/50 flex items-center justify-center flex-shrink-0">
          <Check className="w-3 h-3 text-suhu-emerald" />
        </div>
        <span className="text-white font-medium">{value}</span>
      </div>
    );
  }
  if (accent === "bad") {
    return (
      <div className="flex items-center gap-2 text-white/50">
        <X className="w-3.5 h-3.5 flex-shrink-0 text-white/30" />
        <span>{value}</span>
      </div>
    );
  }
  return <span className="text-white/60">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-suhu-emerald" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
              Perbandingan
            </span>
            <span className="w-8 h-px bg-suhu-emerald" />
          </div>
          <h2 className="font-display font-semibold text-5xl md:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
            Apa yang membedakan{" "}
            <span className="font-bold text-gradient-emerald">
              Para Suhu Digital?
            </span>
          </h2>
          <p className="mt-8 text-lg text-white/60 leading-relaxed">
            Perbandingan dengan agency umum dan freelancer di pasar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-x-auto rounded-3xl border border-white/10 bg-suhu-black-card/40 backdrop-blur-sm"
        >
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-6 lg:px-8 py-6 text-xs font-mono uppercase tracking-[0.2em] text-white/50">
                  Aspek
                </th>
                <th className="text-left px-6 lg:px-8 py-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-suhu-emerald/10 to-transparent pointer-events-none" />
                  <div className="relative">
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald mb-1">
                      Para Suhu Digital
                    </div>
                    <div className="text-[10px] font-mono text-suhu-neon">
                      ★ Rekomendasi
                    </div>
                  </div>
                </th>
                <th className="text-left px-6 lg:px-8 py-6 text-xs font-mono uppercase tracking-[0.2em] text-white/50">
                  Agency Umum
                </th>
                <th className="text-left px-6 lg:px-8 py-6 text-xs font-mono uppercase tracking-[0.2em] text-white/50">
                  Freelancer
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-6 lg:px-8 py-5 text-sm font-medium text-white">
                    {row.aspect}
                  </td>
                  <td className="px-6 lg:px-8 py-5 text-sm bg-suhu-emerald/[0.04]">
                    <Cell value={row.paraSuhu} accent="good" />
                  </td>
                  <td className="px-6 lg:px-8 py-5 text-sm">
                    <Cell value={row.agency} accent="bad" />
                  </td>
                  <td className="px-6 lg:px-8 py-5 text-sm">
                    <Cell value={row.freelancer} accent="bad" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="mt-10 text-center text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
          Kami bukan agency terbesar di Indonesia, tetapi kami spesialis yang
          fokus dan akuntabel. Setiap project punya KPI jelas dan dashboard
          transparan.
        </p>
      </div>
    </section>
  );
}
