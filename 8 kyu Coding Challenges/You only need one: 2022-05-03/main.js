/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
function check(a, x) {
  // your code here
}
*/

// Tests

/*
console.log(check([66, 101], 66)) --> true
console.log(check([101, 45, 75, 105, 99, 107], 107)) --> true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')) --> true

*/

// Solution
function check(a, x) {
    return a.includes(x)
  }

