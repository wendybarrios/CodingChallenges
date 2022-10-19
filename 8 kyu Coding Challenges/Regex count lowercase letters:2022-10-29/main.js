
// Your task is simply to count the total number of lowercase letters in a string.



function lowercaseCount(str){
    // empty array
let newArr = []
    // split str
let otherString = str.split('')
for(let i=0; i < otherString.length;i++){
// check if lowerCase
if (otherString[i] == otherString[i].toLowerCase() && otherString[i] !== otherString[i].toUpperCase()){
  newArr.push(otherString[i])
}
}
return newArr.length
}

console.log(lowercaseCount("abc"), 3)
console.log(lowercaseCount("abcABC123"), 3)
console.log(lowercaseCount(""), 0)