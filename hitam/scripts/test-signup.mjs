// E2E test of the signup flow (mirrors app/actions/auth.ts).
import { createClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const RKEY = process.env.RESEND_API_KEY;
const FROM = process.env.RESEND_FROM;

const admin = createClient(URL, SERVICE, { auth: { persistSession: false } });
const email = `signup_${Date.now()}@example.com`;
const password = "Test1234!";
let uid = null;

try {
  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      full_name: "Signup Test",
      whatsapp: "08120000000",
      telegram: "@signuptest",
    },
  });
  if (error) throw new Error("createUser: " + error.message);
  uid = data.user.id;
  console.log("✓ user created + auto-confirmed");

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RKEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: "delivered@resend.dev",
      subject: "Welcome test",
      html: "<p>hi</p>",
    }),
  });
  console.log(r.ok ? "✓ welcome email sent via Resend" : "✗ email failed: " + (await r.text()));

  const u = createClient(URL, ANON, { auth: { persistSession: false } });
  const { error: se } = await u.auth.signInWithPassword({ email, password });
  console.log(se ? "✗ login: " + se.message : "✓ login works (account is confirmed)");

  const { data: p } = await admin
    .from("hitam_profiles")
    .select("full_name, telegram, role")
    .eq("id", uid)
    .single();
  console.log(
    p
      ? `✓ profile created: ${p.full_name} · tg=${p.telegram} (${p.role})`
      : "✗ no profile row",
  );

  console.log("\nSIGNUP FLOW OK");
} catch (e) {
  console.error("✗", e.message);
  process.exitCode = 1;
} finally {
  if (uid) {
    await admin.auth.admin.deleteUser(uid);
    console.log("✓ cleaned up test user");
  }
}
