// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.


// p: array, negative, positive, whole
// r: number

// Tests
sumArray([ ]) --> 0
sumArray([ 3 ]) --> 0
sumArray([ 6, 2, 1, 8, 10 ])   --> 16

function sumArray(array) {
    
    // sort in ascending order
    // remove first and last elements
    // add numbers together
    if (array === null){
        return 0
    } else if (array === undefined) {
      return 0
    }else if (array.length < 3 ){
     return 0
    } else if (array.length >= 3){
      let sortArr = array.sort((a,b) => a - b)
      let newArr = sortArr.slice(1, array.length -1)
      return newArr.reduce((a,b)=> a + b, 0 )
    }
}




function sumArray(array) {
   let newArr = []




}