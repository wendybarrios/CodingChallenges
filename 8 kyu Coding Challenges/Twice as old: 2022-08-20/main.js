// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).


// Tests 
twiceAsOld(36,7) --> 22
twiceAsOld(55,30) --> 5
twiceAsOld(42,21) --> 0


function twiceAsOld(dadYearsOld, sonYearsOld){
    //  multiply sons age by 2 and substract from dads age
     let diff = Math.abs((sonYearsOld * 2) - dadYearsOld)
     return diff
}




