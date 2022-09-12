// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.


// Tests
reverse('I am an expert at this') -->'this at expert an am I'
reverse('This is so easy') --> 'easy so is This'
reverse('no one cares') -->'cares one no'

function reverse (string){
    return string.split(' ').reverse().join(' ')
}