// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.



function cubeOdd(arr) {
    let emptyArr = []
    
  for(let i=0; i < arr.length;i++){
    if(typeof arr[i] !== "number" ){
      return undefined
    }
  }
    
  for(let i=0; i < arr.length;i++){
    if(arr[i] % 2 !== 0){
      emptyArr.push(Math.pow(arr[i],3))
    }
  }
    return emptyArr.reduce((a,b) => a + b)
  }