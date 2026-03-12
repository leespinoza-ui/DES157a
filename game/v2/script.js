(function () {
  "use strict";
const score0El = document.getElementById("score-0");
const score1El = document.getElementById("score-1");
const current0El = document.getElementById("current-0");
const current1El = document.getElementById("current-1");

const player0El = document.querySelector(".player1");
const player1El = document.querySelector(".player2");

const dice1El = document.getElementById("dice-1");
const dice2El = document.getElementById("dice-2");

const messageEl = document.getElementById("message");
const turnIndicatorEl = document.getElementById("turn-indicator");

const rollBtn = document.getElementById("roll-btn");
const holdBtn = document.getElementById("hold-btn");

const diceImages = [
  "images/one.png",
  "images/two.png",
  "images/three.png",
  "images/four.png",
  "images/five.png",
  "images/six.png"
];

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

function updateTurnLabels() {
  if (activePlayer === 0) {
    player0El.querySelector(".player-label").textContent = "Current Player";
    player1El.querySelector(".player-label").textContent = "Waiting";
    turnIndicatorEl.textContent = "Player 1's Turn";
  } else {
    player0El.querySelector(".player-label").textContent = "Waiting";
    player1El.querySelector(".player-label").textContent = "Current Player";
    turnIndicatorEl.textContent = "Player 2's Turn";
  }
}

function switchPlayer() {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("active-player");
  player1El.classList.toggle("active-player");

  updateTurnLabels();
}

function animateDice() {
  dice1El.classList.remove("roll-animation");
  dice2El.classList.remove("roll-animation");

  void dice1El.offsetWidth;
  void dice2El.offsetWidth;

  dice1El.classList.add("roll-animation");
  dice2El.classList.add("roll-animation");
}

rollBtn.addEventListener("click", function () {
  if (!playing) return;

  const dice1 = Math.trunc(Math.random() * 6) + 1;
  const dice2 = Math.trunc(Math.random() * 6) + 1;

  dice1El.src = diceImages[dice1 - 1];
  dice2El.src = diceImages[dice2 - 1];

  dice1El.alt = `dice showing ${dice1}`;
  dice2El.alt = `dice showing ${dice2}`;

  animateDice();

  if (dice1 !== 1 && dice2 !== 1) {
    currentScore += dice1 + dice2;
    document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    messageEl.textContent = `You rolled ${dice1} and ${dice2}. Turn total: ${currentScore}`;
  } else {
    messageEl.textContent = `A 1 was rolled. Turn over!`;
    switchPlayer();
  }
});

holdBtn.addEventListener("click", function () {
  if (!playing) return;

  scores[activePlayer] += currentScore;
  document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
  document.getElementById(`current-${activePlayer}`).textContent = 0;

  if (scores[activePlayer] >= 100) {
    playing = false;
    turnIndicatorEl.textContent = `Player ${activePlayer + 1} Wins!`;
    messageEl.textContent = `Player ${activePlayer + 1} reached 100 points!`;
    player0El.querySelector(".player-label").textContent = activePlayer === 0 ? "Winner" : "Game Over";
    player1El.querySelector(".player-label").textContent = activePlayer === 1 ? "Winner" : "Game Over";
    rollBtn.disabled = true;
    holdBtn.disabled = true;
    rollBtn.style.opacity = "0.6";
    holdBtn.style.opacity = "0.6";
  } else {
    messageEl.textContent = `Points saved!`;
    currentScore = 0;
    switchPlayer();
  }
});

updateTurnLabels();
})();