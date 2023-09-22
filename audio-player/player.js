const button = document.querySelector(".main_button");
const audio = new Audio("audio/Josef_Salvat_The_Drum.mp3");
let isPlay = false;

function playAudio() {
    if (audio.paused) {
    audio.play();
    audio.currentTime = 0} else {audio.pause()}
}

/*function pauseAudio() {
    if (isPlay = true) {
    audio.pause();
    audio.currentTime = 0;
    isPlay = false}
} */



button.addEventListener("click", playAudio);
button.addEventListener("click", pauseAudio);

