"use client";

import { useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LANGUAGES: Record<Locale, { label: string; short: string; flag: string }> = {
  id: { label: "Bahasa Indonesia", short: "ID", flag: "🇮🇩" },
  en: { label: "English", short: "EN", flag: "🇬🇧" },
};

export default function LanguageSwitcher({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const handleSelect = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  if (variant === "mobile") {
    return (
      <div className="flex items-center gap-2">
        {routing.locales.map((l) => (
          <button
            key={l}
            onClick={() => handleSelect(l)}
            className={cn(
              "flex-1 py-3 rounded-xl border text-sm font-medium transition-all",
              locale === l
                ? "border-suhu-emerald bg-suhu-emerald/10 text-suhu-neon"
                : "border-white/10 text-white/60 hover:border-white/30"
            )}
          >
            <span className="mr-2">{LANGUAGES[l].flag}</span>
            {LANGUAGES[l].label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm text-white/80 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-all"
        aria-label="Switch language"
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="font-mono text-xs tracking-wider">
          {LANGUAGES[locale].short}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full right-0 pt-2 w-56 z-50"
          >
            <div className="bg-suhu-black-card border border-white/10 rounded-2xl p-1.5 shadow-2xl backdrop-blur-xl">
              {routing.locales.map((l) => (
                <button
                  key={l}
                  onClick={() => handleSelect(l)}
                  className={cn(
                    "w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors",
                    locale === l
                      ? "bg-suhu-emerald/10 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-base leading-none">
                      {LANGUAGES[l].flag}
                    </span>
                    <span>{LANGUAGES[l].label}</span>
                  </span>
                  {locale === l && (
                    <Check className="w-3.5 h-3.5 text-suhu-emerald" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
