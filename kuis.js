const questions = [
  {
    image: "images/Kuis Klenang.png",
    options: [
      "images/Ceng Ceng No Background - Salin.png",
      "images/Kendang No Bacground.png",
      "images/Klenang No Background - Salin.png",
      "images/Ponggang No Background.png",
    ],
    answer: "images/Klenang No Background - Salin.png",
  },
  {
    image: "images/KUIS KLENTONG.png",
    options: [
      "images/Klentong No Bacgroundnew - Salin.png",
      "images/Kendang No Bacground.png",
      "images/Klenang No Background - Salin.png",
      "images/Ponggang No Background.png",
    ],
    answer: "images/Klentong No Bacgroundnew - Salin.png",
  },
  {
    image: "images/kuis kendang.png",
    options: [
      "images/Klentong No Bacgroundnew - Salin.png",
      "images/Kendang No Bacground.png",
      "images/Klenang No Background - Salin.png",
      "images/Ponggang No Background.png",
    ],
    answer: "images/Kendang No Bacground.png",
  },
  {
    image: "images/kuis gong.png",
    options: [
      "images/Klentong No Bacgroundnew - Salin.png",
      "images/Gong No Background.png",
      "images/Klenang No Background - Salin.png",
      "images/Kendang No Bacground.png",
    ],
    answer: "images/Gong No Background.png",
  },
  {
    image: "images/kuis ceng.png",
    options: [
      "images/Ceng Ceng No Background - Salin.png",
      "images/Gong No Background.png",
      "images/Klenang No Background - Salin.png",
      "images/Kendang No Bacground.png",
    ],
    answer: "images/Ceng Ceng No Background - Salin.png",
  },
  {
    image: "images/kuis ponggang.png",
    options: [
      "images/Ponggang No Background.png",
      "images/Ceng Ceng No Background - Salin.png",
      "images/Klenang No Background - Salin.png",
      "images/Kendang No Bacground.png",
    ],
    answer: "images/Ponggang No Background.png",
  },
  {
    image: "images/kuis tawa.png",
    options: [
      "images/Kendang No Bacground.png",
      "images/Ceng Ceng No Background - Salin.png",
      "images/Ponggang No Background.png",
      "images/Tawa Tawa No Bacground.png",
    ],
    answer: "images/Tawa Tawa No Bacground.png",
  },

  // Tambahkan lebih banyak soal di sini jika perlu
];

let currentQuestion = 0;
let score = 0;

// Acak soal dan ambil 10 jika tersedia
const shuffledQuestions = questions
  .sort(() => Math.random() - 0.5)
  .slice(0, 10);

function showQuestion() {
  const q = shuffledQuestions[currentQuestion];
  document.getElementById("question-image").src = q.image;

  const optionsContainer = document.querySelector(".options");
  optionsContainer.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.innerHTML = `<img src="${option}" alt="option">`;
    btn.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = shuffledQuestions[currentQuestion];
  if (selected === q.answer) {
    score++;
    jawabanBenar.currentTime = 0.2;
    jawabanBenar.play();
    showPopup("✅", true);
  } else {
    jawabanSalah.currentTime = 0.3;
    jawabanSalah.play();
    showPopup("❎", false);
  }
}

function showPopup(message, correct) {
  const popup = document.getElementById("popup");
  popup.innerText = message;
  popup.style.display = "block";
  popup.style.background = correct ? "none" : "none";

  setTimeout(() => {
    popup.style.display = "none";
    nextQuestion();
  }, 1000);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < shuffledQuestions.length) {
    showQuestion();
  } else {
    soalSelesai.currentTime = 0;
    soalSelesai.play();
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz-container").innerHTML = `
        <h2> ${score}/${shuffledQuestions.length}</h2>
        <div class="ulangKembali" onclick="location.reload()">
        <img src="images/Repeat.png" alt="Ulangi Kuis"/>
        <p>YEYYY SELAMAT!!</p>`;
}

window.onload = showQuestion;


