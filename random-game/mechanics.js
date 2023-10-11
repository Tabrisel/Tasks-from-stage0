const folderPaths = ["soundtrack/LightAmbience2.wav", "soundtrack/Angles_Oak_Studios.wav"];
let currentSong = 0;
const soundButton = document.getElementById("sound_button");
const blackBox = document.querySelector(".blackBox");
const modalQuestion = document.querySelector(".modalWindow");
const yesAnswer = document.getElementById("yesSound");
const noAnswer = document.getElementById("noSound");
let audio = new Audio;
audio.src = "soundtrack/LightAmbience2.wav";
let volume = .5;
audio.volume = volume;

soundButton.addEventListener("click", () => {
    audio.muted = audio.muted == false ? true : false;
    soundButton.classList.toggle("button_OFF");
})

yesAnswer.addEventListener("click", () => {
    audio.play();
    blackBox.classList.add("modal_OFF");
    modalQuestion.classList.add("modal_OFF");
});
noAnswer.addEventListener("click", () => {
    audio.play();
    Mute2();
    blackBox.classList.add("modal_OFF");
    modalQuestion.classList.add("modal_OFF");
});

function Mute() {
    audio.muted = audio.muted == false ? true : false;
    soundButton.classList.toggle("button_OFF");
}

function Mute2() {
    audio.muted = audio.muted == false ? true : false;
    soundButton.classList.add("button_OFF");
}

audio.onended = function() {
    currentSong = currentSong + 1;
    if (currentSong > folderPaths.length - 1) {currentSong = 0}
    audio.src = `${folderPaths[currentSong]}`;
    audio.play();
}


const hero = document.getElementById("canvasHero");
const ctx = hero.getContext("2d");
const WIDTH_FOR_CANVAS = hero.width = 555;
const HEIGHT_FOR_CANVAS = hero.height = 510;

const heroImage = new Image();
heroImage.src = "sprites/wizard_edit.png";
const spriteWidth = 529;
const spriteHeight = 534;
let imgX = 0;
let imgY = 1;
let gameTime = 0;
const retarder = 40;
const spriteAnimations = [];
const animationList = [
    {
        name: "walk", frames: 4,
    },

    {
        name: "idle", frames: 2,
    },

    {
        name: "jump", frames: 2,
    },

    {
        name: "fall", frames: 2,
    },

    {
        name: "electro", frames: 2,
    },

    {
        name: "attack", frames: 6,
    },

    {
        name: "fireball", frames: 4,
    },

    {
        name: "stairs", frames: 2,
    },

    {
        name: "getHit", frames: 1,
    },

    {
        name: "death", frames: 3,
    },
    
];

animationList.forEach((animation, ind) => {
    let frames = {
        pos: [],
    }
    for(let i = 0; i < animation.frames; i++){
        let positionX = i * spriteWidth;
        let positionY = ind * spriteHeight;
        frames.pos.push({x: positionX, y: positionY});
    }
    spriteAnimations[animation.name] = frames;
});
console.log(spriteAnimations);

function animate() {
    ctx.clearRect(0, 0, WIDTH_FOR_CANVAS, HEIGHT_FOR_CANVAS);
    let position = Math.floor(gameTime/retarder) % spriteAnimations["idle"].pos.length;
    let imgX = spriteWidth * position;
    let imgY = spriteAnimations["idle"].pos[position].y;

    ctx.drawImage(heroImage, imgX, imgY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);


    gameTime++;
    requestAnimationFrame(animate);
};
animate();