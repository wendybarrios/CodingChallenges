// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

// Good luck!


const sumSquareEvenRootOdd = ns => {
    // emptyArr
  //   loop thry ns: if even, push el*el; if odd, push Math.sqrt(el)
  //   take sum of emptyArr 
    
    let emptyArr = []
    for(let i=0; i < ns.length;i++){
      if(ns[i] % 2 === 0){
        emptyArr.push(ns[i]*ns[i])
      } else {
        emptyArr.push(Math.sqrt(ns[i]))
      }
    }
    
    let final = emptyArr.reduce((a,b) => a+b,0)
    return Number(final.toFixed(2))
  };