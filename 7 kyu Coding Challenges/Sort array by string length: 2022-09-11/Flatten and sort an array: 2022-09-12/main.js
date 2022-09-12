// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// p: array
// r: array

// Tests
flattenAndSort([]) --> []
flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]) --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]) --> [1, 2, 3, 4, 5, 6, 100]

function flattenAndSort(array){
   
        // concat
        let newArr = array.flat()
        // sort
        return newArr.sort((a,b) => a - b, 0)

        
}