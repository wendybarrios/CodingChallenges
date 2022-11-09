// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).


function DNAStrand(dna){
    // split -> loop
    //replace A -> T
    //replace T -> A
    //replace C -> G
    // replace G -> C
    let newArr = dna.split('')
    for(let i=0;i < newArr.length; i++){
      if(newArr[i] === 'A'){
        newArr[i] = 'T'
      } else if (newArr[i] === 'T'){
        newArr[i] = 'A'
      } else if (newArr[i] === 'G'){
        newArr[i] = 'C'
      } else if (newArr[i] === 'C'){
        newArr[i] = 'G'
      }
    }
    return newArr.join('')
  
    
  }
  
  
  console.log(DNAStrand("ATTGC") , "TAACG")
  console.log(DNAStrand("GTAT") , "CATA")