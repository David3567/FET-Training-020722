/* JS Homework */
// #1
function reverseNumber(n){
	n = n + "";
	return n.split("").reverse().join("");
}

//#2
function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
  }

//#3
let stringCombinations = (str) => {
    let strLength = str.length;
    let result = [];
    let currentIndex = 0;
    while (currentIndex < strLength) {
      let char = str.charAt(currentIndex);
      let x;
      let arrTemp = [char];
      for (x in result) {
        arrTemp.push("" + result[x] + char);
      }
      result = result.concat(arrTemp);
      currentIndex++;
    }
    return result;
  };

//#4
function alphabet_order(str){
    return str.split('').sort().join('');
}

//#5
function uppercase(str){
  var array1 = str.split(' ');
  var newarray1 = [];
    
    for(var x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
return newarray1.join(' ');
}
console.log(uppercase());

//#6
function find_longest_word(str){
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++){
    if(result.length < array1[x].length){
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word());

//#7
function vowel_count(str1){
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++){
    if (vowel_list.indexOf(str1[x]) !== -1){
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count());

//#8
function testPrime(n)  {
    if (n===1){
        return false;
    } else if(n === 2)  {
        return true;
        } else  {
            for(var x = 2; x < n; x++)  {
                if(n % x === 0) {
                    return false;
                }
            }
    return true;  
    }
}
console.log(testPrime());

//#9
function dataType(value)    {
    var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
    if (typeof value === "object" || typeof value === "function") {
        for (x = 0, len = dtypes.length; x < len; x++)  {
                if (value instanceof dtypes[x]) {
                    return dtypes[x];
                }
        }
        }
        
        return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type());
console.log(detect_data_type(false));

//#10
function matrix(n) {

    var i;
    var j;

    for (i=0; i < n; i++)
    {
      for (j=0; j < n; j++)
      {
           if (i === j)
           {
            
             console.log(' 1 ');
           }
                  
           else 
            {
             console.log(' 0 ');}
            }
         console.log('----------');
       }
   }
matrix(4);

//#11
function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));

//#12
function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("perfect number");
        } 
     else
        {
       console.log("imperfect");
        }   
 } 
is_perfect(28); 

//#13
function factors(n)
{
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
     return x - y;});  
     return num_factors;
    }
console.log(factors());  


//#14
function amountToCoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountToCoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountToCoins(amount, coins);
        }
    }
} 
console.log(amountToCoins());

//#15
function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
console.log(exp(2, 3));

//#16
function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

//#17
function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
    return uchars;
    }
    console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

//#18
function array_binarySearch(narray, delement) {
    var mposition = Math.floor(narray.length / 2);
 
    if (narray[mposition] === delement){
       return mposition;
    }
    else if (narray.length === 1) 
    {
       return null;
    }
    else if (narray[mposition] < delement) {
       var arr = narray.slice(mposition + 1);
       var res = array_binarySearch(arr, delement);
       if (res === null)
       {
          return null;
       }
       else {
          return mposition + 1 + res;
       }
    }
    else {
       var arr1 = narray.slice(0, mposition);
       return array_binarySearch(arr1, delement);
    }
 }
 
  var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
  console.log(array_binarySearch(myArray, 6));

  //#19
  function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);

//#20
function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));

//#21
function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

console.log(subset([1, 2, 3], 2));

//#22
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count());

//#23
function find_FirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
   
    for (var x = 0; x < arra1.length; x++) {
      ctr = 0;
   
      for (var y = 0; y < arra1.length; y++) 
      {
        if (arra1[x] === arra1[y]) {
          ctr+= 1;
        }
      }
   
      if (ctr < 2) {
        result = arra1[x];
        break;
      }
    }
    return result;
  }
  console.log(find_FirstNotRepeatedChar('abacddbec'));

  //#24
  function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//#25
function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

//#26
function longest_substring_without_repeating_characters(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
    curr_char = chars[i];
    if (!hash[chars[i]]) 
    { 
    str += curr_char; 
    hash[chars[i]] = {index:i};
    }
    else 
    {
    if(longest_string.length <= str.length)
    {
    longest_string = str;
    }
    var prev_dupeIndex = hash[curr_char].index;
    var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
    str = str_FromPrevDupe + curr_char;
    hash = {};
    for (var j = prev_dupeIndex + 1; j <= i; j++) {
    hash[input.charAt(j)] = {index:j};
    }
    }
    }
    return longest_string.length > str.length ? longest_string : str;
    }
    console.log(longest_substring_without_repeating_characters("google.com")); 
    
    console.log(longest_substring_without_repeating_characters("example.com")); 

    //#27
    function is_Palindrome(str1) {
        var rev = str1.split("").reverse().join("");
        return str1 == rev;
        }
        
        function longest_palindrome(str1){
        
        var max_length = 0,
        maxp = '';
        
        for(var i=0; i < str1.length; i++) 
        {
        var subs = str1.substr(i, str1.length);
        
        for(var j=subs.length; j>=0; j--) 
        {
        var sub_subs_str = subs.substr(0, j);
        if (sub_subs_str.length <= 1)
        continue;
        
        if (is_Palindrome(sub_subs_str))
        {
        if (sub_subs_str.length > max_length) 
        {
        max_length = sub_subs_str.length;
        maxp = sub_subs_str;
        }
        }
        }
        }
        
        return maxp;
        }
        console.log(longest_palindrome("abracadabra"));
        
        console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));

//#28
function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);

//#29
function abc() {
    console.log( arguments.callee.name );
}

abc();