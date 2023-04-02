let timer_display = document.querySelector('#timer');

const secondsToTimeString = (seconds) => {
    let m = Math.floor(seconds/60);
    let s = seconds % 60;
    let string = '';

    string = (s < 10) ? `${m}:0${s}`: `${m}:${s}`
    return string;
}

let timerInterval;
let remaining = 0;

const startTimer = (duration) => {
    timer_display.innerHTML = secondsToTimeString(duration);
    timerInterval = setInterval( () => {
        if(duration > 0){
            duration--; 
            remaining = duration;
            timer_display.innerHTML = secondsToTimeString(duration);
        } else {
            clearInterval(timerInterval)
        }
    }, 1000)
}


const resumeTimer = () => {
    startTimer(remaining)
}

const pauseTimer = () => {
    clearInterval(timerInterval)
}

export {startTimer, pauseTimer, resumeTimer}