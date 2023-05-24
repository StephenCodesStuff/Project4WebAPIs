// console.log('working')

var highScoresList = document.getElementById("highscore-list");
var highScoreArray = JSON.parse(localStorage.getItem("highScoreString")) || [];
var clearButton = document.getElementById("clear-button")
var returnButton = document.getElementById("return-button")
console.log(highScoreArray)

renderMessage();

function renderMessage() {
for (var i = 0; i < highScoreArray.length; i++) {
    console.log(highScoreArray[i])
    var scoreDisplay = document.createElement ("li");
    var highScoreNumber = highScoreArray[i].highScore
    var intialsText = highScoreArray[i].intials
    console.log(highScoreArray)

    scoreDisplay.textContent = highScoreNumber + " " + intialsText
    
    // console.log(intialsText)
    // console.log(highScoreNumber)
    scoreDisplay.classList.add("scorelist")
    document.getElementById("highscore-list").appendChild(scoreDisplay)
}}

function clearScores() {
    localStorage.clear()
    location.reload()
    console.log ("is this running")
}

function returnGame() {
    window.location.href = "index.html"
}
clearButton.addEventListener("click", clearScores);

returnButton.addEventListener("click", returnGame);
