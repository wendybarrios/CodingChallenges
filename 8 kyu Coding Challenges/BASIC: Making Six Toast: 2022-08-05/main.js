// You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.

// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.


// Tests

sixToast(6) --> 0
sixToast(17) --> 11
sixToast(3) --> 3

function sixToast(num){

    // less than or equal to 6
     if ( num <= 6 ){
        return 6 - num
     } else {
         //  greater than 6
         return num - 6
     }

}
