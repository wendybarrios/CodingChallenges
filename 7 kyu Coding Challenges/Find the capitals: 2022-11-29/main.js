// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


var capitals = function (word) {
    // 	 split -> loop -> push
      let newArr = []
      let newWord = word.split('')
      
    
      for(let i =0; i < newWord.length; i++){
        
        if(newWord[i]=== newWord[i].toUpperCase())
           newArr.push(i)
      }
      
      return newArr
    };