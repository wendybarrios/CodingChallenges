/*
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
*/

function sayHello(name) {
    return 'Hello'
  }

// Tests
/*
console.log(sayHello('Mr. Spock'))   --> 'Hello, Mr. Spock'
console.log(sayHello('Captain Kirk')) --> 'Hello, Captain Kirk'
console.log(sayHello('Liutenant Uhura')) --> 'Hello, Liutenant Uhura'
*/



function sayHello(name) {
    return `Hello, ${name}`
  }