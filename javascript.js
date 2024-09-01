console.log(`ROCK, PAPERS, SCISSORS
    Let's start the game!`);

let userScore = 0;
let computerScore = 0;

//Function to generate choice for the computer
function getComputerChoice() {
    
    let computerChoice = Math.random();

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

//Function to prompt a user to enter choice
function getUserChoice() {
    let userChoice = prompt(`Please choose between rock, paper and scissors`);
    userChoice = userChoice.toLowerCase();
    
    return userChoice;

}


//Function to play a round
let humanChoice = 0;
let machineChoice = 0;

function playRound(user,computer){

    if(humanChoice === 'rock' && machineChoice === 'scissors') {
        console.log('User wins');
        userScore++;
    }
    else if(humanChoice === 'paper' && machineChoice === 'rock') {
        console.log('User wins');
        userScore++;
    }    
    else if(humanChoice === 'scissors' && machineChoice === 'paper') {
        console.log('User wins');
        userScore++;
    }

    else if(humanChoice === machineChoice) {
        console.log(`It's a tie!`)
    }
    else {
    console.log('Computer wins');
    computerScore++;
    }
}

//Playing 5 rounds of game

for(let i = 0; i < 5; i++) {
    humanChoice = getUserChoice();
    console.log('You chose:',humanChoice);
    machineChoice = getComputerChoice();
    console.log('Computer chose:',machineChoice);
    playRound(humanChoice,machineChoice);
}
console.log('User:',userScore);
console.log('Computer:',computerScore);