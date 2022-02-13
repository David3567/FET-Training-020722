//1. Write a JavaScript function that reverse a number.
function reverseNum(n) {
    return Math.sign(n) * parseInt(n.toString().split("").reverse().join(""))
}
//console.log(reverseNum(-11123456))

//2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
function isPalidrome(s) {
    return s === s.split("").reverse().join("");
}
//console.log(isPalidrome("asa"))

//3. Write a JavaScript function that generates all combinations of a string. 
function allComb(s) {
    let combinations = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            combinations.push(s.slice(i, j));
        }
    }
    return combinations;
}
//console.log(allComb("dog"));

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function alOrder(s) {
    return s.split().sort().join("");
}
//console.log(alOrder("qwertyuiop"));

//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function capLetter(s) {
    let arr = s.split(" ")
    let r = []
    for (let i = 0; i < arr.length; i++) {
        r.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return r.join(" ")
}
//console.log(capLetter("abs bsa bbb aaa"));

//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function findLongestWord(s) {
    return s.split(" ").sort((a, b) => b.length - a.length)[0]
}
//console.log(findLongestWord('Web Development Tutorial'))

//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowel(s) {
    const vowels = "aeiou"
    let count = 0
    for (i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            count += 1
        }
    }
    return count

}
//console.log(countVowel("The quick brown fox"))
//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function isPrime(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false;
    }
    return n > 1
}
//console.log(isPrime(7))

//9. Write a JavaScript function which accepts an argument and returns the type.
function getType(target) {
    return typeof target
}
// console.log(getType(""))
// console.log(getType(1))
// console.log(getType(false))
// console.log(getType(new Object))
// console.log(getType(undefined))
// console.log(getType(capLetter))

//10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function createIdentityMatrix(n) {

}
//11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function findSecondMaxSecondLowest(a) {
    let sorted = a.sort();
    return "" + sorted[1].toString() + "," + sorted[sorted.length - 2].toString()
}
//console.log(findSecondMaxSecondLowest([1, 2, 3, 4, 5, 6, 7]))

//12. Write a JavaScript function which says whether a number is perfect.
//13. Write a JavaScript function to compute the factors of a positive integer.
//14. Write a JavaScript function to convert an amount to coins.
//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function computeBn(b, n) {
    return Math.pow(b, n)
}
//16. Write a JavaScript function to extract unique characters from a string.
function findUniqueCharFromStr(s) {
    return Array.from(new Set(s)).join("")
}
//console.log(findUniqueCharFromStr("thequickbrownfoxjumpsoverthelazydog"))

//17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
//18. Write a function for searching JavaScript arrays with a binary search.
//19. Write a JavaScript function that returns array elements larger than a number.
//20. Write a JavaScript function that generates a string id (specified length) of random characters.

//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function findOccurance(s, l) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === l) {
            count += 1
        }
    }
    return count
}
//console.log(findOccurance('microsoft.com', 'o'))

//23. Write a JavaScript function to find the first not repeated character.
//24. Write a JavaScript function to apply Bubble Sort algorithm.

//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function findLongestCountry(a) {
    return a.sort((a, b) => b.length - a.length)[0]
}
//console.log(findLongestCountry(["Australia", "Germany", "United States of America"]))

//26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestUniqueString(s) {

}


//27. Write a JavaScript function that returns the longest palindrome in a given string.
function longestPalindromeInString() {

}

//28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function funPar(f) {
    f()
}

//29. Write a JavaScript function to get the function name. 
function getFunName(f) {
    return f.name
}
//console.log(getFunName(findLongestCountry))