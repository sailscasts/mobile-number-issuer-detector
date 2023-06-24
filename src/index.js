import { predictDigit } from './predict-digit.js';

function resetInput(field) {
  if (field.value !== '') {
    field.value = '';
  }
}

// check if DOM is loaded first
document?.addEventListener('DOMContentLoaded', () => {
  const numberInput = document.getElementById('numberInput');
  const detectButton = document.getElementById('detectButton');
  const resultElement = document.getElementById('result');
  const csv = document.getElementById('csvFile');

  // check if button is loaded in DOM first
  detectButton?.addEventListener('click', () => {
    const number = numberInput.value; 

    const csvFile = csv.value

    if (number) {
      const provider = predictDigit(number); 

      resultElement.textContent = `${provider} - ${number}`; // send response to html

      resetInput(numberInput) 
    }
    
    else if (csvFile) {
      console.log('File!')
      resetInput(csv)
    }

    else {
      resultElement.textContent = 'Please provide a value to detect';
    }


    
  });
});
