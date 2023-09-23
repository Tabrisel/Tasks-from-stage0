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
const progressBar = document.querySelector(".progressBar");
const barBox = document.querySelector(".bar");
const currentT = document.querySelector(".currentTimeSong");
const durationT = document.querySelector(".durationSong");

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

audio.onended = function() {
    currentSong = currentSong + 1;
    if (currentSong > titles.length - 1) {currentSong = 0}
    titleCurrent.textContent = titles[currentSong];
    authorCurrent.textContent = authors[currentSong];
    picCurrent.src = `${folderPic[currentSong]}`;
    audio.src = `${folderPaths[currentSong]}`;
    playAudio();
}

function widthProgressBar (event) {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    let widthForBar = (currentTime / duration) * 100;
    progressBar.style.width = `${widthForBar}%`;
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentT.textContent = `${currentMin}:0${currentSec}`} else {
    currentT.textContent = `${currentMin}:${currentSec}`};
}

function setWidthBar (event) {
    const widthBoxBar = this.clientWidth;
    const mouseClick = event.offsetX;
    audio.currentTime = (mouseClick / widthBoxBar) * audio.duration;
}

button.addEventListener("click", playAudio);

nextBtn.addEventListener("click", toNextSong);
prevBtn.addEventListener("click", toPrevSong);
audio.addEventListener("timeupdate", widthProgressBar);
barBox.addEventListener("click", setWidthBar);

audio.addEventListener("loadeddata", () => {
    let minutesD = Math.floor(audio.duration / 60);
    let secondsD = Math.floor(audio.duration % 60);
    durationT.textContent = `${minutesD}:${secondsD}`});



