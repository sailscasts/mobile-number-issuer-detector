import { predictDigit } from './predict-digit.js';

// check if DOM is loaded first
document?.addEventListener('DOMContentLoaded', () => {
  // get all inputs by ID
  const numberInput = document.getElementById('numberInput');
  const detectButton = document.getElementById('detectButton');
  const resultElement = document.getElementById('result');
  const csv = document.getElementById('csvFile');

  // check if button is loaded in DOM first
  detectButton?.addEventListener('click', () => {
    const number = numberInput.value; // get the value of input

    if (number) {
      const provider = predictDigit(number); // send to algorithm

      resultElement.textContent = `${provider} - ${number}`; // send response to html

      resetInput(numberInput) // reset input
    }
    
    else if (csv.value) {
      const reader = new FileReader()
      reader.onload = () => {
        const numbers = d3.csvParse(reader.result)
        console.log(detectIsp(numbers))
        // document.getElementById('result').innerHTML = detectIsp(numbers)
      }
      if(csvFile.files[0]) reader.readAsText(csvFile.files[0])
      resetInput(csv)
    }

    else {
      resultElement.textContent = 'Please provide a value to detect';
    }

  });
});

function resetInput(field) {
  if (field.value !== '') {
    field.value = '';
  }
}

function detectIsp(obj) {
  for (let i = 0; i < obj.length; i++)
    obj[i]['isp'] = predictDigit(`0${obj[i].Number}`)
  return obj
}