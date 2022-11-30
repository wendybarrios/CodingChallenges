// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.


function inAscOrder(arr) {
    // Code your algorithm here :)
    

    let emptyArr = []
   for(let i=0;i < arr.length-1;i++){
     if(arr[i] < arr[i+1]){
      emptyArr.push(true)
     }
      else{
       emptyArr.push(false)
      }
   }
    console.log(emptyArr)
    
    return emptyArr.every(el => el == true)
    
  }