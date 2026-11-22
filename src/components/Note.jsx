"use client";

import "./note.css";
import Image from "next/image";
import bg from "../app/img/coc7.jpeg";

export default function Note() {
  return (
    <article className="artcNote">
      <section className="section1">
        {/* Cara Penggunaan */}
        <details className="usageNote">
          <summary>Cara menggunakan QR Code Generator</summary>
          <div className="usageNoteContent">
            <ol>
              <li>
                <strong>Masukkan URL atau teks</strong> pada kolom tujuan. QR
                Code akan dibuat secara otomatis.
              </li>
              <li>
                <strong>Atur tampilan kartu:</strong> pilih gambar latar dan
                logo opsional, lalu tentukan orientasi portrait atau landscape.
              </li>
              <li>
                <strong>Pilih mode hasil.</strong> Gunakan Card untuk membuat
                kartu atau QR Only untuk mengunduh QR Code saja.
              </li>
              <li>
                <strong>Sesuaikan ukuran QR Code</strong> dengan slider. Dalam
                mode Card, seret QR pada pratinjau untuk mengubah posisinya.
              </li>
              <li>
                <strong>Unduh hasil</strong> sebagai PNG menggunakan tombol
                Download. Gunakan Reset Configuration untuk memulai kembali.
              </li>
            </ol>
          </div>
        </details>

        {/* Fitur Website */}
        <details className="usageNote">
          <summary>Fitur QR Code Generator</summary>
          <div className="usageNoteContent">
            <ol>
              <li>
                <strong>Generate QR Code:</strong> membuat QR Code dari URL
                maupun teks secara otomatis.
              </li>
              <li>
                <strong>Custom Background:</strong> menggunakan gambar sendiri
                sebagai latar belakang kartu.
              </li>
              <li>
                <strong>Custom Logo:</strong> menambahkan logo pada bagian
                tengah QR Code.
              </li>
              <li>
                <strong>Card Orientation:</strong> memilih orientasi portrait
                atau landscape.
              </li>
              <li>
                <strong>QR Position:</strong> mengatur posisi QR Code pada area
                pratinjau.
              </li>
              <li>
                <strong>QR Only Mode:</strong> menghasilkan QR Code tanpa gambar
                latar kartu.
              </li>
              <li>
                <strong>PNG Download:</strong> menyimpan hasil desain dalam
                format gambar PNG.
              </li>
            </ol>
          </div>
        </details>

        {/* Tips */}
        <details className="usageNote">
          <summary>Tips menggunakan QR Code</summary>
          <div className="usageNoteContent">
            <ol>
              <li>Gunakan URL yang benar dan dapat diakses.</li>
              <li>
                Pastikan warna QR Code memiliki kontras yang cukup dengan latar
                belakang.
              </li>
              <li>
                Hindari menutupi terlalu banyak bagian QR Code menggunakan logo.
              </li>
              <li>
                Gunakan gambar dengan resolusi yang baik agar hasil kartu
                terlihat lebih jelas.
              </li>
              <li>
                Selalu lakukan pengujian dengan memindai QR Code sebelum
                membagikannya.
              </li>
            </ol>
          </div>
        </details>

        {/* Informasi Download */}
        <details className="usageNote">
          <summary>Informasi hasil unduhan</summary>
          <div className="usageNoteContent">
            <p>
              QR Code Generator menyediakan hasil unduhan dalam format PNG
              (Portable Network Graphics).
            </p>
            <ol>
              <li>
                <strong>Card Mode:</strong> mengunduh hasil desain kartu lengkap
                dengan background dan QR Code.
              </li>
              <li>
                <strong>QR Only:</strong> mengunduh QR Code saja tanpa
                background kartu.
              </li>
            </ol>
            <p>
              Format PNG mendukung kualitas gambar yang baik dan background
              transparan jika hasil dibuat tanpa background.
            </p>
          </div>
        </details>

        {/* Troubleshooting */}
        <details className="usageNote">
          <summary>Masalah dan solusi</summary>
          <div className="usageNoteContent">
            <ol>
              <li>
                <strong>QR Code tidak muncul:</strong> periksa kembali teks atau
                URL yang dimasukkan.
              </li>
              <li>
                <strong>QR Code sulit dipindai:</strong> tingkatkan kontras
                warna dan hindari penggunaan logo yang terlalu besar.
              </li>
              <li>
                <strong>Gambar tidak muncul:</strong> pastikan file gambar
                memiliki format yang didukung browser.
              </li>
              <li>
                <strong>Hasil unduhan tidak sesuai:</strong> periksa kembali
                mode, ukuran, posisi, dan konfigurasi desain sebelum mengunduh.
              </li>
            </ol>
          </div>
        </details>

        {/* Teknologi */}
        <details className="usageNote">
          <summary>Teknologi yang digunakan</summary>
          <div className="usageNoteContent">
            <ol>
              <li>
                <strong>HTML:</strong> menyusun struktur halaman website.
              </li>
              <li>
                <strong>CSS:</strong> mengatur tampilan dan desain antarmuka.
              </li>
              <li>
                <strong>JavaScript:</strong> menjalankan logika dan interaksi
                aplikasi.
              </li>
              <li>
                <strong>React JS:</strong> membangun antarmuka menggunakan
                komponen.
              </li>
              <li>
                <strong>Canvas API:</strong> menggambar dan menggabungkan elemen
                gambar untuk menghasilkan desain kartu.
              </li>
            </ol>
          </div>
        </details>

        {/* Developer */}
        <details className="usageNote">
          <summary>Developer Website</summary>
          <div className="usageNoteContent">
            <p>
              Website ini dibuat oleh Ardeva Alghifari, siswa SMK Geo
              Informatika, jurusan Teknik Komputer dan Jaringan (TKJ).
            </p>
            <p>
              QR Code Generator merupakan proyek pengembangan website yang
              dibuat untuk mempermudah pengguna dalam membuat, menyesuaikan, dan
              mengunduh QR Code sesuai kebutuhan.
            </p>
          </div>
        </details>

        {/* Informasi Tambahan */}
        <details className="usageNote">
          <summary>Catatan dan informasi tambahan</summary>
          <div className="usageNoteContent">
            <ol>
              <li>
                Pastikan QR Code telah diuji sebelum digunakan untuk keperluan
                publikasi atau pencetakan.
              </li>
              <li>
                Hasil QR Code bergantung pada data yang dimasukkan oleh
                pengguna.
              </li>
              <li>
                Simpan hasil unduhan di tempat yang aman agar mudah ditemukan
                kembali.
              </li>
              <li>
                Pastikan perangkat memiliki browser yang mendukung fitur Canvas
                untuk menghasilkan gambar.
              </li>
            </ol>
          </div>
        </details>
      </section>
      <form action="">
        <Image className="artcNoteBg" src={bg} alt="background" />
        <h3>Masukan Saran Anda:</h3>
        <input type="text" placeholder="Masukan Nama anda" />
        <input type="text" placeholder="masukan saran anda" />
        <button>Kirim Pesan</button>
      </form>
    </article>
  );
}
