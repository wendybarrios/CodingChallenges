// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// p: numbers, whole
// return array

// Tests
// divisibleBy([1,2,3,4,5,6] --> 2
// divisibleBy([1,2,3,4,5,6] --> 3
// divisibleBy[0,1,2,3,4,5,6] --> 4

function divisibleBy(numbers, divisor){
   let newArr = []
//    loop
   for(let i=0; i < numbers.length; i++){
    //    if else
       if(numbers[i] % divisor === 0){
           newArr.push(numbers[i])
       }

   }
return newArr

}