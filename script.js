function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return 'rock'
    } else if (choice === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
let humanScore = 0;
let computerScore = 0;

let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let paper = document.getElementById("paper");

let displayResult = document.getElementById("display-result");
displayResult.textContent = 'First who reaches 5 points wins the game.';
let displayHumanScore = document.getElementById('display-human-score');
let displayCompScore = document.getElementById('display-comp-score');
displayHumanScore.textContent = 'Your score:';
displayCompScore.textContent = 'Computer score:';

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        displayResult.textContent = `Tie!`;
        displayHumanScore.textContent = `Your score: ${humanScore}`;
        displayCompScore.textContent = `Computer score: ${computerScore}`;
    } else if (humanChoice === 'rock' && computerChoice === 'paper'
        || humanChoice === 'paper' && computerChoice === 'scissors'
        || humanChoice === 'scissors' && computerChoice === 'rock') {
            ++computerScore;    
            displayResult.textContent = 'You lose this time.';    
            displayHumanScore.textContent = `Your score: ${humanScore}`;
            displayCompScore.textContent = `Computer score: ${computerScore}`;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'scissors' && computerChoice === 'paper' 
            || humanChoice === 'paper' && computerChoice === 'rock'
        ) {
            ++humanScore;
            displayResult.textContent = `You win the round, ${humanChoice} beats ${computerChoice}!`
            displayHumanScore.textContent = `Your score: ${humanScore}`;
            displayCompScore.textContent = `Computer score: ${computerScore}`;
        }
        if (humanScore === 5) {
            displayResult.textContent = 'Congratulations, you win the game!'
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            displayResult.textContent = 'Congr... oh. Ok, next time maybe:/'
            computerScore = 0;
            humanScore = 0;
        }
    }

rock.addEventListener("click", () => {
    playRound('rock');
});
paper.addEventListener("click", () => {
    playRound('paper');
});
scissors.addEventListener("click", () => {
    playRound('scissors');
});