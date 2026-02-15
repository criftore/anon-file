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

let prosesLoginForm = document.getElementById("prosesLoginForm");
if (prosesLoginForm) {
  prosesLoginForm.onsubmit = function (event) {
    event.preventDefault();
    prosesLogin();
  };
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
    let riwayatData = JSON.parse(localStorage.getItem("history_login")) || [];
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

function salam() {
  let namaUser = localStorage.getItem("user_aktif");
  let elementSalam = document.getElementById("Salam");
  let idUser = localStorage.getItem("user_id");
  let elementId = document.getElementById("uID");
  let Avatar = document.querySelector(".av-circle");

  if (elementSalam) {
    if (namaUser) {
      elementSalam.innerText = namaUser;
      if (elementId)
        elementId.innerText = "#" + localStorage.getItem("user_id");
      if (Avatar) {
        Avatar.innerHTML = "";
        let img = document.createElement("img");
        img.src = "https://api.dicebear.com/7.x/pixel-art/svg?seed=" + namaUser;
        img.style.width = "80%";
        img.style.height = "80%";

        img.onerror = function () {
          img.innerHTML = "Avatar";
        };
        Avatar.appendChild(img);
        Avatar.style.backgroundColor = warnaAcak();
        Avatar.style.borderColor = warnaAcak();
      }
    } else {
      if (!window.location.pathname.includes("index.html")) {
        notifPopup("Akses ditolak!!! Silahkan login dulu Bosku!");
        Index();
      }
    }
  }
}
function prosesLogout() {
  localStorage.removeItem("user_aktif");
  localStorage.removeItem("user_id");
  notifPopup("Terima Kasih telah berkunjung Bosku!");
  Index();
}

function tampilkanRiwayat() {
  let list = document.getElementById("daftarRiwayat");
  if (!list) return;
  let riwayatData = JSON.parse(localStorage.getItem("history_login")) || [];
  let riwayatTampilan = [...riwayatData].reverse().slice(0, 5);
  list.innerHTML = "";
  riwayatTampilan.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item.nama + " (ID: " + item.id + ") pada " + item.waktu;
    list.appendChild(li);
  });
}

salam();
tampilkanRiwayat();
