// Find the sum of all multiples of n below m.
// n and m are natural numbers (positive integers)
// m is excluded from the multiples


// Tests
sumMul(2,9) --> 20
sumMul(4,-7) --> "INVALID"


    function sumMul(n,m){
        let sum = 0
        if (n <= 0 || m <= 0 ){
            return 'INVALID'
        } else {
        // loop
        for(let i = n; i < m; i = i + n ){
            sum = sum + i
        }
           return sum
        }

        }
