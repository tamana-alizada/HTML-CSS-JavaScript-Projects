let computer = '';
let player = '';
let result = '';
const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement();

function resultRPS(playerChoice) {
  player = playerChoice;
  computerChoice();
  if (player === computer) {
    result = 'Tie.';
    score.ties++;
  } else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
    result = 'You win.';
    score.wins++;

  } else {
    result = 'You lose.';
    score.losses++;
  }
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-choices').innerHTML = `You
    <img class="move-icon" src="${player}-emoji.png" alt="rock">
    <img class="move-icon" src="${computer}-emoji.png" alt="scissors">
    Computer`;
  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function computerChoice() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computer = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computer = 'paper';
  } else {
    computer = 'scissors';
  }
  return computer;
}