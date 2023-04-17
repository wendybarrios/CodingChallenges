// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){
  
    let newString = str.split('')
    let emptyArr = []
    for(let i=0; i < newString.length;i+=2){
      if(newString[i+1]){
        emptyArr.push(newString[i]+newString[i+1])
      } else{
        emptyArr.push(newString[i] + '_')
      }
    }
    
    return emptyArr
  }


//   Test Cases
console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), [])