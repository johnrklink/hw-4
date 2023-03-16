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
    if (answer === questions[runningQuestionIndex].correct) {
      score++;
      runningQuestionIndex++;
      if (runningQuestionIndex <= lastQuestionIndex) {

        renderQuestion();
      } else {

        endQuiz();
      }
    } else {
      timeLeft -= 10;
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
  
        endQuiz();
      }
    }
  }
  
  function endQuiz() {
    clearInterval(timerInterval);
    quiz.style.display = "none";
    scoreDiv.style.display = "block";
    container.style.display = "none";
    localStorage.setItem("userScore", score);
    renderHighScores();
  }

start.addEventListener("click",startQuiz); 
   
function startQuiz() {
    startTimer();
  
    renderQuestion();
  
    quiz.style.display = "block";
  }
  
  function startTimer() {
    timeLeft = quizDuration;
    counter.innerHTML = timeLeft;
  
    countdown();
  }
  
  function countdown() {
    timeLeft--;
    counter.innerHTML = timeLeft;
  
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
  
      endQuiz();
    }
  }
  
  start.addEventListener("click", startQuiz);
  

window.onload = function () {
    var hundredSeconds = 100,
        display = document.querySelector('#time');
    startTimer(hundredSeconds, display);
};

localStorage.setItem("userScore", timeLeft);
