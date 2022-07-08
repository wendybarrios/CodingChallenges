// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.


// Tests
// uniTotal("a") == 97
// uniTotal("aaa") == 291



function uniTotal (string){
    let sum = 0
    // sum all values in a string
    for(let i=0; i < string.length; i++){
        sum = sum + string.charCodeAt(i)
    }
    
      return sum
}

