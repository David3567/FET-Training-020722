/*
1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223 
*/
function reverse(num) {
    let result = 0;
    while (num > 0) {
      result = result * 10 + (num % 10);
      num = ~~(num / 10);
    }
    return result;
  }
  console.log("======================");
  console.log('1. Reverse number of 32243 is:', reverse(32243));
  /*
  2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
  A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
   madam or nurses run.
  */
  function palindrome(str) {
    str = str.replace(/ /g,'')
    for (let i = 0; i < str.length; i++) {
        if(str.at(i) !== str.at(str.length-1-i)){
            return false;
        }
    }
    return true;
  }
  console.log("======================");
  let pali = "nurses run"
  console.log('2. Is this string',pali, 'palindrome', palindrome(pali)); 
  /*

  /*
  3. Write a JavaScript function that generates all combinations of a string. 
  Example string: 'dog' 
  Expected Output: d, do, dog, o, og, g 
  */
function generate(str){
    const com = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < str.length+1; j++) {
            if(str.slice(i,j)!=='')
            com.push(str.slice(i,j));
        }     
    }
    return com;
 }
 
 console.log("======================");
 console.log('3. Generates all combinations of a string', generate("dog")); 
  /*
  
  4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
  Example string: 'webmaster' 
  Expected Output: 'abeemrstw'
  Assume punctuation and numbers symbols are not included in the passed string.
  
  */ 
 function stringAlphabet(str){
    // split> sort > join
    return str.split('').sort().join('')
 }
 console.log("======================");
 console.log("4. ",stringAlphabet("webmaster"));
  /*
  
  5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of 
  each word of the string in upper case. 
  Example string: 'the quick brown fox' 
  Expected Output: 'The Quick Brown Fox '
  
   */ 
  function upperFirstLeter(str){
      let arr = str.split('');
      arr[0] = arr[0].toUpperCase();
      for (let i = 0; i < arr.length; i++) {
          if(arr[i]===' ' && i <arr.length-1){
            arr[i+1] = arr[i+1].toUpperCase(); 
          }
      }
    return arr.join('');
  }
  console.log("======================");
  console.log("5. ",upperFirstLeter("the quick brown fox "));
  /*
  
  6. Write a JavaScript function that accepts a string as a parameter and find 
  the longest word within the string. 
  Example string: 'Web Development Tutorial' 
  Expected Output: 'Development'
  
   */ 
  function longestString(str){
      let arr = str.split('');
      let start = 0;
      let end = 0;
      for (let i = 0; i < arr.length; i++) {
          if(arr[i]===' ' && (i-end) > (end-start)){
               start = end;
               end = i;
          } 
      }
      return arr.slice(start+1,end).join('');
  }
  console.log("======================");
  console.log("6. ",longestString("Web Development Tutorial"));
  /*
  
  7. Write a JavaScript function that accepts a string as a parameter and counts the 
  number of vowels within the string. 
  Note: As the letter 'y' can be regarded as both a vowel and a 
  consonant, we do not count 'y' as vowel here. 
  Example string: 'The quick brown fox' 
  Expected Output: 5

   */
function countVowels(str){
    const vowel = "aeiou".split('');
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if(str[i] === vowel[j]){
                count++;
            };
        }
    }
    return count;
}
const map = new Map();
map.set('a',1);
map.set('e',1);
map.set('i',1);
map.set('o',1);
map.set('u',1);
function vowelCountMap(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(map.has(str[i])){
            count++;
        }   
    }
    return count;
}
console.log("======================");
console.log("7. ",countVowels("The quick brown fox"));
console.log("7. ",vowelCountMap("The quick brown fox"));
  /*

  8. Write a JavaScript function that accepts a number as a parameter and 
  check the number is prime or not. 
  Note: A prime number (or a prime) is a natural number greater than 
  1 that has no positive divisors other than 1 and itself.
  
   */ 
  function prime(num){
    if(num === 1){return true}
    else if(num > 1){
        for (let i = 2; i < num; i++) {
            if(num % i === 0){
                return false;
            }         
        }
    }else{return false;}
    return true;
  }
console.log("======================");
console.log("8. ",prime(-13));
  /*

  9. Write a JavaScript function which accepts an argument and returns the type. 
  Note: There are six possible values that typeof returns: object, boolean, 
  function, number, string, and undefined.
  
   */ 
  function type(input){
      return typeof(input)
  }
console.log("======================");
console.log("9. ",type({}));
  /*

  10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
  3 1 0 0
    0 1 0
    0 0 1
*/ 
function identiyMatrix(n){
    const mt = [];
    for (let row = 0; row < n; row++) {
        const rows = [];
        for (let column = 0; column < n; column++) {
            if(row === column)rows.push(1);
            else{
            rows.push(0)}
        }
        mt.push(rows);    
    }
    return mt;
}
console.log("======================");
console.log("10. ",identiyMatrix(3));
/*

  11. Write a JavaScript function which will take an array of numbers stored and 
  find the second lowest and second greatest numbers, respectively. 
  Sample array: [1,2,3,4,5]
  Expected Output: 2,4 

*/
function second_lowest_greatest(arr) {
    arr.sort();
    var resutl = [];
    if(arr.length>2){
    resutl.push(arr[1]);
    resutl.push(arr[arr.length-2]);}
    return resutl;
}
console.log("======================");
console.log("11. ",second_lowest_greatest([1,4,5,2,3]));
/*
12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer 
that is equal to the sum of its proper positive divisors, that is, the sum of its
 positive divisors excluding the number itself (also known as its aliquot sum). 
 Equivalently, a perfect number is a number that is half the sum of all of its 
 positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3
 are its proper positive divisors, and 1 + 2 + 3 = 6. 
 Equivalently, the number 6 is equal to half the sum of all 
 its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number 
 is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

   */ 
 function perfectNumber(num){
    let sum = num;
    for (let i = 1; i < num; i++) {
        if(num % i === 0){
            sum += i;
        }    
    }
    if(~~(sum/2)===num && sum % num === 0){
        return true;
    }else{
        return false;
    }
 } 
 console.log("======================");
console.log("12. ",perfectNumber(496));
 /*
 
13. Write a JavaScript function to compute the factors of a positive integer. 

   */ 
  function factorOfNumber(num){
    let arr = [];
    for (let i = 1; i < num; i++) {
        if(num % i === 0){
            arr.push(i)
        }    
    }
    arr.push(num);
    return arr;
  }
  console.log("======================");
console.log("13. ",factorOfNumber(15));
  /*
 
14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1

   */
function amountTocoins(amount,coins){
    let arr = [];
    for (let i = 0; i < coins.length; i++) {
        while(amount >= coins[i]){
            amount -= coins[i];
            arr.push(coins[i]);  
        }
    }
    return arr
}  
console.log("======================");
console.log("14. ",amountTocoins(47,[25, 10, 5, 2, 1]));
/*
 
15. Write a JavaScript function to compute the value of bn where n is the 
exponent and b is the bases. Accept b and n from the user and display the result. 

   */ 
function exponent(b, n){
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *=b;
    }
    return result;
}  
function exR(b, n){
    return [...Array(n)].map(x=>b).reduce((acc, cur)=>{
        return acc *=cur;
    },1)
}
console.log("======================");
console.log("15R. ",exponent(2,3));
console.log("15. ",exponent(2,3));

/*
 
16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"

   */ 
const alphabetical = new Map();
function uniqueChar(str){
    // at to key then conver key to string
    const arr = str.split('');
    for (let i = 0; i < str.length; i++) {
        if(alphabetical.has(str.charAt(i))){
            delete arr[i];
        }else{
            alphabetical.set(str.charAt(i),i); }
    }
    return arr.join('');

    // var str=str;
    // var uniql="";
    // for (var x=0;x < str.length;x++)
    // {
    //     console.log(uniql.indexOf(str.charAt(x)));
    // if(uniql.indexOf(str.charAt(x))==-1)
    //  {
    //     console.log(uniql);
    //  uniql += str[x];  
     
    //   }
    //  }
    //  return uniql; 
}
function uniqueR(str){
    return str.split('').reduce((pre, curele)=>{
        if(pre.indexOf(curele) === -1){
            pre += curele;
        }
        return pre;
    },"")
}
console.log("16. ",uniqueR("thequickbrownfoxjumpsoverthelazydog"));
console.log("======================");
console.log("16. ",uniqueChar("thequickbrownfoxjumpsoverthelazydog"));
/*
 
17. Write a JavaScript function to get the number of occurrences of each letter
 in specified string. 

   */ 
const occurrences = new Map();
function occur(str){
    return str.split('').reduce((arr, ele)=>{
        if(arr.hasOwnProperty(ele)) {arr[ele]++;}
        else{arr[ele] = 1;}
        return arr;
    },
    {}
    )
}
console.log("======================");
console.log("17. ",occur("thequickbrownfoxjumpsoverthelazydog"));
 /*
 
18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and 
smaller chunks until it finds the desired value.

*/ 
function binarySearch(arr, num) {
    let midle = ~~(arr.length/2);
    if(num == arr[midle]){
        return midle;
    }else if(num > arr[midle]){
        return  binarySearch(arr.slice(midle),num) + midle;
    }else{
        return binarySearch(arr.slice(0,midle),num);
    }   
}
console.log("======================");
console.log("18. ",binarySearch([1, 2, 3, 5, 6],2));
/*
 
19. Write a JavaScript function that returns array elements larger than a number. 

*/ 
function largerNumber(arr, num){
    return arr.reduce((acc,ele)=>{
        if(ele>=num){
            acc.push(ele);
        }
        return acc;
    },[]
    )
}
console.log("======================");
console.log("19. ",largerNumber([3,4,6,10,15,16,6],10));
/*
 
20. Write a JavaScript function that generates a string id (specified length) of random characters. 
Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

*/ 
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generateString(len){
    let stringId = '';
    for (let i = 0; i < len; i++) {
        stringId += character.charAt(Math.floor(Math.random()* character.length));     
    }
    
    return stringId;
}
console.log("======================");
console.log("20. ",generateString(5));
/*
 
21. Write a JavaScript function to get all possible subset with 
a fixed length (for example 2) combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]

*/ 

function possibleSubset(arr, len){
    const arrt = [];
    for (let i = 0; i < arr.length; i++) {
        arrt.push(arr.slice(i,len+i))
        console.log(arrt) ;
    }
}
console.log("======================");
// console.log("21. ",possibleSubset([1, 2, 3],2));
/*
 
22. Write a JavaScript function that accepts two arguments,
 a string and a letter and the function will count the number 
 of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' 
Expected output: 3 

   */
function occurrencesCount(str, ch){
    return str.split('').reduce((acc,ele)=>{
        if(ele === ch){
            acc ++;
        }
        return acc;
    },0)
}
console.log("======================");
console.log("22. ",occurrencesCount("microsoft.com", 'o')); 
/*
 
23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' 

   */
const notRepeat = new Map();
function firstNotRepeated(str){
    for (let i = 0; i < str.length; i++) {
        if(notRepeat.has(str.charAt(i))){
            // notRepeat.set(str.charAt(i),(notRepeat.get(str.charAt(i)))++);
            notRepeat.set(str.charAt(i),1);
        }else{
            notRepeat.set(str.charAt(i),0);
        }   
    }
    for (const [key,value] of notRepeat.entries()) {
        if(value === 0){
            return key;
        }
    }
}  
console.log("======================");
console.log("23. ",firstNotRepeated("abacddbec")); 
/*
 
24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, 
is a simple sorting algorithm that works by repeatedly stepping through the list
 to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/
function BubbleSort(arr){
    let swap = 0;
    for (let j = 0; j < arr.length-1; j++) {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] < arr[i+1] && i<arr.length-1){
                swap = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = swap;
            }  
        }    
    }
    return arr;
}
console.log("======================");
console.log("24. ");
console.log(BubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))
 /*

25. Write a JavaScript function that accept a list of country names as input and returns 
the longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"

*/ 
function longestCountryName(arr){
    return arr.reduce((acc, nextcountry)=>{
        if(acc.length < nextcountry.length) acc = nextcountry;
        return acc;
    },[])
}
console.log("======================");
console.log("25. The longest country name: \n",longestCountryName(["Germany", "Australia", "United States of America"]));
/*
 
26. Write a JavaScript function to find longest substring in a given a string without 
repeating characters. 

*/
const longestSub = new Map();
function  longestSubstring(str){
    // const longestSub = [];
    let start = 0, end = 1;
    for (let i = 0; i < str.length; i++) {
        if(longestSub.has(str.charAt(i))){
            console.log(longestSub);
            start = end;
            console.log(start,end);
        }else{
            longestSub.set(str.charAt(i),i);
            end = i;
        }
        
    }
    console.log(start,end);
    return longestSub;
    
}
console.log("======================");
// console.log("26. ",longestSubstring("pwkll"));
/*
 
27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or
longest symmetric factor problem is the problem of finding a maximum-length contiguous
substring of a given string that is also a palindrome. For example, the longest palindromic 
substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to 
be unique; for example, in the string "abracadabra", there is no palindromic substring with
length greater than three, but there are two palindromic substrings with length three, namely,
"aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings
(that is, all substrings that are themselves palindromes and cannot be extended to larger 
palindromic substrings) rather than returning only one substring or returning the maximum 
length of a palindromic substring.

*/
function longestPalindrome(str) {
    const arr = [];
    let end = 1,start = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            let flag = 1;
  
            // Check palindrome
            for (let k = 0; k < (j - i + 1) / 2; k++)
                if (str[i + k] != str[j - k])
                    flag = 0;
  
            // Palindrome
            if (flag!=0 && (j - i + 1) >= end) {
                start = i;
                end = j - i + 1;
                arr.push(str.slice(start,end+start));
            }
        }
        
    }
    // console.log(str.slice(start,end+start));
    const result = [];
    arr.forEach(element => {
        if(element.length === end) result.push(element);
    });
    return result;


}
console.log("======================");
console.log("27. ",longestPalindrome("abracadabra"));
/*
 
28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

   */ 
function callF(callme){
    callme();
}
function parameterF(){
    console.log("Hello, this is the function");
}
console.log("======================");
console.log("28. ");
callF(parameterF);  
/*
 
29. Write a JavaScript function to get the function name. 

   */
function functionName(){
    console.log(functionName.name);
}
console.log("======================");
console.log("29. "); 
functionName();
// console.log(functionName()); 
/*
 
  */
console.log("======================");
console.log("rebuild myReduce ----> 2 args or 1 args");
// // rebuild myReduce ----> 2 args or 1 args
Array.prototype.myReduce = function (callback, initacc){
    let acc = (typeof initacc !== 'undefined') ? initacc : this[0];
    let i =   (typeof initacc !== 'undefined') ? 0 :  1;
    for (; i< this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;
}
const numbers = [175, 50, 25];
console.log('res: with reduce 2 args', numbers.reduce(myFunc,100)); 
console.log('res: with reduce 1 args', numbers.reduce(myFunc)); 
console.log('res: with myreduce 2 args', numbers.myReduce(myFunc,100)); 
console.log('res: with myreduce 1 args', numbers.myReduce(myFunc)); 

function myFunc(total, num) {
    return total - num;
}