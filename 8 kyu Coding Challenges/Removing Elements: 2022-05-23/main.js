// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


// Tests
// removeEveryOther(['Hello', 'Goodbye', 'Hello Again']) --> ['Hello', 'Hello Again']
// removeEveryOther([['Goodbye'], {'Great': 'Job'}]) --> [['Goodbye']]


function removeEveryOther(arr){
    let newarr = []
        for(let i=0; i < arr.length; i = i+2){
               newarr.push(arr[i])
        }
        return newarr
    

}

