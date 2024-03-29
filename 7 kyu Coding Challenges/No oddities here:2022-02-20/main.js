// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


function noOdds( values ){
    // Return all non-odd values
  //   filter => el === 0 || el % 2 === 0
    
    return values.filter(el => el === 0 || el % 2 === 0)
  }

console.log( noOdds( [0,1] ), [0] )
console.log( noOdds( [0,1,2,3] ), [0,2] )