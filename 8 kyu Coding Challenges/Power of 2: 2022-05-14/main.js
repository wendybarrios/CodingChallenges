// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
function powersOfTwo(n){
  
}

// Tests 

/*
console.log(powersOfTwo(0)) --> [1]
console.log(powersOfTwo(1)) --> [1, 2]
console.log(powersOfTwo(4)) --> [1, 2, 4, 8, 16]
*/

// Solution

function powersOfTwo(n){
  
    let result=[]
    // create empty array
    for(let i=0; i<=n;i++){
      result.push(Math.pow(2,i))
    }
    return result
  }