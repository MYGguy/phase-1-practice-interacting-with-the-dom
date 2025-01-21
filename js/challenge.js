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

//liker functionality
function handleLikes() {
    const count = counter.textContent;

    //if it was already liked
    if (numberScores[count]) {
        numberScores[count]++;
        document.querySelector(`#like-${count}`).textContent = `${count} has been liked ${numberScores[count]} times`
    } else {
        //otherwise create the <li>
        numberScores[count] = 1;
        const li = document.createElement('li');
        li.id = `like-${count}`;
        li.textContent = `${count} has been liked 1 time`;
        likesList.appendChild(li);
    }
}