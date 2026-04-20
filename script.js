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
};
function getHumanChoice(humanChoice) {
    humanChoice = prompt("Rock, paper or scissors?", '');
    return humanChoice.toLowerCase();
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
        return "It's a draw!";
    } else if (humanChoice === 'rock' && compChoice === 'paper'
        || humanChoice === 'paper' && compChoice === 'scissors'
        || humanChoice === 'scissors' && compChoice === 'rock') {
        computerScore++;
        return 'You lose...';
        
    } else {
        humanScore++;
        return 'You win!';
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection))

function playGame(round) {
    for (let i = 0; i < 5; i++) {
        return playRound();
    };

}
