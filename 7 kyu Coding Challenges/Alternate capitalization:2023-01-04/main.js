// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!


function capitalize(s){
    //   two newArr: evenArr and OddArr
    //   evenArr : s -> split -> loop: cap even 
    //   OddArr: loop through evenArr and do opposite
      
    let evenArr = []
    let oddArr = []
    
    let newS = s.split('')
    for(let i=0; i < newS.length; i++){
      if(i % 2 === 0){
        evenArr.push(newS[i].toUpperCase())
      } else{
        evenArr.push(newS[i].toLowerCase())
      }
    }
      
    for(let i=0; i < evenArr.length; i++){
      if (evenArr[i] === evenArr[i].toUpperCase() ){
      oddArr.push(evenArr[i].toLowerCase())
      } else {
        oddArr.push(evenArr[i].toUpperCase())
      }
    }
    
      
      
    return [evenArr.join(''), oddArr.join('')]
    };
