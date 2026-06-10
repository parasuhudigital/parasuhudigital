"use client";

import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n";
import { useLocale } from "./LocaleProvider";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const router = useRouter();
  const locale = useLocale();

  function set(l: Locale) {
    if (l === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-white/10 bg-white/5 p-0.5",
        className,
      )}
    >
      {(["id", "en"] as Locale[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => set(l)}
          aria-pressed={l === locale}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide transition-colors",
            l === locale
              ? "bg-hitam-blood text-white"
              : "text-white/55 hover:text-white",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
