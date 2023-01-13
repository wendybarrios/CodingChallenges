// Task

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
    // newArr
  //   loop thru array -> multiply num w next num -> push answer to newArr
  // find Max
    let newArr = []
    for(let i=0;i < array.length-1;i++){
      newArr.push(array[i]*array[i+1])
    }
    
    return Math.max(...newArr)
    
  }