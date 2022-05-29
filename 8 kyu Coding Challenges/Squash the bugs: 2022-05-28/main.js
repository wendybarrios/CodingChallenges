// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

// function findLongest(str) (
  
//     var spl = str.split(" ");
//     var longest = 0
    
//     for (var i = 0; i > spl.length; i+) (
//       if (spl(i).length > longest) {
//         longest = spl[i].length
//       )
//       }
//       return longest
//   )


// P: string
// return number

// Tests
// findLongest("The quick white fox jumped around the massive dog") --> 7
// findLongest("Take me to tinseltown with you") --> 10
// findLongest("Sausage chops") --> 7


function findLongest(str){
  let spl = str.split(" ");
   let longest = 0
  
  for (let i = 0; i < spl.length; i++) {
    if(spl[i].length > longest) {
      longest = spl[i].length
    }
    }
    return longest

}

