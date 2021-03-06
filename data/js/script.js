// url-eater script.js //

var inputText = document.getElementById("inputText");
var modifierText = document.getElementById("modifierText");
var outputText = document.getElementById("outputText");

var submitButton = document.getElementById("submitButton");
var copyButton = document.getElementById("copyButton");
var visitUrlButton = document.getElementById("visitUrlButton");
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
	if (inputText.value.length > 0) {
		var caretPos = detectCaretPosition();

		if (caretPos != -1) {
			outputText.value = [inputText.value.slice(0, caretPos), modifierText.value, inputText.value.slice(caretPos)].join('');
		} else {
			outputText.value = inputText.value + modifierText.value;
		}

		toggleButtons(false);
	} else {
		inputText.focus();
	}

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

function visitUrl() {
  window.open(outputText.value, '_blank');

  return;
}

function clearText() {
	inputText.value = "";
	modifierText.value = "";
	outputText.value = "";
	inputText.focus();
	toggleButtons(true);

	return;
}

function detectCaretPosition() {
	var caretPos = -1;

	if (inputText.selectionStart || inputText.selectionStart == '0') {
		caretPos = inputText.selectionStart;
	}

	return caretPos;
}

function toggleButtons(toggle) {
	outputText.disabled = toggle;
	copyButton.disabled = toggle;
	visitUrlButton.disabled = toggle;
	clearButton.disabled = toggle;

	return;
}

addClickEvent(submitButton, modifyUrl);
addClickEvent(copyButton, copyText);
addClickEvent(visitUrlButton, visitUrl);
addClickEvent(clearButton, clearText);
clearText();