let playerScore = 0;
let computerScore = 0;

// Function to randomly return either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const resultDisplay = document.getElementById('results');
    const scoreDisplay = document.getElementById('score');
    
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        resultDisplay.textContent = `It's a tie! Both played ${playerSelection}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'paper' && computerSelection === 'Rock')
    ) {
        playerScore++;
        resultDisplay.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        resultDisplay.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    scoreDisplay.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? 'Player' : 'Computer';
        resultDisplay.textContent = `Game Over: ${winner} wins!`;
        playerScore = 0; // Reset scores
        computerScore = 0;
    }
}

// Adding event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
