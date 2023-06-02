const { test } = require('@japa/runner')
const { predict_digit } = require('../alg');

test.group('detect issuer', () => {
    test('return "{isp}"').with([
        {digit: "09124802297", isp: "AIRTEL"}, {digit: "07031687898", isp: "MTN"}, 
        {digit: "08160676066", isp: "MTN"}, {digit: "08122170887", isp: "AIRTEL"}
    ]).run(async ({assert}, row) => {
        let response = await predict_digit(row.digit)
        assert.equal(response, row.isp)
    })
})
