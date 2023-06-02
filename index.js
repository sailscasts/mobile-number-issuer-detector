const en = require("./locale/en");
const fs = require("fs");
const path = require("path");
const jsonData = require("./numberPrefix.json")

function checkFormat(number) {
  // Regex pattern to match +234 followed by 10 digits or 0 followed by 10 digits
  const pattern = /^(?:0\d{10})$/;

  // Test if the number matches the pattern
  if (pattern.test(number)) {
    return true;
  } else {
    if (number.length != 11 && number.startsWith("0")) {
      return en.invalid_without_dial_code;
    } else {
      return en.invalid_phone_number_format;
    }
  }
}

async function searchJSONFile(prefix) {
    return jsonData[prefix];
}

async function detectNumberIssuer(number) {
  let format = checkFormat(number);

  if (format == true) {

    return checkIssuer(number);

    async function checkIssuer(number) {
      const firstFiveChars = number.substring(0, 5);
      const firstFourChars = number.substring(0, 4);

      let numIssuer =
        (await searchJSONFile(firstFiveChars)) ||
        (await searchJSONFile(firstFourChars));

      return numIssuer
        ? { status: true, message: numIssuer }
        : { status: false, message: en.no_issuer_found };
    }
  }

  return { status: false, message: format };
}

module.exports = { detectNumberIssuer };
