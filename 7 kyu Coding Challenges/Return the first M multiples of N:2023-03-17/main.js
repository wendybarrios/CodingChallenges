// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)
// should return

// [5.0, 10.0, 15.0]


function multiples(m, n){
    // code here
  
    let newArr = []
    let count = 1
    for(let i=0; i < m; i++ ){
      newArr.push(n*count)
      count++
    }
    
  return newArr
  }