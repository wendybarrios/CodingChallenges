// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];
// your function should return true as there is at least one developer from each age group.

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.



function isAgeDiverse(list) {
    // thank you for checking out the Coding Meetup kata :)
    // create newArr
    // loop thru list: push ageGroup to newArr
    // check if newArr includes all ageGroups
  let newArr = []
  for(let i=0; i < list.length;i++){
    if(list[i].age >= 13 && list[i].age < 20){
      newArr.push("teens")
    } else if (list[i].age >= 20 && list[i].age < 30){
      newArr.push("twenties")
    } else if (list[i].age >= 30 && list[i].age < 40){
      newArr.push("thirties")
    } else if (list[i].age >= 40 && list[i].age < 50){
      newArr.push("forties")
    } else if (list[i].age >= 50 && list[i].age < 60){
      newArr.push("fifties")
    } else if (list[i].age >= 60 && list[i].age < 70){
      newArr.push("sixties")
    } else if (list[i].age >= 70 && list[i].age < 80){
      newArr.push("seventies")
    } else if (list[i].age >= 80 && list[i].age < 90){
      newArr.push("eighties")
    }else if (list[i].age >= 90 && list[i].age < 100){
      newArr.push("nineties")
    }else if (list[i].age >= 100 ){
      newArr.push("centenarian")
    }
  }

  
    if(newArr.includes("teens") && newArr.includes("twenties") && newArr.includes("thirties") && newArr.includes("forties") && newArr.includes("fifties") && newArr.includes("sixties") && newArr.includes("seventies") && newArr.includes("eighties") && newArr.includes("nineties") && newArr.includes("centenarian")){
      return true
    } else {
      return false
    }
  }
  
  
  console.log(isAgeDiverse([
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
    { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
    { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
  ]), true)