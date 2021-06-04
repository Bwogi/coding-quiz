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

// Array of Objects
var quiz = [{
        q: 'Commonly used data types DO Not Include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 2
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is: ',
        choices: ['Javascript', 'termina/bash', 'for loops', 'console.log'],
        answer: 3
    },
    {
        q: 'The condition in an if / else statement is enclosed with ________.',
        choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer: 0
    },
    {
        q: 'Arrays in Javascript can be used to store _____________.',
        choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer: 0
    }
];