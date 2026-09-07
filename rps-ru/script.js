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
rock.textContent = 'КАМЕНЬ';
rock.setAttribute('id', 'rock');
rock.classList.add('playing-buttons');

let scissors = document.createElement("button");
scissors.textContent = 'НОЖНИЦЫ';
scissors.setAttribute('id', 'scissors');
scissors.classList.add('playing-buttons');

let paper = document.createElement("button");
paper.textContent = 'БУМАГА';
paper.setAttribute('id', 'paper');
paper.classList.add('playing-buttons');

let restartWinnings = document.createElement('button');
restartWinnings.textContent = 'СБРОСИТЬ ПОБЕДЫ';
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
startStrong.textContent = 'СТАРТ';
let dot = document.createElement('span');
dot.textContent = '.';

let chooseLanguage = document.getElementById("choose-language");
let figure = document.querySelector("figure");
let englishLanguage = document.createElement("a");
let listOfLanguages = document.createElement("list");
listOfLanguages.setAttribute("id", "list-of-languages");
englishLanguage.href = "../index.html"
englishLanguage.classList.add("language");
let englishFlag = document.createElement("img");
englishFlag.src = "../images/gb.svg";
englishFlag.classList.add("flags");
let englishCaption = document.createElement("p");
englishCaption.textContent = "English";
let russianLanguage = document.createElement("a");
russianLanguage.href = "index.html"
russianLanguage.classList.add("language");
let russianFlag = document.createElement("img");
russianFlag.src = "../images/ru.svg";
russianFlag.classList.add("flags");
let russianCaption = document.createElement("p");
russianCaption.textContent = "Русский";
chooseLanguage.addEventListener("click", e => {
    e.target.remove();
    startGame.remove();
    winningsBox.remove();
    figure.remove();
    instruction.textContent = "Выберите язык.";
    main.appendChild(listOfLanguages);
    listOfLanguages.appendChild(englishLanguage);
    englishLanguage.appendChild(englishFlag);
    englishLanguage.appendChild(englishCaption);
    listOfLanguages.appendChild(russianLanguage);
    russianLanguage.appendChild(russianFlag);
    russianLanguage.appendChild(russianCaption);
});

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        displayResult.textContent = `Ничья!`;
        displayHumanScore.textContent = `Ваши очки: ${humanScore}`;
        displayCompScore.textContent = `Очки ИИ: ${computerScore}`;
    } else if (humanChoice === 'rock' && computerChoice === 'paper'
        || humanChoice === 'paper' && computerChoice === 'scissors'
        || humanChoice === 'scissors' && computerChoice === 'rock') {
            ++computerScore;    
            displayResult.textContent = `В этот раз вам не повезло: выбор ИИ: ${computerChoice}, а ваш: ${humanChoice}.`;    
            displayHumanScore.textContent = `Ваши очки: ${humanScore}`;
            displayCompScore.textContent = `Очки ИИ: ${computerScore}`;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'scissors' && computerChoice === 'paper' 
            || humanChoice === 'paper' && computerChoice === 'rock'
        ) {
            ++humanScore;
            displayResult.textContent = `Вы выиграли раунд, ваш выбор: ${humanChoice}, а выбор ИИ: ${computerChoice}!`
            displayHumanScore.textContent = `Ваши очки: ${humanScore}`;
            displayCompScore.textContent = `Очки ИИ: ${computerScore}`;
        }
        if (humanScore === 5) {
            displayResult.textContent = 'Поздравляем, вы выиграли раунд!'
            instruction.after(startGame);
            rock.remove();
            paper.remove();
            scissors.remove();
            humanScore = 0;
            computerScore = 0;
            displayHumanScore.remove();
            displayCompScore.remove();
            ++humanWinnings;
            displayHumanWinnings.textContent = `Ваши победы: ${humanWinnings}`;
            displayComputerWinnings.textContent = `Победы ИИ: ${computerWinnings}`;
            winningsBox.appendChild(displayHumanWinnings);
            winningsBox.appendChild(displayComputerWinnings);
            main.appendChild(restartWinnings);
            restartWinnings.style.backgroundColor = 'rgb(71, 22, 22)'
            instruction.textContent = `Чтобы начать игру, нажмите `;
            instruction.appendChild(startStrong);
            instruction.appendChild(dot);
        } else if (computerScore === 5) {
            displayResult.textContent = 'К сожалению, вы проиграли. Попробуйте еще раз.'
            instruction.after(startGame);
            rock.remove();
            paper.remove();
            scissors.remove();
            humanScore = 0;
            computerScore = 0;
            displayHumanScore.remove();
            displayCompScore.remove();
            ++computerWinnings;
            displayHumanWinnings.textContent = `Ваши победы: ${humanWinnings}`;
            displayComputerWinnings.textContent = `Победы ИИ: ${computerWinnings}`;
            winningsBox.appendChild(displayHumanWinnings);
            winningsBox.appendChild(displayComputerWinnings);
            main.appendChild(restartWinnings);
            restartWinnings.style.backgroundColor = 'rgb(71, 22, 22)'
            instruction.textContent = `Чтобы начать игру, нажмите `;
            instruction.appendChild(startStrong);
            instruction.appendChild(dot);
        }
    }

let startGame = document.getElementById("start-game");
let instruction = document.getElementById("instruction");
let scores = document.createElement('div');
scores.setAttribute('id', 'scores');

startGame.addEventListener("click", e => {
    displayResult.textContent = 'Выберите один из предметов.'
    displayHumanScore.textContent = 'Ваши очки: 0';
    displayCompScore.textContent = 'Очки ИИ: 0';
    instruction.textContent = 'Первый, кто набрал 5 очков, выиграл раунд!'
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
    chooseLanguage.remove();
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
    areYouSureQuestion.textContent = "Вы уверены, что хотите сбросить все победы? Возврат будет невозможен."
    main.appendChild(areYouSureQuestion);
    let yesButton = document.createElement("button");
    yesButton.textContent = "Да";
    let noButton = document.createElement('button');
    noButton.textContent = "Нет";
    main.appendChild(yesButton);
    main.appendChild(noButton);
    yesButton.addEventListener("click", e => {
        humanWinnings = 0;
        computerWinnings = 0;
        displayHumanWinnings.textContent = `Ваши победы: ${humanWinnings}`;
        displayComputerWinnings.textContent = `Победы ИИ: ${computerWinnings}`;
        e.target.remove();
        noButton.remove();
        areYouSureQuestion.remove();
        hOne.after(instruction);
        main.appendChild(startGame);
        main.appendChild(winningsBox);
        winningsBox.appendChild(displayHumanWinnings);
        winningsBox.appendChild(displayComputerWinnings);
        main.appendChild(chooseLanguage);
    });
    noButton.addEventListener("click", e => {
        displayHumanWinnings.textContent = `Ваши победы: ${humanWinnings}`;
        displayComputerWinnings.textContent = `Победы ИИ: ${computerWinnings}`;
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