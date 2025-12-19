function getComputerChoice() {
    let x = "rock";
    let y = "paper";
    let z = "scissors";

let numberGenerated = Math.floor(Math.random() * 90) + 1;

    if (numberGenerated >= 1 && numberGenerated <= 30) {
        return x
    } else if (numberGenerated > 30 && numberGenerated <= 60) {
        return y
    } else if (numberGenerated > 60 && numberGenerated <= 90) {
        return z
    } else {
        return ""
    }
}

function getHumanChoice() {
    let userInput = prompt("State your choice: rock, paper, scissors?");
    let userInputFinal = userInput.toLowerCase();

    if (userInputFinal === "rock") {
        return "rock"
    } else if (userInputFinal === "paper") {
        return "paper"
    } else if (userInputFinal === "scissors") {
        return "scissors"
    } else {
        return ""
    }
}
   
let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice) { 
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors!")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!")
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Its a tie! Equality among all!")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock!")
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Its a tie! Equality among all!")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper!")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper!")
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Its a tie! Equality among all!")
    } else {
        return "Please follow the rules and only type the words 'rock', 'paper' or 'scissors'!"
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(++humanScore)
        console.log(computerScore)
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log(humanScore)
        console.log(++computerScore)
    } else {
        console.log(++humanScore)
        console.log(++computerScore)
    }

    return "end of round! next round!"
}

function playGame() {

humanScore = 0;
computerScore = 0;

playRound(); // round 1?

playRound(); // round 2?

playRound(); // round 3?

playRound(); // round 4?

playRound(); // round 5?

if (humanScore > computerScore) {
    console.log("Humans win the fight!")
} else if (humanScore < computerScore) {
    console.log("Computers win the fight!")
} else if (humanScore = computerScore) {
    console.log("Its a tie!")
} else {
    console.log("Invalid game because you didn't bother to type a valid answer.")
}

}

console.log(playGame());


