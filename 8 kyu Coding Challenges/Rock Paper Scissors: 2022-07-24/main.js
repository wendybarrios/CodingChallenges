// Let's play! You have to return which player won! In case of a draw return Draw!.


// Tests
rps('rock', 'scissors') --> "Player 1 won!"
rps('rock', 'rock') --> 'Draw!'
rps('scissors', 'rock') --> "Player 2 won!"


const rps = (p1, p2) => {
    // draw
    if ( p1 === p2){
        return 'Draw!'
    } else if (p1=== 'rock' && p2 === 'scissors'){
       return 'Player 1 won!'
    } else if (p1=== 'scissors' && p2 === 'paper'){
        return 'Player 1 won!'
    } else if (p1=== 'paper' && p2 === 'rock'){
        return 'Player 1 won!'
    } else if (p1=== 'scissors' && p2 === 'rock'){
     return 'Player 2 won!'
    } else if(p1=== 'paper' && p2 === 'scissors'){
    return 'Player 2 won!'
    } else if (p1=== 'rock' && p2 === 'paper'){
      return 'Player 2 won!'
    }
 
};
