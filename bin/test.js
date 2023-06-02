const { assert } = require("@japa/assert");
const { specReporter } = require("@japa/spec-reporter");
const { runFailedTests } = require("@japa/run-failed-tests");
const { processCliArgs, configure, run } = require("@japa/runner");

/*
|--------------------------------------------------------------------------
| Configure tests
|--------------------------------------------------------------------------
|
| The configure method accepts the configuration to configure the Japa
| tests runner.
|
| The first method call "processCliArgs" process the command line arguments
| and turns them into a config object. Using this method is not mandatory.
|
| Please consult japa.dev/runner-config for the config docs.
*/
configure({
  ...processCliArgs(process.argv.slice(2)),
  ...{
    files: ["tests/**/*.spec.js"],
    plugins: [assert(), runFailedTests()],
    reporters: [specReporter()],
    importer: (filePath) => require(filePath),
  },
});

/*
|--------------------------------------------------------------------------
| Run tests
|--------------------------------------------------------------------------
|
| The following "run" method is required to execute all the tests.
|
*/

//require the ispdetector file here too
// const { detectIspProvider } = require("ispdetector.js");

// //import json file
// const testData = require("./testData.json");

const { test } = require("@japa/runner");

//write test
test("detectIspProvider function should correctly detect Airtel network for 0802....", (assert) => {
  assert.equal(detectIspProvider("08022788439"), "Airtel");
});

test("detectIspProvider function should correctly detect Airtel network for 0912....", (assert) => {
  assert.equal(detectIspProvider("09122798737"), "Airtel");
});

test("detectIspProvider function should corrrectly detect MTN network for 0803....", (assert) => {
  assert.equal(detectIspProvider("08039243752"));
});

test("detectIspProvider function should corrrectly detect MTN network for 0703....", (assert) => {
  assert.equal(detectIspProvider("07038248791"));
});
test("detectIspProvider function should correctly detect Etisalat network for 0909", (assert) => {
  assert.equal(detectIspProvider("0909"));
});
test("detectIspProvider function shoudl cprrectly detect GLO network for 0915", (assert) => {
  assert.equal(detectIspProvider("09152132879"));
});

test("detectIspProvider function should correctly detect unknown network provider", (assert) => {
  assert.equal(detectIspProvider("Unknown"));
});

//iterate over test data array in the json file
for (const { number, expectedISP } of testData) {
  test(`Detect network provider for ${number}`, (assert) => {
    const provider = detectIspProvider(number);
    assert.equal(provider, expectedISP);
  });
}

run();
