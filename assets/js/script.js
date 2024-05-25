document.addEventListener("DOMContentLoaded", function() {
 let initialButtons = document.getElementsByClassName("initial-btn");
 console.log(initialButtons);

    for (let initialButton of initialButtons) {
        initialButton.addEventListener("click", function() {

        })
    }
})
/** https://javascript.info/import-export */

//import { quiz } from '/quiz.js';

// DOM variables
const initialButton = document.getElementById('start--btn');
const howToPlayButton = document.getElementById('howtoplay--btn');
const questionArea = document.getElementById('question-area');
const answerButtons = document.getElementsByClassName('answer-btn');
const correctScore = document.getElementById('correct-score');
const wrongScore = document.getElementById('incorrect-score');
const highScore = document.getElementById('high-score');

// Initial variables
let currentQuestion = 0;
let score = 0;
let incorrectScore = 0;

function runQuiz() {
   // function displayQuestion();
}

function displayQuestion() {
    let question = quiz[currentQuestion];
  
    questionArea.innerText = question.question;
    console.log(questionArea);
  }

function howToPlay() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongScore() {

}

function displayHighScore() {

}

function playSounds() {
    
}
