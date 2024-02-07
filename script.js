const userScore =document.querySelector("#user-score");
const compScore =document.querySelector(" #computer-score");
const messageOutput =document.querySelector("#msg");

let yourscore =0;
let comscoure=0;
const choices= document.querySelectorAll(".choice");

const messText =()=>{
    // messageOutput.innerText.remove("");
    setTimeout(() => {
        return messageOutput.innerText=`Play your move it is the`;
    }, 4000);
}
    

const Generate_Computer_choice=()=>{
    let array =["stone","papper","scissore"]
    let index =Math.floor(Math.random()*3);
    // console.log(index);
    return array[index];
}
const playGame =(userchoice)=>{
    console.log(" Your choice the option is :", userchoice);
    //Generate computer choice
    // console.log("computer");
    const compGenerate =Generate_Computer_choice();
    console.log(" Computer choice the option is :", compGenerate);
    if(compGenerate === userchoice){
        messageOutput.innerText=`Draw a Game`;
        messText();
    }
    else {
        if((userchoice === "stone" && compGenerate == "scissore")||(userchoice === "scissore" && compGenerate == "papper")||(userchoice === "papper" && compGenerate == "stone") )
        {
            yourscore++;
            userScore.innerText=yourscore;
            messageOutput.innerText=`You win the Game`;
            messText();
        }
        else{
            comscoure++;
            compScore.innerText=comscoure;
            messageOutput.innerText=`Computer win the Game`;
            messText();

        }
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        // console.log("choice was clicked" ,userChoice);
        playGame(userChoice);
    })
})