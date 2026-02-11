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

function warnaAcak() {
  const hex = "0123456789ABCDEF";
  let warna = "#";
  for (let i = 0; i < 6; i++) {
    warna += hex[Math.floor(Math.random() * 16)];
  }
  return warna;
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
    let riwayatData = JSON.parse(localStorage.getItem("history-_login")) || [];
    const loginBaru = {
      nama: username,
      id: idBaru,
      waktu: new Date().toLocaleString(),
    };
    riwayatData.push(loginBaru);

    localStorage.setItem("history_login", JSON.stringify(riwayatData));

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
  let avatar = document.querySelector(".av-circle");

  if (elementSalam) {
    if (namaUser) {
      elementSalam.innerText = namaUser;
      if (avatar) {
        avatar.style.backgroundColor = warnaAcak();
        avatar.style.color = "black";
      }
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

function tampilkanRiwayat() {
  let list = document.getElementById("daftarRiwayat");
  if (!list) return;
  let riwayatData = JSON.parse(localStorage.getItem("history_login")) || [];
  riwayatData.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item.nama + " (ID: " + item.id + ") pada " + item.waktu;
    list.appendChild(li);
  });
}

tampilkanRiwayat();

let riwayatTampilan = riwayatData.reverse().slice(0, 5);
