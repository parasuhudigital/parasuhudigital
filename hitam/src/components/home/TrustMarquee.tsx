const ITEMS = [
  "Black Hat SEO",
  "Aged Domain Bersih",
  "Hidden Backlink",
  "Blogroll Sitewide",
  "Meta Ads Anti-Banned",
  "TikTok Ads",
  "Google Discovery",
  "Snack Video Ads",
  "Landing Page AMP",
  "PBN Network",
  "Parasite SEO",
  "Ranking Kilat",
];

export default function TrustMarquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-hitam-border bg-hitam-void py-4">
      <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-mono text-sm uppercase tracking-wider text-white/40"
          >
            {item}
            <span className="text-hitam-blood">✦</span>
          </span>
        ))}
      </div>
      <div
        className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8"
        aria-hidden="true"
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-mono text-sm uppercase tracking-wider text-white/40"
          >
            {item}
            <span className="text-hitam-blood">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
