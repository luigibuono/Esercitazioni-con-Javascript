let score = 0;
const totalRounds = 5;
let currentRound = 1;
let currentCountry = {};

async function fetchCountryData() {
  try {
    const response = await fetch('https://restcountries.com/v3/all');
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.log('Error fetching data:', error);
    return [];
  }
}

function getRandomCountry(countries) {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
}

function displayQuestion(country) {
  const questionElement = document.getElementById('question');
  questionElement.textContent = `What is the capital of ${country.name.common}?`;
}

function checkAnswer() {
  const answerElement = document.getElementById('answer');
  const resultElement = document.getElementById('result');

  const userAnswer = answerElement.value.trim().toLowerCase();
  const correctAnswer = currentCountry.capital?.[0]?.toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    resultElement.textContent = 'Correct!';
  } else {
    resultElement.textContent = `Wrong! The correct answer is ${correctAnswer}.`;
  }

  currentRound++;
  document.getElementById('score').textContent = `Score: ${score}`;

  if (currentRound <= totalRounds) {
    nextRound();
  } else {
    endGame();
  }
}

function nextRound() {
  answerElement.value = '';
  currentCountry = getRandomCountry(countries);
  displayQuestion(currentCountry);
}

function endGame() {
  const questionElement = document.getElementById('question');
  questionElement.textContent = 'Game Over!';
  const answerElement = document.getElementById('answer');
  answerElement.style.display = 'none';
  const submitButton = document.querySelector('button');
  submitButton.style.display = 'none';
}

function newGame() {
  score = 0;
  currentRound = 1;
  answerElement.style.display = 'block';
  const submitButton = document.querySelector('button');
  submitButton.style.display = 'block';
  startGame();
}

let countries = [];
const answerElement = document.getElementById('answer');

async function startGame() {
  countries = await fetchCountryData();
  currentCountry = getRandomCountry(countries);
  displayQuestion(currentCountry);

  answerElement.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  });
}

startGame();
