const test = require('node:test');
const checkerFunction = require('../algo/issuerChecker.js');


test('asserting number with predfined issuer', (t) => {
    //testing a 9mobile number without the starting zero
    if(checkerFunction('+2348182218903') === "9MOBILE"){
      return;
    }else{
      throw new Error("not equal!")
    }
  });

test('asserting number with predfined issuer', (t) => {
    //testing a 9mobile number without the starting zero
    if(checkerFunction('+2348182218903') === "MTN"){
      return;
    }else{
      throw new Error("not equal!")
    }
  });

test('checking and returning issuer', (t) => {
    //test with the starting zero
    checkerFunction('+23408117721987');
  });

test('checking and returning issuer', (t) => {
    //test without the nigeria country code
    checkerFunction('08023271639');
  });

  