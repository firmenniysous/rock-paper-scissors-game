function getComputerChoice(compChoice) {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        compChoice = 'rock';
    } else if (random === 2) {
        compChoice = 'paper';
    } else if (random === 3) {
        compChoice = 'scissors';
    }
    return compChoice;
}
console.log(getComputerChoice());
function getHumanChoice(humanChoice) {
    humanChoice = prompt("Rock, paper or scissors?", '');
    return humanChoice.toLowerCase();
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
        console.log("Draw!");
    } else if (humanChoice === 'rock' && compChoice === 'paper'
        || humanChoice === 'paper' && compChoice === 'scissors'
        || humanChoice === 'scissors' && compChoice === 'rock') {
        
        console.log(`Computer earns ${++computerScore} scores!`);
    } else {
        console.log(`You win! You earned ${++humanScore} scores!`)
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
