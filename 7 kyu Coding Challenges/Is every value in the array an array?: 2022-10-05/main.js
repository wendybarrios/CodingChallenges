// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.


// p: strings, numbers, arrays, empty array
// r: boolean, true, false


// Tests
arrCheck([]) --> true
arrCheck(['string']) --> true
arrCheck([[],{}]) --> false

function arrCheck(value){
    // loop through value
    return value.every(el => Array.isArray(el))

}