function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random()*choices.length)];
}

function checkRoundWinner(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  if (player === "rock") {
    if (computer === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (computer === "scissors") {
      return "You Win! Rock beats Scissors";
    } else if (computer === "rock") {
      return "Tie!";
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      return "You Win! Paper beats Rock!";
    } else if (computer === "scissors") {
      return "You Lose! Scissors beats Paper";
    } else if (computer === "paper") {
      return "Tie!";
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computer === "paper") {
      return "You Win! Scissors beats Paper";
    } else if (computer === "scissors") {
      return "Tie!";
    }
  }
}

function updateScoreBoxes(selection, compSelection, words) {
  switch(selection) {
    case 'rock':
      playerSign.textContent = '👊';
      break;
    case 'paper':
      playerSign.textContent = '✋';
      break;
    case 'scissors':
      playerSign.textContent = '✌️';
      break;
  }
  switch(compSelection) {
    case 'rock':
      compSign.textContent = '👊';
      break;
    case 'paper':
      compSign.textContent = '✋';
      break;
    case 'scissors':
      compSign.textContent = '✌️';
      break;
  }
  if(words[1] === "Win!") {
    player += 1;
    playerScore.textContent = `Player: ${player}`;
  } else if (words[1] === "Lose!") {
    computer += 1;
    compScore.textContent = `Computer: ${computer}`;
  }
}

function updateScoreInfo(words) {
  rInfo.textContent = "test123";
}

function playRound(selection) {
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  let roundResultString = checkRoundWinner(selection, computerSelection);
  console.log(roundResultString);
  const words = roundResultString.split(" ");
  updateScoreBoxes(selection, computerSelection, words);
  updateScoreInfo(words);
}

let player = 0;
let computer = 0;
const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');
const playerSign = document.getElementById('playerSign');
const compSign = document.getElementById('compSign');
const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('compScore');
const rInfo = document.getElementsByClassName('roundInfo')
const rMsg = document.getElementsByClassName('roundMessage')


rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () =>  playRound('scissors'));