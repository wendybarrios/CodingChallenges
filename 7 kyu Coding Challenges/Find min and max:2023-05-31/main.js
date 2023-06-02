// Implement a function that returns the minimal and the maximal value of a list (in this order).


function getMinMax(arr){
    //Math.min in var
  //   Math.max in var
  //   create Arr
    
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  
  return [min,max]
  };