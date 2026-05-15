"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Send,
  CheckCircle2,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY, SERVICES, t as bi, type Locale } from "@/lib/constants";
import { trackLead } from "@/lib/analytics";

export default function ContactPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("contactPage");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackLead({
      content_name: "contact_form_submit",
      content_category: "form_submit",
    });
    // Untuk sementara, redirect ke WhatsApp dengan pre-filled message
    const waMessage = encodeURIComponent(
      `Halo Para Suhu Digital!\n\nNama: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nPesan:\n${formData.message}`
    );
    const waUrl = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${waMessage}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-32 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-suhu-emerald/20 rounded-full blur-[120px]" />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-suhu-emerald/30 bg-suhu-emerald/5 rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-suhu-neon opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-suhu-neon" />
              </span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-suhu-emerald">
                {t("tag")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-semibold text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] text-white tracking-[-0.04em] max-w-5xl"
            >
              {t("title")}
              <br />
              <span className="font-bold text-gradient-emerald">
                {t("titleHighlight")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed"
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-12 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Form */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-8 lg:p-10 border border-white/10 rounded-3xl bg-suhu-black-card/50 backdrop-blur-sm"
                >
                  {!submitted ? (
                    <>
                      <h2 className="font-display font-semibold text-3xl text-white mb-2 tracking-[-0.02em]">
                        {t("form.heading")}
                      </h2>
                      <p className="text-sm text-white/50 mb-8">
                        {t("form.subheading")}
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                              {t("form.name")}
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 bg-suhu-black border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-suhu-emerald focus:outline-none transition-colors"
                              placeholder={t("form.namePlaceholder")}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                              {t("form.email")}
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 bg-suhu-black border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-suhu-emerald focus:outline-none transition-colors"
                              placeholder={t("form.emailPlaceholder")}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                              {t("form.phone")}
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 bg-suhu-black border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-suhu-emerald focus:outline-none transition-colors"
                              placeholder={t("form.phonePlaceholder")}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                              {t("form.company")}
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 bg-suhu-black border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-suhu-emerald focus:outline-none transition-colors"
                              placeholder={t("form.companyPlaceholder")}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                              {t("form.service")}
                            </label>
                            <select
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 bg-suhu-black border border-white/10 rounded-xl text-white focus:border-suhu-emerald focus:outline-none transition-colors"
                            >
                              <option value="">{t("form.servicePlaceholder")}</option>
                              {SERVICES.map((s) => (
                                <option key={s.id} value={s.name}>
                                  {s.name}
                                </option>
                              ))}
                              <option value={t("form.serviceOther")}>
                                {t("form.serviceOther")}
                              </option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                              {t("form.budget")}
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 bg-suhu-black border border-white/10 rounded-xl text-white focus:border-suhu-emerald focus:outline-none transition-colors"
                            >
                              <option value="">{t("form.budgetPlaceholder")}</option>
                              <option value="< Rp 25jt">{`< Rp 25 juta`}</option>
                              <option value="Rp 25-50jt">Rp 25-50 juta</option>
                              <option value="Rp 50-100jt">Rp 50-100 juta</option>
                              <option value="Rp 100-250jt">Rp 100-250 juta</option>
                              <option value="Rp 250jt+">Rp 250 juta+</option>
                              <option value={t("form.budgetNone")}>
                                {t("form.budgetNone")}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                            {t("form.message")}
                          </label>
                          <textarea
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-suhu-black border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-suhu-emerald focus:outline-none transition-colors resize-none"
                            placeholder={t("form.messagePlaceholder")}
                          />
                        </div>

                        <button
                          type="submit"
                          className="group inline-flex items-center gap-3 px-7 py-4 bg-suhu-emerald text-suhu-black font-medium rounded-full hover:bg-suhu-neon transition-all w-full md:w-auto justify-center"
                        >
                          <Send className="w-4 h-4" />
                          <span>{t("form.submit")}</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                        </button>

                        <p className="text-xs text-white/40 leading-relaxed">
                          {t("form.consent")}
                        </p>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle2 className="w-20 h-20 text-suhu-emerald mx-auto mb-6" />
                      <h2 className="font-display font-semibold text-3xl text-white mb-4 tracking-[-0.02em]">
                        {t("success.heading")}
                      </h2>
                      <p className="text-white/60 leading-relaxed max-w-md mx-auto">
                        {t("success.bodyPre")}{" "}
                        <a
                          href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                          className="text-suhu-emerald underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {COMPANY.phone}
                        </a>
                        {t("success.bodyPost")}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Info sidebar */}
              <div className="lg:col-span-5 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="font-display font-semibold text-2xl text-white mb-2 tracking-[-0.02em]">
                    {t("sidebar.heading")}
                  </h3>
                  <p className="text-sm text-white/50 mb-6">
                    {t("sidebar.subheading")}
                  </p>
                </motion.div>

                {/* WhatsApp - Primary */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackLead({
                      content_name: "contact_page_sidebar_wa",
                      content_category: "whatsapp_click",
                    })
                  }
                  className="group block p-6 border border-suhu-emerald/30 rounded-2xl bg-suhu-emerald/5 hover:bg-suhu-emerald/10 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-suhu-emerald flex items-center justify-center flex-shrink-0 group-hover:bg-suhu-neon transition-colors">
                      <MessageCircle className="w-5 h-5 text-suhu-black" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono uppercase tracking-wider text-suhu-emerald mb-1">
                        {t("sidebar.waLabel")}
                      </div>
                      <div className="font-display font-semibold text-xl text-white">
                        {COMPANY.phone}
                      </div>
                      <div className="text-sm text-white/60 mt-1">
                        {t("sidebar.waHours")}
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-suhu-emerald transition-transform group-hover:rotate-45" />
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  href={`mailto:${COMPANY.email}`}
                  className="group block p-6 border border-white/10 rounded-2xl bg-suhu-black-card/50 hover:border-suhu-emerald/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-suhu-black border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-suhu-emerald" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">
                        {t("sidebar.emailLabel")}
                      </div>
                      <div className="font-display font-semibold text-lg text-white break-all">
                        {COMPANY.email}
                      </div>
                      <div className="text-sm text-white/60 mt-1">
                        {t("sidebar.emailDesc")}
                      </div>
                    </div>
                  </div>
                </motion.a>

                {/* Office */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="p-6 border border-white/10 rounded-2xl bg-suhu-black-card/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-suhu-black border border-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-suhu-emerald" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">
                        {t("sidebar.officeLabel")}
                      </div>
                      <div className="font-display font-semibold text-base text-white leading-snug">
                        {t("sidebar.officeName")}
                      </div>
                      <div className="text-sm text-white/60 mt-2 leading-relaxed">
                        {bi(COMPANY.address, locale)}
                      </div>
                      <div className="text-sm text-white/60 mt-3">
                        {t("sidebar.officeNote")}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
