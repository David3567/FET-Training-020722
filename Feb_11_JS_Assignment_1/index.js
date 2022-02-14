/* 
1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223 
*/
var reverse = function (x) {
  var maxInteger = Math.pow(2, 31) - 1;
  var minInteger = (-(Math.pow(2, 31)));
  const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
  return (reversed <= maxInteger && reversed >= minInteger) ? reversed : 0;
}
console.log(reverse(12345));

/*
2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run.
*/
var palindrome = function (s) {
  let x = s;
  x.split("").reverse().join("");
  return (x == s ? 1 : 0);
}
console.log(palindrome('nurses run'));

/*
3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g 
*/
var combinations = (s) => {
  let combo = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      combo.push(s.slice(i, j));
    }
  }
  return combo;
}
console.log(combinations('dog'));

/*
4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/
var alphabetical = (s) => {
  return (s.split("").sort().join(''));
}
console.log(alphabetical('webmaster'));

/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox '
*/
var upperCase = (s) => {
  let arr = s.split(" ");
  let ret = [];
  arr.forEach(str => {
    ret.push(str.charAt(0).toUpperCase() + str.slice(1));
  });
  return ret.join(' ').toString();
}
console.log(upperCase('the quick brown fox'));

/*
6. Write a JavaScript function that accepts a string as a parameter and find the longest word
within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'
*/
var longestString = (s) => {
  let arr = s.split(' ');
  arr.sort(
    function (a, b) {
      return b.length - a.length;
    }
  )
  return arr[0].toString();
}
console.log(longestString('Shikamaru Naruto Sasuke'));

/*
7. Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5
*/
var checkVowels = (s) => {
  let count = 0;
  let arr = ['a', 'e', 'i', 'o', 'u']
  s.split('').forEach(letter => {
    if (arr.includes(letter)) count++;
  });
  return count;
}
console.log(checkVowels('The quick brown fox'));

/*
8. Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/
var checkPrime = (n) => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if (n % i === 0) return false;
  return n > 1;
}

console.log(checkPrime(11));

/*
9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns:
 object, boolean, function, number, string, and undefined.
*/
var whatType = (a) => {
  return typeof a;
}
let arr = [];
console.log(whatType(arr));
console.log(whatType(true));
console.log(whatType(checkPrime));
console.log(whatType(69));
console.log(whatType('hello'));
console.log(whatType());

/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. */
var identityMatrix = (n) => {
  var i, j;
  for (i = 0; i < n; i++) {
    arr[i] = [];
    for (j = 0; j < n; j++) {
      if (i == j) console.log('1');
      else console.log('0');
    }
    console.log('---------');
  }
  return arr;
}
identityMatrix(4);

/*                 
11. Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4 
*/
var secondLowestAndGreatest = (arr) => {
  return arr.sort()[1].toString() + ',' + arr.sort()[arr.length - 2].toString();
}
console.log(secondLowestAndGreatest([5, 4, 3, 2, 1]));

/*
12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
+ 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
perfect numbers 496 and 8128.
*/
var perfectNumber = (n) => {
  var temp = 0, i = 1;
  for (i; i <= n / 2; i++) if (n % i === 0) temp += i;
  return temp == n && temp !== 0 ? 'Perfect' : 'Not perfect';
}
console.log(perfectNumber(28));


/* 13. Write a JavaScript function to compute the factors of a positive integer. */
var factors = (n) => {
  let num_factors = [], i;
  for (i = 1; i < n; i++) {
    if (n % i === 0) {
      num_factors.push(i);
    }
  }
  num_factors.push(n);
  return num_factors;
}
console.log(factors(17));
/*
14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1
*/
var toCoins = (n) => {
  //let coins = [25, 10, 5, 2, 1];
  let arr = [];
  while (n != 0) {
    if (n - 25 >= 0) {
      arr.push(25);
      n -= 25;
    } else if (n - 10 >= 0) {
      arr.push(10);
      n -= 10;
    } else if (n - 5 >= 0) {
      arr.push(5);
      n -= 5;
    } else if (n - 2 >= 0) {
      arr.push(2);
      n -= 2;
    } else if (n - 1 >= 0) {
      arr.push(1);
      n--;
    }
  }
  return arr;
}
console.log(toCoins(46));

/*
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
bases. Accept b and n from the user and display the result. 
*/
var baseExponent = (b, n) => {
  let res = b;
  for (let i = 1; i < n; i++) {
    res *= b;
  }
  return res;
}
console.log(baseExponent(2, 5));

/*
16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"
*/
var uniqueChar = (s) => {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (!arr.includes(s.charAt(i))) arr.push(s.charAt(i));
  }
  return arr.join('');
}
console.log(uniqueChar('thequickbrownfoxjumpsoverthelazydog'));

/*
17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
*/
var numOccur = (s) => {
  let arr = {};
  for (let i = 0; i < s.length; i++) {
    if (isNaN(arr[s.charAt(i)])) arr[s.charAt(i)] = 1;
    else arr[s.charAt(i)]++;
  }
  return arr;
}
console.log(numOccur('hannah montana'));
/*
18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
the desired value.
*/
var binarySearch = (arr, n) => {
  let pos = Math.floor(arr.length / 2);

  if (arr[pos] === n) return pos;
  if (arr.length === 1) return null;
  if (arr[pos] < n) {
    let right = arr.slice(pos + 1);
    let res = binarySearch(right, n);
    if (res === null) return null;
    return pos + 1 + res;
  }
  if (arr[pos] > n) {
    let left = arr.slice(0, pos);
    return binarySearch(left, n);
  }
}
let tree = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(binarySearch(tree, 6));

/* 19. Write a JavaScript function that returns array elements larger than a number. */
var bigger = (n) => {
  return function (val, i, arr) {
    return (val >= n);
  }
}
console.log([11, 45, 4, 31, 64, 10].filter(bigger(10)));

/*
20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample   character   list:
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/
var randomChar = (n) => {
  var res = "";
  var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < n; i++) {
    res += list.charAt(Math.floor(Math.random() * list.length));
  }
  return res;
}
console.log(randomChar(8));

/*
21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]
*/
var subset = (arr, n) => {
  let set = [], temp = [];
}

console.log(subset([1, 2, 3], 2));
/*
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' 
Expected output: 3 
*/
var letter_count = (s, l) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === l) count++;
  }
  return count;
}
console.log(letter_count('microsoft.com', 'o'));

/*
23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' 
*/
var nonRepeat = (s) => {
  for (let i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (s.indexOf(c) == i && s.indexOf(c, i + 1) == -1) return c;
  }
  return null;
}

console.log(nonRepeat('abacddbec'));

/*
24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/
var bubbleSortDesc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      };
    }
  }
  return arr;

}
console.log(bubbleSortDesc([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/*
25. Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/
var longestCountry = (arr) => {
  return arr.reduce(function (longest, country) {
    return longest.length > country.length ? longest : country;
  });
}

console.log(longestCountry(["Australia", "Germany", "United States of America"]))

/*
26. Write a JavaScript function to find longest substring in a given a string without repeating
characters. 
*/
var longestSubstring = (s) => {
  const map = {}; // keeps track most recent index of each letter
  var left = 0; // keeps track of starting index of current substring

  return s.split('').reduce((max, v, i) => {
    // 
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
}

console.log(longestSubstring("google.com"));

/*
27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
given string that is also a palindrome. For example, the longest palindromic substring of
"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
example, in the string "abracadabra", there is no palindromic substring with length greater than
three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all
substrings that are themselves palindromes and cannot be extended to larger palindromic
substrings) rather than returning only one substring or returning the maximum length of a
palindromic substring.
*/
var longestPalindrome = (s) => {
  
}

/* 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. */
function func1(id, callback) {
  return callback();
}

function helloWorld() {
  return "Hello World";
}

console.log(func1(1, helloWorld));

/* 29. Write a JavaScript function to get the function name. */
function funcName() {
  return arguments.callee.name;
}
console.log(funcName());