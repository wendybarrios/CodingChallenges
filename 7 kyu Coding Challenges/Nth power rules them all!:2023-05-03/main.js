// You are provided with an array of positive integers and an additional integer n (n > 1).

// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

// Examples

// {1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
// {1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30

function modifiedSum(a, n) {
    // map through a -> do Exponent -> push to emptyArr
   //  adds up all nums
  //   exp - sumOfNums
    
    let mathPow = a.map(el => Math.pow(el,n)).reduce((a,b) => a+b,0)
    let sum = a.reduce((a,c) => a+c,0)
    return mathPow - sum
  }

// Test Cases
  console.log(modifiedSum([1, 2, 3], 3), 30); 
  console.log(modifiedSum([1, 2], 5), 30)