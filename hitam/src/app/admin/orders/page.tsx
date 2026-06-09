import { createClient } from "@/lib/supabase/server";
import AdminOrders from "@/components/admin/AdminOrders";
import type { OrderWithItems } from "@/lib/types";

export const metadata = { title: "Admin · Order" };

export default async function AdminOrdersPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("hitam_orders")
    .select("*, order_items:hitam_order_items(*)")
    .order("created_at", { ascending: false });
  const orders = (data as OrderWithItems[] | null) ?? [];

  const userIds = Array.from(new Set(orders.map((o) => o.user_id)));
  const profiles: Record<string, { full_name: string | null; whatsapp: string | null }> = {};
  if (userIds.length) {
    const { data: profs } = await supabase
      .from("hitam_profiles")
      .select("id, full_name, whatsapp")
      .in("id", userIds);
    for (const p of profs ?? []) {
      profiles[p.id] = { full_name: p.full_name, whatsapp: p.whatsapp };
    }
  }

  return <AdminOrders orders={orders} profiles={profiles} />;
}
