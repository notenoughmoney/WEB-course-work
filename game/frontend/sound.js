var audio = new Audio();
audio.src = '/game/frontend/sounds/main_theme.mp3'; // путь к самой мелодии
audio.volume = 1; //Громкость
let fun = document.getElementById("fun");
let sad = document.getElementById("sad");
sad.style.display = "none";

function soundStart() {
  audio.play();
  fun.style.display = "none"; // Скрытие текста, который запускает мелодию
  sad.style.display = "block"; // показ текста, который её остановит
}

function soundStop() {
  audio.pause();
  fun.style.display = "block";
  sad.style.display = "none";
}