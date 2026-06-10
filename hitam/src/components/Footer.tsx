import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, SERVICE_META, NAV } from "@/lib/constants";
import { getServerT } from "@/lib/i18n.server";
import { waLink } from "@/lib/utils";

export default function Footer() {
  const { t } = getServerT();
  const navLabel: Record<string, string> = {
    "/aged-domains": t.nav.agedDomain,
    "/jasa": t.nav.services,
    "/#cara-kerja": t.nav.howItWorks,
    "/#testimoni": t.nav.testimonials,
  };

  return (
    <footer className="border-t border-hitam-border bg-hitam-void">
      <div className="container-w container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {COMPANY.tagline}
            </p>
            <a
              href={waLink("Halo Para Suhu Hitam! Mau konsultasi gratis.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              {t.footer.consultWa}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-hitam-blood">
              {t.footer.services}
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_META.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/jasa/${s.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {t.serviceMeta[s.slug]?.name ?? s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/aged-domains"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {t.nav.marketplace}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-hitam-blood">
              {t.footer.nav}
            </h4>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {navLabel[n.href] ?? n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {t.nav.clientDashboard}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-hitam-blood">
              {t.footer.contact}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a
                  href={waLink("Halo Para Suhu Hitam!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WA {COMPANY.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://t.me/${COMPANY.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Telegram {COMPANY.telegramDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.parentSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-suhu-emerald transition-colors hover:text-suhu-neon"
                >
                  parasuhudigital.com
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hitam-border pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {COMPANY.year} {COMPANY.brand} · {COMPANY.division}.{" "}
            {t.footer.rights}
          </p>
          <p className="max-w-xl leading-relaxed">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
