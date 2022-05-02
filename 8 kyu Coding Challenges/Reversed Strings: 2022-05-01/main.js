/*
Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str){
  return str; // reverse those words
}
*/

// Tests
/*
reverseWords("The greatest victory is that which requires no battle") --> "battle no requires which that is victory greatest The"
reverseWords("yoda doesn't speak like this")  --> "this like speak doesn't yoda"
reverseWords("yoda doesn't speak like this")  --> "this like speak doesn't yoda"

*/

// Solution

function reverseWords(str){
    // reverse those words
    return str.split(' ').reverse( ).join(' ')
 
}