
// Given the following input array:

// var list1 = [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];
// write a function that adds the username property to each object in the input array:

// [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
//     username: 'emilyn1990' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
//     username: 'nore2000' }
// ]
// The value of the username property is composed by concatenating:

// firstName in lower-case;
// first letter of the lastName in lower-case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.







function addUsername(list) {
    // thank you for checking out the Coding Meetup kata :)
    
  //   loop thru arr
  // add username property each index: firstName.toLowercase() + lastName.replace(".", "") + 2020-age
  
    for(let i=0; i < list.length;i++){
      let currentYear = new Date().getFullYear()
      let birthYear = currentYear - list[i].age
      let userName = `${list[i].firstName.toLowerCase()}${list[i].lastName.replace(".", "").toLowerCase()}${birthYear}`
      list[i].username = userName
    }
    
    return list
  }