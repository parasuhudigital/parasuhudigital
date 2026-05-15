"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SERVICES, t as bi, type Locale } from "@/lib/constants";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-suhu-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-suhu-neon to-suhu-emerald-dark group-hover:scale-110 transition-transform duration-500" />
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
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              {t("home")}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors flex items-center gap-1"
              >
                {t("services")}
                <span
                  className={cn(
                    "text-[10px] transition-transform",
                    servicesOpen && "rotate-180"
                  )}
                >
                  ▼
                </span>
              </Link>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-3 w-[560px]"
                  >
                    <div className="bg-suhu-black-card border border-white/10 rounded-2xl p-3 shadow-2xl">
                      <div className="grid grid-cols-2 gap-1">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.id}
                            href={s.slug}
                            className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-suhu-emerald mt-2 group-hover:bg-suhu-neon group-hover:shadow-[0_0_10px_rgba(0,255,148,0.8)] transition-all" />
                            <div>
                              <div className="text-sm font-medium text-white group-hover:text-suhu-neon transition-colors">
                                {s.name}
                              </div>
                              <div className="text-xs text-white/50 mt-0.5 line-clamp-1">
                                {bi(s.tagline, locale)}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/portfolio"
              className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              {t("portfolio")}
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              {t("blog")}
            </Link>
          </nav>

          <div className="flex items-center gap-2.5">
            <div className="hidden md:block">
              <LanguageSwitcher variant="desktop" />
            </div>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 bg-suhu-emerald text-suhu-black font-medium text-sm rounded-full hover:bg-suhu-neon transition-all hover:gap-2.5 group"
            >
              {t("ctaConsult")}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-suhu-emerald transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-suhu-black lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <span className="font-display font-semibold text-xl">Para Suhu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-8">
                <div className="space-y-2">
                  {[
                    { name: t("home"), href: "/" },
                    { name: t("portfolio"), href: "/portfolio" },
                    { name: t("about"), href: "/about" },
                    { name: t("blog"), href: "/blog" },
                    { name: t("contact"), href: "/contact" },
                  ].map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-2xl font-display font-semibold text-white hover:text-suhu-neon transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
                    {t("services")}
                  </div>
                  <div className="space-y-1">
                    {SERVICES.map((s, i) => (
                      <motion.div
                        key={s.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.03 }}
                      >
                        <Link
                          href={s.slug}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-base text-white/70 hover:text-suhu-emerald transition-colors"
                        >
                          {s.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
                    Language / Bahasa
                  </div>
                  <LanguageSwitcher variant="mobile" />
                </div>
              </nav>

              <div className="px-6 py-6 border-t border-white/5">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-suhu-emerald text-suhu-black font-medium rounded-full"
                >
                  {t("ctaConsult")}
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
