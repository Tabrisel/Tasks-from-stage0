// /* menu */

const folderPaths = ["soundtrack/What_Is_Love_8-bit_Remx.wav", "soundtrack/Neva_Gonna_Give_You_Up_8_bit.wav"];
let currentSong = 0;
const startButton = document.getElementById("startGame");
const soundButton = document.getElementById("sound_button");
const blackBox = document.querySelector(".blackBox");
const modalQuestion = document.querySelector(".modalWindow");
const yesAnswer = document.getElementById("yesSound");
const noAnswer = document.getElementById("noSound");
const yesMode = document.getElementById("yesMode");
const results = document.querySelector(".modalResults");
const resultsButton = document.getElementById("last_games");
const crossButton = document.querySelector(".cross");
console.log(crossButton);

let audio = new Audio;
audio.src = "soundtrack/What_Is_Love_8-bit_Remx.wav";
let volume = .5;
audio.volume = volume;
let gameIsPlay = false;

let PC_value;
let PC_speed;


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

yesMode.addEventListener("onclick", () => {
    easy_mode == "false" ? "true" : "false";
});


startButton.addEventListener("click", () => {
    gameIsPlay = true;
    ball.posX = 1;
    ball.posY = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    blackBox.classList.add("modal_OFF2");
    modalQuestion.classList.add("modal_OFF");
    audio.play();
    if (yesAnswer.checked)
    {audio.muted = false}
    else {audio.muted = true;
        soundButton.classList.add("button_OFF");}
})

resultsButton.addEventListener("click", () =>{
    results.classList.add("modal_ON");
})

crossButton.addEventListener("click", () =>{
    results.classList.remove("modal_ON");
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

//* game mechanics*//

let score_gamer1 = 0;
let score_gamer2 = 0;

let field;
let widthCanvas = 899;
let heightCanvas = 500;
let ctx;

let widthPlayer = 15;
let heightPlayer = 70;
let positionPlayer = 0;

let gamer1 = {
    x : 0,
    y : heightCanvas/2,
    width : widthPlayer,
    height : heightPlayer,
    position: positionPlayer
}

let gamer2 = {
    x : widthCanvas - widthPlayer,
    y : heightCanvas/2,
    width : widthPlayer,
    height : heightPlayer,
    position: positionPlayer
}

let ball = {
    x: (widthCanvas/2),
    y: (heightCanvas/2),
    width: 15,
    height: 15,
    posX: 1,
    posY: Math.floor(Math.random() * (5 - 1 + 1)) + 1
}

if (gameIsPlay == false) {
    ball.posX = 0;
    ball.posY = 0;
} 



let min2 = 0;
let max2 = 0.01;
//with loading:


window.addEventListener("load", function() {
    field = this.document.getElementById("field");
    field.height = heightCanvas;
    field.width = widthCanvas;
    ctx = field.getContext("2d");

    //draw gamer1 and gamer2 infinite:
    this.requestAnimationFrame(renew);


})

    this.document.addEventListener("keydown", changePosition);
    this.document.addEventListener("keyup", changePosition2)


function renew() {
    requestAnimationFrame(renew);
    ctx.clearRect(0, 0, field.width, field.height)



    let player_image = new Image();
    player_image.src = 'png/players.png';

    ctx.fillStyle ="yellow";
    // gamer1.y = gamer1.y + gamer1.position;
    let futurePosition1 = gamer1.y + gamer1.position;
    if (!stopOutBorder(futurePosition1)) {
        gamer1.y = futurePosition1;
    }
    ctx.fillRect(gamer1.x, gamer1.y, gamer1.width, gamer1.height);


    // gamer2.y = gamer2.y + gamer2.position;
    let futurePosition2 = gamer2.y + gamer2.position;
    if (!stopOutBorder(futurePosition2)) {
        gamer2.y = futurePosition2;
    }
    ctx.fillRect(gamer2.x, gamer2.y, gamer2.width, gamer2.height);

    let ball_image = new Image();
    ball_image.src = "png/ball.png";
    ctx.fillStyle = "yellow";

    
    ball.x = ball.x + ball.posX;
    ball.y = ball.y + ball.posY;
    
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height)



    if (ball.y <= 0 || ((ball.y + ball.height) >= heightCanvas)) {
        ball.posY = -ball.posY;
    }
    


    if(collisionIsHere(ball, gamer1)) {
        if (ball.x <= gamer1.x + gamer1.width) {
            ball.posX = - ball.posX;
            ball.posY = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        }
        // if (ball.y <= (gamer1.y + gamer1.height)) {
        //     ball.posY = - ball.posY;
        //     ball.posY = - (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
        // }
    }
    else if(collisionIsHere(ball, gamer2)) {
        if ((ball.x + ball.width) >= gamer2.x) {
            ball.posX = - ball.posX;
            ball.posY = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        }

        // if (ball.y <= (gamer2.y + gamer2.height)) {
        //     ball.posY = - ball.posY;
        //     ball.posY = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        // }
    }

    //when score go up
    if (ball.x < 0) {
        score_gamer2++;
        gameOverChangeBall(1);
    }
    else if (ball.x + ball.width > widthCanvas) {
        score_gamer1++;
        gameOverChangeBall(-1);
    }


    ctx.font = "70px VT323";
    ctx.fillText(score_gamer1, widthCanvas/4, 50);
    ctx.fillText(score_gamer2, widthCanvas -  widthCanvas/4, 50);


    //PC

    if (!yesMode.checked) {
    PC_speed = 0.04;
    }
    if (yesMode.checked) {
    PC_speed = 0.005;
    }
    if (ball.posX > 0) {
    gamer2.y += (ball.y - (gamer2.y + gamer2.height/2) - Math.floor(Math.random() * 10)) * PC_speed;
    }
    console.log(PC_speed);

    let win = "What is love?! Nevermind.";
    let win2 ="YOU WIN!";

    let lose = "Never gonna give you up.."
    let lose2= "You lose! Maybe try again?"


    if (score_gamer1 == 5) {
        ctx.font = "70px VT323";
        ctx.fillText(win, widthCanvas/8, heightCanvas/2 - 30);
        ctx.fillText(win2, widthCanvas/2.5, heightCanvas/2 + 90);
        gameIsPlay = false;
        ball.width = 0;
        ball.height = 0;
        ball.posY = 0;
        ball.posX = 0;
    }

    if (score_gamer2 == 5) {
        ctx.font = "70px VT323";
        ctx.fillText(lose, widthCanvas/8, heightCanvas/2 - 30);
        ctx.fillText(lose2, widthCanvas/8, heightCanvas/2 + 90);
        gameIsPlay = false;
        ball.width = 0;
        ball.height = 0;
        ball.posY = 0;
        ball.posX = 0;
    }
}

function stopOutBorder(value) {
    return (value < 0 || value + heightPlayer > heightCanvas);
}


function changePosition(event) {
    if (event.code == "KeyW") {
        gamer1.position = -2;
    }
    else if (event.code == "KeyS") {
        gamer1.position = 2;
    }

    // if (event.code == "ArrowUp") {
    //     gamer2.position = -2;
    // }
    // else if (event.code == "ArrowDown") {
    //     gamer2.position = 2;
    // }
}


function changePosition2(event) {
    if (event.code == "KeyW") {
        gamer1.position = 0;
    }
    else if (event.code == "KeyS") {
        gamer1.position = 0;
    }

    // if (event.code == "ArrowUp") {
    //     gamer2.position = 0;
    // }
    // else if (event.code == "ArrowDown") {
    //     gamer2.position = 0;
    // }
}

function collisionIsHere(arg1, arg2) {
    return arg1.x < arg2.x + arg2.width &&
            arg1.x + arg1.width > arg2.x &&
            arg1.y < arg2.y + arg2.height &&
            arg1.y + arg1.height > arg2.y;
}

function gameOverChangeBall (val) {
    min = Math.ceil(50);
    max = Math.ceil(450);

    ball = {
        x: widthCanvas/2,
        y: Math.floor(Math.random() * (max - min + 1)) + min,
        width: 15,
        height: 15,
        posX: val,
        posY: Math.floor(Math.random() * (3 - 1 + 1)) + 1,
    }
    console.log(ball.y);
}




