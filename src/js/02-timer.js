import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputPicker = document.querySelector('#datetime-picker')
const start = document.querySelector('[data-start]');
const days_ = document.querySelector('[data-days]');
const hours_ = document.querySelector('[data-hours]');
const minutes_ = document.querySelector('[data-minutes]');
const seconds_ = document.querySelector('[data-seconds]');



start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
   
    if (new Date(selectedDates[0].getTime()) <= new Date().getTime()) {
      window.alert("Please choose a date in the future");
    } else {
      start.disabled = false;
    }
  },
};

flatpickr(inputPicker, options);

const onButtonStart = () => {
  const intervalId = setInterval(() => {
    if (new Date(inputPicker.value).getTime() - new Date().getTime() > 0) {
      setTimer(convertMs(new Date(inputPicker.value).getTime() - new Date().getTime()))
    } else {
      clearInterval(intervalId);
      window.alert('Timer ended')
    }
  }, 1000)
}


const setTimer = ({ days, hours, minutes, seconds }) => {
  days_.innerHTML = days;
  hours_.innerHTML = hours;
  minutes_.innerHTML = minutes;
  seconds_.innerHTML = seconds;
};



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

start.addEventListener('click', onButtonStart);
