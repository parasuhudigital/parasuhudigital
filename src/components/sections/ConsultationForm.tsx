"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { trackLead } from "@/lib/analytics";

const BUSINESS_TYPES = [
  "Developer Apartemen",
  "Developer Landed House",
  "Agen Properti",
  "Marketing Agency",
  "Property Consultant",
  "Lainnya",
];

const SERVICES = [
  "Website & Landing Page",
  "SEO Optimization",
  "Paid Ads (Meta/Google)",
  "Social Media Management",
  "AI Chatbot",
  "Konsultasi Strategi",
  "Belum yakin / Konsultasi dulu",
];

const BUDGET_RANGES = [
  "< Rp 10 juta",
  "Rp 10 - 25 juta",
  "Rp 25 - 50 juta",
  "Rp 50 - 100 juta",
  "> Rp 100 juta",
  "Belum ada estimasi",
];

type FormData = {
  name: string;
  whatsapp: string;
  company: string;
  businessType: string;
  location: string;
  services: string[];
  budget: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  name: "",
  whatsapp: "",
  company: "",
  businessType: "",
  location: "",
  services: [],
  budget: "",
  notes: "",
};

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const toggleService = (s: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Nama lengkap wajib diisi.";
    if (!formData.whatsapp.trim()) e.whatsapp = "Nomor WhatsApp wajib diisi.";
    else {
      const digits = formData.whatsapp.replace(/\D/g, "");
      if (digits.length < 9 || digits.length > 15)
        e.whatsapp = "Format nomor tidak valid (contoh: 62812345678).";
    }
    if (!formData.company.trim()) e.company = "Nama perusahaan wajib diisi.";
    if (!formData.businessType) e.businessType = "Silakan pilih jenis bisnis.";
    if (!formData.location.trim()) e.location = "Lokasi project wajib diisi.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const servicesText =
      formData.services.length > 0
        ? formData.services.map((s) => `- ${s}`).join("\n")
        : "- Belum ditentukan";
    const notesText = formData.notes.trim() || "Tidak ada keterangan tambahan";
    const message = `Halo Para Suhu Digital!

Saya tertarik untuk diskusi project digital marketing properti.

📋 DATA SAYA:
Nama: ${formData.name}
WhatsApp: ${formData.whatsapp}
Perusahaan: ${formData.company}
Jenis Bisnis: ${formData.businessType}
Lokasi Project: ${formData.location}

🎯 LAYANAN YANG DIMINATI:
${servicesText}

💰 ESTIMASI BUDGET:
${formData.budget || "Belum ada estimasi"}

📝 KEBUTUHAN:
${notesText}

Mohon untuk dihubungi kembali. Terima kasih.`;

    const waNumber = COMPANY.whatsapp.replace(/\D/g, "");
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

    trackLead({
      content_name: "properti_landing_form",
      content_category: "form_submit",
    });

    setSubmitted(true);
    window.open(waUrl, "_blank");
    setSubmitting(false);
  };

  const baseInput =
    "w-full px-4 py-3 rounded-xl bg-suhu-black border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-suhu-emerald focus:bg-suhu-black-card/50 transition-all";
  const errorInput = "border-red-500/60 focus:border-red-500";

  return (
    <section className="relative py-24 lg:py-32 bg-suhu-black-card/30 border-y border-white/5 overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-suhu-emerald/10 rounded-full blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-suhu-emerald" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                Diskusi Project Anda
              </span>
            </div>
            <h2 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] text-white">
              Ceritakan{" "}
              <span className="font-bold text-gradient-emerald">
                kebutuhan properti Anda.
              </span>
            </h2>
            <p className="mt-8 text-lg text-white/65 leading-relaxed max-w-xl">
              Isi form di samping, dan tim kami akan menghubungi Anda dalam 2
              jam kerja via WhatsApp dengan rekomendasi solusi spesifik untuk
              bisnis properti Anda.
            </p>

            <ul className="mt-10 space-y-4 max-w-xl">
              {[
                "Diskusi gratis 30 menit",
                "Tanpa kewajiban lanjut",
                "Tanpa hard-selling",
                "Konfidensial — NDA tersedia jika diperlukan",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-suhu-emerald/15 border border-suhu-emerald/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-suhu-emerald" />
                  </div>
                  <span className="text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-suhu-black/40">
              <ShieldCheck className="w-4 h-4 text-suhu-emerald" />
              <span className="text-sm text-white/70">
                Data Anda dijaga kerahasiaannya. Tidak akan dibagikan ke pihak
                ketiga.
              </span>
            </div>
          </motion.div>

          {/* Right column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div
              className={`p-6 md:p-8 rounded-3xl border bg-suhu-black/80 backdrop-blur-sm transition-all duration-500 ${
                submitted
                  ? "border-suhu-emerald shadow-[0_0_40px_rgba(34,211,153,0.15)]"
                  : "border-white/10"
              }`}
            >
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-suhu-emerald/15 border border-suhu-emerald/40 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-suhu-emerald" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-white mb-3 tracking-[-0.02em]">
                    Terima kasih!
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Anda akan diarahkan ke WhatsApp untuk melanjutkan diskusi.
                    Jika tidak terbuka otomatis, silakan periksa pop-up blocker
                    browser Anda.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(INITIAL);
                      setSubmitted(false);
                    }}
                    className="mt-8 text-sm text-suhu-emerald hover:text-suhu-neon transition-colors"
                  >
                    Kirim form lagi
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                      Nama Lengkap <span className="text-suhu-emerald">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Nama lengkap Anda"
                      className={`${baseInput} ${errors.name ? errorInput : ""}`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                      Nomor WhatsApp <span className="text-suhu-emerald">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => update("whatsapp", e.target.value)}
                      placeholder="62812xxxxxxx"
                      className={`${baseInput} ${errors.whatsapp ? errorInput : ""}`}
                    />
                    {errors.whatsapp && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.whatsapp}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                      Nama Perusahaan / Brand{" "}
                      <span className="text-suhu-emerald">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => update("company", e.target.value)}
                      placeholder="Nama perusahaan"
                      className={`${baseInput} ${errors.company ? errorInput : ""}`}
                    />
                    {errors.company && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                      Jenis Bisnis Properti{" "}
                      <span className="text-suhu-emerald">*</span>
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => update("businessType", e.target.value)}
                      className={`${baseInput} ${errors.businessType ? errorInput : ""}`}
                    >
                      <option value="">Pilih jenis bisnis...</option>
                      {BUSINESS_TYPES.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    {errors.businessType && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.businessType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                      Lokasi Project{" "}
                      <span className="text-suhu-emerald">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => update("location", e.target.value)}
                      placeholder="Contoh: Jakarta Selatan, BSD, Bali"
                      className={`${baseInput} ${errors.location ? errorInput : ""}`}
                    />
                    {errors.location && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.location}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
                      Layanan yang Diminati
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {SERVICES.map((s) => {
                        const active = formData.services.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border text-left text-sm transition-all ${
                              active
                                ? "border-suhu-emerald bg-suhu-emerald/10 text-white"
                                : "border-white/10 bg-suhu-black text-white/70 hover:border-white/30"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all ${
                                active
                                  ? "border-suhu-emerald bg-suhu-emerald"
                                  : "border-white/30"
                              }`}
                            >
                              {active && (
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1 5L4 8L9 2"
                                    stroke="#0a0a0a"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </div>
                            <span>{s}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                      Estimasi Budget Bulanan
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => update("budget", e.target.value)}
                      className={baseInput}
                    >
                      <option value="">Pilih estimasi budget...</option>
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                      Cerita Singkat Kebutuhan Anda
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      placeholder="Misalnya: launching cluster baru 80 unit, target closing 6 bulan..."
                      rows={4}
                      className={`${baseInput} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-suhu-emerald text-suhu-black font-medium rounded-full hover:bg-suhu-neon transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim & Lanjut ke WhatsApp</span>
                        <div className="w-7 h-7 rounded-full bg-suhu-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                          <ArrowUpRight className="w-3.5 h-3.5 text-suhu-neon" />
                        </div>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-white/40 text-center leading-relaxed">
                    Dengan mengirim form, Anda menyetujui untuk dihubungi oleh
                    tim Para Suhu Digital terkait konsultasi project.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
