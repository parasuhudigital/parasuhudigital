import { redirect } from "next/navigation";
import { getUserAndProfile } from "@/lib/auth";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata = { title: "Admin" };

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, profile } = await getUserAndProfile();
  if (!user) redirect("/login?redirect=/admin");
  if (profile?.role !== "admin") redirect("/dashboard");

  return (
    <div className="min-h-screen bg-hitam-black">
      <AdminSidebar />
      <div className="lg:pl-64">
        <main className="container-px mx-auto max-w-6xl py-8 lg:py-12">
          {children}
        </main>
      </div>
    </div>
  );
}
