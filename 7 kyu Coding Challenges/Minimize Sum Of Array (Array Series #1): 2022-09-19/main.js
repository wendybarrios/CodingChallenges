// Minimize Sum Of Array (Array Series #1)

// Tests
 minSum([5,4,2,3]) --> 22
 2,3,4,5
 minSum([12,6,10,26,3,24]) --> 342
 3,6,10,12,24,26
 minSum([9,2,8,7,5,4,0,6]) --> 74
 0,2,4,5,6,7,8,9

 function minSum(arr){
    // sort
    let newArr = arr.sort((a,b) => a - b)
    let sum = 0
    for(let i=0; i < newArr.length/2; i++){   
        sum += newArr[i] * newArr[newArr.length-1 - (i)] 
    }
    return sum
 }