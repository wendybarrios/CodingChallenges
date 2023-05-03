// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.


function capitalize(s,arr){
    let newString = s.split('')
  //   loop thru arr -> reassign indexOf in newString
    for(let i=0; i < arr.length;i++){
       if(arr[i] > s.length){
        newString[arr[i]] = newString[arr[i]]
       } else {
          newString[arr[i]] = newString[arr[i]].toUpperCase()
       } 
    }
  
  return newString.join('')
  };