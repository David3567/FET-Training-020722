
    const word_arr = ['m', 'a', 'd', 'a', 'm'];
    const word_arr_reverse = word_arr.reverse();

function palindrome () {
   
    if (word_arr == word_arr_reverse) {
       return 'These words match'
    } else {
       return 'This pair does not match'
    }
}

