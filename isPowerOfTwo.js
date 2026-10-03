// Power of two
let n = 16;
function isPowerOfTwo(n) {
    let isEven = n % 2 == 0;
    if (n == 1) {
        return true;
    }
    else if (n < 1 || !isEven) {
        return false;
    }
    return isPowerOfTwo(n / 2);
}

let res = isPowerOfTwo(n);
console.log(res);