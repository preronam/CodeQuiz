The following project is a Code Quiz, designed to test a beginner's understanding of Javascript Concepts. The rules of the Quiz are as follows:

 1. The user has 30 seconds to answer 4 questions
 2.  For each correct answer, the user's score will increment by 10 points
 3.  If the user is unable to respond to a single question, the test resets to the Homepage, giving the user the option to retake it
 4.  At the end of the Quiz, the user has the option to save their highscore and username
 5.  Only the top 10 user scores will be displayed for others to see

In order to develop this quiz, the following processes were implemented via Javascript:

Game.js File:
1. The questions were captured in a variable
2. The timer was set to 30 seconds
3. The startGame() was created which can: 
   A. Generate questions in a random order from the given list;
   B. Recognize correct responses and increment the score accordingly;

Highscores.js File:

The saveHighScores() was created which can:
1. Save the top 10 scores to local storage in order
2. Retrieve the top 10 scores from local storage in order

End.js File:

1. Maps the top 10 scores in order for users to see
