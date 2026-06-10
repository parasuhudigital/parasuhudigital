import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/utils";
import { getServerT } from "@/lib/i18n.server";

export default function FinalCTA() {
  const { locale, t } = getServerT();
  const waMsg =
    locale === "en"
      ? "Hi Para Suhu Hitam! Can I get a quick consultation first?"
      : "Halo Para Suhu Hitam! Mau konsultasi dulu boleh?";

  return (
    <section className="container-w container-px pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-hitam-blood/30 bg-gradient-to-br from-hitam-blood/15 via-hitam-card to-hitam-card p-10 lg:p-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-hitam-blood/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {t.finalCta.title}
            <span className="text-gradient-blood"> {t.finalCta.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
            {t.finalCta.desc}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/signup" className="btn-primary px-7 py-3.5 text-base">
              {t.finalCta.ctaPrimary}
              <ArrowUpRight className="h-5 w-5" />
            </Link>
            <a
              href={waLink(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-7 py-3.5 text-base"
            >
              {t.finalCta.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
