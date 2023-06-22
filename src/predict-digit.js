import dataset from '../assets/prefixes.json' assert {type: 'json'};
import en from './utils/en.js';
import {checkFormat} from './utils/check-format.js';

export function predictDigit(digit) {
  // two variables, one to hold output and
  // the other for if predicted or not
  let result;
  let success = false;

  const check = checkFormat(digit);

  for (const key in dataset) {
    // get array for each key
    // eslint-disable-next-line no-unused-vars
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