// get json file
const dataset = require('../assets/prefixes.json');
const en = require('./utils/en');
const CheckFormat = require('./utils/number-validator');

function PredictDigit(digit) {
  // two variables, one to hold output and
  // the other for if predicted or not
  let result;
  let success = false;

  const check = CheckFormat(digit);

  for (const key in dataset) {
    // get array for each key
    dataset[key].forEach((value, index, array) => {
      if (check == true) {
        // slice the digit to match each prefix in the array
        const prefix = digit.slice(0, value.length);

        // compare input with prefix in array
        if (prefix === value) {
          success = true;
          result = key;
        }
      } else {
        success = true;
        result = check;
      }
    });
  }

  if (!success) {
    result = en.no_issuer_found;
  }

  return result;
}

module.exports = { PredictDigit };
