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