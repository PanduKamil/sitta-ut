# SITTA - Tugas Praktik 1 (STSI4209 Pemrograman Berbasis Web)

Aplikasi front-end sederhana untuk pemesanan dan distribusi bahan ajar
Universitas Terbuka, dibuat dengan HTML, CSS, dan JavaScript DOM tanpa back-end.
Data berasal dari file dummy `js/data.js`.

## Halaman dan fitur

| Halaman | Fitur |
|---|---|
| `index.html` | Login dengan validasi form, alert jika email/password salah, modal Lupa Password dan Daftar |
| `dashboard.html` | Greeting sesuai jam lokal, menu navigasi dengan dropdown Laporan, modal Monitoring Progress DO, Rekap Bahan Ajar, dan Histori Transaksi |
| `stok.html` | Tabel stok bahan ajar dari `dataBahanAjar`, tambah baris stok lewat modal dengan validasi |
| `tracking.html` | Cari nomor Delivery Order, tampilkan nama, status, progress bar, detail pengiriman, dan timeline perjalanan paket |

## Struktur folder

```
sitta-praktik/
├── index.html
├── dashboard.html
├── stok.html
├── tracking.html
├── css/
│   └── style.css
├── js/
│   ├── data.js        (data dummy dari soal)
│   ├── script.js      (login, lupa password, daftar)
│   ├── dashboard.js
│   ├── stok.js
│   └── tracking.js
└── img/               (sampul bahan ajar)
```

## Cara menjalankan

Buka `index.html` di browser. Tidak perlu instalasi.

Akun uji: `rina@ut.ac.id` / `rina123`
Nomor DO uji: `2023001234` dan `2023005678`

## Teknik yang dipakai

- HTML semantik: `header`, `nav`, `main`, `section`, `form`, `label`, `table`, `dl`
- CSS external (`css/style.css`), internal (`<style>` di tracking), dan inline (lebar progress bar)
- JavaScript DOM: `getElementById`, `createElement`, `appendChild`, `classList`, `addEventListener`
- Validasi form dengan pesan error di bawah kolom, serta alert dan modal
- `sessionStorage` untuk membawa data login antar halaman

## Batasan

- Tanpa back-end, data pendaftaran dan stok baru hanya tersimpan di memori browser dan hilang saat halaman dimuat ulang.
- Pengecekan login hanya simulasi di sisi front-end, bukan pengamanan sungguhan.
- Fitur Lupa Password hanya simulasi (tidak ada pengiriman email).