// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.



// Tests
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

function shortcut (string){
let newString = string.replace(/a|e|i|o|u/gi, '')
 return newString
}
