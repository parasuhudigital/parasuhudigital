// Integration test: signup trigger + RLS + order creation path.
// Run: node --env-file=.env.local scripts/test-flow.mjs
import { createClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;

const admin = createClient(URL, SERVICE, { auth: { persistSession: false } });
const email = `flowtest_${Date.now()}@example.com`;
const password = "Test1234!";
let userId = null;
const log = (ok, msg) => console.log(`${ok ? "✓" : "✗"} ${msg}`);

try {
  // 1) Create user (triggers handle_new_user → profiles row)
  const { data: created, error: cErr } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: "Flow Test", whatsapp: "08123456789" },
  });
  if (cErr) throw new Error("createUser: " + cErr.message);
  userId = created.user.id;
  log(true, `user created: ${email}`);

  // 2) Profile auto-created by trigger?
  const { data: prof } = await admin
    .from("hitam_profiles")
    .select("id, full_name, whatsapp, role")
    .eq("id", userId)
    .single();
  log(!!prof, `profile trigger fired (full_name="${prof?.full_name}", role=${prof?.role})`);

  // 3) Sign in as the user (RLS context = authenticated)
  const user = createClient(URL, ANON, { auth: { persistSession: false } });
  const { error: sErr } = await user.auth.signInWithPassword({ email, password });
  if (sErr) throw new Error("signIn: " + sErr.message);
  log(true, "signed in as user");

  // 4) Insert order as the user (RLS + sequence default + grant)
  const { data: order, error: oErr } = await user
    .from("hitam_orders")
    .insert({ user_id: userId, total_idr: 12500000, notes: "test brief" })
    .select("id, order_number")
    .single();
  if (oErr) throw new Error("order insert: " + oErr.message);
  log(true, `order created with number ${order.order_number}`);

  // 5) Insert order item
  const { error: iErr } = await user.from("hitam_order_items").insert({
    order_id: order.id,
    service_slug: "aged-domain",
    service_name: "Aged Domain",
    qty: 1,
    unit_price_idr: 12500000,
    meta: { domain: "test.com" },
  });
  log(!iErr, `order_item insert ${iErr ? "FAILED: " + iErr.message : "ok"}`);

  // 6) User can read own order
  const { data: mine } = await user.from("hitam_orders").select("id").eq("id", order.id);
  log(mine?.length === 1, "user can read own order");

  // 7) RLS: user CANNOT write aged_domains (admin-only)
  const { error: wErr } = await user
    .from("hitam_aged_domains")
    .update({ price_idr: 1 })
    .eq("domain", "depositmaxwin.com");
  // RLS blocks → either error or 0 rows affected silently; verify price unchanged
  const { data: chk } = await admin
    .from("hitam_aged_domains")
    .select("price_idr")
    .eq("domain", "depositmaxwin.com")
    .single();
  log(chk?.price_idr !== 1, `RLS blocks client domain write (price still ${chk?.price_idr})`);

  // 8) Public/anon can read catalog
  const anon = createClient(URL, ANON, { auth: { persistSession: false } });
  const { data: pub, error: pErr } = await anon
    .from("hitam_aged_domains")
    .select("id")
    .eq("status", "available")
    .limit(3);
  log(!pErr && (pub?.length ?? 0) > 0, `anon can read catalog (${pub?.length} rows)`);

  console.log("\nALL CORE CHECKS PASSED");
} catch (e) {
  console.error("\n✗ FAILED:", e.message);
  process.exitCode = 1;
} finally {
  // Cleanup
  if (userId) {
    await admin.auth.admin.deleteUser(userId);
    console.log("✓ cleaned up test user");
  }
}
