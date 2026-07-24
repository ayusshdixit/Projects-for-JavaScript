const optionButtons = document.querySelectorAll(".option");
const quizQuestion = document.querySelector("#question");
const nextButton = document.querySelector("#nextBtn");
const quizScore = document.querySelector("#score");
const restartButton = document.querySelector("#restartBtn");

let currentIndex = 0;
let score = 0;
let answered = false;

restartButton.style.display = "none";

const quizData = [
    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Netscape",
            "Google",
            "Oracle"
        ],
        answer: "Netscape"
    },

    {
        question: "Which keyword declares a constant variable?",
        options: [
            "let",
            "const",
            "var",
            "static"
        ],
        answer: "const"
    },

    {
        question: "Which method converts JSON into a JavaScript object?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()"
        ],
        answer: "JSON.parse()"
    },

    {
        question: "Which operator checks both value and datatype?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        answer: "==="
    },

    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Management",
            "Document Order Method",
            "Display Object Model"
        ],
        answer: "Document Object Model"
    }
];

function displayQuestions() {

    answered = false;

    quizQuestion.textContent = quizData[currentIndex].question

    optionButtons.forEach((btn, index) => {
        btn.textContent = quizData[currentIndex].options[index]
         btn.style.backgroundColor = ""
    })

}

optionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (answered) {
            return
        }
        answered = true

        if (btn.textContent === quizData[currentIndex].answer) {
            score++;
            
        }

        optionButtons.forEach((button) => {
            if (button.textContent === quizData[currentIndex].answer) {
                button.style.backgroundColor = "green"
            } else {
                button.style.backgroundColor = "red"
            }
        })
    })
})

nextButton.addEventListener('click', () => {

    if (!answered) {
        alert('Atleast Select One Option')
        return
    }
    if (currentIndex < quizData.length - 1) {
        currentIndex++
        displayQuestions()
    }
    else {

        quizQuestion.textContent = "🎉 Quiz Finished!";
        quizScore.textContent = `Your Score: ${score}/${quizData.length}`;

        nextButton.style.display = "none";
        restartButton.style.display = "inline-block";
    }


})

restartButton.addEventListener('click', () => {

    currentIndex = 0
    score = 0

    nextButton.style.display = "inline-block"
    restartButton.style.display = "none"

    quizScore.textContent = ""

    displayQuestions()

})

displayQuestions()