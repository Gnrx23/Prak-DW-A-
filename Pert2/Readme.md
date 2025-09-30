# Panduan Cara Kerja HTML Website


## Langkah-Langkah Praktikum (Live Coding Session)

Sebelum Melakukan Kodingan nya Harus Install Extension **Live Server** Di Vs Code Terlebih dahulu (**Penting**)

### Langkah 1 Membangun Formulir Cerdas (form)
Kita Melakukan Buat formulir yang "pintar" berkat HTML5. Tambahkan kode berikut di dalam <body>.

```bash
<h1>Formulir Pengiriman Resep Baru</h1>
<form action="/submit-recipe" method="post">
    <fieldset>
        <legend>Informasi Dasar Resep</legend>

        <p>
            <label for="recipe-name">Nama Resep:</label><br>
            <input type="text" id="recipe-name" name="recipe_name" required maxlength="80">
        </p>
        <p>
            <label for="prep-time">Waktu Persiapan (menit):</label><br>
            <input type="number" id="prep-time" name="prep_time" min="5" placeholder="Contoh: 45">
        </p>
    </fieldset>

    <fieldset>
        <legend>Detail Tambahan</legend>
        <p>
            <label for="difficulty">Tingkat Kesulitan (1-5):</label><br>
            <input type="range" id="difficulty" name="difficulty" min="1" max="5" step="1">
        </p>
        <p>
            <label for="recipe-category">Kategori Resep:</label><br>
            <input list="categories" id="recipe-category" name="recipe_category">
            <datalist id="categories">
                <option value="Makanan Pembuka"></option>
                <option value="Makanan Utama"></option>
                <option value="Hidangan Penutup"></option>
                <option value="Minuman"></option>
            </datalist>
        </p>
    </fieldset>

    <button type="submit">Kirim Resep</button>
</form>
```

Keterangan 
- <fieldset> & <legend>: Tag semantik untuk mengelompokkan input yang saling berhubungan. Ini sangat baik untuk aksesibilitas.
- Validasi Bawaan: Coba biarkan "Nama Resep" kosong lalu klik "Kirim". Browser akan menampilkan pesan error secara otomatis berkat atribut required. Coba masukkan angka 3 di "Waktu Persiapan", browser juga akan memberi peringatan karena ada atribut min="5".
- UI Bawaan: Perhatikan bagaimana type="range" langsung menghasilkan slider yang fungsional. datalist memberikan fitur autocomplete tanpa JavaScript. Ini adalah interaktivitas gratis dari browser.


### Langkah 2 : Membangun Area Pratinjau Semantik (article)

lalu  di bawah tag </form>, mari kita buat struktur untuk menampilkan resepnya nanti.
Seperti ini

```bash

<hr>
<h2>Pratinjau Halaman Resep</h2>

<article>
    <header>
        <h1>Judul Resep Akan Muncul Di Sini</h1>
        <p>Waktu persiapan: <time datetime="PT45M">45 menit</time></p>
    </header>

    <figure>
        <img src="placeholder.jpg" alt="Gambar hidangan utama resep" width="600">
        <figcaption>Deskripsi singkat atau caption untuk gambar.</figcaption>
    </figure>

    <p>
        Deskripsi lengkap tentang resep akan ada di sini. Bahan rahasia kami adalah 
        <mark>bumbu spesial</mark> yang membuat semuanya lezat.
    </p>

    <details>
        <summary>Tampilkan Informasi Gizi</summary>
        <ul>
            <li>Kalori: 350kcal</li>
            <li>Protein: 20g</li>
            <li>Karbohidrat: 30g</li>
        </ul>
    </details>

    <h3>Video Tutorial</h3>
    <video controls width="600">
        <source src="video.mp4" type="video/mp4">
        Maaf, browser Anda tidak mendukung pemutaran video.
        <track
            label="Bahasa Indonesia"
            kind="subtitles"
            srclang="id"
            src="subtitles.vtt"
            default>
    </video>

    <footer>
        <p>Tingkat Kesulitan: <meter min="0" max="5" value="3" title="3 dari 5">Sedang</meter></p>
    </footer>

</article>

```

Keterangan :
- <article> dan <header> di dalamnya: <article> adalah untuk konten mandiri. Sebuah <article> bisa memiliki <header> dan <footer>-nya sendiri, yang berbeda dari <header> dan <footer> utama halaman.
- <time datetime="PT45M">: Atribut datetime memberikan informasi yang dapat dibaca mesin. PT45M adalah format standar ISO 8601 untuk durasi "Period of Time, 45 Minutes". Ini sangat berguna untuk SEO dan mesin penjadwal. (Poin untuk membaca dokumentasi!)
- <details> & <summary>: Klik teks "Tampilkan Informasi Gizi". Perhatikan bagaimana kontennya muncul dan tersembunyi. Ini adalah widget accordion yang dibuat murni dengan HTML, memberikan interaktivitas tanpa kode tambahan.
- <video>, <source>, <track>: Anda membuat pemutar video yang lengkap dan aksesibel. Tag <track> adalah kunci untuk menyediakan subtitle bagi pengguna dengan gangguan pendengaran. (Poin untuk membaca dokumentasi tentang format file .vtt!)
- <meter>: Ini bukan sekadar teks. Secara semantik, ini memberitahu browser dan teknologi bantu bahwa "3" adalah sebuah nilai dalam rentang 0 hingga 5. Ini jauh lebih bermakna daripada sekadar <p>3/5</p>.

### Langkah 3 Membuat Subtitle untuk Di Video 

- Lengkapi seluruh kode di atas dalam satu file yang kalian buat
- Buat sebuah file gambar placeholder (placeholder.jpg) dan letakkan di folder yang sama.
-  Buat file subtitles.vtt sederhana. Isinya bisa sesederhana ini
  ``` bash
WEBVTT
00:01.000 --> 00:05.000
Halo, selamat datang di tutorial memasak kami.

00:06.000 --> 00:09.000
Hari ini kita akan membuat resep yang luar biasa.
```
- Lalu Jalankan Website nya


### Contoh Kodingan saya

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Formulir Pengiriman Resep Baru</h1>
<form action="/submit-recipe" method="post">
    <fieldset>
        <legend>Informasi Dasar Resep</legend>

        <p>
            <label for="recipe-name">Nama Resep:</label><br>
            <input type="text" id="recipe-name" name="recipe_name" required maxlength="80">
        </p>
        <p>
            <label for="prep-time">Waktu Persiapan (menit):</label><br>
            <input type="number" id="prep-time" name="prep_time" min="5" placeholder="Contoh: 45">
        </p>
    </fieldset>

    <fieldset>
        <legend>Detail Tambahan</legend>
        <p>
            <label for="difficulty">Tingkat Kesulitan (1-5):</label><br>
            <input type="range" id="difficulty" name="difficulty" min="1" max="5" step="1">
        </p>
        <p>
            <label for="recipe-category">Kategori Resep:</label><br>
            <input list="categories" id="recipe-category" name="recipe_category">
            <datalist id="categories">
                <option value="Makanan Pembuka"></option>
                <option value="Makanan Utama"></option>
                <option value="Hidangan Penutup"></option>
                <option value="Minuman"></option>
            </datalist>
        </p>
    </fieldset>

    <button type="submit">Kirim Resep</button>
</form>
    <hr>
<h2>Pratinjau Halaman Resep</h2>

<article>
    <header>
        <h1>Judul Resep Akan Muncul Di Sini</h1>
        <p>Waktu persiapan: <time datetime="PT45M">45 menit</time></p>
    </header>

    <figure>
        <img src="Nasi Goreng.jpg" alt="Gambar hidangan utama resep" width="600">
        <figcaption>Deskripsi singkat atau caption untuk gambar.</figcaption>
    </figure>

    <p>
        Deskripsi lengkap tentang resep akan ada di sini. Bahan rahasia kami adalah 
        <mark>bumbu spesial</mark> yang membuat semuanya lezat.
    </p>

    <details>
        <summary>Tampilkan Informasi Gizi</summary>
        <ul>
            <li>Kalori: 350kcal</li>
            <li>Protein: 20g</li>
            <li>Karbohidrat: 30g</li>
        </ul>
    </details>

    <h3>Video Tutorial</h3>
    <video controls width="600">
        <source src="well well well.mp4" type="video/mp4">
        Maaf, browser Anda tidak mendukung pemutaran video.
        <track
            label="Bahasa Indonesia"
            kind="subtitles"
            srclang="id"
            src="subtitles.vtt"
            default>
    </video>

    <footer>
        <p>Tingkat Kesulitan: <meter min="0" max="5" value="3" title="3 dari 5">Sedang</meter></p>
    </footer>

</article>
</body>
</html>
```
