// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

//function: replace vows w Upp Case
// string -> not empty, all letters, no special chars, 
// word -> string


function swap (string) {
    //   split -> loop thru arr -> if vow, set el to upp case
      if(string === ""){
        return ""
      }
      let newWord = string.split("")
      let emptyArr = []
   
      for(let i=0; i<newWord.length;i++){
        if(newWord[i]=== "a" || newWord[i]=== "e" ||newWord[i]=== "i"||newWord[i]=== "o"||newWord[i]=== "u"){
         emptyArr.push(newWord[i].toUpperCase())
        } else {
          emptyArr.push(newWord[i])
        }
      }
      return emptyArr.join('')
    }



// Examples
console.log(swap("Hello World!"),  "HEllO WOrld!")
console.log(swap("Sunday"), "SUndAy")
console.log(swap("Codewars"), "COdEwArs")