// Task

// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :

// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes

// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .

function maxMultiple(divisor, bound){
    // create emptyArr
      // loop thru nums -> which nums are divisible by d
      // find Max.max
      let emptyArr = []
      for(let i=divisor; i <= bound;i++){
        if(i % divisor === 0 ){
          emptyArr.push(i)
        }
      }
      return Math.max(...emptyArr)
      
    }



    // function maxMultiple(divisor, bound) {
    //     return Math.floor(bound / divisor) * divisor;
    //   }