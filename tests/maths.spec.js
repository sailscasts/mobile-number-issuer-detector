const { test } = require("@japa/runner");
const { ispDetector } = require("../ispdetector.js");

test('return - "{expectedISP}" when number is "{number}"')
  .with([
    {
      number: "08022788439",
      expectedISP: "Airtel",
    },
    {
      number: "09122798737",
      expectedISP: "Airtel",
    },
    {
      number: "08039243752",
      expectedISP: "MTN",
    },
    {
      number: "07038248791",
      expectedISP: "MTN",
    },
    { number: "0909", expectedISP: "Etisalat" },
    {
      number: "09152132879",
      expectedISP: "Glo",
    },
    {
      number: "Unknown",
      expectedISP: "Unknown",
    },
  ])
  .run(async ({ assert }, row) => {
    let response = await ispDetector(row.number);
    assert.equal(response, row.expectedISP);
  });
// .run(async (context, row) => {
//   let response = await ispDetector(row.number);
//   context.assert.equal(response, row.expectedISP);
// });
