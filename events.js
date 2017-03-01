//////////////////////// REFERENCES //////////////////////////

var outputTarget = document.getElementById("output-target");

//////////////////////// EVENT LISTENERS //////////////////////////

document.addEventListener("click", function(e) {
	console.log(e.target.innerText);
	writeToOutputTarget(e.target.innerText);
});

h1.addEventListener("hover", function()) {

};

//////////////////////// FUNCTIONS //////////////////////////

function writeToOutputTarget(text) {
	outputTarget.innerHTML = 'You clicked on the ' + text + ' section';
};

