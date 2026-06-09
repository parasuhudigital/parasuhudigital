import { redirect } from "next/navigation";
import { getUserAndProfile } from "@/lib/auth";
import DashboardSidebar from "@/components/dashboard/Sidebar";

export const metadata = { title: "Dashboard" };

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, profile } = await getUserAndProfile();
  if (!user) redirect("/login?redirect=/dashboard");

  return (
    <div className="min-h-screen bg-hitam-black">
      <DashboardSidebar
        name={profile?.full_name}
        email={user.email}
        isAdmin={profile?.role === "admin"}
      />
      <div className="lg:pl-64">
        <main className="container-px mx-auto max-w-5xl py-8 lg:py-12">
          {children}
        </main>
      </div>
    </div>
  );
}
