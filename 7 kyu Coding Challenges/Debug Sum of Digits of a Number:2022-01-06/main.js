// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example

// 123  => 6
// 223  => 7
// 1337 => 14


function getSumOfDigits(integer) {
    //   num toString -> split -> reduce -> return to Num
      console.log(integer)
      let newNum = integer.toString().split('').map(el => +el).reduce((a,b) => a +b)
      return newNum
    
    
    }