// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.


function points (games){
      //   accumulated points
  let totalPointsForX = 0
  let totalPointsForY = 0
  //  loop through the games array to get the scores
  for(let i = 0; i < games.length;i++){
       let xScore = Number(games[i].charAt(0))
       let yScore = Number(games[i].charAt(2))
      // compare scores
     if ( xScore > yScore){
         totalPointsForX += 3
     } else if (xScore < yScore){
         totalPointsForY += 0
     } else if (xScore = yScore){
         totalPointsForX += 1
         totalPointsForY += 1
     } else if (xScore== 0 && yScore == 0){
       totalPointsForX += 1
     }
  
  }
    return totalPointsForX
  }