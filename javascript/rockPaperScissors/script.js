

//First goal:create randomly generated rock, paper or scissors. (moved to second goal)
//declare array of choices
let possibleSelections = ["rock", "paper", "scissors"];


//Second goal:function that plays a single round of the game. The function should take two parameters - the playerSelection and computerSelection
    //and then return a string that declares the winner of the round like so: "You Lose! paper beats rock".
//Additional notes:
    //Make your function’s playerSelection parameter case-insensitive (so users can input rock, rock, rock or any other variation),Account for TIES by re-playing the round.

//LET counter win = 0
let winCounter = 0
//LET counter lose = 0
let loseCounter = 0

//report on win lose status at the end of the match
function report() {
    return  console.log("win = " + winCounter),
            console.log("lose = " + loseCounter);
};

//function INCREMENTwin counter
function incrementWin(counter) {
    counter = ++counter
    return winCounter = counter, report();
};

//function INCREMENTwin counter
function incrementLose(counter) {
    counter = ++counter
    return loseCounter = counter, report();
};

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
    //convert it to lowercase to make it cap-agnostic in practice
    playerSelection = playerSelection.toLowerCase();

    //debug and control logs
    console.log("opponent choice: " + computerSelection); 
    console.log("your choice: " + playerSelection);       
    
    //start conditional statements
    //if computerSelection == "rock"
    if (computerSelection == "rock") {

        //if playerSelection == "rock" THEN tie
        if (playerSelection == "rock") {
            console.log("It's a tie! C'mon, try again!");
        }
        //if playerSelection == "paper" THEN win
        else if (playerSelection == "paper") {
            console.log("You won! Lucky you!");
            return incrementWin(winCounter);
        }
        //if playerSelection == "Scissors" THEN lose
        else if (playerSelection == "scissors") {
            console.log("You lost. Better luck next time :'(");
            return incrementLose(loseCounter);
        }
        else {
            console.log("Invalid entry. You can chose between Rock, Paper or Scissors.");
        }
    }    
    //if computerSelection == "paper"
    else if (computerSelection == "paper") {

        //if playerSelection == "rock"
        if (playerSelection =="rock") {
            console.log("You lost. Better luck next time :'(");
            return incrementLose(loseCounter);
        }
        //if playerSelection == "paper"
        else if (playerSelection == "paper") {
            console.log("It's a tie! C'mon, try again!");
        }
        //if playerSelection == "Scissors"
        else if (playerSelection == "scissors") {
            console.log("You won! Lucky you!");
            return incrementWin(winCounter);
        }
        else {
            console.log("Invalid entry. You can chose between Rock, Paper or Scissors.")
        }
    }    
    //if computerSelection == "Scissors"
    else if (computerSelection == "scissors"){

        //if playerSelection == "rock"
        if (playerSelection == "rock") {
            console.log("You won! You rock!!!");
            return incrementWin(winCounter);
        }
        //if playerSelection == "paper"
        else if (playerSelection == "paper") {
            console.log("You lost. Better luck next time :'(");
            return incrementLose(loseCounter);
        }
        //if playerSelection == "Scissors"
        else if (playerSelection == "scissors") {
            console.log("It's a tie! C'mon, try again!");
        }
        else {
            console.log("Invalid entry. You can chose between Rock, Paper or Scissors.")
        }
    }
    return console.log("win = " + winCounter), console.log("lose = " + loseCounter);
};