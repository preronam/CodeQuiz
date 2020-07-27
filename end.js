//////MAPPING THE TOP 5 SCORES ON THE END PAGE//////
const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || []; 

highScoresList.innerHTML = highScores
.map(score => {
   return `<li class="high-score"> ${score.name} - ${score.score}</li>`;
})
.join(" ");

