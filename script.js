const hexBtn = document.getElementById("hexButton");

const bodyBg = document.querySelector("body");
const hex = document.querySelector(".hex");

//Event listener to listen for when the button is pressed. When it's pressed, the function is ran.
hexBtn.addEventListener('click', updateNo);

function updateNo() {
	hex.innerHTML = hexCol;
	updateCurrentNo();
}

function updateCurrentNo() {
	bodyBg.style.backgroundColor = hexCol;
}
