const mainContainer = document.querySelector("#mainContainer");
const resultContainer = document.querySelector("#resultContainer");
const scoreContainer = document.querySelector("#scoreContainer");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissors");
let computerScoreVis = document.querySelector("#computer .score");
let playerScoreVis = document.querySelector("#player .score");
let textResult = document.querySelector("#textResult");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let a = Math.floor(Math.random() * 3) + 1;
    if(a === 1) return "rock";
    else if (a === 2) return "paper";
    else if (a === 3) return "scissors";
}

computerScoreVis.textContent = computerScore;
playerScoreVis.textContent = humanScore;


function playRound(humanChoice){

    let computerChoice = getComputerChoice();

    if(computerChoice === "rock"){
        if(humanChoice === "rock"){
            let result = `Noone wins - Both entered rock :(`;
            textResult.textContent = result;
        }
        else if(humanChoice !== "paper"){
            let result = `You lose! Rock beats ${humanChoice}`;
            textResult.textContent = result;
            computerScore++;
            computerScoreVis.textContent = computerScore;
        }
        else{
            let result = `You win! ${humanChoice} beats rock`;
            textResult.textContent = result;
            humanScore++;
            playerScoreVis.textContent = humanScore;
        }
    }
    else if(computerChoice === "paper"){
        if(humanChoice === "paper"){
            let result = `Noone wins - Both entered paper :(`;
            textResult.textContent = result;
        }
        else if(humanChoice !== "scissors"){
            let result = `You lose! Paper beats ${humanChoice}`;
            textResult.textContent = result;
            computerScore++;
            computerScoreVis.textContent = computerScore;
        }
        else{
            let result = `You win! ${humanChoice} beats paper`;
            textResult.textContent = result;
            humanScore++;
            playerScoreVis.textContent = humanScore;
        }
    }
    else if(computerChoice === "scissors"){
        if(humanChoice === "scissors"){
            let result = `Noone wins - Both entered scissors :(`;
            textResult.textContent = result;
        }
        else if(humanChoice !== "rock"){
            let result = `You lose! Scissors beat ${humanChoice}`;
            textResult.textContent = result;
            computerScore++;
            computerScoreVis.textContent = computerScore;
        }
        else{
            let result = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1)} beats scissors`;
            textResult.textContent = result;
            humanScore++;
            playerScoreVis.textContent = humanScore;
        }
    }
}  





btnRock.addEventListener("click", ()=> playRound(btnRock.id));
btnPaper.addEventListener("click", ()=> playRound(btnPaper.id));
btnScissor.addEventListener("click", ()=> playRound(btnScissor.id));

