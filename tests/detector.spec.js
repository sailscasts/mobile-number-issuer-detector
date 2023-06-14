const { test } = require('@japa/runner')
const { PredictDigit } = require('../src/app')

test.group('detect issuer', () => {
    test('return - MTN')
        .with([
            "07031687898", "08037319586", "08069531163",
        ])
        .run(async ({assert}, row) => {
            let response = await PredictDigit(row)
            assert.equal(response, "MTN")
        });

    test('return - AIRTEL')
        .with([
            "08026849268", "09124802297",
            "08084964271",
        ])
        .run(async ({assert}, row) => {
            let response = await PredictDigit(row)
            assert.equal(response, "AIRTEL")
        });
    test('return - GLO')
        .with([
            "08053205203", "08055915543",
            "08075584521",
        ])
        .run(async ({assert}, row) => {
            let response = await PredictDigit(row)
            assert.equal(response, "GLO")
        });
        
    test('return - 9MOBILE')
        .with([
            "08094503776",
            "08093015815",
            "08181318991",
        ])
        .run(async ({assert}, row) => {
            let response = await PredictDigit(row)
            assert.equal(response, "9MOBILE")
        })
})