// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example

// 25  =>  25 + 12 + 6 + 3 + 1 = 47


function halvingSum(n) {
    //   newArr -> loop -> add
      let newArr = []
      let bottomVal = 1
      
      for(let i=0; i < n; i++ ){
        newArr.push(Math.floor(n/bottomVal))
        bottomVal = bottomVal*2
      }
      
      
    let finalNum = newArr.reduce((a,b) => a+b,0)
    return finalNum
    
        
    }