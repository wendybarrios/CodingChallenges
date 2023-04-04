// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 




function duplicateEncode(word){
    // ...
  let emptyArr = []
  let newWord = word.toLowerCase().split('')
  for(let i=0; i< newWord.length;i++){
    if(newWord.indexOf(newWord[i]) === newWord.lastIndexOf(newWord[i])){
      emptyArr.push("(")
    } else {
      emptyArr.push(")")
    }
  }
  
  return emptyArr.join("")
}

// Test Cases
console.log(duplicateEncode("din"),"(((")
console.log(duplicateEncode("recede"),"()()()")