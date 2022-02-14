//Javascript Assignment

//question 1: Write a JavaScript function that reverse a number. 
function reverseNumber(x) {

    x = x + "";
    return x.split("").reverse().join("");
}

//question 2: Write a JavaScript function that checks whether a passed string is palindrome or not?
function palindrome(str) {

    str = str.replace(/[\W_]/g, "");

    for (let i = 0; i < str.length / 2 - 1; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

//question 3: Write a JavaScript function that generates all combinations of a string
function combination(str) {

    let combStr = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            combStr.push(str.slice(i, j));
        }
    }

    return combStr;
}

//question 4: Write a JavaScript function that returns a passed string with letters in alphabetical order.
function order(str) {

    let temStr = str.replace(/[\W_]/g, "").split("");
    str = temStr.sort().join("");

    return str;
}

//question 5: Write a JavaScript function that accepts a string as a parameter and converts the first letter of
function capFirstLetter(str) {

    let temStr = str.split(" ");

    for (let i = 0; i < temStr.length; i++) {
        temStr[i] = temStr[i][0].toUpperCase() + temStr[i].slice(1);
    }

    str = temStr.join(" ");
    return str;
}

//question 6: Write a JavaScript function that accepts a string as a parameter and find the longest word
function longestWord(str) {

    let temStr = str.split(" ");

    let longest = "";
    for (let i = 0; i < temStr.length; i++) {
        if (temStr[i].length > longest.length) {
            longest = temStr[i];
        }
    }

    return longest;
}

//question 7:Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowelsCheck(str) {

    let vowel = ["a", "o", "e", "i", "u"];
    let temStr = str.split("");
    let counter = 0;

    for (let i = 0; i < temStr.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (temStr[i] === vowel[j]) {
                counter++;
            }
        }
    }

    return counter;
}

//question 8: Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function primeNumber(num) {


    if (num > 1) {
        let check = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                check = false;
            }
        }

        if (check === true) {
            console.log(num + " is a prime number");
        }
        else {
            console.log(num + " is not a prime number");
        }
    }
    else if (num === 1) {
        console.log("1 is not a prime number");
    }
    else {
        console.log("prime nubmer must greater than 1");
    }

}

//question 9: Write a JavaScript function which accepts an argument and returns the type. 
function checkType(target){
    return typeof(target);
}

//question 10: Write a JavaScript function which returns the n rows by n columns identity matrix
function matrix(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if (i === j) {
                console.log(" 1 ");
            }
            else {
                console.log(" 0 ");
            }
        }
        console.log('-------------');
    }
}

//question 11: Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function sortSecond(arr) {
    arr = arr.sort((a, b) => a - b);

    return [arr[1], arr[arr.length - 2]];
}

//question 12: Write a JavaScript function which says whether a number is perfect
function perfectNum(num) {
    let arr = [];
    let sqrtNum = Math.sqrt(num);

    for (let i = 1; i <= sqrtNum; i++) {
        if (num % i === 0) {
            arr.push(i);
            if (num / i !== i) {
                arr.push(num / i);
            }
        }
    }

    arr.sort((x, y) => x - y);

    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i];
    }

    if (sum === num) {
        return true;
    }
    else {
        return false;
    }
}

//question 13: Write a JavaScript function to compute the factors of a positive integer. 
function factors(num) {
    let arr = [];
    let sqrtNum = Math.sqrt(num);

    for (let i = 1; i <= sqrtNum; i++) {
        if (num % i === 0) {
            arr.push(i);
            if (num / i !== i) {
                arr.push(num / i);
            }
        }
    }

    arr.sort((x, y) => x - y);

    return arr;
}

//question 14: Write a JavaScript function to convert an amount to coins. 
function amountTocoins(amount, arr) {
    let result = [];
    if (amount > 0) {
        for (let i = 0; i < arr.length; i++) {
            while (amount >= arr[i]) {
                amount = amount - arr[i];
                result.push(arr[i]);

            }
        }
    }
    else {
        return [];
    }

    return result;

}

//question 15: Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function value(b, n) {

    //let result = Math.pow(b, n);

    let result = b;

    for (let i = 1; i <= n - 1; i++) {
        result = b * result;
    }

    return result;
}

//question 16: Write a JavaScript function to extract unique characters from a string
function uniqueChar(str) {

    let result = [...str].reduce((acc, curr) => {
        if (acc.includes(curr)) {
            return acc;
        }
        else {
            return acc + curr;
        }
        return acc;
    }, "")

    return result;
}


//question 17: Write a JavaScript function to get the number of occurrences of each letter in specified string
function charCounter(str) {
    str = str.replace(/[\W_]/g, "");

    let result = [...str].reduce((total, curVal) => {
        if (total[curVal]) {
            total[curVal]++;
        }
        else {
            total[curVal] = 1;
        }
        return total;
    }, {});

    return result;
}

//question 18: Write a function for searching JavaScript arrays with a binary search.
function binarySearch(arr, value) {
    let firstIdx = 0;
    let lastIdx = arr.length - 1;
    let midIdx = Math.floor((firstIdx + lastIdx) / 2);

    while (firstIdx < lastIdx) {
        if (value < arr[midIdx]) {
            lastIdx = midIdx - 1;
        }
        else if (value > arr[midIdx]) {
            firstIdx = midIdx + 1;
        }
        else {
            return midIdx;
        }
    }
}


//question 19: Write a JavaScript function that returns array elements larger than a number.
function returnLarge(arr, num) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }

    return result;
}


//question 20: Write a JavaScript function that generates a string id (specified length) of random characters
function randomChar(num) {

    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < num; i++) {
        let idx = Math.floor(Math.random() * charList.length);
        result = result + charList[idx];
    }

    return result;
}

//question 21: Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array
function findSubset(arr, num) {
    // let totalPoss = Math.pow(2, num);
    // let result = [];

    // for(let i = 0; i < totalPoss; i++){

    // }
    //unsolved


    

}

//question 22: Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function letterCounter(str, char) {
    str = [...str];

    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (char === str[i]) {
            counter++;
        }
    }

    return counter;
}

//question 23: Write a JavaScript function to find the first not repeated character.
function firstNonRepChar(str){

    for(let i = 0; i < str.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            return str[i];
        }
    }

}


//question 24: Write a JavaScript function to apply Bubble Sort algorithm. 
function bubbleSort(arr) {
    let temp = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] < arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;
}

//question 25: Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
function longestName(arr) {
    let longest = arr[0];
    for (let country of arr) {
        if (country.length > longest.length) {
            longest = country;
        }
    }

    return longest;
}

//question 26: Write a JavaScript function to find longest substring in a given a string without repeating characters
function longestSubstr(){
    //unsolved
}



//question 27: Write a JavaScript function that returns the longest palindrome in a given string.
function longestPalindrome(){
    //unsolved
}




//question 28: Write a JavaScript program to pass a 'JavaScript function' as parameter
function hello() {
    console.log("Hello");
}

function twice(func) {
    func();
    func();
}

twice(hello);

//question 29: Write a JavaScript function to get the function name
function getName() {
    let funcName = getName.name;

    return funcName
}