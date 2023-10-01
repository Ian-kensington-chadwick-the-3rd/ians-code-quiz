var button = document.querySelector("#btn")
var timerEl = document.getElementById('countdown');
var questionArray = document.getElementById('question')
startButton.addEventListener("click", startGame)


var trueArr = [""]
var highscore = [""]


// first I need to have an array for answer
// Ill make two answer arrays true of false
// second I need the questions
// the questions will be an if esle format
// the time will be decreased every time I get an answer incorrect
// I need too add an event listener every time they click an answer
// I need too add an persistant storage for a total score when the person is finish it will the go under highscore
// 
button.addEventListener("click", function() {countdown()});


function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }
  
function startGame() {
console.log('started');
}

function setNextQuestion(){

}

function selectanswer() {



}






