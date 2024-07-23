# Proyek Dashboard NextJS

Proyek ini adalah demonstrasi aplikasi Next.js sederhana dengan fokus pada komponen UI dan struktur.

## Daftar Isi

- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Komponen](#komponen)
- [Lisensi](#lisensi)

## Instalasi

1. Clone repositori:

   ```sh
   git clone https://github.com/devnolife/next-dashboard-template.git
   cd next-dashboard-template
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Jalankan server pengembangan:

   ```sh
   npm run dev
   ```

## Penggunaan

Untuk melihat aplikasi, buka browser Anda dan pergi ke `http://localhost:3000`.

## Komponen

### Komponen Page

Ini adalah komponen halaman utama dari aplikasi. Komponen ini mencakup pesan selamat datang, tautan ke Kursus Belajar Next.js, dan tombol login. Tata letak menyesuaikan untuk berbagai ukuran layar, dengan tata letak kolom untuk layar kecil dan tata letak baris untuk layar lebih besar.

### Komponen AcmeLogo

Komponen ini menampilkan logo untuk Acme. Ini menggunakan font `Lusitana` dan mencakup ikon dari perpustakaan Heroicons.

### Komponen Breadcrumbs

Komponen ini menampilkan navigasi breadcrumb. Ini mengambil array objek breadcrumb dan menampilkannya sebagai jalur navigasi yang dapat diklik, menunjukkan halaman saat ini.

### Komponen NavLinks

Komponen ini menampilkan tautan navigasi untuk bilah navigasi samping. Ini menggunakan ikon dari perpustakaan Heroicons dan mendukung tautan dinamis, yang dapat diperluas sesuai kebutuhan.

### Komponen SideNav

Komponen ini mewakili bilah navigasi samping. Ini mencakup logo Acme, tautan navigasi, dan tombol logout.

### Komponen Invoice

Komponen-komponen ini (`CreateInvoice`, `UpdateInvoice`, `DeleteInvoice`, dan `InvoicesTable`) mengelola fungsionalitas terkait faktur seperti membuat, memperbarui, dan menghapus faktur, serta menampilkan daftar faktur. Mereka mencakup berbagai elemen UI seperti tombol, ikon, dan formulir.

### Komponen InvoiceStatus

Komponen ini menampilkan status faktur, seperti 'pending' atau 'paid', dengan ikon dan warna yang sesuai untuk setiap status.

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Lihat file [LICENSE](LICENSE) untuk informasi lebih lanjut.

---

Dengan penjelasan di atas, Anda dapat memahami struktur dan fungsionalitas dari berbagai komponen yang ada di proyek ini.
