//First goal:create randomly generated rock, paper or scissors.
//declare array of choices
let computerChoice = ["Rock", "Paper", "Scissors"];

let getComputerChoice;
//randomply pick an array index and assign it to getComputerChoice
getComputerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];

console.log(getComputerChoice);

//Second goal:function that plays a single round of the game. The function should take two parameters - the playerSelection and computerSelection
    //and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock".
//Additional notes:
    //Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation),Account for TIES by re-playing the round.
    
//create random selector for players' default prompt value. this is necessary to be distinct for the computer function in order to 1-keep secret computer selection 2-avoid constant tie
let defaultPromptValue = computerChoice[Math.floor(Math.random() * computerChoice.length)];
//declare playerSelection
let playerInput = prompt("Enter your selection", defaultPromptValue)

//declare computerSelection
let computerSelection = getComputerChoice;
//function that evaluates who wins