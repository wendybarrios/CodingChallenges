// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.


function minMax(arr){
    // if arr.length === 1 
    // Math.min % Math.max
    
      if (arr.length === 1){
        return [arr[0], arr[0]]
      } else {
        return [Math.min(...arr), Math.max(...arr)]
      }
      
    }
    
    
console.log(minMax([1,2,3,4,5]) , [1,5])
console.log(minMax([2334454,5]) , [5,2334454])
console.log(minMax([1]) , [1,1])