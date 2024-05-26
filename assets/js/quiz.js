/**
 * Array containing questions, answers and correct answers.
 */
const questions =  [
    {
    question: "Lima is the capital of which country?",
    
    choice1: "Argentina",
    choice2: "Bolivia",
    choice3: "Brazil",
    choice4: "Chile", 
    choice5: "Colombia",
    choice6: "Ecuador", 
    choice7: "Guyana", 
    choice8: "Paraguay", 
    choice9: "Peru", 
    choice10: "Suriname",
    choice11: "Uruguay",
    choice12: "Venezuela",
    answer: 9
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

console.log("Hello from quiz");