// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.
// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.


// Tests
// slope([19,3,20,3]) --> "0"
// slope([2,7,4,-7]) --> "-7"
// slope([10,50,30,150]) --> "5"


function slope(points){
    // if else
    let numarr = points
        if(numarr[2] - numarr[0] === 0 ){
            return "undefined"
    
        } else {
            let slope = (numarr[3] - numarr[1])/ (numarr[2] - numarr[0])
            return slope.toString()
        }
    }