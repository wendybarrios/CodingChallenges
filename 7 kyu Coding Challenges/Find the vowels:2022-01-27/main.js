// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES

// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)


function vowelIndices(word){
    //lowercase -> loop -> arr
    let newWord = word.toLowerCase().split('')
    let newArr = []
  
    
    for(let i=0; i < newWord.length; i++){
      
      if(newWord[i] === "a"){
      newArr.push(i+1)
    } else if (newWord[i] === "e"){
      newArr.push(i+1)
    } else if (newWord[i] === "i"){
      newArr.push(i+1)
    }else if(newWord[i] === "o"){
      newArr.push(i+1)
    } else if (newWord[i] === "u"){
      newArr.push(i+1)
    } else if (newWord[i] === "y"){
      newArr.push(i+1)
    }
      }
    
    return newArr
  
  }

