// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    // Your code here
  }

// Tests
/*
console.log(doubleChar("abcd"))   --> "aabbccdd"
console.log(doubleChar("Adidas")) -->  "AAddiiddaass"
console.log(doubleChar("1337"))   -->  "11333377"

*/


// Solutions
function doubleChar(str) {
    return str.split('').map(el => el + el).join('')
  }
