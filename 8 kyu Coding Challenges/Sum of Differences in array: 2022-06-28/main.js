// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example

// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// Tests
// sumOfDifferences([1, 2, 10]) --> 9
// sumOfDifferences([-3, -2, -1]) --> 2



function sumOfDifferences(arr) {
    // if else
    if(arr.length <= 1){
        return 0
    } else {
        let newArr = arr.sort((a, b) => b - a)
        // descending order
        return newArr[0] - (newArr[newArr.length - 1])
    }
}

