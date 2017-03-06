//////////////////////// REFERENCES //////////////////////////

var outputTarget = document.getElementById("output-target");
var pageTitle = document.getElementById("page-title");
var inputText = document.getElementById("keypress-input");
var guineaPig = document.getElementById("guinea-pig");
var toTurnBlue = document.getElementById("add-color");
var toHulkify = document.getElementById("make-large");
var addBorder = document.getElementById("add-border");
var addRadius = document.getElementById("add-rounding");

//////////////////////// EVENT LISTENERS //////////////////////////

document.addEventListener("click", function(e) {
	writeToOutputTarget(e.target.innerText);
});

pageTitle.addEventListener("mouseover", function() {
	outputTarget.innerHTML = "You moved your mouse over the header";
});

pageTitle.addEventListener("mouseleave", function() {
	outputTarget.innerHTML = "You left me!";
});

inputText.addEventListener("keyup", function(e) {
	outputTarget.innerHTML = e.target.value;
});

toTurnBlue.addEventListener("click", function() {
	guineaPig.classList.add("turnBlue");
});

toHulkify.addEventListener("click", function() {
	guineaPig.classList.add("hulkify");
});

addBorder.addEventListener("click", function() {
	guineaPig.classList.add("addBorder");
});

addRadius.addEventListener("click", function() {
	guineaPig.classList.add("addRadius");
});

//////////////////////// OTHER FUNCTIONS //////////////////////////

function writeToOutputTarget(text) {
	outputTarget.innerHTML = 'You clicked on the ' + text + ' section';
};