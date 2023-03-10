// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note

// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// Examples(num, nth --> output)

// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1


var findDigit = function(num, nth){
    //get abs val of num 
  //split num into arr
  // if nth=== 0, return 1
  //if nth > num.length, return 1
  let newNum = Math.abs(num).toString()
  let newArr = newNum.split('')

  
  if (nth <= 0){
    return -1
  } else if (nth > newArr.length){
    return 0
  } else {
    let final = newNum.charAt(newNum.length-nth)
    return Number(final)
  }
  
}