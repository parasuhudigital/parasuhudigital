import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-suhu-black border-t border-white/5 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-radial-emerald opacity-30 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        {/* Big tagline */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white">
            Siap jadi <span className="italic text-gradient-emerald">suhu</span>
            <br />
            di industri lo?
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 px-7 py-4 bg-suhu-emerald text-suhu-black font-medium rounded-full hover:bg-suhu-neon transition-all group"
          >
            <span>Mulai diskusi sekarang</span>
            <div className="w-8 h-8 rounded-full bg-suhu-black flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-4 h-4 text-suhu-neon" />
            </div>
          </Link>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-suhu-neon to-suhu-emerald-dark" />
                <div className="absolute inset-[2px] rounded-[6px] bg-suhu-black flex items-center justify-center">
                  <span className="font-display text-suhu-neon text-xl leading-none">
                    S
                  </span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display italic text-lg text-white">
                  Para Suhu
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-suhu-emerald uppercase">
                  Digital Agency
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              {COMPANY.tagline}. Agency digital yang nge-handle semua kebutuhan
              bisnis lo — dari website sampe ads, dari SEO sampe AI.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-suhu-emerald transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{COMPANY.email}</span>
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-suhu-emerald transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{COMPANY.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{COMPANY.shortAddress}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-suhu-emerald mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.slug}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-suhu-emerald mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "About", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
                { name: "Career", href: "#" },
              ].map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-suhu-emerald mb-5">
              Legal & Office
            </h4>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <div className="text-xs text-white/40 leading-relaxed">
              <div className="font-medium text-white/60 mb-1">Head Office</div>
              {COMPANY.address}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-white/40 font-mono">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-mono">
            Made with <span className="text-suhu-emerald">∞</span> in Jakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
