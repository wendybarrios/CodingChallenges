// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56


// Tests
getNumberFromString("1") --> 1
getNumberFromString("123")--> 123
getNumberFromString("this is number: 7") --> 7



function getNumberFromString(s){
    return parseInt(s.replace(/[^0-9]/g,''))
}