// Write a function that checks if a given string (case insensitive) is a palindrome.


// Tests
// isPalindrome("aba") --> true
// isPalindrome("Abba") --> true
// isPalindrome("Madam") --> true

function isPalindrome (x){
    // split string
    let reverseX = x.split('').reverse().join('').toLowerCase()
    // check condition
    if (reverseX === x.toLowerCase()){
        return true
    } else {
        return false
    }
}