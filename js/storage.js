import { renderSalam, proteksiHalaman } from "./ui.js";
import { unikId, notifPopup, fade, Index } from "./utils.js";

export function prosesLogin() {
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

export function salam() {
  let namaUser = localStorage.getItem("user_aktif");
  let idUser = localStorage.getItem("user_id");
  proteksiHalaman(namaUser);
  renderSalam(namaUser, idUser);
}

export function prosesLogout() {
  localStorage.removeItem("user_aktif");
  localStorage.removeItem("user_id");
  notifPopup("Terima Kasih telah berkunjung Bosku!");
  Index();
}
