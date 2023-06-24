import { predictDigit } from './predict-digit.js';


document?.addEventListener('DOMContentLoaded', () => {
  const numberInput = document.getElementById('numberInput');
  const detectButton = document.getElementById('detectButton');
  const resultElement = document.getElementById('result');

  // check if button is loaded in DOM first
  detectButton?.addEventListener('click', () => {
    const number = numberInput.value; 

    const provider = predictDigit(number);

    resultElement.textContent = `${provider} - ${number}`; // send response to html

    if (numberInput.value !== '') {
      numberInput.value = '';
    } // reset input
  });
});
