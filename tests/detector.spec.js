const { test } = require('@japa/runner');

const en = require('../locale/en');
const { PredictDigit } = require('../src/app');

test.group('Check the number format', (group) => {
  test(`return ${en.invalid_dial_code} when number is 09090`, async ({ expect }) => {
    const response = await PredictDigit('09090');

    expect(response).toBe(en.invalid_dial_code);
  });
  test(`return ${en.invalid_dial_code} when number is 0987654312345`, async ({ expect }) => {
    const response = await PredictDigit('0987654312345');

    expect(response).toBe(en.invalid_dial_code);
  });
  test(`return ${en.invalid_phone_number_format} when number is +2349056144059`, async ({ expect }) => {
    const response = await PredictDigit('+2349056144059');

    expect(response).toBe(en.invalid_phone_number_format);
  });
  test(`return ${en.invalid_phone_number_format} when number is +23490238`, async ({ expect }) => {
    const response = await PredictDigit('+23490238');

    expect(response).toBe(en.invalid_phone_number_format);
  });
  test(`return ${en.invalid_phone_number_format} when number is +234902389847329873292`, async ({ expect }) => {
    const response = await PredictDigit('+234902389847329873292');

    expect(response).toBe(en.invalid_phone_number_format);
  });
  test(`return ${en.invalid_phone_number_format} when number is 783282`, async ({ expect }) => {
    const response = await PredictDigit('783282');

    expect(response).toBe(en.invalid_phone_number_format);
  });
  test(`return ${en.invalid_phone_number_format} when number is +91838439833`, async ({ expect }) => {
    const response = await PredictDigit('+91838439833');

    expect(response).toBe(en.invalid_phone_number_format);
  });
});

test.group('Check Issuer', (group) => {
  test('return GLO when number is 09056144059', async ({ expect }) => {
    const response = await PredictDigit('09056144059');

    expect(response).toBe('GLO');
  });
  test('return MTN when number is 08037748077', async ({ expect }) => {
    const response = await PredictDigit('08037748077');

    expect(response).toBe('MTN');
  });
  test('return AIRTEL when number is 09075152756', async ({ expect }) => {
    const response = await PredictDigit('09075152756');

    expect(response).toBe('AIRTEL');
  });
  test('return 9MOBILE when number is 08184892004', async ({ expect }) => {
    const response = await PredictDigit('08184892004');

    expect(response).toBe('9MOBILE');
  });
  test('return MTN when number is 08144103168', async ({ expect }) => {
    const response = await PredictDigit('08144103168');

    expect(response).toBe('MTN');
  });
});
