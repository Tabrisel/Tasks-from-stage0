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


//*background *//
const canvasBackground = document.getElementById("parallax");
const ctx2 = canvasBackground.getContext("2d");
const back_WIDTH = canvasBackground.width = 900;
const back_HEIGHT = canvasBackground.height = 600;

let speedForGame = 0.5;

const back_layer1 = new Image();
back_layer1.src = "scene/stage0/layer_1.png";
const back_layer2 = new Image();
back_layer2.src = "scene/stage0/layer_2.png";
const back_layer3 = new Image();
back_layer3.src = "scene/stage0/layer_3.png";
const back_layer4 = new Image();
back_layer4.src = "scene/stage0/layer_4.png";
const back_layer5 = new Image();
back_layer5.src = "scene/stage0/layer_5.png";
const back_layer6 = new Image();
back_layer6.src = "scene/stage0/layer-6.png";

class backgroundParallax {
    constructor(img, speedValue) {
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.x2 = this.width;
        this.image = img;
        this.speedValue = speedValue;
        this.speed = speedForGame * this.speedValue;
    }
    update(){
        this.speed = speedForGame * this.speedValue;
        if (this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }
    draw() {
        ctx2.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx2.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

const layer2 = new backgroundParallax(back_layer2, 1);
const layer3 = new backgroundParallax(back_layer3, 1);
const layer4 = new backgroundParallax(back_layer4, 3);
const layer5 = new backgroundParallax(back_layer5, 3);



function back_Animation() {
    ctx2.clearRect(0, 0, back_WIDTH, back_HEIGHT);
    layer2.update();
    layer2.draw();
    layer3.update();
    layer3.draw();
    layer4.update();
    layer4.draw();
    layer5.update();
    layer5.draw();
    requestAnimationFrame(back_Animation);
};
back_Animation();



//* hero and animations

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
    let position = Math.floor(gameTime/retarder) % spriteAnimations["walk"].pos.length;
    let imgX = spriteWidth * position;
    let imgY = spriteAnimations["walk"].pos[position].y;

    ctx.drawImage(heroImage, imgX, imgY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);


    gameTime++;
    requestAnimationFrame(animate);
};
animate();