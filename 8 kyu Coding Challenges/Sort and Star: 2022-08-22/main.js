// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


// Tests
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) --> 'b***i***t***c***o***i***n'
twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) --> 'a***r***e'



function twoSort(s){
    let finArr = []
    // sort
    let newArr = s.sort()
 // first element
    let firstWord = newArr[0]
// loop
    for (let i = 0; i < firstWord.length; i++){
      finArr.push(firstWord[i] + `***`)
    }
    return finArr.join('').slice(0, -3)
}