"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { signUpAndConfirm } from "@/app/actions/auth";
import { fbqTrack } from "@/lib/analytics";
import { useT, useLocale } from "../i18n/LocaleProvider";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") || "/dashboard";
  const dict = useT();
  const locale = useLocale();
  const ta = dict.auth;

  const [fullName, setFullName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [telegram, setTelegram] = useState("");
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
      const res = await signUpAndConfirm({ email, password, fullName, whatsapp, telegram });
      if (!res.ok) {
        setLoading(false);
        return setError(
          res.error ?? (locale === "en" ? "Sign up failed." : "Gagal mendaftar."),
        );
      }
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) {
        return setError(
          locale === "en"
            ? "Account created, but auto-login failed. Please sign in manually."
            : "Akun dibuat, tapi gagal login otomatis. Coba login manual.",
        );
      }
      fbqTrack("CompleteRegistration");
      fbqTrack("Lead");
      router.push(redirect);
      router.refresh();
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error)
      return setError(
        locale === "en" ? "Wrong email or password." : "Email atau password salah.",
      );
    router.push(redirect);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {mode === "signup" && (
        <>
          <div>
            <label htmlFor="fullName" className="label">
              {ta.name}
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
              {ta.whatsapp}
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
          <div>
            <label htmlFor="telegram" className="label">
              {ta.telegram}
            </label>
            <input
              id="telegram"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              required
              placeholder="@username"
              className="input"
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor="email" className="label">
          {ta.email}
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@email.com"
          className="input"
        />
      </div>

      <div>
        <label htmlFor="password" className="label">
          {ta.password}
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          placeholder={ta.passwordHint}
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
            {mode === "signup" ? ta.signingUp : ta.signingIn}
          </>
        ) : mode === "signup" ? (
          ta.registerNow
        ) : (
          ta.signin
        )}
      </button>

      <p className="text-center text-sm text-white/50">
        {mode === "signup" ? (
          <>
            {ta.haveAccount}{" "}
            <Link href="/login" className="text-hitam-blood-light hover:underline">
              {ta.signin}
            </Link>
          </>
        ) : (
          <>
            {ta.noAccount}{" "}
            <Link href="/signup" className="text-hitam-blood-light hover:underline">
              {ta.registerFree}
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
