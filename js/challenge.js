//declarations
const counter = document.querySelector('#counter');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');

//auto counter
setInterval(() => counter.textContent++, 1000);

//plus-minus buttons
plus.addEventListener('click', () => counter.textContent++)
minus.addEventListener('click', () => counter.textContent--);

