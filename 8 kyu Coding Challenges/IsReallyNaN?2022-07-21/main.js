// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.


// Tests
isReallyNaN(37) === false
isReallyNaN('37') === false
isReallyNaN(NaN) === true

const isReallyNaN = (val) => {
    // // return isNaN(val);  // wasn't working as planned :-(
    // return true || false

    if(val === undefined){
        return false
    } else if ( Number.isNaN(val) === true){
        return true
    } else {
      return false
    }
  };