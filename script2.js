// console.log(connected);

// let quizData = [
//     {
//         title: "I'm going to make him an offer he can't refuse.",
//         a: "The Negotiator",
//         b: "The Firm",
//         c: "The Godfather",
//         d: "The Departed",
//         correct: "c",
//     },
//     {
//         title: "Here's looking at you, kid.",
//         a: "Rear Window",
//         b: "Casablanca",
//         c: "Scent of a Woman",
//         d: "Home Alone",
//         correct: "b",
//     },
//     {
//         title: "Go ahead, make my day.",
//         a: "Sudden Impact",
//         b: "Die Hard with a Vengeance",
//         c: "Lethal Weapon",
//         d: "Groundhog day",
//         correct: "a",
//     },
//     {
//         title: "Show me the money!",
//         a: "Wall Street",
//         b: "Moneyball",
//         c: "Jerry Maguire",
//         d: "The Big Short",
//         correct: "c",
//     },
// ];


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

let points = 0;
let score = 0;


let movieQuote = {
    quote: 'Show me the money',
    filmTitles: ['Wall Street', 'The Firm', 'The Godfather', 'The Departed'],
    correctAnswer: 1
  };
  let titleDiv = document.getElementById('quote');
  titleDiv.textContent = movieQuote.quote;



  function showQuote(q) {
    
    let titleDiv = document.getElementById('quote');
    titleDiv.textContent = movieQuote.quote;
    let films = document.querySelectorAll('.film');
 
    
    films.forEach(function(element, index){
        element.textContent = q.filmTitles[index];
        element.addEventListener('click', function(){
            // element.textContent = "Yes"
            if(q.correctAnswer == index) {
                console.log('Right!');
            }
            else {
                console.log('Wrong, dude!'); 
            }
        })
     });
  }

  showQuote(movieQuote);

  let btn = document.getElementById('btn'); 

  btn.addEventListener('click', function(){
    console.log('Clicou!');

  })