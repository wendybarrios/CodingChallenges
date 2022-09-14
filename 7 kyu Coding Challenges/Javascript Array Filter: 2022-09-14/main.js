// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.


// Tests
getEvenNumbers([1,2,3,6,8,10]) --> [2,6,8,10]
getEvenNumbers([1,2]) --> [2]
getEvenNumbers([12, 14, 15]) --> [12,14]

function getEvenNumbers(numbersArr){
    return numbersArr.filter((el) => el % 2 === 0)
}

