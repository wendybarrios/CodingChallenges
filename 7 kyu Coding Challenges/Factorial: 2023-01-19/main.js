// Your task is to write function factorial.


function factorial(n){
    if (n < 2) {
      return 1;
    } else {
      return n*factorial(n-1)
    }
  }

// Test Cases
console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);