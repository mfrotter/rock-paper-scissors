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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i < 6; i++) {
        let playerSelection = prompt("Please type Rock, Paper, or Scissors");
        let computerSelection = getComputerSelection();

        roundResult = playRound(playerSelection, computerSelection)
        if(roundResult === "You win!"){
            console.log(`The player wins, ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }
        else if(roundResult === "You lose!"){
            console.log(`The player loses, ${playerSelection} loses to ${computerSelection}`);
            computerScore++;
        }
        else if(roundResult === "Tie game"){
            console.log("Tie game! Nobody wins or loses");
        }

        else {
            console.log("The round was skipped, invalid input")
            i--;
        }

        if (i !== 0){
            console.log(`The score for round ${i} is ${playerScore} for the player and ${computerScore} for the computer`);
        }
        else {
            console.log(`The score for round 1 is ${playerScore} for the player and ${computerScore} for the computer`);
        }

    }

    console.log(`The final score is ${playerScore} for the player and ${computerScore} for the computer`);
}

game();