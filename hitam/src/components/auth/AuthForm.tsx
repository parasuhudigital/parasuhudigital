"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Mail, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") || "/dashboard";

  const [fullName, setFullName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkEmail, setCheckEmail] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createClient();

    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName, whatsapp },
          emailRedirectTo:
            typeof window !== "undefined"
              ? `${window.location.origin}/auth/callback?next=${encodeURIComponent(redirect)}`
              : undefined,
        },
      });
      setLoading(false);
      if (error) return setError(error.message);
      if (!data.session) {
        // Email confirmation required.
        setCheckEmail(true);
        return;
      }
      router.push(redirect);
      router.refresh();
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) return setError("Email atau password salah.");
    router.push(redirect);
    router.refresh();
  }

  if (checkEmail) {
    return (
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-suhu-emerald/15 text-suhu-emerald">
          <Mail className="h-7 w-7" />
        </div>
        <h2 className="mt-5 font-display text-xl font-bold">Cek email kamu</h2>
        <p className="mt-2 text-sm text-white/60">
          Kami kirim link konfirmasi ke{" "}
          <span className="font-medium text-white">{email}</span>. Klik link-nya
          buat aktivasi akun, lalu login.
        </p>
        <Link href="/login" className="btn-ghost mt-6 w-full">
          Ke halaman login
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {mode === "signup" && (
        <>
          <div>
            <label htmlFor="fullName" className="label">
              Nama / Nama Bisnis
            </label>
            <input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Budi Santoso"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="whatsapp" className="label">
              Nomor WhatsApp
            </label>
            <input
              id="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
              placeholder="0812xxxxxxxx"
              className="input"
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="kamu@email.com"
          className="input"
        />
      </div>

      <div>
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          placeholder="Minimal 6 karakter"
          className="input"
        />
      </div>

      {error && (
        <p className="rounded-lg border border-hitam-blood/40 bg-hitam-blood/10 p-3 text-sm text-hitam-blood-light">
          {error}
        </p>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {mode === "signup" ? "Mendaftarkan…" : "Masuk…"}
          </>
        ) : mode === "signup" ? (
          "Daftar Sekarang"
        ) : (
          "Masuk"
        )}
      </button>

      <p className="text-center text-sm text-white/50">
        {mode === "signup" ? (
          <>
            Sudah punya akun?{" "}
            <Link href="/login" className="text-hitam-blood-light hover:underline">
              Masuk
            </Link>
          </>
        ) : (
          <>
            Belum punya akun?{" "}
            <Link href="/signup" className="text-hitam-blood-light hover:underline">
              Daftar gratis
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
