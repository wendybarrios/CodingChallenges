// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    //   convert toString, split -> map :abs val -> reduce
    
      let newNum = number.toString()
      let newArr = newNum.split('')
      let finalArr = newArr.filter(el => el !== "-" ).map(el => +el).reduce((a,b) => a+b,0)
    
      return finalArr
    }
    
    
    console.log(sumDigits(10), 1)
    console.log(sumDigits(99), 18);
    console.log(sumDigits(-32), 5);
    