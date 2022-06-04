// In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

// Equation will be the form of ax^2 + bx + c = 0

// Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

// Since there are infinitely many solutions to this problem, we fix a = 1.

// Remember, the roots can be written like (x-x1) * (x-x2) = 0

// p: number, whole
// r: return array

// Tests
quadratic(0,1) -->  [1, -1, 0]
quadratic(1,1) --> [1, -2, 1]
quadratic(-4,-9) --> [1, 13, 36]


function quadratic (x1, x2){

    return [1, -x2 - x1, x1*x2]

}