// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.


// Tests
// doTest("Hi!") --> "Hi"
// doTest("Hi!!!" --> "Hi!!"
// doTest("!Hi") --> "!Hi"


function remove (string){
 return string.replace(/!$/, '')

}