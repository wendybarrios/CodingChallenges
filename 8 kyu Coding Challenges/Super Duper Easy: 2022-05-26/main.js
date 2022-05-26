// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// Tests
// problem(1) --> 56
// problem(5) --> 256
// problem(0) --> 6

function problem(x){
// if else
if(typeof(x) === "number"){
    return (x*50) + 6
} else {
    return "Error"
}
}
