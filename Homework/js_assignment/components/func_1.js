const num = [3, 2, 2, 4, 3];

function reverse () {
    const reverseNums = num.reverse();
    return reverseNums.join('');
}

console.log(reverse());
