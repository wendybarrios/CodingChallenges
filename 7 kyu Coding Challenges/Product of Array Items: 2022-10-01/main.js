// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.


// Tests
product([5,4,1,3,9]) --> 540
product([-2,6,7,8]) --> -672
product([null]) --> null

function product(values){
    // null values or empty
    if(values === null){
        return null
    } else if (values.length === 0) {
        return null
    } else{
       return values.reduce((a,b) => a * b, 1)
    }
}