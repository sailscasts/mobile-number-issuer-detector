const networkProviders = require("./networkprovider");

function ispDetector(number) {
  const firstFourDigits = number.slice(0, 4);
  for (const { prefix, provider } of networkProviders) {
    if (firstFourDigits === prefix) {
      return provider;
    }
  }
  console.log("No matching provider found for number:", number);
  return "Unknown";
}

module.exports = { ispDetector };
