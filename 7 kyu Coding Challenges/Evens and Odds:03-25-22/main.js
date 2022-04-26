// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
// Numbers will be positive. The hexadecimal string should be lowercased.



function evensAndOdds(num){
//   even 
//   odd
  
  if (num % 2 === 0){
    return num.toString(2)
  } else{
    return num.toString(16)
  }
}


console.log(doTest(2), '10')
console.log(doTest(13), 'd')
console.log(doTest(47), '2f')