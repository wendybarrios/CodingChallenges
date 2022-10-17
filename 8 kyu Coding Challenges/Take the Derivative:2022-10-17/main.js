// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

// (7,8) --> "56x^7"
// (5,9) --> "45x^8"

function derive(coefficient, exponent){
    // first num
let firstNum = coefficient*exponent
   // second num
let secondNum = exponent-1
  // final output
return `${firstNum}x^${secondNum}`
  
}