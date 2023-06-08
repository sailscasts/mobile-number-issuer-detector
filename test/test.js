const test = require('node:test');
const checkerFunction = require('../algo/issuerChecker.js');


test('synchronous passing test', (t) => {
    //test without the starting zero
    checkerFunction('+2348182218903');
  });

test('synchronous passing test', async (t) => {
    //test with the starting zero
    checkerFunction('+23408117721987');
  });

test('synchronous passing test', async (t) => {
    //test without the nigeria country code
    checkerFunction('08023271639');
  });

  