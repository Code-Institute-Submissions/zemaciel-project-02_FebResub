console.log(connected);

// Objects with questions (the movie quote) and answers (movie titles) for the quiz

const movieQuiz = [
    {
        quote: "I'm going to make him an offer he can't refuse.",
        a: "Wall Street",
        b: "Moneyball",
        c: "The Godfather",
        d: "The Big Short",
        correct: "c",
    },
];


// DOM
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.movie')
const quoteEl = document.getElementById('quote')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')



// Function to set up the quiz
setMovieQuiz()

function setMovieQuiz() {

    const currentMovieQuiz = movieQuiz[currentQuiz]

    quoteEl.innerText = currentMovieQuiz.quote
    a_text.innerText = currentMovieQuiz.a
    b_text.innerText = currentMovieQuiz.b
    c_text.innerText = currentMovieQuiz.c
    d_text.innerText = currentMovieQuiz.d
};



