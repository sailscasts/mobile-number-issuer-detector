const en = require('./en');

function CheckFormat(number) {
  // Regex pattern to match +234 followed by 10 digits or 0 followed by 10 digits
  const pattern = /^(?:0\d{10})$/;

  let message;

  // Test if the number matches the pattern
  if (pattern.test(number)) {
    message = true;
  } else if (number.length !== 11 && number.startsWith('0')) {
    message = en.invalid_dial_code;
  } else {
    message = en.invalid_phone_number_format;
  }

  return message;
}

module.exports = CheckFormat;
