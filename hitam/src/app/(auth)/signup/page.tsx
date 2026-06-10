import { Suspense } from "react";
import AuthForm from "@/components/auth/AuthForm";
import { getServerT } from "@/lib/i18n.server";

export const metadata = { title: "Daftar / Sign up" };

export default function SignupPage() {
  const { t } = getServerT();
  return (
    <div className="card p-8">
      <h1 className="font-display text-2xl font-bold">{t.auth.signupTitle}</h1>
      <p className="mt-1 text-sm text-white/55">{t.auth.signupSubtitle}</p>
      <div className="mt-6">
        <Suspense fallback={<div className="h-96" />}>
          <AuthForm mode="signup" />
        </Suspense>
      </div>
    </div>
  );
}
