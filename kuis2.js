const questions = [
  {
    image: "images/Klenang No Background - Salin.png",
    soundOptions: [
      { img: "images/Play.png", audio: "audio/Klenang.mp3", name: "Klenang" },
      {
        img: "images/Play.png",
        audio: "audio/Ceng-ceng.mp3",
        name: "Ceng-ceng",
      },
      { img: "images/Play.png", audio: "audio/Gongg.mp3", name: "Gong" },
      { img: "images/Play.png", audio: "audio/kendang.mp3", name: "Kendang" },
    ],
    answer: "Klenang",
  },
  {
    image: "images/Tawa Tawa No Bacground - Salin.png",
    soundOptions: [
      { img: "images/Play.png", audio: "audio/Klenang.mp3", name: "Klenang" },
      {
        img: "images/Play.png",
        audio: "audio/Tawa-tawa.mp3",
        name: "Tawa-tawa",
      },
      { img: "images/Play.png", audio: "audio/Gongg.mp3", name: "Gong" },
      { img: "images/Play.png", audio: "audio/kendang.mp3", name: "Kendang" },
    ],
    answer: "Tawa-tawa",
  },
  {
    image: "images/Kendang No Bacground.png",
    soundOptions: [
      { img: "images/Play.png", audio: "audio/Klenang.mp3", name: "Klenang" },
      {
        img: "images/Play.png",
        audio: "audio/Ceng-ceng.mp3",
        name: "Ceng-ceng",
      },
      { img: "images/Play.png", audio: "audio/Gongg.mp3", name: "Gong" },
      { img: "images/Play.png", audio: "audio/kendang.mp3", name: "Kendang" },
    ],
    answer: "Kendang",
  },
  {
    image: "images/Gong No Background - Salin.png",
    soundOptions: [
      { img: "images/Play.png", audio: "audio/Klenang.mp3", name: "Klenang" },
      {
        img: "images/Play.png",
        audio: "audio/Ceng-ceng.mp3",
        name: "Ceng-ceng",
      },
      { img: "images/Play.png", audio: "audio/Gongg.mp3", name: "Gong" },
      { img: "images/Play.png", audio: "audio/kendang.mp3", name: "Kendang" },
    ],
    answer: "Gong",
  },
  {
    image: "images/Ceng Ceng No Background - Salin.png",
    soundOptions: [
      { img: "images/Play.png", audio: "audio/Klenang.mp3", name: "Klenang" },
      {
        img: "images/Play.png",
        audio: "audio/Ceng-ceng.mp3",
        name: "Ceng-ceng",
      },
      { img: "images/Play.png", audio: "audio/Gongg.mp3", name: "Gong" },
      { img: "images/Play.png", audio: "audio/kendang.mp3", name: "Kendang" },
    ],
    answer: "Ceng-ceng",
  },
  {
    image: "images/Ponggang No Background.png",
    soundOptions: [
      { img: "images/Play.png", audio: "audio/Klenang.mp3", name: "Klenang" },
      {
        img: "images/Play.png",
        audio: "audio/Ceng-ceng.mp3",
        name: "Ceng-ceng",
      },
      {
        img: "images/Play.png",
        audio: "audio/PonggangNungNang.mp3",
        name: "Ponggang",
      },
      { img: "images/Play.png", audio: "audio/kendang.mp3", name: "Kendang" },
    ],
    answer: "Ponggang",
  },
  {
    image: "images/Klentong No Bacgroundnew - Salin.png",
    soundOptions: [
      { img: "images/Play.png", audio: "audio/Klentong.mp3", name: "Klentong" },
      {
        img: "images/Play.png",
        audio: "audio/Ceng-ceng.mp3",
        name: "Ceng-ceng",
      },
      { img: "images/Play.png", audio: "audio/Gongg.mp3", name: "Gong" },
      { img: "images/Play.png", audio: "audio/kendang.mp3", name: "Kendang" },
    ],
    answer: "Klentong",
  },

  // Tambahkan lebih banyak soal di sini jika perlu
];

let currentQuestion = 0;
let score = 0;

const shuffledQuestions = questions
  .sort(() => Math.random() - 0.5)
  .slice(0, 10);

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-image").src = q.image;
  const container = document.querySelector(".options");
  container.innerHTML = "";

  q.soundOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.innerHTML = `<img src="${opt.img}">`;
    btn.onclick = () => {
      const audio = new Audio(opt.audio);
      audio.play();

      // Munculkan pop-up tanya
      showConfirm(``, q.image, () => checkAnswer(opt.name));
    };
    container.appendChild(btn);
  });
}

function showConfirm(text, imageSrc, yesCallback) {
  const box = document.getElementById("confirm-box");
  const img = document.getElementById("confirm-image");
  document.getElementById("confirm-text").innerText = text;
  img.src = imageSrc;
  box.style.display = "block";

  document.getElementById("yes-btn").onclick = () => {
    box.style.display = "none";
    yesCallback();
  };
  document.getElementById("no-btn").onclick = () => {
    box.style.display = "none";
  };
}

function checkAnswer(selected) {
  const q = shuffledQuestions[currentQuestion];
  if (selected === q.answer) {
    score++;
    showPopup("✅", true);
  } else {
    showPopup("❌", false);
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
  }, 1500);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < shuffledQuestions.length) {
    showQuestion();
  } else {
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
