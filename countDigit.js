/*
write a function that returns the count of digits in a number
let num = 259;
O/P = 3
*/
let num = -259;
function countDigit(num) {
    if(num == 0) return 1;
    num = Math.abs(num);
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

let res = countDigit(num);
console.log(res);