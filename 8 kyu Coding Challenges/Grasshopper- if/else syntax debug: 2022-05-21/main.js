// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

// prep
// p: whole number
// return true or false

// function checkAlive (health) {
//     if () {
//       health < 0
//       return false
//     } else () {
//       return true
//     }
//   }

// Tests 

/*
checkAlive(5) -->  true
checkAlive(0) -->  false
*/

function checkAlive (health) {
    // if else statement
    if (health < 0){
      return false
    } else if (health > 0){
      return true
    } else if (health == false){
        return false
    }
  }