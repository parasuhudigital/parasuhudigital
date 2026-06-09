# Para Suhu Hitam — `hitam.parasuhudigital.com`

E-commerce + client portal untuk divisi **black-hat** Para Suhu Digital.
Self-contained Next.js 14 app, dideploy terpisah dari situs utama
(`parasuhudigital.com`) sebagai project Vercel sendiri dengan **Root Directory = `hitam`**.

## Fitur

- **Marketplace Aged Domain** — listing dengan metrik (DA/DR/TF/CF/spam), filter, sort, detail page, checkout.
- **5 halaman jasa** — Hunting Aged Domain, Black Hat SEO, Black Hat Ads, Jasa Backlink, Landing Page AMP (paket + harga + FAQ).
- **Auth** (Supabase) — signup/login, dashboard klien.
- **Dashboard klien** — daftar order + progress project dengan timeline milestone.
- **Admin panel** (role `admin`) — kelola inventory aged domain, update status order, buat & update project + milestone.
- **Checkout via WhatsApp** — order disimpan ke DB, lalu handoff ke WhatsApp (tanpa payment gateway).
- WhatsApp floating widget + social-proof popup (kiri bawah).

## Stack

Next.js 14 (App Router) · Tailwind · Framer Motion · Supabase (Postgres + Auth + RLS).
Bahasa: Indonesia. Tema gelap dengan aksen merah-darah (`hitam`).

## Setup lokal

```bash
cd hitam
cp .env.local.example .env.local   # isi nilainya (lihat di bawah)
npm install
npm run db:apply                   # apply schema + seed ke Supabase
npm run dev                        # http://localhost:3001
```

### Environment (`.env.local`)

| Variable | Keterangan |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | anon public key |
| `SUPABASE_SERVICE_ROLE_KEY` | server-only (reserve domain saat checkout) |
| `SUPABASE_DB_URL` | connection string **pooler** (IPv4), dipakai script DB saja |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | nomor WA tujuan (mis. `628214982408`) |
| `NEXT_PUBLIC_SITE_URL` | `https://hitam.parasuhudigital.com` |

> ⚠️ `.env.local` tidak pernah di-commit (di-ignore). Karena key sempat dibagikan
> dalam bentuk teks, **rotate** semua key di Supabase setelah live.

## Database

Project Supabase ini **dipakai bareng** app lain, jadi semua tabel di sini
diberi prefix `hitam_` agar tidak bentrok: `hitam_profiles`, `hitam_aged_domains`,
`hitam_orders`, `hitam_order_items`, `hitam_projects`, `hitam_project_milestones`.
Tabel legacy `public.profiles` / `public.projects` tidak disentuh.

Skema lengkap + RLS + seed ada di `supabase/schema.sql` & `supabase/seed.sql`.

```bash
npm run db:apply                    # apply schema + seed (+ reload PostgREST cache)
npm run db:test                     # integration test (signup → order → RLS)
npm run db:make-admin -- you@x.com  # jadikan akun admin (signup dulu)
```

Atau paste isi `supabase/schema.sql` lalu `supabase/seed.sql` di **Supabase → SQL Editor**.

### Jadi admin

1. Signup di `/signup`.
2. `npm run db:make-admin -- email-kamu@example.com` (atau jalankan SQL di komentar bawah `schema.sql`).
3. Menu **Admin** muncul di header & dashboard.

## Deploy ke Vercel

1. Push repo ke GitHub.
2. Vercel → **Add New → Project** → import repo.
3. **Root Directory: `hitam`** · Framework: Next.js (auto).
4. Tambahkan semua Environment Variables di atas.
5. Deploy. Lalu **Settings → Domains** → tambahkan `hitam.parasuhudigital.com` dan set DNS `CNAME` ke `cname.vercel-dns.com` di Hostinger.
6. **Supabase → Authentication → URL Configuration**: set Site URL ke `https://hitam.parasuhudigital.com` dan tambahkan `https://hitam.parasuhudigital.com/auth/callback` ke Redirect URLs. (Untuk onboarding paling cepat, matikan "Confirm email" di Auth → Providers → Email.)

## Konten

Copy marketing & seed data digenerate ke `src/lib/catalog.ts`, `src/lib/proof.ts`,
`supabase/seed.sql` via `scripts/gen-content.mjs` (sumber data sudah tertanam,
tidak perlu dijalankan ulang kecuali mau regenerate).
