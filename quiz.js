let currentQuestion = 0;
let score = 0;

let questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used to style a web page?",
        options: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        answer: 1
    },

    {
        question: "Which language is mainly used to add interactivity to web pages?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "link",
            "a",
            "href",
            "url"
        ],
        answer: 1
    },

    {
        question: "Which CSS property is used to change text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer: 2
    },

    {
        question: "What is the full form of CSS?",
        options: [
            "Cascading Style Sheet",
            "Chart style size",
            "Charted size sheet",
            "All of the Above"
        ],
        answer: 1
    },

    {
        question: "Which HTML tag is used to create a paragraph?",
        options: [
            "para",
            "text",
            "p",
            "paragraph"
        ],
        answer: 2
    }
];


function startQuiz() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;
    let section = document.querySelector('input[name="section"]:checked');

    if (name === "" || roll === "" || course === "" || section === null) {
        alert("Please fill all student details.");
        return;
    }

    document.getElementById("studentDetails").style.display = "none";

    document.getElementById("quizSection").style.display = "block";

    showQuestion();
}


function showQuestion() {

    let q = questions[currentQuestion];

    let html = "";

    html += "<div class='question'>";

    html += "<h2>Question " + (currentQuestion + 1) + " of " + questions.length + "</h2>";

    html += "<h3>" + q.question + "</h3>";

    for (let i = 0; i < q.options.length; i++) {

        html +=
            "<label>" +
            "<input type='radio' name='answer' value='" + i + "'>" +
            " " + q.options[i] +
            "</label>";
    }

    html += "</div>";

    document.getElementById("questionBox").innerHTML = html;
}


function submitAnswer() {

    let selected = document.querySelector('input[name="answer"]:checked');

    if (selected === null) {
        alert("Please select an answer.");
        return;
    }

    let selectedAnswer = parseInt(selected.value);

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();
    }
}


function showResult() {

    document.getElementById("quizSection").style.display = "none";

    let name = document.getElementById("name").value;

    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML =
        "<h2>Quiz Completed!</h2>" +
        "<p>Student Name: <b>" + name + "</b></p>" +
        "<p>Your Score: <b>" + score + " / " + questions.length + "</b></p>";
}