import "./note.css";

export default function Note() {
  return (
    <details className="usageNote">
      <summary>Cara menggunakan QR Code Generator</summary>
      <div className="usageNoteContent">
        <ol>
          <li>
            <strong>Masukkan URL atau teks</strong> pada kolom tujuan. QR Code
 akan dibuat otomatis.
          </li>
          <li>
            <strong>Atur tampilan kartu:</strong> pilih gambar latar dan logo
            opsional, lalu tentukan orientasi portrait atau landscape.
          </li>
          <li>
            <strong>Pilih mode hasil.</strong> Gunakan Card untuk membuat kartu
            atau QR Only untuk mengunduh QR Code saja.
          </li>
          <li>
            <strong>Sesuaikan ukuran QR Code</strong> dengan slider. Dalam mode
            Card, seret QR pada pratinjau untuk mengubah posisinya.
          </li>
          <li>
            <strong>Unduh hasil</strong> sebagai PNG menggunakan tombol
            Download. Gunakan Reset Configuration untuk memulai kembali.
          </li>
        </ol>
      </div>
    </details>
  );
}
