//////////////////////// REFERENCES //////////////////////////

var outputTarget = document.getElementById("output-target");

//////////////////////// EVENT LISTENERS //////////////////////////

document.addEventListener("click", function(e) {
	writeToOutputTarget(e.innerText)
});

//////////////////////// FUNCTIONS //////////////////////////

function writeToOutputTarget() {
	outputTarget.innerHTML = 'You clicked on the ${text of the section} section'
}