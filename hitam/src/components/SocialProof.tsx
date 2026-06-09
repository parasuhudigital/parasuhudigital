"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, X } from "lucide-react";
import { SOCIAL_PROOF } from "@/lib/proof";

/** Bottom-left rotating "social proof" purchase notifications. */
export default function SocialProof() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed || SOCIAL_PROOF.length === 0) return;
    let cycle: ReturnType<typeof setTimeout>;

    const start = setTimeout(() => setShow(true), 3500);

    const loop = () => {
      setShow(false);
      cycle = setTimeout(() => {
        setIndex((i) => (i + 1) % SOCIAL_PROOF.length);
        setShow(true);
      }, 600);
    };

    const interval = setInterval(loop, 6500);
    return () => {
      clearTimeout(start);
      clearTimeout(cycle);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed) return null;
  const item = SOCIAL_PROOF[index];

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 max-w-[300px] transition-all duration-500 md:bottom-7 md:left-7 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-live="polite"
    >
      <div className="relative flex items-start gap-3 rounded-2xl border border-hitam-border bg-hitam-card/95 p-3.5 pr-8 shadow-2xl backdrop-blur-xl">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-hitam-blood/15 text-hitam-blood">
          <ShoppingBag className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm leading-snug text-white">
            <span className="font-semibold">{item.name}</span>{" "}
            <span className="text-white/60">dari {item.city}</span>
          </p>
          <p className="mt-0.5 truncate text-xs text-white/70">{item.action}</p>
          <p className="mt-1 flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-suhu-emerald">
            <span className="h-1.5 w-1.5 rounded-full bg-suhu-emerald" />
            {item.timeAgo}
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Tutup notifikasi"
          className="absolute right-2 top-2 text-white/30 transition-colors hover:text-white/70"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
