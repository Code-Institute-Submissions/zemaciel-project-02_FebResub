const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

//if there is no input of user name, buttom is disabled
username.addEventListener("keyup", () => {
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

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("highscores.html");
};

// check palyers score
let thisGameScore = parseInt(mostRecentScore);

//custom feedback based on score
feedbackTxtResul = "";

if (thisGameScore <= 40) {
    feedbackTxtResul = "Bad Luck! Try again?";
    //feedback image for low score
    const imgResultOk = document.createElement("img");
    imgResultOk.src = "assets/images/result_bummer.gif";
    document.getElementById("feedbackImage").appendChild(imgResultOk);
} else if (thisGameScore >= 50 && thisGameScore <= 70) {
    feedbackTxtResul = "Thanks for playing";
    // feedback image for avarage score
    const imgResultOk = document.createElement("img");
    imgResultOk.src = "assets/images/result_ok.gif";
    document.getElementById("feedbackImage").appendChild(imgResultOk);
} else {
    feedbackTxtResul = "Wow. You're a film buff!";
    // feedback image for greater scores
    const imgResultOk = document.createElement("img");
    imgResultOk.src = "assets/images/result_great.gif";
    document.getElementById("feedbackImage").appendChild(imgResultOk);
}

feedbackMessage = document.getElementById("feedbackMessage");
txt = document.createTextNode(feedbackTxtResul);
feedbackMessage.appendChild(txt);
