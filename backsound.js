// Wajib agar service worker aktif
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

// --- Backsound ---
let audio = new Audio("audio/BacksoundAplikasiEdukasiGamelanBaleganjurNew.mp3");
audio.loop = true;
audio.volume = 0.6;

self.addEventListener("message", (e) => {
  if (e.data === "play") {
    audio.play();
  }
  if (e.data === "stop") {
    audio.pause();
  }
});
