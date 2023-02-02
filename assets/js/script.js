let scoreCard = document.querySelector('#score_card');
let points = 0;
let score = 0;

// Progress Bar
const progressText = document.getElementById('progressText');
const progressBarFull = document.getElementById('progressBarFull');

//Movie quotes and Quiz Number
let numQuiz = document.querySelector('#numQuiz');
let quote = document.querySelector('#quote');

// Films titles as alternatives
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');

let articleQuestoes = document.querySelector('.movieQuotes');
let filmList = document.querySelector('#filmList');
let introDescription = document.querySelector("#introDescription");

// const q0 = {
//     numQuiz: 0,
//     quote: "Movie",
//     filmA: "Film A",
//     filmB: "Film B",
//     filmC: "Film C",
//     filmD: "Film D",
//     correct: "0",
// };

// const q1 = {
//     numQuiz: 1,
//     quote: "I'm going to make him an offer he can't refuse.",
//     filmA: "The Negotiator",
//     filmB: "The Firm",
//     filmC: "The Godfather",
//     filmD: "The Departed",
//     correct: "The Godfather",
// };

// const q2 = {
//     numQuiz: 2,
//     quote: "You're gonna need a bigger boat.",
//     filmA: "Titanic",
//     filmB: "Jaws",
//     filmC: "The Life Aquatic with Steve Zissou",
//     filmD: "All is Lost",
//     correct: "Jaws",
// };

// const q3 = {
//     numQuiz: 3,
//     quote: "Go ahead, make my day.",
//     filmA: "Sudden Impact",
//     filmB: "Die Hard with a Vengeance",
//     filmC: "Lethal Weapon",
//     filmD: "Groundhog day",
//     correct: "Sudden Impact",
// };

// const q4 = {
//     numQuiz: 4,
//     quote: "Show me the money!",
//     filmA: "Wall Street",
//     filmB: "Moneyball",
//     filmC: "Jerry Maguire",
//     filmD: "The Big Short",
//     correct: "Jerry Maguire",
// };

// const q5 = {
//     numQuiz: 5,
//     quote: "Get busy living or get busy dying.",
//     filmA: "Working Girl",
//     filmB: "The Hustle",
//     filmC: "The Rock",
//     filmD: "The Shawshank Redemption",
//     correct: "The Shawshank Redemption",
// };

// const q6 = {
//     numQuiz: 6,
//     quote: "Here's looking at you, kid.",
//     filmA: "Rear Window",
//     filmB: "Casablanca",
//     filmC: "Scent of a Woman",
//     filmD: "Home Alone",
//     correct: "Casablanca",
// };

// const q7 = {
//     numQuiz: 7,
//     quote: "I feel the need — the need for speed!",
//     filmA: "Fast & Furious",
//     filmB: "Mad Max: Fury Road",
//     filmC: "Gone in 60 Seconds",
//     filmD: "Top Gun",
//     correct: "Top Gun",
// };

// const q8 = {
//     numQuiz: 8,
//     quote: "May the Force be with you.",
//     filmA: "Star Trek Into Darkness",
//     filmB: "Star Wars",
//     filmC: "Interstellar",
//     filmD: "The Dark Knight Rises",
//     correct: "Star Wars",
// };

// const q9 = {
//     numQuiz: 9,
//     quote: "Yo, Adrian!",
//     filmA: "The Blues Brothers",
//     filmB: "Rocky",
//     filmC: "Knives Out",
//     filmD: "Rocketman",
//     correct: "Rocky",
// };

// const q10 = {
//     numQuiz: 10,
//     quote: "Houston, we have a problem.",
//     filmA: "Apollo 13",
//     filmB: "Dallas Buyers Club",
//     filmC: "JFK",
//     filmD: "The Alamo",
//     correct: "Apollo 13",
// };

// const q11 = {
//     numQuiz: 10,
//     quote: "Rosebud.",
//     filmA: "The Constant Gardener",
//     filmB: "The Secret Garden",
//     filmC: "Citizen Kane",
//     filmD: "Gone with the Wind",
//     correct: "Citizen Kane",
// };

// const movieQuotes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q10, q11];

let counting = document.querySelector('#counting');
let total = document.querySelector('#total');

counting.textContent = q1.numQuiz;

let totalMovieQuotes = (movieQuotes.length) - 1;
total.textContent = totalMovieQuotes;

// Setting up the first question
numQuiz.textContent = q1.numQuiz;
quote.textContent = q1.quote;
a.textContent = q1.filmA;
b.textContent = q1.filmB;
c.textContent = q1.filmC;
d.textContent = q1.filmD;

// Setting values for questions
a.setAttribute('value', '1A');
b.setAttribute('value', '1B');
c.setAttribute('value', '1C');
c.setAttribute('value', '1C');
d.setAttribute('value', '1D');

//Next Questions
function nextOuote(nQuiz) {
    counting.textContent = nQuiz
    numQuiz.textContent = movieQuotes[nQuiz].numQuiz;
    quote.textContent = movieQuotes[nQuiz].quote;
    a.textContent = movieQuotes[nQuiz].filmA;
    b.textContent = movieQuotes[nQuiz].filmB;
    c.textContent = movieQuotes[nQuiz].filmC;
    d.textContent = movieQuotes[nQuiz].filmD;
    a.setAttribute('value', nQuiz + 'A');
    b.setAttribute('value', nQuiz + 'B');
    c.setAttribute('value', nQuiz + 'C');
    d.setAttribute('value', nQuiz + 'D');
}

function blockChoices() {
    a.classList.add("blocked");
    b.classList.add("blocked");
    c.classList.add("blocked");
    d.classList.add("blocked");
}

function unblockChoices() {
    a.classList.remove("blocked");
    b.classList.remove("blocked");
    c.classList.remove("blocked");
    d.classList.remove("blocked");
}

function checkResult(nQuiz, filmAnswer) {
    let numberOfQuiz = nQuiz.value;
    let usersAwnser = filmAnswer.textContent;
    let rightFilm = movieQuotes[numberOfQuiz].correct;
    //here!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    console.log(numberOfQuiz);
    //Update the progress bar
    progressBarFull.style.width = `${(numberOfQuiz / totalMovieQuotes) * 100}%`;

    if (usersAwnser == rightFilm) {
        points += 10
    }

    // Score
    score = points;
    scoreCard.textContent = "Points " + score;

    // Block options
    blockChoices();

    setTimeout(function () {
        nextQuiz = numberOfQuiz + 1
        if (nextQuiz > totalMovieQuotes) {
            gameOver();
        }
        else {
            nextOuote(nextQuiz);
        }
    }, 250);

    unblockChoices();
}

function gameOver() {
    numQuiz.textContent = ""
    localStorage.setItem("mostRecentScore", score);
    //Go to the end page
    return window.location.assign("end_game.html");
}


// console.log("Number of Questions " + totalMovieQuotes);
