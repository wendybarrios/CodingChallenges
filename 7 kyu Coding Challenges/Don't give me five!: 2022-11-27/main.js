// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!



function dontGiveMeFive(start, end){
//   newArr -> loop: push i -> filter -> check length
  let newArr = []
  
  for (i=start; i <= end; i++){
    newArr.push(i)
  }
  
  return newArr.filter(el => !el.toString().includes(5)).length
}