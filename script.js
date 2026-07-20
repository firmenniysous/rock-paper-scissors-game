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

let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let paper = document.getElementById("paper");

function getHumanCoice(choice) {
    if (rock) {
        choice = 'rock';
    } else if (paper) {
        choice = 'paper';
    } else {choice = 'scissors'};
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanCoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log('Tie');
        console.log(`Your score is ${humanScore}`);
        console.log(`Computer score is ${computerScore}`);
    } else if (humanChoice === 'rock' && computerChoice === 'paper'
        || humanChoice === 'paper' && computerChoice === 'scissors'
        || humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log(`You lost this time, ${computerChoice} beats ${humanChoice}.`);
            console.log(`Your score is ${humanScore}`);
            console.log(`Computer score is ${++computerScore}.`);
        } else if (humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'scissors' && computerChoice === 'paper' 
            || humanChoice === 'paper' && computerChoice === 'rock'
        ) {
            console.log(`You win the round, ${humanChoice} beats ${computerChoice}!`);
            console.log(`Your score is ${++humanScore}`);
            console.log(`Computer score is ${computerScore}`);
        }
}
rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);