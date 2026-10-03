// factorial of n using recursion
let n = 5;
function factorial(n) {
    if(n == 1) return 1;
    return n * factorial(n - 1);
}

let res = factorial(n);
console.log(res);