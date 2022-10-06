// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.



// Tests
ultimateReverses(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]) --> ["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]
ultimateReverse(
    ["?kn", "ipnr", "utotst", "ra", "tsn", "iksr", "uo", "yer", 
     "ofebta", "eote", "vahu", "oyodpm", "ir", "hsyn", "amwoH"])  -->  ["How", "many", "shrimp", "do", "you", "have", "to", "eat",
     "before", "your", "skin", "starts", "to", "turn", "pink?"]


function ultimateReverses(s){
    let arr = [...s.join('')].reverse()
    return s.map(word => arr.splice(0, word.length).join(''))
} 