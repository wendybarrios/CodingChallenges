// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.


function digits(n){
    // num -> toString -> split -> find length
    let newArr = n.toString().split('')
    return newArr.length
    
  }
  
  console.log(digits(5) , 1) 
  console.log(digits(12345), 5)
  console.log(digits(9876543210), 10)