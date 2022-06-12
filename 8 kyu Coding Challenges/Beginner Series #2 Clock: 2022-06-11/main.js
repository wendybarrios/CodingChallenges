// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.


// Tests
// past(0,1,1) --> 61000
// past(1,1,1) --> 3661000
// past(0,0,0) --> 0



function past(h, m, s){
    function past(h, m, s){
        let hours = h * 60 * 60
        let minutes = m * 60
        return (hours + minutes + s) * 1000
      }
  }