//declarations
const counter = document.querySelector('#counter');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const likesList = document.querySelector('.likes');
const buttons = document.querySelectorAll('button');
const submitComment = document.querySelector('#submit');
const commentInput = document.querySelector('#comment-input');
const comments = document.querySelector('#list');

//auto counter
let intervalId = setInterval(() => counter.textContent++, 1000);

//plus-minus buttons
plus.addEventListener('click', () => counter.textContent++)
minus.addEventListener('click', () => counter.textContent--);

//pause-play button functionality
pause.addEventListener('click', pauseFunction);
let playing = true;

function pauseFunction() {
    if (playing) {
        //pause it
        playing = false;
        pause.textContent = ' play ';
        clearInterval(intervalId);

        //disable buttons
        buttons.forEach(button => {
            if (button.id !== 'pause') {
                button.disabled = true;
            }
        })
    } else {
        //resume playing
        playing = true;
        pause.textContent = ' pause ';
        intervalId = setInterval(() => counter.textContent++, 1000);

        //enable buttons
        buttons.forEach(button => {
            if (button.id !== 'pause') {
                button.disabled = false;
            }
        })
    }
};


//LIKER

//like button
heart.addEventListener('click', handleLikes);

const numberScores = {};

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

//commentor
submitComment.addEventListener('click', (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    p.textContent = commentInput.value;
    comments.appendChild(p);
})