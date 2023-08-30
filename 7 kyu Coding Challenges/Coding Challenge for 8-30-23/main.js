// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space"
// "   space WALK   " => "   Space Walk   " 
// Note: you will be provided atleast one word and should take string as input and return string as output.


function dropCap(n) {
    //   lowercase everything
      // split by space
      // loop thu arr -> check length : if l > 2, make first char UpperCase else: lowerC
    //   join
      
      let newWord = n.split(" ").map(el => {
        if(el.length > 2){
          return el[0].toUpperCase() + el.slice(1).toLowerCase()
        } else {
          return el
        }
      })
      console.log(newWord)
      return newWord.join(" ")
      
    }

    // Examples
    console.log(dropCap('Apple Banana'),"Apple Banana");
    console.log(dropCap('Apple'),"Apple");
    console.log(dropCap(''),"")

