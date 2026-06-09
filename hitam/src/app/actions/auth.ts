"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { sendEmail, welcomeEmail } from "@/lib/email";

export type SignUpResult = { ok: boolean; error?: string };

/**
 * Server-side signup that auto-confirms the email (so registration works
 * end-to-end without depending on Supabase's hosted email/redirect config),
 * then sends a welcome email via Resend. The profile row is created by the
 * hitam_handle_new_user trigger.
 */
export async function signUpAndConfirm(input: {
  email: string;
  password: string;
  fullName: string;
  whatsapp: string;
  telegram: string;
}): Promise<SignUpResult> {
  const email = input.email.trim().toLowerCase();
  if (!email || !input.password) {
    return { ok: false, error: "Email dan password wajib diisi." };
  }
  if (input.password.length < 6) {
    return { ok: false, error: "Password minimal 6 karakter." };
  }

  const admin = createAdminClient();
  const { error } = await admin.auth.admin.createUser({
    email,
    password: input.password,
    email_confirm: true,
    user_metadata: {
      full_name: input.fullName,
      whatsapp: input.whatsapp,
      telegram: input.telegram,
    },
  });

  if (error) {
    const m = error.message || "";
    if (/already|registered|exists|duplicate/i.test(m)) {
      return { ok: false, error: "Email ini udah terdaftar. Langsung login aja." };
    }
    return { ok: false, error: m };
  }

  // Welcome email — non-blocking, never fails the signup.
  await sendEmail({
    to: email,
    subject: "Akun Para Suhu Hitam kamu udah aktif ✅",
    html: welcomeEmail(input.fullName),
  }).catch(() => {});

  return { ok: true };
}
