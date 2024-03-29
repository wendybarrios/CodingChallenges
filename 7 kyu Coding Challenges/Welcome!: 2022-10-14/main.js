// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.



function greet(language){
    // create greetings object
      const greetings = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
      }
    
      // loop if language exists
      if(greetings[language] !== undefined){
        return greetings[language]
      } else {
         // undefined 
        return greetings["english"]
      }
      
    }
    
    console.log(greet("english"),"Welcome")
    console.log(greet("dutch"), "Welkom")
    console.log(greet("IP_ADDRESS_INVALID"),"Welcome")