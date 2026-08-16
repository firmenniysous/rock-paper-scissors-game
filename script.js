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
let humanWinnings = 0;
let computerWinnings = 0;

let rock = document.createElement("button");
rock.textContent = 'ROCK';
rock.setAttribute('id', 'rock');
rock.classList.add('playing-buttons');

let scissors = document.createElement("button");
scissors.textContent = 'SCISSORS';
scissors.setAttribute('id', 'scissors');
scissors.classList.add('playing-buttons');

let paper = document.createElement("button");
paper.textContent = 'PAPER';
paper.setAttribute('id', 'paper');
paper.classList.add('playing-buttons');

let restartWinnings = document.createElement('button');
restartWinnings.textContent = 'RESTART WINNINGS';
restartWinnings.setAttribute("id", "restart-winnings");
restartWinnings.style.backgroundColor = 'rgb(71, 22, 22)';

let body = document.querySelector("body");
let main = document.querySelector("main");

let rps = document.getElementById("rps");
let hOne = document.querySelector("h1");

let displayResult = document.createElement("p");
displayResult.setAttribute('id', 'display-result');

let displayHumanScore = document.createElement("p");
displayHumanScore.setAttribute('id', 'display-human-score');
displayHumanScore.classList.add('display-score');

let displayCompScore = document.createElement("p");
displayCompScore.setAttribute('id', 'display-comp-score');
displayCompScore.classList.add('display-score');

let winningsBox = document.getElementById("winnings-box");

let displayHumanWinnings = document.getElementById("human-winnings");
let displayComputerWinnings = document.getElementById('computer-winnings');
let startStrong = document.createElement("strong");
startStrong.textContent = 'START';
let dot = document.createElement('span');
dot.textContent = '.';

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
            displayResult.textContent = `You lose this time, ${computerChoice} beats ${humanChoice}.`;    
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
            instruction.after(startGame);
            rock.remove();
            paper.remove();
            scissors.remove();
            humanScore = 0;
            computerScore = 0;
            displayHumanScore.remove();
            displayCompScore.remove();
            ++humanWinnings;
            displayHumanWinnings.textContent = `Your winnings: ${humanWinnings}`;
            displayComputerWinnings.textContent = `Computer winnings: ${computerWinnings}`;
            winningsBox.appendChild(displayHumanWinnings);
            winningsBox.appendChild(displayComputerWinnings);
            main.appendChild(restartWinnings);
            restartWinnings.style.backgroundColor = 'rgb(71, 22, 22)'
            instruction.textContent = `To start a new game press `;
            instruction.appendChild(startStrong);
            instruction.appendChild(dot);
        } else if (computerScore === 5) {
            displayResult.textContent = 'You lose the game. Try again.'
            instruction.after(startGame);
            rock.remove();
            paper.remove();
            scissors.remove();
            humanScore = 0;
            computerScore = 0;
            displayHumanScore.remove();
            displayCompScore.remove();
            ++computerWinnings;
            displayHumanWinnings.textContent = `Your winnings: ${humanWinnings}`;
            displayComputerWinnings.textContent = `Computer winnings: ${computerWinnings}`;
            winningsBox.appendChild(displayHumanWinnings);
            winningsBox.appendChild(displayComputerWinnings);
            main.appendChild(restartWinnings);
            restartWinnings.style.backgroundColor = 'rgb(71, 22, 22)'
            instruction.textContent = `To start a new game press `;
            instruction.appendChild(startStrong);
            instruction.appendChild(dot);
        }
    }

let startGame = document.getElementById("start-game");
let instruction = document.getElementById("instruction");
let scores = document.createElement('div');
scores.setAttribute('id', 'scores');

startGame.addEventListener("click", e => {
    displayResult.textContent = 'Choose the option.'
    displayHumanScore.textContent = 'Your score: 0';
    displayCompScore.textContent = 'Computer score: 0';
    instruction.textContent = 'First who reaches 5 points wins the game!'
    rps.appendChild(rock);
    rps.appendChild(paper);
    rps.appendChild(scissors);
    main.appendChild(displayResult);
    main.appendChild(scores);
    scores.appendChild(displayHumanScore);
    scores.appendChild(displayCompScore);
    e.target.remove();
    displayHumanWinnings.remove();
    displayComputerWinnings.remove();
    restartWinnings.remove();
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

restartWinnings.addEventListener("click", e => {
    instruction.remove();
    startGame.remove();
    displayResult.remove();
    displayHumanWinnings.remove();
    displayComputerWinnings.remove();
    e.target.remove();
    let areYouSureQuestion = document.createElement('p');
    areYouSureQuestion.textContent = "Are you sure you want to remove all the winnings?"
    main.appendChild(areYouSureQuestion);
    let yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    let noButton = document.createElement('button');
    noButton.textContent = "No";
    main.appendChild(yesButton);
    main.appendChild(noButton);
    yesButton.addEventListener("click", e => {
        humanWinnings = 0;
        computerWinnings = 0;
        displayHumanWinnings.textContent = `Your winnings: ${humanWinnings}`;
        displayComputerWinnings.textContent = `Computer winnings: ${computerWinnings}`;
        e.target.remove();
        noButton.remove();
        areYouSureQuestion.remove();
        hOne.after(instruction);
        main.appendChild(startGame);
        main.appendChild(winningsBox);
        winningsBox.appendChild(displayHumanWinnings);
        winningsBox.appendChild(displayComputerWinnings);
    });
    noButton.addEventListener("click", e => {
        displayHumanWinnings.textContent = `Your winnings: ${humanWinnings}`;
        displayComputerWinnings.textContent = `Computer winnings: ${computerWinnings}`;
        yesButton.remove();
        e.target.remove();
        areYouSureQuestion.remove();
        hOne.after(instruction);
        main.appendChild(startGame);
        main.appendChild(winningsBox);
        winningsBox.appendChild(displayHumanWinnings);
        winningsBox.appendChild(displayComputerWinnings);
        main.appendChild(displayResult);
        main.appendChild(restartWinnings);
    })
});