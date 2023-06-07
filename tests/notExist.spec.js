const { test } = require('@japa/runner')
const { PredictDigit } = require('../alg')

test.group('detect NOT FOUND', () => {
    test('return - NOT FOUND')
        .with([
            "09084802297",
        ])
        .run(async ({assert}, row) => {
            let response = await PredictDigit(row)
            assert.notEqual(response, "NOT FOUND")
        })
})