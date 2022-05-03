// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

/*
function find_average(array) {
  // your code here
  return 0;
}
*/

// Tests
/*
console.log(find_average([1,1,1])) --> 1
console.log(find_average([1,2,3])) --> 2
console.log(find_average([1,2,3,4])) --> 2.5

*/


// Solution
function find_average(array) {
    if(array.length > 0){
      return array.reduce((a,b) => a + b, 0) / array.length 
    //   sum of numbers divided by length of array
    } else if( array.length === 0){
      return 0
    }
  }