"use client";

import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "SEO",
  "WEBSITE",
  "MOBILE APP",
  "CUSTOM SOFTWARE",
  "META ADS",
  "GOOGLE ADS",
  "SOCIAL MEDIA",
  "DIGITAL MARKETING",
  "BRANDING",
  "CONTENT",
  "AI AUTOMATION",
  "GROWTH",
];

export default function MarqueeStrip() {
  return (
    <section className="py-12 border-y border-white/5 bg-suhu-black-card/30 overflow-hidden">
      <div className="mask-fade-x">
        <div className="marquee-track gap-12 items-center">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-12 flex-shrink-0">
              <span className="font-display font-semibold text-3xl md:text-5xl text-white/80 whitespace-nowrap">
                {item}
              </span>
              <span className="text-suhu-neon text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
