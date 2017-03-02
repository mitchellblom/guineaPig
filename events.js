//////////////////////// REFERENCES //////////////////////////

var outputTarget = document.getElementById("output-target");
var pageTitle = document.getElementById("page-title");

//////////////////////// EVENT LISTENERS //////////////////////////

document.addEventListener("click", function(e) {
	writeToOutputTarget(e.target.innerText);
});

pageTitle.addEventListener("mouseover", function() {
	outputTarget.innerHTML = "You moved your mouse over the header";
});

//////////////////////// FUNCTIONS //////////////////////////

function writeToOutputTarget(text) {
	outputTarget.innerHTML = 'You clicked on the ' + text + ' section';
};