// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task

// Fix the bug so we can all go home early.


// Tests
replaceDots("one.two.three") --> "one-two-three"



var replaceDots = function(str) {
    return str.replace(/[.]/g,'-');
  }
