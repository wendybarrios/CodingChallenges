// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"


function evenChars(string) {
    //emptyArr 
    //  if  str that are < 2 || > 100
    // loop thru str -> if i % 2 === 0, push
    //  join
      let empty = []
      let newString = string.split('')
      
      if(string.length < 2 || string.length > 100){
        return "invalid string"
      } else {
    //     loop thr string
        for(let i=0;i<newString.length-1;i++){
          if (i % 2 === 0){
            empty.push(newString[i+1])
          }
        }
        
      }
    
      return empty
    }


    // Test Cases

console.log(evenChars ("1234"), ["2", "4"])
console.log(evenChars (";;;--"), [";", "-"])
console.log(evenChars ("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])