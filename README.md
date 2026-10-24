# UI & Design Showcase

Showcase **UI Kit & Design System** statis (HTML + CSS + JavaScript) yang menampilkan design tokens, komponen, mockup dashboard, dan mockup aplikasi mobile. Proyek ini murni front-end — **tanpa PHP dan tanpa database** — sehingga bisa dibuka langsung di browser atau diletakkan di web server mana pun.

## Live Preview (XAMPP)

```
http://localhost/My_Porto/UI%20&%20Design/
```

> Nama folder mengandung spasi dan `&`. Bila URL bermasalah, rename folder menjadi `ui-design` (tanpa spasi) agar lebih aman untuk portofolio/ deployment.

## Struktur

```
UI & Design/
├── index.html            # Halaman tunggal (one-page showcase)
├── README.md
└── assets/
    ├── css/style.css     # Design tokens + seluruh komponen kustom
    └── js/main.js        # AOS init, smooth scroll, chart bar, tahun footer
```

## Bagian Halaman

| Section | ID | Isi |
|---|---|---|
| Hero | `#hero` | Headline, CTA, floating preview card & mini stat card |
| Colors | `#colors` | Design tokens: Primary (indigo→sky), Accent (rose→orange), Success (emerald→cyan), Neutrals (Slate 50–900) |
| Typography | `#typography` | Skala tipe Outfit (display/heading), Inter (body), JetBrains Mono (code), daftar font weight |
| Components | `#components` | Buttons, Badges & Tags, Cards (stat + glassmorphism), Form Elements (input, select, switch, range), Alerts |
| Dashboard | `#dashboard` | Mockup panel admin: top bar, sidebar, 4 stat card, grafik batang, recent activity |
| Mobile | `#mobile` | 3 mockup phone: Login screen, Dashboard screen, Profile screen |

## Teknologi

- **Bootstrap 5.3** (CDN) — grid & utilities
- **Font Awesome 6.4** (CDN) — ikon
- **Google Fonts** — Outfit, Inter, JetBrains Mono
- **AOS 2.3.1** — animasi saat scroll
- **Chart batang dashboard** — CSS gradient + tinggi dari atribut `data-height`, di-set oleh `main.js`
- **CSS Custom Properties** — semua warna & gradient terpusat di `:root` (`style.css`)

## Aksesibilitas

- `skip-link` ("Lewati ke konten utama") untuk navigasi keyboard
- Setiap section memakai `aria-labelledby`, navigasi memakai `aria-label`
- Progress bar: `role="progressbar"` + `aria-valuenow/min/max`
- Toggle: `role="switch"` berpasangan dengan `<label for>`
- Grafik batang & mockup phone: `role="img"` + `aria-label` deskriptif
- Ikon dekoratif ditandai `aria-hidden="true"`
- Fokus keyboard terlihat jelas via `:focus-visible`
- Menghormati `@media (prefers-reduced-motion: reduce)`

## Menjalankan

Cukup buka `index.html` di browser, atau jalankan server statis:

```bash
# Dari direktori proyek
php -S localhost:8001
# lalu buka http://localhost:8001
```

## Catatan Perbaikan

Sebelumnya `index.html` berisi potongan kode PHP (`<?php ... ?>`, `<?= ... ?>`) padahal file ber-ekstensi `.html` **tidak diproses PHP oleh Apache** — akibatnya tag PHP terkirim mentah ke browser sehingga grafik batang kosong dan tahun footer hilang.

Perbaikan:
- Markup dikembalikan menjadi **HTML murni**; tinggi bar dipindah ke atribut `data-height` (diterapkan oleh JavaScript).
- Tahun footer diisi dinamis `new Date().getFullYear()` — tidak lagi bergantung pada PHP.
- Ditambahkan perbaikan aksesibilitas dan proteksi `prefers-reduced-motion`.
