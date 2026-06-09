import { createClient } from "@/lib/supabase/server";
import AdminDomains from "@/components/admin/AdminDomains";
import type { AgedDomain } from "@/lib/types";

export const metadata = { title: "Admin · Aged Domain" };

export default async function AdminDomainsPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("hitam_aged_domains")
    .select("*")
    .order("created_at", { ascending: false });
  const domains = (data as AgedDomain[] | null) ?? [];

  return <AdminDomains domains={domains} />;
}
