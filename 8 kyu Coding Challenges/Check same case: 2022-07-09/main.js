// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

// Tests
'C', 'B' -->1
'A', 's' --> 0
'H', ':' --> -1

function sameCase (a,b){
    if (/^[a-zA-Z]+$/.test(a) === false || /^[a-zA-Z]+$/.test(b) === false ){
     return -1
    } else if ((/^[^a-z]*$/).test(a) === true && (/^[^a-z]*$/).test(b) === true){
     return 1
    } else if ((/^[^a-z]*$/).test(a) === false && (/^[^a-z]*$/).test(b) === false){
      return 1
    }else if (/^[a-zA-Z]+$/.test(a) === true && /^[a-zA-Z]+$/.test(b) === true){
        if ((/^[^a-z]*$/).test(a) === true && (/^[^a-z]*$/).test(b) === false ){
             return 0
        } else if ((/^[^a-z]*$/).test(a) === false && (/^[^a-z]*$/).test(b) === true){
         return 0
        }
 
    }
   }