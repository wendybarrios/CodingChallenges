// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.


function isSortedAndHow(array) {
    //   newArr -> sort asc -> compare
    //   newArr -> sort desc -> compare
      
      let ascendArr = array.slice(0).sort((a,b) => a-b).join('')
       let descendArr = array.slice(0).sort((a,b) => b-a).join('')
      let oldArr = array.join('')
      
       if(oldArr === ascendArr){
         return "yes, ascending"
       } else if (oldArr === descendArr){
         return "yes, descending"
       } else {
         return "no"
       }
      
      
    }