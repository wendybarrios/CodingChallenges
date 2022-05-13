/*
Coding in function blackAndWhite. function accept 1 parameter arr(a number array).
If arr is not an array, function should return:
"It's a fake array"
If arr contains elements 5 and 13, function should return:
"It's a black array"
If arr contains neither 5 nor 13, function should return:
"It's a white array"
*/
function blackAndWhite(arr){
    //coding here...
    
  }

// Test
/*
console.log(blackAndWhite(5,13)) --> "It's a fake array"
console.log(blackAndWhite([5,13])) --> "It's a black array"
console.log(blackAndWhite([5,12])) --> "It's a white array" 
*/

function blackAndWhite(arr){
    if(Array.isArray(arr) === false){
        // check for an array
      return "It's a fake array"
    }else if (arr.includes(13) === true && arr.includes(5) === true){
        // check if 13 and 5 are in array
      return "It's a black array"
    }else if (arr.includes(13) === false || arr.includes(5) === false){
        // check if 13 or 5 are in array
      return "It's a white array"
    }
    }
