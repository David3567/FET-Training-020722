// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223

function reverse(num) {
    const sign = Math.sign(num);
    const numarr = num.toString().split("");
    const reversed = parseFloat(numarr.reverse().join("")) * sign;

    return reversed;
}

const num = 32243;
const result = reverse(num);
console.log(`input: ${num}`);
console.log(result);


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function palindrome(str) {
    const strarr = str.split("");
    const reversed = strarr.reverse().join("");
    console.log(`reversed: ${reversed}`);

    if (str === reversed) {
        return true;
    }else {
        return false;
    }
}

const str = "cheese";
const result = palindrome(str);
console.log(`input: ${str}`);
console.log(result);


// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g

function combination(str) {
    const contarr = [];
    
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            contarr.push(str.slice(i,j));
        }
    }

    return contarr;
}

const str = "dog";
const result = combination(str);
console.log(`input: ${str}`);
console.log(result);


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sortStr(str) {
    const strarr = str.split("")
    const sorted = strarr.sort().join("");

    return sorted;
}

const str = "webmaster";
const result = sortStr(str);
console.log(`input: ${str}`);
console.log(result);


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function capitalize(str) {
    const strarr = str.split(" ");
    const convert = strarr.map(element => 
        element.replace(element.charAt(0), element.charAt(0).toUpperCase())).join(" ");

    return convert;
}

const str = "the quick brown fox";
const result = capitalize(str);
console.log(`input: ${str}`);
console.log(result);


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function longWord(str) {
    const strarr = str.split(" ");
    const length = strarr.map(element => element.length);
    const max = Math.max(...length);
    const word = strarr[length.indexOf(max)];

    return word;
}

const str = "Web Development Tutorial";
const result = longWord(str);
console.log(`input: ${str}`);
console.log(result);


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

function vowelCount(str) {
    let count = 0;
    const vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        const index = vowels.indexOf(str[i].toLowerCase());
        if (index >= 0) {
            count++;
        }
    }

    return count;
}

const str = "The quick brown fox";
const result = vowelCount(str);
console.log(`input : ${str}`);
console.log(result);


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function primeNum(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0)
        return false;
    }

    return true;
}

const num = 13;
const result = primeNum(num);
console.log(`input : ${num}`);
console.log(result);


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function argType (paraem) {
    const arg = typeof(paraem);

    return arg;
}

const paraem = 'cheese';
const result = argType(paraem);
console.log(`input: ${paraem}`);
console.log(result);


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function idenMatrix (n) {
    let row = [];
    
    for (let i = 0; i < n ; i++) {
        let column = [];
        for (let j = 0; j < n ; j++) {
            if (i === j)
            {
                column[j] = 1;
            }else {
                column[j] = 0;
            }
        }
        row[i] = column;
    }
    
    return row;
}

const num = 5;
const result = idenMatrix(num);
console.log(`input: ${num}`);
console.log(result);


// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 

function second (numarr) {
    const sorted = numarr.slice().sort((a,b) => a-b);
    console.log(`sorted: ${sorted}`);
    const max = Math.max(...numarr);
    const secMax = sorted[sorted.indexOf(max) - 1];
    const secMin = sorted[1];

    return `${secMin},${secMax}`;
}

const arr = [1,2,3,25,4,5];
const result = second(arr);
console.log(`input: ${arr}`);
console.log(result);


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function perfectNum(num) {
    let sum = 1;
    
    for (let i = 2; i < Math.sqrt(num); i++){
        if (num % i === 0) {
            sum = sum + i + num/i
        }
    }
    
    if (num === 1) {
        return false;
    }

    return sum === num;
}

const num = 6;
const result = perfectNum(num);
console.log(`input: ${num}`);
console.log(result);


// 13. Write a JavaScript function to compute the factors of a positive integer. 

function factor(num) {
    const numarr = [];

    for (let i = 0; i <= Math.abs(num); i++) {
        if (num % i === 0) {
            numarr.push(i);
        }
    }

    return numarr;
}

const num = 10;
const result = factor(num);
console.log(`input: ${num}`);
console.log(result);


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

function amountToCoins(num,arr) {
    const coins = Array.from(arr);
    const numarr = [];

    if (num >= coins[0]) {
        numarr.push(coins[0]);
        console.log(num -= coins[0]);
        return numarr.concat(amountToCoins(num,coins));
    }else if (num === 0) {
        numarr[0] = 0;
        return numarr;
    }else {
        coins.shift();
        return amountToCoins(num,coins);
    }
}

const amount = 46, coins = [25, 10, 5, 2, 1];
const result = amountToCoins(amount, coins);
console.log(`amount: ${amount} | coins: ${coins}`);
console.log(`change: ${result}`);


// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

function exponentCalc(b, n) {
    const pow = Math.pow(b,n);

    return pow;
}

const base = 5, exponent = 2;
const result = exponentCalc(base, exponent);
console.log(`b: ${base} | n: ${exponent}`);
console.log(result);


// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function removeUnique(str) {
    let unique = "";

    for (let i = 0; i < str.length; i++){
        if (!unique.includes(str.charAt(i))) {
            unique += str.charAt(i);
        }
    }

    return unique;
}

const str = "thequickbrownfoxjumpsoverthelazydog";
const result = removeUnique(str);
console.log(`input: ${str}`);
console.log(result);


// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 

function letterCount(str) {
    const strarr = str.split("");
    const sorted = strarr.sort();
    const count = {};

    for (let i = 0; i < sorted.length; i++){
        count[sorted[i]] = (count[sorted[i]] || 0) + 1;
    }

    return count;
}

const str = "thequickbrownfoxjumpsoverthelazydog";
const result = letterCount(str);
console.log(`input: ${str}`);
console.log(result);


// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binarySearch(arr, num) {
    const sorted = arr.sort();
    let start = 0,
        end = sorted.length-1;
    
    while (start<=end) {
        let mid = Math.floor((start + end)/2);

        if (sorted[mid] === num) {
            return true;
        }else if (sorted[mid] <  num) {
            start = mid + 1;
        }else {
            end = mid - 1;
        }
    }

    return false;
}

const arr = [1,4,6,2,3], num = 4;
const result = binarySearch(arr, num);
console.log(`arr: ${arr} | num: ${num}`);
console.log(result);


// 19. Write a JavaScript function that returns array elements larger than a number.

function compareHigh(arr, num) {
    const container = arr.filter(element => element > num);

    return container;
}

const arr = [1,4,6,7,2,3], num = 4;
const result = compareHigh(arr, num);
console.log(`arr: ${arr} | num: ${num}`);
console.log(result);


// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function randomID(length) {
    let id = "";
    const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++){
        id += list.charAt(Math.floor(Math.random() * list.length));
    }

    return id;
}

const num = 5;
const result = randomID(num);
console.log(`input: ${num}`);
console.log(result);


// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

function fixSubset(arr, num) {
    const sorted = arr.sort();
    const subset = [], fixed = [];

    function calcSub(subset, start, fixed) {

        //console.log(subset);
        if (subset.length === num) {
            fixed.push([...subset]);
            return;
        }

        for (let i = start; i < sorted.length; i++) {
            if (sorted[i + 1] && sorted[i] === sorted[i + 1]) continue;
            subset.push(sorted[i]);
            calcSub(subset, i + 1, fixed);
            subset.pop();
        }
    }

    calcSub(subset, 0, fixed);

    return fixed;
}

const arr = [1, 2, 3], num = 2;
const result = fixSubset(arr, num);
console.log(`arr: ${arr} | length: ${num}`);
console.log(result);


// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

function letterCount2(str, ltr) {
    const strarr = str.toLowerCase().split(""), 
    letter = ltr.toLowerCase();
    let count = 0;

    for (let i = 0; i < strarr.length; i++){
        if (strarr[i] === letter) count++;
    }

    return count;
}

const str = 'microsoft.com', letter = 'o';
const result = letterCount2(str, letter);
console.log(`str: ${str} | letter: ${letter}`);
console.log(result);



// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 

function firstNonRepeat(str) {
    const count = {};

    for (let element of str) {
        count[element] = count[element] + 1 || 1;
        // console.log(count);
    }

    for (let i in count) {
        if (count[i] === 1) {
            return i;
        }
    }

    return false;
}

const str = 'abacddbec';
const result = firstNonRepeat(str);
console.log(`input: ${str}`);
console.log(result);


// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(arr) {
    const sorted = arr.slice();

    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - (1 - i); j++) {
            if (sorted[j] < sorted[j + 1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }

    return `[${sorted}]`;
}

const arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
const result = bubbleSort(arr);
console.log(`input: [${arr}]`);
console.log(result);


// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function longestName (arr) {
    const length = arr.map(
        function(element) {
            const lenCount = element.length;
            return lenCount;
        }
    )
    const maxIndex = length.indexOf(Math.max(...length));
    const longest = arr[maxIndex];

    return longest;
}

const arr = ["Australia", "Germany", "United States of America"];
const result = longestName(arr);
console.log(`input: [${arr}]`);
console.log(result);


// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function display(result) {
    return result;
};

function addition(num1, num2, callback) {
    const add = num1 + num2;
    return callback(add);
}

const num1 = 1, num2 = 2;
console.log(`a: ${num1} | b: ${num2}`);
console.log(addition(num1, num2, display));

// 29. Write a JavaScript function to get the function name. 

function myName() {
    return arguments.callee.name;
}

console.log(myName());