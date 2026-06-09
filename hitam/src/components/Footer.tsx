import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, SERVICE_META, NAV } from "@/lib/constants";
import { waLink } from "@/lib/utils";

export default function Footer() {
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
              Konsultasi via WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-hitam-blood">
              Layanan
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_META.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/jasa/${s.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/aged-domains"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Marketplace Aged Domain
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-hitam-blood">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Dashboard Klien
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-hitam-blood">
              Kontak
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
            © {COMPANY.year} {COMPANY.brand} · Divisi {COMPANY.division}. Semua
            hak dilindungi.
          </p>
          <p className="max-w-xl leading-relaxed">
            Disclaimer: layanan black-hat bersifat high-risk high-reward.
            Gunakan untuk money site / churn-and-burn, bukan brand jangka
            panjang. Risiko teknis sepenuhnya tanggung jawab pemesan.
          </p>
        </div>
      </div>
    </footer>
  );
}
