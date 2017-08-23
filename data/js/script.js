// url-eater script.js //

var inputText = document.getElementById("inputText");
var modifierText = document.getElementById("modifierText");
var outputText = document.getElementById("outputText");

var submitButton = document.getElementById("submitButton");
var copyButton = document.getElementById("copyButton");
var clearButton = document.getElementById("clearButton");

function addClickEvent(element, handler) {
	if (element.addEventListener) {
		element.addEventListener("click", handler, false);
	} else if (element.attachEvent) {
		element.attachEvent('onclick', handler);
	}
	return;
}

function modifyUrl() {
	outputText.value = inputText.value + modifierText.value;
	outputText.disabled = false;
	return;
}

function copyText() {
	outputText.select();
	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		console.log('Copying text command was ' + msg);
	} catch (err) {
		console.log('Oops, unable to copy!');
	}
	return;
}

function clearText() {
	inputText.value = "";
	modifierText.value = "";
	outputText.value = "";
	inputText.focus();
	outputText.disabled = true;
	return;
}

addClickEvent(submitButton, modifyUrl);
addClickEvent(copyButton, copyText);
addClickEvent(clearButton, clearText);