// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.


// Tests
squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])--> [ 2, 9, 3, 49, 4, 1 ]
squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ]) --> [ 10, 10201, 25, 25, 1, 1 ]
squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ]) --> [ 1, 4, 9, 2, 25, 36 ]

function squareOrSquareRoot(array) {

    // loop
    let newArr = []
    for(let i = 0; i <array.length;i++){
        if (Math.sqrt(array[i]) % 1 === 0){
            let firstNum = Math.sqrt(array[i])
            newArr.push(firstNum)
        } else {
            let squareNum = array[i] * array[i]
            newArr.push(squareNum)
        }
    }
    return newArr
  }