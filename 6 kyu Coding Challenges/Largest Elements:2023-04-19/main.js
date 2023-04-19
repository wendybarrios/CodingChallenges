// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]


function largest(n, array) {
    // Find the n highest elements in a list
  // sort in ascending
  //  slice(-n) 
    
    let newArr = array.sort((a,b) => a - b)
    let final = newArr.slice(-n)
    if(n===0){
      return []
    } 
    return final
  
  }