var random1 = Math.floor(Math.random()*6) + 1; 

var randomImage1 = "images/dice" + random1 + ".png";

document.querySelectorAll("img")[0]. setAttribute("src", randomImage1);

var random2 = Math.floor(Math.random()*6) + 1;

var randomImage2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1]. setAttribute("src", randomImage2);

if(randomImage1>randomImage2)
{
	document.querySelector("h1"). innerHTML = "Player 1 wins!";
}

else if(randomImage2>randomImage1)
{
	document.querySelector("h1"). innerHTML = "Player 2 wins!";
}

else
{
	document.querySelector("h1"). innerHTML = "Draw!";
}