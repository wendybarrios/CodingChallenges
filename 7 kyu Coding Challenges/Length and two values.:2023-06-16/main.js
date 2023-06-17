// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples

// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []


function alternate(n, firstValue, secondValue){
    // if n == 0, return []
    // if n is even; loop -> n/2 -> push val1 and val2
  //   else {  stop at Math.ceil(n) -> push  push val1 and val2 }
    
    let empty = []
    
    if (n === 0){
      return []
    } else if (n%2 === 0){
      //loop for even n
      for(let i=0;i<n/2;i++){
        empty.push(firstValue)
        empty.push(secondValue)
      }
    return empty
    } else {
     // loop for odd n
      for(let i=0; i < Math.ceil(n/2); i++){
        empty.push(firstValue)
        empty.push(secondValue)
      }
      return empty.slice(0,-1)
    }
  }