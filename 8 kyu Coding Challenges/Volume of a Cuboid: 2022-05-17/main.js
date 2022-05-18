// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// Tests
/*
getVolumeOfCuboid(1,2,2) --> 4
getVolumeOfCuboid(6.3,2,5) --> 63
*/

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        // multiply all numbers together
      return length * width * height
    }
  }