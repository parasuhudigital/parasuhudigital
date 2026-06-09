# Screenshot bukti (proof)

Taruh file screenshot di subfolder sesuai layanan. Penamaan: `01.png`, `02.png`, …
(boleh `.jpg`). Galeri otomatis menampilkan yang ada dan menyembunyikan slot kosong.

| Folder | Isi | Maks |
|---|---|---|
| `black-hat-seo/` | Screenshot Google Search Console | 8 |
| `black-hat-ads/` | Screenshot Meta Ads Manager | 8 |
| `landing-page/` | Screenshot contoh landing page | 6 |

Setelah menaruh file, redeploy:

```
node hitam/scripts/deploy-vercel.mjs
```
