// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

function reverseNumber(n){

    let checkZero = n.toString().split('')
    if(n===0){
      return 0
    } else if (n < 0){
      let newNum = Math.abs(n).toString().split('').reverse().join('')
      return Number(-newNum)
    } else if (checkZero[checkZero.length-1] === 0){
      let newString = n.toString().replace(/'0'/g, "")
      return newString
    } else {
      return Number(n.toString().split('').reverse().join(''))
    }
    
  }



console.log(reverseNumber(123), 321)
console.log(reverseNumber(-456), -654)
console.log(reverseNumber(1000), 1)