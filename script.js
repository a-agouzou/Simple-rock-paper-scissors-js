function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection)
        return "It's a tie";
    if (playerSelection == 'rock' && computerSelection == 'scissors')
        return "You won! " + playerSelection + " beats " + computerSelection;
    else if (playerSelection == 'scissors' && computerSelection == 'paper')
        return "You won! " + playerSelection + " beats " + computerSelection;
    else if (playerSelection == 'paper' && computerSelection == 'rock')
        return "You won! " + playerSelection + " beats " + computerSelection;
    else if (computerSelection == 'rock' && playerSelection == 'scissors')
        return "You won! " + computerSelection + " beats " + playerSelection;
    else if (computerSelection == 'scissors' && playerSelection == 'paper')
        return "You won! " + computerSelection + " beats " + playerSelection;
    else if (computerSelection == 'paper' && playerSelection == 'rock')
        return "You won! " + computerSelection + " beats " + playerSelection;
    return "Wrong Choise";
}

let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 10);
    if (choice % 3 === 0)
        return "rock";
    else if (choice % 3 === 1)
        return "paper";
    else if (choice % 3 === 2)
        return "scissors";  // Fix the typo here
}

playGame = () => {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Your choice:");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

playGame();
