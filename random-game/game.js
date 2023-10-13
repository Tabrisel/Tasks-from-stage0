// /* menu */

// const folderPaths = ["soundtrack/LightAmbience2.wav", "soundtrack/Angles_Oak_Studios.wav"];
// let currentSong = 0;
// const startButton = document.getElementById("startGame");
// const soundButton = document.getElementById("sound_button");
// const blackBox = document.querySelector(".blackBox");
// const modalQuestion = document.querySelector(".modalWindow");
// const yesAnswer = document.getElementById("yesSound");
// const noAnswer = document.getElementById("noSound");
// let audio = new Audio;
// audio.src = "soundtrack/LightAmbience2.wav";
// let volume = .5;
// audio.volume = volume;

// soundButton.addEventListener("click", () => {
//     audio.muted = audio.muted == false ? true : false;
//     soundButton.classList.toggle("button_OFF");
// })

// yesAnswer.addEventListener("change", () => {
//     audio.muted = false;
//     soundButton.classList.remove("button_OFF");
// });
// noAnswer.addEventListener("change", e => {
//     if (e.target.checked) {
//     audio.muted = true;
//     soundButton.classList.add("button_OFF");
//     }
// });

// startButton.addEventListener("click", () => {
//     blackBox.classList.add("modal_OFF2");
//     modalQuestion.classList.add("modal_OFF");
//     audio.play();
//     if (yesAnswer.checked)
//     {audio.muted = false}
//     else {audio.muted = true;
//         soundButton.classList.add("button_OFF");}
// })

// function Mute() {
//     audio.muted = audio.muted == false ? true : false;
//     soundButton.classList.toggle("button_OFF");
// }

// function Mute2() {
//     audio.muted = audio.muted == false ? true : false;
//     soundButton.classList.add("button_OFF");
// }

// audio.onended = function() {
//     currentSong = currentSong + 1;
//     if (currentSong > folderPaths.length - 1) {currentSong = 0}
//     audio.src = `${folderPaths[currentSong]}`;
//     audio.play();
// }

//* game mechanics*//

let field;
let widthCanvas = 899;
let heightCanvas = 500;
let ctx;

let widthPlayer = 10;
let heightPlayer = 70;
let speedPlayer = 0;

let gamer1 = {
    x : 20,
    y : heightCanvas/2,
    width : widthPlayer,
    height : heightPlayer,
    speed : speedPlayer
}

let gamer2 = {
    x : widthCanvas - widthPlayer - 20,
    y : heightCanvas/2,
    width : widthPlayer,
    height : heightPlayer,
    speed : speedPlayer
}

//with loading:

window.addEventListener("load", function() {
    field = this.document.getElementById("field");
    field.height = heightCanvas;
    field.width = widthCanvas;
    ctx = field.getContext("2d");

    //draw gamer1 and gamer2 infinite:
    this.requestAnimationFrame(renew);
    

    this.document.addEventListener("keyup", changePosition)
    

    

})

function renew() {
    requestAnimationFrame(renew);
    ctx.clearRect(0, 0, field.width, field.height)

    ctx.fillStyle = "rgb(203, 203, 68)";
    gamer1.y = gamer1.y + gamer1.speed;
    ctx.fillRect(gamer1.x, gamer1.y, gamer1.width, gamer1.height);

    ctx.fillStyle = "rgb(203, 203, 68)";
    gamer2.y = gamer2.y + gamer2.speed;
    ctx.fillRect(gamer2.x, gamer2.y, gamer2.width, gamer2.height);
}

function stopOutBorder(smth) {
    return (smth < 0 || smth + heightPlayer > heightCanvas);
}


function changePosition(event) {
    if (event.code == "KeyW") {
        gamer1.speed = -3;
    }
    else if (event.code == "KeyS") {
        gamer1.speed = 3;
    }

    if (event.code == "ArrowUp") {
        gamer2.speed = -3;
    }
    else if (event.code == "ArrowDown") {
        gamer2.speed = 3;
    }
}