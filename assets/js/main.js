const clock = document.querySelector('.clock');
const start = document.querySelector('.start');
const restart = document.querySelector('.disabled');

restart.disabled = true;

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('restart')) {
        
        buttonRestart();

    } else {

        if (el.classList.contains('start')) {
            buttonStart();
        } else {
            buttonStop();
        }

    }

});


let stopwatch = 0;
let timer;

function startStopWatch() {
    timer = setInterval(function () {
        stopwatch++;
        clock.innerHTML = getHourFromSeconds(stopwatch);
    }, 1000);
}

function getHourFromSeconds(seconds) {
    const data = new Date(seconds * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function buttonStart() {
    clock.classList.remove('stopped');
    enableRestart();
    turnStop();

    clearInterval(timer);
    startStopWatch();
}

function buttonStop() {
    clock.classList.add('stopped');
    turnStart();

    clearInterval(timer);
}

function buttonRestart() {
    clock.classList.remove('stopped');
    disableRestart();
    turnStart();

    clearInterval(timer);
    clock.innerHTML = getHourFromSeconds(0);
    stopwatch = 0;
}

function enableRestart() {
    restart.disabled = false; //Habilita o botão Zerar

    restart.classList.remove('disabled');
    restart.classList.add('restart');
}

function disableRestart() {
    restart.disabled = true;

    restart.classList.remove('restart');
    restart.classList.add('disabled');
}

function turnStop() {
    start.innerHTML = "Pausar";
    start.classList.remove('start');
    start.classList.add('stop');
}

function turnStart() {
    start.innerHTML = "Iniciar";
    start.classList.remove('stop');
    start.classList.add('start');
}