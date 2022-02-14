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
    return [...Array(n)].map((e, i, a) => a.map(e => +!i--));
}
// console.log(createIdentityMatrix(11))

//11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function findSecondMaxSecondLowest(a) {
    let sorted = a.sort();
    return "" + sorted[1].toString() + "," + sorted[sorted.length - 2].toString()
}
//console.log(findSecondMaxSecondLowest([1, 2, 3, 4, 5, 6, 7]))

//12. Write a JavaScript function which says whether a number is perfect.
function isPerfect(n) {
    var temp = 0;
    for (var i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            temp += i;
        }
    }
    return temp === n && temp !== 0
}
//console.log(isPerfect(27))

//13. Write a JavaScript function to compute the factors of a positive integer.
function findFactorsInPosInt(n) {
    var num_factors = [], i;

    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
        if (n % i === 0) {
            num_factors.push(i);
            if (n / i !== i)
                num_factors.push(n / i);
        }
    }
    num_factors.sort((x, y) => x - y);
    return num_factors;
}
// console.log(findFactorsInPosInt(15))

//14. Write a JavaScript function to convert an amount to coins.
function findAmountOfCoins(amount, coins) {
    if (amount === 0) {
        return [];
    }
    else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(findAmountOfCoins(left, coins));
        }
        else {
            coins.shift();
            return findAmountOfCoins(amount, coins);
        }
    }
}
// console.log(findAmountOfCoins(111, [25, 10, 5, 2, 1]))

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
function findOccuranceInString(s) {
    let hashMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (hashMap.has(s[i])) {
            hashMap.set(s[i], hashMap.get(s[i]) + 1);
        } else {
            hashMap.set(s[i], 1);
        }

    }
    return hashMap
}
//console.log(findOccuranceInString("abaacccfdff"))

//18. Write a function for searching JavaScript arrays with a binary search.
function binarySearch(a, n) {
    let start = 0, end = a.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (a[mid] === n) {
            return mid;
        } else if (a[mid] < n) {
            start = mid + 1
        } else {
            end = mid - 1
        }

    }
    return -1
}
// console.log(binarySearch([1,2,3,4,5,6,7],8))
// console.log(binarySearch([1,2,3,4,5,6,7],7))

//19. Write a JavaScript function that returns array elements larger than a number.
function largerThanANumber(a, n) {
    let sorted = a.sort();
    let retVal = binarySearch(sorted, n);
    if (retVal === -1) {
        return []
    } else {
        return sorted.slice(retVal + 1)
    }
}
// console.log(largerThanANumber([1, 2, 3, 4, 5, 6, 7], 3))

//20. Write a JavaScript function that generates a string id (specified length) of random characters.
function generateRandChars(n) {
    const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let retVal = ""
    for (let i = 0; i < n; i++) {
        retVal += charList[Math.floor(Math.random() * charList.length)]
    }
    return retVal

}
// console.log(generateRandChars(11))

//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
function getAllPossibleSubset(a, l) {

}

// console.log(getAllPossibleSubset([1, 2, 3], 2));
//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function findOccurance(s, c) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            count += 1
        }
    }
    return count
}
//console.log(findOccurance('microsoft.com', 'o'))

//23. Write a JavaScript function to find the first not repeated character.
function findFirstNonRepeatChar(s) {
    let hashMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (hashMap.has(s[i])) {
            hashMap.set(s[i], hashMap.get(s[i]) + 1);
        } else {
            hashMap.set(s[i], 1);
        }

    }
    for (let [key, value] of hashMap.entries()) {
        if (value === 1) {
            return key;
        }
    }
    return null
}
//console.log(findFirstNonRepeatChar("aeaabccccddddddf"))

//24. Write a JavaScript function to apply Bubble Sort algorithm.

function bubbleSort(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < (a.length - i - 1); j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp
            }
        }
    }
    // Print the sorted array
    console.log(a);
}
// console.log(bubbleSort([1, 3, 2, 4, 5, 6, 0, 9]))

//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function findLongestCountry(a) {
    return a.sort((a, b) => b.length - a.length)[0]
}
//console.log(findLongestCountry(["Australia", "Germany", "United States of America"]))

//26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestUniqueString(s) {

}


//27. Write a JavaScript function that returns the longest palindrome in a given string.
function longestPalindromeInString(s) {

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