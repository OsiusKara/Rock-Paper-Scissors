// Global variables----------------------------------------------------->
const choices = ["rock", "paper", "scissors"];
const winners = [];

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");

const questionMark1 = document.querySelector(".scorebox1 img");
const questionMark2 = document.querySelector(".scorebox2 img");

const rock2image = document.createElement("img");
const paper2image = document.createElement("img");
const scissors2image = document.createElement("img");

const rock3image = document.createElement("img");
const paper3image = document.createElement("img");
const scissors3image = document.createElement("img");

const srcPlayer = document.getElementById("player-weapon");
const srcComp = document.getElementById("comp-weapon");

const scoreBoardHeader = document.getElementById("score-header");
const scoreMessage = document.getElementById("score-message");

const computerSelection = computerChoice();

const playerScoring = document.getElementById("player-score");
const compScoring = document.getElementById("comp-score");

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

// Player Selection --------------------------------------------------------->
rockBtn.addEventListener("click", function () {
  playerSelection = "rock";
  displayPlayer();
  rock2image.src = "./images/rock2.png";
  paper2image.classList.add("hidden");
  scissors2image.classList.add("hidden");
  rock2image.classList.remove("hidden");
  srcPlayer.appendChild(rock2image);
  displayComp();
  playRound();
  updateScore();
});

paperBtn.addEventListener("click", function () {
  playerSelection = "paper";
  displayPlayer();
  paper2image.src = "./images/paper2.png";
  rock2image.classList.add("hidden");
  scissors2image.classList.add("hidden");
  paper2image.classList.remove("hidden");
  srcPlayer.appendChild(paper2image);
  displayComp();
  playRound();
  updateScore();
});

scissorsBtn.addEventListener("click", function () {
  playerSelection = "scissors";
  displayPlayer();
  rock2image.classList.add("hidden");
  paper2image.classList.add("hidden");
  scissors2image.classList.remove("hidden");
  scissors2image.src = "./images/scissors2.png";
  srcPlayer.appendChild(scissors2image);
  displayComp();
  playRound();
  updateScore();
});

function displayPlayer() {
  questionMark1.classList.add("hidden");
  console.log("PlayerChoice: " + playerSelection);
}

// Computer Selection ------------------------------------------------------->
function displayComp() {
  questionMark2.classList.add("hidden");

  if (computerSelection === "rock") {
    rock3image.src = "./images/rock3.png";
    srcComp.appendChild(rock3image);
  } else if (computerSelection === "paper") {
    paper3image.src = "./images/paper3.png";
    srcComp.appendChild(paper3image);
  } else {
    scissors3image.src = "./images/scissors3.png";
    srcComp.appendChild(scissors3image);
  }
  console.log("ComputerChoice: " + computerSelection);
  console.log("====================");
}

//Computer Choice random------------------------------------------------->
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Play Round------------------------------------------------------------->
function playRound() {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
    playerScore++;
    roundWinner = "player";
  } else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "rock")) {
    computerScore++;
    roundWinner = "computer";
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

// Update Header Round Winner-------------------------------------------->
function updateScore() {
  if (roundWinner === "tie") {
    scoreBoardHeader.textContent = "It's a Tie!";
    scoreBoardHeader.style.color = "#f9c024";
  } else if (roundWinner === "player") {
    scoreBoardHeader.textContent = "Player Won!";
    scoreBoardHeader.style.color = "#03a303";
  } else if (roundWinner === "computer") {
    scoreBoardHeader.textContent = "Computer Won!";
    scoreBoardHeader.style.color = "#e20b0b";
  }
  playerScoring.textContent = `Player: ${playerScore}`;
  compScoring.textContent = `Comp: ${computerScore}`;
}

//Update Score Message------------------------------------------------->

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === "player") {
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
    scoreMessage.style.fontSize = "1.2rem";
    return;
  }
  if (winner === "computer") {
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} is beaten by ${capitalizeFirstLetter(computerSelection)}`;
    scoreMessage.style.fontSize = "1.2rem";
    return;
  } else {
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} ties with ${capitalizeFirstLetter(computerSelection)}`;
    scoreMessage.style.fontSize = "1.2rem";
    return;
  }
}

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.substring(1);
}

// function game() {
//   // 5 rounds
//   for (let i = 1; i <= 5; i++) {
//     playRound(i);
//   }
//   document.querySelector("button").textContent = "Play Again";
//   logWins();
// }

// function playRound(round) {
//   const playerSelection = playerChoice();
//   const computerSelection = computerChoice();
//   const winner = checkWinner(playerSelection, computerSelection);
//   winners.push(winner);
//   // logRound(playerSelection, computerSelection, winner, round);
// }

// function checkWinner(choiceP, choiceC) {
//   if (choiceP === choiceC) {
//     console.log("IT'S A TIE!");
//     return "Tie";
//   } else if ((choiceP == "rock" && choiceC == "scissors") || (choiceP == "paper" && choiceC == "rock") || (choiceP == "scissors" && choiceC == "paper")) {
//     console.log("PLAYER WINS");
//     return "Player";
//   } else {
//     console.log("COMPUTER WINS");
//     return "Computer";
//   }
// }
