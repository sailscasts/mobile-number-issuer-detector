import { PredictDigit } from './predict-digit';

// check if DOM is loaded first
document?.addEventListener('DOMContentLoaded', () => {
	// get all inputs by ID
	const numberInput = document.getElementById('numberInput');
	const detectButton = document.getElementById('detectButton');
	const resultElement = document.getElementById('result');

	// check if button is loaded in DOM first
	detectButton?.addEventListener('click', () => {
		const number = numberInput.value; // get the value of input

		const provider = PredictDigit(number); // send to algorithm

		resultElement.textContent = `${provider} - ${number}`; // send response to html

		if (numberInput.value != '') {
			numberInput.value = '';
		} // reset input
	});
});
