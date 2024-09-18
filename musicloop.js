window.onload = setInterval(GameLoop, 1000 / 10); //10fps

let myAudio = new Audio();

myAudio.src = 'muisc_Nujabes_-_Aruarian_Dance.mp3';

function Gameloop() {
    myAudio.play();
    if (myAudio.paused == true) {
        myAudio.play();
    }
}