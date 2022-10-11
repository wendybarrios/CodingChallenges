// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.


// Tests
toBinary(1) --> 1
toBinary(5) --> 101
toBinary(11) --> 1011 


function toBinary (n){
 return Number(n.toString(2))
}

