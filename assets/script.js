var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question")
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var scoreDiv = document.getElementById("scoreContainer");
var container = document.getElementById("container")
var timer = document.getElementById("timer")

var questions = [
    {
        question : "Commonly used data types DO NOT include:",
        choiceA : "strings",
        choiceB : "booleans",
        choiceC : "alerts",
        choiceD : "numbers",
        correct : "C",
    },
    {
        question : "The condition in an if / else statement is enclosed within ____.",
        choiceA : "quotes",
        choiceB : "curley brackets",
        choiceC : "parentheses",
        choiceD : "square brackets",
        correct : "C",
    },
    {
        question : "Arrays in JavaScript can be used to store ____.",
        choiceA : "numbers and strings",
        choiceB : "other arrays",
        choiceC : "booleans",
        choiceD : "all of the above",
        correct : "D",
    },
    {
        question : "String values must be enclosed within ____ when being assigned to variables.",
        choiceA : "commas",
        choiceB : "curley brackets",
        choiceC : "quotes",
        choiceD : "parentheses",
        correct : "C",
    },
    {
        question : "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA : "JavaScript",
        choiceB : "terminal / bash",
        choiceC : "for loops",
        choiceD : "console.log",
        correct : "D",
    }
];

let lastQuestionIndex = question.length - 1;
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionIndex];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
function checkAnswer(answer) {
    if (answer === questions[runningQuestionIndex].correctAnswer) {
      
    } else {
      
      timeLeft -= 10; // subtract 10 seconds from the timer
      if (timeLeft < 0) {
        timeLeft = 0;
      }
    }
  
    
  }

start.addEventListener("click",startQuiz); 
   
function startQuiz(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var hundredSeconds = 100,
        display = document.querySelector('#time');
    startTimer(hundredSeconds, display);
};

localStorage.setItem("userScore", timeLeft);
