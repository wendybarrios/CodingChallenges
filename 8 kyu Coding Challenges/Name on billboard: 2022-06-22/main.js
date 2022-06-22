// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// Tests
// billboard("Jeong-Ho Aristotelis") --> 600
// billboard("Abishai Charalampos") -->  570
// billboard("Idwal Augustin") --> 420

function billboard(name, price = 30){

    let newName = name.split('')
    return newName.length / (1 / price)

}