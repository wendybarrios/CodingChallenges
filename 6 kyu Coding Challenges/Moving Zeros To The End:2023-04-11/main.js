// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
    let zeros = []
    let final = []
    for(let i=0; i < arr.length;i++){
      if(arr[i] === 0){
        zeros.push(0)
      } else{
        final.push(arr[i])
      }
    }
    
    return final.concat(zeros)
  }


//   Test Cases
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])