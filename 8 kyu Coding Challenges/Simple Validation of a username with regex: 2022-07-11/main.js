// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).


// Tests
// validateUsr('asddsa') --> true
// validateUsr('a') --> false
// validateUsr('Hass') --> false

function validateUsr(username) {
    res =  /^[a-z\d_]{4,16}$/.test(username) 
    if (res === true){
      return true 
    } else {
      return false
    }
  }
