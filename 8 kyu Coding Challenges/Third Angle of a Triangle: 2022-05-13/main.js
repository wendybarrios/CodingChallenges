/*You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/

function otherAngle(a, b) {
    return 0;
  }

// Tests

/*
console.log(otherAngle(30, 60)) --> 90
console.log(otherAngle(60, 60)) --> 60
console.log(otherAngle(43, 78)) --> 59

*/

// Solution

function otherAngle(a, b) {
    return 180 - (a+b);
  }