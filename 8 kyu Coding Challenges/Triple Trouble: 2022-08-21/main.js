// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!


// Tests
tripleTrouble("aaa","bbb","ccc") --> "abcabcabc"
tripleTrouble("aaaaaa","bbbbbb","cccccc") --> "abcabcabcabcabcabc"
tripleTrouble("burn", "reds", "roll") --> "brrueordlnsl"

function tripleTrouble (one, two, three){
    let newArr = []
    for(let i=0; i < one.length; i++){
        newArr.push(one[i])
        newArr.push(two[i])
        newArr.push(three[i])
    }
    let newWord = newArr.join('')
    return newWord
    }