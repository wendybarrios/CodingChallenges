// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.


// Tests
areaOrPerimeter(4 , 4) --> 16
areaOrPerimeter(6 , 10) --> 32

const areaOrPerimeter = function(l , w) {
//    if square
      if (l === w){
          return l * w
      } else {
          // if rectangle
          return l + l + w + w
      }
  };