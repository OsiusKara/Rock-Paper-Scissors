// Global variables---------------------->
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

const srcPlayer = document.getElementById("player-weapon");
const srcComp = document.getElementById("comp-weapon");

rockBtn.addEventListener("click", function () {
  playerSelection = "rock";
  rock2image.src = "./images/rock2.png";
  srcPlayer.appendChild(rock2image);
  paper2image.classList.add("hidden");
  scissors2image.classList.add("hidden");
  displayPlayer();
  // displayComp();
});

paperBtn.addEventListener("click", function () {
  playerSelection = "paper";
  paper2image.src = "./images/paper2.png";
  rock2image.classList.add("hidden");
  srcPlayer.appendChild(paper2image);
  scissors2image.classList.add("hidden");
  displayPlayer();
});

scissorsBtn.addEventListener("click", function () {
  playerSelection = "scissors";
  scissors2image.src = "./images/scissors2.png";
  srcPlayer.appendChild(scissors2image);
  paper2image.classList.add("hidden");
  rock2image.classList.add("hidden");
  displayPlayer();
});

function displayPlayer() {
  computerSelection = computerChoice();
  questionMark1.classList.add("hidden");
  console.log("PlayerChoice: " + playerSelection);
  console.log("ComputerChoice: " + computerSelection);
}

function displayComp(computerSelection) {
  if (computerSelection === "rock") {
    questionMark2.classList.add("hidden");
    rock2image.src = "./images/rock2.png";
    srcComp.appendChild(rock2image);
  } else if (computerSelection === "paper") {
    questionMark2.classList.add("hidden");
    paper2image.src = "./images/paper2.png";
    srcComp.appendChild(paper2image);
  }
}

//Computer Choice random
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
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
//   logRound(playerSelection, computerSelection, winner, round);
// }

// Player Choice
// function playerChoice() {
//   let input = prompt("Type Rock, Paper or Scissors");
//   while (input == null) {
//     input = prompt("Type Rock, Paper or Scissors");
//   }
//   input = input.toLowerCase();
//   let check = validateInput(input);
//   while (check == false) {
//     input = prompt("Type Rock, Paper or Scissors. Spelling needs to be exact, but capitilization doesnt matter");
//     while (input == null) {
//       input = prompt("Type Rock, Paper or Scissors");
//     }
//     input = input.toLowerCase();
//     check = validateInput(input);
//   }
//   return input;
// }

// // Function to validate if the input is one of the 3 options R P S
// function validateInput(choice) {
//   return choices.includes(choice);
// }

// Who Win ----- Conditions
// function checkWinner(choiceP, choiceC) {
//   if (choiceP === choiceC) {
//     return "Tie";
//   } else if ((choiceP == "rock" && choiceC == "scissors") || (choiceP == "paper" && choiceC == "rock") || (choiceP == "scissors" && choiceC == "paper")) {
//     return "Player";
//   } else {
//     return "Computer";
//   }
// }

// Who Wins in the Console
// function logWins() {
//   let playerWins = winners.filter((item) => item == "Player").length;
//   let computerWins = winners.filter((item) => item == "Computer").length;
//   let ties = winners.filter((item) => item == "Tie").length;
//   console.log("Results:");
//   console.log("Player Wins:", playerWins);
//   console.log("Computer Wins:", computerWins);
//   console.log("Ties", ties);
// }

// //Displaying the results of each round in the Console!
// function logRound(playerChoice, computerChoice, winner, round) {
//   console.log("Round", round);
//   console.log("Player Chose:", playerChoice);
//   console.log("Computer Chose", computerChoice);
//   console.log(winner, "Won the Round");
//   console.log("------------------------------");
// }
