// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    
  if (begin > end){
    return 0
  }
    
  let count = 0
  for(let i=begin; i <= end; i+=step){
  count = count + i
  }
  return count
   
  };


console.log(sequenceSum(2, 6, 2), 12)
console.log(sequenceSum(1, 5, 1), 15)
console.log(sequenceSum(1, 5, 3), 5)  