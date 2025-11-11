
const containerInspirasi = document.querySelector('#resep-container');
const loadingIndicator = document.querySelector('#loading-indicator');
const errorMessage = document.querySelector('#error-message');

// URL API (Ambil 12 resep dari kategori "Seafood")
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';




const inputWaktuPersiapan = document.querySelector('#prep-time');
const waktuPratinjau = document.querySelector('#preview-time');



const inputDeskripsi = document.querySelector('#description');
const deskripsiPratinjau = document.querySelector('#preview-desc');




async function muatInspirasiResep() {
  try {
    // 1. Tampilkan loading, sembunyikan error
    loadingIndicator.style.display = 'block';
    errorMessage.style.display = 'none';

    // 2. Ambil data dari API
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Gagal mengambil data dari server.');
    }

    // 3. Ubah data menjadi JSON
    const data = await response.json();
    const resepArray = data.meals; // Ini adalah array berisi resep

    // 4. Sembunyikan loading
    loadingIndicator.style.display = 'none';

    // 5. Panggil fungsi untuk menampilkan data
    tampilkanResep(resepArray);

  } catch (error) {
    // 6. Tangani jika terjadi error
    console.error('Terjadi kesalahan:', error);
    loadingIndicator.style.display = 'none';
    errorMessage.textContent = 'Gagal memuat resep. Coba lagi nanti.';
    errorMessage.style.display = 'block';
  }
}

function tampilkanResep(resepArray) {
  // Bersihkan kontainer (jika ada data lama)
  containerInspirasi.innerHTML = '';

  // Loop (ulangi) untuk setiap resep di dalam array
  resepArray.forEach(resep => {
    // 1. Buat elemen-elemen HTML baru
    const kartuDiv = document.createElement('div');
    kartuDiv.className = 'kartu-resep'; // Beri kelas CSS

    const gambar = document.createElement('img');
    gambar.src = resep.strMealThumb; // Ambil URL gambar dari API
    gambar.alt = resep.strMeal;

    const judul = document.createElement('h3');
    judul.textContent = resep.strMeal; // Ambil nama resep dari API

    // 2. Susun elemen-elemen tersebut
    kartuDiv.appendChild(gambar);
    kartuDiv.appendChild(judul);

    // 3. Masukkan kartu yang sudah jadi ke dalam kontainer di halaman
    containerInspirasi.appendChild(kartuDiv);
  });
}
muatInspirasiResep();
