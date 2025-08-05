let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const showmsg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    //rock paper scissors
    const random = Math.floor(Math.random() * 3);
    return options[random];
}



const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        user.innerText = userscore;
        showmsg.innerText = `You Win! Your ${userchoice} Beats ${compchoice}.`;
        showmsg.style.backgroundColor = "green";
    }else{
        compscore++;
        comp.innerText = compscore;
        showmsg.innerText = `You Lose ${compchoice} Beats Your ${userchoice}.`;
        showmsg.style.backgroundColor = "red";
    }
}

const draw = () => {
    console.log("Game Draw");
    showmsg.style.backgroundColor = "yellow";
    showmsg.innerText = "Game Was Draw! Try Again.";
}

const playGame = (userchoice,) => {
    //generate computer choice
    const compchoice = gencompchoice();

    if(userchoice === compchoice){
        draw();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //papaer scissor
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            //rock scissors
            userwin = compchoice === "scissor" ? false : true;
        }else{
            //scissors rock
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
