// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.




function unscrambleEggs(word){
   //replace egg w ""
  return word.replace(/egg/g, "")
  }