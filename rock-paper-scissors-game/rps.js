let computer = '';
let player = '';
let result = '';
const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

/* const autoPlay = ()=> {

}; */
const autoPlayButton = document.querySelector('.js-auto-play-button');
function autoPlay() {

  if (!isAutoPlaying) {
    // setInterval function returns a number, so we can use that number which is an Id to stop the set interval function using the clear interval
    intervalId = setInterval(() => {
      const playerMove = computerChoice();
      resultRPS(playerMove);
    }, 1000);
    isAutoPlaying = true;
    autoPlayButton.innerText = 'Stop Play';
  } else {
    clearInterval(intervalId);
    autoPlayButton.innerText = 'Auto Play';
    isAutoPlaying = false;
  }

}

const rockEl = document.querySelector('.js-rock-button');
rockEl.addEventListener('click', () => {
  resultRPS('rock');
});

const paperEl = document.querySelector('.js-paper-button');
paperEl.addEventListener('click', () => {
  resultRPS('paper');
});

const scissorsEl = document.querySelector('.js-scissors-button');
scissorsEl.addEventListener('click', () => {
  resultRPS('scissors');
})

const resetEl = document.querySelector('.js-reset-score-button');
resetEl.addEventListener('click', () => {
  resetScore();
});
function resetScore() {
  const resetParaEl = document.createElement('p');
  resetParaEl.innerHTML = 'Are you sure you want to reset the score? <button class="js-confirmation-button yes-button">Yes</button><button class="js-confirmation-button no-button">No</button>';
  bodyEl.appendChild(resetParaEl);
  document.querySelector('.yes-button').addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    resetParaEl.remove();
  });
  document.querySelector('.no-button').addEventListener('click', () => {
    resetParaEl.remove();
  })

}
autoPlayButton.addEventListener('click', () => {
  autoPlay();
});

const bodyEl = document.querySelector('body');
bodyEl.addEventListener('keydown', (event) => {
  /* console.log('keydown');
  console.log(event.key); */
  if (event.key === 'r') {
    resultRPS('rock');
  } else if (event.key === 'p') {
    resultRPS('paper');
  } else if (event.key === 's') {
    resultRPS('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    resetScore();
  }
});

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
    <img class="move-icon" src="images/${player}-emoji.png" alt="rock">
    <img class="move-icon" src="images/${computer}-emoji.png" alt="scissors">
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