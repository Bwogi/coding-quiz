var startBtn = document.querySelector(".btn");
var homeSection = document.querySelector(".home");
var questionSection = document.querySelector(".questions")
var questionNumber = document.querySelector(".question-number");
var questionContent = document.querySelector(".question-text");
var choiceSection = document.querySelector(".choices");
var f_resultSection = document.querySelector(".f_result");
var questionLimit = 5; // if you want all questions "quiz.length"
let questionCounter = 0;
let currentQuestion;
let theQuestions = [];
let theChoices = [];
let qns_passed = 0;
let done = 0;

// console.log(startBtn)
startBtn.addEventListener("click", function() {
    homeSection.classList.add("hide");
    questionSection.classList.remove("hide");


})