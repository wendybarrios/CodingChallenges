// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    // your code........
}

/* Tests

console.log((simpleMultiplication(2)) --> 16
console.log((simpleMultiplication(1)) --> 9
console.log((simpleMultiplication(8)) --> 64

*/

// Solution

function simpleMultiplication(number) {
    if (number % 2 === 0){
      return number * 8
    //   returns given argument multiplied 8
    }else {
      return number * 9
    //   returns given argument multiplied 9
    } 
}

