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

function playRound(humanChoice, computerChoice) {
    
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        displayResult.textContent = `Tie! Your score is ${humanScore}. Computer score is ${computerScore}.`;
    } else if (humanChoice === 'rock' && computerChoice === 'paper'
        || humanChoice === 'paper' && computerChoice === 'scissors'
        || humanChoice === 'scissors' && computerChoice === 'rock') {
            ++computerScore;
            displayResult.textContent = `You lost this time, ${computerChoice} beats ${humanChoice}. Your score is ${humanScore}. Computer score is ${computerScore}.`
        } else if (humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'scissors' && computerChoice === 'paper' 
            || humanChoice === 'paper' && computerChoice === 'rock'
        ) {
            ++humanScore;
            displayResult.textContent = `You win the round, ${humanChoice} beats ${computerChoice}! Your score is ${humanScore}. Computer score is ${computerScore}.`
        }
    } 

rock.addEventListener("click", () => {
    playRound('rock', getComputerChoice);
});
paper.addEventListener("click", () => {
    playRound('paper', getComputerChoice);
});
scissors.addEventListener("click", () => {
    playRound('scissors', getComputerChoice);
});
//Make a function that makes a game play until one the of players get 5 points. Remove all unnecessary console messages.