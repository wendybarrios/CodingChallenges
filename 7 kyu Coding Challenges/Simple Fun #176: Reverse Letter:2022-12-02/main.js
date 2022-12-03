// Given a string str, reverse it and omit all non-alphabetic characters.

// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output

// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string


function reverseLetter(str) {
    //replace all nonalphabetic chars -> reverse
    
    let newWord = str.replace( /[^a-zA-Z]/g, '')
    let finalWord = newWord.split('').reverse().join('')
    return finalWord
    
    
  }


  console.log(reverseLetter("krishan"),"nahsirk")
  console.log(reverseLetter("ultr53o?n"),"nortlu")
  console.log(reverseLetter("ab23c"),"cba")