"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";
import { useT, useLocale } from "./i18n/LocaleProvider";

const WA_SVG = (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.030-.967-.273-.099-.471-.148-.670.149-.197.297-.767.966-.940 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488" />
  </svg>
);

const TG_SVG = (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
  </svg>
);

function Option({
  href,
  label,
  sub,
  bg,
  icon,
}: {
  href: string;
  label: string;
  sub: string;
  bg: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-end gap-2.5"
    >
      <span className="flex flex-col items-end rounded-xl border border-hitam-border bg-hitam-card/95 px-3 py-1.5 shadow-lg backdrop-blur">
        <span className="text-sm font-semibold leading-tight text-white">
          {label}
        </span>
        <span className="text-[11px] leading-tight text-white/50">{sub}</span>
      </span>
      <span
        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full shadow-lg transition-transform group-hover:scale-110"
        style={{ background: bg }}
      >
        {icon}
      </span>
    </a>
  );
}

/** Floating "Hubungi Kami" launcher — expands to WhatsApp + Telegram. */
export default function WhatsAppFAB() {
  const dict = useT();
  const locale = useLocale();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const wa = waLink(
    locale === "en"
      ? "Hi Para Suhu Hitam! I'd like to ask about your services."
      : "Halo Para Suhu Hitam! Gua mau tanya-tanya soal jasa kalian nih.",
  );
  const tg = `https://t.me/${COMPANY.telegram}`;

  return (
    <>
      {open && (
        <button
          aria-label="Tutup menu kontak"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 cursor-default"
        />
      )}

      <div
        className={`fixed bottom-5 right-5 z-40 flex flex-col items-end transition-all duration-500 md:bottom-7 md:right-7 ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.92 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3 flex flex-col items-end gap-3"
            >
              <Option
                href={wa}
                label="WhatsApp"
                sub={COMPANY.whatsappDisplay}
                bg="#25D366"
                icon={WA_SVG}
              />
              <Option
                href={tg}
                label="Telegram"
                sub={COMPANY.telegramDisplay}
                bg="#229ED9"
                icon={TG_SVG}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={dict.fab.contactUs}
          aria-expanded={open}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-hitam-blood text-white shadow-[0_8px_30px_rgba(255,45,74,0.45)] transition-all hover:scale-105 hover:bg-hitam-blood-light md:h-16 md:w-16"
        >
          {!open && (
            <span className="absolute inset-0 animate-ping rounded-full bg-hitam-blood opacity-30" />
          )}
          <span className="relative">
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
            )}
          </span>
          {!open && (
            <span className="pointer-events-none absolute right-[115%] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-hitam-black px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
              {dict.fab.contactUs}
            </span>
          )}
        </button>
      </div>
    </>
  );
}
