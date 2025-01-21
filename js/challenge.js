const counter = document.querySelector('#counter');

setInterval(() => counter.textContent++, 1000);

document.querySelector('#plus').addEventListener('click', () => counter.textContent++)
document.querySelector('#minus').addEventListener('click', () => counter.textContent--)

document.querySelector('#heart').addEventListener('click', () => {
    document.querySelector('.likes').innerHTML += `<li>${counter.textContent} has been liked ${'##'
        } times.</li>`
})