//Get Elements
const startScreen = document.querySelector("#start");
const startBtn = document.querySelector("#start-btn");
const infoBox = document.querySelector(".info-box");
const exitBtn = document.querySelector(".quit");
const continueBtn = document.querySelector(".restart");
const quizBox = document.querySelector(".quiz-box");
const endBox = document.querySelector("#quiz-end");
const submitBtn = document.querySelector("#save-score");
const initialsText = document.querySelector("#initials");
var existing = localStorage.getItem('results');
existing = existing ? existing.split(',') : [];
var queCount = 0;
var counter = 60;
var score = 0;

//If Continue Button Clicked
continueBtn.onclick = ()=>{
    infoBox.classList.add("hide");
    startScreen.classList.remove("hide");
};

//If Start Button Clicked
startBtn.onclick = () => {
  function countdown(){
      counter--;
          if (counter === 0){
              clearInterval(startCountdown)
              quizEnd()
          };
  let timeRem = document.querySelector("#time-rem");
  let timeTag = "<span>Time Left: "+ counter +"</span>"
  timeRem.innerHTML = timeTag;
  };
  var startCountdown = setInterval(countdown, 1000);
  startScreen.classList.add("hide");
  quizBox.classList.remove("hide");
  showQuestions(queCount)
};

//Get Questions and Options from Array
function showQuestions(index){
  if (queCount>=10){
      return;
  }
  const queText = document.querySelector(".que-text");
  const optionList = document.querySelector("#choices");
  let queTag = "<span>"+ questions[index].numb + ". "+ questions[index].question +"</span>";
  let optionTag = '<div class="option">'+ questions[index].options[0] + '<span></span></div>'
                  + '<div class="option">'+ questions[index].options[1] + '<span></span></div>'
                  + '<div class="option">'+ questions[index].options[2] + '<span></span></div>'
                  + '<div class="option">'+ questions[index].options[3] + '<span></span></div>'
  queText.innerHTML = queTag;
  optionList.innerHTML = optionTag;
  const option = optionList.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
      option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

//Show Next Question When Question is answered
function optionSelected(answer){
  if (queCount>=10){
      return;
  }
  let userAns = answer.textContent;
  let correctAns = questions[queCount].answer;
  if(userAns == correctAns){
      console.log("Answer is Correct");
      const response = document.querySelector("#response");
      response.innerHTML = '<div id="response"><span>Correct!</span></div>';
      setTimeout(nextQuestion, 500)
      score += 1

  }else{
      console.log("Answer is Wrong");
      const response = document.querySelector("#response");
      response.innerHTML = '<div id="response"><span>Wrong!</span></div>';
      setTimeout(nextQuestion, 500)
      counter -= 5
  }
}
function nextQuestion(){
  queCount++;
  if(queCount == 10){
      
      quizEnd()
  };
  showQuestions(queCount);
  const response = document.querySelector("#response");
  response.innerHTML = '<div id="response"><span></span></div>';
  }

//End Quiz if All Questions Completed or Timer Runs out
function quizEnd(){
  quizBox.classList.add("hide");
  endBox.classList.remove("hide");
  const scoreText = document.querySelector(".score");
  let scoreTag = '<h3 class="score"> Your score was '+ score +' out of 10!</h3>';
  scoreText.innerHTML = scoreTag; 
}
//Submit Initials
submitBtn.onclick = () => {
  let initials = initialsText.value;
  //Store Initials and Score in Local Storage
  var resultsDataObj = {
      initials: initials,
      score: score
  }
  localStorage.setItem((localStorage.length+1), JSON.stringify(resultsDataObj));
  initialsText.value = ""
  location.reload();
}
























































































// var button = document.querySelector("#btn")
// var timerEl = document.getElementById('countdown')
// var questionArray = document.getElementById('question')
// const startButton = document.getElementById('start-btn')
// startButton.addEventListener('click', startGame)
// const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('question-container')
// let shuffledQuestions, currentQuestionIndex
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')

// var timer;

// startButton.addEventListener('click', startGame);
// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++
//   setNextQuestion();
  
// })

// function startGame() {
//   startButton.classList.add('hide');
//   shuffledQuestions = questions.sort(() => Math.random() - .5);
//   currentQuestionIndex = 0
//   questionContainerElement.classList.remove('hide');
//   setNextQuestion();
//   countdown();
// }

// function setNextQuestion() {
//   resetState()
//   showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion(question) {
//   questionElement.innerText = question.question
//   question.answers.forEach(answer => {
//     const button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add('btn')
//     if (answer.correct) {
//       button.dataset.correct = answer.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(button)
//   })
// }

// function resetState() {
//   clearStatusClass(document.body);
//   nextButton.classList.add('hide');
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//     endQuiz();
// }
        
// }

// function selectAnswer(e) {
//     const selectedButton = e.target
//   const correct = selectedButton.dataset.correct
//   setStatusClass(document.body, correct);
//   Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
//   })
//   if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide');
//   } else {
//     startButton.innerText = ('Restart');
//     startButton.classList.remove('hide');
//   }
// }

// function setStatusClass(element, correct) {
//   clearStatusClass(element);
//   if (correct) {
//     element.classList.add('correct');
//   } else {
//     element.classList.add('wrong');
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove('correct');
//   element.classList.remove('wrong');
// }

// const questions = [
//   {
//     question: 'Is a turnip a vegtable or a fruit',
//     answers: [
//       { text: 'vegtable', correct: true },
//       { text: 'fruit', correct: false },
//     ]
//   },
//   {
//     question: 'What is an array?',
//     answers: [
//       { text: 'A list of strings or numbers', correct: true },
//       { text: 'A string', correct: false },
//       { text: 'A letter', correct: true },
//       { text: 'A function', correct: true },
//     ]
//   },
//   {
//     question: 'what is a boolean',
//     answers: [
//       { text: 'A string', correct: false },
//       { text: 'A true/false', correct: true },
//       { text: 'A potato chip', correct: false },
//       { text: 'IDK', correct: false },
//     ]
//   },
//   {
//     question: 'Is a coconut a vegtable or a fruit ?',
//     answers: [
//       { text: 'vegtable', correct: false },
//       { text: 'fruit', correct: true },
//     ]
//   }
// ]

// var timerEl = document.getElementById('countdown');
// // button.addEventListener("click", function() {countdown()});

// function countdown() {
//     var timeLeft = 20;
//     var timeInterval = setInterval(function () {
//       if (timeLeft > 0) {
//         timerEl.textContent = timeLeft;
//         timeLeft--;
//       } else if (timeLeft === 0) {
//         timerEl.textContent = timeLeft;
//         timeLeft--;
//       } else {
//         timerEl.textContent = '';
//         clearInterval(timeInterval);
//       }
//     }, 1000);
//   }
  
// function endQuiz(){
//     clearInterval(countdown() === 0);
    
    
// }



































