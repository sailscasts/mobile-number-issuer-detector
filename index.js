const en = require("./locale/en");
const fs = require("fs")
const path = require("path")

function checkFormat(number){
  // Regex pattern to match +234 followed by 10 digits or 0 followed by 10 digits
  const pattern = /^(?:0\d{10})$/;

  // Test if the number matches the pattern
  if (pattern.test(number)) {
    return true;
  } else {
    if (number.length != 11 && number.startsWith('0')) {
      return en.invalid_without_dial_code;
    } else {
      return en.invalid_phone_number_format;
    }
  }

}

async function searchJSONFile(prefix){
    const filePath = path.join(__dirname, "numberPrefix.json")

    try {
        const fileData = await fs.promises.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(fileData);
        return jsonData[prefix]
      } catch (error) {
        console.error('Error reading JSON file:', error);
        return null;
      }
}

async function detectNumberIssuer(number){
    let format = checkFormat(number)

    if(format === true){
        const firstFiveChars = number.substring(0, 5);

        let numIssuer = await searchJSONFile(firstFiveChars);
        
        if(numIssuer != undefined){
            return {status: true, message: numIssuer}
        }
        else{
            const firstFourChars = number.substring(0, 4);
            let numIssuer = await searchJSONFile(firstFourChars);
            
            if(numIssuer != undefined){
                return {status: true, message: numIssuer}
            }
            
        }
        return {status: false, message: en.no_issuer_found}
        
    }
    else{
        return {status: false, message: format}
    }
}

module.exports = {detectNumberIssuer}