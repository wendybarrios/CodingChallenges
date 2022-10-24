// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.


// isDigit("3") -> true
// isDigit("-3.23") -> true
// isDigit("3-4") -> false

function isDigit(s) {
    if( s == parseFloat(s)){
    return true
    }else{
      return false
      }
   }