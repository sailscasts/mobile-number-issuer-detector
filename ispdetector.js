//write a function that detects network provuder
function detectIspProvider(number) {
  //splitting the first prefixes to determine the network provider
  const firstFourDigits = number.slice(0, 4);
  //determine the network provider using conditionals
  if (firstFourDigits === "0803" || firstFourDigits === "0703") {
    return "MTN";
  } else if (firstFourDigits === "0802" || firstFourDigits === "0701") {
    return "Airtel";
  } else if (firstFourDigits === "0909" || firstFourDigits === "0818") {
    return "Etisalat";
  } else if (firstFourDigits === "0905" || firstFourDigits === "0915") {
    return "Glo";
  } else {
    return "Unknown";
  }
}

module.exports = detectIspProvider;
