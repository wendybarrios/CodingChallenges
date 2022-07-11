// Create a method to see whether the string is ALL CAPS.


// Tests
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "C" -> True



String.prototype.isUpperCase = function() {
  return this == this.toUpperCase()
}