// Given a non-empty array of integers, return the result of multiplying the values together in order. 


// Tests
/*
grow([1, 2, 3]) --> 6
grow([4, 1, 1, 1, 4]) --> 16
strictEqual(grow([2, 2, 2, 2, 2, 2]) --> 64
*/

function grow(x){
    // multiply all numbers together
    return x.reduce((a,b) => a * b)
}