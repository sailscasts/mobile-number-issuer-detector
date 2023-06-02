const { test } = require('@japa/runner')
const en = require('../locale/en')
const { detectNumberIssuer } = require('../index')


test.group("Check the number format", (group) => {
    test('return - "{message}" when number is "{number}"').with([
        {
            number: "09090",
            status: false,
            message: en.invalid_without_dial_code
        },
        {
            number: "0987654312345",
            status: false,
            message: en.invalid_without_dial_code
        },
        {
            number: "09056144059",
            status: true,
            message: "GLO Nigeria"
        },
        {
            number: "+2349056144059",
            status: false,
            message: en.invalid_phone_number_format
        },
        {
            number: "+23490238",
            status: false,
            message: en.invalid_phone_number_format
        },
        {
            number: "+234902389847329873292",
            status: false,
            message: en.invalid_phone_number_format
        },
        {
            number: "783282",
            status: false,
            message: en.invalid_phone_number_format
        },
        {
            number: "+91838439833",
            status: false,
            message: en.invalid_phone_number_format
        }
    ]).run(async({expect}, row) => {
        let response = await detectNumberIssuer(row.number);

        expect(response.status).toBe(row.status)
        expect(response.message).toBe(row.message);
    })
})

test.group("Check Issuer", (group) => {
    test('return - "{message}" when number is "{number}"').with([
        {
            number: "09056144059",
            status: true,
            message: "GLO Nigeria"
        },
        {
            number: "08037748077",
            status: true,
            message: "MTN Nigeria"
        },
        {
            number: "09075152756",
            status: true,
            message: "Airtel Nigeria"
        },
        {
            number: "08184892004",
            status: true,
            message: "9Mobile Nigeria"
        },
        {
            number: "08144103168",
            status: true,
            message: "MTN Nigeria"
        },
    ]).run(async ({expect}, row) => {
        let response = await detectNumberIssuer(row.number);

        expect(response.message).toBe(row.message);
        expect(response.status).toBe(row.status);
    })
})