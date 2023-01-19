// Your task is to write function factorial.


function factorial(n){
    if (n < 2) {
      return 1;
    } else {
      return n*factorial(n-1)
    }
  }