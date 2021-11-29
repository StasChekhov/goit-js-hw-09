function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;

stop.disabled = true;

const onStart = () => {
    stop.disabled = false;
    start.disabled = true;

    timerId = setInterval(() => {
        body.style.background = getRandomHexColor(); 
    }, 1000)

}

const onStop = () => {
    stop.disabled = true;
    start.disabled = false;

    clearInterval(timerId);
}


start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);


