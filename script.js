let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#userscore");
const compScorepara = document.querySelector("#compscore");


const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
  randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}
 
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = ` You Win!! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    }
    else{
        
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = ` You lost.${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }

};

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "darkblue";
};

const playGame = (userChoice) => {
    // let userWin = true;
    console.log("Your choice ",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice ",compChoice);
    if(compChoice === userChoice)
{
    drawGame();
}
  else{
     let userWin = true;
    if(userChoice === "rock"){
       userWin =  compChoice === 'paper' ? false : true;
    }
    else if(userChoice === "paper"){
        // comp will select either rock or scissor
        userWin = compChoice === "scissor" ? false : true;
    }
    else{
       userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }

};



choices.forEach((choice) => {
    choice.addEventListener("click",() => {
   const userChoice = choice.getAttribute("id");
   playGame(userChoice);
});
});

