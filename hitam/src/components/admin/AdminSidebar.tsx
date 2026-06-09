"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Globe,
  Package,
  Rocket,
  ArrowLeft,
  LogOut,
} from "lucide-react";
import Logo from "../Logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/admin", label: "Ringkasan", icon: LayoutDashboard, exact: true },
  { href: "/admin/domains", label: "Aged Domain", icon: Globe },
  { href: "/admin/orders", label: "Order", icon: Package },
  { href: "/admin/projects", label: "Project", icon: Rocket },
];

export default function AdminSidebar() {
  const path = usePathname();
  const active = (href: string, exact?: boolean) =>
    exact ? path === href : path.startsWith(href);

  return (
    <aside className="border-b border-hitam-border bg-hitam-void lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:border-b-0 lg:border-r">
      <div className="flex h-full flex-col p-5">
        <div className="flex items-center justify-between">
          <Logo />
          <span className="rounded-full border border-hitam-gold/40 bg-hitam-gold/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-hitam-gold">
            Admin
          </span>
        </div>

        <nav className="mt-6 flex gap-1 overflow-x-auto lg:flex-col">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                active(l.href, l.exact)
                  ? "bg-hitam-gold/15 text-hitam-gold"
                  : "text-white/65 hover:bg-white/5 hover:text-white",
              )}
            >
              <l.icon className="h-4 w-4" />
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto hidden space-y-1 pt-6 lg:block">
          <Link
            href="/dashboard"
            className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-white/55 transition-colors hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Dashboard klien
          </Link>
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-white/55 transition-colors hover:bg-hitam-blood/10 hover:text-hitam-blood-light"
            >
              <LogOut className="h-4 w-4" />
              Keluar
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
