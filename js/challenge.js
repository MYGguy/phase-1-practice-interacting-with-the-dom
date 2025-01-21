//declarations
const counter = document.querySelector('#counter');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const likesList = document.querySelector('.likes');

const numberScores = {};

//auto counter
setInterval(() => counter.textContent++, 1000);

//plus-minus buttons
plus.addEventListener('click', () => counter.textContent++)
minus.addEventListener('click', () => counter.textContent--);

//like button
heart.addEventListener('click', handleLikes);

function handleLikes() {
    const count = counter.textContent;

    numberScores[count] = 1;
    const li = document.createElement('li');
    li.textContent = `${count} has been liked ${numberScores[count]} time(s)`;
    likesList.appendChild(li);

    console.log(numberScores);
}







// const counter = document.querySelector('#counter');

// setInterval(() => counter.textContent = parseInt(counter.textContent) + 1, 1000);

// document.querySelector('#plus').addEventListener('click', () => counter.textContent = parseInt(counter.textContent) + 1);
// document.querySelector('#minus').addEventListener('click', () => counter.textContent = parseInt(counter.textContent) - 1);

// const likes = {};
// document.querySelector('#heart').addEventListener('click', handleLikes);

// function handleLikes() {
//     const count = counter.textContent;
//     if (likes[count]) {
//         likes[count]++;
//         document.querySelector(`#like-${count}`).textContent = `${count} has been liked ${likes[count]} times.`;
//     } else {
//         likes[count] = 1;
//         const li = document.createElement('li');
//         li.id = `like-${count}`;
//         li.textContent = `${count} has been liked 1 time.`;
//         document.querySelector('.likes').appendChild(li);
//     }
// }


