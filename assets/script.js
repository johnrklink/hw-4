const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question")
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const scoreDiv = document.getElementById("scoreContainer");

let questions = [
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
    choiceC.innerHTML = q.choiceD;
}
function checkAnswer(answer){
    if (questions[runningQuestionIndex].correct == answer){
        timer-counter
    }
    if (runningQuestionIndex < lastQuestionIndex){
        count =0;
        runningQuestionIndex++;
        questionRender();
    }
    else{
        clearInterval(TIMER);
        scoreRender();
    }
}


start.addEventListener("click",startQuiz); 

let TIMER;

function startQuiz(){
    start.style.display = "none";
    counterRender()
    TIMER = setInterval(counterRender,1000);
    progressRender();
    questionRender();
    quiz.style.display = "block";
}
    
