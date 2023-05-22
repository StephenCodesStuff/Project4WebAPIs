// alert("working")
var quizTime = document.getElementById("timer")
var startQuiz = document.querySelector(".start-quiz")
var questionElement = document.getElementById("question")
var paraEl = document.querySelector(".rules")
var buttonEl = document.querySelector(".bttn")
var timer;
var timerCount;
var questionCount = 0;
var questions = [{
        question: "My name is?",
        answers: ["Stephen", "paul", "george", "tom"],
        // answer1: "Stephen",
        // answer2: "Paul",
        // answer3: "George",
        // answer4: "Tom",
        correctAns: "Stephen", 
    },
    {
        question: "My last name is?",
        answers: ["Stephen", "Cook", "george", "tom"],
        // answer1: "Plumber",
        // answer2: "Cook",
        // answer3: "Baker",
        // answer4: "Tanner",
        correctAns: "Cook",
    },
    {
        question: "My pet's name?",
        answers: ["Stephen", "paul", "Jean-Luc", "tom"],
        // answer1: "Crusher",
        // answer2: "Data",
        // answer3: "Jean-Luc",
        // answer4: "Jordie",
        correctAns: "Jean-Luc",
    },
];
console.log(questions);


function endQuiz() {
    console.log ("Quiz Ending")
    document.getElementById("answerContainer").innerHTML=""
    console.log (timerCount)
    questionElement.textContent = "Your Score Is " + timerCount
}

function startgame(){
    startQuiz.style.display = "none";
    paraEl.style.display = "none";
    timerCount = 10;
    setTime()
    setQuiz()
}

function setTime() {
    timer = setInterval(function(){
        // console.log(timer + "what is this")
        timerCount--;
        quizTime.textContent = timerCount;

        if (questionCount === questions.length){
            clearInterval(timer);
            endQuiz()
            return timerCount;
        }
        if(timerCount === 0){
            clearInterval(timer);
            endQuiz();
        }

    }, 1000)
}

function setQuiz() { 
    // for (var i = 0; i < questions.length; i++) { 
    //     console.log(questions[i]);
    // }
    console.log(questions.length)
    console.log(questionCount)
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
    for (var i = 0; i < questions[questionCount].answers.length; i++){
        console.log(questions[questionCount].answers[i]);
        var choiceButton = document.createElement("button");
        choiceButton.textContent = questions[questionCount].answers[i];
        choiceButton.style.display = "block";
        choiceButton.classList.add("answerBttn")
        document.getElementById("answerContainer").append(choiceButton);

    }


    console.log("Next Question Running")
}

function nextQuestion(e) {
    // console.log (e.target)
    if (!e.target.matches(".answerBttn")) {
        return
    }
    console.log ("working")
    if (e.target.textContent === questions[questionCount].correctAns) {
        // questionCount ++
        console.log ("correct answer")
    } else {
        console.log ("wrong answer")
    }
    questionCount ++
    
    setQuiz()
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