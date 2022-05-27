// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// array of words
// return string

// Tests
// well(['bad', 'bad', 'bad']) ---> 'Fail!'
// well(['good', 'bad', 'bad', 'bad', 'bad']) --> 'Publish!'
// well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) --> 'I smell a series!'

function well(x){
let newArr = []

newArr = x.filter(el => el === 'good')
// if else 
if(newArr.length > 2){
    return "I smell a series!"
} else if (newArr.length > 0){
    return 'Publish!'
} else {
    return  'Fail!'
}


}