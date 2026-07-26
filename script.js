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

let rock = document.createElement("button");
rock.textContent = 'Rock';
rock.setAttribute('id', 'rock');

let scissors = document.createElement("button");
scissors.textContent = 'Scissors';
scissors.setAttribute('id', 'scissors');

let paper = document.createElement("button");
paper.textContent = 'Paper'
paper.setAttribute('id', 'paper');
let body = document.querySelector("body");

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

let startGame = document.getElementById("start-game");

startGame.addEventListener("click", e => {
    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);
    e.target.remove();
});

rock.addEventListener("click", () => {
    playRound('rock');
});
paper.addEventListener("click", () => {
    playRound('paper');
});
scissors.addEventListener("click", () => {
    playRound('scissors');
});