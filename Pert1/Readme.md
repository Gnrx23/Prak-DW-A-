#  Panduan Dasar Git & GitHub

Dokumentasi ini berisi langkah-langkah **instalasi Git**, **alur kerja dasar Git secara lokal**, serta **integrasi dengan GitHub untuk kerja tim**.

---

##  Bagian 1: Instalasi & Konfigurasi Awal Git
###  1. Instalasi Git
####  Windows
1.  Unduh installer: [Download Git for Windows](https://git-scm.com/download/win)

2.  Jalankan file `.exe` yang diunduh.

3.  Biarkan pengaturan default lalu klik **Next** hingga selesai.

4.  Verifikasi instalasi:
   ```bash
   git --version
   ```

####  macOS
1.  Install Homebrew:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

2.  Install Git:
    ```bash
    brew install git
    ```

3.  Verifikasi:
    ```bash
    git --version
    ```

####  Ubuntu/Debian
1.  Update package & install Git:
    ```bash
    sudo apt update
    sudo apt install git
    ```

2.  Verifikasi:
    ```bash
    git --version
    ```

###  2. Konfigurasi Awal Git
Setelah instalasi, lakukan konfigurasi nama & email agar setiap commit tercatat dengan benar:

```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email@kamu.com"
```

##  Bagian 2: Alur Kerja Dasar Git (Lokal)
1.  Buat Folder & Inisialisasi Git
    ```bash
    mkdir proyek-web
    cd proyek-web
    git init
    ```

2.  Buat File
    ```bash
    echo "<h1>Selamat Datang</h1>" > index.html
    mkdir css
    echo "body { font-family: sans-serif; }" > css/style.css
    ```

3.  Cek Status & Masuk Ke Staging
    ```bash
    git status
    git add .
    ```

4.  Commit
    ```bash
    git commit -m "feat: Inisialisasi proyek dengan file index dan css"
    ```

5.  Buat Branch Baru
    ```bash
    git checkout -b fitur-kontak
    ```

6.  Staging & Commit di Branch
    ```bash
    git add .
    git commit -m "feat: Menambahkan halaman kontak"
    ```

7.  Gabungkan Branch (Merge)
    ```bash
    git checkout main
    git merge fitur-kontak
    ```

##  Bagian 3: Integrasi dengan GitHub
1.  Buat Akun & Repository
    -  Masuk ke GitHub
    -  Klik + → New repository
    -  Beri nama repository (misal: ``proyek-web-pertama``)
    -  Jangan centang “Add a README file”
    -  Klik Create repository

2.  Hubungkan & Push Proyek Lokal ke GitHub
    ```bash
    git remote add origin https://github.com/NamaUserKamu/proyek-web-pertama.git
     git branch -M main
     git push -u origin main
    ```

##  Bagian 4: Workflow Kerja Kelompok (Feature Branch Workflow)
1.  Clone Repository (sekali di awal)
    ```bash
     git clone https://github.com/NamaUserKamu/proyek-web-pertama.git
    ```

2.  Selalu Mulai dari main Terbaru
    ```bash
     git checkout main
     git pull origin main
    ```

3.  Buat Branch Baru untuk Setiap Fitur
    ```bash
    git checkout -b nama-fitur-baru
    ```

4.  Kerjakan, Add, dan Commit di Branch
    ```bash
     git add .
     git commit -m "pesan commit yang jelas"
    ```

5.  Push Branch Fitur ke GitHub
    ```bash
    git push origin nama-fitur-baru
    ```

6.  Buat Pull Request (PR)
    - Buka halaman repository di GitHub
    - Klik **Compare & pull request**
    -  Isi judul, deskripsi, tetapkan Reviewers
    -  Klik Create pull request

7. Review, Diskusi, dan Merge
    - Reviewer meninjau perubahan
    - Setelah disetujui, ketua tim menekan Merge pull request
   
8.  Sinkronisasi Ulang Setelah Merge
    ```bash
     git checkout main
     git pull origin main
    ```
