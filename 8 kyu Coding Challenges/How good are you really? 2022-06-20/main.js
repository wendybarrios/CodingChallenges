// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!


// Tests
// betterThanAverage([2, 3], 5 -->  true
//     (betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) --> true

function betterThanAverage (classPoints, yourPoints){
    let averageofPeers = classPoints.reduce ((a, b) => a + b, 0) / classPoints.length
   // if else
       if (yourPoints > averageofPeers){
           return true
       } else {
           return false
       }
   }