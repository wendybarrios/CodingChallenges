// This time no story, no theory. The examples below show you how to write function accum:

function accum(s) {
	// split -> loop thru el up to arr.length -> join
  let newArr = s.split('')

  for(i=0; i < newArr.length; i++){
      newArr[i] = newArr[i].toUpperCase() + newArr[i].toLowerCase().repeat(i)
  }
return newArr.join("-")
}

// Test Cases
console.log(accum("abcd"), "A-Bb-Ccc-Dddd" )
console.log(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" )
console.log(accum("cwAt"), "C-Ww-Aaa-Tttt" )