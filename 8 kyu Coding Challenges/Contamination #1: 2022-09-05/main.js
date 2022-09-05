// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Tests
contamination("abc","z") --> "zzz"
contamination("","z") --> ""
contamination("_3ebzgh4","&") --> "&&&&&&&&"

function contamination(text, char){

    let newArr = []
    //  empty 
    if(text === '' || char === ''){
        return ''
    } else {
    for(let i = 0; i < text.length; i++){
       newArr.push(char)
    }
    return newArr.join('')
    }
}