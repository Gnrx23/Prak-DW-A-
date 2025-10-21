# Pertemuuan 4 

## Langkah-Langkah Menggunakan CSS Pada HTML untuk Memasukin Tampilan/Tema

Langkah 1: Fondasi & Global Styling

1. Membuat file **Style.css**
2. Masukan Kodingan Ini
   
```bash
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background-color: #f8f9fa;
  color: #212529;
}

/* Membuat kontainer utama untuk layout */
.main-container {
  max-width: 1200px;
  margin: 2rem auto; /* Memberi jarak atas/bawah dan menengahkan */
  padding: 1rem;
}
```
Fungsi Bungkus seluruh konten di dalam <body> Anda (mulai dari <h1>Formulir... hingga </article>) dengan sebuah<div> yang memiliki class="main-container".


 Langkah 2 Membangun Layout Utama dengan CSS Grid
BErtujuan Untuk membuat layout dua kolom di layar besar: formulir di kiri, pratinjau resep di kanan.

```bash
.main-container {
display: grid;
  grid-template-columns: 1fr; /* Default: 1 kolom untuk mobile */
  gap: 2rem; /* Jarak antar form dan pratinjau */
}
h1, h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

form, article {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```
mendefinisikan**main-container** sebagai grid container. Dengan grid-**template-columns: 1fr;**, kita memulai dengan layout satu kolom yang aman untuk mobile.

 Langkah 3: Menata <fieldset> dan Input di Dalamnya
Bertujuan  Untuk Merapihkan agar terstruktur

```bash
fieldset {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

legend {
  font-weight: bold;
  padding: 0 0.5rem;
}

form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

form input[type="text"],
form input[type="number"],

form input[list],
form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}
```

 Langkah 4 Mengimplementasi Desain Responsif (Media Queries)

mengubah layout menjadi dua kolom saat layar lebih besar. Tambahkan kode ini di bagian paling bawah **style.css.**

```bash
@media (min-width: 992px) {
  .main-container {
grid-template-columns: 1fr 1.5fr; 
  }
}
```

 Langkah 5 Polishing Tombol & Interaktivitas
Memberikan Sentuhan Akhir yang secara profesional

```bash
button {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #e67e22;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
button:hover {
  background-color: #d35400;
}
form input:focus, form textarea:focus {
  outline: none;
  border-color: #e67e22; /* Warna Aksen */
  box-shadow: 0 0 5px rgba(230, 126, 34, 0.5);
}

/* Styling tambahan untuk pratinjau */
article img, article video {
  max-width: 100%; /* Membuat gambar & video responsif */
  height: auto;
  border-radius: 4px;
}
```

# Pertemuan 5 

## Langkah Langkah Desain Fluid & Tipografi Responsif

Langkah 1 Memahami Unit Relatif (Fondasi Fluiditas)

1. **px** (Pixel): Unit absolut. **16px**akan selalu **16px**. Buruk untuk aksesibilitas dan fluiditas.
2. **rem** (Root EM): Unit relatif terhadap ukuran font root (elemen **<html>**). Ini adalah unit terbaik untuk aksesibilitas. Jika pengguna memperbesar font di browser mereka, semua elemen yang menggunakan
   **rem**akan ikut membesar.
3. **vw** (Viewport Width): 1vw = 1% dari lebar layar. Sangat fluid, tapi bisa berbahaya jika tidak dikontrol (teks bisa jadi terlalu kecil atau terlalu besar).

Mengubah **font-size** pada **body** anda
```bash
/* GANTI INI (jika ada): */
body {
  font-size: 16px; 
}

/* MENJADI INI: */
html {
  font-size: 100%; /* Setara dengan 16px default browser */
}

body {
  font-family: 'Segoe UI', ...;
  /* Gunakan rem untuk line-height agar proporsional */
  line-height: 1.6rem; 
  ...
}
```
**font-size: 100%** pada**html**, kita sekarang bisa menggunakan 1rem sebagai acuan untuk **16px**, **1.5rem** untuk **24px**, dst.



Langkah 2: Tipografi Fluid dengan clamp()
Ini adalah teknik utamanya. Fungsi clamp() "menjepit" sebuah nilai di antara batas minimum dan maksimum.

Sintaks: **clamp(MINIMUM, PREFERRED, MAXIMUM);**
1. **MINIMUM**: Ukuran terkecil yang diizinkan (misal: **1rem** atau **16px**).
2. PREFERRED: Ukuran ideal yang kita inginkan. Di sinilah kita menggunakan **vw** agar fluid! (misal: **1rem + 2vw**).
3. MAXIMUM: Ukuran terbesar yang diizinkan (misal: **1.5rem atau 24px**).

 membuat judul h1 kita menjadi fluid.
 ```bash
/* GANTI INI: */
h1 {
  font-size: 2.5rem; /* Ukuran statis */
  text-align: center;
  ...
}

/* MENJADI INI: */
h1 {
  /* Min: 2rem (32px), Preferred: 1rem + 5vw, Max: 3.5rem (56px) */
  font-size: clamp(2rem, 1rem + 5vw, 3.5rem);
  text-align: center;
  ...
}
```

Langkah 3 Spasi (Spacing) yang Fluid
Prinsip yang sama berlaku untuk **padding**, **margin**, dan **gap**. Kita tidak ingin spasi yang kaku.

Buat **gap** pada grid container kita menjadi fluid.

```bash
/* GANTI INI: */
.main-container {
  ...
  display: grid;
  gap: 2rem; /* Jarak statis */
}

/* MENJADI INI: */
.main-container {
  ...
  display: grid;
  /* Min: 1.5rem, Preferred: 4vw, Max: 3rem */
  gap: clamp(1.5rem, 4vw, 3rem);
}
```
Jarak antar elemen (form dan pratinjau) sekarang akan ikut melebar secara proporsional dengan layar, membuat desain terasa lebih "bernapas" di layar besar tanpa boros tempat di layar kecil.


 Langkah 4 Gambar (Images) yang Benar-Benar Responsif
Gambar seringkali merusak layout. Maka Kita harus mengaturnya.
Pastikan gambar di dalam **<figure>** pratinjau Anda tidak hanya responsif, tapi juga memiliki rasio yang konsisten.

```bash
article img, article video {
  /* 1. Dasar Responsif: tidak akan lebih lebar dari parentnya */
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  
  /* 2. (Opsional) Trik Pro: Menjaga rasio aspek */
  /* Jika Anda ingin semua gambar memiliki rasio 16:9 */
  aspect-ratio: 16 / 9;
  object-fit: cover; /* Memastikan gambar mengisi area tanpa distorsi */
}
```
1. **max-width: 100%**; adalah properti paling penting untuk gambar responsif.
2. **aspect-ratio: 16 / 9**; dan **object-fit**: cover; adalah kombinasi modern yang sangat kuat untuk membuat galeri atau kartu yang rapi, di mana semua gambar memiliki ukuran yang seragam tanpa peduli ukuran aslinya.

 
Langkah 5 Art Direction dengan **<picture>**
 
gambar yang bagus di desktop (lebar) terlihat buruk di mobile (terlalu kecil). Kita bisa menampilkan gambar yang berbeda (bukan hanya lebih kecil).
Ubah **<img>** di dalam **<figure>** Anda menjadi tag **<picture>**.

**MENGUBAH DI HTML**
```bash
<figure>
    <img src="placeholder-landscape.jpg" alt="Gambar hidangan utama resep">
    ...
</figure>

<figure>
    <picture>
      <source media="(min-width: 600px)" srcset="placeholder-landscape.jpg">
      
      <img src="placeholder-portrait.jpg" alt="Gambar hidangan utama resep">
    </picture>
    <figcaption>...</figcaption>
</figure>
```
Browser sekarang akan memilih gambar mana yang akan diunduh berdasarkan media query. Ini menghemat bandwidth di mobile dan memberikan "Art Direction" yang lebih baik.
