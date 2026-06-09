import { Suspense } from "react";
import AuthForm from "@/components/auth/AuthForm";

export const metadata = { title: "Daftar" };

export default function SignupPage() {
  return (
    <div className="card p-8">
      <h1 className="font-display text-2xl font-bold">Buat akun klien</h1>
      <p className="mt-1 text-sm text-white/55">
        Gratis. Order, lacak progress, dan kelola semua project dari satu
        tempat.
      </p>
      <div className="mt-6">
        <Suspense fallback={<div className="h-96" />}>
          <AuthForm mode="signup" />
        </Suspense>
      </div>
    </div>
  );
}
