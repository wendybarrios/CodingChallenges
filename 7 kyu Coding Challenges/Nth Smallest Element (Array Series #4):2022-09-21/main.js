// Given an array/list [] of integers , Find the Nth smallest element in this array of integers

// Tests
nthSmallest([3,1,2],2) --> 2
1,2,3
nthSmallest([15,20,7,10,4,3],3) --> 7
3,4,7,10,15,20
nthSmallest([-5,-1,-6,-18],4) --> -1
-18,-6,-5,-1
nthSmallest([-102,-16,-1,-2,-367,-9],5) --> -2
-367, -102, -16,-9, -2, -1

function nthSmallest(arr, post){
    // sort
    let newArr = arr.sort((a,b) => a - b)
   return newArr[post-1]
}