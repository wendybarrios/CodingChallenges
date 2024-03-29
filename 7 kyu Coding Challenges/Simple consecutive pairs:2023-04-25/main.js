// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.


function pairs(ar){
    //..
   //   check length of ar: if even || if odd
   //   if even: get abs val of each num -> loop through all the nums -> 
     //check if Math.abs(arr[i] - arr[i+1]) == 1
     
     //if odd: do same as even but when looping skip last num
     
     let newArr = ar.map(el => Math.abs(el))
     
     let count = 0
     
     if (ar.length % 2 === 0){
       for(let i=0; i < newArr.length-1;i+=2){
         if(Math.abs(ar[i] - ar[i+1]) == 1){
            count++
         }
       }
     } else {
       for(let i=0; i < newArr.length-2;i+=2){
         if(Math.abs(ar[i] - ar[i+1]) == 1){
           count++
         }
       }
     }
     
     return count
     
   };

// Solution #2
function pairs(ar){

    let otherArr = ar.map(el => Math.abs(el))
    let count = 0
    for(let i=0; i < otherArr.length;i+=2){
       if(Math.abs(arr[i] - arr[i+1]) === 1){
        count++
       }
    }

    return count
   };