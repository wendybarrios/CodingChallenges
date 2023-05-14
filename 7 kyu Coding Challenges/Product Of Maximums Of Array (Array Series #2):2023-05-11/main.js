// Task

// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes

// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.



function maxProduct(numbers, size){
    //sort -> slice(-size)
  //   split -> multiply numbers
    let newString = numbers.sort((a,b) => a-b).slice(-size)
    let final = newString.reduce((a,b) => a * b, 1)
    return final
    
  }