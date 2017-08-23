// url-eater script.js //

var inputText = document.getElementById("inputText");
var modifierText = document.getElementById("modifierText");
var outputText = document.getElementById("outputText");

var button = document.getElementById("submitBtn");
if (button.addEventListener)
	button.addEventListener("click", processUrl, false);
else if (button.attachEvent)
	button.attachEvent('onclick', processUrl);


function processUrl() {
	outputText.value = inputText.value + modifierText.value;
	return;
}