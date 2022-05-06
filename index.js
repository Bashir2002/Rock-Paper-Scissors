let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let playerImg = document.getElementById("playerimg");
let computerimg = document.getElementById("computerimg");
let resultsheet = document.querySelector("h1");
let screen1 = document.getElementById("score1");
let screen2 = document.getElementById("score2");

let playNumber;
let playerSelection;
let result;
let playerScore = 0;
let computerScore = 0;
screen1.textContent = playerScore;
screen2.textContent = computerScore;

btn1.addEventListener("click", () => {
  playerSelection = "rock";
  playerImg.src = `paper2.jpg`;
  playNumber = Math.floor(Math.random() * 3);
  console.log(playerSelection);
  console.log(computerPlay());
  console.log(playNumber);
  //   console.log(playerRound(computerPlay(), playerSelection));
  game();
  computerPlay();
  playerRound(computerPlay(), playerSelection);
  resultsheet.textContent = result;
});
btn2.addEventListener("click", () => {
  playerSelection = "scissors";
  playerImg.src = `paper0.jpg`;
  playNumber = Math.floor(Math.random() * 3);
  game();
  computerPlay();
  playerRound(computerPlay(), playerSelection);
  resultsheet.textContent = result;
});
btn3.addEventListener("click", () => {
  playerSelection = "paper";
  playerImg.src = `paper1.jpg`;
  playNumber = Math.floor(Math.random() * 3);
  game();
  computerPlay();
  playerRound(computerPlay(), playerSelection);
  resultsheet.textContent = result;
});

// let playNumber;
function computerPlay() {
  play = ["scissors", "paper", "rock"];
  computerimg.src = `paper${playNumber}.jpg`;
  return play[playNumber];
}
function playerRound(computerSelection, playerSelection) {
  //   computerSelection = computerPlay();
  if (computerSelection == "rock" && playerSelection == "rock") {
    result = "This round is a draw";
    // console.log(result);
  } else if (computerSelection == "paper" && playerSelection == "paper") {
    result = "This round is a draw";
    // console.log(result);
  } else if (computerSelection == "scissors" && playerSelection == "scissors") {
    result = "This round is a draw";
    console.log(result);
  } else if (computerSelection == "rock" && playerSelection !== "paper") {
    result = "Computer won this round";
    // console.log(result);
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    result = "Player won this round";
    console.log(result);
  } else if (computerSelection == "paper" && playerSelection !== "rock") {
    result = "player won this round";
    // console.log(result);
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    result = "Computer won this round";
    // console.log(result);
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    result = "Player won this round";
    // console.log(result);
    game();
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    result = "Computer won this round";
    game();
    // console.log(result);
  }
  return result;
}
function game() {
  if (result === "Player won this round") {
    playerScore++;
    screen1.textContent = playerScore;
  } else if (result == "Computer won this round") {
    computerScore++;
    screen2.textContent = computerScore;
  } else {
    playerScore;
  }
}

console.log(playerScore);
