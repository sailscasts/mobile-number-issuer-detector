const { test, assert } = require("@japa/runner");
const { ispDetector } = require("../ispdetector.js");

const testCases = [
  { number: "08022788439", expectedISP: "Airtel" },
  { number: "09122798737", expectedISP: "Airtel" },
  { number: "08039243752", expectedISP: "MTN" },
  { number: "07038248791", expectedISP: "MTN" },
  { number: "0909", expectedISP: "Etisalat" },
  { number: "09152132879", expectedISP: "Glo" },
  { number: "Unknown", expectedISP: "Unknown" },
];

testCases.forEach(({ number, expectedISP }) => {
  test(`Detect network provider for ${number}`, (assert) => {
    const provider = ispDetector(number);
    assert.equal(provider, expectedISP);
  });
});
