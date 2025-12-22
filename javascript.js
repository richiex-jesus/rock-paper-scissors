function getComputerChoice() {

let numberGenerated = Math.floor(Math.random() * 30) + 1;

    const computer = document.getElementById('computer-choice');

    if (numberGenerated >= 1 && numberGenerated <= 10) {
        const ComputerChoiceRock = document.createElement('div');
        ComputerChoiceRock.textContent = "the computer has chosen rock!";
        ComputerChoiceRock.style.border = "1px solid black";
        computer.appendChild(ComputerChoiceRock);
        let computerChoice = "rock";
        return computerChoice;
    } else if (numberGenerated > 10 && numberGenerated <= 20) {
        const ComputerChoicePaper = document.createElement('div');
        ComputerChoicePaper.textContent = "the computer has chosen paper!";
        ComputerChoicePaper.style.border = "1px solid black";
        computer.appendChild(ComputerChoicePaper);
        let computerChoice = "paper";
        return computerChoice;
    } else if (numberGenerated > 20 && numberGenerated <= 30) {
        const ComputerChoiceScissors = document.createElement('div');
        ComputerChoiceScissors.textContent = "the computer has chosen scissors!";
        ComputerChoiceScissors.style.border = "1px solid black";
        computer.appendChild(ComputerChoiceScissors);
        let computerChoice = "scissors";
        return computerChoice;
    }

}

function getHumanChoice() {

    const buttonRock = document.getElementById("rock");
    const buttonPaper = document.getElementById('paper');
    const buttonScissors = document.getElementById('scissors');
    buttonRock.addEventListener("click", (e) => {
        console.log("rock");
        e.target.style.backgroundColor = "green";
        buttonPaper.style.backgroundColor = "transparent";
        buttonScissors.style.backgroundColor = "transparent";
        let humanChoice = "rock";
        return humanChoice;

    });
    buttonPaper.addEventListener("click", (e) => {
        console.log("paper");
        e.target.style.backgroundColor = "green";
        buttonRock.style.backgroundColor = "transparent";
        buttonScissors.style.backgroundColor = "transparent";
        let humanChoice = "paper";
        return humanChoice;
    });
    buttonScissors.addEventListener("click", (e) => {
        console.log("scissors");
        buttonRock.style.backgroundColor = "transparent";
        buttonPaper.style.backgroundColor = "transparent";
        e.target.style.backgroundColor = "green";
        let humanChoice = "scissors";
        return humanChoice;
    });

}

let humanScore = 0;
let computerScore = 0;


function playRound() { 
    
    const scoreboard = document.getElementById('scores');
    const humanScoreboard = document.createElement('div');
    const computerScoreboard = document.createElement('div');
    humanScoreboard.textContent = humanScore;
    computerScoreboard.textContent = computerScore;

    humanChoice = getHumanChoice();

    if (humanChoice == getComputerChoice()) {
        scoreboard.appendChild(humanScoreboard);
        scoreboard.appendChild(computerScoreboard);
    } else if ((humanChoice == "rock" && getComputerChoice() == "scissors") || (humanChoice == "paper" && getComputerChoice() == "rock") || (humanChoice == "scissors" && getComputerChoice() == "paper")) {
        let newHumanScore = ++humanScore;
        humanScoreboard.textContent = newHumanScore;
        scoreboard.appendChild(humanScoreboard);
        scoreboard.appendChild(computerScoreboard);
    } else {
        let newComputerScore = ++computerScore;
        computerScoreboard.textContent = newComputerScore;
        scoreboard.appendChild(humanScoreboard);
        scoreboard.appendChild(computerScoreboard);
    }
}

playRound();

// option 1
// document.addEventListener("DOMContentLoaded", playRound)

// option 2: add 'defer' attribute

// option 3: move script tag inside body and put at bottom

// playRound();