import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import SocialProof from "@/components/SocialProof";
import { getUserAndProfile } from "@/lib/auth";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, profile } = await getUserAndProfile();

  return (
    <>
      <Header userEmail={user?.email ?? null} isAdmin={profile?.role === "admin"} />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppFAB />
      <SocialProof />
    </>
  );
}
