// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.


function getSum( a,b ){ 
    //if nums === num
 //   else: sum of all nums --> loop
   let count = 0
   if(a === b){
     return a
   } else if ( a < b) {
     for(let i=a; i<=b;i++){
     count = count + i
     }
     return count
     } else if (b < a){
       for(let i=b; i <=a;i++){
        count = count + i
       }
       return count
     }
 
 }

//  Test Cases
console.log(getSum(1, 0), 1)
console.log(getSum(1, 2), 3 )
console.log(getSum(0, 1), 1 )