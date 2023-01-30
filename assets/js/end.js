const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

//if there is no input of user name, buttom is disabled
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/highscores.html');
};

let thisGameScore = parseInt(mostRecentScore);
console.log("This is the end " + mostRecentScore);
console.log(typeof (mostRecentScore))
console.log(thisGameScore + (typeof (thisGameScore)))

if (thisGameScore <= 20) {
    console.log("brutal");
}
else if (thisGameScore >= 30 && thisGameScore <= 80) {
    console.log("Thanks for playing")
}
else {
    console.log("Excelent. /n Hasta la vista baby")
}