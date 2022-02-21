// 1. reverse Number
let x = 32243
const reverseNum = (num) => num.toString().split('').reverse().join('')
console.log(reverseNum(x))

// 2.  check passed string is palindrome or not
const isPalindrome = (str) => str.split('').reverse().join('').toString() === str
console.log(isPalindrome('nurses'))
console.log(isPalindrome('madam'))

// 3. give string generates all combinations of a string
const combinations = (str) => {
    const comblist = [];
    for (i = 0; i < str.length; i ++) {
        for (l = i + 1; l < str.length + 1; l++ ) {
            comblist.push(str.slice(i, l));
        }
    }
    return comblist
}
console.log(combinations('dog'));

// 4. write a js function that returns a passed string with letters in alphabetical order
const sorted = (str) => str.split('').sort().join('')
console.log(sorted('webmaster'))

// 5. write a js function that acepts a string as a parameter and converts the first letter of each word of the string in upper case
const upper = (str) => {
    const result = []
    str.split(' ').forEach(element => {
        result.push(element.charAt(0).toUpperCase() + element.slice(1));
    });
    return result.join(' ');}
console.log(upper('the quick brown fox'))

// 6. write a js function that accepts a string as a parameter and find the longest word within the string
const longest = (str) => str.split(' ').reduce((a, b) => a.length > b.length ? a : b)
console.log(longest('Web Development Tutorial'))

// 7. write a js function that accepts a string as a parameter and counts the number of vowels within the string

function count_vowel (str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels.includes(char.toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(count_vowel('The quick brown fox'))

// 8. write a js function that accepts a number as a parameter and check the number is prime or not.
function find_prime (num) {
    if (num > 1) {
        for (let i = 2; i < num; i ++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(find_prime(6))

// 9. write a js function which accepts an argument and returns the type
const get_type = (arg) => typeof arg;
let a = 'string';
console.log(get_type(a));

// 10. write a js function which return the n rows by n columns identity martrix
// const martix = (num) => Array(num).fill(Array(num))
const martix = (num) => Array(num).fill().map(() => Array(num).fill())
console.log(martix(4));

// 11. write a js function which will take an array of numbers stored and find the second lowest and second greatest numbers, repectively
function find_num (list) {
    const num_set = new Set()
    const sorted = list.sort((a, b) => a - b).forEach(elem => {
        num_set.add(elem)
    })
    const num_result = []
    num_set.forEach(elem => num_result.push(elem))
    return [num_result[1], num_result[num_result.length - 2]].join(',')
}
console.log(find_num([1,2,6,8,10,3,4,5]))

// 12. perfect number
function isPerfectNum (num) {
    let temp = 0;
    for (let i = 1; i <= num/2; i ++) {
        if (num%i === 0) {
            temp += i;
        }
    }

    if (temp === num && temp != 0) {
        console.log("Its a perfect number")
    }
    else {
        console.log("It is not a perfect number")
    }
}
console.log(isPerfectNum(28))

// 13. compute the factors of a positive integer
function factors(num) {
    var num_factors = [], i;
 
    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
    if (n % i === 0)
    {
    num_factors.push(i);
    if (n / i !== i)
        num_factors.push(n / i);
    }
    num_factors.sort(function(x, y)
    {
        return x - y;});  // numeric sort
    return num_factors;
    
}

//14. convert an amount to coins
function amountTocoins (total, coins) {
    if (total === 0 ) {
        return [];
    }
    else {
        if (total >= coins[0]) {
            left = total - coins[0];
            return [coins[0]].concat(amountTocoins(left, coins));
        }
        else {
            coins.shift();
            return amountTocoins(total, coins);
        }
    }
}
console.log(amountTocoins(46, [25, 10, 5, 2,1]))

// 15. compute the value of bn where n is exponent and b is the bases. Accept b and n from the user and display the result.

const exp = (b, n) => {
    let ans = 1;
    for (let i = 1; i <= n; i ++) {
        ans = ans * i;
    }
    return ans;
}
console.log(exp(2,3))

// 16. extract unique characters from a string
function extract (str) {
    const uniq = new Set();
    str.split('').forEach(elem => uniq.add(elem));
    return Array.from(uniq).join('');
}

console.log(extract('thequickbrownfoxjumpsoverthelazydog'))

// 17. get number of occureences of each letter in specified string
function get_letter_num (str) {
    if (str.length === 0) {
        console.log("empty string")
        return;
    }
    else {
        let ans = new Map();
        for (let i = 0; i < str.length; i ++) {
            if (!ans.has(str[i])) {
                ans.set(str[i], 1);    
            }
            else {
                ans.set(str[i], ans.get(str[i]) + 1 )    
            }
        }

        
        for ( let [key, value] of ans) {
            console.log(`${key} occurs ${value} times`)
        }
        
    }
}

console.log(get_letter_num("helloworld"))

// 18. binary search
function binary_search (arr, target) {
    let start = 0, end = arr.length - 1;

    while ( start <= end) {
        let mid = math.floor((start + end) / 2);

        if (arr[mid] === target) return true;
        
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    return false;

}

// 19. return array elements larger than a number
let filter = (arr, target) => arr.filter(n => n > target);

let filter2 = (arr, target) => {
    return arr.reduce((acc, curr) => {
        if (curr > target) {
            return acc.concat(curr);
        }
        else {
            return acc;
        }
    }, [])
}

console.log(filter([65, 16, 0, 6, 64, 1, 68], 16));
console.log(filter2([65, 16, 0, 6, 64, 1, 68], 16))

// 20. generates a string id of random characters
const id_generator = (num) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < num; i ++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

console.log(id_generator(6));

// 21. get all possible subset with fixed length combiantions in an array
function get_subsets(arr, len) {
    let fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    for (var i = len; i < a.length; i++) {
        fn(i, arr, [], all);
    }
    all.push(a);
    return all;
}

console.log(get_subsets([1, 2, 3], 2))

// 22. accepts two arguments a string and a letter and the function will count the number of occurrences of the specified letter within the string
function count_str(str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i ++) {
        if (str.charAt(i) === char) count ++;
    }

    return count;
}

console.log(count_str('microsoft.com', 'o'))

// 23. find the first not repeated character
function find_notrepeated_char(str) {
    let result = '';
    let count = 0;
    for ( i = 0; i < str.length; i ++) {
        count = 0;
        for (l = 0; l < str.length; l ++) {
            if (str.charAt(i) === str.charAt(l)) count++;
        }

        if (count < 2) {
            result = str.charAt(i);
            break;
        }
    }
    return result;
}

console.log(find_notrepeated_char('abacddbec'))

// 24. apply bubble sort algorithm
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

// 25. accept a list of country names as input and returns the longest country name as output
const find_longest_country_name = (arr) => {
    return arr.reduce((longest, country) => {
        return longest.length > country.length ? longest : country}, "")
}

console.log(find_longest_country_name(['Australia', 'Germany', 'United States of America']))

// 26. find longest substring in a given a string without repeating characters

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
const longestPalindrome = function (s) {
    if (!s) return '';
    const res = [];
    const isPalindrome = function (i, j, s) {
        const a = s.slice(i, j + 1);
        let [x, y] = [0, a.length - 1];
        while (x <= y) {
            if (a[x] !== a[y]) return false;
            x++;
            y--;
        }
        return true;
    }
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        let j = s.length - 1;
        while (i <= j) {
            if (j - i < max) break;

            if (s[j] === s[i] && isPalindrome(i, j, s)) {
                const a = s.slice(i, j + 1);
                max = Math.max(max, a.length);
                res.push(s.slice(i, j + 1));
                break;
            }
            j--;
        }
    }
    //console.log(res);
    res.sort((a, b) => b.length - a.length);
    return res[0];
};
// ~test~
const str = "anaanas";
console.log(longestPalindrome(str));

// 28. pass a js function as parameter

function sayBoo() {
    console.log('boo');
    return function() {
        console.log('Argh!')
    }
}

setTimeout(sayBoo(), 1000)

function add_num (callback, num) {
    return callback(num)
}
const helper = (num) => num + 20

console.log(add_num(helper, 10))

// 29. write a js function to get the function name
function getName(fun) {
    //return arguments.callee.name;
    return fun.name;
}

function foo() { }
const far = foo;
console.log(getName(far));