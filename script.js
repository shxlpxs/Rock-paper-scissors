
function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
      } else if (randomNumber < 0.66) {
        return "paper";
      } else {
        return "scissors";
      }
}

console.log(getComputerChoice());

function getHumanChoice() {
    const userInput = prompt("Enter rock, paper, or scissors:");
    return userInput;
}

console.log(getHumanChoice());



function playGame() {
    let humanScore = 0;
    let computerScore =0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
            return; 
        }
    
        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore += 1;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore += 1; // Increment computer score
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
    
    }

    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`\n--- Round ${round} ---`);
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`);
      }
    
      // Declare overall winner
      console.log("\n=== Game Over ===");
      if (humanScore > computerScore) {
        console.log(`You won the game! Final score: ${humanScore} - ${computerScore}`);
      } else if (computerScore > humanScore) {
        console.log(`You lost the game! Final score: ${humanScore} - ${computerScore}`);
      } else {
        console.log(`The game is a tie! Final score: ${humanScore} - ${computerScore}`);
      }
}

playGame();