// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// 

function sumTwoSmallestNumbers(numbers) {  
    // sort in ascending order -> find index 0 and 1 -> find sum
      let newArr = numbers.sort((a,b) => a - b)
      return newArr[0] + newArr[1]
    }

// Test Cases
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13)
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 )
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16)