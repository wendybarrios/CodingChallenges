// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)


function isIsogram (str){
    // empty string
    // str. lowerCase ( ).split('')
    // newSet
    let firstArr = str.toLowerCase().split('')
    let secondArr = [...new Set(firstArr)]
  
    
    if(str === ''){
      return false
    } else if (firstArr.length === secondArr.length){
      return true
    } else {
      return false
    }
    
  }
  
  console.log(isIsogram("Dermatoglyphics"), true )
  console.log(isIsogram("aba") , false )
  console.log(isIsogram("moOse") , false )