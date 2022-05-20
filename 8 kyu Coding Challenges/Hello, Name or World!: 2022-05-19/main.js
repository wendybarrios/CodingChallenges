// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Tests
/*
hello('alice') --> 'Hello, Alice!'
hello()        --> 'Hello, World!'
hello('')     --> 'Hello, World!'
*/

function hello (name){
    // if else statement
    if(name){
        let lowname = name.toLowerCase()
        let first = "Hello, " + lowname.charAt(0).toUpperCase() + lowname.slice(1) + "!"
        return first
    } else {
        return `Hello, World!`
        
    }
    
}