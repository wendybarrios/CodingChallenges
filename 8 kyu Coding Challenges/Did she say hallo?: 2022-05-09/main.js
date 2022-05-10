/*
Write a simple function to check if the string contains the word hallo in different languages.
These are the languages of the possible people you met the night before:
hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes
you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests
*/

function validateHello(greetings) {
   
  }

// Tests
/*
console.log(validateHello('ahoj')) --> true
console.log(validateHello('meh'))  --> false
console.log(validateHello('hallo')) --> true
*/

// Solution
function validateHello(greetings) {
    return /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings)
   }