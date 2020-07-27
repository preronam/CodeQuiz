//////DOM ELEMENTS//////////////////
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
var scoreText = document.getElementById("score");


//////////APP LOGIC///////////////////////
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Which of the following is not a primitive data type?",
    choice1: "alert",
    choice2: "strings",
    choice3: "booleans",
    choice4: "numbers",
    answer: 1
  },
  {
    question: "How many types of variable declarations are in Javascript?",
    choice1: "4",
    choice2: "2",
    choice3: "5",
    choice4: "3",
    answer: 4
  },
  {
    question: "What does DOM stand for?",
    choice1: "Document or Model",
    choice2: "Document Object Model",
    choice3: "Design of Model",
    choice4: "Document of Modem",
    answer: 2
  },

  {
    question: 'Which of the following is a method of the event object?',
    choice1: "querySelector",
    choice2: "getElementById",
    choice3: "split",
    choice4: "preventDefault",
    answer: 4
  }
]
///////////SETTING A TIMER FOR THE QUIZ/////////////
var count = 30;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Time is Up'; 
    return window.location.assign("index.html");
  }
}, 1000);

////////////CONSTANTS/////////////////////
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

//// START GAME FUNCTION////////////////
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

//////STEP 1: GENERATE QUESTIONS IN A RANDOM ORDER/////////
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    
    let highArray = localStorage.getItem("highscores")


    if(highArray){
     const parsedArray = JSON.parse(highArray)
     parsedArray.push ({})
    }

    
    //GO TO THE HIGH SCORES PAGE AT THE END OF QUESTIONS//
    return window.location.assign("highscores.html");
  }

  questionCounter++;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);

  currentQuestion = availableQuestions[questionIndex];

  question.innerText = currentQuestion.question;

  ////////STEP 2:ENABLE USER TO VIEW ANSWER CHOICES FOR THE QUESTIONS/////////
  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];

  });
  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};
//STEP 3: RECOGNIZING CORRECT ANSWERS AND INCREMENTING SCORE///////
choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    var classToApply = 'incorrect';
    if (selectedAnswer == currentQuestion.answer) {
      classToApply = 'correct';

      if (classToApply === "correct") {
        incrementScore(CORRECT_BONUS);
      }
    }
    getNewQuestion();
  });

});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
}

startGame();











