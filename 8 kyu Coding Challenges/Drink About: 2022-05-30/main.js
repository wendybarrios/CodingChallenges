// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// p: number
// r: string

//Tests
peopleWithAgeDrink(22)  --> 'drink whisky'
peopleWithAgeDrink(13)  --> 'drink toddy'


function peopleWithAgeDrink(old){
    // if else 
    if(old < 14){
        return 'drink toddy'
    } else if (old < 18){
        return 'drink coke'
    } else if (old < 21){
        return 'drink beer'
    } else if(old >= 21){
        return 'drink whisky'
    }
}