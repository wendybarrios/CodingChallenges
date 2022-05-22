// Given a number n, return the number of positive odd numbers below n, EASY!

// Prep
// p: number
// return number

// Tests
/*
oddCount(15)  -->   7
oddCount(15023) --> 7511
*/

function oddCount (n){
    // Divide by 2 and round down
    return Math.floor(n/2)

}