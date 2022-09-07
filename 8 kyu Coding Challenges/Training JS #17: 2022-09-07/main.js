// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.


// Tests
firstToLast("ababc","a") --> 2
firstToLast("ababc","c") --> 0
firstToLast("ababc","d") --> -1


function firstToLast(str,c){
    let newWord = str.split('')
    if(str.includes(c) === false){
        return -1
    } else if (newWord.filter(el => el === c).length === 0){
        return 0
    } else {
        return (str.lastIndexOf(c) - str.indexOf(c))
    }
  }
