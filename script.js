var selected = 0;
var score = 0;
document.getElementById("Selected").innerHTML = selected;
document.getElementById("Score").innerHTML = score;
document.getElementById("Timer").innerHTML = "Loading!!! Game will start shortly...";
document.getElementById("Text").innerHTML = "Guess the number on the dice.";

function storeVar(num) {
	selected = num.getAttribute("value");
	// OR: simply
	// selected = num.value;
	document.getElementById("Selected").innerHTML = selected;
}

// Function to roll the dice
function rollTheDice() {
	dice = Math.floor(Math.random()*6)+1;
	console.log(dice);
	document
		.querySelector(".img")
		.setAttribute("src", "images/dice" + dice + ".svg");
	if (selected == dice) {
		score += 10;
		document.getElementById("Score").innerHTML = score;
		document.getElementById("Text").innerHTML = "Your guess was Right!!!";
	} else {
		document.getElementById("Text").innerHTML = "Your guess was Wrong!!!";
	}
}

var time = 5;
var timer;
function setTimer(time) {
	var timer = setInterval(function () {
		if (time == 0) {
			clearInterval(timer);
			rollTheDice();
			setTimer(5);
			selected = 0;
			document.getElementById("Selected").innerHTML = selected;
		}
		else {
			time--;
			document.getElementById("Timer").innerHTML = `The dice will change in ${time} seconds.`;
		}
	}, 1000);
}
setTimer(time);
