console.log("File JS sudah tersambung!");

import { unikId, fade, warnaAcak, notifPopup, Index } from "./js/utils.js";
import { prosesLogin, prosesLogout, salam } from "./js/storage.js";
import { tampilkanRiwayat } from "./js/ui.js";

let prosesLoginForm = document.getElementById("prosesLoginForm");
if (prosesLoginForm) {
  prosesLoginForm.onsubmit = function (event) {
    event.preventDefault();
    prosesLogin();
  };
}

let logOut = document.getElementById("Logout");
if (logOut) {
  logOut.addEventListener("click", function () {
    prosesLogout();
  });
}

salam();
tampilkanRiwayat();
