// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 



function reverseString(str){
    //return s/r/j
    //return str.split('').reverse().join('')
    //split -> unshift -> join
    let finalWord = []
    let newArr = str.split('')
    for(let i=0; i < newArr.length; i++){
      finalWord.unshift(newArr[i])
    }
    return finalWord.join('')
  }

//   function reverseString(str){
//     //return s/r/j
//     //return str.split('').reverse().join('')
//     //leon -> noel - empty str -> loop add each char
//     let reverseStr = ""
//     for(let char of str){
//       reverseStr = char + reverseStr
//     }
//     return reverseStr
//   }
  
  
  console.log(reverseString('bob'), 'bob')
  console.log(reverseString('john'), 'nhoj')
  console.log(reverseString('sarah'), 'haras')