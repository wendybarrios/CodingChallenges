// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.



function xor(a, b) {
  
    // TODO: Program Me
    if(a === false && b === false){
      return false
    } else if (a===true && b === false){
      return true
    }else if(a === false && b === true){
        return true
    }else if( a ===true && b ===true){
      return false
    }
  
    
  }