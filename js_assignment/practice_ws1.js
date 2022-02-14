// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223

function reverse(num) {
    const sign = Math.sign(num);
    const numarr = num.toString().split("");
    const reversed = parseFloat(numarr.reverse().join("")) * sign;

    return reversed;
}

const result = reverse(32243);
console.log(result);


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function palindrome(str) {
    const ori = str;
    console.log(ori);
    const strarr = str.split("");
    const reversed = strarr.reverse().join("");
    console.log(reversed);

    if (ori === reversed) {
        return true;
    }
    else {
        return false;
    }
}

const result = palindrome("cheese");
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

const result = combination("dog");
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

const result = sortStr("webmaster");
console.log(result);


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function capitalize(str) {
    const strarr = str.split(" ");
    const convert = strarr.map(
        function(element) {
            const upper = element.replace(element.charAt(0), element.charAt(0).toUpperCase());
            return upper;
        }
    ).join(" ");

    return convert;
}

const result = capitalize("the quick brown fox");
console.log(result);


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function longWord(str) {
    const strarr = str.split(" ");
    const length = strarr.map(
        function(element) {
            const count = element.length;

            return count;
        }
    );
    const max = Math.max(...length);
    const word = strarr[length.indexOf(max)];

    return word;
}

const result = longWord("Web Development Tutorial");
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

        if (index > 0) {
            count++;
        }
    }

    return count;
}

const result = vowelCount("The quick brown fox");
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

const result = primeNum(13);
console.log(result);