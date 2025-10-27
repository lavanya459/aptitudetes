window.onload = function(){
  // TIME RESTRICTION: Quiz active only between 11:00 - 11:30
const quizContainer = document.getElementById("quiz-container");
const lockedMessage = document.getElementById("locked");

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();

// Check if current time is between 11:00 and 11:30
if (hours === 23 && minutes >= 0 && minutes < 30) {
  quizContainer.style.display = "block";
  lockedMessage.style.display = "none";
} else {
  quizContainer.style.display = "none";
  lockedMessage.style.display = "block";
}

// ====================== QUIZ QUESTIONS =======================
const questions = [
  // ------- Time & Work Questions (10) -------
  { question: "A can do a work in 10 days while B can do it in 15 days. How many days together?", options: ["5 days", "6 days", "7 days", "8 days"], answer: "6 days" },
  { question: "A and B together can complete a work in 12 days. A alone can do it in 20 days. How long will B alone take?", options: ["25 days", "30 days", "35 days", "40 days"], answer: "30 days" },
  { question: "If 12 men can complete a work in 8 days, how many days will 6 men take?", options: ["12 days", "14 days", "15 days", "16 days"], answer: "16 days" },
  { question: "A is twice as good a workman as B. Together they can finish a job in 18 days. A alone can finish in?", options: ["20 days", "27 days", "30 days", "40 days"], answer: "27 days" },
  { question: "A can do a work in 6 days, B in 8 days, C in 12 days. Working together they finish in?", options: ["2 days", "3 days", "4 days", "5 days"], answer: "3 days" },
  { question: "If A can do a work in 15 days and B in 20 days, how long will both take together?", options: ["8 days", "9 days", "10 days", "12 days"], answer: "8 days" },
  { question: "A does half as much work as B in the same time. Together they finish a work in 8 days. A alone will take?", options: ["12 days", "16 days", "20 days", "24 days"], answer: "24 days" },
  { question: "A can do a work in 30 days, B can do it in 40 days. Together they can do it in?", options: ["15 days", "17.14 days", "20 days", "22 days"], answer: "17.14 days" },
  { question: "A and B can do a work in 5 days. With C they can do it in 3 days. C alone can do it in?", options: ["5 days", "7.5 days", "10 days", "15 days"], answer: "7.5 days" },
  { question: "A and B can do a work in 15 days and 20 days respectively. They worked together for 5 days. Remaining work will be done by?", options: ["A in 5 days", "B in 10 days", "A in 7 days", "B in 12 days"], answer: "A in 7 days" },

  // ------- Speed & Distance Questions (10) -------
  { question: "A train covers 180 km in 3 hours. What is its speed?", options: ["30 km/h", "50 km/h", "60 km/h", "80 km/h"], answer: "60 km/h" },
  { question: "If a car travels 120 km in 2 hours, what is the speed?", options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"], answer: "60 km/h" },
  { question: "A man walks at 5 km/h. How long will he take to cover 20 km?", options: ["2 hours", "3 hours", "4 hours", "5 hours"], answer: "4 hours" },
  { question: "A train 100 m long runs at 60 km/h. Time to pass a pole?", options: ["4 s", "5 s", "6 s", "7 s"], answer: "6 s" },
  { question: "A car travels 80 km/h. How long to cover 200 km?", options: ["2 hours", "2.5 hours", "3 hours", "3.5 hours"], answer: "2.5 hours" },
  { question: "A man runs at 9 km/h. Time to cover 1 km?", options: ["4 min", "5 min", "6 min", "7 min"], answer: "6 min" },
  { question: "If distance = 100 km and time = 2.5 h, find speed.", options: ["30 km/h", "35 km/h", "40 km/h", "45 km/h"], answer: "40 km/h" },
  { question: "A bus covers 360 km in 6 hours. Speed?", options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"], answer: "60 km/h" },
  { question: "A man walks 4 km/h and runs 8 km/h. Average speed if he walks 2 km and runs 2 km?", options: ["5 km/h", "5.33 km/h", "6 km/h", "7 km/h"], answer: "5.33 km/h" },
  { question: "A car reduces speed from 80 km/h to 40 km/h. Time doubles. Distance?", options: ["Remains same", "Doubles", "Halves", "Becomes zero"], answer: "Remains same" }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";
  const current = questions[currentQuestion];
  questionEl.textContent = `${currentQuestion + 1}. ${current.question}`;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(button, current.answer);
    optionsEl.appendChild(button);
  });
}

function checkAnswer(button, correctAnswer) {
  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.disabled = true);

  if (button.textContent === correctAnswer) {
    button.classList.add("correct");
    feedbackEl.textContent = "✅ Correct!";
    score++;
  } else {
    button.classList.add("wrong");
    feedbackEl.textContent = `❌ Wrong! Correct answer: ${correctAnswer}`;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  questionEl.textContent = "🎯 Quiz Completed!";
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  resultEl.textContent = `Your Score: ${score} / ${questions.length}`;
  nextBtn.style.display = "none";
}

loadQuestion();



}
