
// Variables
const submit = document.getElementById("submit");
const startButton = document.getElementById("start-btn");
//const howToPlayButton = document.getElementById("howtoplay--btn");
//const questionArea = document.getElementById("question-area");
const questionElement = document.getElementById("question")
const answerButton = Array.from(document.getElementsByClassName("answer-btn"));
const nextButton = document.getElementById("next-btn");
const correctScore = document.getElementById("correct-score");
const wrongScore = document.getElementById("incorrect-score");
//const highScore = document.getElementById("high-score");
const maxQuestions = 10;
const correctBonus = 1;
let currentQuestionIndex = {};
let score = 0;
let incorrectScore = 0;
let questionCounter = 0;
let availableQuestions = [];
nextButton.innerHTML = "Next";


// Hidden elements before game starts
startButton.style.display ="none";
//questionArea.style.display ="none";

/**
 * Function to allow user to enter a username
 */
 // Username setting
 let usernameSubmitted = false;
 submit.addEventListener('click', enterUsername);

function enterUsername(){
  let usernameInput = document.getElementById("username");
  let username = usernameInput.value.trim();

  if (username === '' || username.length < 3 || username.length > 10)  {
    alert('Please enter a valid username of 3 - 10 characters')

  } else {
    usernameSubmitted = true;
    let label = document.getElementById('label');
    label.innerHTML =  `Good luck, ${username}`;
    usernameInput.style.visibility ="hidden";
    submit.style.visibility = "hidden";   
  }
  // Code to hide and display start button https://stackoverflow.com/questions/8685107/hiding-a-button-in-javascript 
  username !== '' ? startButton.style.display = "block" : startButton.style.visibility ="hidden"

}

// Button event listeners
//startButton.addEventListener('click', startGame());

// Functions
// Followed YouTube Tutorial for basic set up https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=4 
/**
 * This function starts the game
 */
function startGame() {
  questionCounter= 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
}

function getNewQuestion () {
  questionCounter ++;
  // To randomize questions, code used: https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestionIndex = availableQuestions[randomIndex];
  questionElement.innerHTML = currentQuestionIndex.question;

  answerButton.forEach (choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestionIndex['choice' + number];
  });
};


//  return questions[randomIndex];
//}

//function displayQuestion() {
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNum = currentQuestionIndex  + 1;
//   questionElement.innerHTML = currentQuestion.question;
//}

//startButton.addEventListener('click', runQuiz);

//function hiddenButton() {
//  startButton.style.display = "none";
//}

startGame();
