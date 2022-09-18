// Given a sequence of numbers, find the largest pair sum in the sequence.





// Tests
doTest([10,14,2,23,19]) --> 42
doTest([-100,-29,-24,-19,19]) --> 0
doTest([1,2,3,4,6,-1,2]) --> 10


function largestPairSum(numbers){
    // find max
  let maxNum = Math.max(...numbers)
    // find second largest
  let otherArr = numbers.sort((a,b) => a - b)
   return (maxNum) + otherArr[otherArr.length-2]
}
