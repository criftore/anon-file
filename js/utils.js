export function unikId() {
  const karakter =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += karakter.charAt(Math.floor(Math.random() * karakter.length));
  }
  return id;
}

export function fade() {
  document.body.classList.add("fade-out");
}

export function warnaAcak() {
  const hex = "0123456789ABCDEF";
  let warna = "#";
  for (let i = 0; i < 6; i++) {
    warna += hex[Math.floor(Math.random() * 16)];
  }
  return warna;
}

export function notifPopup(pesan, durasi = 1500) {
  let pop = document.getElementById("notifCustom");
  let msg = document.getElementById("pesanNotif");
  msg.innerText = pesan;

  pop.classList.add("show");
  setTimeout(() => {
    pop.classList.remove("show");
  }, durasi);
}

export function Index() {
  fade();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}
