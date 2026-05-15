"use client";

import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SERVICES, COMPANY, t as bi, type Locale } from "@/lib/constants";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale() as Locale;

  return (
    <footer className="relative bg-suhu-black border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-emerald opacity-30 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="border-b border-white/10 pb-16 mb-16">
          <h2 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.03em] text-white">
            {t("bigTagline1")}{" "}
            <span className="font-bold text-gradient-emerald">
              {t("bigTaglineHighlight")}
            </span>
            <br />
            {t("bigTagline2")}
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 px-7 py-4 bg-suhu-emerald text-suhu-black font-medium rounded-full hover:bg-suhu-neon transition-all group"
          >
            <span>{t("ctaStart")}</span>
            <div className="w-8 h-8 rounded-full bg-suhu-black flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-4 h-4 text-suhu-neon" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-suhu-neon to-suhu-emerald-dark" />
                <div className="absolute inset-[2px] rounded-[6px] bg-suhu-black flex items-center justify-center">
                  <span className="font-display text-suhu-neon text-xl leading-none">
                    S
                  </span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-semibold text-lg text-white">
                  Para Suhu
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-suhu-emerald uppercase">
                  Digital Agency
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              {t("tagline")}
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-suhu-emerald transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{COMPANY.email}</span>
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-suhu-emerald transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{COMPANY.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{bi(COMPANY.shortAddress, locale)}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-suhu-emerald mb-5">
              {t("headings.services")}
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.slug}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-suhu-emerald mb-5">
              {t("headings.company")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("links.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("links.portfolio")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("links.blog")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("links.contact")}
                </Link>
              </li>
              <li>
                <span className="text-sm text-white/40">
                  {t("links.career")}
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-suhu-emerald mb-5">
              {t("headings.legal")}
            </h4>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("links.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t("links.terms")}
                </Link>
              </li>
            </ul>
            <div className="text-xs text-white/40 leading-relaxed">
              <div className="font-medium text-white/60 mb-1">
                {t("headOffice")}
              </div>
              {bi(COMPANY.address, locale)}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-white/40 font-mono">
            © 2026. Para Suhu Digital (PT. Suhu Digital Agency).
          </p>
          <p className="text-xs text-white/40 font-mono">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
