let x = 123;
function reverseInteger(x) {
    x = Math.abs(x);
    let xCopy = x;
    let rev = 0;
    while (x > 0) {
        let lastDigit = x % 10;
        rev = (10 * rev) + lastDigit;
        x = Math.floor(x / 10);
    }
    let limit = Math.pow(2, 31);
    if (rev < -limit || rev > limit) return 0;
    return (xCopy < 0) ? -rev : rev;
}

let res = reverseInteger(x);
console.log(res);