# 📒 My Personal Notes App

Proyek akhir dari kelas **Belajar Membuat Aplikasi Web dengan React** di Dicoding.  
Aplikasi ini memungkinkan pengguna untuk membuat, menghapus, mengarsipkan, dan mencari catatan pribadi dengan antarmuka sederhana dan interaktif.

## 🚀 Fitur Utama
- Menambahkan catatan baru dengan judul dan isi.
- Batas judul maksimal **50 karakter** dengan indikator sisa karakter.
- Validasi isi catatan minimal **10 karakter**.
- Menghapus catatan.
- Mengarsipkan dan mengembalikan catatan dari arsip.
- Pencarian catatan berdasarkan judul atau isi (case-insensitive).
- Pemisahan daftar catatan aktif dan arsip.
- Pengelompokan catatan berdasarkan bulan-tahun pembuatan.
- Tampilan tanggal catatan menggunakan utilitas `showFormattedDate`.

## 🛠️ Teknologi yang Digunakan
- **React** (Class Component, State, Props, Event Handling)
- **Vite** sebagai bundler dan dev server
- **JavaScript (ES6+)**
- **CSS** untuk styling
- Utility functions dari Dicoding starter project (`getInitialData`, `showFormattedDate`)

## 📂 Struktur Folder
src/
├── components/
│   ├── App.jsx
│   ├── NoteInput.jsx
│   ├── NotesList.jsx
│   ├── NoteItem.jsx
│   └── NoteActionButton.jsx
├── utils/
│   ├── index.js
│   └── data.js
├── styles/
│   └── style.css
└── main.jsx

## ▶️ Cara Menjalankan
1. Clone repository ini:
   ```bash
   git clone https://github.com/MilQ28/Dicoding-Fullstack
2. Masuk ke folder proyek:
   ```bash
   cd Dicoding-Fullstack
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Jalankan aplikasi:
   ```bash
   npm run dev
   ```
5. Buka browser di alamat yang muncul (biasanya `http://localhost:5173`).

## 📌 Catatan
- Proyek ini dibuat untuk memenuhi submission akhir kelas Dicoding.  
- Reviewer akan menilai berdasarkan rubrik **Mastery-Based Grading**.  
- Pastikan semua fitur berjalan sesuai instruksi sebelum submit.

## 🌐 Deployment (Opsional)
Kamu bisa mempublikasikan proyek ini ke platform seperti:
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

Langkah umum:
```bash
npm run build
```
Lalu unggah folder `dist/` ke platform pilihanmu.

## 👨‍💻 Kontributor
**Syamil Cholid Atsani**  
SMK Telkom Lampung — Rekayasa Perangkat Lunak  
📍 Lampung, Indonesia

> Dibuat dengan semangat belajar dan kreativitas untuk proyek akhir Dicoding.
