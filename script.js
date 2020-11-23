const minus = document.addEventListener("minusButton");
const add = document.addEventListener("addButton");

const bodyBg = document.querySelector("body");
const hex = document.querySelector(".currentNo");

//Event listener to listen for when the button is pressed. When it's pressed, the function is ran.
hexBtn.addEventListener('click', updateNo);

function addNo() {
	hex.innerHTML = hexCol;
	updateCurrentNo();
}

function updateCurrentNo() {
	bodyBg.style.backgroundColor = hexCol;
}
