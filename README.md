The following project is a Code Quiz, designed to test a beginner's understanding of Javascript Concepts. The rules of the Quiz are as follows:

--> The user has 30 seconds to answer 4 questions
--> For each correct answer, the user's score will increment by 10 points
--> If the user is unable to respond to a single question, the test resets to the Homepage, giving the user the option to retake it
--> At the end of the Quiz, the user has the option to save their highscore and username
--> Only the top 10 user scores will be displayed for others to see

In order to develop this quiz, the following processes were implemented via Javascript:

Game.js File:
A. The questions were captured in a variable
B. The timer was set to 30 seconds
C. The startGame() was created which can: 
   -Generate questions in a random order from the given list
   -Recognize correct responses and increment the score accordingly 

highscores.js File:

The saveHighScores() was created which can:
A. Save the top 10 scores to local storage in order
B. Retrieve the top 10 scores from local storage 

end.js File:

A. Maps the top 10 scores in order for users to see
