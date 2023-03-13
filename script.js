const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissors');
const resultsDiv = document.querySelector('.results');
const computerScoreDiv = document.querySelector('.computerScore');
const playerScoreDiv = document.querySelector('.playerScore');

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

rockButton.addEventListener('click', buttonClick)
paperButton.addEventListener('click', buttonClick)
scissorButton.addEventListener('click', buttonClick)


function getComputerSelection() {
    let result = Math.floor(Math.random() * 3);
    if(result === 0){
        return "rock";
    }
    if(result === 1){
        return "paper";
    }
    if(result === 2){
        return "scissors";
    }
    return "";
}

function playRound(playerSelection, computerSelection) {
    //let playerSelection = prompt("Please select Rock, Paper, or Scissors");
    if(playerSelection.toLowerCase() === "rock"){
        playerSelection = "rock";
    }

    else if(playerSelection.toLowerCase() === "paper"){
        playerSelection = "paper";
    }

    else if(playerSelection.toLowerCase() === "scissors"){
        playerSelection = "scissors";
    }
    
    else{
        return "Invalid input, please try again";
    }

    resultsDiv.textContent = `Player selected ${playerSelection}, Computer selected ${computerSelection}. `;
    console.log(`Player selected ${playerSelection}, Computer selected ${computerSelection}`);

    if(playerSelection ===  computerSelection){
        return `Tie game`
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return `You win!`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return `You win!`;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return `You lose!`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return `You lose!`;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return `You lose!`;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return `You win!`;
    }
    else{
        return "Invalid input, please try again";
    }
}

function buttonClick (e) {
    let computerSelection = getComputerSelection();
    let playerSelection = this.id;
    roundResult = playRound(playerSelection, computerSelection)
    if(roundResult === "You win!"){
        console.log(`The player wins, ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        roundNumber++;
        playerScoreDiv.textContent = `${playerScore}`;

    }
    else if(roundResult === "You lose!"){
        console.log(`The player loses, ${playerSelection} loses to ${computerSelection}`);
        computerScore++;
        roundNumber++;
        computerScoreDiv.textContent = `${computerScore}`;
    }
    else if(roundResult === "Tie game"){
        console.log("Tie game! Nobody wins or loses");
        roundNumber++;
    }

    resultsDiv.append(`The score for round ${roundNumber} is ${computerScore} for the computer and ${playerScore} for the player`);
    console.log(`The score for round ${roundNumber} is ${playerScore} for the player and ${computerScore} for the computer`);

    if(playerScore == 5) {
        resultsDiv.textContent = `The player won with a score of 5 vs a computer score of ${computerScore} in ${roundNumber} rounds! The game has been reset`
        playerScore = 0;
        computerScore = 0;
        roundNumber = 0;
        playerScoreDiv.textContent = `${playerScore}`;
        computerScoreDiv.textContent = `${computerScore}`;
    }

    if(computerScore == 5) {
        resultsDiv.textContent = `The computer won with a score of 5 vs a player score of ${playerScore} in ${roundNumber} rounds! The game has been reset`
        playerScore = 0;
        computerScore = 0;
        roundNumber = 0;
        playerScoreDiv.textContent = `${playerScore}`;
        computerScoreDiv.textContent = `${computerScore}`;
    }
}

