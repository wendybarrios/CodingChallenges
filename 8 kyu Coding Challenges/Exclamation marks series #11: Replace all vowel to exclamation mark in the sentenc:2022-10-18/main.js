// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s){
    // replace method
    return s.replace(/[aeiouAEIOU]/g, "!")
    
  }
  
  console.log(replace("Hi!"), "H!!" )
  console.log(replace("!Hi! Hi!"), "!H!! H!!")
  console.log(replace("!Hi! Hi!"), "!!!!!" )
