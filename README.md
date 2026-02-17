# ANON-FILE - Interactive Web Application

ANON-FILE adalah platform aplikasi web ringan yang dirancang untuk demonstrasi sistem autentikasi sisi klien (client-side) yang interaktif, responsif, dan modular. Proyek ini dibangun menggunakan **Pure HTML, CSS, dan Modern JavaScript (ES Modules)** tanpa bergantung pada framework berat.

## 🚀 Fitur Utama

- **Custom Authentication Logic**: Sistem login tanpa database menggunakan `LocalStorage` untuk menjaga data user tetap ada setelah halaman dimuat ulang.
- **Dynamic Avatar Generation**: Integrasi dengan API DiceBear untuk menghasilkan avatar unik secara otomatis berdasarkan username.
- **Modular Architecture**: Kode JavaScript dipisah menjadi beberapa modul (`Storage`, `UI`, `Utils`) untuk memudahkan pemeliharaan dan skalabilitas.
- **Responsive Dashboard**: Antarmuka yang adaptif untuk perangkat mobile maupun desktop menggunakan CSS Grid dan Flexbox.
- **Login History**: Melacak dan menampilkan riwayat login terakhir secara real-time.
- **Custom Notifications**: Sistem popup notifikasi yang halus untuk memberikan feedback kepada pengguna.

## 📁 Struktur Folder

Proyek ini menggunakan struktur folder yang rapi sesuai standar industri:

├── index.html # Halaman Login
├── home.html # Dashboard Utama
├── style.css # Styling Halaman Login
├── home.css # Styling Halaman Dashboard
├── user-index.js # Main Entry Point (Main Controller)
└── js/ # Folder Modul JavaScript
├── storage.js # Logika Data & LocalStorage
├── ui.js # Manipulasi DOM & Rendering Tampilan
└── utils.js # Fungsi Bantuan (ID Generator, Notif, dll)

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantik yang ramah SEO.
- **CSS3**: Desain modern dengan CSS Grid, Flexbox, dan transisi halus.
- **JavaScript (ES6+)**: Menggunakan ES Modules (`import/export`) untuk manajemen kode yang lebih bersih.
- **DiceBear API**: Library eksternal untuk pembuatan avatar dinamis.

## 💻 Cara Menjalankan Proyek

1. Clone atau download repositori ini.
2. Karena menggunakan **JavaScript Modules**, proyek ini harus dijalankan melalui server (seperti **Live Server** di VS Code) dan tidak bisa dibuka langsung sebagai file statis (`file://`).
3. Buka `index.html` di browser Anda melalui server lokal tersebut.

---

_Dikembangkan dengan dedikasi untuk performa dan struktur kode yang bersih._
