//Question 1
const x = 32243;
const tempArray = x.toString().split('').reverse().join('');
console.log (tempArray);

//Question 2
let palindrome = '';
palindrome = 'uifahwkjsdnviuerhf';

function checkPalindrome (palindrome)
{
  const palindromes = palindrome.toLowerCase(); 
  let reversed = '';
  
  for (let i = palindromes.length - 1; i >= 0; i--)
  {
  	reversed += palindromes[i];
  }
  
  if (reversed === palindromes)
  {
    return console.log ('Palindrome.');
  }
  
  else 
  {
    return console.log ('Not a palindrome'); 
  }
}

checkPalindrome(palindrome);

//Question 3

//Question 4
let str = '';
str = 'webmaster';

const abcStr = str.split('').sort().join();
console.log (abcStr);

//Question 5
let str = '';
str = 'hello my name';

function Capitalize (string)
{
	const array = string.split(' ');
  let firstChar = '';
  let finalStr = '';
  array.forEach (function (element)
  {
  	firstChar = element[0].toString().toUpperCase();
    finalStr += `${firstChar}${element.substring(1, element.length)} `;
  })
  return console.log(finalStr);
}

Capitalize (str);

//Question 6
//Find the longest word within the string 

let string = '';
string = 'Fifteen Fifteen Ten';

function longestString(string)
{
	const array = string.split(' ');
  let longestWord = '';
  let eleLength = 2;
  let longestEle = 5;
  array.forEach (function (element)
  {
  	eleLength = element.length;
    if (eleLength >= longestEle) 
    {
    	longestWord = element; 
      longestEle = element.length;
    }
  })
  
  return console.log(longestWord);
}

longestString(string);

