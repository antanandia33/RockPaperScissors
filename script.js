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
  if (words[0] == 'Tie!') {
    rInfo.textContent = words[0];
    rMsg.textContent = '';
  } else if (words[1] === "Win!") {
    rInfo.textContent = `${words[0]} ${words[1]}`;
    let msgArray = words.slice(2,words.length);
    rMsg.textContent = msgArray.join(' ');
  } else if (words[1] === "Lose!") {
    rInfo.textContent = `${words[0]} ${words[1]}`;
    let msgArray = words.slice(2,words.length);
    rMsg.textContent = msgArray.join(' ');
  }
}

function winner(outcome) {
  modal.showModal();
  const modalText = document.querySelector('.gameResult');
  modalText.textContent = `You ${outcome} The Game!`;
}

function checkIfGameOver() {
  if (player === 5) {
    console.log("youwin")
    winner('Win');
  } else if (computer === 5) {
    console.log("youlose")
    winner('Lose');
  }
}

function playRound(selection) {
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  let roundResultString = checkRoundWinner(selection, computerSelection);
  console.log(roundResultString);
  const words = roundResultString.split(" ");
  updateScoreBoxes(selection, computerSelection, words);
  updateScoreInfo(words);
  checkIfGameOver()
}

function restartGame() {
  player = 0;
  computer = 0;
  rInfo.textContent = 'Choose rock, paper, or scissors';
  rMsg.textContent = 'First to five points wins the game!';
  playerScore.textContent = 'Player: 0';
  compScore.textContent = 'Computer: 0';
  playerSign.textContent = '❔';
  compSign.textContent = '❔';
  modal.close();
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
const rInfo = document.querySelector('.roundInfo');
const rMsg = document.querySelector('.roundMessage');
const modal = document.querySelector('.modal');
const restartBtn = document.querySelector('.buttonRestart');


rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () =>  playRound('scissors'));
restartBtn.addEventListener('click', () => restartGame());