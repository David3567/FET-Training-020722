// Question 1


/* 1. convert to string
2. split the string
3. reverse the characters
4. join the characters
5. convert to number (float)
6. multiply by the sign on original number */


function reverseNumber (num) {
    return (
        parseFloat (
            num
            .tostring()
            .split('')
            .reverse()
            .join('')
        ) *Math.sign(num)
    )
}

console.log(reverseNumber(34589))


// Question 2


/* 1. create regular expression to replace anything other than A-Z, a-z, 0-9 with ''
2. convert to lower case and replace
3. reverse the string
4. compare
 */

function checkPalindrome (str) {

    var re = /[^A-Za-z0-9]/g;
    var lowerCaseStr = str.toLowerCase().replace(re, '');
    var reversedStr = lowerCaseStr.split('').reverse().join('');

    return reversedStr === lowerCaseStr;
}

console.log(poop)


// Question 3

/*

*/

function strCombinations (str) {
    let allCombinations = [];

    for (let i=0; i<str.length; i++) {
        for (let j=i+1; j<str.length+1; j++) {
            allCombinations.push( str.slice(i, j) )
        }
    }
    
    return allCombinations;
}

console.log(strCombinations('Kamil'))


// Question 4

/*

*/

function sortAlphabetically (str) {
    
    return str.toLowerCase().split('').sort().join('')    
}

console.log(sortAlphabetically('Kamil'))

// Question 5

/*

*/


function upperCaseLetter(str) {

    const wordsArray = str.split(' ')

    for (let i=0; i<wordsArray.length; i++) {
        wordsArray[i] = wordsArray[i].at(0).toUpperCase() + wordsArray[i].substr(1)
    }

    return wordsArray.join(' ')
}

console.log(upperCaseLetter('my name is Kamil'))


// Question 6

/* 

 */

function longestWord(str) {

    const wordsArray = str.split(' ');
    let longestLength = 0;
    let longestIndex = 0;

    for (let i=0; i<wordsArray.length; i++) {       

        if (wordsArray[i].length > longestLength) {
            longestIndex = i
            longestLength = wordsArray[i].length
        }
    }

    return wordsArray[longestIndex]
}

console.log(longestWord('my name is Kamil kkkkkkkkkkaf ffffffffffffffffffffff'))


// Question 7


function vowelCount (str) {
    return str.match(/[aeiou]/gi).length
}

console.log(vowelCount('kamil'))


// Question 8

function isPrimeNumber (num) {
    for (let i=2; i<=Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1
}

console.log(isPrimeNumber(5))


// Question 9

function returnType (input) {
    return typeof(input)
}

console.log(returnType(10))

// Question 10 *********************

function identityMatrix (n) {
    let twoDMatrix = [];
    let oneDmatrix = [];

    for (let i=0; i<n; i++) {
        oneDmatrix.push(0)
    }

    for (let i=0; i<n; i++) {
        twoDMatrix.push(oneDmatrix);
        twoDMatrix[i].at(i) = 1; n
    }

    return twoDMatrix
}

console.log(identityMatrix(3))


// Question 11

function secondMost (arr) {
    let first = arr[0], second;

    if (arr.length === 1) {
        return (console.log('There is no second largest'))
    }

    for (let i=1; i<arr.length; i++) {
        if (arr[i] > first) {
       		second = first;
            first = arr[i];
        }

        else if (arr[i] != first && arr[i] > second) {
            second = arr[i];
        }
    }
    
    return second;
}

console.log(secondMost([1,2,7,4,0]))
