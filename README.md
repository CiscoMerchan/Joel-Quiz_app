# Quiz App

This web app was created as a Christmas present for a friend who enjoys doing quizzes. The app is built with JavaScript and uses an external API to fetch trivia questions and answers. It displays the questions to the user, allows the user to select an answer, and checks if the answer is correct. The app also includes some event listeners for buttons, an audio file for correct and incorrect answers, and variables and functions to manage the score and display the results.

## Motivation

I created this app to practice my JavaScript skills and learn how to use an external API.

## API

All the questions, possible answers, and correct answers are provided by the Open Trivia Database API, which can be found at https://opentdb.com/api_config.php.

<hr>

![quizzapp](https://user-images.githubusercontent.com/94300302/230825730-2528330b-d499-4a33-91cc-9664bd1703f1.png)


<hr>

## Instructions

To play the quiz, simply visit https://ciscomerchan.github.io/Joel-Quiz_app/. The app will present ten questions for each round. 

* Below the title, you will see a box that indicates the number of questions you have answered correctly and the total number of questions in the quiz. The question and its category will be displayed. You will be presented with four options to choose from. Once you click on one, the background color will change. To confirm your answer, click the 'Check Answer' button.

* If your answer is correct, you will be presented with a message and an audio sound. If your answer is incorrect, you will receive a message and the correct answer will be displayed.

* After ten questions, the 'Check Answer' button will change its message to 'Play Again.' If you click that button, the quiz will start again from zero.

## Learning Goals

This project allowed me to practice:

- Requesting data from an external API
- Working with vanilla JavaScript
- Implementing app functionality
- Understanding the app workflow and lifecycle

## Improvements

Some improvements that could be made to the app include:

- Allowing the user to choose the number of questions, difficulty level, or categories.

