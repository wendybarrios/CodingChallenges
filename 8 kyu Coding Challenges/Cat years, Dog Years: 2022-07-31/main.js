// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// Tests
humanYearsCatYearsDogYears(2) --> [2,24,24]
humanYearsCatYearsDogYears(10) --> [10,56,64]
humanYearsCatYearsDogYears(1) --> [1,15,15]


let humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears === 1){
        catYears = 15
        dogYears = 15
    } else if (humanYears === 2){
        catYears = 24
        dogYears = 24
    } else if (humanYears > 2){
        catYears = 24 + (humanYears -2)*4
        dogYears = 24 + (humanYears -2)*5
    }
  
    return [humanYears,catYears,dogYears];
  }
  
  