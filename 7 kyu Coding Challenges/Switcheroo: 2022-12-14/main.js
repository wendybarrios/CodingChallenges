// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


function switcheroo(x){
    // split -> loop: check for a and b -> join
      let newString = x.split('')
    
      for(let i=0; i < newString.length; i++){
        if (newString[i] === "a"){
          newString[i] = "b"
        } else if (newString[i] === "b"){
          newString[i] = "a"
        }
      }
      return newString.join('')
    }