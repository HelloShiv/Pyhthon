var dice = ["","dice1","dice2","dice3","dice4","dice5","dice6"];
var player1 = Math.floor(Math.random()*6 +1);
var player2 = Math.floor(Math.random()*6 +1);

if(player1>player2){
    document.querySelector("h2").innerHTML = "Player1 wins with " +(player1);
} else if(player1 === player2){
    document.querySelector("h2").innerHTML = "DRAW";
}
else{
     document.querySelector("h2").innerHTML = "Player2 wins with " + (player2);
}

document.querySelector(".img1").setAttribute("src","./images/"+dice[player1]+".png");
document.querySelector(".img2").setAttribute("src","./images/"+dice[player2]+".png");