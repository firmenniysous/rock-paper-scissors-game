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

function playRound(humanChoice, computerChoice) {
    function getHumanCoice() {
    let choice = prompt("Rock, Paper or scissors?", '');
    return choice.toLowerCase();
}
    humanChoice = getHumanCoice().toLowerCase();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        return 'Tie'
    } else if (humanChoice === 'rock' && computerChoice === 'paper'
        || humanChoice === 'paper' && computerChoice === 'scissors'
        || humanChoice === 'scissors' && computerChoice === 'rock') {
            ++computerScore;
            return 'You lost this time...'
        } else if (humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'scissors' && computerChoice === 'paper' 
            || humanChoice === 'paper' && computerChoice === 'rock'
        ) {
            ++humanScore;
            return 'You win the round!'
        }
}
console.log(playRound());
