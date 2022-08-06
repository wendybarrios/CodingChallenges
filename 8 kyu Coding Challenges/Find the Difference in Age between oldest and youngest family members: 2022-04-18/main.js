// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].


// Tests
differenceInAges([82, 15, 6, 38, 35]) --> [6, 82, 76]
(differenceInAges([57, 99, 14, 32]) --> [14, 99, 85])


function differenceInAges(ages){
// create new array
let newArr = []

// find min age
let minAge = Math.min(...ages)
newArr.push(minAge)
// find max age
let maxAge = Math.max(...ages)
newArr.push(maxAge)

// find the difference between min and max
let differ = maxAge - minAge
newArr.push(differ)

return newArr
}

