// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.

function countWords(str) {
    //   split -> count length
      let newArr = str.split(/\s/).filter(el => el !== '')
      return newArr.length
    }