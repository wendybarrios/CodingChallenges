// Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

// Example

// For example, when n = 10:

// The square of the sum of the numbers is:

// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

// The sum of the squares of the numbers is:

// 12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

// Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640


function differenceOfSquares(n){
    // ...
  //   square of sum of nums
  //   loop from 1 to num
  //   get sum (Reduce) -> square that num
  //   sum of square of nums
  //   map -> el * el  -> find sum
    
    
    let newArr = []
    for(let i=1; i <= n; i++){
      newArr.push(i)
    }
    
    let first = Math.pow(newArr.reduce((a,b) => a+b,0), 2)
    let second = newArr.map(el => el*el).reduce((a,b)=>a+b,0)
    return first - second
  }


// Test Cases
console.log(differenceOfSquares(5), 170)
console.log(differenceOfSquares(10), 2640)
console.log(differenceOfSquares(100), 25164150)