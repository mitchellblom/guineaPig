//////////////////////// REFERENCES //////////////////////////

var outputTarget = document.getElementById("output-target");
var pageTitle = document.getElementById("page-title");
var inputText = document.getElementById("keypress-input");
var toTurnBlue = document.getElementById("add-color");
var toHulkify = document.getElementById("make-large");

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
	toTurnBlue.classList.add("turnBlue");
});

toHulkify.addEventListener("click", function() {
	toHulkify.classList.add("hulkify");
});

//////////////////////// OTHER FUNCTIONS //////////////////////////

function writeToOutputTarget(text) {
	outputTarget.innerHTML = 'You clicked on the ' + text + ' section';
};