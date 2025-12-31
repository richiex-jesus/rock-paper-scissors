function getComputerChoice() {

let numberGenerated = Math.floor(Math.random() * 3) + 1;

    if (numberGenerated == 1) {
        const computer = document.getElementById('computer-choice');
        computer.textContent = "the computer has chosen rock!";
        let computerChoice = "rock";
        return computerChoice;
    } else if (numberGenerated == 2) {
        const computer = document.getElementById('computer-choice');
        computer.textContent = "the computer has chosen paper!";
        let computerChoice = "paper";
        return computerChoice;
    } else if (numberGenerated == 3) {
        const computer = document.getElementById('computer-choice');
        computer.textContent = "the computer has chosen scissors!";
        let computerChoice = "scissors";
        return computerChoice;
    }

}

let humanScore = 0;
let computerScore = 0;

function trackScore(humanChoice, computerChoice) {

    if ((humanChoice == "rock" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "paper") || (humanChoice == "scissors" && computerChoice == "scissors")) {
        endGame(humanScore, computerScore);
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        ++humanScore;
        let humanScoreboard = document.getElementById('human-scoreboard');
        humanScoreboard.textContent = "Human: " + humanScore;
        endGame(humanScore, computerScore);
    } else {
        ++computerScore;
        let computerScoreboard = document.getElementById('computer-scoreboard');
        computerScoreboard.textContent = "Computer: " + computerScore;
        endGame(humanScore, computerScore);
    }

}

function startGame() {

    const buttonRock = document.getElementById('rock');
    const buttonPaper = document.getElementById('paper');
    const buttonScissors = document.getElementById('scissors');
    
    buttonRock.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "green";
        buttonPaper.style.backgroundColor = "transparent";
        buttonScissors.style.backgroundColor = "transparent";
        let humanChoice = "rock";
        let computerChoice = getComputerChoice();
        trackScore(humanChoice, computerChoice);
        endGame(humanScore, computerScore);
    });

    buttonPaper.addEventListener("click", (e) => {
        console.log("paper button clicked!");
        e.target.style.backgroundColor = "green";
        buttonRock.style.backgroundColor = "transparent";
        buttonScissors.style.backgroundColor = "transparent";
        let humanChoice = "paper";
        let computerChoice = getComputerChoice();
        trackScore(humanChoice, computerChoice);
        endGame(humanScore, computerScore);
    });
    
    buttonScissors.addEventListener("click", (e) => {
        console.log("scissors button clicked!");
        buttonRock.style.backgroundColor = "transparent";
        buttonPaper.style.backgroundColor = "transparent";
        e.target.style.backgroundColor = "green";
        let humanChoice = "scissors";
        let computerChoice = getComputerChoice();
        trackScore(humanChoice, computerChoice);
        endGame(humanScore, computerScore);
    });

    const scoreboard = document.getElementById('scores');
    
    const humanScoreboard = document.createElement('div');
    humanScoreboard.id = 'human-scoreboard';
    humanScoreboard.textContent = "Humans: " + humanScore;
    scoreboard.appendChild(humanScoreboard);
    
    const computerScoreboard = document.createElement('div'); // add class later
    computerScoreboard.id = 'computer-scoreboard';
    computerScoreboard.textContent = "Computer: " + computerScore;
    scoreboard.appendChild(computerScoreboard);


}

startGame();

function endGame(humanScore, computerScore) {
    let gameWinner = document.getElementById('winner');
    if ((humanScore == 5) && (computerScore < 5)) {
        let computer = document.getElementById('computer-choice');
        // computer.remove();
        gameWinner.textContent = "The human has beaten the computer!";
        let container = document.getElementById('container');
        container.replaceChildren();
        restartGame();
    } else if ((computerScore == 5) && (humanScore < 5)) {
        let computer = document.getElementById('computer-choice');
        // computer.remove();
        gameWinner.textContent = "The computer has beaten the human!"
        let container = document.getElementById('container');
        container.replaceChildren();
        restartGame();
    } else if (humanScore < 5 && computerScore < 5) {
        gameWinner.textContent = "";
    }
}

function restartGame() {
    let container = document.getElementById('container');
    let restartButton = document.createElement('button');
    restartButton.id = "restart-button";
    restartButton.textContent = "Restart";
    container.appendChild(restartButton);
    restartButton.addEventListener('click', (e) => {
       location.reload();
    })
}


