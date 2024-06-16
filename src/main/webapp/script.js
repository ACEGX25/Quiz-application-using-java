const questions =[ {
    question:"Rinkiya ke dil mein kon hai?",
    answers:[
        {text: "Vidhayak", correct: false},
        {text: "Shachiv ji", correct: true},
        {text: "Vikas", correct: false},
        {text: "Pralad", correct: false}
    ]
},
{
    question:"___ Bacche meethi kheer baki sab bawasir?",
    answers:[
        {text: "Char", correct: false},
        {text: "Paanch", correct: false},
        {text: "Teen", correct: false},
        {text: "DO", correct: true}
    ]
},
{
    question:"Best view of Phulera can be seen from",
    answers:[
        {text: "Pani ki Tanki", correct: true},
        {text: "khet", correct: false},
        {text: "Fakauli Bazar", correct: false},
        {text: "highway", correct: false}
    ]
},
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