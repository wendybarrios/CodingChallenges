// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.


// Tests
strCount('Hello', 'o') --> 1
strCount('Hello', 'l') --> 2
strCount('', 'z') --> 0 
function strCount (str, letter){
    let newStr = str.split('')
    let result = newStr.filter(el => el === letter)
    return result.length
}
