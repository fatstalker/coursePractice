

//First goal:create randomly generated rock, paper or scissors. (moved to second goal)
//declare array of choices
let possibleSelections = ["Rock", "Paper", "Scissors"];


//Second goal:function that plays a single round of the game. The function should take two parameters - the playerSelection and computerSelection
    //and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock".
//Additional notes:
    //Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation),Account for TIES by re-playing the round.



let startButton = document.getElementById("startGame");
startButton.addEventListener("click", matchEvaluation);

//declare function matchEvaluation
function matchEvaluation() {
    //declare computer selection
    let computerSelection = possibleSelections[Math.floor(Math.random() * possibleSelections.length)];

    //create random selector for players' default prompt value.
let defaultPromptValue = possibleSelections[Math.floor(Math.random() * possibleSelections.length)];
    //declare player selection
    let playerSelection = prompt("Enter your selection", defaultPromptValue);

    //debug and control logs
    console.log("opponent choice: " + computerSelection); //to be removed
    console.log("your choice: " + playerSelection);       //to be removed
    
    //start conditional statements
    //if computerSelection == "Rock"
    if (computerSelection == "Rock") {

        //if playerSelection == "Rock" THEN tie
        if (playerSelection == "Rock") {
            console.log("It's a tie! C'mon, try again!");
        }
        //if playerSelection == "paper" THEN win
        if (playerSelection == "Paper") {
            console.log("You won! Lucky you!");
        }
        //if playerSelection == "Scissors" THEN lose
        if (playerSelection == "Scissors") {
            console.log("You lost. Better luck next time :'(");
        }
    }    
    //if computerSelection == "Paper"
    if (computerSelection == "Paper") {

        //if playerSelection == "Rock"
        if (playerSelection =="Rock") {
            console.log("You lost. Better luck next time :'(");
        }
        //if playerSelection == "paper"
        if (playerSelection == "Paper") {
            console.log("It's a tie! C'mon, try again!");
        }
        //if playerSelection == "Scissors"
        if (playerSelection == "Scissors") {
            console.log("You won! Lucky you!");
        }
    }    
    //if computerSelection == "Scissors"
    if (computerSelection == "Scissors"){

        //if playerSelection == "Rock"
        if (playerSelection == "Rock") {
            console.log("You won! Lucky you!");
        }
        //if playerSelection == "paper"
        if (playerSelection == "Paper") {
            console.log("You lost. Better luck next time :'(");
        }
        //if playerSelection == "Scissors"
        if (playerSelection == "Scissors") {
            console.log("It's a tie! C'mon, try again!");
        }
    }
}