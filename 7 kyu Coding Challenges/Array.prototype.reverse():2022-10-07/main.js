// The Array's reverse() method has gone missing! Re-write it, quick-sharp!

// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

// Here's an example:


// var input = [1, 2, 3, 4];
// input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
// input;           // == [4, 3, 2, 1]  // items reordered in the original array


// Tests
[1, 2, 3, 4] --> [4,3,2,1]
["a", "b", "c"] --> ["c", "b", "a"]

Array.prototype.reverse = function() {
    //    duplicate array
      let arrayCopy = [...this]  
    //   loop through original
      for(var i = 0; i<this.length; i++){
         this[i] = arrayCopy.pop();      
      }; 
      return this;
      };