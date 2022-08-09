// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.


// Tests
nearestSq(1) --> 1
nearestSq(9999) -->10000
nearestSq(10) --> 9


function nearestSq(n){
    // 1 and 2
    if (n === 1 || n === 2){
     return 1
    } else {
        let num = Math.round(Math.sqrt(n)) * Math.round(Math.sqrt(n))
    return num
    } 
}