// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).


function solution (str, ending){

    // slice end of str with ending.length
    let newString = str.slice(-ending.length)

    if(ending === newString){
      return true
    } else if(ending === ''){
      return true
    } {
      return false
    }
  }


  console.log(solution("abc", "bc"), true)
  console.log(solution("abc", "d"), false)
