var score = 0;
var container = document.querySelector("#container");
var quizContent = document.querySelector("#quizContent");
var questionTitle = document.querySelector("#qTitle")
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#start");

var questions = [
    {
        title: "The first index of an array is: ",
        choices: ["0", "1", "Whatever you Want", "What is an Array?"],
        answer: "0"
    },
    {
        title: "What is a ",
        choices: ["0", "undefined", "true", "false"],
        answer: "false"
    },
    {
        title: "Which of the following HTML tags would result in bold text?",
        choices: ["< bold >", "< em >", "< br >", "< strong >"],
        answer: "< strong >"
    },
    {
        title: "Which CSS property controls text size?",
        choices: ["font-size", "text-size", "font-style", "size"],
        answer: "font-size"
    },
    {
        title: "How do you add a comment in a JavaScript file?",
        choices: ["< !-- Comment -->", "//Comment", "/*Comment*/", "~Comment~"],
        answer: "//Comment"
    }
];
var questionIndex = 0;

var createUl = document.createElement("ul");
createUl.setAttribute("id", "optionsUl")

var timeInterval = 0;
var countdown = 75;
var penalty = 10;

startBtn.addEventListener("click", function() {
    if (timeInterval === 0) {
        timeInterval = setInterval(function() {
            countdown--;
            timer.textContent = "Time: " + countdown;
            if (countdown <= 0) {
                clearInterval(timeInterval);
                theEnd();
            }
        }, 1000);
    }
    newQuestion(questionIndex)
});

// generates a new question
function newQuestion(questionIndex) {
    quizContent.innerHTML = "";
    createUl.innerHTML = "";
    var displayQuestion = document.createElement("h2");

    for (var i = 0; i < questions.length; i++) {
        displayQuestion.innerHTML = questions[questionIndex].title;
        var displayChoices = questions[questionIndex].choices;
        quizContent.appendChild(displayQuestion);
    }
    console.log(displayChoices);
    displayChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.innerHTML += "<button>" + newItem + "</button>";
        quizContent.appendChild(createUl);
        createUl.appendChild(listItem);
        listItem.addEventListener("click", (checkAns));
    })
}

var i = 0;
var newDiv = document.createElement("div");
var feedback = document.createElement("h3");
newDiv.setAttribute("id", "newDiv");
// checks to see if selected answer is correct & inserts feedback (correct/incorrect)
function checkAns(event) {
        var choice = event.target;
        quizContent.appendChild(newDiv);
        newDiv.appendChild(feedback);
        var next = document.createElement("button");
        next.setAttribute("id", "nextButton");
        next.textContent = "Next Question";

// condition that selected answer is correct
    if (choice.textContent == questions[questionIndex].answer) {
        score++;
        feedback.textContent = "Correct! 😊";
        newDiv.appendChild(feedback);
        
        newDiv.appendChild(next);
        next.addEventListener("click", (movingOn));
//condition that the selected answer is incorrect
    } else {
        countdown = countdown - penalty;
        feedback.textContent = "Incorrect! 🙁";
        newDiv.appendChild(feedback);
    }
}
// Decides whether to initiate final pages or to cycle through next question
function movingOn(event) {
    newDiv.innerHTML = "";
    questionIndex++;
    if (questionIndex >= questions.length) {
        theEnd();
    } else {
        newQuestion(questionIndex);

    }
}


function theEnd() {
    quizContent.innerHTML = "";
    timer.innerHTML = "";
// Sets up high score page
    var newH1 = document.createElement("h1");
    newH1.setAttribute("id", "newH1");
    newH1.textContent = "Finished!"
    quizContent.appendChild(newH1);


// Calculation and display of final score
    if (countdown >= 0) {
        score = countdown;
        clearInterval(timeInterval);
        var newP = document.createElement("p");
        newP.textContent = "Your final score is: " + score;
        quizContent.appendChild(newP);
    } else {
        score = 0;
        var outOfTime = document.createElement("h2");
        outOfTime.textContent = "Time is up! 🕔";
        quizContent.appendChild(outOfTime);
        var newP = document.createElement("p");
        newP.textContent = "Your final score is: " + score;
        quizContent.appendChild(newP);
    }

// Initials submission box and button
    var initialsPrompt = document.createElement("label");
    initialsPrompt.setAttribute("for", "inputBox");
    initialsPrompt.textContent = "Enter your initials: ";
    quizContent.appendChild(initialsPrompt);

    var inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");
    inputBox.setAttribute("id", "inputBox")  
    inputBox.textContent = "";
    quizContent.appendChild(inputBox)
    
    var submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.textContent = "Submit";
    quizContent.appendChild(submit);

// Event listener for submission button and storage initials and score
    submit.addEventListener("click", function() {
        var initials = inputBox.value;

        if (initials === "") {
            console.log("No initials entered")
            window.alert("Please enter your initials");

        } else {
            var finalScore = {
                initials: initials,
                score: score
            }
    // Storage of past scores
            var storeScores = localStorage.getItem("storeScores");
            if (storeScores === null) {
                storeScores = [];
            } else {
                storeScores = JSON.parse(storeScores);
            }
            storeScores.push(finalScore);
            var newScore = JSON.stringify(storeScores);
            localStorage.setItem("storeScores", newScore);
            window.location.replace("highscores.html");
        }
    });
};










































































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
//     var timeLeft = 60;
//     var timeInterval = setInterval(function () {
//       if (timeLeft > 0) {
//         timerEl.textContent = timeLeft;
//         timeLeft--;
//       } else if (timeLeft === 0) {
//         timerEl.textContent = timeLeft;
//         timeLeft--;
//       } else {
//          clearInterval(timeInterval);
       
//       }
//     }, 100);
//   }
  
// function endQuiz(){
//     clearInterval(countdown()===0);{

//     }
//     return;
    
// }

// function highscore(){
//   prompt('game over input your name')
//   endQuiz();
// }





























