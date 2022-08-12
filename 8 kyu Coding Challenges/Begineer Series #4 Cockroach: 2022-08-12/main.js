// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).


// Tests
cockroachSpeed(1.08) --> 30
cockroachSpeed(1.09) --> 30
cockroachSpeed(0) --> 0


function cockroachSpeed (s){
// convert km to cm
    return  Math.floor(s * 27.7778)
}