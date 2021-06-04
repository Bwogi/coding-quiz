var startBtn = document.querySelector(".btn");
var homeSection = document.querySelector(".home");
var questionSection = document.querySelector(".questions")
var questionNumber = document.querySelector(".question-number");
var questionContent = document.querySelector(".question-text");
var choiceSection = document.querySelector(".choices");
var f_resultSection = document.querySelector(".f_result");
var questionLimit = 4; // if you want all questions "quiz.length"
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
    setTheQuestions();
    getNewQuestion();


});

function tryAgainQuiz() {
    // hide the f_resultSection
    f_resultSection.classList.add("hide");
    // show the questionSection
    questionSection.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

function setTheQuestions() {
    var totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        theQuestions.push(quiz[i]);
    }
}

// set question number and question and Choices
function getNewQuestion() {
    // set question number 
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + questionLimit;

    // set question text
    // get random question
    var questionIndex = theQuestions[Math.floor(Math.random() * theQuestions.length)];
    currentQuestion = questionIndex;
    questionContent.innerHTML = currentQuestion.q;
    // get the position of 'questionIndex' from the availableQuestion Array
    var index1 = theQuestions.indexOf(questionIndex);
    // remove the 'questionIndex' from the availableQuestion Array, so that the question does not repeat
    theQuestions.splice(index1, 1);
    // show question img if 'img' property exists
    if (currentQuestion.hasOwnProperty("img")) {
        var img = document.createElement("img");
        img.src = currentQuestion.img;
        questionContent.appendChild(img);
    }

    // set Choices
    // get the length of Choices
    var choiceLen = currentQuestion.choices.length;
    // push choices into theChoices Array
    for (let i = 0; i < choiceLen; i++) {
        theChoices.push(i)
    }
    choiceSection.innerHTML = '';
    let animationDelay = 0.15;
    // create choices in html
    for (let i = 0; i < choiceLen; i++) {
        // random choice
        var choiceIndex = theChoices[Math.floor(Math.random() * theChoices.length)];
        // get the position of 'choiceIndex' from the theChoices Array
        var index2 = theChoices.indexOf(choiceIndex);
        // remove the  'choiceIndex' from the theChoices Array , so that the choice does not repeat
        theChoices.splice(index2, 1);
        var choice = document.createElement("div");
        choice.innerHTML = currentQuestion.choices[choiceIndex];
        choice.id = choiceIndex;
        //   choice.style.animationDelay = animationDelay + 's';
        //   animationDelay = animationDelay + 0.15;
        choice.className = "choice";
        choiceSection.appendChild(choice);
        choice.setAttribute("onclick", "getResult(this)");
    }
    console.log(theQuestions)
    console.log(theChoices)
    questionCounter++;
}

function next() {
    if (questionCounter === questionLimit) {
        quizOver();
    } else {
        getNewQuestion();
    }
}

function quizOver() {
    // hide quiz Box
    questionSection.classList.add("hide");
    // show result Box
    f_resultSection.classList.remove("hide");
    quizResult();
}
// get the quiz Result
function quizResult() {
    f_resultSection.querySelector(".total_qns").innerHTML = questionLimit;
    f_resultSection.querySelector(".total_done").innerHTML = done;
    f_resultSection.querySelector(".total-qns_passed").innerHTML = qns_passed;
    f_resultSection.querySelector(".total-qns_failed").innerHTML = done - qns_passed;
    var percentage = (qns_passed / questionLimit) * 100;
    f_resultSection.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    f_resultSection.querySelector(".total-score").innerHTML = qns_passed + " / " + questionLimit;
}

function resetQuiz() {
    questionCounter = 0;
    qns_passed = 0;
    done = 0;
    theQuestions = [];
}

// Array of Questions
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
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 0
    }
];