// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.


// p: string, number, 
// r: bolean, true, false


// Tests
isPalindrome("anna") --> true
isPalindrome("walter") --> false
isPalindrome(12321) --> true


function isPalindrome(line){
    let newString = String(line)
    let possPali = newString.split('').reverse().join('')
    
    // check if string is palindrome
    if (newString === possPali){
        return true
    } else {
        return false
    }
    }