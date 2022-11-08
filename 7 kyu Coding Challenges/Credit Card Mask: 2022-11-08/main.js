// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// 


function maskify(cc) {
    //substring(0, cc.length -4) -> replace all nums with #
    // cc.length === 1 or empty
  if(cc.length === 1){
    return cc
  } else if (cc === ""){
    return ""
  } else {
  let newString = cc.substring(0, cc.length-4).replace(/[A-Za-z0-9]/g, "#") + cc.slice(-4)
  return newString
  }
  
    
  }

console.log(maskify('sthjd0'), '##hjd0')
console.log(maskify("4556364607935616"),     "############5616")
console.log(maskify("1") , "1")
console.log(maskify(""),  "")