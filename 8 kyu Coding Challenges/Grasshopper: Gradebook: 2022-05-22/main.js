// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
/*
Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
*/

// p: number between 0 and 100, positive
// return letter grade


// Tests
// getGrade(95,90,93) --> 'A'
// getGrade(84,79,85) --> 'B'
// getGrade(75,70,79) --> 'C'


function getGrade(s1, s2, s3){
// get average
     let averagegrade = (s1 + s2 + s3)/ 3
// if else
     if (averagegrade <= 100 && averagegrade >= 90){
         return 'A'
     } else if (averagegrade < 90 && averagegrade >= 80){
        return 'B'
    } else if (averagegrade < 80 && averagegrade >= 70){
        return 'C'
    } else if (averagegrade < 70 && averagegrade >= 60){
        return 'D'
    } else {
        return 'F'
    }
}