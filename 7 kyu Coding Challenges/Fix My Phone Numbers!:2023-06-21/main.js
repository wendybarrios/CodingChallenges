// Fix My Phone Numbers

// Oh thank goodness you're here! The last intern has completely ruined everything!

// All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!

// The Format

// Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

// However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!

// For example,  '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.

// The Task

// Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".

function isItANum(str) {
    // replace everything that is not a num w ""
    // check string.length


    let newWord = str.replace(/[^0-9]/g,"")
    console.log(newWord)
    
    if(newWord.length == 11 && newWord[0] === "0" ){
      return newWord
    } else {
      return "Not a phone number"
    }
}

// Test Cases
console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"), "02078834982");
console.log(isItANum("sjfniebienvr12312312312ehfWh"), "Not a phone number");
console.log(isItANum("0192387415456"), "Not a phone number");