const button = document.querySelector(".main_button");
const triangle = document.querySelector(".triangle");
const pause = document.querySelector(".pause");
const nextBtn = document.querySelector(".btn_Right");
const prevBtn = document.querySelector(".btn_Left");
const titleCurrent = document.querySelector(".title");
const picCurrent = document.querySelector(".picture_for_music");
const folderPic = ["images/Josef_Salvat.png", "images/Blank.jpg", "images/Telepath.jpeg", "images/Little_Talks.jpg", "images/HeyBrother.jpg"];
const authorCurrent = document.querySelector(".author");
const titles = ["The Drum", "Lost In the Moment", "Telepath", "Little Talk", "Hey Brother"];
const authors = ["Josef Salvat", "Blanks", "Conan Gray", "Of Monsters and Men", "Avicii"];
const folderPaths = ["audio/Josef_Salvat_The_Drum.mp3", "audio/Blanks - Lost In The Moment.mp3", "audio/Conan Gray - Telepath.mp3", "audio/Of Monsters and Men - Little Talk.mp3", "audio/Avicii - Hey Brother.mp3"];
let currentSong = 0;
let audio = new Audio;
audio.src = "audio/Josef_Salvat_The_Drum.mp3";

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

function toNextSong() {
    currentSong = currentSong + 1;
    if (currentSong > titles.length - 1) {currentSong = 0}
    titleCurrent.textContent = titles[currentSong];
    authorCurrent.textContent = authors[currentSong];
    picCurrent.src = `${folderPic[currentSong]}`;
    audio.src = `${folderPaths[currentSong]}`;
    playAudio();
    }



function toPrevSong() {
    currentSong = currentSong - 1;
    if (currentSong < 0) {currentSong = titles.length - 1}
    titleCurrent.textContent = titles[currentSong];
    authorCurrent.textContent = authors[currentSong];
    picCurrent.src = `${folderPic[currentSong]}`;
    audio.src = `${folderPaths[currentSong]}`;
    playAudio();
}

/*function pauseAudio() {
    if (isPlay = true) {
    audio.pause();
    audio.currentTime = 0;
    isPlay = false}
} */



button.addEventListener("click", playAudio);

nextBtn.addEventListener("click", toNextSong);
prevBtn.addEventListener("click", toPrevSong);

