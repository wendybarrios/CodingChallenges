// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.


// Tests
noBoringZeros(1450) --> 145
noBoringZeros(960000) --> 96
noBoringZeros(1050) --> 105


function noBoringZeros(n){
    // num to string
    let num = n.toString()
    // remove
    let newNum = num.replace(/0+$/,'')
    // string to num
    return Number(newNum)
  }
