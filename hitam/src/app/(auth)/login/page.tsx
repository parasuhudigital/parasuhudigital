import { Suspense } from "react";
import AuthForm from "@/components/auth/AuthForm";

export const metadata = { title: "Masuk" };

export default function LoginPage() {
  return (
    <div className="card p-8">
      <h1 className="font-display text-2xl font-bold">Masuk ke akun</h1>
      <p className="mt-1 text-sm text-white/55">
        Pantau order & progress project kamu di dashboard.
      </p>
      <div className="mt-6">
        <Suspense fallback={<div className="h-64" />}>
          <AuthForm mode="login" />
        </Suspense>
      </div>
    </div>
  );
}
