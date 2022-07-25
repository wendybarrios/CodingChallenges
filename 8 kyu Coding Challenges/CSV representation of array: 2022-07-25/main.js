// Create a function that returns the CSV representation of a two-dimensional numeric array.


// Tests
toCsvText([
    [ 5,55,5,5,55 ],
    [ 6,6,66,23,24 ],
    [ 666,31,66,33,7 ]
   ] ) -->  '5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7'

   toCsvText([
    [ -25, 21, 2, -33, 48 ],
    [ 30,31,-32,33,-34 ]
   ] ) --> '-25,21,2,-33,48\n30,31,-32,33,-34'


function toCsvText (array){
  return array.join('\n')

}