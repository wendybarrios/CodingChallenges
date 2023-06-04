// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018

// Task

// Given a year, Find The next happy year or The closest year You'll see your best friend !alt!alt

// Notes

// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000  ≤  y  ≤  9000)



function nextHappyYear(year){
    while(new Set(String((++year)).split('')).size < 4);
    return year
  }