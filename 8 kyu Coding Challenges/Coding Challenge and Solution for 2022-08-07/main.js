// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// Tests
summation(1) --> 1
summation(8) --> 36

var summation = function (num) {
    // loop through 1 to num
    let total = 0
    for(let i = 1; i <= num; i ++){
         total = total + i  
    }
     return total
  }