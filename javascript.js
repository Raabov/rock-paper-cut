console.log(`Start of the game`);

//Function to generate choice for the computer
function getComputerChoice() {
    
    let computerChoice = Math.random();

    if (computerChoice > 0.66) {
        computerChoice = `rock`;
        console.log(computerChoice);
    }
    else if (computerChoice < 0.66 && computerChoice >= 0.33) {
        computerChoice = `paper`;
        console.log(computerChoice);
    }

    else if (computerChoice < 0.33) {
        computerChoice = `cut`;
        console.log(computerChoice);
    }
}

//Function to prompt user to enter choice
function getUserChoice() {
    let userChoice = prompt(`Please choose between rock, paper and cut`);
    userChoice = userChoice.toLowerCase();
    console.log(userChoice);

    if (userChoice === `rock`) {
        userChoice = 0.66;
        console.log(userChoice);
    }
    else if(userChoice === `paper`) {
        userChoice = 0.33;
        console.log(userChoice);
    }
    else if(userChoice === `cut`)
        userChoice = 0;
        console.log(userChoice);
}
getComputerChoice();
getUserChoice();