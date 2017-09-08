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

init(); 

function init() {
	setupModeButtons();  
	setupSquares();
 	reset();  // display new colors on page load
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
	// random colors to be generated on every reset, num dependent on difficulty
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//pick a red value
	var r = Math.floor(Math.random() * 256);
	//pick a green value
	var g = Math.floor(Math.random() * 256);
	//pick a blue value
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// RESET function and BUTTON

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



