import Link from "next/link";
import { LogIn, UserPlus } from "lucide-react";
import { getUserAndProfile } from "@/lib/auth";
import CheckoutClient from "@/components/cart/CheckoutClient";

export const metadata = { title: "Checkout" };

export default async function CheckoutPage() {
  const { user, profile } = await getUserAndProfile();

  if (!user) {
    return (
      <div className="container-w container-px pt-32 lg:pt-40">
        <div className="mx-auto max-w-md">
          <div className="card p-10 text-center">
            <h1 className="font-display text-2xl font-bold">
              Login dulu buat checkout
            </h1>
            <p className="mt-2 text-white/60">
              Order kamu disimpan di akun pribadi biar bisa dipantau
              progress-nya. Gratis, cuma butuh email.
            </p>
            <div className="mt-6 space-y-3">
              <Link
                href="/login?redirect=/checkout"
                className="btn-primary w-full"
              >
                <LogIn className="h-4 w-4" /> Masuk
              </Link>
              <Link
                href="/signup?redirect=/checkout"
                className="btn-ghost w-full"
              >
                <UserPlus className="h-4 w-4" /> Daftar Akun Baru
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <CheckoutClient userName={profile?.full_name || user.email || "Klien"} />;
}
