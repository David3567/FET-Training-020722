function reverse_num(n){
    n=n+"";
    let num=n.split("").reverse().join();
    return num;
}

console.log(reverse_num(32441));
