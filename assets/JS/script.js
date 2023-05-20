// alert("working")
var quizTime = document.getElementById("timer")
var startQuiz = document.querySelector(".start-quiz")
var timer;
var timerCount;
var questions = [{
        question: "My name is?",
        responses: ["Stephen", "George", "Bob", "Frank"],
        correctAns: 0, 
    },
    {
        question: "My last name is?",
        responses: ["Plumber", "Cook", "Baker", "Tanner"],
        correctAns: 1,
    },
    {
        question: "My pet's name?",
        response: ["Crusher", "Data", "Lean-Luc", "Jordie"],
        correctAns: 2
    },
];
console.log(questions);

function startgame(){
    timerCount = 10;
    setTime()
}

function setTime() {
    timer = setInterval(function(){
        console.log(timer + "what is this")
        timerCount--;
        quizTime.textContent = timerCount;

        if(timerCount=== 0){
            clearInterval(timer);

        }

    }, 1000)
}

startQuiz.addEventListener("click", startgame);