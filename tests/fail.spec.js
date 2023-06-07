const { test } = require('@japa/runner')
const { PredictDigit } = require('../alg')

test.group('detect MTN', () => {
    test('return - NOT MTN')
        .with([
            "09124802297",
        ])
        .run(async ({assert}, row) => {
            let response = await PredictDigit(row)
            assert.notEqual(response, "MTN")
        })
})

test.group('detect AIRTEL', () => {
    test('return - NOT AIRTEL')
        .with([
            "07031687898",
        ])
        .run(async ({assert}, row) => {
            let response = await PredictDigit(row)
            assert.notEqual(response, "NOT FOUND")
        })
})

test.group('detect GLO', () => {
    test('return - NOT GLO')
        .with([
            "08094503776",
        ])
        .run(async ({assert}, row) => {
            let response = await PredictDigit(row)
            assert.notEqual(response, "NOT FOUND")
        })
})

test.group('detect 9MOBILE', () => {
    test('return - NOT 9MOBILE')
        .with([
            "08053205203",
        ])
        .run(async ({assert}, row) => {
            let response = await PredictDigit(row)
            assert.notEqual(response, "NOT FOUND")
        })
})
