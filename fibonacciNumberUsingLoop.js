// 509. Fibonacci Number
let n = 4;
function fib(n) {
    let fibOfFirst = 0;
    let fibOfSecond = 1;
    for (let i = 2; i <= n; i++) {
        let fibOfN = fibOfFirst + fibOfSecond;
        fibOfFirst = fibOfSecond;
        fibOfSecond = fibOfN;
    }
    return (n == 0) ? fibOfFirst : fibOfSecond;
}

let res = fib(n);
console.log(res);