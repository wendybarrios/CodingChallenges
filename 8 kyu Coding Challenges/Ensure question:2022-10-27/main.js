// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

function ensureQuestion(s) {
    
  //   split, check if last element == ?, if not push ? to array
       let newWord = s.split('')   
       if(newWord[newWord.length-1] == "?"){
         return newWord.join('')
       } else if (newWord[newWord.length-1] !== "?"){
         newWord.push("?")
         return newWord.join('')
       }

    }
    
// Tests
ensureQuestion("") -->"?"
ensureQuestion("Yes") --> "Yes?"
ensureQuestion("No?") --> "No?"