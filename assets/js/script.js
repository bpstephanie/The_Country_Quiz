/** Followed YouTube Tutorial for basic set up https://www.youtube.com/watch?v=PBcqGxrr9g8 */

/**
 * Array containing questions, answers and correct answers.
 */
const questions =  [{
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
},
{
  question: 'Brasilia is the capital of which country?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: true},
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
  question: 'Quito is the capital of which country?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: false},
      {text: "Chile", correct: false},
      {text: "Colombia", correct: false},
      {text: "Ecuador", correct: true},
      {text: "Guyana", correct: false},
      {text: "Paraguay", correct: false},
      {text: "Peru", correct: false},
      {text: "Suriname", correct: false},
      {text: "Uruguay", correct: false},
      {text: "Venezuela", correct: false},
      ]
},
{
  question: 'Georgetown is the capital of which country?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: false},
      {text: "Chile", correct: false},
      {text: "Colombia", correct: false},
      {text: "Ecuador", correct: false},
      {text: "Guyana", correct: true},
      {text: "Paraguay", correct: false},
      {text: "Peru", correct: false},
      {text: "Suriname", correct: false},
      {text: "Uruguay", correct: false},
      {text: "Venezuela", correct: false},
      ] 
},
{
  question: 'Paramaribo is the capital of which country?',
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
      {text: "Suriname", correct: true},
      {text: "Uruguay", correct: false},
      {text: "Venezuela", correct: false},
      ]
},
{
  question: 'Montevideo is the capital of which country?',
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
      {text: "Uruguay", correct: true},
      {text: "Venezuela", correct: false},
      ]  
},
{
  question: 'Santiago is the capital of which country?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: false},
      {text: "Chile", correct: true},
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
  question: 'Easter Island belongs to which country?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: false},
      {text: "Chile", correct: true},
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
  question: 'In which country will you find Machu Picchu?',
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
  question: 'Pinochet was the president of which country?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: false},
      {text: "Chile", correct: true},
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
  question: 'Georgetown is the capital of which country?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: false},
      {text: "Chile", correct: false},
      {text: "Colombia", correct: false},
      {text: "Ecuador", correct: false},
      {text: "Guyana", correct: true},
      {text: "Paraguay", correct: false},
      {text: "Peru", correct: false},
      {text: "Suriname", correct: false},
      {text: "Uruguay", correct: false},
      {text: "Venezuela", correct: false},
      ] 
},
{
  question: 'Fujimori was a dictator in which country?',
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
  question: 'Which country is the most biodiverse in the world?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: true},
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
  question: 'Which country was named after Christoper Columbus?',
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
  question: 'Which country has won the Football World Cup the most times?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: true},
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
  question: "Which country is the world's leading source of emeralds?",
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
  question: 'Which country is the largest producer of coffee in the world?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: true},
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
  question: 'In which country is Dutch the official language',
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
      {text: "Suriname", correct: true},
      {text: "Uruguay", correct: false},
      {text: "Venezuela", correct: false},
      ]
},
{
  question: 'In Suriname and which other country do you drive on the left-hand side of the road?',
  answers: [
      {text: "Argentina", correct: false}, 
      {text: "Bolivia", correct: false},
      {text: "Brazil", correct: false},
      {text: "Chile", correct: false},
      {text: "Colombia", correct: false},
      {text: "Ecuador", correct: false},
      {text: "Guyana", correct: true},
      {text: "Paraguay", correct: false},
      {text: "Peru", correct: false},
      {text: "Suriname", correct: false},
      {text: "Uruguay", correct: false},
      {text: "Venezuela", correct: false},
      ] 
},
{
  question: 'Where is Pisco from?',
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
  question: 'Where do potatoes originate?',
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
  question: 'Which country has the largest known oil reserves?',
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

// Hidden elements before game starts
startButton.style.display ="none";
questionArea.style.display ="none";

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
  // Code to hide and display start button https://stackoverflow.com/questions/8685107/hiding-a-button-in-javascript 
  username !== '' ? startButton.style.display = "block" : startButton.style.visibility ="hidden"

}

// Initial variables
let currentQuestionIndex = 0;
let score = 0;
let incorrectScore = 0;
nextButton.innerHTML = "Next";

// Button event listeners
startButton.addEventListener('click', runQuiz());

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