//computer random selection from list of string
let choice=["rock" , "paper", "scissors"];
function getComputerChoice() {
    return choice[Math.floor(((Math.random(0,2)))*3)];
}
//player input 
function getPlayerChoice(){
    return ('rOcK'); //........NB. MUST PROMT USER..........
}
//assign selections to variables
const computerSelection=getComputerChoice();
const playerSelection=getPlayerChoice().toLowerCase();
console.log(computerSelection,playerSelection);
//compare computer string and player string
function playRound(computerSelection,playerSelection){
    console.log(computerSelection,playerSelection);
}
playRound()









