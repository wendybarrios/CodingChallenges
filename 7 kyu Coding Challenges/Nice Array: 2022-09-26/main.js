// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.


// Tests
isNice([2,10,9,21]) --> true


function isNice(arr){
    if(arr.length < 1){
      return false
    }
      // loop through arr
      let addArr = arr.map(el => el + 1)
      let subArr = arr.map(el => el - 1)
      let newArr = addArr.concat(...subArr)
      // compare arr numbers and newArr numbers
     return arr.every(el => newArr.includes(el))
  }
  
jjlk  
