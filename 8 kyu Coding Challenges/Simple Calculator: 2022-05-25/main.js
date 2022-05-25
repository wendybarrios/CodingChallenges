// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// p: numbers, sign
// returns number or string

// Tests
calculator(1,2,"+") -->  3
calculator(1,2,"-") -->  -1
calculator(3,5,"*") -->  15

function calculator(a, b, sign){
    //( if else
    if(sign === '+' && typeof(a) === 'number' && typeof(b) === 'number'){
        return a + b
    } else if(sign === '-' && typeof(a) === 'number' && typeof(b) === 'number') {
        return a - b
    } else if (sign === '*' && typeof(a) === 'number' && typeof(b) === 'number'){
        return a * b
    } else if (sign === '/' && typeof(a) === 'number' && typeof(b) === 'number'){
        return a / b
    } else {
        return "unknown value"
    }
}

