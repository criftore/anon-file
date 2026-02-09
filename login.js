// function unikId() {
//   const karakter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let id = "";
//   for (let i = 0; i < 6; i++) {
//     id += karakter.charAt(Math.floor(Math.random() * karakter.length));
//   }
//   return id;
// }

// function prosesLogin() {
//   let nama = document.getElementById("username").value;
//   if (nama === "") {
//     notifPopup("Isi dulu usernamenya Bosku!");
//     return false;
//   } else {
//     // 1. Buat ID unik saat login berhasil
//     const idBaru = unikId();
    
//     // 2. Simpan nama DAN ID unik ke localStorage
//     localStorage.setItem("user_aktif", nama);
//     localStorage.setItem("user_id", idBaru); 

//     notifPopup("Halo " + nama + " (ID: " + idBaru + ") Menghubungkan...");
    
//     fade();
//     setTimeout(() => {
//       window.location.href = "home.html";
//     }, 1000);
//     return false;
//   }
// }

// // Handler Event Login
// const btnLogin = document.getElementById("btn-login");
// if (btnLogin) {
//   btnLogin.onclick = function (event) {
//     event.preventDefault();
//     prosesLogin();
//   };
// }

// function salam() {
//   let namaUser = localStorage.getItem("user_aktif");
//   let idUser = localStorage.getItem("user_id"); // Ambil ID-nya juga
//   let elementSalam = document.getElementById("Salam");
  
//   if (elementSalam) {
//     if (namaUser) {
//       // Tampilkan nama dan ID di UI
//       elementSalam.innerText = `Halo, ${namaUser}! (ID: ${idUser})`;
//     } else {
//       notifPopup("Akses ditolak!!! Silahkan login dulu Bosku!");
//       Index();
//     }
//   }
// }

// function prosesLogout() {
//   localStorage.removeItem("user_aktif");
//   localStorage.removeItem("user_id"); // Hapus ID saat logout
//   notifPopup("Terima Kasih telah berkunjung Bosku!");
//   Index();
// }

// // Jalankan fungsi salam
// salam();