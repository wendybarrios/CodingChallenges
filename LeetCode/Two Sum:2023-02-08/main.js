// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



function findIndices(arr, target){
    // outside loop: grab a num
     for(let i=0; i <arr.length;i++){
       // inside loop: comparing outside num to internal nums
       for(let k=0; k < arr.length; k++){
         if(arr[i] + arr[k] === target){
           return [i,k]
         }
       }
     }
    
  }



console.log(findIndices([1,2,3,4,5], 9) , "[3,4]")
console.log(findIndices([5,6,9], 11) , "[0,1]")
console.log(findIndices([22,7,100,5], 12) , "[1,3]")