// The goal of this kata is two-fold:

// 1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

// 2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

// For the sake of this kata, you can assume all input will be a positive integer.

// Use Cases

// Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

// Examples

// Input:

// fibsFizzBuzz(5)
// Output:

// [ 1, 1, 2, 'Fizz', 'Buzz' ]
// Input:

// fibsFizzBuzz(1)
// Output:

// [1]

var fibsFizzBuzz = function(n) {
    //createArr
  
let newArr = [1,1]
  if(n===1){
    return newArr.slice(0,-1)
  } else {
    for(let i=2; i < n;i++){
  newArr.push(newArr[i-1] + newArr[i-2] )
}
  }
  

  return newArr.map(el => {
     if(el % 3 === 0 && el % 5 === 0){
    return el = "FizzBuzz"
    } else if (el % 3 === 0) {
     return  el = "Fizz"
    } else if (el % 5 === 0){
      return el = "Buzz"
    } else{
      return el
    }    
  })
}

// Test Cases
console.log(fibsFizzBuzz(2),[ 1, 1 ])
console.log(fibsFizzBuzz(5),[ 1, 1, 2, 'Fizz', 'Buzz' ])