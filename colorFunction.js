var numSquares = 6;
var colors = [];
var pickedColor; //pick random color from array

//target DOM elements
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init(); //on page load

function init() {
	//modeButtons event listener
	setupModeButtons();
	setupSquares();
 	reset();
}

//easy and hard buttons
function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i ++){
		modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		
		reset();

		});
	}

}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
	//add click listener to squares
	squares[i].addEventListener("click", function () {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color of clicked square to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
 	}
}


	function changeColors(color){
		for (var i = 0; i < squares.length; i++) {
			//loop through all squares
			squares[i].style.backgroundColor = color;
			//change each color to match given color
		}
	}

function pickColor() {
	//pick a random number from array index
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++) {
		//get random color and push to arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a red 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


//BUTTONS

resetButton.addEventListener("click", function () {
	reset();

});


function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
			} else {
			squares[i].style.display = "none";
		}
	}
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "burlywood";
	messageDisplay.textContent = null; 
	resetButton.textContent = "New Colors";

}



