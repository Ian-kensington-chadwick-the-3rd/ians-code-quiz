var button = document.querySelector("#btn")
var timerEl = document.getElementById('countdown')
var questionArray = document.getElementById('question')
const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startGame)
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Is a turnip a vegtable or a fruit',
    answers: [
      { text: 'vegtable', correct: true },
      { text: 'fruit', correct: false }
    ]
  },
  {
    question: 'What is an array?',
    answers: [
      { text: 'A list of strings or numbers', correct: true },
      { text: 'A string', correct: false },
      { text: 'A letter', correct: true },
      { text: 'A function', correct: true }
    ]
  },
  {
    question: 'what is a boolean',
    answers: [
      { text: 'A string', correct: false },
      { text: 'A true/false', correct: true },
      { text: 'A potato chip', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Is a coconut a vegtable or a fruit ?',
    answers: [
      { text: 'vegtable', correct: false },
      { text: 'fruit', correct: true }
    ]
  }
]























// function startGame() {
// console.log('started')
// startButton.classList.add('hide')
// shuffledQuestions = questions.sort(() => Math.random()- .5)
// currentQuestionIndex = 0
// questionContainerElement.classList.remove('hide')
// setNextQuestion()

// }

// function setNextQuestion(){
//    resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion(question){
// questionElement.innerText = question.question
// question.answers.forEach(answer => {
//     const button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add('btn')
//     if(answer.correct){
//         button.dataset.correct = answer.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(button)
//     })
// }

// function resetState(){
//     nextButton.classList.add('hide')
//     while (answerButtonsElement.firstChild){
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        
//     }
// }


// function selectAnswer(e) {
// const selectedButton = e.target
// const correct = selectedButton.dataset.correct
// setStatusClass(document.body, correct)
// Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
// })
// nextButton.classList.remove('hide')

// }
// function setStatusClass(element, correct){
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//     }
// }

// function clearStatusClass(element){
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }
// const questions =[
// {
//     question: "What is 2 +2",
//     answers:[
//      {text: '4', correct: true },   
//      {text: '22', correct: false},
//     ]
// }
// ]






























// first I need to have an array for answer
// Ill make two answer arrays true of false
// second I need the questions
// the questions will be an if esle format
// the time will be decreased every time I get an answer incorrect
// I need too add an event listener every time they click an answer
// I need too add an persistant storage for a total score when the person is finish it will the go under highscore




// button.addEventListener("click", function() {countdown()});


// function countdown() {
//     var timeLeft = 60;
//     var timeInterval = setInterval(function () {
//       if (timeLeft > 1) {
//         timerEl.textContent = timeLeft;
//         timeLeft--;
//       } else if (timeLeft === 1) {
//         timerEl.textContent = timeLeft;
//         timeLeft--;
//       } else {
//         timerEl.textContent = '';
//         clearInterval(timeInterval);
//       }
//     }, 1000);
//   }