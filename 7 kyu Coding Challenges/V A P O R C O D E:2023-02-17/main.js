
// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.






function vaporcode(string){
    // string -> toUpperCase()
      // split(' ').join('')
      // split again w ('').join(' ')
    
      let newString = string.toUpperCase()
      return newString.split(' ').join('').split('').join('  ')
      
    }