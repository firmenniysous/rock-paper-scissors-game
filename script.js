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
    rock.addEventListener("click", () => console.log('rock'));
    scissors.addEventListener("click", () => console.log('scissors'));
    paper.addEventListener("click", () => console.log('paper'));
    if (rock) {
        choice = rock;
    } else if (paper) {
        choice = paper;
    } else {choice = scissors};
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanCoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        return 'Tie'
    } else if (humanChoice === 'rock' && computerChoice === 'paper'
        || humanChoice === 'paper' && computerChoice === 'scissors'
        || humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore = ++computerScore;
            return `You lost this time, ${computerChoice} beats ${humanChoice}.`
        } else if (humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'scissors' && computerChoice === 'paper' 
            || humanChoice === 'paper' && computerChoice === 'rock'
        ) {
            humanScore = ++humanScore;
            return `You win the round, ${humanChoice} beats ${computerChoice}!`
        }
}


getHumanCoice(); //just checking that function is working. Next time delete this line and write playGame function
