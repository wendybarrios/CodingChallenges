// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


function getMiddle(s){
    //   split into arr 
      let newWord = s.split('')
    // even ex: "test" --> "es"
      if (newWord.length == 1){
        return s
      } else if (newWord.length % 2 === 0){
        let firstIndex = newWord.length / 2
        let secondIndex = firstIndex-1
        let finalChar = [newWord[secondIndex], newWord[firstIndex]]
        return finalChar.join('')
      } else if (newWord.length % 2 === 1){
        let oddFirst = Math.floor(newWord.length /2)
        let finalLetters = newWord[oddFirst]
        return finalLetters
      }
    }

// test cases
console.log(getMiddle("test"), "es")
console.log(getMiddle("testing"), "t")
console.log(getMiddle("A"), "A")