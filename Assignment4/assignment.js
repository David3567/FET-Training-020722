/* 1 */
function reverseNum(num) {
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
}
// console.log(reverseNum(32243));

/* 2 */
function isPalindrome(str) {
    let str1 = str.toLowerCase().split(' ').join('');
    let str2 = str1.split('').reverse().join('');
    return str1 === str2 ? `'${str}' is Palindrome` : `${str} is not Palindrome`;
}
// console.log(isPalindrome('Nurses run'));
// console.log(isPalindrome('Madam'));

/* 3 */
function genCombinations(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            res.push(str.substring(i, j));
        }
    }
    return res;
}
// console.log(genCombinations('dog'));

/* 4 */
function sortString(str) {
    let res = str.split('').sort().join('');
    return res
}
// console.log(sortString('webmaster'));

/* 5 */
function convertFirstLetter(str) {
    let res = str.split(' ');
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
    }
    return res.join(' ');
}
// console.log(convertFirstLetter('the quick brown fox'));

/* 6 */
function findLongestWord(str) {
    let res = str.split(' ');
    let llength = 0;
    let index = 0;
    for (let i = 0; i < res.length; i++) {
        if (res[i].length > llength) {
            llength = res[i].length;
            index = i;
        }
    }
    return res[index];
}
// console.log(findLongestWord('Web Development Tutorial'));

/* 7 */
function countVowels(str) {
    let count = 0;
    let str1 = str.toLowerCase();
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == 'a' || str1[i] == 'e' || str1[i] == 'i' || str1[i] == 'o' || str1[i] == 'u') {
            count++;
        }
    }
    return count;
}
// console.log(countVowels('The quick brown fox'));

/* 8 */
function isPrime(num) {
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < num / 2; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime ? `${num} is a prime number` : `${num} is not a prime number`;
}
// console.log(isPrime(2));

/* 9 */
function myTypeof(arg) {
    return typeof arg;
}
// const obj = { name: 'jojo', age: 18 };
// let arg1;
// console.log(myTypeof(function() {}));
// console.log(myTypeof(1));
// console.log(myTypeof('1'));
// console.log(myTypeof(obj));
// console.log(myTypeof(true));
// console.log(myTypeof(arg1));

/* 10 */
function identityMatrix(num) {
    let a = [];
    for (let i = 0; i < num; i++) {
        let b = [];
        for (let j = 0; j < num; j++) {
            if (i === j) {
                b[j] = 1;
            } else {
                b[j] = 0;
            }
        }
        a[i] = b;
    }
    return a;
}
// console.log(identityMatrix(3));

/* 11 */
function findSecond(arr) {
    arr = arr.sort();
    let secMin, secMax;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
            secMin = arr[i];
            break;
        }
    }
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] < arr[arr.length - 1]) {
            secMax = arr[i];
            break;
        }
    }
    return `${secMin}, ${secMax}`;
}
// console.log(findSecond([1, 2, 3, 4, 5]));

/* 12 */
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num ? `${num} is perfect` : `${num} is not perfect`;
}
// console.log(isPerfectNumber(8128));

/* 13 */
function factors(num) {
    let res = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            res.push(i);
        }
    }
    return res;
}
// console.log(factors(15));

/* 14 */
function convertCoins(num, arr) {
    let res = [];
    if (num == 0) {
        return res;
    } else {
        if (num >= arr[0]) {
            res.push(arr[0]);
            num = num - arr[0];
            return res.concat(convertCoins(num, arr));
        } else {
            arr.shift();
            return convertCoins(num, arr);
        }
    }
}
// console.log(convertCoins(46, [25, 10, 5, 2, 1]));

/* 15 */
function calcbn(b, n) {
    return Math.pow(b, n);
}
// console.log(calcbn(2, 3));

/* 16 */
function extracUnique(str) {
    let uniq = '';
    for (let i = 0; i < str.length; i++) {
        if (!uniq.includes(str.charAt(i))) {
            uniq += str.charAt(i);
        }
    }
    return uniq;
}
// console.log(extracUnique('thequickbrownfoxjumpsoverthelazydog'));

/* 17 */
function count_Occ(str) {
    const letter = [];
    for (let i = 0; i < str.length; i++) {
        letter[str[i]] > 0 ? letter[str[i]] += 1 : letter[str[i]] = 1;
    }
    return letter;
}
// console.log(count_Occ('thequickbrownfoxjumpsoverthelazydog'));

/* 18 */
function binarySearch(arr, num) {
    let left = 0,
        right = arr.length - 1,
        mid = Math.floor((left + right) / 2);
    while (arr[mid] != num && left < right) {
        if (num < arr[mid]) {
            right = mid - 1;
        } else if (num > arr[mid]) {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    return (arr[mid] != num) ? `${num} not found.` : `${num} is at index of ${mid}`;
}
// console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 3));

/* 19 */
function myFilter(arr, num) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num)
            res.push(arr[i]);
    }
    return res;
}
// console.log(myFilter([65, 16, 0, 6, 64, 1, 68], 16))

/* 20 */
function genID(num) {
    let res = '';
    let charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < num; i++) {
        res += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return res;
}
// console.log(genID(8));

/* 21 unsolved*/
/* function subset(arr, num) {
    let res = [];
    for (let i = num - 1; i < arr.length; i++) {
        let sub = [];
        for (let j = i - 1; j < arr.length - 1; j++) {
            sub.push(arr[i]);
        }

    }
} */


/* 22 */
function count_Occ_sp(str, chr) {
    const letter = [];
    for (let i = 0; i < str.length; i++) {
        letter[str[i]] > 0 ? letter[str[i]] += 1 : letter[str[i]] = 1;
    }
    return letter[chr] > 0 ? letter[chr] : 0;
}
// console.log(count_Occ_sp('microsoft.com', 'o'));

/* 23 */
function firstNotRepeat(str) {
    let index = -1;
    if (str == null || str.length < 1) {
        return 'none unique character.'
    } else if (str.length === 1) {
        return str[0];
    }
    for (let ch of str) {
        if (str.indexOf(ch) === str.lastIndexOf(ch)) {
            index = str.indexOf(ch);
            break;
        }
    }
    return index >= 0 ? str[index] : 'none unique character.';
}
// console.log(firstNotRepeat('abacddbec'));

/* 24 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/* 25 */
function longestCName(arr) {
    let lenth = 0;
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > length) {
            length = arr[i].length;
            index = i;
        }
    }
    return arr[index];
}
// console.log(longestCName((["Australia", "Germany", "United States of America"])));

/* 26 */
function longestSub(str) {
    let res = '';
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (temp.includes(str[j])) {
                break;
            } else {
                temp += str[j];
            }
        }
        if (res.length < temp.length) {
            res = temp;
        }
        temp = '';
    }
    return res;
}
// console.log(longestSub('example.com'));


/* 27 */
function longestPalindrome(str) {
    let maxlength = 0;
    let res = [];
    for (let i = 0; i < str.length; i++) {
        let sub = str.substring(i);
        for (let j = sub.length; j > 0; j--) {
            let subsub = sub.substring(0, j);
            let subsubrev = subsub.split('').reverse().join('');
            if (subsub === subsubrev) {
                if (subsub.length > maxlength) {
                    maxlength = subsub.length;
                    res = [];
                    res.push(subsub);
                } else if (subsub.length === maxlength) {
                    res.push(subsub);
                }
            }
        }
    }
    return res;
}
// console.log(longestPalindrome('bananas'));
// console.log(longestPalindrome('abracadabra'));
// console.log(longestPalindrome('abc'));


/* 28 */
function passFunction(func) {
    func();
}

function funcal() {
    console.log('Hello');
}

// passFunction(funcal);

/* 29 */
function getFunctionName() {
    return `${arguments.callee.name} is running`;
}
// console.log(getFunctionName());
// console.log(getFunctionName.name);