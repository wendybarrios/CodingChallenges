// Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

// Examples

// getDecimal(2.4)  === 0.4
// getDecimal(-0.2) === 0.2


function getDecimal(n){
    //convert toString -> split by . -> get arr[1] -> return that num
    
    if(Number.isInteger(n)){
      return 0
    }
    
  let newArr = n.toString().split('.')
  let num = newArr[1]
  return Number(`0.${num}`)
  }