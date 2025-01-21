const counter = document.querySelector('#counter');

setInterval(() => counter.textContent++, 1000);

document.querySelector('#plus').addEventListener('click', () => counter.textContent++)
document.querySelector('#minus').addEventListener('click', () => counter.textContent--)