// Your goal is to return multiplication table for number that is always an integer from 1 to 10.


// Tests
multiTable(5) --> '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'


function multiTable(num){
    return `1 * num = ${1 *num} \n2 * num = ${2*num}\n3 * num = ${3 * num }\n4 * num = ${3 * num }\n5 * num = ${5* num }\n6 * num = ${6 * num }\n7 * num = ${7 * num }\n8 * num = ${8 * num }\n9 * num = ${9 * num }\n10 * num = ${10 * num }`

}

function multiTable(number) {
    return `1 * ${number} = ${1*number}
    2 * ${number} = ${2*number}
    3 * ${number} = ${3*number}
    4 * ${number} = ${4*number}
    5 * ${number} = ${5*number}
    6 * ${number} = ${6*number}
    7 * ${number} = ${7*number}
    8 * ${number} = ${8*number}
    9 * ${number} = ${9*number}
    10 * ${number} = ${10*number}`
    }
