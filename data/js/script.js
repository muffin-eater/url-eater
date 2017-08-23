// url-eater script.js //

var inputText = document.getElementById("inputText");
var modifierText = document.getElementById("modifierText");
var outputText = document.getElementById("outputText");

var submitButton = document.getElementById("submitButton");
var copyTextButton = document.getElementById("copyTextButton");
var clearTextButton = document.getElementById("clearTextButton");

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
	return;
}

addClickEvent(submitButton, modifyUrl);
addClickEvent(copyTextButton, copyText);
addClickEvent(clearTextButton, clearText);