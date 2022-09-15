// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Tests
multiplyAll([1,2,3], 1) --> [1,2,3]
multiplyAll([1,2,3], 2) --> [2,4,6]
multiplyAll([1,2,3], 0) --> [0,0,0]

function multiplyAll (arr){
   return function(int){
    return arr.map(el => el * int)
   }
}


