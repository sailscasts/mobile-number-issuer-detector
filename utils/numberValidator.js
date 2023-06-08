const  PhoneNumberUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

const validatePhonenumber = function (value) {
    const number = PhoneNumberUtil.parseAndKeepRawInput(value, 'NG');
    try{
        return PhoneNumberUtil.isValidNumber(number);
    }
    catch(error){
        console.log(error)
        return false;
    }
  
}

module.exports = validatePhonenumber;