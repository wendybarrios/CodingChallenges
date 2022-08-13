// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:
// ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


// p: array, strings
// r: array, strings

// Tests
gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]) --> ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]) --> ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]



function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    // return an array containing all of the strings in the input array except those that match strings in geese
    return birds.filter(item => !geese.includes(item))

  };
