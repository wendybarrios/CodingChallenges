// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

// Tests
buildString('Cheese','Milk','Chocolate') --> 'I like Cheese, Milk, Chocolate!', 'Return the correct String'
buildString('Cheese','Milk') --> 'I like Cheese, Milk!'
buildString('Chocolate'), 'I like Chocolate!' --> 'Return the correct String'

function buildString(template){
    let newVal = [...template]
    let finVal = newVal.join(',')
    return `I like ${finVal}!`;
  }

