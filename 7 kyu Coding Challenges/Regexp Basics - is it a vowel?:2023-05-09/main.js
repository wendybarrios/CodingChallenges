// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.



String.prototype.vowel = function() {
    let final = this
    if(final.toLowerCase() === "a" || final.toLowerCase() === "e" ||final.toLowerCase() === "i"||final.toLowerCase() === "o" || final.toLowerCase() === "u"){   
    return true
    } else {
      return false
    }
    
   };