# Pertemuuan 4 

## Langkah-Langkah Menggunakan CSS Pada HTML untuk Memasukin Tampilan/Tema

### Langkah 1: Fondasi & Global Styling

1. Membuat file **Style.css**
2. Masukan Kodingan Ini
   ```bash
   /* --- GLOBAL RESET & FONDASI --- */
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
