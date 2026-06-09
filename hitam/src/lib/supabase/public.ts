import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Cookie-less anon client for PUBLIC reads (catalog/inventory) from server
 * components. Avoids next/headers cookies() so pages using it can stay static.
 */
export function createPublicClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
