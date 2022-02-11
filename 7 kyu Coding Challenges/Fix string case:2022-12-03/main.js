// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){

    //   split -> count for upp & low -> loop if else -> check count
      
      let newWord = s.split('')
      
      let upperCount = 0
      let lowerCount = 0
      
      for(let i=0; i < newWord.length;i++){
        if(newWord[i] === newWord[i].toUpperCase()){
          upperCount = upperCount + 1
        } else if (newWord[i] === newWord[i].toLowerCase()){
          lowerCount = lowerCount + 1
        }
      }
      
      
      if(lowerCount > upperCount){
        return s.toLowerCase()
      } else if (upperCount > lowerCount){
        return s.toUpperCase()
      } else {
        return s.toLowerCase()
      }
    }

