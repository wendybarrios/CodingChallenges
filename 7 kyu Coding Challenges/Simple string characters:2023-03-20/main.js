// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.



function solve(s){
   //   replace upp w "" -> filter el !== "" -> count length
   let newUpper = s.replace(/[A-Z]/g," ").split('').filter(el => el == " ").length
   let lower = s.replace(/[a-z]/g," ").split('').filter(el => el == " ").length
   let num = s.replace(/\d/g," ").split('').filter(el => el == " ").length
   let special = s.replace(/[^A-Za-z0-9]/g," ").split("").filter(el => el == " ").length
   console.log(newUpper)
   return [newUpper,lower,num,special]
   }

//    Test Cases
console.log(solve("aAbBcC"),[3,3,0,0])
console.log(solve("Codewars@codewars123.com"),[1,18,3,2])