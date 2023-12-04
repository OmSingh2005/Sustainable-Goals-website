// Sample questions and answers
const quizData = [
    {
      question: "What is the primary goal of solid waste management?",
      options: ["Reduce waste generation", "better waste disposal", "solve waste issues","All of these"],
      correctAnswer: "All of these"
    },
    {
        question: "What is a common consequence of improper waste disposal and open dumping?",
        options: ["Increased recycling rates", "Soil and water pollution", "Enhanced community awareness", "Accelerated waste decomposition"],
        correctAnswer: "Soil and water pollution"
      },
      {
        question: "Inadequate waste management infrastructure often leads to:",
        options: ["Efficient waste collection", "Increased landfill capacity", "Improper waste disposal practices", "Minimal impact on public health"],
        correctAnswer: "Improper waste disposal practices"
      },
      {
        question: "How does a lack of public awareness contribute to solid waste management problems?",
        options: ["Encourages responsible waste disposal", "Promotes community engagement in waste reduction", "Results in improper waste sorting and disposal", "Enhances recycling efforts"],
        correctAnswer: "Results in improper waste sorting and disposal"
      },
      {
        question: "What challenge does rapid urbanization pose to solid waste management?",
        options: ["Decreased waste generation", "Improved waste collection efficiency", "Increased strain on waste management infrastructure", "Reduced environmental impact"],
        correctAnswer: "Increased strain on waste management infrastructure"
      },
      {
        question: "What is a consequence of poor waste segregation practices?",
        options: ["Facilitates efficient recycling", "Reduces contamination in recycling streams", "Hinders recycling processes and quality", "Accelerates composting of organic waste"],
        correctAnswer: "Hinders recycling processes and quality"
      },
      {
        question: "Limited recycling facilities contribute to:",
        options: ["Increased recycling rates", "Effective waste diversion from landfills", "Challenges in recycling certain materials", "Enhanced public participation in recycling"],
        correctAnswer: "Challenges in recycling certain materials"
      },
      {
        question: "How does inadequate management of hazardous waste impact the environment?",
        options: ["Promotes ecosystem health", "Minimizes soil and water contamination risks", "Poses risks to human health and ecosystems", "Accelerates natural resource conservation"],
        correctAnswer: "Poses risks to human health and ecosystems"
      },
      {
        question: "What is a common consequence of resource constraints in waste management?",
        options: ["Improved waste collection efficiency", "Increased investment in waste infrastructure", "Limited funds for waste reduction initiatives", "Enhanced waste-to-energy technologies"],
        correctAnswer: "Limited funds for waste reduction initiatives"
      },
      {
        question: "How does improper waste management contribute to climate change?",
        options: ["Reduces greenhouse gas emissions", "Accelerates deforestation", "Facilitates carbon sequestration", "Releases methane from landfills"],
        correctAnswer: "Releases methane from landfills"
      },
      {
        question: "What is a common challenge in implementing effective waste management policies?",
        options: ["Streamlined regulatory frameworks", "Limited stakeholder involvement", "Consistent enforcement of regulations", "Effective public communication on policies"],
        correctAnswer: "Limited stakeholder involvement"
      }
    
    // Add more questions here...
  ];
  
  
  // Function to display questions and options
  function displayQuiz() {
    const quizForm = document.getElementById("quiz-form");
    quizData.forEach((questionData, index) => {
      const questionContainer = document.createElement("div");
      questionContainer.classList.add("question-container");
  
      questionContainer.innerHTML = `
      <div class="question">
        <p>${index + 1}. ${questionData.question}</p>
      </div>
      <div class="options">
        ${questionData.options.map((option, optionIndex) => `
          <label>
            <input type="radio" name="q${index}" value="${option}" required>
            ${option}
          </label>
          <br>
        `).join("")}
      </div>
    `;
  
      quizForm.appendChild(questionContainer);
    });
    // Add the submit button after all questions
  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.textContent = "Submit";
  submitButton.onclick = calculateScore;

  quizForm.appendChild(submitButton);
  }
  
  
  // Function to calculate the quiz score
  function calculateScore() {
    const quizForm = document.getElementById("quiz-form");
    const resultContainer = document.getElementById("result");
  
    let score = 0;
  
    quizData.forEach((questionData, index) => {
      const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
      if (selectedOption) {
        if (selectedOption.value === questionData.correctAnswer) {
          score++;
        }
      }
    });
  
    resultContainer.textContent = `Your Score: ${score} out of ${quizData.length}`;
  }
  
  // Display the quiz when the page loads
  window.onload = displayQuiz;
  