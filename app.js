let gameSqns = [];
let userSqns = [];
let started = false;
let level = 0;
let btn = document.querySelector(".btn")
let score = document.querySelector("p");
let button = ["yellow", "red", "green", "blue"];
document.addEventListener("keypress", function(){
    if (!started){
    started = true;
    levelup();
    }
    
});

function fail (){
    level = 0;
    score.innerText = "you are lost now try again";
    gameSqns = [];
    userSqns = [];
}

function levelup(){
    level++;
    score.innerText = `level ${level}`;
    let rand =  button[Math.floor(Math.random()*4)];
    
    gameFlash(rand);
}

function gameFlash(arg){
    let flash = `.${arg}`;
    gameSqns.push(arg);
    document.querySelector(flash).style.backgroundColor = "white";
    setTimeout(function (){
        document.querySelector(flash).style.backgroundColor = arg;
    },250);
    
}

function userFlash (flash){
    let tmp = flash.style.backgroundColor;
    flash.style.backgroundColor = "black";
    setTimeout(function (){
        flash.style.backgroundColor = tmp;
    },250);
}

function check(arg){
    if(userSqns.toString() === gameSqns.slice(0,userSqns.length).toString()){
        if(userSqns.length == gameSqns.length){
        userSqns = [];
        setTimeout(levelup,1000);
        }
    }
    else {
        fail();
    }
}

let btnContainer = document.querySelector(".button");
btnContainer.addEventListener("click", function (event){
    userSqns.push(event.target.id);
    userFlash(event.target);
    check(event.target.id);
   
});