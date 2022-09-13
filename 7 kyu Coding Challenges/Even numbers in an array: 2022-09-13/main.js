// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.


// Tests
evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) --> [4, 6, 8]
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) --> [-8, 26]
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) --> [6]


function evenNumbers(arr, num){
    let newArr = []
    // get even numbers
    for(let i= 0; i < arr.length; i++){
       if( arr[i] % 2 === 0){
        newArr.push(arr[i])
       }
    }
    // sort new array and splice by num
   let finalArr = newArr.slice(-(num))
   return finalArr
}