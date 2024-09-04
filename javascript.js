console.log(`ROCK, PAPERS, SCISSORS
    Let's start the game!`);

let userScore = 0;
let computerScore = 0;
let userChoice = 0;
let computerChoice = 0;
let btn = 0;

//Function to get choice from the user

function getUserChoice(event){
    userChoice = event.target.textContent;
    userChoice = userChoice.toLowerCase();
    computerChoice = getComputerChoice();

    let displayUserChoice = document.querySelector(".userInput");
    let displayCompChoice = document.querySelector(".compInput");
    displayUserChoice.textContent = `Your choice: ${userChoice}`;
    displayCompChoice.textContent = `Computer choice: ${computerChoice}`;
    playRound(userChoice,computerChoice);
    scoreDisplay();
}
//Function to generate choice for the computer
function getComputerChoice() {
    
    computerChoice = Math.random();

    if (computerChoice > 0.66) {
        computerChoice = `rock`;
    }
    else if (computerChoice < 0.66 && computerChoice >= 0.33) {
        computerChoice = `paper`;
    }

    else if (computerChoice < 0.33) {
        computerChoice = `scissors`;
    }
    return computerChoice;
}

function playRound(user,computer){

    let winnerDisplay = 0;
    if(user === 'rock' && computer === 'scissors') {
        winnerDisplay = document.querySelector('.winner');
        winnerDisplay.textContent = `User wins!`;
        userScore++;
    }
    else if(user === 'paper' && computer === 'rock') {
        winnerDisplay = document.querySelector('.winner');
        winnerDisplay.textContent = `User wins!`;
        userScore++;
    }    
    else if(user === 'scissors' && computer === 'paper') {
        winnerDisplay = document.querySelector('.winner');
        winnerDisplay.textContent = `User wins!`;
        userScore++;
    }

    else if(user === computer) {
        winnerDisplay = document.querySelector('.winner');
        winnerDisplay.textContent = `It's a tie`;
    }
    else {
        winnerDisplay = document.querySelector('.winner');
        winnerDisplay.textContent = `Computer wins!`;
        computerScore++;
    }
}


let rockbtn = document.querySelector('.rock');
let paperbtn = document.querySelector('.paper');
let scissorsbtn = document.querySelector('.scissors');

rockbtn.addEventListener("click", getUserChoice);
paperbtn.addEventListener("click", getUserChoice);
scissorsbtn.addEventListener("click", getUserChoice);

function scoreDisplay() {
    document.querySelector('.userScore').textContent = `User score: ${userScore}`;
    document.querySelector('.compScore').textContent = `Computer score: ${computerScore}`;
}

