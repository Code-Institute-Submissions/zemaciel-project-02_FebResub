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

// let articleMovieQuotes = document.querySelector(".movieQuotes");
let  scoreColorBg = document.querySelector(".applyColor");
// let filmList = document.querySelector('#filmList');
// let introDescription = document.querySelector("#introDescription");


let counting = document.querySelector('#counting');
let total = document.querySelector('#total');

// counting.textContent = q1.numQuiz;

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
    counting.textContent = nQuiz;
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

// Show the user if his awnser was correct or incorrect
function correctClass (){
    scoreColorBg.classList.remove('incorrect');
    scoreColorBg.classList.add('correct');
}

function incorrectClass (){
    scoreColorBg.classList.remove('correct');
    scoreColorBg.classList.add('incorrect');
}

function removeClass (){
    scoreColorBg.classList.remove('correct');
    scoreColorBg.classList.remove('incorrect');
}

// setAttribute('src','caminho-da-imagem')

function checkResult(nQuiz, filmAnswer) {
    let numberOfQuiz = nQuiz.value;
    let usersAwnser = filmAnswer.textContent;
    let rightFilm = movieQuotes[numberOfQuiz].correct;

    //Update the progress bar
    progressBarFull.style.width = `${(numberOfQuiz / totalMovieQuotes) * 100}%`;


    if (usersAwnser == rightFilm) {
        points += 10;
        correctClass();
    }
    else {
        incorrectClass();
    }

    setTimeout(() => {
        removeClass();
    }, 1000);


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
    }, 1000);

    unblockChoices();
}

function gameOver() {
    numQuiz.textContent = ""
    localStorage.setItem("mostRecentScore", score);
    //Go to the end page
    return window.location.assign("end_game.html");
}


// console.log("Number of Questions " + totalMovieQuotes);
