// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.




function sumNoDuplicates(numList) {

    let newArr = numList.filter(el => numList.indexOf(el) === numList.lastIndexOf(el))
  return newArr.reduce((a,b) => a+b,0)
  
  }

// Test Cases
  console.log(sumNoDuplicates([1, 1, 2, 2, 3]), 3)
  console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]), 21)