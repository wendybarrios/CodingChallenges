// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// Tests
 capMe(['jo', 'nelson', 'jurie']) -->  ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) --> ['Karly', 'Daniel', 'Kelsey']


 function capMe(names){
    //  convert to all letters
let lowerCaseArr = names.map(el => el.toLowerCase())
    // uppercase first letter
let finalArr = lowerCaseArr.map(el => el[0].toUpperCase() + el.slice(1))
return finalArr
}