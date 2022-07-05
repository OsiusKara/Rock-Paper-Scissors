// Global variables---------------------->
const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  // 5 rounds
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

//Player Choice
function playerChoice() {
  let input = prompt("Type Rock, Paper or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors");
  }

  input = input.toLowerCase();
  let check = validateInput(input);

  while (check == false) {
    input = prompt(
      "Type Rock, Paper or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
    );
    while (input == null) {
      input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

//Computer Choice random
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to validate if the input is one of the 3 options R P S
function validateInput(choice) {
  return choices.includes(choice);
}

// Who Win ----- Conditions
function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP == "rock" && choiceC == "scissors") ||
    (choiceP == "paper" && choiceC == "rock") ||
    (choiceP == "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

// Who Wins in the Console
function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties", ties);
}

//Displaying the results of each round in the Console!
function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose", computerChoice);
  console.log(winner, "Won the Round");
  console.log("------------------------------");
}
