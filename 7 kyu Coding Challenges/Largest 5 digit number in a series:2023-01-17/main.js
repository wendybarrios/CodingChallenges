// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function solution(digits){
    //   create newArr -> Math.max
    // split -> loop -> 
      let emptyArr = []
      
      let newArr = digits.split('')
      for(let i=0; i < newArr.length-4; i++){
        let newNum = newArr[i] + newArr[i+1] + newArr[i+2] + newArr[i+3] + newArr[i+4]
        emptyArr.push(newNum)
      }
      
      return Math.max(...emptyArr)
    }



    console.log(solution('1234567898765'))