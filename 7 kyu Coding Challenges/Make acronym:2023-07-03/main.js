// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW
// Note: There will be at least two words in the given string!




function toAcronym(inp){
    // split by space
    // loop thru arr, get first char of each word, push to newArr
  //   join newArr -> 
    
    let newArr = inp.split(' ')
    let emptyArr = []
    
    
    for(let i=0; i < newArr.length;i++){
      emptyArr.push(newArr[i].charAt(0))
    }
    
    return emptyArr.join('').toUpperCase()
    
  }

