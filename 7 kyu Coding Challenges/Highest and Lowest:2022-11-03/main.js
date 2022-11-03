// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.



function highAndLow(numbers){
    // split by space -> find  min and max --> string
    let newArr = numbers.split(' ')
    let maxNum = Math.max(...newArr)
    let minNum = Math.min(...newArr)
    return `${maxNum} ${minNum}`
  }

// Test Cases
console.log(highandLow("1 2 3 4 5"), "5 1")
console.log(highandLow("1 2 -3 4 5"), "5 -3")
console.log(highandLow("1 9 3 4 -5"), "9 -5")