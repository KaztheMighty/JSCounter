//Outlining all of the buttons I'll be listening to
let counter = document.querySelector("#currentNo");
const minusBtn = document.querySelector("#minusNo");
const addBtn = document.querySelector("#addNo");
const resetBtn = document.querySelector("#reset");

//Grabbing the info for the background
const bodyBg = document.querySelector("body");

//Creating a counter to edit/change
let count = 0;

//Event listener to listen for when the button is pressed. When it's pressed, the function is ran.
minusNo.addEventListener('click', minusCounter);
addNo.addEventListener('click', addCounter);
reset.addEventListener('click', resetCounter);

//Adding 1 to the count, then calling currentColor
function addCounter() {
	count++;
	counter.innerHTML = count;

	currentColor();
}

//Removing 1 to the count, then calling currentColor
function minusCounter() {
	count--;
	counter.innerHTML = count;

	currentColor();	
}

//Resetting the count, then calling currentColor
function resetCounter() {
	count = 0;
	counter.innerHTML = count;

	currentColor();	
}

//Checks the current number and depending on that result, changes the background
//Also commented out code that'd only change the colour of the number itself, so I don't give myself a seizure whilst testing
function currentColor() {
	//bodyBg.style.backgroundColor = count;

	if (counter.innerHTML > "0"){
		bodyBg.style.backgroundColor = "green";
		//counter.style.color = "green";
	}

	if (counter.innerHTML < "0") {
		bodyBg.style.backgroundColor = "red";
		//counter.style.color = "red";
	}

	if (counter.innerHTML === "0") {
		bodyBg.style.backgroundColor = "white";
		//counter.style.color = "black";
	}
}