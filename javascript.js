function getComputerChoice(){
    let a = Math.floor(Math.random() * 3) + 1;
    if(a === 1) return "rock";
    else if (a === 2) return "paper";
    else if (a === 3) return "scissors";
}

function getHumanChoice(){
    let userInput = prompt("Please enter your choice(rock/paper/scissors): ");
    return userInput;
}

let humanScore = 0;
let computerScore = 0;