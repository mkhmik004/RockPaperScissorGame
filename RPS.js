//computer random selection from list of string
const choice=["rock" , "paper", "scissors"];
function getComputerChoice() {
    return choice[Math.floor(((Math.random()))*3)];
}

//assign selections to variables
let computerS=getComputerChoice();
let playerS=prompt("rock,paper scissor shooot");
console.log();
//compare computer string and player string
function playRound(playerSelection, computerSelection){
   if (playerSelection.toLowerCase()===computerSelection){
    console.log("Tie");
   }
   else if (playerSelection.toLowerCase()==="rock" && computerSelection==="scissor" || playerSelection==="paper" && computerSelection==="rock" || playerSelection==="scissor" && computerSelection==="paper" ){
    console.log("ohhh, you Win this round")
   }
   else{
    console.log("Oppps, you lose")
   }
}
playRound(playerS,computerS,)









