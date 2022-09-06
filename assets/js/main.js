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

//Pega a hora e formata
function getHourFromSeconds(seconds) {
    const data = new Date(seconds * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

//Inicia o cronômetro
function startStopWatch() {
    timer = setInterval(function () {
        stopwatch++;
        clock.innerHTML = getHourFromSeconds(stopwatch);
    }, 1000);
}

//Habilita o botão de reiniciar o cronômetro
function enableRestart() {
    restart.disabled = false; 

    restart.classList.remove('disabled');
    restart.classList.add('restart');
}

//Desabilita o botão de reiniciar o crônometro
function disableRestart() {
    restart.disabled = true;

    restart.classList.remove('restart');
    restart.classList.add('disabled');
}

//Transforma o botão de pausar em iniciar
function turnStop() {
    start.innerHTML = "Pausar";
    start.classList.remove('start');
    start.classList.add('stop');
}

//Transforma o botão de iniciar em pausar
function turnStart() {
    start.innerHTML = "Iniciar";
    start.classList.remove('stop');
    start.classList.add('start');
}

//Executa as ações do botão iniciar
function buttonStart() {
    clock.classList.remove('stopped');
    enableRestart();
    turnStop();

    clearInterval(timer);
    startStopWatch();
}

//Executa as ações do botão pausar
function buttonStop() {
    clock.classList.add('stopped');
    turnStart();

    clearInterval(timer);
}

//Executa as ações do botão reiniciar
function buttonRestart() {
    clock.classList.remove('stopped');
    disableRestart();
    turnStart();

    clearInterval(timer);
    clock.innerHTML = getHourFromSeconds(0);
    stopwatch = 0;
}
