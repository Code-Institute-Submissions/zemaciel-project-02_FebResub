
let message = document.querySelector('#message')
let points = 0 
let score = 0 

// MOVIE QUOTE AND NUMBER 
let numQuiz = document.querySelector('#numQuiz') //numQestao
let quote   = document.querySelector('#quote') //pergunta

// FILM TITLES
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// LIST WITH FILM TITLES
let articleQuestoes = document.querySelector('.movieQuotes') //questoes
// ol li com as alternativas
let filmList = document.querySelector('#filmList') //alternativas


let q0 = {
        numQuiz: 1,   
        quote: "I'm going to make him an offer he can't refuse.",
        filmA: "The Negotiator",
        filmB: "The Firm",
        filmC: "The Godfather",
        filmD: "The Departed",
        correct: "filmC",
    }
    
let q2 =
    {
        numQuiz: 2,   
        quote: "Here's looking at you, kid.",
        filmA: "Rear Window",
        filmB: "Casablanca",
        filmC: "Scent of a Woman",
        filmD: "Home Alone",
        correct: "filmB",
    }
    
let q3 ={
        numQuiz: 3,   
        quote: "Go ahead, make my day.",
        filmA: "Sudden Impact",
        filmB: "Die Hard with a Vengeance",
        filmC: "Lethal Weapon",
        filmD: "Groundhog day",
        correct: "filmA",
    }

let q4 ={
        numQuiz: 4,   
        quote: "Show me the money!",
        filmA: "Wall Street",
        filmB: "Moneyball",
        filmC: "Jerry Maguire",
        filmD: "The Big Short",
        correct: "filmC",
    }

let movieQuotes = [q0, q1, q2, q3, q4]

let counting = document.querySelector('#counting') //numero
let total  = document.querySelector('#total')

counting.textContent = q1.numQuiz

let totalmovieQuotes = (movieQuotes.length)-1
console.log("Number of Questions " + totalmovieQuotes)
total.textContent = totalmovieQuotes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuiz.textContent = q1.numQuiz
quote.textContent   = q1.quote
a.textContent = q1.filmA
b.textContent = q1.filmB
c.textContent = q1.filmC
c.textContent = q1.filmD



// // Next Questions
// function proximaQuestao(nQuestao) {
//     numero.textContent = nQuestao
//     numQuestao.textContent = questoes[nQuestao].numQuestao
//     pergunta.textContent   = questoes[nQuestao].pergunta
//     a.textContent = questoes[nQuestao].alternativaA
//     b.textContent = questoes[nQuestao].alternativaB
//     c.textContent = questoes[nQuestao].alternativaC
//     a.setAttribute('value', nQuestao+'A')
//     b.setAttribute('value', nQuestao+'B')
//     c.setAttribute('value', nQuestao+'C')
// }









// // // DOM
// let quiz = document.getElementById('quiz')
// let answerEls = document.querySelectorAll('.film')
// let questionEl = document.getElementById('title')
// let a_text = document.getElementById('a')
// let b_text = document.getElementById('b')
// let c_text = document.getElementById('c')
// let d_text = document.getElementById('d')



// // // Function to set up the quiz
// setMovieQuiz()

// function setMovieQuiz() {

//     const currentMovieQuiz = movieQuiz[currentQuiz]

//     quoteEl.innerText = currentMovieQuiz.title
//     a_text.innerText = currentMovieQuiz.a
//     b_text.innerText = currentMovieQuiz.b
//     c_text.innerText = currentMovieQuiz.c
//     d_text.innerText = currentMovieQuiz.d
// };






// let points = 0;
// let score = 0;
// let numQuiz = document.querySelector('#numQuiz')

// let movieQuote = {
//     numQuiz: 1,
//     quote: 'Show me the money',
//     filmTitles: ['Wall Street', 'The Firm', 'The Godfather', 'The Departed'],
//     correctAnswer: 1
//   };


//   function showQuote(q) {
    
//     let quizNumbers = document.getElementById('numQuiz');
//     quizNumbers.textContent = movieQuote.numQuiz;
//     let titleDiv = document.getElementById('quote');
//     titleDiv.textContent = movieQuote.quote;
//     let films = document.querySelectorAll('.film');
 
    
//     films.forEach(function(element, index){
//         element.textContent = q.filmTitles[index];
//         element.addEventListener('click', function(){
//             // element.textContent = "Yes"
//             if(q.correctAnswer == index) {
//                 console.log('Right!');
//             }
//             else {
//                 console.log('Wrong, dude!'); 
//             }
//         })
//      });
//   }

//   showQuote(movieQuote);

//   let btn = document.getElementById('btn'); 

//   btn.addEventListener('click', function(){
//     console.log('Clicou!');

//   })