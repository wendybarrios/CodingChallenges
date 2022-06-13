// Remove all exclamation marks from the end of sentence.


// Tests
// "Hi!" -->  "Hi"
// "Hi!!!" --> "Hi"
// "!Hi"   --> "!Hi"

function remove (string){
    return string.replace(/!+$/, '')
}