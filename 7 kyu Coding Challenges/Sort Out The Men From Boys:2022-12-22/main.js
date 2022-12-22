// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists .


function menFromBoys(arr){
    //loop thru -> push to evenArr or oddArr -> sort each aArr -> concat
    let newArr = [...new Set(arr)]
    let evenArr = []
    let oddArr = []
    
    for(let i=0; i < newArr.length; i++){
      if(newArr[i] % 2 === 0){
        evenArr.push(newArr[i])
      } else if (newArr[i] % 2 === 1){
        oddArr.push(newArr[i])
      }
    }

   evenArr.sort((a,b) => a-b)
   oddArr.sort((a,b) => b-a)
  
  return evenArr.concat(oddArr)
  }

  console.log(menFromBoys([7,3,14,17]), [14,17,7,3])
console.log(menFromBoys([-32,-39,-35,-41]),  [-32,-35,-39,-41])