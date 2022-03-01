// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    //lowercase -> split -> filter
  let newStr = str.toLowerCase().split('').filter(el => el === 'x')
  let otherStr = str.toLowerCase().split('').filter(el => el === 'o')
 if (newStr.length === otherStr.length){
   return true
 } else{
   return false
 }
  
}

// Examples
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
