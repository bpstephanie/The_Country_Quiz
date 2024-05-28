// Variables
const submit = document.getElementById("submit");
const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const answerButton = Array.from(document.getElementsByClassName("answer-btn"));
const correctScore = document.getElementById("correct-score");
const wrongScoreText = document.getElementById("incorrect-score");
const questionCounterText = document.getElementById('questionCounter');
const endScreenContainer = document.getElementById('endscreen-container');

const maxQuestions = 10;
let currentQuestionIndex = {};
let acceptingAnswers = false;
let score = 0;
let wrongScore = 0;
let questionCounter = 0;
let availableQuestions = [];

// Used this code to implement audio feedback to users https: //noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984#:~:text=The%20simplest%20way%20to%20add,starts%20playing%20the%20current%20audio.
let winSound = document.querySelector('#win-sound');
let loseSound = document.querySelector('#lose-sound');

// Hidden elements before game starts
startButton.style.display = "none";

let usernameSubmitted = false;
submit.addEventListener('click', enterUsername);

/**
 * Function to allow user to enter a username
 */
function enterUsername() {
  let usernameInput = document.getElementById("username");
  let username = usernameInput.value.trim();


  if (username === '' || username.length < 3 || username.length > 10 ||/\d/.test(username)) {
    alert('Please enter a valid username of 3 - 10 letters');
    return;
  } else {
    usernameSubmitted = true;
    let label = document.getElementById('label');
    label.innerHTML = `Good luck, ${username}`;
    usernameInput.style.visibility = "hidden";
    submit.style.visibility = "hidden";
    startButton.style.display = "block"
  }
}

// Followed YouTube Tutorial for basic set up https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=4 
/**
 * This function starts the game
 */
function startGame() {
  questionCounter = 0;
  score = 0;
  wrongScore = 0;
  correctScore.innerHTML = score;
  wrongScoreText.innerHTML = wrongScore;
  availableQuestions = [...questions];
  getNewQuestion();
  startButton.innerHTML = "RESTART";
}

/**
 * This function gets a random new question
 */
function getNewQuestion() {

  if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    return toEndScreen();
  }

  questionCounter++;
  // Lets user know what question number they are on
  questionCounterText.innerHTML = questionCounter + "/" + maxQuestions;

  // To randomize questions, code used: https://www.shecodes.io/athena/10246-how-to-show-random-questions-in-a-quiz-using-javascript
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestionIndex = availableQuestions[randomIndex];
  questionElement.innerHTML = currentQuestionIndex.question;

  answerButton.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestionIndex['choice' + number];
  });

  availableQuestions.splice(randomIndex, 1);
  acceptingAnswers = true;
};

answerButton.forEach(choice => {
  choice.addEventListener("click", event => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const correctAnswer = currentQuestionIndex.answer;

    // Highlights the button border and text color green if correct and red if incorrect 
    if (selectedAnswer == correctAnswer) {
      winSound.play();
      selectedChoice.style.borderColor = "green";
      selectedChoice.style.color = "green";
      incrementScore();
    } else {
      loseSound.play();
      selectedChoice.style.borderColor = "red";
      selectedChoice.style.color = "red";
      console.log(answerButton[currentQuestionIndex.answer]);
      incrementWrongScore();
    }

    setTimeout(() => {
      selectedChoice.style.borderColor = "";
      selectedChoice.style.color = "";
      getNewQuestion();
    }, 2000);

  });
});

/**
 * This function increases correct answers
 */
function incrementScore() {
  score += 1;
  correctScore.innerText = score;
}

/**
 * This function increases wrong answers
 */
function incrementWrongScore() {
  wrongScore += 1;
  wrongScoreText.innerText = wrongScore;
}

/**
 * This function shows the end screen
 */
function toEndScreen() {
  if (score >= 6) {
    questionElement.innerText = `You scored ${score}/10. \n Well done!`;
  } else {
    questionElement.innerText = `You scored ${wrongScore} incorrect answers.\n Bad luck, better luck next time!`;
  }
}

startButton.addEventListener("click", function () {
  startGame();
});