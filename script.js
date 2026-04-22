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
console.log(`Your score is ${humanScore}`);
console.log(`Computer's score is ${computerScore}`);
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
            computerScore = ++computerScore;
            return 'You lost this time...'
        } else if (humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'scissors' && computerChoice === 'paper' 
            || humanChoice === 'paper' && computerChoice === 'rock'
        ) {
            humanScore = ++humanScore;
            return 'You win the round!'
        }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log(`Your score is ${humanScore}`);
        console.log(`Computers score is ${computerScore}`);
    }
    if (humanScore === computerScore) {
        return "It's Draw! Reload the page to play one more time."
    } else if (humanScore > computerScore) {
        return 'YOU WIN THE GAME! Reload the page to play one more time.'
    } else {
        return 'You lost the game. Reload the page to retry!'
    }
}
console.log(playGame());