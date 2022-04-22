// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// p: number, whole
// return number

// Tests
// mango(3, 3) --> 6
// mango(9, 5) --> 30



function mango(quantity, price){
return price * (quantity - Math.floor(quantity/ 3))

}