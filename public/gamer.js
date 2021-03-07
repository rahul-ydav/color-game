
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var k = false;

easy.addEventListener("click", function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	easy.style.color = "white";
	hard.style.color = "steelblue";

	k = true;
	colors = generateRandomColors(3);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

});

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	hard.style.color = "white";
	easy.style.color = "steelblue";
	k = false;
	colors = generateRandomColors(6);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

var colors = generateRandomColors(6);


var reset = document.getElementById("reset");

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var message = document.getElementById("message");
var h1 = document.querySelector("h1");




for(var i=0; i<squares.length; i++){
	squares[i].style.background =  colors[i];


	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		reset.textContent = "Play Again!!";

		if(clickedColor === pickedColor){
			for(var j=0; j<squares.length; j++){
				squares[j].style.background = pickedColor;
			}
			h1.style.background = pickedColor;
			message.textContent = "Correct!!!";
		}
		else{
			this.style.background = "black";
			message.textContent = "Try again!!!";
		}
	});
}

function pickColor(){
	var i = Math.floor(Math.random() * colors.length);
	return colors[i];
}

function generateRandomColors(n){
	var rnng = [n];
	for(var i = 0; i<n; i++){
		rnng[i] =  elementttcolor();
	}
	return rnng;
}

function elementttcolor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var rnng = "rgb(" + r +", " + g +", " + b + ")";
	return rnng;
}

//reset
reset.addEventListener("click",reseter);


function reseter(){
	if(k=== true){
		colors = generateRandomColors(3);
	}else{
		colors = generateRandomColors(6);

	}
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = colors[i];
	}

	h1.style.background = "steelblue";
	message.textContent = "";
	reset.textContent = "New Colors";
}
