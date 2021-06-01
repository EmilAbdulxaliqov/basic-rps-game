"use strict";
const userName=prompt("Enter your username");
document.querySelector("#user-text").innerHTML=userName;
let userScore=0;
let compScore=0;
const userPoint=document.querySelector(".user-score");
const compPoint=document.querySelector(".comp-score");
const scoreBoard=document.querySelector(".score-board");
const result=document.querySelector(".result>p");
const rock=document.querySelector(".r");
const paper=document.querySelector(".p");
const scissors=document.querySelector(".s");

const getCompChoices=()=>{
    const choices=['r','p','s'];
    let randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}
const convertToWord=(letter)=>{
    if(letter==='r'){
        return 'Rock';
    }
    if(letter==='p'){
        return 'Paper';
    }
    return 'Scissors';
}
const win=(userChoice,compChoice)=>{
    userScore++;
    userPoint.innerHTML=userScore;
    result.innerHTML=`${convertToWord(userChoice)} destroy ${convertToWord(compChoice)}.You win 🔥🔥🔥`;
}
const lose=(userChoice,compChoice)=>{
    compScore++;
    compPoint.innerHTML=compScore;
    result.innerHTML=`${convertToWord(compChoice)} destroy ${convertToWord(userChoice)}.You lose 😰😰😰`;
}
const draw=(userChoice,compChoice)=>{
    result.innerHTML=`${convertToWord(compChoice)} equal to ${convertToWord(userChoice)}.DRAW`;
}
const play=(userChoice)=>{
    const compChoice=getCompChoices();
    switch (userChoice+compChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice,compChoice); 
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice,compChoice);    
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice,compChoice);  
            break;
    }
}
const main=()=>{
    rock.onclick=()=>{
        play('r')
    }
    paper.onclick=()=>{
        play('p')
    }
    scissors.onclick=()=>{
        play('s')
    }
}

main();


