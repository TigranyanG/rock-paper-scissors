function getComputerChoice(){
    let a = Math.floor(Math.random() * 3) + 1;
    if(a === 1) return "rock";
    else if (a === 2) return "paper";
    else if (a === 3) return "scissors";
}