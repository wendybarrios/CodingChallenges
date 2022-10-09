// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.


// Tests
countPositivesSumNegatives([[0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]]) --> [8, -50]
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) --> [10, -65]

function countPositivesSumNegatives(input){
    if (input === [] || input == null){
        return []
    }
    // positive numbers
let positiveArr = []
    // negative numbers
let negativeArr = []
    // loop through original array
for(let i = 0; i < input.length;i++){
    if (input[i]>=0){
        positiveArr.push(input[i])
    } else if (input[i]< 0){
        negativeArr.push(input[i])
    }

}

let sumOfNegatives = negativeArr.reduce((a,b) => a +b,0)
return [positiveArr.length, sumOfNegatives]


}


