// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0.

// Tests
mostFrequentItemCount([3, -1, -1]) --> 2
mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]) --> 5


function mostFrequentItemCount (collection){

   return collection.length ? Math.max(...collection.map(el => collection.filter(num => num == el).length)) : 0

}