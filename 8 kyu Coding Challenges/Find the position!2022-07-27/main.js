// When provided with a letter, return its position in the alphabet.

// Tests
position("a") --> "Position of alphabet: 1"
position("z") --> "Position of alphabet: 26"
position("e") --> "Position of alphabet: 5"

function position(letter){
    //Write your own Code!
    let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let position = letters.indexOf(letter) + 1

    return `Position of alphabet: ${position}`
    }