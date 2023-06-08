const { test } = require('@japa/runner')
const en = require('../locale/en')
const { detectNumberIssuer } = require('../index')


test.group("Check the number format", (group) => {
    test(`return ${en.invalid_without_dial_code} when number is 09090`, async({expect}) => {
        let response = await detectNumberIssuer("09090");

        expect(response.status).toBe(false)
        expect(response.message).toBe(en.invalid_without_dial_code);
    })
    test(`return ${en.invalid_without_dial_code} when number is 0987654312345`, async({expect}) => {
        let response = await detectNumberIssuer("0987654312345");

        expect(response.status).toBe(false)
        expect(response.message).toBe(en.invalid_without_dial_code);
    })
    test(`return GLO Nigeria when number is 09056144059`, async({expect}) => {
        let response = await detectNumberIssuer("09056144059");

        expect(response.status).toBe(true)
        expect(response.message).toBe("GLO Nigeria");
    })
    test(`return ${en.invalid_phone_number_format} when number is +2349056144059`, async({expect}) => {
        let response = await detectNumberIssuer("+2349056144059");

        expect(response.status).toBe(false)
        expect(response.message).toBe(en.invalid_phone_number_format);
    })
    test(`return ${en.invalid_phone_number_format} when number is +23490238`, async({expect}) => {
        let response = await detectNumberIssuer("+23490238");

        expect(response.status).toBe(false)
        expect(response.message).toBe(en.invalid_phone_number_format);
    })
    test(`return ${en.invalid_phone_number_format} when number is +234902389847329873292`, async({expect}) => {
        let response = await detectNumberIssuer("+234902389847329873292");

        expect(response.status).toBe(false)
        expect(response.message).toBe(en.invalid_phone_number_format);
    })
    test(`return ${en.invalid_phone_number_format} when number is 783282`, async({expect}) => {
        let response = await detectNumberIssuer("783282");

        expect(response.status).toBe(false)
        expect(response.message).toBe(en.invalid_phone_number_format);
    })
    test(`return ${en.invalid_phone_number_format} when number is +91838439833`, async({expect}) => {
        let response = await detectNumberIssuer("+91838439833");

        expect(response.status).toBe(false)
        expect(response.message).toBe(en.invalid_phone_number_format);
    })

})

test.group("Check Issuer", (group) => {
    test(`return GLO Nigeria when number is 09056144059`, async({expect}) => {
        let response = await detectNumberIssuer("09056144059");

        expect(response.message).toBe("GLO Nigeria");
        expect(response.status).toBe(true);
    })
    test(`return MTN Nigeria when number is 08037748077`, async({expect}) => {
        let response = await detectNumberIssuer("08037748077");

        expect(response.message).toBe("MTN Nigeria");
        expect(response.status).toBe(true);
    })
    test(`return Airtel Nigeria when number is 09075152756`, async({expect}) => {
        let response = await detectNumberIssuer("09075152756");

        expect(response.message).toBe("Airtel Nigeria");
        expect(response.status).toBe(true);
    })
    test(`return 9Mobile Nigeria when number is 08184892004`, async({expect}) => {
        let response = await detectNumberIssuer("08184892004");

        expect(response.message).toBe("9Mobile Nigeria");
        expect(response.status).toBe(true);
    })
    test(`return MTN Nigeria when number is 08144103168`, async({expect}) => {
        let response = await detectNumberIssuer("08144103168");

        expect(response.message).toBe("MTN Nigeria");
        expect(response.status).toBe(true);
    })
})