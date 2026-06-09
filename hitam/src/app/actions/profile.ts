"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export type ProfileInput = {
  full_name: string;
  company: string;
  phone: string;
  whatsapp: string;
  telegram: string;
};

export async function updateProfile(
  input: ProfileInput,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "Kamu belum login." };

  const { error } = await supabase
    .from("hitam_profiles")
    .update({
      full_name: input.full_name || null,
      company: input.company || null,
      phone: input.phone || null,
      whatsapp: input.whatsapp || null,
      telegram: input.telegram || null,
    })
    .eq("id", user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/dashboard/profile");
  return { ok: true };
}
