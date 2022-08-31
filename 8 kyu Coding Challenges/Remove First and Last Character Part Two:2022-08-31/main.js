// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).


// p: string
// r: string

// Tests
array('1,2,3') --> '2'
array('1,2,3,4') --> '2 3'
array('1,2,3,4,5') --> '2 3 4'
array('') --> null


// function array(str){
// let finArr = []
// // split
// let newArr = str.replace(/,/g,'').split('')
// // null
// if(newArr.length < 3){
//     return null
// }
// // remove first and last character
// for(let i = 1; i < newArr.length - 1; i++){
//    finArr.push(i)
// }
// return finArr
// }



function array(str){
    // let newStr = str.replace(/,/g,'')
// null
    if(str.length < 3){
        return null
    } else {
      return str.slice(1, (str.length-1)).replace(/,/g,' ').trim()
    }
}


function array(str){
    if(str.length < 3){
        return null
    }
    str.split(',').slice(1, -1).join(' ')
}


