// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.


// Tests
solve([15,11,10,7,12]) --> [15, 7, 12, 10, 11]
solve([91,75,86,14,82]) --> [91,14,86,75,82]
solve([84,79,76,61,78]) --> [84,61,79,76,78]

function solve(arr){
    let finalArr = []
    // sort
let newArr = arr.sort((a,b) => a - b)
// [7,10,11,12,15]
    // loop and push
for(let i=0;i < newArr.length; i++){
    finalArr.push(newArr[newArr.length -1 - i])
    finalArr.push(newArr[i])

}
return finalArr.slice(0,newArr.length)
}