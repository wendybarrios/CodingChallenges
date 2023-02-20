// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces


function sortMyString(S){
    // split -> loop thru the arr and push to evenArr or oddArr
    // return string
    let evenArr = []
    let oddArr = []
    let newArr = S.split('')
    for(let i=0; i < newArr.length;i++){
      if(i%2===0){
        evenArr.push(newArr[i])
      } else {
        oddArr.push(newArr[i])
      }
    }
  
    return evenArr.join('') + " " + oddArr.join('')
   
  
  }


console.log(sortMyString("CodeWars"), "CdWr oeas")
console.log(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER")