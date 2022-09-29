// Write a function that combines two arrays by alternatingly taking elements from each array in turn.


// Tests
mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']) --> [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]) --> ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]

function mergeArrays(aArr,bArr){
    let maxLength = Math.max(aArr.length, bArr.length)
    // create newArr
let newArr = []
// loop through array a, push index el to new Arr
    for(let i=0; i < maxLength; i++){
            newArr.push(aArr[i])
            newArr.push(bArr[i]) 
   }
   return newArr.filter(el => el !== undefined)

}
