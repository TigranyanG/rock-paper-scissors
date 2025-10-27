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



function playGame(){
    function playRound(computerChoice, humanChoice){

        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice().toLowerCase();

        if(computerChoice === "rock"){
            if(humanChoice === "rock"){
                console.log(`Noone wins - Both entered rock :(`);
            }
            else if(humanChoice !== "paper"){
                console.log(`You lose! Rock beats ${humanChoice}`);
                computerScore++;
            }
            else{
                console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1)} beats rock`);
                humanScore++;
            }
        }
        else if(computerChoice === "paper"){
            if(humanChoice === "paper"){
                console.log(`Noone wins - Both entered paper :(`);
            }
            else if(humanChoice !== "scissors"){
                console.log(`You lose! Paper beats ${humanChoice}`);
                computerScore++;
            }
            else{
                console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1)} beats paper`);
                humanScore++;
            }
        }
        else if(computerChoice === "scissors"){
            if(humanChoice === "scissors"){
                console.log(`Noone wins - Both entered scissors :(`);
            }
            else if(humanChoice !== "rock"){
                console.log(`You lose! Scissors beat ${humanChoice}`);
                computerScore++;
            }
            else{
                console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.substring(1)} beats scissors`);
                humanScore++;
            }
        }

    }  

    for(let i = 0; i < 5; i++){
        playRound();
        console.log(humanScore);
        console.log(computerScore);
    }
    if (humanScore > computerScore){
        console.log("Congratulations, you won the game!");
    }
    else if(computerScore > humanScore){
        console.log("Pity, you lost the game!");
    }
    else{
        console.log("Friendship wins! It's a tie.");
    }
}

playGame();