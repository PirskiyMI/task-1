const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const timer = inputEl.addEventListener('input', (e) => {
   e.target.value = e.target.value.replace(/[^\d]/g, '');
});

buttonEl.addEventListener('click', () => {
   seconds = Number(inputEl.value)
   setInterval(() => {
      seconds -= 1;
      const hoursLeft = Math.floor(seconds / 60 / 60);
      const minutesLeft = Math.floor((seconds / 60) % 60);
      const secondsLeft = Math.floor(seconds % 60);
      timerEl.innerHTML = `${hoursLeft < 10 ? '0' + hoursLeft : hoursLeft}:${
         minutesLeft < 10 ? '0' + minutesLeft : minutesLeft
      }:${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}`;
   }, 1000);
   inputEl.value = '';
});

