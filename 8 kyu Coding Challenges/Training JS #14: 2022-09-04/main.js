// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.


// Tests
colorOf(255,0,0) --> "#ff0000"
colorOf(0,111,0) --> "#006f00"
colorOf(1, 2 ,3) --> "#010203"

function colorOf(r,g,b){
    let firstNum = r.toString(16).padStart(2, 0)
    let secondNum = g.toString(16).padStart(2, 0)
    let thirdNum = b.toString(16).padStart(2, 0)
  
   return `#${firstNum}${secondNum}${thirdNum}`
}