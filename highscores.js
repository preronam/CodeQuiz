// ////STEP 4: SAVING AND RETRIEVING HIGH SCORES FOR USERS///////

const username = document.getElementById( "username");
const saveScoreBtn = document.getElementById( "saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem( "mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [] ;
localStorage.setItem("highScores" , JSON.stringify([]));
console.log(JSON.parse(localStorage.getItem("highScores")));

finalScore.innerText = mostRecentScore;


username.addEventListener( 'keyup' , () => {
  console.log(username.value);
  saveScoreBtn.disabled = !username.value;
});


saveHighScore = (e) => {
 console.log("clicked the button");
  e.preventDefault();

  const score = {
    score : Math.floor( Math.random() * 100),
    name : username.value
  };
//////SAVING ONLY THE TOP 10 HIGH SCORES FOR DISPLAY/////////
 highScores.push(score);
 highScores.sort((a , b) => b.score - a.score);
 highScores.splice(10);
  
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};
