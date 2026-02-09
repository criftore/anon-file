console.log("File JS sudah tersambung!");

function notifPopup(pesan, durasi = 1500) {
  let pop = document.getElementById("notifCustom");
  let msg = document.getElementById("pesanNotif");
  msg.innerText = pesan;

  pop.classList.add("show");
  setTimeout(() => {
    pop.classList.remove("show");
  }, durasi);
}

function fade() {
  document.body.classList.add("fade-out");
}

function Index() {
  fade();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}

function unikId() {
  const karakter =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += karakter.charAt(Math.floor(Math.random() * karakter.length));
  }
  return id;
}

function prosesLogin() {
  let username = document.getElementById("username").value;
  if (username === "") {
    notifPopup("Isi dulu usernamenya Bosku!");
    return false;
  } else {
    const idBaru = unikId();
    localStorage.setItem("user_aktif", username);
    localStorage.setItem("user_id", idBaru);

    notifPopup("Halo " + username + " Menghubungkan...");
    fade();

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
    return false;
  }
}

const btnLogin = document.getElementById("btn-login");
if (btnLogin) {
  btnLogin.onclick = function (event) {
    event.preventDefault();
    prosesLogin();
  };
}

function salam() {
  let namaUser = localStorage.getItem("user_aktif");
  let elementSalam = document.getElementById("Salam");
  let idUser = localStorage.getItem("user_id");
  let elementId = document.getElementById("uID");

  if (elementSalam) {
    if (namaUser) {
      elementSalam.innerText = namaUser;
    } else {
      notifPopup("Akses ditolak!!! Silahkan login dulu Bosku!");
      Index();
    }
  }
  if (elementId) {
    elementId.innerText = "#" + idUser;
  }
}
function prosesLogout() {
  localStorage.removeItem("user_aktif");
  localStorage.removeItem("user_id");
  notifPopup("Terima Kasih telah berkunjung Bosku!");
  Index();
}

salam();
// function prosesLogin() {
//   let nama = document.getElementById("username").value;
//   if (nama === "") {
//     notifPopup("Isi dulu usernamenya Bosku!");
//     return false;
//   } else {
//     localStorage.setItem("user_aktif", nama);
//     notifPopup("Halo " + nama + " Menghubungkan...");
//     fade();
//     setTimeout(() => {
//       window.location.href = "home.html";
//     }, 1000);
//     return false;
//   }
// }
// function salam() {
//   let namaUser = localStorage.getItem("user_aktif");
//   let elementSalam = document.getElementById("Salam");
//   if (elementSalam) {
//     if (namaUser) {
//       elementSalam.innerText = "Halo, " + namaUser + "!";
//     } else {
//       notifPopup("Akses ditolak!!! Silahkan login dulu Bosku!");
//       Index();
//     }
//   }
// }
// function prosesLogout() {
//   localStorage.removeItem("user_aktif");
//   notifPopup("Terima Kasih telah berkunjung Bosku!");
//   Index();
// }
// salam();
