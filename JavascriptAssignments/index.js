// Exersize     Function-Name
// 1.           numReverse
// 2.           checkPalindrome
// 3.           generateCombinations
// 4.           sortAscending
// 5.           firstLetterUppperCase
// 6.           longestWord
// 7.           vowelCount
// 8.           isPrime
// 9.           checkType
// 10.          makeMatrix
// 11.          find2ndLowestAndLargest
// 12.          isPerfectNum
// 13.          factorsOf
// 14.          amountToCoins
// 15.          calculateExpo
// 16.          removeUniqueChar
// 17.          repeatedLetters
// 18.          binarySearch
// 19.          largerThan
// 20.          sampleId
// 21.          getAllSubset
// 22.          numberOfOccurences
// 23.          notRepeatedChar
// 24.          bubbleSort
// 25.          longestCountryName
// 26.          longestSubstring
// 27.          longestPalidrome
// 28.          functionPar
// 29.          getFunctionName
// 30.          myReducer


Array.prototype.myReducer = function() {
        let arr = this;
        let callback = arguments[0];
        let initialValue = arguments[1] != undefined? arguments[1]: arr[0];
        let acc = initialValue;

            for (let i = 0; i < arr.length; i++) {
                acc = callback(acc, arr[i], i, arr);
            }

            return acc;
    };

// let arr = [1,2,3];

// let test = arr.myReducer((acc,curr) => acc + curr, 0);

// console.log(test);

//=====================

// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

function numReverse(num) {
    let numString = num.toString();
    let reversedNum = "";

    for (let i=numString.length-1; i>=0; i--) {
        reversedNum = reversedNum + numString[i];
    }

    console.log(parseInt(reversedNum));
    return parseInt(reversedNum);
}

// numReverse(34223);

//=====================

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.


function checkPalindrome(string) {

    let localString = string.split("");
    localString = localString.filter((char) => {
        return char != " "
    });

    for (let i = 0, j = (localString.length - 1); i < (localString.length - 1) / 2; i++, j--) {

        if (localString[i] !== localString[j]) {

            // console.log(`This string is not a palindrome`);
            return false;
        }
    }

    // console.log(`This string is a palindrome`);
    return true;
}

// checkPalindrome("nurses run");

//=====================

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

function generateCombinations(string) {
    let subString = "";

    let expectedOutput = [];

    for (let i = 0; i < string.length; i++) {

        subString = string[i];
        expectedOutput.push(subString);

        for (let j = i + 1; j < string.length; j++) {

            subString = subString + string[j]
            expectedOutput.push(subString);

        }
    }

    return expectedOutput.join(", ");
}

// console.log(generateCombinations("smile"));

//=====================

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sortAscending(userInput) {
    let stringArray = userInput.split("").sort();

    console.log(stringArray.join(""));
    return stringArray.join("");
}

// sortAscending("webmaster");

//=====================

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function firstLetterUppperCase(str) {
    let localString = str.toLowerCase();
    let localArray = localString.split(" ");
    let localArray2 = [];

    localArray2 = localArray.map((word) => word.replace(word.charAt(0),word.charAt(0).toUpperCase()));

    console.log(localArray2.join(" "));
  return localArray2.join(" "); 
}

// firstLetterUppperCase("the quick brown fox");

//=====================

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function longestWord(str) {
    let localString = str.split(" ");
    let longestWord = "";

    localString.forEach((ele) => {
        ele.length > longestWord.length ? longestWord = ele: null
    })

    console.log(longestWord);
}

// longestWord("Web Development Tutorial");

//=====================

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

function vowelCount(userInput) {
    let vowelSet = new Set(['a','e','i','o','u']);

    return userInput.split("")
    .filter((letter) => vowelSet.has(letter))
    .length;
}

// console.log(vowelCount('The quick brown fox'));

//=====================

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {

    for(let i=2; i<num; i++) {
        if(num%i === 0 ) {
            return false;
        }
    }

    return true;
}

// console.log(isPrime(17));

//=====================

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function checkType(input) {
    if(Array.isArray(input)) {
        return "array";
    }

    return typeof input;
}

// console.log(checkType([]));

//=====================

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function makeMatrix(num) {

    let row = [];
    let columns = [];

    for (let i = 0; i < num; i++) {
        row = [];
        for (let j = 0; j < num; j++) {
            if (j === i) {
                row.push("1");
            } else {
                row.push("0");
            }
        }
        columns.push(row.join("  "));
    }

    columns.forEach((ele) => {
        console.log(ele);
    })
}

// makeMatrix(6);

//=====================

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 

function find2ndLowestAndLargest(arr) {
    let localArray = arr.sort((a,b)=> a-b);
    let secondSmallest;
    let secondLargest;

    for(let i=1; i<localArray.length; i++) {
        if(localArray[i] > localArray[0]) {
            secondSmallest = localArray[i];
            break;
        }
    }

    for(let i=localArray.length-2; i>1; i--) {
        if(localArray[i] < localArray[localArray.length-1]) {
            secondLargest = localArray[i];
            break;
        }
    }

    return `${secondSmallest},${secondLargest}`;
}

// console.log(find2ndLowestAndLargest([2,4,6,8,9]));

//=====================

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function isPerfectNum(num) {

    let sumOfPositiveDivisors = 0;

    for (let i =1; i<num; i++) {
        if(num%i === 0) {

            sumOfPositiveDivisors += i;
        }
    }

    if(sumOfPositiveDivisors === num || (sumOfPositiveDivisors+num)/2 === num) {
        console.log(true);
        return true;
    }

    return false;
}

// isPerfectNum(6);

//=====================

// 13. Write a JavaScript function to compute the factors of a positive integer. 

function factorsOf(num) {
    let properPositiveDivisors = [];

    for( let i = 1; i<=num; i++) {
        if(num%i === 0) {
            properPositiveDivisors.push(i);
        }
    }

    console.log(`Factors of ${num} are ${properPositiveDivisors.join(", ")}`);
    return properPositiveDivisors.join(" ");
}

// factorsOf(11);

//=====================

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

function amountToCoins(num) {
    let remainder = num;
    let coinComposition = [];
    let i = 0;
    
    while(remainder>0) {
        if(remainder >= 25) {
            coinComposition.push(25);
            remainder = remainder-25;
        } else if (remainder >= 10) {
            coinComposition.push(10);
            remainder = remainder-10;
        } else if (remainder >= 5) {
            coinComposition.push(5);
            remainder = remainder-5;
        } else if (remainder >= 2) {
            coinComposition.push(2);
            remainder = remainder-2;
        } else if (remainder >= 1) {
            coinComposition.push(1);
            remainder = remainder-1;
        }

    }
    
    console.log(coinComposition.join(", "));
}

// amountToCoins(47);

//=====================

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function calculateExpo(b, n) {
    let result = b;

    if(b === 0) {
        console.error("The base can't be zero");
        return;
    }

    if(n === 0) {
        console.log(1);
        return 1;
    }

    for(let i=1; i<n; i++) {
        result *= b;
    }

    return result;
}

// calculateExpo(4,9);

//=====================

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function removeUniqueChar(str) {
    let localArray = [];
    let charMap = {};
    
        for(let i = 0; i<str.length; i++) {
            if(charMap[str[i]]) {
                charMap[str[i]]++;
            } else {
                charMap[str[i]] = 1;
                localArray.push(str[i]);
            }
        }
        
        console.log(localArray.join(""));
        return localArray.join("");
}

// removeUniqueChar("thequickbrownfoxjumpsoverthelazydog");

//=====================

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 

function repeatedLetters(str) {
    let charMap = {};

    for(let i = 0; i<str.length; i++) {
        if(charMap[str[i]]) {
            charMap[str[i]]++;
        } else {
            charMap[str[i]] = 1;
        }
    }

    console.log(charMap);
    return charMap;
}

// repeatedLetters("spareapdadjfalksdfja");

//=====================

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binarySearch(arr, num) {
    let localArray = arr.slice();
    let left = 0;
    let right = localArray.length-1;
    let mid;
    let j =0;

    if(num<arr[0] || num>arr[right]) {
        throw new Error("Not found - outside range")
    }

    while(left<=right) {

        mid = Math.floor((right+left)/2);

        if (localArray[mid] === num) {
            console.log(mid);
            return mid;
        } else if(num < localArray[mid]) {
            right = mid-1;
        } else if(num > localArray[mid]) {
            left = mid+1;
        }         
    }
    
    throw new Error("Not found");

}

// binarySearch([1,2,3],1.5);

//=====================

// 19. Write a JavaScript function that returns array elements larger than a number. 

function largerThan(arr, n) {
    
    let tempArray = []

    for(let i=0; i<arr.length;i++) {
        if(arr[i]>n) {
            tempArray.push(arr[i]);
        }
    }

    console.log(tempArray);

    console.log(arr.filter((ele)=> {
        {return ele>n;}
    }))
    return arr.filter((ele)=> {
        {return ele>n;}
    });
}

// largerThan([1,2,3,4,5],3);

//=====================

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function sampleId(len) {
    let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let stringId = '';

    while(len >= 0) {

        let randomIndex = Math.floor(Math.random()*list.length);
        stringId += list[randomIndex];

        len--;
    }

    
    return stringId;
}

// sampleId(10);

//=====================

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]


function getAllSubset(arr, size) {

    let subsets = [];
    for (let i = size; i < arr.length; i++) {
        fn(i, arr, [], subsets);
    }
    subsets.push(arr);
    return subsets;
}

function fn(n, src, got, all) {

    if (n === 0) {
        if (got.length > 0) {
            all[all.length] = got;
        }
        return;
    }
    for (let j = 0; j < src.length; j++) {
        fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
    return;
}

// console.log(getAllSubset([1, 2, 3], 2));

//=====================

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

function numberOfOccurences(str,letter) {

    let occurrences = 0;

    for (let i = 0; i<str.length; i++) {
        if(str[i].toLowerCase() === letter.toLowerCase()) {
            occurrences++;
        }
    }

    console.log(occurrences);
    return occurrences;
}

// numberOfOccurences('micorsoft.com', 'o');

//=====================

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 

function notRepeatedChar(str) {
    let charMap = {};

    for(let i = 0; i<str.length; i++) {
        if(charMap[str[i]]) {
            charMap[str[i]]++;
        } else {
            charMap[str[i]] = 1;
        }
    }

    for(let char in charMap) {
        if(charMap[char] === 1) {
            // console.log(char);
            return char;
        }
    }

    console.log("All characters are repeated");
}

// notRepeatedChar("abacddbec");

//=====================

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(arr){
    let swapOccured = true;
    let numHolder = 0;
    let localArray = arr.slice();
    
    while(swapOccured) {
        swapOccured = false;
        for(let i=0; i<localArray.length-1; i++) {
            
            if(localArray[i]>localArray[i+1]) {
                numHolder = localArray.splice(i,1);
                localArray.splice(i+1,0,...numHolder);
                swapOccured = true;
            }
        }
    }

    // console.log(localArray.reverse());
    return localArray.reverse();

}

// bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);



//=====================

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function longestCountryName(arr) {
    let longestCountry = arr[0];

    for(let i =1 ; i<arr.length; i++) {
        if(arr[i].length > longestCountry.length) {
            longestCountry = arr[i];
        }
    }

    // console.log(longestCountry);
    return longestCountry;
}

// longestCountryName(["Australia", "Germany", "United States of America"]);

//=====================

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

// "abcaefgajj"

function longestSubstring(str) {
    let tempSubstring = "";
    let substringHolder = [];

    for (let i = 0; i<str.length; i++) {
        if(!tempSubstring.includes(str[i])) {
            tempSubstring += str[i];
            if(i===str.length-1) {
                substringHolder.push(tempSubstring);    
            }
        } else {
            substringHolder.push(tempSubstring);
            tempSubstring = "";
            i--;
        }
    }

    let longestSub = "";

    for (let i =0; i<substringHolder.length; i++) {
        if(substringHolder[i].length > longestSub.length) {
            longestSub = substringHolder[i];
        }
    }

    console.log(substringHolder, longestSub);
    return longestSub;
}

// longestSubstring("abcaajaefgj");

//=====================

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

//bananas

function longestPalidrome(str){
    let palindromes = []
    
    for(let i = str.length; i>=2; i--) {

        for(let j=0; j+i <=str.length;j++) {
            
            let longestSub = str.substring(j,j+i);

            if(checkPalindrome(longestSub)) {
                    palindromes.push(longestSub);
            }

        }

        if(palindromes.length> 0) {
            console.log(palindromes);
            return palindromes;
        }

    }
    console.log("No palindromes in here")
    return null;

}

// longestPalidrome("bananas");


//=====================

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function functionPar(callback) {

    console.log(callback());
}


// functionPar(()=> "test");

//=====================

// 29. Write a JavaScript function to get the function name.

function getFunctionName(f) {
    console.log(f.name);
}

// getFunctionName(testing);