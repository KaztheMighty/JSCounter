let counter = document.querySelector("#currentNo");
const minusBtn = document.querySelector("#minusNo");
const addBtn = document.querySelector("#addNo");
const resetBtn = document.querySelector("#reset");

const bodyBg = document.querySelector("body");

let count = 0;

//Event listener to listen for when the button is pressed. When it's pressed, the function is ran.
minusNo.addEventListener('click', minusCounter);
addNo.addEventListener('click', addCounter);
reset.addEventListener('click', resetCounter);

function addCounter() {
	count++;
	counter.innerHTML = count;

	currentColor();
}

function minusCounter() {
	count--;
	counter.innerHTML = count;

	currentColor();	
}

function resetCounter() {
	count = 0;
	counter.innerHTML = count;

	currentColor();	
}

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