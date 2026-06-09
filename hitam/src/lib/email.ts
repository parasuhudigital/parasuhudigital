const KEY = process.env.RESEND_API_KEY;
const FROM = process.env.RESEND_FROM || "Para Suhu Hitam <noreply@parasuhudigital.com>";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://hitam.parasuhudigital.com";

/** Send an email via the Resend HTTP API. Server-only. Never throws. */
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}): Promise<{ ok: boolean; error?: string }> {
  if (!KEY) return { ok: false, error: "RESEND_API_KEY not set" };
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: FROM, to, subject, html }),
    });
    if (!res.ok) return { ok: false, error: await res.text() };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}

const shell = (inner: string) => `
<div style="margin:0;padding:24px;background:#0a0a0b;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
  <div style="max-width:520px;margin:0 auto;background:#111113;border:1px solid #26262c;border-radius:16px;overflow:hidden">
    <div style="padding:20px 28px;border-bottom:1px solid #26262c">
      <span style="font-size:18px;font-weight:700;color:#fff">Para Suhu</span>
      <span style="font-size:11px;font-weight:700;letter-spacing:2px;color:#FF2D4A;margin-left:8px">HITAM</span>
    </div>
    <div style="padding:28px;color:#d4d4d8;font-size:15px;line-height:1.6">
      ${inner}
    </div>
    <div style="padding:18px 28px;border-top:1px solid #26262c;color:#71717a;font-size:12px">
      Para Suhu Digital · Divisi Hitam · <a href="${SITE}" style="color:#FF5C72;text-decoration:none">${SITE.replace(/^https?:\/\//, "")}</a>
    </div>
  </div>
</div>`;

export function welcomeEmail(name?: string): string {
  const hi = name ? `Halo ${name},` : "Halo,";
  return shell(`
    <h1 style="margin:0 0 14px;font-size:22px;color:#fff">Akun kamu aktif ✅</h1>
    <p style="margin:0 0 14px">${hi}</p>
    <p style="margin:0 0 14px">Akun <strong style="color:#fff">Para Suhu Hitam</strong> kamu udah aktif dan siap dipakai. Sekarang kamu bisa order aged domain, paket SEO/ads/backlink, dan pantau progress project langsung dari dashboard.</p>
    <p style="margin:22px 0">
      <a href="${SITE}/dashboard" style="display:inline-block;background:#FF2D4A;color:#fff;text-decoration:none;font-weight:600;padding:12px 22px;border-radius:999px">Buka Dashboard</a>
    </p>
    <p style="margin:0;color:#a1a1aa;font-size:13px">Butuh bantuan? Bales aja email ini atau chat tim kami via WhatsApp di situs.</p>
  `);
}
