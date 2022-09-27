// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.


// Tests
findMissing([1, 2, 3], [1, 3]) --> 2
findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) --> 8
findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]) --> 3

function findMissing(arr1, arr2){
    // sort
    let arrOne = arr1.sort((a,b) => a - b)
    let arrTwo = arr2.sort((a,b) => a - b)

    for(let i = 0; i < arrOne.length; i++){
        if(arrOne[i] === arrTwo[i]){
            true
        } else {
            return arrOne[i]
        }
    }

}