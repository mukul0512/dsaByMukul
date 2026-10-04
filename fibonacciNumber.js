// 509. Fibonacci Number
let n = 4;
function fib(n) {
    // if (n == 0) {
    //     return 0;
    // }
    // else if (n == 1) {
    //     return 1;
    // }
    if(n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

let res = fib(n);
console.log(res);