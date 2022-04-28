// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.

// function sum (numbers) {
 
    
// };

// Tests

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: [1, 10, 3, 5]
// Output: 19

// Solution
// return sum of all numbers
function sum (numbers) {
   
    return numbers.reduce((a,b) => a + b, 0)
     
 };


