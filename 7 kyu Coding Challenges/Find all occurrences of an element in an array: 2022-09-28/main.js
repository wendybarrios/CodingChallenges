// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.


// Tests
findAll([6, 9, 3, 4, 3, 82, 11], 3) --> [2, 4]
findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16) --> [1, 9]



function findAll(array, n){
    let newArr = []
    // loop through each number: if n matches el, return index
for(let i= 0; i < array.length; i++){
    if(array[i] == n){
        newArr.push(i)
    }
}
  return newArr
}