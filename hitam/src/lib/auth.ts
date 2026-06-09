import { createClient } from "./supabase/server";
import type { Profile } from "./types";

/** Fetch the current auth user and their profile row (server-side). */
export async function getUserAndProfile(): Promise<{
  user: { id: string; email?: string } | null;
  profile: Profile | null;
}> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { user: null, profile: null };

  const { data: profile } = await supabase
    .from("hitam_profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return {
    user: { id: user.id, email: user.email },
    profile: (profile as Profile) ?? null,
  };
}
