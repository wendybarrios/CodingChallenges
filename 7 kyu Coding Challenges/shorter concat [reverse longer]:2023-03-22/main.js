// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b


function shorter_reverse_longer(a,b){
    //   if a & b same length
    // if a.length < b.length
    //   if a.length > b.length
       let revA = a.split('').reverse().join('')
       let revB = b.split('').reverse().join('')
      if(a.length === b.length){
        return `${b}${revA}${b}`
      } else if (a.length < b.length){
        return `${a}${revB}${a}`
      } else if(a.length > b.length){
        return `${b}${revA}${b}`
      }
    }

// Test Cases
console.log(shorter_reverse_longer("first", "abcde"), "abcdetsrifabcde");
console.log(shorter_reverse_longer("hello", "bau"), "bauollehbau");
console.log(shorter_reverse_longer("fghi", "abcde"), "fghiedcbafghi")