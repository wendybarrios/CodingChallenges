// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. 


// p: numbers, positive, 
// r: array, postive, whole

// Tests
generateRange(2, 10, 2) --> [2,4,6,8,10]
generateRange(1, 10, 3) --> [1,4,7,10]


function generateRange(min, max, step){
    // create new array
    let newArr = []
    // loop
for(let i = min; i <= max; i+= step) {
        newArr.push(i)
}
return newArr
}