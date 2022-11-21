// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.



var isAnagram = function(test, original) {
    //   lowercase -> split -> compare
        let newTest = test.toLowerCase().split('').sort().join('')
        let newOriginal = original.toLowerCase().split('').sort().join('')
        
        if(newTest === newOriginal){
          return true
        } else {
          return false
        }
      
    };