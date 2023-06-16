// code to run when document is loaded
document.addEventListener('DOMContentLoaded', function () {
	// get references of elements from html
	const numberInput = document.getElementById('numberInput');
	const detectButton = document.getElementById('detectButton');
	const resultElement = document.getElementById('result');

	// add event listener to the button
	detectButton.addEventListener('change', function () {
		const digit = numberInput.value;
		const provider = PredictDigit(digit);
		resultElement.textContent = provider;
	});
});
