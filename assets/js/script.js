
let message = document.querySelector('#message')
let scoreCard = document.querySelector('#score_card')
let points = 0 
let score = 0 

// MOVIE QUOTE AND NUMBER 
let numQuiz = document.querySelector('#numQuiz') //numQuestao
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
    numQuiz: 0,   
    quote: "Movie",
    filmA: "Film A",
    filmB: "Film B",
    filmC: "Film C",
    filmD: "Film D",
    correct: "0",
}

let q1 = {
        numQuiz: 1,   
        quote: "I'm going to make him an offer he can't refuse.",
        filmA: "The Negotiator",
        filmB: "The Firm",
        filmC: "The Godfather",
        filmD: "The Departed",
        correct: "The Godfather",
    }
    
let q2 = {
        numQuiz: 2,   
        quote: "Here's looking at you, kid.",
        filmA: "Rear Window",
        filmB: "Casablanca",
        filmC: "Scent of a Woman",
        filmD: "Home Alone",
        correct: "Casablanca",
    }
    
let q3 ={
        numQuiz: 3,   
        quote: "Go ahead, make my day.",
        filmA: "Sudden Impact",
        filmB: "Die Hard with a Vengeance",
        filmC: "Lethal Weapon",
        filmD: "Groundhog day",
        correct: "Sudden Impact",
    }

let q4 ={
        numQuiz: 4,   
        quote: "Show me the money!",
        filmA: "Wall Street",
        filmB: "Moneyball",
        filmC: "Jerry Maguire",
        filmD: "The Big Short",
        correct: "Jerry Maguire",
    }

let movieQuotes = [q0, q1, q2, q3, q4] //questoes

let counting = document.querySelector('#counting') //numero
let total  = document.querySelector('#total')

counting.textContent = q1.numQuiz

let totalMovieQuotes = (movieQuotes.length)-1 //totalDeQuestoes
console.log("Number of Questions " + totalMovieQuotes)
total.textContent = totalMovieQuotes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuiz.textContent = q1.numQuiz
quote.textContent   = q1.quote
a.textContent = q1.filmA
b.textContent = q1.filmB
c.textContent = q1.filmC
d.textContent = q1.filmD

// Setting values for questions
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')


// // Next Questions
function nextOuote (nQuiz) { //proximaQuestao
    counting.textContent = nQuiz
    numQuiz.textContent = movieQuotes[nQuiz].numQuiz
    quote.textContent = movieQuotes[nQuiz].quote
    a.textContent = movieQuotes[nQuiz].filmA
    b.textContent = movieQuotes[nQuiz].filmB
    c.textContent = movieQuotes[nQuiz].filmC
    d.textContent = movieQuotes[nQuiz].filmD
    a.setAttribute('value', nQuiz+'A')
    b.setAttribute('value', nQuiz+'B')
    c.setAttribute('value', nQuiz+'C')
    d.setAttribute('value', nQuiz+'D')
    
}


function blockChoices() {
    a.classList.add('blocked')
    b.classList.add('blocked')
    c.classList.add('blocked')
    d.classList.add('blocked')
}

function unblockChoices() {
    a.classList.remove('blocked')
    b.classList.remove('blocked')
    c.classList.remove('blocked')
    d.classList.remove('blocked')
}


function checkResult(nQuiz, filmAnswer) {

    let numberOfQuiz = nQuiz.value  //numeroDaQuestao
    // console.log("Questão " + numberOfQuiz)

    let usersAwnser = filmAnswer.textContent // respostaEscolhida
    //console.log("User's answer " + usersAwnser)

    let rightFilm = movieQuotes[numberOfQuiz].correct //certa
    //console.log("Correct answer " + certa)

    if(usersAwnser == rightFilm) {
        console.log("Right on!")
        // filmAnswerEsta.textContent = "Correta 😊"
        points += 10 // points = points + 10
    } else {
        console.log("Wrong, Dude!")
        //filmAnswerEsta.textContent = "Errada 😢"
    }

   // atualizar placar
   score = points
   scoreCard.textContent = "Points " + score //instrucoes

    // bloquear a escolha de opcoes
    blockChoices()

    setTimeout(function() {
        //filmAnswerEsta.textContent = '...'
        proxima = numberOfQuiz+1

        if(proxima > totalMovieQuotes) {
            console.log('Game Over')
            gameOver()
        } else {
            nextOuote(proxima)
        }
    }, 250)

    unblockChoices()
}

function gameOver() {
    scoreCard.textContent = "Game Over"
    numQuiz.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'point' : pont = 'points'

    quote.textContent   = "You scored " + pontos + " " + pont

    message.textContent = "ou scored " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    // Hide Question
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        points = 0 // zerar placar
        location.reload();
    }, 2000)
}
