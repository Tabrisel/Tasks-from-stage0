// sound and music, menu

const folderPaths = ["soundtrack/LightAmbience2.wav", "soundtrack/Angles_Oak_Studios.wav"];
let currentSong = 0;
const startButton = document.getElementById("startGame");
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

yesAnswer.addEventListener("change", () => {
    audio.muted = false;
    soundButton.classList.remove("button_OFF");
});
noAnswer.addEventListener("change", e => {
    if (e.target.checked) {
    audio.muted = true;
    soundButton.classList.add("button_OFF");
    }
});

startButton.addEventListener("click", () => {
    blackBox.classList.add("modal_OFF2");
    modalQuestion.classList.add("modal_OFF");
    audio.play();
    if (yesAnswer.checked)
    {audio.muted = false}
    else {audio.muted = true;
        soundButton.classList.add("button_OFF");}
})

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

window.addEventListener("load", function() {
  
const canvasBackground = document.getElementById("parallax");
const ctx2 = canvasBackground.getContext("2d");
const back_WIDTH = canvasBackground.width = 900;
const back_HEIGHT = canvasBackground.height = 600;

let speedForGame = 0.5;

const back_sheet1 = new Image();
back_sheet1.src = "scene/stage0/layer_1.png";
const back_sheet2 = new Image();
back_sheet2.src = "scene/stage0/layer_2.png";
const back_sheet3 = new Image();
back_sheet3.src = "scene/stage0/layer_3.png";
const back_sheet4 = new Image();
back_sheet4.src = "scene/stage0/layer_4.png";
const back_sheet5 = new Image();
back_sheet5.src = "scene/stage0/layer_5.png";
const back_sheet6 = new Image();
back_sheet6.src = "scene/stage0/layer_6.png";

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
    renew(){
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
    create() {
        ctx2.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx2.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

const sheet2 = new backgroundParallax(back_sheet2, 0.3);
const sheet3 = new backgroundParallax(back_sheet3, 1.5);
const sheet4 = new backgroundParallax(back_sheet4, 3);
const sheet5 = new backgroundParallax(back_sheet5, 3);
const sheet6 = new backgroundParallax(back_sheet6, 3);



function back_Animation() {
    ctx2.clearRect(0, 0, back_WIDTH, back_HEIGHT);
    sheet2.renew();
    sheet2.create();
    sheet3.renew();
    sheet3.create();
    sheet4.renew();
    sheet4.create();
    sheet5.renew();
    sheet5.create();
    sheet6.renew();
    sheet6.create();
    requestAnimationFrame(back_Animation);
};
back_Animation();

})

//* hero and animations

const hero = document.getElementById("canvasHero");
const ctx = hero.getContext("2d");



const WIDTH_FOR_CANVAS = hero.width = 555;
const HEIGHT_FOR_CANVAS = hero.height = 612;


// animations

const heroImage = new Image();
heroImage.src = "sprites/wizard_edit_ready.png";
const spriteWidth = 529;
const spriteHeight = 602;
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


//hero movements
let main_keys = ["ArrowDown", "ArrowUp", "w", "ц", "s", "ы", "r", "к"];

class whichKey {
    constructor(){
        this.allKeys = [ ];
        window.addEventListener("keydown", e => {

            if (main_keys.includes(e.key) && this.allKeys.indexOf(e.key) === -1) {
                this.allKeys.push(e.key);
            }
            console.log(e.key, this.allKeys);
            });

            window.addEventListener("keyup", e => {

                if (main_keys.includes(e.key)) {
                    this.allKeys.splice(this.allKeys.indexOf(e.key), 1);
                }
                console.log(e.key, this.allKeys);
                });
    }
}

let keysKeeper = new whichKey();

window.addEventListener("keydown", e => {
    if ((e.key == main_keys[1]) || (e.key == main_keys[2]) || (e.key == main_keys[3])) {
        hero.classList.add("active");
    }
})

window.addEventListener("keyup", e => {
    if ((e.key == main_keys[1]) || (e.key == main_keys[2]) || (e.key == main_keys[3])) {
        hero.classList.remove("active");
    }
})
