// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Tests
index([1, 2, 3, 4],2) --> 9
index([1, 3, 10, 100],3) --> 1000000
index([1, 2],3) --> -1

function index(array, n){
    //your code here
    // condition
    let newArr = []
    for(let i = 0; i < array.length; i++){
       newArr.push(i)
    }

    if (newArr.indexOf(n) !== -1){
      return array[n]**n
    } else {
       return -1
    }
  }