const button = document.querySelector(".main_button");
const triangle = document.querySelector(".triangle");
const pause = document.querySelector(".pause");
const audio = new Audio("audio/Josef_Salvat_The_Drum.mp3");

let isPlay = false;

function playAudio() {
    if (audio.paused) {
    button.classList.add("main_button_pause");
    pause.classList.add("pause_ON");
    triangle.classList.remove("triangle_ON");
    audio.play();
    } else {
        audio.pause();
        button.classList.remove("main_button_pause");
        pause.classList.remove("pause_ON");
        triangle.classList.add("triangle_ON");
        }
}

/*function pauseAudio() {
    if (isPlay = true) {
    audio.pause();
    audio.currentTime = 0;
    isPlay = false}
} */



button.addEventListener("click", playAudio);
button.addEventListener("click", pauseAudio);

