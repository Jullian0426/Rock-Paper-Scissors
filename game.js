// Function to randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (playerChoice === computerChoice) {
      return `It's a tie! Both played ${playerSelection}`;
  } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// Function to play a five round game
function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose Rock, Paper, or Scissors:").trim();
      const computerSelection = getComputerChoice();
      console.log(`Round ${i+1}:`);
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
      if (result.startsWith("You Win")) {
          playerScore++;
      } else if (result.startsWith("You Lose")) {
          computerScore++;
      }
  }
  if (playerScore > computerScore) {
      console.log(`Game Over: You won ${playerScore} to ${computerScore}!`);
  } else if (playerScore < computerScore) {
      console.log(`Game Over: You lost ${playerScore} to ${computerScore}!`);
  } else {
      console.log(`Game Over: It's a tie ${playerScore} to ${computerScore}!`);
  }
}
