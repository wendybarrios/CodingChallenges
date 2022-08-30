// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".


// Tests
getDrinkByProfession("jabrOni") --> "Patron Tequila"
getDrinkByProfession("scHOOl counselor") --> "Anything with Alcohol"
getDrinkByProfession("bike ganG member") --> "Moonshine" 

function getDrinkByProfession(param){
    // all lowercase letters
 let newWord = param.toLowerCase()
//  conditionals
if(newWord === "jabroni" ){
    return "Patron Tequila"
}else if (newWord === "school counselor"){
    return "Anything with Alcohol"
}else if (newWord === "programmer"){
    return "Hipster Craft Beer"
}else if (newWord === "bike gang member"){
    return "Moonshine"
} else if (newWord === "politician"){
    return "Your tax dollars"
} else if (newWord === "rapper"){
    return "Cristal"
} else {
    return "Beer"
}

}