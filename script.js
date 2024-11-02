const questions = [
    {
      question: "What is the only even prime number?",
      options: ["8", "11", "2", "5"],
      answer: 2
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: 1
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Lisbon", "Rome"],
      answer: 0
    },
    {
       question: "How many legs does an octopus have?",
       options: ["9", "12", "3", "8"],
       answer: 3
    },
    {
        question: "What is the fastest animal?",
        options: ["Lion", "Tiger", "Cheetah", "Alligator"],
        answer: 2
     },
     {
        question: "What animal can't jump?",
        options: ["Zebra", "Elephant", "Monkey", "Shark"],
        answer: 1
     }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
  }
  
  function showQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.querySelectorAll(".option");
  
    questionElement.innerText = questions[currentQuestionIndex].question;
    options.forEach((option, index) => {
      option.innerText = questions[currentQuestionIndex].options[index];
      option.classList.remove("correct", "wrong");
      option.disabled = false;
    });
  
    document.getElementById("next-btn").style.display = "none";
  }
  
  function selectAnswer(index) {
    const selectedOption = document.querySelectorAll(".option")[index];
    const correctAnswer = questions[currentQuestionIndex].answer;
  
    if (index === correctAnswer) {
      selectedOption.classList.add("correct");
      score++;
    } else {
      selectedOption.classList.add("wrong");
      document.querySelectorAll(".option")[correctAnswer].classList.add("correct");
    }
  
    document.querySelectorAll(".option").forEach(option => option.disabled = true);
    document.getElementById("next-btn").style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;
  }
  