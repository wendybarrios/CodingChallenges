// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str){
    // split each str -> map: split again -> reverse each str -> join -> join again
      let newArray = str.split(" ").map(el => el.split('').reverse().join('')).join(' ')
      return newArray
      
    }



console.log(reverseWords("This is an example!") , "sihT si na !elpmaxe")
console.log(reverseWords("double  spaces"  )    , "elbuod  secaps")