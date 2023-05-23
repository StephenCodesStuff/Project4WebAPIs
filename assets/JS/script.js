// alert("working")
var quizTime = document.getElementById("timer")
var startQuiz = document.querySelector(".start-quiz")
var questionElement = document.getElementById("question")
var paraEl = document.querySelector(".rules")
var buttonEl = document.querySelector(".bttn")
var displayMessage = document.querySelector(".display-message")
var timer;
var timerCount = 1000;
var questionCount = 0;
var questions = [{
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Boleens", "Alerts", "Numbers"],
        // answer1: "Stephen",
        // answer2: "Paul",
        // answer3: "George",
        // answer4: "Tom",
        correctAns: "Alerts", 
    },
    {
        question: "Arrays can be used to store",
        answers: ["Strings and Numbers", "Objects", "Other Arrays", "All of the Above"],
        // answer1: "Plumber",
        // answer2: "Cook",
        // answer3: "Baker",
        // answer4: "Tanner",
        correctAns: "All of the Above",
    },
    {
        question: "To store objects in your browser's local storage, you must first",
        answers: ["Convert it to a string", "Send the object to local storage", "Eat, Pray, Love", "Parse the Object"],
        // answer1: "Crusher",
        // answer2: "Data",
        // answer3: "Jean-Luc",
        // answer4: "Jordie",
        correctAns: "Convert it to a string",
    },
];
// console.log(questions);

quizTime.textContent = "Timer " + timerCount;

function endQuiz() {
    console.log ("Quiz Ending")
    document.getElementById("answerContainer").innerHTML=""
    // console.log (timerCount)
    questionElement.textContent = "You did it";
    paraEl.style.display = "";
    paraEl.textContent = "You Score is " + timerCount; 
    var formElement = document.createElement("form");
    var input = document.createElement('input')

    formElement.appendChild(input);
    document.getElementById(".rules").appendChild(formElement);
}

function startgame(){
    startQuiz.style.display = "none";
    paraEl.style.display = "none";
    // timerCount = 1000;
    setTime()
    setQuiz()
}

function setTime() {
    timer = setInterval(function(){
        // console.log(timer + "what is this")
        timerCount--;
        quizTime.textContent = "Timer " + timerCount;

        if (questionCount === questions.length){
            clearInterval(timer);
            endQuiz()
            return timerCount;
        }
        if(timerCount <= 0){
            clearInterval(timer);
            timerCount = 0
            endQuiz();
        }

    }, 1000)
}

function setQuiz() { 
    // for (var i = 0; i < questions.length; i++) { 
    //     console.log(questions[i]);
    // }
    // console.log(questions.length)
    // console.log(questionCount)
    if (questionCount === questions.length){
        // endQuiz()
        return
    }
    document.getElementById("answerContainer").innerHTML="";
    var questionChoice = questions [questionCount];
    // console.log(questionCount)
    var questionText = questionChoice.question;
    // console.log(questionText);
    questionElement.textContent = questionText;
    questionElement.style.display ="text-align: left;" 
    for (var i = 0; i < questions[questionCount].answers.length; i++){
        // console.log(questions[questionCount].answers[i]);
        var choiceButton = document.createElement("button");
        choiceButton.textContent = questions[questionCount].answers[i];
        // choiceButton.style.display = "block";
        choiceButton.classList.add("answerBttn")
        document.getElementById("answerContainer").append(choiceButton);

    }


    // console.log("Next Question Running")
}

function nextQuestion(e) {
    // console.log (e.target)
    if (!e.target.matches(".answerBttn")) {
        return
    }
    // console.log ("working")
    if (e.target.textContent === questions[questionCount].correctAns) {
        // questionCount ++
        displayCorrect()

    } else {
        
        timerCount -= 10
        displayIncorrect()
    }
    questionCount ++
    
    setQuiz()
}


function displayCorrect(){
    console.log ("correct answer")
    displayMessage.textContent = "Correct"
    setTimeout(function(){ 
        displayMessage.textContent = "";

    }, 500)
    return
}
function displayIncorrect(){
    console.log ("wrong answer")
    displayMessage.textContent = "Incorrect"
    setTimeout(function(){ 
        displayMessage.textContent = "";

    }, 500)
    return
}
startQuiz.addEventListener("click", startgame);
document.getElementById("answerContainer").addEventListener("click", nextQuestion);



// create questionslist : question string, options, correct ans
// create question counter = 0
// Click on start button(attach event listener)
//    start timer from 75 secs
//         every sec time is going to decrement
//         display it on screen
//    show 1st question with options(function)
// Clicking on the answer options (attach event listener)
//     check if ans click by user matches with correct ans for question
//        display correct msg
//        check if we have time
//          if question counter < length of question array
//             increment the question counter 
//                  go to next question
//         else ||  if(timer === 0)
//         stop timer and grab the last sec left
//            display the score
//            form is going to take user initial and score and save it in local storage and display it on second html page.
//     if wrong ans
//        display wrong msg
//        decrement timer by 10
//        check if we have time
//        if question counter < length of question array
//             increment the question counter 
//             go to next question
//         else || if(timer === 0)
//             stop timer and grab the last sec left
//            display the score
//            form is going to take user initial and score and save it in local storage and display it on second html page.