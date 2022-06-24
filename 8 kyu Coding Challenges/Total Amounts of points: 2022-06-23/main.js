// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

// Tests
// points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) -->  30
// points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) -->  10
// points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) -->  15

function points (games){
    //   accumulated points
let totalPoints = 0;
//  loop through the games array to get the scores
for(let i = 0; i < games.length;i++){
     let xScore = Number(games[i].charAt(0))
     let yScore = Number(games[i].charAt(2))

    // if else
   if ( xScore > yScore){
       totalPoints += 3
   } else if (xScore < yScore){
       totalPoints += 0
   } else if (xScore = yScore){
       totalPoints += 1
   }
}
return totalPoints
}