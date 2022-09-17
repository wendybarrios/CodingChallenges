// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.



// Tests
toNumberArray(["1.1","2.2","3.3"]) --> [1.1,2.2,3.3]
toNumberArray(["1", "2", "3"]) --> [1, 2, 3]


function toNumberArray(stringArray){
return stringArray.map(el => Number(el))
}