const questions = [
    {
        question: "Which HTML tag is used to define an image?",
        answers: [
            { text: "img", correct: true },
            { text: "image", correct: false },
            { text: "pic", correct: false },
            { text: "figure", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'this' keyword in Java?",
        answers: [
            { text: "Refers to the current object", correct: true },
            { text: "Refers to the parent class", correct: false },
            { text: "Refers to a local variable", correct: false },
            { text: "Refers to a static method", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to create space between the element's border and its content?",
        answers: [
            { text: "padding", correct: true },
            { text: "margin", correct: false },
            { text: "border-spacing", correct: false },
            { text: "spacing", correct: false }
        ]
    },
    {
        question: "Which method is used to start a thread in Java?",
        answers: [
            { text: "run()", correct: false },
            { text: "start()", correct: true },
            { text: "init()", correct: false },
            { text: "go()", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        answers: [
            { text: "ol", correct: false },
            { text: "ul", correct: true },
            { text: "li", correct: false },
            { text: "list", correct: false }
        ]
    },
    {
        question: "In CSS, which property is used to change the text color of an element?",
        answers: [
            { text: "font-color", correct: false },
            { text: "color", correct: true },
            { text: "text-color", correct: false },
            { text: "fgcolor", correct: false }
        ]
    },
    {
        question: "Which of the following is not a Java primitive data type?",
        answers: [
            { text: "int", correct: false },
            { text: "String", correct: true },
            { text: "char", correct: false },
            { text: "boolean", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "/*", correct: false },
            { text: "#", correct: false },
            { text: "<!--", correct: false }
        ]
    },
    {
        question: "Which method can be used to find the length of a string in Java?",
        answers: [
            { text: "length()", correct: true },
            { text: "size()", correct: false },
            { text: "getSize()", correct: false },
            { text: "getLength()", correct: false }
        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: [
            { text: "break", correct: false },
            { text: "lb", correct: false },
            { text: "br", correct: true },
            { text: "linebreak", correct: false }
        ]
    },
    {
        question: "Which CSS property controls the text size?",
        answers: [
            { text: "font-style", correct: false },
            { text: "text-size", correct: false },
            { text: "font-size", correct: true },
            { text: "text-style", correct: false }
        ]
    },
    {
        question: "Which company developed Java?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Apple", correct: false },
            { text: "Sun Microsystems", correct: true },
            { text: "IBM", correct: false }
        ]
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: [
            { text: "class", correct: false },
            { text: "style", correct: true },
            { text: "styles", correct: false },
            { text: "font", correct: false }
        ]
    },
    {
        question: "In JavaScript, which keyword is used to declare a variable?",
        answers: [
            { text: "var", correct: true },
            { text: "int", correct: false },
            { text: "string", correct: false },
            { text: "const", correct: true }
        ]
    },
    {
        question: "Which method is used to remove whitespace from the beginning and end of a string in JavaScript?",
        answers: [
            { text: "trim()", correct: true },
            { text: "strip()", correct: false },
            { text: "cut()", correct: false },
            { text: "remove()", correct: false }
        ]
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        answers: [
            { text: "footer", correct: true },
            { text: "bottom", correct: false },
            { text: "section", correct: false },
            { text: "foot", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the background color?",
        answers: [
            { text: "color", correct: false },
            { text: "background-color", correct: true },
            { text: "bgcolor", correct: false },
            { text: "bg-color", correct: false }
        ]
    },
    {
        question: "In Java, which keyword is used to create a subclass?",
        answers: [
            { text: "extends", correct: true },
            { text: "inherits", correct: false },
            { text: "implements", correct: false },
            { text: "subclass", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerb");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+ ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers=> {
        const button = document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct=answers.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
       handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();