// print n --- to ---------1 using recursion
let n = 5;
function printNtoOne(n) {
    if (n < 1) return;
    console.log(n);
    printNtoOne(--n);
}

let res = printNtoOne(n);
console.log(res);