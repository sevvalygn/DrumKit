// Tüm drum butonlarını seç
const drums = document.querySelectorAll(".drum");

// 🖱️ Mouse ile tıklama
drums.forEach((button) => {
  button.addEventListener("click", function () {
    const sound = this.dataset.sound;
    playSound(sound);
    buttonAnimation(this);
  });
});

// ⌨️ Klavye ile basma
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();

  const button = document.querySelector(
    `.drum[data-key="${key}"]`
  );

  if (button) {
    const sound = button.dataset.sound;
    playSound(sound);
    buttonAnimation(button);
  }
});

// 🔊 Ses çalma fonksiyonu
function playSound(sound) {
  const audio = new Audio(`sounds/${sound}.wav`);
  audio.currentTime = 0; // hızlı ardışık basışlar için
  audio.play();
}

// ✨ Basılma animasyonu
function buttonAnimation(button) {
  button.classList.add("pressed");

  setTimeout(() => {
    button.classList.remove("pressed");
  }, 150);
}
