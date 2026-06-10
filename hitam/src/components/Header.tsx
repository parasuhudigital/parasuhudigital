"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ShoppingCart,
  ChevronDown,
  LayoutDashboard,
  Shield,
  LogIn,
  ArrowUpRight,
} from "lucide-react";
import Logo from "./Logo";
import { SERVICE_META } from "@/lib/constants";
import { useCart } from "./cart/CartProvider";
import { useT } from "./i18n/LocaleProvider";
import LanguageSwitcher from "./i18n/LanguageSwitcher";
import { cn } from "@/lib/utils";

export default function Header({
  userEmail,
  isAdmin,
}: {
  userEmail?: string | null;
  isAdmin?: boolean;
}) {
  const t = useT();
  const { count, ready } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const extraNav = [
    { label: t.nav.howItWorks, href: "/#cara-kerja" },
    { label: t.nav.testimonials, href: "/#testimoni" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/5 bg-hitam-black/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container-w container-px flex items-center justify-between py-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/aged-domains"
              className="px-3.5 py-2 text-sm text-white/75 transition-colors hover:text-white"
            >
              {t.nav.agedDomain}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/jasa"
                className="flex items-center gap-1 px-3.5 py-2 text-sm text-white/75 transition-colors hover:text-white"
              >
                {t.nav.services}
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform",
                    servicesOpen && "rotate-180",
                  )}
                />
              </Link>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full w-[360px] pt-3"
                  >
                    <div className="rounded-2xl border border-white/10 bg-hitam-card p-2 shadow-2xl">
                      {SERVICE_META.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/jasa/${s.slug}`}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                        >
                          <span
                            className={cn(
                              "mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full",
                              s.accent === "blood" && "bg-hitam-blood",
                              s.accent === "emerald" && "bg-suhu-emerald",
                              s.accent === "gold" && "bg-hitam-gold",
                            )}
                          />
                          <span>
                            <span className="block text-sm font-medium text-white group-hover:text-hitam-blood-light">
                              {t.serviceMeta[s.slug]?.name ?? s.name}
                            </span>
                            <span className="mt-0.5 line-clamp-1 block text-xs text-white/45">
                              {t.serviceMeta[s.slug]?.short ?? s.short}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {extraNav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="px-3.5 py-2 text-sm text-white/75 transition-colors hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <Link
              href="/cart"
              aria-label={t.nav.cart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition-colors hover:border-hitam-blood/50 hover:text-white"
            >
              <ShoppingCart className="h-[18px] w-[18px]" />
              {ready && count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-hitam-blood px-1 text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </Link>

            {userEmail ? (
              <div className="hidden items-center gap-2 md:flex">
                {isAdmin && (
                  <Link
                    href="/admin"
                    className="inline-flex items-center gap-1.5 rounded-full border border-hitam-blood/40 px-4 py-2 text-sm font-medium text-hitam-blood-light transition-colors hover:bg-hitam-blood/10"
                  >
                    <Shield className="h-4 w-4" />
                    {t.nav.admin}
                  </Link>
                )}
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-1.5 rounded-full bg-hitam-blood px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-hitam-blood-light"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  {t.nav.dashboard}
                </Link>
              </div>
            ) : (
              <div className="hidden items-center gap-2 md:flex">
                <Link
                  href="/login"
                  className="px-3.5 py-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  {t.nav.signin}
                </Link>
                <Link href="/signup" className="btn-primary px-5 py-2.5">
                  {t.nav.register}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}

            <button
              onClick={() => setOpen(true)}
              aria-label="Menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-hitam-black lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-5 py-8">
                <Link
                  href="/aged-domains"
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl font-semibold text-white"
                >
                  {t.nav.agedDomain}
                </Link>
                {[
                  { label: t.nav.services, href: "/jasa" },
                  ...extraNav,
                ].map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-2xl font-semibold text-white"
                  >
                    {n.label}
                  </Link>
                ))}

                <div className="mt-6 border-t border-white/5 pt-6">
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-hitam-blood">
                    {t.nav.services}
                  </p>
                  {SERVICE_META.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/jasa/${s.slug}`}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-base text-white/70"
                    >
                      {t.serviceMeta[s.slug]?.name ?? s.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/5 pt-6">
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-hitam-blood">
                    {t.nav.language}
                  </p>
                  <LanguageSwitcher />
                </div>
              </nav>

              <div className="space-y-3 border-t border-white/5 px-5 py-6">
                {userEmail ? (
                  <>
                    {isAdmin && (
                      <Link
                        href="/admin"
                        onClick={() => setOpen(false)}
                        className="btn-ghost w-full"
                      >
                        <Shield className="h-4 w-4" /> {t.nav.admin}
                      </Link>
                    )}
                    <Link
                      href="/dashboard"
                      onClick={() => setOpen(false)}
                      className="btn-primary w-full"
                    >
                      <LayoutDashboard className="h-4 w-4" /> {t.nav.dashboard}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="btn-ghost w-full"
                    >
                      <LogIn className="h-4 w-4" /> {t.nav.signin}
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setOpen(false)}
                      className="btn-primary w-full"
                    >
                      {t.nav.register}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
