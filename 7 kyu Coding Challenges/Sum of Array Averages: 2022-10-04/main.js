// Program a function sumAverage(arr) where arr is an array containing arrays full of numbers, for example:

// sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]);
// First, determine the average of each array. Then, return the sum of all the averages.

// All numbers will be less than 100 and greater than -100.
// arr will contain a maximum of 50 arrays.
// After calculating all the averages, add them all together, then round down, as shown in the example below:
// The example given: sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), the answer being 44.

// Tests
sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]) -->  44
sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]) --> -6



function sumAverage (arr){
//    new array
let newArr = []

for(let i=0; i < arr.length; i++){
    // find average for each array
    let num = arr[i].reduce((a,b) => a + b, 0) / arr[i].length
    newArr.push(num)
}
// add averages and round down
return Math.floor(newArr.reduce((a,b) => a + b,0))
}