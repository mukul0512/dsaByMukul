let num = 121;
function isPalindrome(num) {
    let numCopy = num;
    let rev = 0;
    while (num > 0) {
        let lastDigit = Math.floor(num % 10);
        rev = (10 * rev) + lastDigit;
        num = Math.floor(num / 10);
    }
    return (rev == numCopy);
}

let res = isPalindrome(num);
console.log(res);