# Project4WebAPIs

Name of Project: Project 4 Web APIs

Description: 

In this challenge I used multiple functions and event listeners to create a dynamic quiz about the javascript. 
To start I created a series of questions and answers in an array of objects. I took the information from the array of question objects and dynamicly created a series of buttons. When the start button is clicked, a timer starts and the first question is displayed. When the question is answered it will move to the next question. If they answer correctly they receive no time penalty. If they answer wrong then there is a 15 second time penalty. When the last question is answered or the time hits 0 the quiz is over. When the quiz is over it displays the final score and a form for submitting their intials. When it is submitted it goes to a score page and the score is displayed. 



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