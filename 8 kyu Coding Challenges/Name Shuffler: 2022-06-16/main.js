// Write a function that returns a string in which firstname is swapped with last name.




// Tests
// nameShuffler('john McClane') --> 'McClane john'

function nameShuffler(str){
return str.split(' ').reverse().join(' ')
}

