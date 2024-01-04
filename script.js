const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");



const btn1 = document.querySelector(".rock");
btn1.addEventListener('click', evt => {
    //adding an external function that lets you play the game 
    //and updates the text
    playGame("rock");
    
})

const btn2 = document.querySelector(".paper");
btn2.addEventListener('click', evt => {
    //adding an external function that lets you play the game 
    //and updates the text
    playGame("paper");
})

const btn3 = document.querySelector(".scissors");
btn3.addEventListener('click', evt => {
    //adding an external function that lets you play the game 
    //and updates the text
    playGame("scissors");
})



function playGame(choice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
     
    let result = "";

    if(choice === computerchoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(choice){
            case "rock":
                result = (computerchoice === "scissors")? "YOU WIN!" : "YOU LOSE!";
                break;
            
            case "paper":
                result = (computerchoice === "rock")? "YOU WIN!":"YOU LOSE!";
                break;

            case "scissors":
                result = (computerchoice === "paper")? "YOU WIN!":"YOU LOSE!";
                break;
        }
    }
    //game points
    switch(result){
        case "YOU WIN!":
            playerScore+=1;
        case "YOU LOSE!":
            computerScore+=1;

    }
    //choice updated
    playerDisplay.textContent = `Player: ${choice}`;

    //computer choice update
    computerDisplay.textContent = `Computer: ${computerchoice}`;

    //result update
    resultDisplay.textContent = result;

    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    if(playerScore>5 || computerScore>5){
        playAgain();
    }

}

function playAgain(){
    resultDisplay.textContent = "Game Over. Resetting in 2 seconds...";

    setTimeout(() =>{
        resetGame();
    }, 2000);
}
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerDisplay.textContent = `Player: `;
    computerDisplay.textContent = `Computer: `;
    resultDisplay.textContent = ``;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

