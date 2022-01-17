// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    // s1: new Set to remove dups
  //  s2: newSet to sets to remove dups
  //   concat both newArrs -> remove dups -> sort
    
    let newS1 = s1.split('')
    let newArr1 = [...new Set(newS1)]
    
     let newS2 = s2.split('')
    let newArr2 = [...new Set(newS2)]
    
    let combinedArr = newArr1.concat(newArr2)
    let newCombined = [...new Set(combinedArr)]
    let final = newCombined.sort().join('')
    return final
    
  }
  