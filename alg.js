"use strict"

// select functions that can be accessible
// get json file
const fs = require("fs")
var prefix_store = JSON.parse(fs.readFileSync("prefixes.json").toString())

let count = false

function digit_slicer(digit, range) {
    // select the digit to a specified range
    return digit.slice(0, range)
}

function predict_digit(digit) {

    var result

    for (let key in prefix_store) {
        // get array for each key
        prefix_store[key].forEach((value, index, array) => {
            // slice the digit to match each value in the array
            const prefix = digit_slicer(digit, value.length)
            // compare input with values
            if (prefix === value) {
                count = true
                result=key
            } 
        })
    }

    if (!count) {
        result = "Not found!"
    }

    return result

}

module.exports = { predict_digit }