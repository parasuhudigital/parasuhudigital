"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { COMPANY, type Locale } from "@/lib/constants";
import { trackLead } from "@/lib/analytics";

/**
 * Floating WhatsApp button — sticky bottom-right on every page.
 * Animates in after a small delay so it doesn't fight with hero content.
 */
export default function WhatsAppFAB() {
  const locale = useLocale() as Locale;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const message =
    locale === "en"
      ? "Hi Para Suhu Digital! I'd like to discuss a project."
      : "Halo Para Suhu Digital! Mau diskusi project nih.";

  const waNumber = COMPANY.whatsapp.replace(/\D/g, "");
  const href = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  const tooltip =
    locale === "en" ? "Chat with us on WhatsApp" : "Chat WhatsApp sekarang";

  return (
    <div
      className={`fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tooltip}
        title={tooltip}
        onClick={() =>
          trackLead({
            content_name: "floating_wa_widget",
            content_category: "whatsapp_click",
          })
        }
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe57] shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all hover:scale-110"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-[#25D366]" />

        {/* WhatsApp glyph (inline SVG so no extra dep) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="relative w-7 h-7 md:w-8 md:h-8 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.7.16-.21.32-.81 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.7-1.68-.96-2.3-.25-.61-.51-.53-.7-.54l-.6-.01c-.21 0-.55.08-.83.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.39 4.76.75.32 1.34.51 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37zM16.04 6.4c-5.32 0-9.64 4.32-9.64 9.63 0 1.7.45 3.36 1.29 4.82L6.13 25.6l4.91-1.51c1.4.76 2.99 1.17 4.61 1.17 5.32 0 9.64-4.32 9.64-9.63s-4.32-9.63-9.64-9.63zm0 17.66c-1.55 0-3.06-.42-4.39-1.21l-.31-.18-3.27 1.01.99-3.2-.2-.32a8.04 8.04 0 0 1-1.24-4.31c0-4.45 3.61-8.06 8.06-8.06s8.06 3.61 8.06 8.06-3.61 8.06-8.06 8.06z" />
        </svg>

        {/* Tooltip */}
        <span className="absolute right-[110%] top-1/2 -translate-y-1/2 mr-2 px-3 py-1.5 bg-suhu-black border border-white/10 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          {tooltip}
        </span>
      </a>
    </div>
  );
}
