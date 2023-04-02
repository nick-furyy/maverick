// Get the form element
const form = document.querySelector('#submit-form');

// Add an event listener for when the form is submitted
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the values from the form inputs
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const tip = document.querySelector('#tip').value;

  // Create a new list item element to display the tip
  const tipListItem = document.createElement('li');
  tipListItem.innerHTML = `<strong>${name}</strong> (${email}): ${tip}`;

  // Add the new list item to the "user tips" list
  const userTipsList = document.querySelector('#user-tips');
  userTipsList.appendChild(tipListItem);

  // Reset the form inputs
  form.reset();
});


// Define the questions and answers for the quiz
const quizQuestions = [
    {
      question: 'What is the environmental impact of industrial agriculture?',
      answers: [
        'Increased greenhouse gas emissions',
        'Deforestation',
        'Water pollution',
        'All of the above'
      ],
      correctAnswer: 3
    },
    {
      question: 'How can home gardening help reduce the impact of industrial agriculture?',
      answers: [
        'By reducing the amount of food that needs to be transported',
        'By reducing the use of pesticides and fertilizers',
        'By providing habitat for pollinators and other wildlife',
        'All of the above'
      ],
      correctAnswer: 3
    },
    // Add more questions here
  ];

  // Get the quiz element and create the quiz
  const quiz = document.querySelector('#quiz');
  let currentQuestion = 0;
  let score = 0;

  // Display the current question and answers
  function displayQuestion() {
    const question = quizQuestions[currentQuestion];
    const answersList = quiz.querySelector('#answers');

    quiz.querySelector('#question').textContent = question.question;
    answersList.innerHTML = '';

    question.answers.forEach((answer, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <input type="radio" id="answer-${index}" name="answer" value="${index}">
        <label for="answer-${index}">${answer}</label>
      `;
      answersList.appendChild(listItem);
    });
  }

  // Add an event listener for when the user submits their answer
  quiz.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
      displayQuestion();
    } else {
      // Show the user's final score
      quiz.innerHTML = `
        <h2>Quiz complete!</h2>
        <p>Your score is ${score} out of ${quizQuestions.length}.</p>
      `;
    }
  });

  // Start the quiz
  displayQuestion();
