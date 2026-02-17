import { notifPopup, warnaAcak, Index } from "./utils.js";

export function renderSalam(namaUser, idUser) {
  let elementSalam = document.getElementById("Salam");
  let elementId = document.getElementById("uID");
  let Avatar = document.querySelector(".av-circle");

  if (elementSalam && namaUser) {
    elementSalam.innerText = namaUser;

    if (elementId) {
      elementId.innerText = "#" + idUser;
    }

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
  }
}

export function proteksiHalaman(namaUser) {
  if (!namaUser && !window.location.pathname.includes("index.html")) {
    notifPopup("Akses ditolak!!! Silahkan login dulu!");
    Index();
  }
}

export function tampilkanRiwayat() {
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
