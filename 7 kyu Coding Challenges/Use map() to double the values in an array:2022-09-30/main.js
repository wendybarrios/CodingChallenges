// Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.


// Tests
double([1,2,10,57]) --> [2,4,20,114]
double([1,2,3,4,5]) --> [2,4,6,8,10]
double([71,-548, 12.3, 31415]) --> [142,-1096,24.6,62830]

function double(array){
    // map to double each value
    return array.map(el => el*2)
}