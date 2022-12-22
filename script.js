// https://opentdb.com/api.php?amount=10

// id where the question is.
const _question = document.getElementById("question");
// class where the possible answer are.
const _options = document.querySelector(".quiz-options");
// *************
// SCORE BOX Here is manage the the score count
// id correct-score that will show on the html the score of the user
const _correctScore = document.getElementById('correct-score');

// id total-question  that will show on the html the total amount of question
const _totalQuestion = document.getElementById('total-question');
// **********
// Check Ansewr button
const _checkBtn = document.getElementById('check-answer');
// *****
// Play again button
const _playagainBtn = document.getElementById("play-again");
// *************
let correctAnswer = "",correctScore = askedCount = 0, totalQuestion = 10;

const _result = document.getElementById('result');

// AUDIO
var random_sd = Math.floor(Math.random()* 7 );
const _audio_correct_answer = new Audio('sounds/sound_correct_answer/mixkit-arcade-game-opener-222.mp3');
const _audio_incorrect_answer = new Audio('sounds/sound_incorrect_answer/mixkit-'+random_sd+'.mp3');

// ***********
// EVENT LISTENER
 // check answer buttonlistener
 function eventListeners(){
   _checkBtn.addEventListener('click', checkAnswer);
   _playagainBtn.addEventListener('click', restartQuiz);
 }
// ***

// addEventListener the first parameter is the event in a form of string
 // (in this case when the page is loaded ) second parameter a function(what
 // should happen once the first parameter is active ). In conclusion Here
 // once the page is loaded the question are display and the score actualize.
document.addEventListener('DOMContentLoaded', () =>{
  loadQuestion();
  eventListeners();
  _totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
});
// ******************

// loadQuestion function is a fucntion to treat the trivia API
 // the result from the API are in JSON format.
async function loadQuestion(){
  const APIUrl = 'https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple';
  const result = await fetch(APIUrl);
  //  data = the result of the query API are on JSON format.
  const data = await result.json();
  _result.innerHTML = "";
  // console.log(data.results[0]);
  showQuestion(data.results[0]);
}

// Display question and options
function showQuestion(data){
    _checkBtn.disabled = false;
    // fetch the correct answer from the API query that is on JSON format
    correctAnswer = data.correct_answer;
    // variable that fetch the list of incorrect answer from the API query that is on JSON format
    let incorrectAnswer = data.incorrect_answers;
    // optionList will give move randomly the position of the answer, like this
     // won't be always a the same place becase the nature of the API result
    let optionsList = incorrectAnswer;
    // The splice() method adds and/or removes array elements.The splice()
     // method overwrites the original array.

    optionsList.splice(Math.floor(Math.random() *
    incorrectAnswer.length + 1), 0, correctAnswer);//here at the end of the List
        // the correctAnswer is inserted randomly too.

    _question.innerHTML = `${data.question} <br> <span class = "category"> ${data.category} </span>`;
    _options.innerHTML = `
             ${optionsList.map((option, index) => `
                 <li> ${index + 1}. <span>${option}</span> </li>
             `).join('')}
         `;
    selectOption();
    console.log(correctAnswer);
}

// selectOption manager the click from the user when there is a click in one of
 // lis otion as a answer .
function selectOption(){
  _options.querySelectorAll('li').forEach((option) => {
    option.addEventListener('click', () => {
      if(_options.querySelector('.selected')){
        const activeOption = _options.querySelector('.selected');
        activeOption.classList.remove('selected');
      }
      option.classList.add('selected');
    });
  });
}

// Cheching answers
function checkAnswer(){
  // if(selectOption = correctAnswer){console.log("yes")}else{console.log('no')};
  _checkBtn.disabled = true;
  if(_options.querySelector('.selected')){
    let selectedAnswer = _options.querySelector('.selected span').textContent;
    if(selectedAnswer.trim() == HTMLDecode(correctAnswer)){
      correctScore++;
      console.log(this);
      _audio_correct_answer.play();
      result.innerHTML = `<p> <i class = "fas fa-check"></i> GOOD, GOOD! Keep
      going Joel!</p>`;
    }else {
      console.log(random_sd);
      _audio_incorrect_answer.play();
      result.innerHTML = `<p> <i class = "fas fa-times"></i><!-- WRONG!!!!
      WRONG!! This is why nobody listen to you at home!--></p> <p> <small><b>correct Answer:
       </b> ${correctAnswer}</small></p>`;

    }
    checkCount();
  } else {
    result.innerHTML = `<p><i class = "fas fa-question"></i>Please select an option!
    </p> `;
    _checkBtn.disabled = false;
  }
}

// to convert html entities into normal text of correct answer if thre is any.
function HTMLDecode(textString){
  let doc = new DOMParser().parseFromString(textString, 'text/html');
  return doc.documentElement.textContent;
}

// check the counter
function checkCount(){
  askedCount++;
  setCount();
  if(askedCount == totalQuestion){
      result.innerHTML += `<p> Your score is ${correctScore}.</p>`;
      _playagainBtn.style.display = 'block';
      _checkBtn.style.display = 'none';
  }else{
    setTimeout(() =>{
      loadQuestion();
    }, 300);
  }
}
// update the counter
function setCount(){
  _totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
}

// to restart the quiz
function restartQuiz(){
  correctScore = askedCount = 0;
  _playagainBtn.style.display = 'none';
  _checkBtn.style.display = 'block';
  _checkBtn.disabled = false;
  setCount();
  loadQuestion();
}
