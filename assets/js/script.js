/** Followed YouTube Tutorial for basic set up https://www.youtube.com/watch?v=PBcqGxrr9g8 */

const questions = [{
  question: "Lima is the capital of which country?",
  answers: [
  {text: "Argentina", correct: false}, 
  {text: "Bolivia", correct: false},
  {text: "Brazil", correct: false},
  {text: "Chile", correct: false},
  {text: "Colombia", correct: false},
  {text: "Ecuador", correct: false},
  {text: "Guyana", correct: false},
  {text: "Paraguay", correct: false},
  {text: "Peru", correct: true},
  {text: "Suriname", correct: false},
  {text: "Uruguay", correct: false},
  {text: "Venezuela", correct: false},
  ]
},
{
  question: 'Buenos Aires is the capital of which country?',
  answers: [
      {text: "Argentina", correct: true}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: false},
      {text: "Chile", correct: false},
      {text: "Colombia", correct: false},
      {text: "Ecuador", correct: false},
      {text: "Guyana", correct: false},
      {text: "Paraguay", correct: false},
      {text: "Peru", correct: false},
      {text: "Suriname", correct: false},
      {text: "Uruguay", correct: false},
      {text: "Venezuela", correct: false},
      ]
},
{
  question: 'Caracas is the capital of which country?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: false},
      {text: "Chile", correct: false},
      {text: "Colombia", correct: false},
      {text: "Ecuador", correct: false},
      {text: "Guyana", correct: false},
      {text: "Paraguay", correct: false},
      {text: "Peru", correct: false},
      {text: "Suriname", correct: false},
      {text: "Uruguay", correct: false},
      {text: "Venezuela", correct: true},
      ]
},
{
  question: 'La Paz is the capital of which country?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: true},
      {text: "Brazil", correct: false},
      {text: "Chile", correct: false},
      {text: "Colombia", correct: false},
      {text: "Ecuador", correct: false},
      {text: "Guyana", correct: false},
      {text: "Paraguay", correct: false},
      {text: "Peru", correct: false},
      {text: "Suriname", correct: false},
      {text: "Uruguay", correct: false},
      {text: "Venezuela", correct: false},
      ]
},
{
  question: 'Bogota is the capital of which country?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: false},
      {text: "Chile", correct: false},
      {text: "Colombia", correct: true},
      {text: "Ecuador", correct: false},
      {text: "Guyana", correct: false},
      {text: "Paraguay", correct: false},
      {text: "Peru", correct: false},
      {text: "Suriname", correct: false},
      {text: "Uruguay", correct: false},
      {text: "Venezuela", correct: false},
      ]
},
{
  question: 'Asuncion is the capital of which country?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: false},
      {text: "Chile", correct: false},
      {text: "Colombia", correct: false},
      {text: "Ecuador", correct: false},
      {text: "Guyana", correct: false},
      {text: "Paraguay", correct: true},
      {text: "Peru", correct: false},
      {text: "Suriname", correct: false},
      {text: "Uruguay", correct: false},
      {text: "Venezuela", correct: false},
      ]
}
]

// DOM variables
const submit = document.getElementById("submit");
const startButton = document.getElementById("start-btn");
const howToPlayButton = document.getElementById("howtoplay--btn");
const questionArea = document.getElementById("question-area");
const questionElement = document.getElementById("question")
const answerButton = document.getElementsByClassName("answer-btn");
const nextButton = document.getElementById("next-btn");
const correctScore = document.getElementById("correct-score");
const wrongScore = document.getElementById("incorrect-score");
const highScore = document.getElementById("high-score");



 // Username setting
let usernameSubmitted = false;
submit.addEventListener('click', enterUsername);
startButton.style.display ="none";

/**
 * Function to allow user to enter a username
 */

function enterUsername(){
  let usernameInput = document.getElementById("username");
  let username = usernameInput.value;

  if (username === '')  {
    alert('Please enter your name!')

  } else {
    usernameSubmitted = true;
    let label = document.getElementById('label');
    label.innerHTML =  `Good luck, ${username}`;
    usernameInput.style.visibility ="hidden";    
  }

  if (username !== '') {
    startButton.style.display = "block";
  } else {
    startButton.style.visibility ="hidden";
  }
}
 


// Initial variables
let currentQuestionIndex = 0;
let score = 0;
let incorrectScore = 0;
nextButton.innerHTML = "Next";

// Button event listeners
initialButton.addEventListener('click', runQuiz());

// Functions

function runQuiz() {
  displayQuestion();
}

// To randomize questions, code used: https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript
function getRandomQuestion() {
  let randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function displayQuestion() {
   let currentQuestion = questions[currentQuestionIndex];
   let questionNum = currentQuestionIndex  + 1;
   questionElement.innerHTML = currentQuestion.question;
}

initialButton.addEventListener('click', runQuiz);

function hiddenButton() {
  startButton.style.display = "none";
}