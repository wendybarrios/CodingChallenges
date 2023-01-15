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

  console.log(adjacentElementsProduct([1, 2, 3]),6)
  console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50)
  console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14)