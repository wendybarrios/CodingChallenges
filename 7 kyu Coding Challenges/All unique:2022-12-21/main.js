// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.


// "  nAa" ->false
// "abcdef")->true
// "++-" ->false

function hasUniqueChars(str){
    // split -> create newSet -> join('') 
   // compare length
   
     let otherStr = str.split('')
     let newArr = [...new Set(otherStr)]
     let finalStr = newArr.join('')
   
     if(finalStr.length === str.length){
       return true
     } else{
       return false
     }
     
   }
   
   console.log(hasUniqueChars("  nAa"), false)
   console.log(hasUniqueChars("abcdef"), true)
   console.log(hasUniqueChars("++-"), false)