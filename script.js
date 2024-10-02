let userscore=0
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        console.log("You Win");
        msg.innerText= `You win buddy! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorePara.innerText=compscore;
        console.log("You Lose");
        msg.innerText=`You lose, comp ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawGame=(userChoice,compChoice)=>{
    console.log("game is draw");
    msg.innerText=`game is draw, ${userChoice} and ${compChoice} is same`;
    msg.style.backgroundColor="purple";
}
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randInds=Math.floor(Math.random()*3);
    return options[randInds];
}

const playgame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice =", compChoice);
    if(userChoice==compChoice){
        drawGame(userChoice,compChoice);
    }
    else{
         let userWin=true;
         if(userChoice=="rock"){
            userWin=compChoice==="paper"?false:true;
         }
         else if(userChoice=="paper"){
            userWin=compChoice==="scissors"?false:true;
         } 
         else{
            userWin=compChoice==="rock"?false:true;
         }
         showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playgame(userChoice);
});
});