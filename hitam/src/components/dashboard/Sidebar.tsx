"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  Shield,
  ArrowLeft,
  LogOut,
} from "lucide-react";
import Logo from "../Logo";
import { cn, initials } from "@/lib/utils";

const LINKS = [
  { href: "/dashboard", label: "Ringkasan", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/profile", label: "Profil", icon: User },
];

export default function DashboardSidebar({
  name,
  email,
  isAdmin,
}: {
  name?: string | null;
  email?: string | null;
  isAdmin?: boolean;
}) {
  const path = usePathname();
  const active = (href: string, exact?: boolean) =>
    exact ? path === href : path.startsWith(href);

  return (
    <aside className="border-b border-hitam-border bg-hitam-void lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:border-b-0 lg:border-r">
      <div className="flex h-full flex-col p-5">
        <Logo />

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-hitam-border bg-hitam-card p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-hitam-blood/15 font-mono text-sm font-bold text-hitam-blood-light">
            {initials(name || email)}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-medium text-white">
              {name || "Klien"}
            </div>
            <div className="truncate text-xs text-white/45">{email}</div>
          </div>
        </div>

        <nav className="mt-6 flex gap-1 overflow-x-auto lg:flex-col">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                active(l.href, l.exact)
                  ? "bg-hitam-blood/15 text-hitam-blood-light"
                  : "text-white/65 hover:bg-white/5 hover:text-white",
              )}
            >
              <l.icon className="h-4 w-4" />
              {l.label}
            </Link>
          ))}
          {isAdmin && (
            <Link
              href="/admin"
              className="flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium text-hitam-gold transition-colors hover:bg-white/5"
            >
              <Shield className="h-4 w-4" />
              Admin Panel
            </Link>
          )}
        </nav>

        <div className="mt-auto hidden space-y-1 pt-6 lg:block">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-white/55 transition-colors hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke situs
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
