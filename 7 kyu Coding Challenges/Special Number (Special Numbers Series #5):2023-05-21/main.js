// DESCRIPTION:

// Definition

// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .

// Warm-up (Highly recommended)

// Playing With Numbers Series

// Notes

// The number passed will be positive (N > 0) .

// All single-digit numbers within the interval [1:5] are considered as special number.


function specialNumber(n){
    //if num <= 5 -> return Special
    let newNum = n.toString().split('').map(el => +el).filter(el => el > 5)
    if(newNum.length >= 1){
      return "NOT!!"
    } else {
      return "Special!!"
    }
  
  }