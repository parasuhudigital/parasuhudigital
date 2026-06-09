"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { signUpAndConfirm } from "@/app/actions/auth";

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

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createClient();

    if (mode === "signup") {
      const res = await signUpAndConfirm({ email, password, fullName, whatsapp });
      if (!res.ok) {
        setLoading(false);
        return setError(res.error ?? "Gagal mendaftar.");
      }
      // Account is auto-confirmed server-side — sign in immediately.
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setLoading(false);
      if (error) {
        return setError("Akun dibuat, tapi gagal login otomatis. Coba login manual.");
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
