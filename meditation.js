import {startTimer, pauseTimer, resumeTimer} from "./timer.js";
import {getAudio} from "./voice.js";

let startBtn = document.querySelector('button'),
    promptDiv = document.querySelector('#prompt'),
    timerDiv = document.querySelector('#timer');

let breathing_audio = new Audio("/audio/ari-meditation-1.mp3");
let rain_audio = new Audio("/audio/rain.mp3");

const beginMeditation = async (prompt, duration) => {
    //await getAudio(prompt)
    timerDiv.style.display = "";
    startBtn.style.display = "none";
    startTimer(duration*60);
    breathing_audio.play();
    rain_audio.play();
}

const pauseMeditation = () => {

}

const resumeMeditation = () => {

}


startBtn.onclick = async () => {
    let prompt = promptDiv.textContent
    //let audio = await loadMeditation(prompt)
    let duration = parseInt(prompt.match(/\d+/)[0]) || 5;
    
    beginMeditation(prompt, duration)
}