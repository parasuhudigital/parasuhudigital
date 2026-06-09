"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { CartItem } from "@/lib/types";

export type CreateOrderResult =
  | { ok: true; orderId: string; orderNumber: string }
  | { ok: false; error: string };

export async function createOrder(
  items: CartItem[],
  notes: string,
): Promise<CreateOrderResult> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { ok: false, error: "Kamu harus login dulu." };
  if (!items?.length) return { ok: false, error: "Keranjang kamu kosong." };

  const total = items.reduce((n, i) => n + i.qty * i.unit_price_idr, 0);

  const { data: order, error: orderErr } = await supabase
    .from("hitam_orders")
    .insert({ user_id: user.id, total_idr: total, notes: notes || null })
    .select("id, order_number")
    .single();

  if (orderErr || !order) {
    return { ok: false, error: orderErr?.message ?? "Gagal membuat order." };
  }

  const rows = items.map((i) => ({
    order_id: order.id,
    service_slug: i.service_slug,
    service_name: i.service_name,
    package_tier: i.package_tier ?? null,
    qty: i.qty,
    unit_price_idr: i.unit_price_idr,
    meta: i.meta ?? null,
    aged_domain_id: i.aged_domain_id ?? null,
  }));

  const { error: itemsErr } = await supabase.from("hitam_order_items").insert(rows);
  if (itemsErr) {
    // Roll back the order so we don't leave an empty shell.
    await supabase.from("hitam_orders").delete().eq("id", order.id);
    return { ok: false, error: itemsErr.message };
  }

  // Hold (reserve) any aged domains in this order. aged_domains is admin-write
  // under RLS, so use the service-role client server-side.
  const domainIds = items
    .map((i) => i.aged_domain_id)
    .filter((x): x is string => Boolean(x));

  if (domainIds.length) {
    try {
      const admin = createAdminClient();
      await admin
        .from("hitam_aged_domains")
        .update({ status: "reserved" })
        .in("id", domainIds)
        .eq("status", "available");
    } catch {
      // Non-fatal: order is created; admin can reconcile inventory manually.
    }
  }

  revalidatePath("/dashboard");
  revalidatePath("/aged-domains");

  return { ok: true, orderId: order.id, orderNumber: order.order_number };
}
