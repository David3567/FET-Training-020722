//const x = 32243;
function solution1ReverseANum(num) {
  let absstr1 = Math.abs(num);
  let str1 = absstr1.toString();
  //console.log("str1 is " + str1);
  let splitString = str1.split("");
  let reverseStr = splitString.reverse();
  let joinArr = reverseStr.join("");
  let res = parseInt(joinArr);
  //console.log(res);
  return res;
}
//solution1ReverseANum(-2345);

function solution2CheckPalindrome(str) {
  let chars = str.split("");
  let l = 0;
  let r = chars.length - 1;
  //console.log("here l is "+ l + "r is " + r);
  while (l < r) {
    if (chars[l] !== chars[r]) {
      // console.log("here l is "+ l + " r is " + r);
      return false;
    }
    l++;
    r--;
    console.log("l is " + l + " r is " + r);
  }
  console.log("This string is palindrome: " + "true");
  return true;
}
// solution2CheckPalindrome("123241");

function solution3GenerateAllCombinations(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      res.push(str.slice(i, j));
    }
  }

  return res;
}
// console.log(solution3GenerateAllCombinations("abc"));

function solution4AlphabeticalOrder(str) {
  return str.split("").sort().join("").toString();
}
// console.log(solution4AlphabeticalOrder("webmaster"));

function solution5WordFirstLetterUpperCase(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}
// console.log(solution5WordFirstLetterUpperCase("the quick brown fox"));

function solution6LonggestWordInString(str) {
  const strsplit = str.split(" ");
  let max = 0;
  for (let i = 0; i < strsplit.length; i++) {
    if (strsplit[i].length > max) {
      max = strsplit[i].length;
    }
  }
  return max;
}
// console.log(solution6LonggestWordInString('Web Dpment Tutoria'));

function solution7CountVolwes(str) {
  let strsplit = str.toLowerCase().split("");
  // console.log(strsplit);
  let count = 0;
  for (let i = 0; i < strsplit.length - 1; i++) {
    if (
      strsplit[i] == "a" ||
      strsplit[i] == "e" ||
      strsplit[i] == "i" ||
      strsplit[i] == "o" ||
      strsplit[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}
// console.log(solution7CountVolwes("The quick brown fox"));

function solution8CheckPrimeNum(num) {
  isPrime = true;
  if (num < 2) {
    console.log("This number is not a prime number");
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  }
}
//console.log(solution8CheckPrimeNum(9));

/**
 * 9. Write a JavaScript function which accepts an argument and
 *  returns the type. 
Note: There are six possible values that typeof returns: 
object, boolean, function, number, string,
and undefined
 */

function solution9ReturnType(arg) {
  return typeof arg;
}
// console.log(solution9ReturnType(function () {}));

//Write a JavaScript function which returns the n rows by n columns identity matrix.
function solution10ReturnNbyNMatrix(n) {
  let i;
  let j;

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i === j) {
        console.log(" 1 ");
      } else {
        console.log(" 0 ");
      }
    }
    console.log("----------");
  }
}
// solution10ReturnNbyNMatrix(4);

function solution11(arr) {
  arr.sort((a, b) => a - b);
  let res = [];
  res.push(arr[1]);
  res.push(arr[arr.length - 2]);
  return res;
}
// console.log(solution11([5,4,3,2,1]));

function solution12PerfectNumber(n) {
  let arr = [];
  let sum = 0;
  let arrsum = 0;
  for (let i = 0; i < n; i++) {
    if (n % i == 0) {
      arr.push(i);
      sum += i;
    }
  }
  arr.push(n);
  for (let i = 0; i < arr.length; i++) {
    arrsum += arr[i];
  }
  let avg = arrsum / 2;
  if (sum === n && avg === n) {
    console.log(n + " is a perfect number");
  } else {
    console.log(n + " not a perfect number");
  }
}
// solution12PerfectNumber(8);

function solution13FactorOfPostiveNum(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
// console.log(solution13FactorOfPostiveNum(423));

//need to re-do
function solution14ConvertAmouttoCoins(num, arr) {
  if (num === 0 || num < 0) return 0;

  let result = [];
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < Math.floor(amount / coins[i]); j++)
      result.push(coins[i]);
    amount %= coins[i];
  }
  return result;
}

// console.log(solution14ConvertAmouttoCoins(56, [25, 10, 55, 2, 1]));

function solution15Valueofbn(b, n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= b;
  }
  return res;
}

// console.log(solution15Valueofbn(2,4));

function solution16UniqueCharsFromString(str) {
    let sets = new Set(str.split(""));
    console.log(sets);
    let res = [...sets].join("");
    return res.toString();
}
// console.log(solution16UniqueCharsFromString('thequickbrownfoxjumpsoverthelazydog'));



function solution17(){}
function solution18(){}
function solution19(){}
function solution20(){}
function solution21(){}
function solution22(){}
function solution23(){}
function solution24(){}
function solution25(){}
function solution26(){}
function solution27(){}
function solution28(){}
function solution29(){}