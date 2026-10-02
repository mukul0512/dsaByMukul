// print 1 --- to ---------n using recursion
let n = 5;
function printOnetoN(x) {
    if(x > n) return;
    console.log(x);
    printOnetoN(++x);
}

let res = printOnetoN(1);
console.log(res);