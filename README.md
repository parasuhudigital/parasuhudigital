# Para Suhu Digital — Website

> Suhu-nya Digital Marketing Indonesia.
> Next.js 14 + Tailwind + Framer Motion.

---

## 🚀 STEP-BY-STEP SETUP & DEPLOY

Ikutin urutan ini, jangan diskip. Total waktu: **~30-45 menit**.

### ✅ Pre-requisites (yang lo udah punya)

- [x] Akun GitHub
- [x] Akun Vercel
- [x] VPS Hostinger (buat Payload CMS nanti)
- [x] VS Code

### ⚠️ Yang perlu di-install di laptop lo

- **Node.js v20 LTS atau lebih baru** → download di https://nodejs.org
  - Cara cek udah install belum: buka terminal/CMD, ketik `node -v`
  - Kalau muncul versi (misal `v20.11.0`), berarti udah ke-install
- **Git** → biasanya udah ada di Mac/Linux. Untuk Windows download di https://git-scm.com

---

## 📁 STEP 1: Setup Project di Laptop Lo

### 1.1 Buat folder project

**Mac/Linux:**
```bash
mkdir ~/parasuhudigital
cd ~/parasuhudigital
```

**Windows (PowerShell):**
```powershell
mkdir C:\parasuhudigital
cd C:\parasuhudigital
```

### 1.2 Copy semua file dari Claude

Lo bakal dapet file ZIP dari gua. Extract semua isinya ke folder yang baru lo bikin.

### 1.3 Install dependencies

Di terminal (yang udah pindah ke folder project), jalanin:

```bash
npm install
```

Tunggu 1-3 menit (tergantung internet). Selesai kalau gak ada error merah.

### 1.4 Test di localhost

```bash
npm run dev
```

Buka browser, akses: **http://localhost:3000**

Kalo website muncul → **MANTAP! Project lo udah jalan di laptop.**

Kalo ada error → screenshot, paste ke gua, gua debugin.

Tekan **Ctrl+C** di terminal buat stop server.

---

## 🐙 STEP 2: Push ke GitHub

### 2.1 Bikin repository di GitHub

1. Login ke https://github.com
2. Klik tombol **"+"** di kanan atas → **"New repository"**
3. Repository name: `parasuhudigital`
4. Set: **Private** (recommended)
5. **JANGAN** centang "Initialize with README"
6. Klik **"Create repository"**

GitHub bakal kasih lo URL kayak gini:
`https://github.com/[username]/parasuhudigital.git`

**Copy URL itu, simpen.**

### 2.2 Push code ke GitHub

Di terminal (masih di folder project):

```bash
git init
git add .
git commit -m "Initial commit: Para Suhu Digital homepage"
git branch -M main
git remote add origin https://github.com/[USERNAME-LO]/parasuhudigital.git
git push -u origin main
```

⚠️ **Ganti `[USERNAME-LO]`** dengan username GitHub lo!

Kalo diminta login GitHub: ikutin instruksinya (biasanya pop-up browser).

Selesai? Cek repository di GitHub, harusnya semua file udah keupload.

---

## ▲ STEP 3: Deploy ke Vercel

### 3.1 Import project

1. Login ke https://vercel.com
2. Di dashboard, klik **"Add New..."** → **"Project"**
3. Klik **"Import"** di sebelah repo `parasuhudigital`
   - Kalo repo belum muncul, klik **"Adjust GitHub App Permissions"** dan kasih akses
4. Di halaman config:
   - **Framework Preset**: Next.js (auto-detect)
   - **Root Directory**: ./ (biarkan default)
   - **Build Command**: `npm run build` (default)
   - **Environment Variables**: skip dulu
5. Klik **"Deploy"**

Tunggu **2-3 menit**. Selesai? Vercel kasih URL kayak:
`https://parasuhudigital.vercel.app`

**Klik URL itu — website lo udah LIVE!** 🎉

---

## 🌐 STEP 4: Point Domain Hostinger ke Vercel

### 4.1 Tambahkan domain di Vercel

1. Di Vercel dashboard → buka project `parasuhudigital`
2. Klik **"Settings"** → **"Domains"**
3. Ketik: `parasuhudigital.com` → klik **"Add"**
4. Vercel kasih lo DNS records yang harus di-set di Hostinger:
   - Biasanya: tipe `A` dengan value `76.76.21.21`
   - Atau: tipe `CNAME` dengan value `cname.vercel-dns.com`
5. **Tahan halaman ini, jangan ditutup.**

### 4.2 Setting DNS di Hostinger

1. Login ke https://hpanel.hostinger.com
2. Pilih **"Domains"** → klik `parasuhudigital.com`
3. Cari menu **"DNS / Nameservers"** atau **"DNS Zone Editor"**
4. **HAPUS** record `A` lama yang point ke shared hosting Hostinger
5. **TAMBAHKAN** record sesuai instruksi Vercel di step 4.1
   - Type: `A`
   - Name: `@` (atau kosong)
   - Points to: `76.76.21.21`
   - TTL: default
6. **Tambahkan juga** untuk www:
   - Type: `CNAME`
   - Name: `www`
   - Points to: `cname.vercel-dns.com`
   - TTL: default

### 4.3 Tunggu propagasi

DNS butuh waktu **5 menit - 24 jam** buat propagasi (biasanya cepet, 15-30 menit).

Cek status di Vercel dashboard → Domains. Kalo udah ✅ hijau berarti domain udah aktif.

**Coba akses https://parasuhudigital.com — website lo udah live di domain asli!** 🚀

### 4.4 ⚠️ PENTING: Email tetap di Hostinger

Karena email `info@parasuhudigital.com` lo di Hostinger, **jangan ganti MX records.**

Kalo Hostinger udah punya MX records untuk email (biasanya otomatis), **biarkan**. Kita cuma ganti A record untuk web traffic, MX record (email) tetap.

---

## 🎉 SELESAI!

Setelah semua step di atas, lo punya:
- ✅ Website live di `parasuhudigital.com`
- ✅ Code disimpan di GitHub
- ✅ Auto-deploy: tiap lo push code baru ke GitHub, Vercel auto-rebuild & deploy

---

## 🔄 CARA UPDATE WEBSITE NANTI

Tiap mau update konten/design:

1. Edit file di VS Code
2. Di terminal:
```bash
git add .
git commit -m "Update: [deskripsi singkat]"
git push
```
3. Tunggu 1-2 menit, Vercel otomatis rebuild & deploy.

---

## 📞 KALO ADA ERROR

Paste error message lo ke Claude. Gua debugin.

---

## 🗺️ ROADMAP SETELAH HOMEPAGE LIVE

Phase 2 (week 1-2):
- [ ] Halaman About
- [ ] Halaman Contact (dengan form working)
- [ ] 9 halaman Suhu Services
- [ ] Halaman Portfolio
- [ ] Halaman Blog (list + single)

Phase 3 (week 3):
- [ ] Setup Payload CMS di VPS Hostinger
- [ ] Bilingual ID/EN setup
- [ ] Landing pages per niche

Phase 4 (week 4):
- [ ] SEO optimization
- [ ] Sitemap, robots.txt
- [ ] Google Analytics + Search Console
- [ ] Launch & promote

---

**Made with ∞ in Jakarta — Para Suhu Digital © 2026**
